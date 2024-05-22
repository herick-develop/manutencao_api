import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class SupportService {
    constructor(
        @Inject('CALL_REPOSITORY')
        private readonly entityManager: EntityManager
    ) {}

    async listCall(id: number) {
        const query = `
            SELECT calls.id, calls.reason, user.name uname, attendance.title, sector.name sname, city.name cname, calls.created, calls.finished, calls.status
            FROM calls
                INNER JOIN user ON (user.id = calls.idUser)
                INNER JOIN attendance ON (attendance.id = calls.idAttendance)
                INNER JOIN sla ON (sla.id = attendance.idSla)
                INNER JOIN city ON (city.id = user.idCity)
                INNER JOIN sector ON (sector.id = user.idSector)
            WHERE
                calls.idSector = ${id}
            ORDER BY status asc, calls.created desc
        `;

        const result = await this.entityManager.query(query);

        const resultsWithTextReason = result.map((result) => ({
            ...result,
            reason: result.reason.toString('utf-8'), // Assuming 'utf-8' encoding, adjust if needed
        }));

        console.log('result: ', resultsWithTextReason);

        return resultsWithTextReason;
    };

    async deleteCall(id: number) {

        const query = `
            UPDATE calls SET status = '3', finished = CURRENT_TIME()  WHERE id = ${id}
        `;

        const result = await this.entityManager.query(query);

        return result;
    }
}