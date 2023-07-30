import React from "react";
import brand from "../../assets/brand.jpg";
import theGoat from "../../assets/theGoat.jpeg";
import { adminSocialMedia } from "../../assets/constants";

const AboutTheWebsite = (props) => {
  let { myAge } = props;
  return (
    <div className="px-8 w-full mx-auto sm:w-9/12 md:w-10/12">
      <div>
        <h1 className="Style_name text-5xl font-bold pb-8 text-center">
          Blogger.
        </h1>
        <div className="mb-6">
          <img
            src={brand}
            alt="Brand_Logo"
            className="w-32 rounded-lg mx-auto transition-transform transform hover:scale-125  hover:cursor-pointer"
          />
        </div>
        <p className="font-bold text-xl">
          This is a platform for bloggers to blog. It provides various features,
          and an user-friendly interface to write blogs. Here are some of the
          feature it allows:
        </p>
        <ul className="ps-6 list-decimal text-lg font-semibold">
          <li>Users can can create an account.</li>
          <li>
            He/She can also update thier details, and change profile image.
          </li>
          <li>
            Once the user creates an account, he/she can read blogs written by
            others, write thier own blogs, add images to the blog.
          </li>
          <li>The user can also add tags to make it group up.</li>
          <li>
            The user can also edit/update the blog he/she has written, but not
            the one written by others.
          </li>
          <li>You can comment on the blogs written by others.</li>
          <li>You can search for a posts consisting of a particular tag.</li>
        </ul>
      </div>
      <div className="py-10">
        <h1 className="text-5xl font-bold mb-10 text-center">Creator</h1>
        <div className="mb-9">
          <img
            src={theGoat}
            alt="theGoat"
            className="w-56 rounded-lg mx-auto transition-transform transform hover:scale-125  hover:cursor-pointer"
          />
        </div>
        <p className="text-center text-4xl font-bold">Uttam</p>
        <p className="text-center text-2xl font-semibold">I am {myAge} years</p>
        <p className="text-center text-2xl font-semibold">About Me:</p>
        <p className="first-letter:text-4xl text-2xl">
          I am a student pursuing my engineering at Mangalore Institute of
          Technology and Engineering.As an aspiring engineer and Computer
          Science student, I am deeply passionate about coding and web
          development. Throughout my academic journey, I have honed my skills
          and expertise in various programming languages, frameworks, and tools,
          which has allowed me to embark on exciting projects. One such project
          that I take immense pride in is the creation of my own website. As a
          coder, I poured my heart and soul into designing a captivating and
          user-friendly website. This project not only demonstrates my technical
          prowess but also highlights my dedication to continuous learning and
          improvement. Through this website, I hope to inspire others and leave
          a lasting impact on the digital landscape.
        </p>
        <p className="mt-8 text-2xl font-semibold">Follow me at:</p>
        <ul>
          {adminSocialMedia.map((link) => {
            return (
              <li
                key={link.id}
                className="flex justify-start items-center font-semibold my-2"
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className="w-8 rounded-lg me-2"
                />
                {link.name}:{" "}
                <a href={link.url} target="_blank" className="underline ms-2">
                  Visit my {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutTheWebsite;
