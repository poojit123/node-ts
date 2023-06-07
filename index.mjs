import Express from "express";
import Dotenv from "dotenv/config";
import router from "./src/routes/index.mjs";

const app = Express();
const PORT = process.env.APP_PORT || 8000;

app.get('/',(req, res)=>{
    res.send(`App is running..`);
});

app.use('/', router);

app.listen(PORT,()=>{
    console.log(`App is listening at this url: http://localhost:${PORT}`);
});