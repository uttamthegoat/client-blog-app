import React from "react";
import { socialLinks, fieldValue } from "../../assets/constants";
import { selectLinks } from "../../features/social-media/socialMediaSlice";
import { useSelector } from "react-redux";

const SocialLinks = ({ heading }) => {
  const myLinks = useSelector(selectLinks);
  return (
    <div className="">
      <h1 className="font-bold">{heading}: </h1>
      <div className="flex mt-2">
        {socialLinks.map((link) => {
          return (
            <a
              key={link.id}
              target="_blank"
              href={fieldValue(myLinks, link.alt)}
            >
              <img src={link.src} alt={link.alt} className="w-14 pr-2" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
