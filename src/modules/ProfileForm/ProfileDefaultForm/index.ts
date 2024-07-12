import { Divider } from '../../../components/Divider';
import { LinkPage } from '../../../components/LinkPage';
import {BaseComponent, PropsAndChildren } from '../../../utils/BaseComponent';
import { PAGE_PATH } from '../../../utils/Common.config';
import { InfoItem } from '../InfoItem';
import template from './ProfileDefaultForm.hbs?raw';


export class ProfileDefaultForm extends BaseComponent {

    constructor(propsAndChildren: PropsAndChildren) {

        const infoItemEmail = new InfoItem({
            title: "Почта",
            editInfo:"pochta@yandex.ru",
        });
        const infoItemLogin = new InfoItem({
            title: "Логин",
            editInfo:"Homer",
        });

        const infoItemName = new InfoItem({
            title: "Имя",
            editInfo:"Гомер",
        });

        const infoItemSurname = new InfoItem({
            title: "Фамилия",
            editInfo:"Симпсон",
        });

        const infoItemNick = new InfoItem({
            title: "Имя в чате",
            editInfo:"Гомер",
        });

        const infoItemPhone = new InfoItem({
            title: "Телефон",
            editInfo:"888888888888",
        });


        const divider =new Divider({})

        const linkChangeData = new LinkPage({
            href:PAGE_PATH.PROFILE_CHANGE_INFO,
            text: 'Изменить данные',
        })

        const linkChangePassword = new LinkPage({
            href: PAGE_PATH.PROFILE_CHANGE_PASSWORD,
            text: 'Изменить пароль',
        })

        const linkExit = new LinkPage({
            href: PAGE_PATH.START,
            text: 'Выйти',
        })

        super({
            ...propsAndChildren,
            infoItemEmail,
            infoItemLogin,
            infoItemName,
            infoItemSurname,
            infoItemNick,
            infoItemPhone,
            divider,
            linkChangeData,
            linkChangePassword,
            linkExit
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren, });
    }
}