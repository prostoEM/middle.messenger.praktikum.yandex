
import {LinkPage} from "../../components/LinkPage";
import {PagesLinks} from "./index.ts";
import {render} from "../../utils/render.ts";
import { PAGE_PATH } from "../../utils/Common.config.ts";

export const getPagesLinks = () => {

    const LinkAuth = new LinkPage({
        href: PAGE_PATH.AUTH, text: 'Страница авторизации',
    })
    const LinkRegistration = new LinkPage({
        href: PAGE_PATH.REGISTRATION, text: 'Страница регистрации',
    })
    const LinkChat = new LinkPage({
        href: PAGE_PATH.CHAT, text: 'Страница чата',
    })
    const LinkProfile = new LinkPage({
        href: PAGE_PATH.PROFILE, text: 'Страница профиля',
    })
    const LinkChangeInfo = new LinkPage({
        href: PAGE_PATH.PROFILE_CHANGE_INFO, text: 'Страница смены инфы пррофиля',
    })
    const LinkChangePassword = new LinkPage({
        href: PAGE_PATH.PROFILE_CHANGE_PASSWORD, text: 'Страница смены пароля',
    })
    const LinkError500 = new LinkPage({
        href: PAGE_PATH.SERVER_ERROR, text: 'Страница ошибки 500',
    })
    const LinkError404= new LinkPage({
        href: '/testError404Random', text: 'Страница ошибки 404',
    })

    const LinksPages = new PagesLinks({
        linkAuth: LinkAuth,
        linkRegistration: LinkRegistration,
        linkChat: LinkChat,
        linkProfile: LinkProfile,
        linkProfileChangeInfo: LinkChangeInfo,
        linkProfileChangePassword: LinkChangePassword,
        linkError500: LinkError500,
        linkError400: LinkError404,
    })
    render('#app', LinksPages);
}