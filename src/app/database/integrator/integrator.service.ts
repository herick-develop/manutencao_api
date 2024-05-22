import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import * as crypto from 'crypto';

@Injectable()
export class IntegratorService {
    constructor(
        @Inject('INTEGRATOR_REPOSITORY')
        private readonly entityManager: EntityManager
    ) {}

    async login(email: string, password: string) {

        if (email && password) {
            const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

            console.log(password, hashedPassword);

            const query = `
                SELECT
                    user.name, user.email, user.status, user.userkey,
                    module.id AS module_id, module.name AS module_name
                FROM user
                    LEFT JOIN permission ON user.id = permission.idUser
                    LEFT JOIN module ON permission.idModule = module.id
                WHERE
                    user.email = '${email}'
                    AND user.password = '${hashedPassword}'
                    AND permission.status = 1
                    AND module.id = 65
                ORDER BY module.name
            `;

            const result = await this.entityManager.query(query);

            if (result && result.length > 0) {
                return { message: 'Usuário autenticado com sucesso!', logged: true};
            } else {
                return { message: 'E-mail ou Senha inválido!', logged: false };
            }
        } else {
            return { message: 'E-mail e senha são obrigatórios.', logged: false };
        }

    }
}