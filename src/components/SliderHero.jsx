import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import onboarding1 from "../assets/onboarding1.png";
import oneboarding2 from "../assets/oneboarding2.png";
import onboarding3 from "../assets/onboarding3.png";
import mothlogo from "../assets/mothlogo.png";

function SliderHero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots custom-dots ",
  };

  return (
    <div className="container-slide bg-black md:h-[1500px] h-screen">
      <Slider {...settings}>
        <div className="flex flex-col justify-center items-center h-screen relative outline-none bg-black ">
          <div className="flex justify-start py-5 px-2 ">
            <img src={mothlogo}></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={onboarding1}
              alt="Slide 1"
              className="w-[50%] h-[400px] md:h-screen m-5 object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        <div className="relative outline-none">
          <div className="flex justify-start py-5 px-2 ">
            <img src={mothlogo}></img>
          </div>
          <img
            src={oneboarding2}
            alt="Slide 2"
            className="w-[100%] h-[400px] md:h-screen object-cover"
          />
        </div>
        <div className="relative outline-none">
          <div className="flex justify-start py-5 px-2 ">
            <img src={mothlogo}></img>
          </div>
          <img
            src={onboarding3}
            alt="Slide 3"
            className="w-[100%] h-[400px] md:h-screen  object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderHero;

function SlideContent({ title1, title2, content, image }) {
  return (
    <div className="absolute bottom-0 w-full flex flex-col items-center text-center">
      <div className=" w-full py-5">
        <h1 className="text-[25px] md:text-[40px] font-bold text-white">
          {title1}
        </h1>
        {title2 && (
          <h1 className="text-[25px] md:text-[40px] font-bold text-white">
            {title2}
          </h1>
        )}
        <p className="w-[80%] md:w-[58%] text-[#48484A] mx-auto">{content}</p>
      </div>
    </div>
  );
}
