import * as AuthController from "../controllers/auth-controller";
import {Router} from "express";
import {check} from "express-validator/check";

const router = Router();
router.post("", [
    check('email').isEmail(),
    check('password').isLength({min: 8})
], AuthController.auth);

export default router;