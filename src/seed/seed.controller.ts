import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { CreateSeedDto } from './dtos/create-seed.dto'
import { UpdateSeedDto } from './dtos/update-seed.dto'
import { SeedService } from './seed.service'

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  create(@Body() createSeedDto: CreateSeedDto) {
    return this.seedService.create(createSeedDto)
  }

  @Get()
  findAll() {
    return this.seedService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seedService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeedDto: UpdateSeedDto) {
    return this.seedService.update(+id, updateSeedDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seedService.remove(+id)
  }
}
