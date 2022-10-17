import 'reflect-metadata'
import { AppModule } from './ioc/app.module'
import { NestFactory } from '@nestjs/core'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

const bootstrap = async () => {
  const port = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)
  await app.listen(port)
  console.log(`Server listening to http://localhost:${port}`)
}

bootstrap()
