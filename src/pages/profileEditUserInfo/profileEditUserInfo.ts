

import {render} from "../../utils/render.ts";
import {BackButtonPage} from '../../components/Button/BackButtonPage'
import { Avatar } from "../../components/Avatar/index.ts";
import { ProfileEditUserInfo } from "./index.ts";
import { ProfileEditUserInfoForm } from "../../modules/ProfileForm/ProfileEditUserInfoForm/index.ts";



    export const getProfileEditUserInfo = () => {
    const backButtonPage = new BackButtonPage({})
    const avatar = new Avatar({src:'https://s1.1zoom.ru/b5050/21/231582-Sepik_2048x1152.jpg'})
    const profileEditUserInfoForm = new ProfileEditUserInfoForm({})

    const ProfileEditUserInfoPage = new ProfileEditUserInfo({
        backButtonPage,
        avatar,
        profileEditUserInfoForm
    })
    render('#app', ProfileEditUserInfoPage);
}