import React from "react";
import { usePropertyFormat } from "../../lib/usePropertyFormat";

import { Bathroom, Bed, SquareFootSharp } from "@mui/icons-material";
import Link from "next/link";

const PropertyCard = (property) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
  } = usePropertyFormat(property);

  return (
    <div>
      <Link href={`/Property/${externalID}`}>
        <div className="group rounded-xl overflow-hidden" href="#">
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <div
              className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              style={{
                backgroundImage: `url("${coverPhoto}")`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
              alt="Image Description"
            ></div>
            <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 uppercase text-white py-1.5 px-3">
              {purpose}
            </span>
            <span className="absolute bottom-0 left-0 bg-green-600 py-2 px-3 font-medium text-xs rounded-tr-md">
              {price}
            </span>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
              {propertyType}
            </h3>
            <p className="mt-3 text-gray-800 text-xs truncate text-ellipsis overflow-hidden ...">
              {address}
            </p>
            <p className="text-gray-600 text-md">{title}</p>
            <div className=" mt-2 flex flex-row gap-1 text-gray-600 text-xs font-thin">
              <Bed sx={{ fontSize: "20px" }} />
              <span>{rooms}</span> <Bathroom sx={{ fontSize: "20px" }} />
              <span>{baths}</span> <SquareFootSharp sx={{ fontSize: "20px" }} />
              <span>{sqSize}</span>
              <sup className="text-[9px] pt-1">m2</sup>
            </div>
            <Link href={`/Property/${externalID}`}>
              {" "}
              <p className="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
                View Details
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
