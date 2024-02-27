import {ZeroContent} from "./components/ZeroContent";
import {ErrorPage} from "./pages/ErrorPage";
import {render} from "./utils/render.ts";


enum PAGE_PATH {
    AUTH='/auth',
    REGISTRATION='/registration',
    CHAT='/chat',
    PROFILE='/profile',
    PROFILE_CHANGE_INGO='/profile-change-info',
    PROFILE_CHANGE_PASSWORD='/profile-change-password',
    NOT_FOUND='/404',
    SERVER_ERROR='/500',
}



const getNotFoundPage = () => {
     const ZeroContentNotFoundPage = new ZeroContent({
         code: '404',
         title: 'Страница не найдена',

     })
    const NotFoundPage = new ErrorPage({zeroContent:ZeroContentNotFoundPage})
    render('#app', NotFoundPage);
}
document.addEventListener('DOMContentLoaded', () => {
    switch (window.location.pathname){
        // case PAGE_PATH: authPage
        default: return getNotFoundPage()
    }
})
