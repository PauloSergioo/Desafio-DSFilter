import { useContext } from "react";
import { ContextListCount } from "../../util/context-listing";
import "./styles.css";

export default function Header() {
  const { contextListCount } = useContext(ContextListCount);

  return (
    <header>
      <div className="dsf-header dsf-container">
        <h1>DSFilter</h1>
        <p>{contextListCount} produto(s)</p>
      </div>
    </header>
  );
}
