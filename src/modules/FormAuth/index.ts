import  {BaseComponent, PropsAndChildren} from "../../utils/BaseComponent.ts";

import template from './FormAuth.hbs?raw';
import {InputForm} from "../../components/Input/InputForm";
import {Button} from "../../components/Button/Button";
import {getValidate, INPUT_NAME} from "../../utils/validate.ts";

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
    componentDidMount() {
        super.componentDidMount();
        getValidate([INPUT_NAME.LOGIN, INPUT_NAME.PASSWORD])
        const applicantForm = document.getElementById('formAuth')
        const handleSubbmitForm =  (event:SubmitEvent) => {
            event.preventDefault()

            const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement).entries());
            console.log(formData)

        }
        applicantForm?.addEventListener('submit', handleSubbmitForm)

    }
}




