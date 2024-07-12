import { Divider } from '../../../components/Divider';
import { InputDefault } from '../../../components/Input/InputDefault';
import {BaseComponent, PropsAndChildren } from '../../../utils/BaseComponent';

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
}