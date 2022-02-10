import {config} from "./config";
import app from "./app";
import dbInit from "./db/init";

dbInit().then(() => console.log('db connected'));

app.listen(config.PORT, () => console.info('App running at port ' + config.PORT));


