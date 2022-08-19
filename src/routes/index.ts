import { Router } from "express";
import authMiddleware from "../app/middlewares/authMiddleware";

const router = Router({ mergeParams: true });

router.use('/authenticate', require('./authenticate'))
router.use('/users/create', require('./userCreate'))
router.use('/users', authMiddleware, require('./user'))
router.use('/workers', authMiddleware, require('./workers'))

export default router;