import path from "path";
import { DataSourceOptions, DataSource } from "typeorm";
import "dotenv/config";
import "reflect-metadata";


const dataSourceConfig = (): DataSourceOptions => {
    const migrationsMath = path.join(__dirname, "./migrations/**{ts, js}");
    const entitiesPath = path.join(__dirname, "./entities/**{ts, js}");

    const dbUrl: string | undefined = process.env.DATABASE_URL;

    if(!dbUrl){
        throw new Error("Database URL is not defined");
    }

    const dbEnv: string | undefined = process.env.DATABASE_ENV;

    if(dbEnv !== "dev"){
        return {
            type: 'sqlite',
            database: ':memory:',
            synchronize: true,
            entities: [entitiesPath],
        };
    }

    return{
        type: "postgres",
        url: dbUrl,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsMath],
    }
}

export const AppDataSource = new DataSource(dataSourceConfig());

