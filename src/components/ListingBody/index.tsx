import "./styles.css";
import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import * as productService from "../../services/data";
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import { ContextListCount } from "../../util/context-listing";

type QueryParams = {
  valueMin: number;
  valueMax: number;
};

export default function ListingBody() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const { setContextListCount } = useContext(ContextListCount);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    valueMin: 0,
    valueMax: Number.MAX_VALUE,
  });

  useEffect(() => {
    const newProduct = productService.findByPrice(
      queryParams.valueMin,
      queryParams.valueMax
    );
    setProducts(newProduct);
    setContextListCount(newProduct.length);
  }, [queryParams]);

  function handleFilter(priceMin: number, priceMax: number) {
    setQueryParams({ valueMin: priceMin, valueMax: priceMax });
  }

  return (
    <>
      <main>
        <section id="card-filter-section">
          <CardFilter onFilter={handleFilter} />
          <section id="card-listing-section">
            <CardListing products={products} />
          </section>
        </section>
      </main>
    </>
  );
}
