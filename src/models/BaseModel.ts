import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

class BaseModel {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({name: "created_at", type: "timestamp with time zone"})
    createdAt: Date | string;

    @UpdateDateColumn({name: "updated_at", type: "timestamp with time zone"})
    updatedAt: Date | string;
}

export default BaseModel;