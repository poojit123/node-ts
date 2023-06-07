import { userRoutes } from './Users/index.mjs';
import { Router } from "express";
const router = Router();

router.use('/api/v1/',
    [
        userRoutes
    ]
);

export default router;