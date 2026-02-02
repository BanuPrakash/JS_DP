import { useProducts } from "./hooks/useProducts";
import { useRateFilter } from "./hooks/useRateFilter";
import { Filter, filterProducts } from "./Filter";
import ProductItem from "./ProductItem";
import "./styles.css"

// Container Component: 
const ProductList = () => {
  const { products } = useProducts();
  const { filterRate, handleRating } = useRateFilter();

  return (
    <div className='wrapper'>
      <Filter filterRate={filterRate as number} handleRating={handleRating} />
      {/* {products
        .filter((product: IProduct) => product.rating.rate > 2.5)
        .map((product: IProduct) => (
          <ProductItem product={product} />
        ))} */}

      {filterProducts(products, filterRate).map((product) => (
        <ProductItem product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default ProductList;