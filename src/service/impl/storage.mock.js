export default class MockStorage {
    constructor(name) {
        this.name = name
    }

    /** @returns {Array} */
    getAll() {
        return JSON.parse(localStorage.getItem(this.name) || '[]')
    }

    /** @returns {Array<Object>} */
    saveAll(/** @type {Array<Object>} */ entities) {
        const existing = this.getAll()
        let lastId = existing.reduce((max, id) => id > max ? id : max, 0)
        entities = entities.map(entity => ({
            ...entity,
            id: entity.id ? entity.id : ++lastId
        }))

        localStorage.setItem(this.name, JSON.stringify([...existing, ...entities]))
        return entities
    }

    /** @returns {object} */
    save(/** @type {object} */ entity) {
        return this.saveAll([entity]).pop()
    }

    /** @returns {object} */
    get(/** @type number */ id) {
        const found = this.getAll().find(entity => entity.id === id)
        if (!found) {
            throw new Error(`${this.name} entity with id ${id} could not be found.`)
        }

        return found
    }

    delete(/** @type number */ id) {
        this.assertExists(id)
        const entities = this.getAll()
        const entitiesWithoutDeleted = entities.filter(entity => entity.id !== id)
        localStorage.removeItem(this.name)
        this.saveAll(entitiesWithoutDeleted)
    }

    deleteAll() {
        localStorage.removeItem(this.name);
    }

    /** @returns {(void|never)} */
    assertExists(/** @type number */ id) {
        this.get(id);
    }

    /** @returns {object} */
    getByProperty(/** @type string */ property, value) {
        const found = this.getAll().find(entity => entity[property] === value)
        if (!found) {
            throw new Error(`${this.name} entity with ${property} "${value}" could not be found.`)
        }

        return found
    }
}