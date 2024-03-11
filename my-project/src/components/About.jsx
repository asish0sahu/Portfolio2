import { useState } from "react";
import Aboutsection from "../assets/img2h.png";
const About = () => {
  const [data,setData]=useState({
    image:Aboutsection,
    title:"Frontend Developer & Backend Developer",
    desc1:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio vero eveniet in nobis nisi aspernatur ipsa nam fugiat dolorum saepe error iure incidunt ab nihil quaerat corrupti, veniam eligendi?`,
    desc2:`Took me a while to finish this project, but it was definitely worth it. I enjoyed every step of the process and learned a few tricks along the way. Sure, there were some frustrating moments, but everything was worth it. I was able to pick more tools, such as getting a Chrome extension to identify the z-index relationship between elements and getting my hands on Figma, which is a pretty dope wireframing/prototyping software`,
    actionButton:{
      title:"Read More...",
      link:"/readmore"
    }

  });
  return (
    <>
      <div className="main-container py-16 bg-gray-100 border">
        <h1 className="text-5xl underline font-bold text-center pb-16">About Me</h1>
        <div className="flex">
            {/*images */}
            <div className="py-6 w-full flex justify-center">
                <img src={Aboutsection}  className="rounded-2xl w-fit" alt="aboutimg"/>
            </div>
            {/*text */}
            <div className="w-full flex justify-center">
              <div className="space-y-5 w-2/3">
                <h1 className="text-4xl font-semibold">{data.title}</h1>
                <p className="description">{data.desc1}</p>
                <p className="desciption">{data.desc2}</p>      
                <button className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg">{data.actionButton.title}</button>
                </div>
            </div>
            <div>

            </div>

        </div>
      </div>

    </>
  );
};

export default About;
