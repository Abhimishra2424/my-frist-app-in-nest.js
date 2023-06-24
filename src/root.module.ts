import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { OrdersModule } from './orders.module';
import { ChatModule } from './chat.module';

@Module({
  imports: [UserModule, OrdersModule, ChatModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
