import {FormAuth} from "../../modules/FormAuth";
import {LinkPage} from "../../components/LinkPage";
import {Auth} from "./index.ts";
import {render} from "../../utils/render.ts";
import { PAGE_PATH } from "../../utils/Common.config.ts";

export const getAuthPage = () => {
    const Form = new FormAuth({})
    const Link = new LinkPage({
        href: PAGE_PATH.REGISTRATION, text: 'Нет аккаунта?',
    })

    const AuthPage = new Auth({
        title: 'Авторизация', form: Form, link: Link
    })
    render('#app', AuthPage);
}