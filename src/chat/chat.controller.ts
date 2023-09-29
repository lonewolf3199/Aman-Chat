import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateChatDto } from './dtos/create_chat.dto';
@Controller('chat')
export class ChatController {
    @Get()
    listChat(){}

    @Post()
    createChat(@Body() body: CreateChatDto){
        console.log(body);
        
    }

    @Get('/:id')
    getChat(@Param('id') id: string){
        console.log(id);
        
    }
}
