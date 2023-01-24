import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextListCount } from "./util/context-listing";

export default function App() {
  const [contextListCount, setContextListCount] = useState<number>(0);

  return (
    <ContextListCount.Provider
      value={{ contextListCount, setContextListCount }}>
      <Header />
      <ListingBody />
    </ContextListCount.Provider>
  );
}
