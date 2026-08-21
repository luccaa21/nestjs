import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePlanDto } from 'src/dtos/plan/create-plan-dto';
import { UpdatePlanDto } from 'src/dtos/plan/update-plan-dto';

@Injectable()
export class PlanService {

    constructor(
        private prisma: PrismaService
    ) { }

    async getAll() {
        const plans = await this.prisma.plan.findMany();
        return plans;
    }

    async getById(id: number) {
        const plan = await this.prisma.plan.findUnique({ where: { id } });
        if (!plan) throw new NotFoundException('Plano não encontrado.');
        return {
            id: plan.id,
            name: plan.name,
            price: plan.price
        };
    }

    async create(dto: CreatePlanDto) {
        const existing = await this.prisma.plan.findFirst({
            where: {
                price: dto.price
            }
        });
        if (existing) {
            throw new ConflictException('Já existe um plano com esse valor.');
        }
        await this.prisma.plan.create({
            data: {
                name: dto.name,
                price: dto.price
            }
        });
    }

    async update(id: number, dto: UpdatePlanDto){
        const plan = await this.prisma.plan.findUnique({ 
            where: { id }
        });
        if(!plan) throw new NotFoundException('Plano não encontrado.');
        await this.prisma.plan.update({
            where: { id }, data: {
                name: dto.name,
                price: dto.price
            }
        });
    }

    async delete(id: number){
        await this.prisma.plan.delete({
            where: { id }
        });
    }
}
