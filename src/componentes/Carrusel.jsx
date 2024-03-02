import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-prev" onClick={onClick}>
      Prev
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-next" onClick={onClick}>
      Next
    </button>
  );
};

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t39.30808-6/324257912_1236303360655721_3218172562760940124_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9534ce&_nc_eui2=AeHmbA002JOnyw9De66wqaCbFPjqApYOkvAU-OoClg6S8AEgf8rih6VxECh1r-fJp9sco83UJgfRb_r6ZMqorylO&_nc_ohc=XrQcMdUbUOsAX__Ti9R&_nc_ht=scontent.fcuu1-1.fna&oh=00_AfAgyhTmcRxe7zGbi6pM_V_7IA3rPSBUwPdRorNsFuPgRQ&oe=65E9112E" width="1000" height="400" alt="slide1" />

        </div>
        <div>
            <img src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t39.30808-6/278977062_992513744736684_5923401089663283315_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeF71xAGEPBmteSZTImzsmAKCPk2lQZ3OKQI-TaVBnc4pLqSx1goIeca5E3nkzcPcP1r4NnDtFMZ0SK1XbeO5IjA&_nc_ohc=hws0pf2JpLsAX852ik6&_nc_ht=scontent.fcuu1-1.fna&oh=00_AfANCF3Cnxa-m3q7-fvXooEKLHb2qN5MZEdE6c34FGAFvw&oe=65E815AB" width="1000" height="400" alt="slide2" />
         
        </div>
        <div>
          <img src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t1.6435-9/39265646_240505726604160_1533958302889672704_n.png?_nc_cat=106&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeGXuejXL7l7oCsni0QmwwWvTWQH-uGEFplNZAf64YQWmVdZd9zCygtB-mA-37VcItFQhYZCCQS7nEi6d_WBAuVR&_nc_ohc=RXT07RSU-l0AX9LYjun&_nc_ht=scontent.fcuu1-1.fna&oh=00_AfB0asWexITWzv1udyZoGvRQ_paAqYeYO2zkYt87r4wCfA&oe=660AF636" width="1000" height="400" alt="slide3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;
