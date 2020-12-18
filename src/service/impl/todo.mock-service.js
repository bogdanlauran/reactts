import MockStorage from './storage.mock'
import { AbstractTodoService } from './todo.service';
import { delayedFunction, ErrorBuilder } from './utils';

export class MockTodoService extends AbstractTodoService {
    storage = new MockStorage('Todo')
    auth = new MockStorage('Auth')

    get isLoggedIn() {
        return this.auth.getAll().length > 0
    }

    create = delayedFunction(todo => {
        if (!this.isLoggedIn) {
            throw new Error('Unauthenticated')
        }

        this.validateTodo(todo, false);

        const saved = this.storage.save({
            ...todo,
            userId: this.auth.getAll().pop().id,
            id: undefined
        })

        return {
            ...saved,
            userId: undefined
        }
    });

    update = delayedFunction(todo => {
        this.validateTodo(todo, true)

        const saved = this.storage.save({
            ...todo,
            id: undefined
        })

        return {
            ...saved,
            userId: undefined
        }
    })

    delete = delayedFunction(id => {
        this.storage.delete(id)
    })

    async getUserTodos() {
        if (!this.isLoggedIn) {
            throw new Error('Unauthenticated')
        }

        const user = this.auth.getAll().pop()
        return this.storage.getAll()
            .filter(todo => todo.userId === user.id)
            .map(todo => ({
                ...todo,
                userId: undefined
            }))
    }

    /** @private */
    validateTodo(todo, checkId) {
        const errorBuilder = ErrorBuilder.builder().message('Todo creation input failed validation.');

        if (checkId) {
            const found = this.storage.get(todo.id);
            if (found.userId !== this.auth.getAll().pop().id) {
                throw new Error('Forbidden. This todo is owned by another user.')
            }
        }

        if (!todo.title || todo.title.length < 8) {
            errorBuilder.property('title', todo.title, 'a length of at least 8 characters');
        }

        if (todo.title && todo.title.length > 30) {
            errorBuilder.property('title', todo.title, 'a length of at most 30 characters');
        }

        if (todo.description && todo.description.length > 100) {
            errorBuilder.property('description', todo.description, 'a length of at most 100 characters');
        } 

        const deadline = new Date(todo.deadline).getTime();
        if (isNaN(deadline) || Date.now() > deadline) {
            errorBuilder.property('deadline', todo.deadline, 'date in the future');
        }

        if (!todo.status || ['ACTIVE', 'INACTIVE']) {
            errorBuilder.property('status', todo.status, 'ACTIVE or INACTIVE');
        }

        if (errorBuilder.hasErrors) {
            throw new TypeError(errorBuilder.build())
        }
    }
} 