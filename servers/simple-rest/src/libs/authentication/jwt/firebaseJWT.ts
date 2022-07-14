import BaseJWT from './BaseJWT'


class FirebaseJWT extends BaseJWT {
    private instance: FirebaseJWT | null = null

    constructor() {
        super()
        if (this.instance) {
            throw new Error('You can only create one instance')
        }

        this.instance = this
    }


    getInstance() {
        return this;
    }
}


const firebaseJWT = Object.freeze(new FirebaseJWT())
export default firebaseJWT


