import {LinkPage} from "../../components/LinkPage";
import {ZeroContent} from "../../components/ZeroContent";
import {ErrorPage} from "./index.ts";
import {render} from "../../utils/render.ts";

export const getNotFoundPage = () => {
    const Link = new LinkPage({
        href:'',
        text: 'Вернуться на главную',
    })

    const ZeroContentNotFoundPage = new ZeroContent({
        code: '404',
        title: 'Страница не найдена',
        children:Link
    })
    const NotFoundPage = new ErrorPage({zeroContent:ZeroContentNotFoundPage})
    render('#app', NotFoundPage);
}

export const getServerErrorPage = () => {
    const Link = new LinkPage({
        href:'',
        text: 'Вернуться на главную',
    })

    const ZeroContentNotFoundPage = new ZeroContent({
        code: '500',
        title: 'Попробуйте вернуться позднее',
        children:Link
    })
    const NotFoundPage = new ErrorPage({zeroContent:ZeroContentNotFoundPage})
    render('#app', NotFoundPage);
}
