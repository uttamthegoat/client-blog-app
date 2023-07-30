import React from "react";
import AboutTheWebsite from "../components/About/AboutTheWebsite";

const About = () => {
  const [age, setAge] = React.useState(0);
  React.useEffect(() => {
    const startDate = new Date("08/01/2004");
    const currentDate = new Date();
    setAge(Math.ceil((currentDate - startDate) / 31557600000));
  }, []);
  return (
    <div className="mt-12">
      <AboutTheWebsite myAge={age} />
    </div>
  );
};

export default About;
