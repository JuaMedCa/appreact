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
          <img src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t39.30808-6/406460219_340798202036364_1819692853239048508_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeHEUTGgMXbkX_ivNp3iXR_D09TDd9pdTXrT1MN32l1Nem8JZHl4ksV6EjyThLT8UXzRa2_obNwBaYaJWKPWvRbY&_nc_ohc=XTREQj-4cikAX_8FdsA&_nc_ht=scontent.fcuu1-1.fna&oh=00_AfAb4qK3nyyzZzgkcyAX_rjmYv-b8MBGSSqE6ZsfNU041A&oe=65E3D43F" width="1000" height="400" alt="slide1" />

        </div>
        <div>
            <img src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t39.30808-6/406415978_340824652033719_4184610915604348580_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFdqxjEYU264O8EXfsQ6DwppyHqdzOrOaGnIep3M6s5odtNGyNeAEeMbNBhxkazpEvhzg_gy7a2Bn7wbcSTqzVJ&_nc_ohc=NsuuEc_9pKIAX9-36v0&_nc_ht=scontent.fcuu1-1.fna&oh=00_AfAkZq6lRTMGaNhd_Xy9l18-sgS4a90MCbLFy99N2DgGrg&oe=65E3F7DA" width="1000" height="400" alt="slide2" />
         
        </div>
        <div>
          <img src="https://scontent.fcuu1-1.fna.fbcdn.net/v/t39.30808-6/277585898_105430625461013_2533772340739414405_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeGWgCkw0jePDX9svMIRyI6hQDyXt-6eirhAPJe37p6KuM47irzpjJ5igj78Fx3B2RevRhmcQhG9yrhrrM0F5FQ9&_nc_ohc=MnesZJF1FCQAX-yYk_m&_nc_ht=scontent.fcuu1-1.fna&oh=00_AfBk0t6o0eEBAlETUMDGv3mKL0pNv59_zYTYTtkn_y74wg&oe=65E52CA3" width="1000" height="400" alt="slide3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;
