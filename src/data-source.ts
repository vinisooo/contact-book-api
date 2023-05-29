import path from "path";
import { DataSourceOptions, DataSource } from "typeorm";
import "dotenv/config";
import "reflect-metadata";


const dataSourceConfig = (): DataSourceOptions => {
    const migrationsMath = path.join(__dirname, "./migrations/**{ts, js}");
    const entitiesPath = path.join(__dirname, "./entities/**{ts, js}");

    const dbUrl: string | undefined = process.env.DATABASE_URL;

    if(!dbUrl){
        console.log("Using SQLite3 database");
        return {
            type: 'sqlite',
            database: ':memory:',
            synchronize: true,
            entities: [entitiesPath],
        };
    }

    console.log("Using PostgresSQL database");
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

