import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
export class OneModule {
  constructor() {
    console.log('One Module');
  }
}
