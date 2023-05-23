import { AppDataSource } from "./data-source";
import app from "./app";

AppDataSource.initialize()
    .then(async() => {
        console.log("Connected to DataBase")
        const PORT = process.env.PORT || 3000;

        app.listen(PORT,()=>{
            console.log(`server listening on port ${PORT}`);
        });

    }).catch((err) => {
        console.log(err);
    })