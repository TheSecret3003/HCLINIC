import {Request, Response, NextFunction} from "express";
import {getRepository} from "typeorm";
import User from "../models/User";
import * as bcrypt from "bcrypt";

const userRepository = getRepository(User);
const saltRound = 10;

const create = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;
    const user = await userRepository.insert({
        email,
        password
    });
    if (user != null) {
        res.send({
            kind: "ok",
        });
    }
    next();
};

const showAll = async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.find();
    res.send(users);
    next();
};

export {
    create, showAll
}