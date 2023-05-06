import React from "react";

const PropertyStats = ({
  rooms,
  baths,
  price,
  sqSize,
  indyScore,
  description,
  amenities,
}) => {
  return (
    <>
      {" "}
      <div className="bg-white p-[1.5rem] mb-[1rem]">
        <div>
          <div className="card">
            <div className="px-4 py-3 border-0 card-header">
              <h4 className="font-medium text-gray-800">Posts Stats</h4>
              <span className="text-white badge bg-primary">32 Total</span>
            </div>
            <div className="px-4 mb-1 -mt-2 divide-y divide-gray-200 card-body">
              <div className="flex items-center justify-between py-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-5 h-5"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>BEDS</span>
                </div>
                <span className="font-mono text-gray-900">{rooms}</span>
              </div>
              <div className="flex items-center justify-between py-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>BATHS</span>
                </div>
                <span className="font-mono text-gray-900">{baths}</span>
              </div>
              <div className="flex items-center justify-between py-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>SIZE</span>
                </div>
                <span className="font-mono text-gray-900">{sqSize}</span>
              </div>
              <div className="flex items-center justify-between py-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>PRICE</span>
                </div>
                <span className="font-mono text-green-800 bg-green-200 badge">
                  {price}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Closed</span>
                </div>
                <span className="font-mono text-red-700 bg-red-200 badge">
                  NO
                </span>
              </div>
            </div>
            <a
              href="#"
              className="px-4 py-3 text-sm font-medium text-purple-700 hover:text-purple-900 card-footer"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white p-[1.5rem] mb-[1rem]">
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div></div>
              <div>
                <h4 className="font-bold">Description</h4>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">{indyScore}</span>
            </div>
          </div>
          <div className="p-4 space-y-2  text-sm dark:text-gray-400 text-clip overflow-hidden ... ">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-[1.5rem] mb-[1rem]">
        <div className="container px-4 py-2 mx-auto space-y-2 lg:max-w-3xl">
          <h2 className="text-2xl font-bold md:text-4xl">Amenities</h2>
          <div className="space-y-8">
            <div>
              <ul className="space-y-4">
                <li className="space-y-1  grid grid-cols-2">
                  "PLEASE CONTACT US FOR INFO"
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyStats;

{
  /*amenities.length
  ? amenities.map((items) => (
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4 fill-current text-violet-500"
        >
          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
        </svg>

        <p className="ml-7 text-gray-500">{item}</p>
      </div>
    ))
  : "Please contact us for info"*/
}
