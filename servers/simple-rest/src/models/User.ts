import { BaseFireStoreDB } from '../libs/cloudfirestore/BaseFireStoreDB'
import { cloudFireStoreManger } from '../libs/cloudfirestore/CloudForeStoreManger'


class UserFireStoreDB extends BaseFireStoreDB {
    private instance: UserFireStoreDB | null = null

    constructor(db: any, collection: any) {
        super(db, collection)
        if (this.instance) {
            throw new Error('You can only create one instance')
        }

        this.instance = this
    }

    getInstance() {
        return this;
    }
}

// console.log(cloudFireStoreManger)

export const userFireStoreDB = Object.freeze(new UserFireStoreDB(cloudFireStoreManger.getDB(), 'users'))