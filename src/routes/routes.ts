import { lazy, LazyExoticComponent } from "react";
interface Route {
    path: string,
    Component: LazyExoticComponent<(props: any) => JSX.Element>,
    name: string,
    children?: Route[]
}

const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../lazyload/pages/LazyPage3'));

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