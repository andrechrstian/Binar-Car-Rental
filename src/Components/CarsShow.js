import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { convertToRupiah } from "../utils/function";
import "./CarsShow.css";

const CarsShow = (props) => {
  return (
    <div>
      <div className="carsshow-card-bg">
        {!!props.allCars.length ? (
          props.allCars.map((item, i) => {
            return (
              <div className="carsshow-card" key={i}>
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="carsshow-card-img"
                  />
                </div>
                <div className="carsshow-card-title">
                  <p className="carsshow-card-title-p">{item.name}</p>
                </div>
                <div className="carsshow-card-price">
                  <p className="carsshow-card-price-p">
                    Rp {convertToRupiah(item.price)} /hari
                  </p>
                </div>
                <div className="carsshow-card-desc">
                  <p className="carsshow-card-desc-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <div className="carsshow-card-button-bg">
                  <Link to={`/cardetail/${item.id}`}>
                    <button className="carsshow-card-button">
                      Pilih Mobil
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="carsshow-loading">
            <Spinner animation="grow" variant="primary" />
            Not Found, Try Again
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsShow;
