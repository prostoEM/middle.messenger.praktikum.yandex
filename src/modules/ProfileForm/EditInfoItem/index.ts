import { Divider } from '../../../components/Divider';
import { InputDefault } from '../../../components/Input/InputDefault';
import {BaseComponent, PropsAndChildren } from '../../../utils/BaseComponent';
import {INPUT_NAME, getValidate } from '../../../utils/validate';

import template from './EditInfoItem.hbs?raw';


export class EditInfoItem extends BaseComponent {

    constructor(propsAndChildren: PropsAndChildren) {
        const inputDefaultPassword = new InputDefault({
            type: propsAndChildren.type,
            placeholder: propsAndChildren.placeholder,
            name:propsAndChildren.name,
            value:propsAndChildren.value,
        })
        const divider = new Divider({})
        super({
            ...propsAndChildren,
            divider,
            input:inputDefaultPassword
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
            INPUT_NAME.EMAIL,
            INPUT_NAME.LOGIN,
            INPUT_NAME.FIRST_NAME,
            INPUT_NAME.PHONE,
        ])
    }
}

