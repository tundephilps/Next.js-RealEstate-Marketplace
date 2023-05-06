import Image from "next/image";
import React from "react";
import avatar2 from "../../pages/Images/avatar2.jpeg";

const Testimonial = () => {
  return (
    <section className="bg-gray-900">
      <div className="w-full px-4 py-20 mx-auto text-center max-w-7xl md:w-4/5 lg:w-4/6">
        <h1 className="mt-3 mb-10 text-xl font-extrabold text-white md:leading-snug md:text-3xl">
          “Implementation is a breeze, particularly because the team at
          Hellonext is
          <span className="text-white bg-transparent bg-clip-border xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r from-green-400 to-purple-500">
            {" "}
            very fast to respond and help{" "}
          </span>
          where needed, even if it means rolling out new features on their
          platform.  We're super happy and are loving how Hellonext brings us
          closer to the members of our community“
        </h1>
        <div className="flex items-center justify-center  ">
          <Image
            src={avatar2}
            height="10px"
            className="rounded-[50%] shadow-lg "
            alt="Praveen Juge"
          />
        </div>
        <p className="text-base font-medium text-gray-200">Praveen Juge</p>
        <p className="text-xs font-medium text-gray-400">CEO, Birds</p>
      </div>
    </section>
  );
};

export default Testimonial;
