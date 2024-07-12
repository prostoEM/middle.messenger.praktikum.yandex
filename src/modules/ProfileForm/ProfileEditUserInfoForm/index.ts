import { Button } from '../../../components/Button/Button';
import { BaseComponent, PropsAndChildren } from '../../../utils/BaseComponent';
import {INPUT_NAME, getValidate } from '../../../utils/validate';
import { EditInfoItem } from '../EditInfoItem';
import template from './profileEditUserInfoForm.hbs?raw';

export class ProfileEditUserInfoForm extends BaseComponent {
    constructor(propsAndChildren: PropsAndChildren) {
        const profileFormEmail = new EditInfoItem({
            title:'Почта',
            type: 'email',
            placeholder: 'Введите почту',
            name: 'mail',
            value:'email@yandex.ru'

        })

        const profileFormLogin = new EditInfoItem({
            title:'Логин',
            type: 'login',
            placeholder: 'Введите логин',
            name: 'login',
            value:'simpson'

        })


        const profileFormFisrtName = new EditInfoItem({
            title:'Имя',
            type: 'name',
            placeholder: 'Введите имя',
            name: 'name',
            value:'Homer'

        })


        const profileFormDisplayName = new EditInfoItem({
            title:'Имя в чате',
            type: 'string',
            placeholder: 'Введите имя для чата',
            name: 'display_name',
            value:'Simpson23'

        })

        const profileFormPhone = new EditInfoItem({
            title:'Телефон',
            type: 'phone',
            placeholder: 'Введите Телефон',
            name: 'phone',
            value:'88005553535'

        })

        const button = new Button({
            text: 'Сохранить',
            type:'submit',
        })


        super({
            ...propsAndChildren,
            profileFormEmail,
            profileFormLogin,
            profileFormFisrtName,
            profileFormDisplayName,
            profileFormPhone,
            button,
        });
    }
    render() {
        return this.compile(template, { ...this.propsAndChildren });
    }

    componentDidMount() {
        super.componentDidMount();

        const applicantForm = document.getElementById('profileFormEditUserInfo')
        const handleSubbmitForm =  (event:SubmitEvent) => {
            event.preventDefault()

            const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement).entries());
            console.log(formData)

        }
        applicantForm?.addEventListener('submit', handleSubbmitForm)

    }
}