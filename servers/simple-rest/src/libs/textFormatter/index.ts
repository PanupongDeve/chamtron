import BaseTextFormatter from './BaseTextFormatter'


class TextFormatter extends BaseTextFormatter {
    private instance: TextFormatter | null = null

    constructor() {
        super()
        if (this.instance) {
            throw new Error('You can only create one instance')
        }

        this.instance = this
    }


    getInstance() {
        return this.instance;
    }
}


export const textFormatter = Object.freeze(new TextFormatter())


