import { Router } from "express";
import { authController } from "../../controllers/index.mjs";
const router = Router();

router.get(
    '/post',
    (req,res)=>{
        res.send('post controller changes.');
    }
);

export const post = router;