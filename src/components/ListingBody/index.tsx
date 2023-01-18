import "./styles.css";
import CardFilter from "../CardFilter";
import CardListing from "../CardListing";

export default function ListingBody() {
  return (
    <>
      <main>
        <section id="card-filter-section">
          <CardFilter />
          <section id="card-listing-section">
            <CardListing />
          </section>
        </section>
      </main>
    </>
  );
}
