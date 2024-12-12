import {Router} from 'express';
import {
    getAllTenis,
    addTenis,
    getTenisById,
}from '../controllers/tenisController';

const router = Router();

router.get('/', getAllTenis);
router.post('/', addTenis);
router.get('/:id', getTenisById);

export default router;