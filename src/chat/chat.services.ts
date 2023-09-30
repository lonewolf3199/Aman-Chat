import { Injectable } from "@nestjs/common";
import { ChatRepository } from "./chat.repository";

@Injectable()
export class ChatServices{
    constructor(public ChatRepo: ChatRepository){
    }

    findOne(id: string){
        return this.ChatRepo.findOne(id);
    }

    findAll(){
        return this.ChatRepo.findAll();
    }

    create(content: string){
        return this.ChatRepo.create(content);
    }
}