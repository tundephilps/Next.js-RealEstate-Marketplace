import React from "react";
import PropertyCard from "./PropertyCard";

function Properties({ featuredProperties }) {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-600">
          Insights
        </h2>
        <p className="mt-1 text-gray-400 ">
          Stay in the know with insights from industry experts.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className=" col-span-2   ">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {featuredProperties.map((property) => (
              <div key={property.id}>
                <PropertyCard key={property.id} {...property} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div
            className="group relative flex flex-col w-full min-h-[35rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')]"
            href="#"
          >
            <div className="flex-auto p-4 md:p-6 col-span-1">
              <h3 className="text-xl text-white/[.9] group-hover:text-white">
                <span className="font-bold">Preline</span> Press publishes books
                about economic and technological advancement.
              </h3>
            </div>
            <div className="pt-0 p-4 md:p-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
                Visit the site
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fillRule="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
