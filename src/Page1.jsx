import React from "react";

function Page1() {
  return (
    <div>
      <h1 className="pt-3 font-bold text-xl text-[#303030]">
        Let’s get started. Which of these best describes you?
      </h1>
      <span className="text-[0.875rem] text-[#616161]">
        We’ll help you get set up based on your business needs.
      </span>
      <ul className="w-full my-4 flex gap-4 flex-col md:flex-row">
        <li className="w-full border rounded-md hover:bg-[#f7f7f7]">
          <label className="w-full h-full block radio" htmlFor="exp-1">
            <input type="radio" id="exp-1" name="exp" />
            <span className="text-sm font-light inline-block w-full h-full py-5">
              I'm just starting
            </span>
          </label>
        </li>
        <li className="w-full border rounded-md hover:bg-[#f7f7f7]">
          <label className="w-full h-full radio" htmlFor="exp-2">
            <input type="radio" id="exp-2" name="exp" />
            <span className="text-sm font-light inline-block w-full h-full py-5">
              I’m already selling online or in person
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Page1;
