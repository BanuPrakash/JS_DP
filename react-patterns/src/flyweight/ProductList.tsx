import React from "react";

type Props = {
    title: string;
    price: number;
}
// Layout + styles are shared
// only props change

const ProductCardFlyWeight  = React.memo(
    function ProductCard({title, price}: Props) {
        return <div  className="card">
                        <div className="thumb" />
                        <h4>{title}</h4>
                        <p>{price}</p>
                    </div>
    }
)

const cache = new Map<string, any>();

// FlyWeight Factory
function getProductFlyWeight(type: string) {
    if(!cache.has(type)) {
        cache.set(type, ProductCardFlyWeight);
    }
    return cache.get(type);
}

export default function ProductList({products}: any) {
    const Card = getProductFlyWeight("default");
    return (
        <div className="grid">
            {products.map((p:any) => (
                    <Card key={p.id}
                    title={p.title}
                    price={p.price} />
                ))}
        </div>
    )
}