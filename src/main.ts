import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const PORT = process.env.PORT

  app.enableCors()
  app.setGlobalPrefix('api/v2')
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  await app.listen(PORT, () => {
    console.log(
      `🚀 Running API server in MODE:${process.env.NODE_ENV} on Port:${PORT}`,
    )
  })
}
bootstrap()
