import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatServices } from './chat.services';
import { ChatRepository } from './chat.repository';

@Module({
  controllers: [ChatController],
  providers: [ChatServices, ChatRepository]
})
export class ChatModule {}
