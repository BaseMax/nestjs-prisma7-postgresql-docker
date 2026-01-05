import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './interfaces/user.interface';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    update(id: number, data: UpdateUserDto): Promise<UserEntity>;
    delete(id: number): Promise<UserEntity>;
}
