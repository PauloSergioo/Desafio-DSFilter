import Button from "../Button";
import "./styles.css";

export default function CardFilter() {
  return (
    <div className="search-filter dsf-container">
      <form>
        <input type="text" placeholder="Preço mínimo" />
        <input type="text" placeholder="Preço máximo" />
        <Button />
      </form>
    </div>
  );
}
