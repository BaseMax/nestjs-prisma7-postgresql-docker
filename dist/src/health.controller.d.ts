import { PrismaService } from './prisma/prisma.service';
type HealthStatus = {
    status: 'ok';
};
type HealthError = {
    status: 'error';
    error: string;
};
type HealthResponse = HealthStatus | HealthError;
export declare class HealthController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getHealth(): HealthStatus;
    getDbHealth(): Promise<HealthResponse>;
}
export {};
