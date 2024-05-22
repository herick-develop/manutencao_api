import { DataSource } from "typeorm";

export const IntegratorProvider = [{
    provide: 'DB_INTEGRATOR',
    useFactory: async() => {
        const db_integrator = new DataSource ({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'integrator'
        });
        return db_integrator.initialize();
    }
}]
