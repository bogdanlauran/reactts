import { MockTodoService } from "./impl/todo.mock-service";

const throwAbstract = () => Promise.reject(new Error('Method has not been implemented.'));

/**
 * 
 * @typedef {Object} CreateTodo
 * @property {string} title
 * @property {string} description
 * @property {string} status
 * @property {Date} deadline
 * 
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} status
 * @property {Date} deadline
 */

 /** @abstract */
export class AbstractTodoService {
    /** @returns {Promise<Todo>} */
    async create(/** @type {CreateTodo} */ todo) {
        await throwAbstract();
    }

    /** @returns {Promise<Todo[]>} */
    async getUserTodos() {
        await throwAbstract();
    }

    /** @returns {Promise<Todo>} */
    async update(/** @type {Todo} */ todo) {
        await throwAbstract();
    }

    /** @returns {Promise<Todo>} */
    async delete(/** @type {number} */ id) {
        await throwAbstract();
    }
}

/** @type {AbstractTodoService} */
const todoService = new MockTodoService()
export default todoService