import { DataSource } from 'typeorm';

export const LoginProvider = [{
    provide: 'INTEGRATOR_REPOSITORY',
    useFactory: (db_integrator: DataSource) => db_integrator.getRepository(null),
    inject: ['DB_INTEGRATOR']
}];