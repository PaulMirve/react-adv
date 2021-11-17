import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../lazyload/pages/NoLazy";
interface Route {
    path: string,
    Component: LazyExoticComponent<(props: any) => JSX.Element> | ((props: any) => JSX.Element),
    name: string,
    children?: Route[]
}




export const routes: Route[] = [
    {
        path: '/lazyload',
        Component: lazy(() => import(/* webpackChunkName: "LazyLayout" */'../lazyload/layout/LazyLayout')),
        name: 'Lazy Loading Nested'
    },
    {
        path: '/nolazy',
        Component: NoLazy,
        name: 'No Lazy Loading'
    },
    // {
    //     path: '/lazy2',
    //     Component: LazyPage2,
    //     name: 'Lazy Load 2'
    // },
    // {
    //     path: '/lazy3',
    //     Component: LazyPage3,
    //     name: 'Lazy Load 3'
    // },
];