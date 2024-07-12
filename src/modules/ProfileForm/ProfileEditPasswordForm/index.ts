import { Button } from '../../../components/Button/Button';
import { InputDefault } from '../../../components/Input/InputDefault';
import {BaseComponent, PropsAndChildren } from '../../../utils/BaseComponent';
import { EditInfoItem } from '../EditInfoItem';

import template from './ProfileEditPasswordForm.hbs?raw';


export class ProfileEditPasswordForm extends BaseComponent {

    constructor(propsAndChildren: PropsAndChildren) {



         const profileFormPassword = new EditInfoItem({
             title:'Старый пароль',
             type: 'password',
             placeholder: 'Введите старый пароль',
             name: 'editLastPassword',
             value:'123456'

        })





        const profileFormNewPassword = new EditInfoItem({
            title:'Новый пароль',
            type: 'password',
            placeholder: 'Введите новый пароль',
            name: 'editNewPassword',
            value:'123456'
        })




        const profileFormRepeatNewPassword = new EditInfoItem({
            title:'Новый пароль',
            type: 'password',
            placeholder: 'Введите еще раз новый пароль',
            name: 'editReapetNewPassword',
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
}