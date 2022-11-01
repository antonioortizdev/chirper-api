import { ChirpEntity } from '../../../../chirp/infrastructure/typeorm/entity/ChirpEntity';
import { ChirpModule } from '../../../../chirp/infrastructure/ioc/ChirpModule';
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

const typeOrmModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASS || 'root',
  database: process.env.MYSQL_DATABASE || 'chirper',
  entities: [ChirpEntity],
  synchronize: process.env.APP_ENV !== 'production',
})

@Module({
  imports: [ChirpModule, typeOrmModule],
})

export class AppModule {}
