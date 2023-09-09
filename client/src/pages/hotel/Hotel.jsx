import "./hotel.css";
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openImg, setOpenImg] = useState(false);
  const photos = [
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
  ];
  const handleOpenImg = (index) => {
    setSlideNumber(index);
    setOpenImg(true);
  };

  const handleMove = (op) => {
    let newSlideNumber;
    if (op === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    } 
    setSlideNumber(newSlideNumber)
  };
  return (
    <div>
      <NavBar />
      <Header type="list" />

      <div className="hotelContainer">
        {openImg && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpenImg(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Ibeju Lekki, Lagos, Nigeria</span>
          </div>
          <span className="hotelDistance">location - 500m from center</span>
          <span className="hotelPriceHighlight">
            Book a stay over for 20000 NGN at this property and get a free
            airport taxi
          </span>

          <div className="hotelImgs">
            {" "}
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpenImg(index)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Lagos</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt voluptatum a non cupiditate amet animi enim perferendis
                ipsum, nemo eveniet eaque. Earum facilis laboriosam nostrum
                veniam cum corrupti quibusdam id. Dolores unde cupiditate soluta
                officia voluptatum a. At, quis deserunt vel ex necessitatibus
                eius, beatae consequuntur est expedita facilis adipisci
                voluptates? Exercitationem sint porro nulla quae laborum aut
                repellendus repudiandae? Eveniet sint quas in, animi soluta quam
                inventore esse nobis. Quia maxime dolorum autem, tenetur
                inventore veniam pariatur porro tempore, natus obcaecati
                quibusdam. In, eius? Non incidunt voluptates sed fugit.
                Obcaecati ex temporibus commodi saepe sit. Illum, suscipit
                accusantium. Dolores corporis autem praesentium asperiores
                nostrum iure commodi quos laborum! Ad dolorem molestias
                doloremque sequi veniam exercitationem sunt, consectetur quae
                beatae! Deserunt laudantium ut ipsam sit necessitatibus eum,
                iure similique dolore labore accusantium corporis eos doloremque
                quas exercitationem, sed dolorem, blanditiis saepe sint rem iste
                officia. Fugiat nesciunt necessitatibus magni labore.
              </p>
            </div>

            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Lagos, this property has an
                excellent location of 9.8
              </span>
              <h2>
                <b>120000 NGN</b> (9 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
