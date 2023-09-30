import { Body, Controller, Get, Post, Param, NotFoundException } from '@nestjs/common';
import { CreateChatDto } from './dtos/create_chat.dto';
import { ChatServices } from './chat.services';
@Controller('chat')
export class ChatController {
    ChatServices: ChatServices

    constructor(){
        this.ChatServices = new ChatServices();
    }
    @Get()
    listChat(){
        return this.ChatServices.findAll();
    }

    @Post()
    createChat(@Body() body: CreateChatDto){        
    return this.ChatServices.create(body.content)       
    }

    @Get('/:id')
    async getChat(@Param('id') id: string){
    const chat = await this.ChatServices.findOne(id)

    if(!chat){
        throw new NotFoundException('No Chat Was Found By The Provided ID!')
    }
    return chat;
    }
}
