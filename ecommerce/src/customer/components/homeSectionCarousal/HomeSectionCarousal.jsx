// import React, { useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import Button from "@mui/material/Button";
// // import { mens_kurta } from "../../../data/mens/men_kurta";

// const HomeSectionCarousal = ({ data }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5 },
//   };

//   const slidePre = () => setActiveIndex(activeIndex - 1);
//   const slideNext = () => setActiveIndex(activeIndex + 1);
//   const syncSlide = ({ item }) => setActiveIndex(item);
//   console.log("pre", slidePre);
//   console.log("Next", slideNext);
//   console.log("sync", syncSlide);

//   const items = data?.slice(0, 10).map((item, index) => (
//     <div>
//       <HomeSectionCard product={item} key={index} />
//     </div>
//   ));
//   console.log("items", items);
//   console.log(data);

//   return (
//     <div className="relative px-4 lg:px-8 sm:px-6 ">
//       <div className=" realtive border p-5">
//         <AliceCarousel
//           mouseTracking
//           items={items}
//           disableButtonsControls
//           responsive={responsive}
//           disableDotsControls
//           onSlideChanged={syncSlide}
//           activeIndex={activeIndex}
//         />
//       </div>

//       {activeIndex !== items.length - 5 && (
//         <Button
//           className=" z-50"
//           onClick={slideNext}
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             right: "0rem",
//             transform: "translateX(50%) rotate(90deg)",
//           }}
//           color="white"
//           aria-label="next"
//           variant="contained"
//         >
//           <ChevronLeftIcon sx={{ transform: "rotate(-90deg)" }} />
//         </Button>
//       )}

//       {activeIndex !== 0 && (
//         <Button
//           className="z-50 bg-[]"
//           onClick={slidePre}
//           color="white"
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             left: "0rem",
//             transform: "translateX(-50%) rotate(90deg)",
//           }}
//           aria-label="next"
//           variant="contained"
//         >
//           <ChevronRightIcon sx={{ transform: "rotate(90deg)" }} />
//         </Button>
//       )}
//     </div>
//   );
// };

// export default HomeSectionCarousal;

import React from "react";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";

const HomeSectionCarousel = ({ data, sectionName }) => {
  return (
    <div className=" border border-gray-100 relative px-4 lg:px-8 sm:px-6">
      <h3 className="text-2xl font-extrabold text-gray-800">{sectionName}</h3>
      <div className="relative py-5 overflow-x-auto whitespace-nowrap custom-scrollbar">
        <div className="flex gap-4">
          {data?.slice(0, 10).map((item, index) => (
            <div key={index} className="inline-block">
              <HomeSectionCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
