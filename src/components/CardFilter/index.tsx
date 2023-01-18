import { useState } from "react";
import Button from "../Button";
import "./styles.css";

type FormData = {
  priceMin?: number;
  priceMax?: number;
};

type Props = {
  onFilter?: Function;
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
    const priceMin = formData.priceMin;
    const priceMax = formData.priceMax;

    if (onFilter) {
      onFilter(priceMin, priceMax);
      console.log(onFilter);
    }
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
