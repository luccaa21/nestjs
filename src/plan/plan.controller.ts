import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from 'src/dtos/plan/create-plan-dto';
import { UpdatePlanDto } from 'src/dtos/plan/update-plan-dto';

@Controller('plan')
export class PlanController {

    constructor(
        private planService: PlanService) { }

    @Get()
    async getAll(){
        return await this.planService.getAll();
    }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number){
        return await this.planService.getById(id);
    }

    @Post()
    async create(@Body() dto: CreatePlanDto) {
        return await this.planService.create(dto);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() dto: UpdatePlanDto
    )
    {
        return await this.planService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.planService.delete(id);
    }

}
