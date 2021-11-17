import Navigation from "../router/Navigation";

interface Props {

}

export const LazyLayout = (props: Props) => {
    return (
        <>
            <h1>Lazy layout - Main page</h1>
            <Navigation />
        </>
    )
}

export default LazyLayout;