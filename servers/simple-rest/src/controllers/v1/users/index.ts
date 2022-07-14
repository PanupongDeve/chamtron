import { Router, Request, Response, createRouter } from '../../../libs/express';
import { textFormatter } from '../../../libs/textFormatter'
import { userFireStoreDB } from '../../../models/User'

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await userFireStoreDB.get()
        res.send({
            status: 200,
            data: textFormatter.toSnakeCase(users)
        }); 
    } catch (error) {
        res.status(500).send({
            status: 500,
            data: textFormatter.toSnakeCase({ message: error})
        });
    }
})

export const usersController = createRouter('v1', 'users', router);
