import { useEffect, useState } from "react";
import axios from "axios";
import type { IProduct } from "../IProduct";

// HOOK. to fetch products form endpoint
export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      setProducts(data);
    };
    loadUsers();
  }, []);

  return { products };
};