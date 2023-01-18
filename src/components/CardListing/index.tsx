import "./styles.css";
import * as productService from "../../services/data";
import Products from "../Products";

export default function CardListing() {
  return (
    <div className="card-listing dsf-container">
            {
                productService.findAll().map(
                    product => <Products key={product.id} data={product} />)
            }
    </div>
  );
}
