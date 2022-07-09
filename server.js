import express from 'express';
import { APP_PORT } from './config';
import errorhandler from './middleweares/errorhandler';
import routes from  './routes';

const app = express()

app.use(express.json());
app.use('/api',routes);


app.use(errorhandler);
app.listen(APP_PORT,() => console.log(`listening on port ${APP_PORT}.`));