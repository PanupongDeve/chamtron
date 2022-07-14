const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('../../configuretion/service-account.json');

export class CloudFireStoreManger {
    db: any = null;
    serviceAccount: any = null;

    constructor(serviceAccount: any = null) {
        if (serviceAccount) {
            this.serviceAccount = serviceAccount;
            if (this.serviceAccount) {
                initializeApp({
                    credential: cert(this.serviceAccount)
                })
            } else {
                initializeApp({
                    credential: applicationDefault()
                })
            }
            this.db = getFirestore();
        }
        
    }

    async connect(callback: Function | null = null) {
        try {

            if (callback && this.db) {
                callback()
            }
           
        } catch (error) {
            console.log(error)
            throw new ReferenceError("Cannot Call Cloud Firestore")
        }
    }

    getDB() {
        try {
            if (this.db !== null) {
                return this.db
            } else {
                throw new ReferenceError("Cannot Call Cloud Firestore Operation")
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const cloudFireStoreManger = new CloudFireStoreManger(serviceAccount)
