import { Button } from '../../../components/Button/Button';
import { InputDefault } from '../../../components/Input/InputDefault';
import {BaseComponent, PropsAndChildren } from '../../../utils/BaseComponent';
import {INPUT_NAME, getValidate } from '../../../utils/validate';
import { EditInfoItem } from '../EditInfoItem';

import template from './ProfileEditPasswordForm.hbs?raw';


export class ProfileEditPasswordForm extends BaseComponent {

    constructor(propsAndChildren: PropsAndChildren) {



         const profileFormPassword = new EditInfoItem({
             title:'Старый пароль',
             type: 'password',
             placeholder: 'Введите старый пароль',
             name: 'password',
             value:'123456'

        })





        const profileFormNewPassword = new EditInfoItem({
            title:'Новый пароль',
            type: 'password',
            placeholder: 'Введите новый пароль',
            name: 'edit_new_password',
            value:'123456'
        })




        const profileFormRepeatNewPassword = new EditInfoItem({
            title:'Новый пароль',
            type: 'password',
            placeholder: 'Введите еще раз новый пароль',
            name: 'repeat_password',
            value:'123456'
        })


        const button = new Button({
            text: 'Сохранить',
            type:'submit',
        })



        super({
            ...propsAndChildren,
            profileFormPassword,
            profileFormNewPassword,
            profileFormRepeatNewPassword,
            button
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren, });
    }
    componentDidMount() {
        super.componentDidMount();
        getValidate([
            INPUT_NAME.PASSWORD,
            INPUT_NAME.EDIT_NEW_PASSWORD,
            INPUT_NAME.REPEAT_PASSWORD,
        ])
        const applicantForm = document.getElementById('profileFormEditPassword')
        const handleSubbmitForm =  (event:SubmitEvent) => {
            event.preventDefault()

            const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement).entries());
            console.log(formData)

        }
        applicantForm?.addEventListener('submit', handleSubbmitForm)

    }
}