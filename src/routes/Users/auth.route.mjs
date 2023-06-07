import { Router } from "express";
import { authController } from "../../controllers/index.mjs";
const router = Router();

router.get(
    '/login',
    authController.login
);

export const authRouter = router;