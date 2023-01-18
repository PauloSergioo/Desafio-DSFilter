import "./styles.css";
import * as productService from "../../services/data";
import Products from "../Products";

export default function CardListing() {
  return (
    <div className="card-listing dsf-container">
      {productService.findByPrice(0, Number.MAX_VALUE).map((product) => (
        <Products key={product.id} data={product} />
      ))}
    </div>
  );
}
