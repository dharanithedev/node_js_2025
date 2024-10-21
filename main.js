import express from 'express';
import router from "./routes/app.route.js";
import mongoDBConnection from './lib/db.js';

const app = express();

// DB Connection
mongoDBConnection();

const PORT = 6969;

app.use('/',router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});