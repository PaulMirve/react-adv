import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string,
    img?: string,
    style?: CSSProperties
}

export const ProductImage = ({ img = '', className = "", style }: Props) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;
    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }
    return (
        <img src={imgToShow} alt="Coffee mug" className={`${styles.productImg} ${className}`} style={style} />
    );
}