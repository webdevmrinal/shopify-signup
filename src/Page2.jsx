import React from "react";
import Header from "./Header";

const platforms = [
  {
    name: "No, I'm not using any platform",
    imageLink: null,
  },
  {
    name: "Square",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/square-c3f5d2ed189e39db4c52a63b8394031fbf5aa3495225449ff76f9cdbc10039b8.svg",
  },
  {
    name: "Amazon",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/amazon-6f5c72e2af68c01f1febdcb1ac71b71394e89a2fb00d2eb5fbb27fbdb48ea6fc.svg",
  },
  {
    name: "Etsy",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/etsy-ab3317744e7d923a44bcbea8b1f3f6fd84a5b8aff1c18edab99c3d741b805b5d.svg",
  },
  // Additional platforms can be uncommented as needed
];

function Page2() {
  return (
    <>
      <div>
        <h1 className="pt-3 font-bold text-xl text-[#303030]">
          I'm interested in courses categories
        </h1>

        <span className="text-[0.875rem] text-[#616161]">
          Do you already sell through a POS, marketplace, or ecommerce platform?
          We can help you import your store.
        </span>

        <div className="relative mt-4">
          <h1 className="mb-2 text-lg font-semibold">Courses</h1>
          <ul className="w-full pb-8 grid gap-4 grid-cols-2 max-h-56 overflow-y-auto">
            {platforms.map((platform, index) => (
              <li
                key={index}
                className="w-full border rounded-md hover:bg-[#f7f7f7]"
              >
                <label
                  className="w-full h-full block relative p-2 flex items-center"
                  htmlFor={`course-${index}`}
                >
                  <input
                    type="checkbox"
                    id={`course-${index}`}
                    name="course"
                    className="mr-2"
                  />
                  <span className="text-sm font-light flex-1 py-5">
                    {platform.name}
                  </span>
                  {platform.imageLink && (
                    <img
                      className="ml-2 h-8"
                      src={platform.imageLink}
                      alt={platform.name}
                    />
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mt-4">
          <h1 className="mb-2 text-lg font-semibold">Experts</h1>
          <ul className="w-full pb-8 grid gap-4 grid-cols-2 max-h-56 overflow-y-auto">
            {platforms.map((platform, index) => (
              <li
                key={index}
                className="w-full border rounded-md hover:bg-[#f7f7f7]"
              >
                <label
                  className="w-full h-full block relative p-2 flex items-center"
                  htmlFor={`exp-${index}`}
                >
                  <input
                    type="checkbox"
                    id={`exp-${index}`}
                    name="exp"
                    className="mr-2"
                  />
                  <span className="text-sm font-light flex-1 py-5">
                    {platform.name}
                  </span>
                  {platform.imageLink && (
                    <img
                      className="ml-2 h-8"
                      src={platform.imageLink}
                      alt={platform.name}
                    />
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Page2;
