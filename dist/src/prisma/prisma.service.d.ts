import { OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';
export declare class PrismaService implements OnModuleDestroy {
    readonly client: PrismaClient;
    constructor();
    onModuleDestroy(): Promise<void>;
}
