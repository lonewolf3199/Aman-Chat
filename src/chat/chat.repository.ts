import { readFile,writeFile } from "fs/promises";

export class ChatRepository{
    async findOne(id: string){
        const contents = await readFile('chat.json', 'utf8')
        const chat = JSON.parse(contents);

        return chat[id]
    }

    async findAll(){
        const contents = await readFile('chat.json', 'utf8')
        const chat = JSON.parse(contents);

        return chat;
    }

    async create(content: string){
        const contents = await readFile('chat.json', 'utf8')
        const chat = JSON.parse(contents);

        const id  = Math.floor(Math.random() * 999);
        chat[id] = {id, content}

        await writeFile('chat.json', JSON.stringify(chat))
    }
}