import "./styles.css";
import * as productService from "../../services/data";
import Products from "../Products";
import { ProductDTO } from "../../models/product";

type Props = {
  products: ProductDTO[];
};

export default function CardListing({ products }: Props) {
  return (
    <div className="card-listing dsf-container">
      {products.map((product) => (
        <Products key={product.id} data={product} />
      ))}
    </div>
  );
}
