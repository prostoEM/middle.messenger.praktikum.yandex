import { LinkPage } from "../../components/LinkPage";
import { FormRegistration } from "../../modules/FormRegistration";
import { PAGE_PATH } from "../../utils/Common.config";
import { render } from "../../utils/render";
import { Auth } from "../auth";

export const getRegistrationPage = () => {
    const Form = new FormRegistration({})

    const Link = new LinkPage({
        href:PAGE_PATH.AUTH,
        text: 'Войти',
    })

    const RegistrationPage  = new Auth({
        title: 'Регистрация',
        form: Form,
        link: Link
    })

    render('#app', RegistrationPage);
}
