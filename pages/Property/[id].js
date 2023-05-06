import React from "react";
import { usePropertyFormat } from "../../lib/usePropertyFormat";
import { LocationOn } from "@mui/icons-material";
import Thumbnail from "../../features/components/Thumbnail";
import PropertyStats from "../../features/components/PropertyStats";
import Youtube from "../../features/components/Youtube";
import VideoRender from "../../features/components/VideoRender";
import { getPropertyDetails } from "../api/getPropertyDetails";

const PropertyDetails = ({ property }) => {
  const {
    address,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
    indyScore,
  } = usePropertyFormat(property);

  return (
    <section>
      <div className="bg-[#f7f8f9] h-[100%] py-[3rem] px-12">
        <h1 className="text-xl font-medium">
          {propertyType} {title}
        </h1>
        <h3 className="flex text-md gap-2 text-blue-800">
          <LocationOn /> {address} - ID:{externalID}
          <span className="uppercase">{purpose}</span>
        </h3>

        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-2 h-[100%]">
            <Thumbnail photos={photos} />{" "}
          </div>
          <div className="col-span-2  h-[100%]">
            {" "}
            <PropertyStats
              rooms={rooms}
              baths={baths}
              price={price}
              sqSize={sqSize}
              indyScore={indyScore}
              description={description}
              amenities={amenities}
            />{" "}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="col-span-2 h-[20rem]">
            <Youtube coverVideo={coverVideo} />
          </div>
          <div className="col-span-2 h-[20rem]">
            <VideoRender panorama={panorama} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;

export async function getServerSideProps(context) {
  // const property = require("../../json/Property");
  const { id } = context.query;
  const property = await getPropertyDetails(id);

  return {
    props: { property: property },
  };
}
