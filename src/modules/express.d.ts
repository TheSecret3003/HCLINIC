import User from "../models/User"

declare global {
    namespace Express {
        export interface Response {
            props: any
            returnedBody: any
        }

        export interface Request {
            props: any
            auth: User
        }
    }
}