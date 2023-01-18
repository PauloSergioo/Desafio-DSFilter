import "./styles.css";
import CardFilter from "../CardFilter";
import CardListing from "../CardListing";


export default function ListingBody() {

  function handleFilter(min: number, max: number) {
    

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
