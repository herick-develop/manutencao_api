import { DataSource } from 'typeorm';

export const CallProvider = [{
    provide: 'CALL_REPOSITORY',
    useFactory: (db_support: DataSource) => db_support.getRepository(null),
    inject: ['DB_SUPPORT']
}]
