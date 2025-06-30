// import React from "react";

// const HomeSectionCard = ({ product }) => {
//     console.log(product)
//   return (
//     <div className="cursor-pointer w-[15rem] mx-3 flex flex-col items-center bg-white rounded-lg  shadow-lg overflow-hidden ">
//       <div className="w-[10rem] h-[13rem]">
//         <img
//           className="object-cover object-top w-full h-full"
//           src={product.imageUrl}
//           alt=""
//         />
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
//         <p className="text-sm text-gray-500 mt-2">{product.title}</p>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCard;

import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer mx-3 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-[10rem] h-[13rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="text-sm text-gray-500 mt-2">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
