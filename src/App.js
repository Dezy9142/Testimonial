import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col min-h-[100vh] w-[100vw] justify-center items-center bg-gray-100">

      <div className="text-center">
        {/* HEADING */}
        <h1 className="text-4xl font-bold">Our Testimonials</h1>

        {/* UNDERLINE DIV */}
        <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
         {/* TESTIMONAL COMPONENT */}
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
