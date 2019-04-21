import {Entity} from "typeorm";
import BaseModel from "./BaseModel";
import {Column} from "typeorm/decorator/columns/Column";

@Entity("users")
class User extends BaseModel {
    @Column({type: "text"})
    email: string;

    @Column({type: "text"})
    password: string;
}

export default User;