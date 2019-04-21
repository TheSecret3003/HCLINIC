import {Request, Response, NextFunction} from "express";
import * as bcrypt from "bcrypt";
import {getRepository} from "typeorm";
import User from "../models/User";

const userRepository = getRepository(User);
const secret = "secret";

const auth = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;
    const user = await userRepository.findOne({
        where: {email}
    });
    console.log(`Password: ${password}`);
    console.log(`User password: ${user.password}`);    
    if (user.password != password) {
        next('incorrect email or password');
        return;
    }
    console.log(user);
   
    res.send({ id: user.id });
    next();
};

export {
    auth
}