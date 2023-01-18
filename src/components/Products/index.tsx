import { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  data: ProductDTO;
};

export default function Products({ data }: Props) {
  return (
    <div className="card-products">
      <h5>{data.name}</h5>
      <h6>R$ {data.price}</h6>
    </div>
  );
}
