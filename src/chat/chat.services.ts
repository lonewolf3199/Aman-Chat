import { ChatRepository } from "./chat.repository";
export class ChatServices{
    chatRepo: ChatRepository;
    constructor(){
        this.chatRepo = new ChatRepository();
    }

    findOne(id: string){
        return this.chatRepo.findOne(id);
    }

    finAll(){
        return this.chatRepo.findAll();
    }

    create(content: string){
        return this.chatRepo.create(content);
    }
}