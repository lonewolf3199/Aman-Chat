import { Body, Controller, Get, Post, Param, NotFoundException } from '@nestjs/common';
import { CreateChatDto } from './dtos/create_chat.dto';
import { ChatServices } from './chat.services';
@Controller('chat')
export class ChatController {
    constructor(public ChatService: ChatServices){
    }
    @Get()
    listChat(){
        return this.ChatService.findAll();
    }

    @Post()
    createChat(@Body() body: CreateChatDto){        
    return this.ChatService.create(body.content)       
    }

    @Get('/:id')
    async getChat(@Param('id') id: string){
    const chat = await this.ChatService.findOne(id)

    if(!chat){
        throw new NotFoundException('No Chat Was Found By The Provided ID!')
    }
    return chat;
    }
}
