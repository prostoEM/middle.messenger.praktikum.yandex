import {ChatContainer} from "../../modules/ChatContainer";
import {ChatPage} from "./index.ts";
import {render} from "../../utils/render.ts";
import {ChatsContainer} from "../../modules/ChatsContainer";

export const getChatPage = () =>{
    const ChatContainerBlock =  new ChatContainer ({})
    const ChatsContainerBlock = new ChatsContainer({})

    const ChatPageContainer = new ChatPage ({
        ChatsContainer: ChatsContainerBlock,
        ChatContainer: ChatContainerBlock,

    })
    render('#app', ChatPageContainer);
}
