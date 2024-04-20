import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './FormAuth.hbs?raw';
import {InputForm} from "../../components/Input/InputForm";
import {Button} from "../../components/Button/Button";

export class FormAuth extends BaseComponent {



    constructor(propsAndChildren: PropsAndChildren) {
        const InputLogin = new InputForm({
            label: "Логин",
            name:"login",
            type:"text",
            placeholder:"Введите логин"
            });

        const InputPassword = new InputForm({
            label: "Пароль",
            name:"password",
            type:"password",
            placeholder:"Введите пароль"
        });

        const ButtonSubmit = new Button({
            type:"submit",
            text: "Войти"
        })

        super({
            ...propsAndChildren,
            InputLogin,
            InputPassword,
            Button:ButtonSubmit
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren, });
    }
}