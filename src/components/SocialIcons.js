import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <FaTelegram
        className="icon text-blue-400 telegram
						swing-animation"
      />
      <FaXTwitter
        className="icon text-white twitter 
						pulse-animation"
      />
      <FaInstagram
        className="icon text-orange-500 insta
						rotate-animation"
      />
      <CiFacebook
        className="icon text-blue-500 fb 
						bounce-animation"
      />
      <FaWhatsapp
        className="icon text-green-500 whatsapp 
						flash-animation"
      />
      <CiYoutube
        className="icon text-red-400 youtube 
						shake-animation"
      />
      <CiLinkedin
        className="icon text-indigo-400 linkedin 
						flip-animation"
      />
    </div>
  );
};
export default SocialIcons;
