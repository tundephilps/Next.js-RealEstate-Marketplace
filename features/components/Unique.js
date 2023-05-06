import Image from "next/image";
import React from "react";
import house from "../../pages/Images/house.jpg";
import kitchen from "../../pages/Images/kitchen.jpg";
import int from "../../pages/Images/int.jpg";

const Unique = () => {
  return (
    <div className="max-w-[85rem] h-50 px-6 py-10 sm:px-6 lg:px-14 lg:py-14 mx-auto">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
            <div className="col-span-4  bg-contain">
              <Image className="rounded-xl h-[40vh]" src={int} alt="" />
            </div>

            <div className="col-span-3">
              <Image className="rounded-xl h-[30vh]" src={house} alt="" />
            </div>

            <div className="col-span-5">
              <Image className="rounded-xl h-[60vh]" src={kitchen} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-500 ">
                Collaborative tools to design user experience
              </h2>
              <p className="text-gray-500">
                Use our tools to explore your ideas and make your vision come
                true. Then share your work easily.
              </p>
            </div>
            <ul role="list" className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fillRule="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fillRule="currentColor"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fillRule="currentColor"
                  />
                </svg>

                <span className="text-sm sm:text-base text-gray-500">
                  <span className="font-bold">Less routine</span> – more
                  creativity
                </span>
              </li>

              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fillRule="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fillRule="currentColor"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fillRule="currentColor"
                  />
                </svg>

                <span className="text-sm sm:text-base text-gray-500">
                  Hundreds of thousands saved
                </span>
              </li>

              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fillRule="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fillRule="currentColor"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fillRule="currentColor"
                  />
                </svg>

                <span className="text-sm sm:text-base text-gray-500">
                  Scale budgets <span className="font-bold">efficiently</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
