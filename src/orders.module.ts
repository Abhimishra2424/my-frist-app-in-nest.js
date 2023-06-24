import { Module } from '@nestjs/common';
import { OneModule } from './one.module';
import { TwoModule } from './two.module';

@Module({
  imports: [OneModule, TwoModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class OrdersModule {
  constructor() {
    console.log('Orders Module');
  }
}
