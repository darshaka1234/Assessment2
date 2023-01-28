import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Card = ({ aos, aos_offset, img, quant, price, name }) => {
  return (
    <div
      data-aos={aos}
      data-aos-offset={aos_offset}
      className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
    >
      <div className="card p-0 overflow-hidden h-100 shadow">
        <AliceCarousel
          autoPlay
          mouseTracking
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          items={img}
        />
        {/* <img src={img} className="card-img-top" alt="" /> */}
        <div className="card-body">
          <p className="card text">{quant}</p>
          <h5 className="card-title">{name}</h5>
          <p className="card text">{`Rs.${price}.00`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
