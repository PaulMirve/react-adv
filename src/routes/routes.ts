import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

interface Route {
    path: string,
    Component: (props: any) => JSX.Element,
    name: string,
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/lazy1',
        Component: LazyPage1,
        name: 'Lazy Load 1'
    },
    {
        path: '/lazy2',
        Component: LazyPage2,
        name: 'Lazy Load 2'
    },
    {
        path: '/lazy3',
        Component: LazyPage3,
        name: 'Lazy Load 3'
    },
];