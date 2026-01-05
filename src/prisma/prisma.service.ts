import { Injectable, OnModuleDestroy } from '@nestjs/common';

import { PrismaClient, Prisma } from '@/prisma/generated/client';
import { SqlDriverAdapterFactory } from '@prisma/driver-adapter-utils'

@Injectable()
export class PrismaService implements OnModuleDestroy {
  public readonly client: PrismaClient;

  constructor() {
    const options: Prisma.PrismaClientOptions = {
      adapter: SqlDriverAdapterFactory.postgres({
        url: process.env.DATABASE_URL!,
      }),
      errorFormat: 'pretty', // optional
    };

    this.client = new PrismaClient(options);
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.$disconnect();
  }
}
