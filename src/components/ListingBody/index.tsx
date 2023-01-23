import "./styles.css";
import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import * as productService from "../../services/data";
import Products from "../Products";
import { useEffect, useState } from "react";

type QueryParams = {
  valueMin: number;
  valueMax: number;
};

export default function ListingBody() {
  
  const [queryParams, setQueryParams] = useState<QueryParams>({
    valueMin: 0,
    valueMax: Number.MAX_VALUE,
  });

  useEffect(() => {
    productService
      .findByPrice(queryParams.valueMin, queryParams.valueMax)
      .map((product) => <Products key={product.id} data={product} />);
  }, [queryParams]);

  function handleFilter(priceMin: number, priceMax: number) {
    setQueryParams({valueMin: priceMin, valueMax: priceMax});
    console.log(queryParams);
  }

  return (
    <>
      <main>
        <section id="card-filter-section">
          <CardFilter onFilter={handleFilter} />
          <section id="card-listing-section">
            <CardListing />
          </section>
        </section>
      </main>
    </>
  );
}
