import BannerImg from "../assets/img2k.jpg";
import BannerBackground from "../assets/bg-1.svg";
const Banner = () => {
  return (
    <div
      className="main-container flex items-center"
      style={{
        backgroundImage: `url(${BannerBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full flex justify-center">
        <div className="w-2/3 space-y-5 ms-10">
          <h2 className="text-3xl font-semibold">Hi, I am </h2>
          <h1 className="text-5xl font-bold">Asish Kumar Sahu</h1>
          <h3 className="text-2xl">I am frontend developer</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            pariatur consequatur odio nisi qui fuga quam quae. Illum earum in
            aspernatur. Laboriosam deleniti accusantium id fugit minus nihil
            voluptates quo voluptatibus vitae ab. Molestiae, quibusdam fugiat
            laboriosam quisquam reiciendis eius saepe veniam nobis dolore, modi
            consequatur ea debitis rerum sed?
          </p>
          <div className="icon-container text-4xl space-x-5">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
          </div>

          <br />
          <a
            className="text-1xl px-3 py-2 bg-orange-500 rounded-full shadow-lg"
            href="/contact"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="h-auto max-w-full drop-shadow-md sm:rounded-md">
        <img src={BannerImg} className="rounded-full shadow-lg w-fit" />
      </div>
    </div>
  );
};

export default Banner;
