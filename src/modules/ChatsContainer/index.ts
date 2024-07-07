import {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";
import template from "./ChatsContainer.hbs?raw";
import {LinkPage} from "../../components/LinkPage";
import {InputSearch} from "../../components/Input/InputSearch";
import {ChatItem} from "../ChatItem";

export class ChatsContainer extends BaseComponent {


    constructor(propsAndChildren: PropsAndChildren) {
        const linkPage = new LinkPage({
            href: '/',
            text: 'Профиль >',
        })

        const inputSearch = new InputSearch({
            placeholder: 'Поиск',
            name: 'searchChats',
        })

        const chatItemsArray = [{
            userNam: 'Бэтман',
            senderUser: 'Вы',
            message: 'Где детонатор?',
            time: '12:30',
            number: '4',
            src: 'https://wallpapercosmos.com/w/full/2/3/0/472453-1920x1080-desktop-full-hd-batman-returns-background-image.jpg'
        },
            {
                userName: 'Гомер Симпсон',
                senderUser: 'Гомер',
                message: 'Ты должен денег Вазовский',
                time: '11:45',
                number: '1',
                src: 'https://yt3.googleusercontent.com/ytLc/AGIKgqPFw7YGpx88aXwn_CF2rwOOOSSeZSBbFif-8wEkjw=s900-c-k-c0x00ffffff-no-rj',
            }

        ]

        const chatItems =chatItemsArray.map(item=> new ChatItem({...item,}))

        super({
            ...propsAndChildren,
            LinkPage: linkPage,
            Input: inputSearch,
            ChatItems:chatItems,
                ...chatItems
        });
    }

    render() {
        return this.compile(template, {...this.propsAndChildren,});
    }
}
