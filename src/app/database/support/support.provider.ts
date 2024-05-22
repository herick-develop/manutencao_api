import { DataSource } from "typeorm"


export const SupportProvider = [{
    provide: 'DB_SUPPORT',
    useFactory: async() => {
        const db_support = new DataSource ({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'support'
        });
        return db_support.initialize();
    }
}]
