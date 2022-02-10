import {config} from "./config";
import app from "./app";
import * as cluster from "cluster";
import {cpus} from 'os';
import {logger} from "./utils";


if (cluster.isMaster){
    const numberOfWorkers = cpus().length;
    logger.info(`Master cluster setting up ${numberOfWorkers} workers ...`)

    for (let i = 0; i < numberOfWorkers; i++){
        cluster.fork();
    }

    cluster.on('online', worker => logger.info(`Worker ${worker.process.pid} is online`));

    cluster.on('exit', (worker, code, signal) => {
        logger.error(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}`);
        logger.info('Starting a new worker ...')
        cluster.fork();
    });
}
else {
    app.listen(config.PORT, () => logger.info(`Process ${process.pid} is listening to all incoming requests`));
}

