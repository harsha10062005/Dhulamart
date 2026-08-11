import { useEffect, useState } from "react";
import { ProductsCards } from "./productsCard";

export const Products = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [load,setLoad]= useState(true)

  const productsPerPage = 10;

  useEffect(() => {
    async function DataApi() {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      
      setTimeout(()=>{
        setProducts(data.products);
        setLoad(false)
      },2000)
      
    }

    DataApi();
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const currentProducts = products.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );
    
  return (
    <ProductsCards
      products={currentProducts}
      page={page}
      setPage={setPage}
      totalPages={totalPages}
      load={load}
    />

  );
};