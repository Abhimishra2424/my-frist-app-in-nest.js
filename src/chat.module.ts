import { Module } from '@nestjs/common';
import { ThreeModule } from './three.module';

@Module({
  imports: [ThreeModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ChatModule {
  constructor() {
    console.log('Chat Module');
  }
}
