import { useEffect, useState } from "react";
import "./styles.css";

interface Product {
    id: number;
    title: string;
    price: number
}

function ProductList({products}: {products: Product[]}) {
    return (
        <div className="grid">
                {products.map(p => (
                    <div key ={p.id} className="card">
                        <div className="thumb" />
                        <h4>{p.title}</h4>
                        <p>{p.price}</p>
                    </div>
                ))}
        </div>
    )
}

// Proxy
function SkeletonList() {
    return (
        <div className="grid">
            {
            Array.from({length: 8}).map((data, i) => (
                 <div className="card">
                    <div className="skeleton thumb" >
                       <div className="skeleton line" />
                        <div className="skeleton line short" />
                    </div>
                </div>
            ))
        }
        </div>)
}

type Props = {
    isLoading: boolean;
    products: Product[];
}
function ProductListProxy({isLoading, products} : Props ) {
    if(isLoading) {
        return <SkeletonList />
    }
    return <ProductList products={products} />
}

export default function ProxyComp() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(
                [
                    {id: 1, title: 'Product 1', price: 2232},
                    {id: 2, title: 'Product 2', price: 5233},
                    {id: 3, title: 'Product 3', price: 9923}
                ]
            );
            setLoading(false);
        }, 2000)
    }, []);

    return <ProductListProxy 
        isLoading={loading}
        products={products} />

}