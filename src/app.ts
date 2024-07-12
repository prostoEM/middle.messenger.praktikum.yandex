import {getAuthPage} from "./pages/auth/auth.ts";
import {getNotFoundPage, getServerErrorPage} from "./pages/errorPage/errorPages.ts";
import {getChatPage} from "./pages/chat/chat.ts";
import { getPagesLinks } from "./pages/pagesLinks/pagesLinks.ts";
import { PAGE_PATH } from "./utils/Common.config.ts";
import { getRegistrationPage } from "./pages/registration/index.ts";
import { getProfilePage } from "./pages/profile/profile.ts";
import { getProfileEditPassword } from "./pages/profileEditPassword/profileEditPassword.ts";
import { getProfileEditUserInfo } from "./pages/profileEditUserInfo/profileEditUserInfo.ts";

document.addEventListener('DOMContentLoaded', () => {

    switch (window.location.pathname){

        case PAGE_PATH.START: return getPagesLinks()
        case PAGE_PATH.AUTH: return getAuthPage()
        case PAGE_PATH.REGISTRATION: return getRegistrationPage()
        case PAGE_PATH.PROFILE: return getProfilePage()
        case PAGE_PATH.PROFILE_CHANGE_INFO: return getProfileEditUserInfo()
        case PAGE_PATH.PROFILE_CHANGE_PASSWORD: return getProfileEditPassword()
        case PAGE_PATH.CHAT: return getChatPage()
        case PAGE_PATH.SERVER_ERROR: return getServerErrorPage()
        default: return getNotFoundPage()
    }
})
