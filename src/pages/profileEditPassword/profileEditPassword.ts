

import {render} from "../../utils/render.ts";
import {BackButtonPage} from '../../components/Button/BackButtonPage'
import { Avatar } from "../../components/Avatar/index.ts";

import { ProfileEditPasswordForm } from "../../modules/ProfileForm/ProfileEditPasswordForm/index.ts";

    export const getProfileEditPassword = () => {
    const backButtonPage = new BackButtonPage({})
    const avatar = new Avatar({src:'https://s1.1zoom.ru/b5050/21/231582-Sepik_2048x1152.jpg'})
    const profileEditPasswordForm = new ProfileEditPasswordForm({})

    const ProfileEditPasswordPage = new ProfileEditPasswordForm({
        backButtonPage,
        avatar,
        profileEditPasswordForm
    })
    render('#app', ProfileEditPasswordPage);
}