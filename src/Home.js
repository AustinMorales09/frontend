
import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cincy1 from './imgs/cincy1.jpg';
import cincy2 from './imgs/cincy2.jpg';
import cincy3 from './imgs/cincy3.jpg';
import foodDrinksImage from './imgs/fooddrinks.jpg';
import forecastImage from './imgs/forecast.png';
import historyImage from './imgs/history.jpg';
import nightlifeImage from './imgs/nightlife.jpeg';
import parkingImage from './imgs/parking.jpg';
import sportsImage from './imgs/sports.png';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
  };

  return (
    <div>
      <div className="title-container">
        <div className="title">Cincy Finds</div>
        <div className="subtitle">Cincinnati's Hidden Gems</div>
      </div>
      <div className="carousel-container">
        <Slider {...sliderSettings}>
          <div>
            <img src={cincy1} alt="Cincy 1" />
          </div>
          <div>
            <img src={cincy2} alt="Cincy 2" />
          </div>
          <div>
            <img src={cincy3} alt="Cincy 3" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
      <div className="summary-container">
        <p>
          Explore the richness of Cincinnati with Cincy Finds. Uncover the city's best-kept secrets, from vibrant nightlife to convenient parking, diverse food and drinks, and more—all curated in one place for your discovery.
        </p>
      </div>
      <div className="category-container">
        <img src={foodDrinksImage} alt="Food & Drinks" />
        <img src={forecastImage} alt="Forecast" />
        <img src={historyImage} alt="History" />
        <img src={nightlifeImage} alt="Nightlife" />
        <img src={parkingImage} alt="Parking" />
        <img src={sportsImage} alt="Sports" />
      </div>
    </div>
  );
}

export default Home;

