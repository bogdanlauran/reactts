export const randomBetween = (from, to) => Math.round(Math.random() * (to - from)) + from

export const delayedFunction = (fn, time = randomBetween(300, 1200)) =>
    (...args) => new Promise(resolve =>
        setTimeout(resolve, time))
            .then(() => fn(...args))

export class ErrorBuilder {
    /** @private */
    properties = []
    /** @private */
    msg = 'Validation failed.'

    static builder() {
        return new ErrorBuilder()
    }
    
    message(msg) {
        this.msg = msg
        return this
    }

    property(property, value, expected, message) {
        this.properties.push({
            property,
            value,
            expected,
            message
        })

        return this;
    }

    build() {
        const formatted = this.properties.reduce((acc, { property, value, expected, message }) =>
            acc + `\n${message}\n\tProperty "${property}" expected ${expected} but got "${value}".`, this.msg)


        return new TypeError(formatted)
    }

    get hasErrors() {
        return this.properties.length > 0
    }
}