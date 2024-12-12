import {Router} from 'express';
import { registrerUser,getAllUser,getUserByid } from '../controllers/ussersController';

const router = Router();

router.post('/register', registrerUser);
router.get('/', getAllUser);
router.get('/:id', getUserByid);

export default router;

