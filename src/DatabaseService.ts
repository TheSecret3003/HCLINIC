import {Connection, ConnectionOptions, createConnection} from "typeorm";
import User from "./models/User";

class DatabaseService {
    private static conn: Connection;

    static async getConnection() {
        if (this.conn == undefined) {
            this.conn = await createConnection(<ConnectionOptions>{
                type: "postgres",

                url: process.env.DATABASE_URL || "postgres://clinic:clinic@localhost:5432/clinic",

                entities: [
                    User
                ],
                synchronize: process.env.envrionment != "development",
            });
        }
        return this.conn;
    }
}

export default DatabaseService;