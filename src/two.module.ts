import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
export class TwoModule {
  constructor() {
    console.log('Two Module');
  }
}
