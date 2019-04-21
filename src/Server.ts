import * as express from "express";
import {NextFunction, Request, Response} from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";

class Server {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.handleMiddleware();
        this.handleRoute();
        this.handleError();
    }

    private handleMiddleware(): void {
        this.express.use(morgan("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({
            extended: true
        }));
        this.express.use(async (req: Request, res: Response, next: NextFunction) => {
            req.props = {};
            req.auth = null;
            res.returnedBody = {};
            res.props = {};
            next();
        });
    }

    private handleError(): void {
        // Handle Error
    }

    private handleRoute(): void {
        this.express.use(require("./routers").default);
        this.express.get('/', (req: Request, res: Response) => {
            res.json('OK');
        });
    }
}

export default Server;