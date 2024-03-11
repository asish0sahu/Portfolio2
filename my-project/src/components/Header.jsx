import { useState } from "react";

const Header = () => {
    const [brand,setBrand] =useState("Welcome to my portfolio");
    const [menuLinks,setMenuLinks]= useState([
        {
            title:"Home",
            link:"/home",
            id:1,
        },
        {
            title:"About",
            link:"/about",
            id:2,
        },
        {
            title:"Skills",
            link:"/skills",
            id:3,
        },
        {
            title:"Portfolio",
            link:"/portfolio",
            id:4,
        },
        {
            title:"Contact",
            link:"/contact",
            id:5,
        }
    ])

    const [actionButton,setActionButton]= useState({
        title:"Hire Me",
        link:"/hire-me"
    });

  return (
    <>
    <div className=" h-20 main flex justify-between items-center px-16 bg-gray-100">
      <div>
        <h1 className="text-2xl font-bold">{brand}</h1>
      </div>
      <div className="space-x-6">
        {menuLinks.map((link)=>(
                <a key={link.id} href={link.link} className="hover:text-orange-400">{link.title}</a>
        ))}
        
        {/* <a href="/about" className="hover:text-orange-400">About</a>
        <a href="/skills" className="hover:text-orange-400">Skills</a>
        <a href="/portfolio" className="hover:text-orange-400" >Portfolio</a>
        <a href="/contact" className="hover:text-orange-400">Contact</a> */}
      </div>
      <button href={actionButton.link} className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg">
        {actionButton.title}
      </button>
      </div>
    </>
  );
};

export default Header;
