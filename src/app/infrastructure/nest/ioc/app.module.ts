import { ChirpModule } from 'src/chirp/infrastructure/ioc/ChirpModule';
import { Module } from '@nestjs/common'

@Module({
  imports: [ChirpModule],
})
export class AppModule {}
