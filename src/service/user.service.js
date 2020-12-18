import { MockUserAPIService } from "./impl/user.mock-service";

const throwAbstract = () => Promise.reject(new Error('Method has not been implemented.'));

/**
 * @typedef {Object} UserRegister
 * @property {string} email
 * @property {string} password
 * @property {string} firstName
 * @property {string} lastName
 * @property {Date} birthDate
 */

/**
 * @typedef {Object} UserDiff
 * @property {number} id
 * @property {void} password
 * @typedef {UserRegister & UserDiff} User
 */

 /** @abstract */
export class AbstractUserAPIService {
    /** @returns {Promise<User>} */
    async login(/** @type {string} */ email, /** @type {string} */ password) {
        await throwAbstract();
    }

    /** @returns {Promise<void>} */
    async logout() {
        await throwAbstract();
    }

    /** @returns {Promise<User>} */
    async create(/** @type {UserRegister} */ user) {
        await throwAbstract();
    }

    /** @returns {Promise<User>} */
    async getSelf() {
        await throwAbstract();
    }

    /** @returns {Promise<void>} */
    async changePassword(/** @type {string} */ oldPassword, /** @type {string} */ newPassword) {
        await throwAbstract();
    }
}

/** @type {AbstractUserAPIService} */
const userService = new MockUserAPIService()
export default userService