

interface ValidateFormType {
    validate: RegExp,
    error: string,
}
export enum INPUT_NAME {
    LOGIN = 'login',
    EMAIL = 'email',
    PASSWORD = 'password',
    REPEAT_PASSWORD = 'repeat_password',
    FIRST_NAME = 'first_name',
    SECOND_NAME = 'second_name',
    PHONE = 'phone',
    MESSAGE = 'message',
    EDIT_NEW_PASSWORD ='edit_new_password'
}

export const getValidate = ( inputNames: INPUT_NAME[]) =>{
    console.log('valid')
    inputNames.forEach((inputName)=>{

    const element : HTMLInputElement | null = document.querySelector(`[name="${inputName}"]`);
        const elementError: HTMLDivElement | null =document.querySelector(`[id="${inputName}Error"]`)

    if(  element === null || elementError === null) { return }

        const events = ['blur', 'focus']
        const {validate, error} = FIELDS_FORM_VALIDATE[inputName]

        events.forEach(event => {
            element.addEventListener(event, () => {

                if (validate.test(element.value)) {
                    element.style.borderWidth = "0px";

                        elementError.textContent = ''

                } else {
                    element.style.setProperty("border-width", "2px", "important");
                    element.style.borderColor = "red";
                    elementError.textContent = error
                }
            })
        })
    
    }
)
}


const FIELDS_FORM_VALIDATE:Record<INPUT_NAME, ValidateFormType> = {
    login: {
        validate: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
        error: 'Неверный логин',
    },
    email: {
        validate: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
        error: 'Некорректный email',
    },
    password: {
        validate: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,40}$/,
        error: 'Некорректный пароль',
    },
    edit_new_password: {
        validate: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,40}$/,
        error: 'Некорректный пароль'
    },
    repeat_password: {
        validate:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,40}$/,
        error: 'Некорректный пароль',
    },
    first_name: {
        validate: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
        error: 'Некорректное имя',
    },
    second_name: {
        validate: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
        error: 'Некорректная фамилия',
    },
    phone: {
        validate: /^[+-d]?\d{10,15}$/,
        error: 'Некорректный номер телефона',
    },
    message: {
        validate: /(.|\s)*\S(.|\s)*/,
        error: 'Некорректно',
    },
}