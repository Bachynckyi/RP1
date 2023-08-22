import image1 from '../../images/color.jpg';
import image2 from '../../images/slider.jpg';
import Slider from "react-slick";
import "./slick-theme.css"
import "./slick.css"

const SlickCarousel = () => {
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
              <img src={image1} alt='123'/>
              <img src={image2} alt='123'/>
        </Slider>
      </>
    );
  };
  
  export default SlickCarousel;