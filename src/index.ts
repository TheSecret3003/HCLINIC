import Server from "./Server";
import * as http from "http";
import DatabaseService from "./DatabaseService";

async function start() {
    await DatabaseService.getConnection();

    const server = new Server();
    const app = http.createServer(server.express);
    const port = process.env.PORT || 5000;

    app.listen(port);
    app.on('error', onError.bind(this));
    app.on('listening', onListening.bind(this));

    function onError(error: NodeJS.ErrnoException): void {
        if (error.syscall !== 'listen') throw error;
        switch (error.code) {
            case 'EACCES':
                console.error(`${port} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${port} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    function onListening(): void {
        console.log(`Listening on ${port}`);
    }
}

start().then();