import {Router} from "express";
import CreateUser from "./create-user";
import AuthRouter from "./auth-router";

const router = Router();
router.use("/user", CreateUser);
router.use("/auth", AuthRouter);

export default router;