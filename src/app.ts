import {ZeroContent} from "./components/ZeroContent";
import {ErrorPage} from "./pages/ErrorPage";
import {render} from "./utils/render.ts";
import {LinkPage} from "./components/LinkPage";
import {FormAuth} from "./modules/FormAuth";
import {Auth} from "./pages/auth";
import {FormRegistration} from "./modules/FormRegistration";


enum PAGE_PATH {
    AUTH='/auth',
    REGISTRATION='/registration',
    CHAT='/chat',
    PROFILE='/profile',
    PROFILE_CHANGE_INFO='/profile-change-info',
    PROFILE_CHANGE_PASSWORD='/profile-change-password',
    SERVER_ERROR='/500',
}



const getNotFoundPage = () => {
    const Link = new LinkPage({
        href:'',
        text: 'Вернуться на главную',
    })

     const ZeroContentNotFoundPage = new ZeroContent({
         code: '404',
         title: 'Страница не найдена',
         children:Link
     })
    const NotFoundPage = new ErrorPage({zeroContent:ZeroContentNotFoundPage})
    render('#app', NotFoundPage);
}

const getServerErrorPage = () => {
    const Link = new LinkPage({
        href:'',
        text: 'Вернуться на главную',
    })

    const ZeroContentNotFoundPage = new ZeroContent({
        code: '500',
        title: 'Попробуйте вернуться позднее',
        children:Link
    })
    const NotFoundPage = new ErrorPage({zeroContent:ZeroContentNotFoundPage})
    render('#app', NotFoundPage);
}

const getAuthPage = () => {
    const Form = new FormAuth({})
    const Link = new LinkPage({
        href:'',
        text: 'Нет аккаунта?',
    })

    const AuthPage  = new Auth({
        title: 'Авторизация',
        form: Form,
        link: Link
    })
    render('#app', AuthPage);
}

const getRegistrationPage = () => {
    const Form = new FormRegistration({})

    const Link = new LinkPage({
        href:'',
        text: 'Войти',
    })

    const RegistrationPage  = new Auth({
        title: 'Регистрация',
        form: Form,
        link: Link
    })

    render('#app', RegistrationPage);
}


document.addEventListener('DOMContentLoaded', () => {
    switch (window.location.pathname){
        case PAGE_PATH.AUTH: return getAuthPage()
        case PAGE_PATH.REGISTRATION: return getRegistrationPage()
        case PAGE_PATH.PROFILE: return getServerErrorPage()
        case PAGE_PATH.PROFILE_CHANGE_INFO: return getServerErrorPage()
        case PAGE_PATH.PROFILE_CHANGE_PASSWORD: return getServerErrorPage()
        case PAGE_PATH.CHAT: return getServerErrorPage()
        case PAGE_PATH.SERVER_ERROR: return getServerErrorPage()
        default: return getNotFoundPage()
    }
})
