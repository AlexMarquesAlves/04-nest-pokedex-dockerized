import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { PokemonModule } from './pokemon/pokemon.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', '404'),
    }),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
