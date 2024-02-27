import {BaseComponent} from "./BaseComponent.ts";



export const render=(elementSelector: string, block: InstanceType<typeof BaseComponent>) =>{
    const root = document.querySelector(elementSelector);

    if (root) {
        root.appendChild(block.getContent());

        block.dispatchComponentDidMount();
    }
}

