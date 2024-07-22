import React from "react";

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
  {
    name: "eBay",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/ebay-b1a72911a1502a54dcb08c6f1c7f5f1ad6b3f33c762fd320db73c2a5a17d3fb5.svg",
  },
  {
    name: "Wix",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/wix-d75f748b09bdb18da96ec6cd30149da1999647142ae5606e2191626bcb8a0574.svg",
  },
  {
    name: "WordPress",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/wordpress-34aaa6dafec247d4c34d5c8bc62026a76c83a316e3508cf049044e84e362bdb9.svg",
  },
  {
    name: "WooCommerce",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/woocommerce-edde07504650036dfbeb7249c7eefbf6fe507777721c78f2a57d97010db35523.svg",
  },
  {
    name: "Squarespace",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/squarespace-049a8cb70e9304d19f93524f069454509d96d4b6312bd88c373e8604ea45eeb5.svg",
  },
  {
    name: "Facebook Marketplace",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/facebook_marketplace-37996c861e5be830044c83ab03ac214a7e1232e4c99326768c12d89e74a4ebd1.svg",
  },
  {
    name: "Instagram",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/instagram-147a42b749bbb9e64177984baa986c46d7b62ab946d6308ff070c40797fae26c.svg",
  },
  {
    name: "GoDaddy",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/godaddy-a1ecaf182e888ea60cf86434a17317a919ce468cade72634cd2c1f7882b7b9ce.svg",
  },
  {
    name: "Big Cartel",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/big_cartel-d9825cc84d9bc3790c080747166c1ed14795407bb7c704884d64cd6045162169.svg",
  },
  {
    name: "BigCommerce",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/bigcommerce-9c64cbb6aabb516b187cee4665225d766548e253b7f18158d427003caf400319.svg",
  },
  {
    name: "Lightspeed",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/lightspeed-bfb056487501b3dfe5020d38d7ae1d5296abfa4155f3faafcf6eea96fd31e6f7.svg",
  },
  {
    name: "Clover",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/clover-cfd2e5fcfeb5f3128d841d234cb81136e6fc35f562f65462c4511d18058836f8.svg",
  },
  {
    name: "Magento",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/magento-daad6e2d9b3016fa22e8586a97451f3b76cb0d482eb0d3a6796f0f3bfecd098b.svg",
  },
  {
    name: "PrestaShop",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/prestashop-a99a7b3e17de633b1e993f3e0e9b08d16166d9907f6262eb7109e52afc665987.svg",
  },
  {
    name: "OpenCart",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/opencart-d9849fd3589ce2cffe6daf8498c0d23947d7c678333409e2427c7d6eeae0ed9e.svg",
  },
  {
    name: "Vend",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/vend-b1c52e3dc5815efcfb57116ca9a90a7ff83f786243df5c6f8155213b240259c5.svg",
  },
  {
    name: "ShopKeep",
    imageLink:
      "https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/shopkeep-a8e2f5001b85df0e5f3e266ccacd87d0af4889cbb0cfe6ef925dc3e48e379e0f.svg",
  },
  {
    name: "Cash, pen and paper, or cash register",
    imageLink: null,
  },
  {
    name: "Other",
    imageLink: null,
  },
];

function Page2() {
  return (
    <div>
      <h1 className="pt-3 font-bold text-xl text-[#303030]">
        Are you currently selling through another platform?
      </h1>
      <span className="text-[0.875rem] text-[#616161]">
        Do you already sell through a POS, marketplace, or ecommerce platform?
        We can help you import your store.
      </span>

      <div className="relative">
        <ul className="w-full my-4 pb-8 grid gap-4 grid-cols-2 max-h-[28rem] overflow-y-scroll">
          {platforms.map((platform, index) => (
            <li
              key={index}
              className="w-full border rounded-md hover:bg-[#f7f7f7]"
            >
              <label
                className="w-full h-full block radio relative"
                htmlFor={`exp-${index}`}
              >
                <input type="radio" id={`exp-${index}`} name="exp" />
                <span className="text-sm font-light inline-block w-full h-full py-5">
                  {platform.name}
                </span>
                <img
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  src={platform.imageLink}
                  alt=""
                />
              </label>
            </li>
          ))}
        </ul>
        <div className="blur-border" />
      </div>
    </div>
  );
}

export default Page2;
