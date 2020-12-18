import MockStorage from './storage.mock'
import { AbstractUserAPIService } from '../user.service'
import { delayedFunction, ErrorBuilder } from './utils';

const ALLOWED_NAME_CHARS = 'zxcvbnmasdfghjklqwertyuiop';
const isAtLeast = (fromDate, years) => {
    const today = new Date();
    const yearsAgo = new Date(today.getFullYear() - years, today.getMonth(), today.getDate())

    return new Date(fromDate).getTime() <= yearsAgo.getTime()
}

export class MockUserAPIService extends AbstractUserAPIService {
    storage = new MockStorage('User')
    auth = new MockStorage('Auth')

    get isLoggedIn() {
        return this.auth.getAll().length > 0
    }

    login = delayedFunction((email, password) => {
        if (this.isLoggedIn) {
            throw new Error('Already logged in.')
        }

        const found = this.storage.getByProperty('email', email)
        if (found.password !== password) {
            throw new Error('Email or password are not valid.')
        }
        
        this.auth.save(found);
        return {
            ...found,
            password: undefined
        }
    })

    logout = delayedFunction(() => {
        if (!this.isLoggedIn) {
            throw new Error('Cannot log out unauthenticated user.')
        }

        this.auth.deleteAll()
    });

    create = delayedFunction(user => {
        const errorBuilder = ErrorBuilder.builder().message('User registration input failed validation.');

        if (!user.email || !user.email.includes('@')) {
            errorBuilder.property('email', user.email, 'a valid email address')
        }

        if (!user.firstName || user.firstName.length < 3) {
            errorBuilder.property('firstName', user.firstName, 'a min length of 3 characters')
        }

        if (user.firstName && user.firstName.length > 10) {
            errorBuilder.property('firstName', user.firstName, 'a max length of 10 characters')
        }

        if (user.firstName && user.firstName.split().every(chr => ALLOWED_NAME_CHARS.includes(chr))) {
            errorBuilder.property('firstName', user.firstName, 'only ASCII characters')
        }

        if (!user.lastName || user.lastName.length < 3) {
            errorBuilder.property('lastName', user.lastName, 'a min length of 3 characters')
        }

        if (user.lastName && user.lastName.length > 10) {
            errorBuilder.property('lastName', user.lastName, 'a max length of 10 characters')
        }

        if (user.lastName && user.lastName.split().every(chr => ALLOWED_NAME_CHARS.includes(chr))) {
            errorBuilder.property('lastName', user.lastName, 'only ASCII characters')
        }

        if (!user.password || user.password.length < 8) {
            errorBuilder.property('password', user.password, 'a min length of 8 characters')
        }

        if (!user.birthDate || isNaN(new Date(date).getTime())) {
            errorBuilder.property('birthDate', user.birthDate, 'a valid date')

        }

        if (user.birthDate && !isAtLeast(user.birthDate, 18)) {
            errorBuilder.property('birthDate', user.birthDate, 'at least 18 years old')
        }

        if (errorBuilder.hasErrors) {
            throw new TypeError(errorBuilder.build())
        }

        const saved = this.storage.save({
            ...user,
            id: undefined
        })

        return {
            ...saved,
            password: undefined
        }
    });

    async getSelf() {
        if (!this.isLoggedIn) {
            throw new Error('Must be logged in.')
        }

        return {
            ...this.auth.getAll().pop(),
            password: undefined
        }
    }

    async changePassword(oldPassword, newPassword) {
        if (!this.isLoggedIn) {
            throw new Error('Unauthenticated.')
        }

        const self = this.getSelf()

        if (oldPassword !== self.password) {
            throw new Error('Password mismatch.');
        }

        self.password = newPassword
        this.storage.save(self)
    }
} 