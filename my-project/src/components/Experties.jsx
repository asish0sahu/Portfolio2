import BannerBackground from '../assets/bg-3.svg';
const Experties = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className="mb-16 text-5xl underline font-bold text-center pb-16">
          My Experties
        </h1>
      </div>
      <div style={{
        backgroundImage: `url(${BannerBackground})`,
        backgroundSize: "cover",
      }} className="box-container items-center flex my-16">
        <div className="flex justify-center">
          <div className="w-2/3 text-center space-y-4">
            {/* {text container} */}
            <h1 className="text-4xl font-semibold">Working on These Technology</h1>
            <p>
            Frontend technologies and backend technologies work together through a process of sending requests and responses to create a whole and functional web application. The front end establishes the user interface that users interact with, while the back end handles the server-side logic and data management
            </p>
            <button className="px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg hover:bg-orange-300">
              checkout 
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {/*skill container */}
          <div className="flex w-2/3 h-fit space-y-3 flex-wrap">
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">
              Core Python
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">HTML5</p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">CSS3</p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">
              Javascript
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">
              Tailwind Css
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">
              BootStarp
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">React Js</p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">Node Js</p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">Express</p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">Mongo DB</p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">SQLLite</p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">Git</p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">Python</p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">PHP</p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-500 cursor-pointer">Spring Boot Framework</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experties;
