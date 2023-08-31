import Slider from "react-slick";
import "./slick-theme.css"
import "./slick.css"

const SlickCarousel = ({sliderList} ) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,  
    lazyLoad: true,
  };
  
    return (
      <>
        <Slider {...settings}>
          {sliderList.map((slide) => 
              (<img
                  src={slide.photoSlider}
                  alt='photoSlider'
              />))}
        </Slider>
      </>
    );
  };
  
  export default SlickCarousel;