
import {Profile} from "./index.ts";
import {render} from "../../utils/render.ts";
import {BackButtonPage} from '../../components/Button/BackButtonPage'
import { Avatar } from "../../components/Avatar/index.ts";
import { ProfileDefaultForm } from "../../modules/ProfileForm/ProfileDefaultForm/index.ts";

    export const getProfilePage = () => {
    const backButtonPage = new BackButtonPage({})
    const avatar = new Avatar({src:'https://s1.1zoom.ru/b5050/21/231582-Sepik_2048x1152.jpg'})
    const profileDefaultForm = new ProfileDefaultForm({})

    const ProfilePage = new Profile({
        backButtonPage,
        avatar,
        profileDefaultForm
    })
    render('#app', ProfilePage);
}