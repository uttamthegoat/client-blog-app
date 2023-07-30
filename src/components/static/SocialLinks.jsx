import React from "react";
import { socialLinks, fieldValue } from "../../assets/constants";
import { selectLinks } from "../../features/social-media/socialMediaSlice";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
              className="me-2 flex items-center justify-center bg-white rounded-xl"
            >
              <LazyLoadImage
                src={link.src}
                alt={link.alt}
                className="w-14"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
