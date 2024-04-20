import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './FormRegistration.hbs?raw';
import {InputForm} from "../../components/Input/InputForm";
import {Button} from "../../components/Button/Button";

export class FormRegistration extends BaseComponent {



    constructor(propsAndChildren: PropsAndChildren) {

        const InputEmail = new InputForm({
            label: "Почта",
            name:"email",
            type:"text",
            placeholder:"Введите Почту"
        });

        const InputSecondName = new InputForm({
            label: "Имя",
            name:"second_name",
            type:"text",
            placeholder:"Введите Имя"
        });


        const InputFirstName = new InputForm({
            label: "Фамилия",
            name:"first_name",
            type:"text",
            placeholder:"Введите Фамилию"
        });

        const InputPhone = new InputForm({
            label: "Телефон",
            name:"phone",
            type:"phone",
            placeholder:"Введите телефон"
        });

        const InputPassword = new InputForm({
            label: "Пароль",
            name:"password",
            type:"password",
            placeholder:"Введите пароль"
        });


        const InputPasswordRepeat = new InputForm({
            label: "Пароль (ещё раз)",
            name:"password",
            type:"password",
            placeholder:"Введите пароль (ещё раз)"
        });

        const ButtonSubmit = new Button({
            type:"submit",
            text: "Зарегистрироваться"
        })

        super({
            ...propsAndChildren,
            InputEmail,
            InputSecondName,
            InputPassword,
            InputPasswordRepeat,
            InputFirstName,
            InputPhone,
            Button:ButtonSubmit
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren, });
    }
}