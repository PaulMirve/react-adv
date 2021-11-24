import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import "../styles/custom-styles.css";

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping page</h1>
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <ProductCard product={product} className="bg-dark" style={{ backgroundColor: 'red' }} >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white" style={{ fontWeight: 'bold' }} />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title className="text-bold" />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    )
}
