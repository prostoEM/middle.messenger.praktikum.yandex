import { Divider } from '../../../components/Divider';
import { BaseComponent, PropsAndChildren } from '../../../utils/BaseComponent';
import template from './InfoItem.hbs?raw';


export class InfoItem extends BaseComponent {



    constructor(propsAndChildren: PropsAndChildren) {

        const divider = new Divider({});


        super({
            ...propsAndChildren,
            divider,
        });
    }

    render() {
        return this.compile(template, { ...this.propsAndChildren, });
    }
}