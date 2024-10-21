import express from 'express';
import router from "./routes/app.route.js";

const app = express();

const PORT = 6969;

app.use('/',router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});