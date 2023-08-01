import React from "react";

export const Nav_Links = [
  {
    id: 1,
    name: "Home",
    to: "/",
    icon: <i className="fa-solid fa-house"></i>,
  },
  {
    id: 2,
    name: "Search",
    to: "/search",
    icon: <i className="fa-solid fa-magnifying-glass"></i>,
  },
  {
    id: 3,
    name: "About",
    to: "/about",
    icon: <i className="fa-solid fa-circle-info"></i>,
  },
  {
    id: 4,
    name: "Profile",
    to: "/user-profile",
    icon: <i className="fa-solid fa-user"></i>,
  },
];


export const fieldValue = (socialLinks, name) => {
  if (name === "instagram") {
    return socialLinks.instagram;
  } else if (name === "facebook") {
    return socialLinks.facebook;
  } else if (name === "twitter") {
    return socialLinks.twitter;
  } else if (name === "linkedin") {
    return socialLinks.linkedin;
  }
};

export const socialMedia_Fields = [
  {
    id: "Instagram",
    name: "instagram",
    placeholder: "Enter Instagram url here...",
  },
  {
    id: "Facebook",
    name: "facebook",
    placeholder: "Enter Instagram url here...",
  },
  {
    id: "Twitter",
    name: "twitter",
    placeholder: "Enter Instagram url here...",
  },
  {
    id: "Linkedin",
    name: "linkedin",
    placeholder: "Enter Instagram url here...",
  },
];

export const socialLinks = [
  {
    id: 1,
    alt: "instagram",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png",
  },
  {
    id: 2,
    alt: "facebook",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png",
  },
  {
    id: 3,
    alt: "twitter",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png",
  },
  {
    id: 4,
    alt: "linkedin",
    src: "https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png",
  },
];

export const adminSocialMedia = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/uttamthegoat",
    imgUrl:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/uttam-prabhu-685562249/",
    imgUrl:
      "https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png",
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/uttamthegoat/",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png",
  },
];
