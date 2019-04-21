import {Router} from "express";
import * as UserController from "../controllers/user-controller";
import {check} from "express-validator/check";

const router = Router();

router.post("", [
    check('email').isEmail(),
    check('password').isLength({min: 5})
], UserController.create);

router.get("", UserController.showAll);

export default router