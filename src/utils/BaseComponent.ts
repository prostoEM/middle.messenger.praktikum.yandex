import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import {EventBus} from './EventBus.ts';

//
export type Meta = {
    props: PropsAndChildren;
    tagName: string;
};


export type PropsAndChildren = Record<string, unknown>



// Возможные действия с базовым компонентом
enum EVENTS  {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render',
}

// Класс базового компонента (аналог Block из теории Практикума)
export abstract class BaseComponent<Props extends Record<string, any> = PropsAndChildren> {

    public static readonly EVENTS = EVENTS;

    private _element: HTMLElement | null = null;

    private readonly _meta: Meta | null = null;

    protected _id: string | null = null;

    protected tagName: string;

    protected props: Record<string, any> | null = null;

    protected propsAndChildren: Props;

    protected children: Record<string, any> | null = null;

    private eventBus: () => EventBus;

    constructor(
        propsAndChildren: Props,
        tagName: string = 'div',
    ) {


        const { children, props } = this._getChildren(propsAndChildren);

        const eventBus = new EventBus();

        this._meta = {
            tagName,
            props,
        };

        this._id = makeUUID();
        this.tagName = tagName;
        this.children = children;
        this.props = props;

        this.propsAndChildren = this._makePropsProxy({
            ...propsAndChildren,
            _id: this._id,
        });

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(EVENTS.INIT);
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(EVENTS.INIT, this.init.bind(this));
        eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    init() {
        this._createResources();
        this.eventBus().emit(EVENTS.FLOW_RENDER);
    }
    private _createResources() {
        if (this._meta !== null) {
            const { tagName } = this._meta;
            this._element = this._createDocumentElement(tagName);
        }
    }
    private _createDocumentElement(tag: string) {
        const element = document.createElement(tag);
        if (this._id) {
            element.setAttribute('data-id', this._id);
        }
        return element;
    }


    componentDidMount() {}

    private _componentDidMount() {
        this.componentDidMount();

        if (this.children) {
            Object.values(this.children).forEach((child) => {
                child.dispatchComponentDidMount();
            });
        }
    }

    dispatchComponentDidMount() {
        this.eventBus().emit(EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(
        oldProps: Props,
        newProps: Props,
        isValid: boolean,
    ) {
        const response = this.componentDidUpdate(oldProps, newProps, isValid);
        if (!response) {
            return;
        }

        this._render();
    }

    componentDidUpdate(
        _oldProps: Props,
        _newProps: Props,
        _isValid: boolean,
    ) {
        return true;
    }

    setProps = (newProps: Props) => {
        if (!newProps) {
            return;
        }

        Object.assign(this.propsAndChildren, newProps);
    };

    get element() {
        return this._element;
    }

    _addEvents() {
        const { events = {} } = this.propsAndChildren;
        if (!events) return;

        Object.keys(events).forEach((eventName) => {
            if (this._element) {
                this._element.addEventListener(eventName, events[eventName]);
            }
        });
    }

    _removeEvents() {
        const { events = {} } = this.propsAndChildren;

        if (!events) return;

        Object.keys(events).forEach((eventName) => {
            if (this._element) {
                this._element.removeEventListener(eventName, events[eventName]);
            }
        });
    }

    private _render() {
        const block = this.render();
        if ( block?.firstElementChild) {
            const newBlock = block.firstElementChild;
            this._removeEvents();
            this._element?.replaceWith(newBlock);
            this._element = newBlock as HTMLElement;
            this._addEvents();
        } else {
            console.error('No element available to render');
        }
    }

    protected render() {
        const fragment = new DocumentFragment();
        return fragment;
    }

    getContent() {
        if (this._element === null) {
            throw new Error('Element is not initialized');
        }
        return this._element;
    }

    // Метод для отделения children от пропсов (вырезаем из пропсов и возвращаем отдельно)
    _getChildren(propsAndChildren: Props) {
        const children: Record<string, unknown>  = {};
        const props:  Record<string, unknown>  = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof BaseComponent) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }



    private _makePropsProxy(props: Props) {
        const self = this;

        return new Proxy(props, {
            get(target, prop: string) {


                const value = target[prop];

                return typeof value === 'function' ? value.bind(target) : value;
            },

            set(target: Record<any, unknown>, prop: string, value: string) {


                target[prop] = value;

                self.eventBus().emit(EVENTS.FLOW_CDU, { ...target }, target);
                return true;
            },

            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }



    show() {
        if (this._element) {
            this._element.style.display = 'block';
        }
    }

    hide() {
        if (this._element) {
            this._element.style.display = 'none';
        }
    }

    compile(template: string, props: Props) {
        const propsAndStubs: Record<string, unknown> = { ...props };

        this.children && Object.entries(this.children ).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
        });

        const fragment = this._createDocumentElement(
            "template"
        ) as HTMLTemplateElement;

        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        this.children && Object.values(this.children ).forEach((child) => {
            const stub = fragment.content.querySelector<HTMLElement>(
                `[data-id="${child._id}"]`
            );
            const content = child.getContent();
            if (stub !== null && content !== null) {
                stub.replaceWith(content);
            }
        });

        return fragment.content;
    }
}

