import 'reflect-metadata'
import { AppModule } from './ioc/app.module'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  const port = process.env.PORT || 6969
  const app = await NestFactory.create(AppModule)
  await app.listen(port)
  console.log(`Server listening to http://localhost:${port}`)
}
bootstrap()
