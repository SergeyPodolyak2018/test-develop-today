import express from 'express';
import Controller from '../controller/recipes';
import { checkId } from '../helper/checker';

const router = express.Router();
router.param('id', checkId);

router.route(`/`).get(Controller.getAll);
router.route(`/:id`).get(Controller.getById);

export default router;
