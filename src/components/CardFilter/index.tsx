import { useState } from "react";
import Button from "../Button";
import "./styles.css";

type FormData = {
  priceMin?: number;
  priceMax?: number;
};

type Props = {
  onFilter: Function;
};

export default function CardFilter({ onFilter }: Props) {

  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onFilter(formData.priceMin || 0, formData.priceMax || Number.MAX_VALUE);
  }

  return (
    <div className="search-filter dsf-container">
      <form onSubmit={handleSubmit}>
        <input
          name="priceMin"
          value={formData.priceMin || ""}
          type="text"
          placeholder="Preço mínimo"
          onChange={handleInputChange}
        />
        <input
          name="priceMax"
          value={formData.priceMax || ""}
          type="text"
          placeholder="Preço máximo"
          onChange={handleInputChange}
        />
        <Button />
      </form>
    </div>
  );
}
