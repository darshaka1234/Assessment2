import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Card from "./Card";
import { data } from "./data";

const Home = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="py-4 py-lg-5 container">
      <div className="row">
        {data.map((item) => {
          return (
            <Card
              aos="fade-up"
              aos_offset="100"
              img={item.img}
              quant={item.quant}
              price={item.price}
              name={item.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Home;
