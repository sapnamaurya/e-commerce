import React from "react";
import MainCarousel from "../../components/homeCarousel/MainCarousel";
// import HomeSectionCard from "../../components/homeSectionCard/HomeSectionCard";
import HomeSectionCarousal from "../../components/homeSectionCarousal/HomeSectionCarousal";
import { mens_kurta } from "../../../data/mens/men_kurta";
import { mens_jeans } from "../../../data/mens/men_jeans";
import { mens_shirt } from "../../../data/mens/men_shirt";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="py-8  lg:px-8  space-y-10 flex flex-col justify-center">
        {" "}
        <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousal
          data={mens_jeans}
          sectionName={"Men's Jeans"}
        />{" "}
        <HomeSectionCarousal data={mens_shirt} sectionName={"Men's Shirt"} />{" "}
        <HomeSectionCarousal data={mens_kurta} sectionName={"Women's Saree"} />{" "}
        <HomeSectionCarousal data={mens_kurta} sectionName={"Women's Dress"} />{" "}
      </div>
    </div>
  );
};

export default HomePage;
