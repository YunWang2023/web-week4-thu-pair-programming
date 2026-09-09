import { useState } from "react";
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const removeTour = (tourId) => {
    setToursData(toursData.filter(tour => tour.id !== tourId));
  }

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} onRemove={removeTour}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;