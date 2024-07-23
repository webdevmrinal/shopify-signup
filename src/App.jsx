import { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import SignUp from "./SignUp";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  const [step, setStep] = useState(1);
  const [showSignUp, setShowSignUp] = useState(false);

  const renderPage = () => {
    if (step < 10) {
      return <Page1 />;
    } else if (step >= 10 && step < 100) {
      return <Page2 />;
    }
  };

  return (
    <>
      <AnimatePresence
      // onExitComplete={() => {
      //   if (step > 100) {
      //     setShowSignUp(true);
      //   }
      // }}
      >
        {step <= 100 && (
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -75 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="md:h-screen md:w-screen md:flex md:items-center md:justify-center relative z-10"
          >
            <div className="px-5 md:px-14 w-full h-screen md:max-w-4xl md:h-[48rem] bg-white md:rounded-xl flex flex-col">
              {/* Logo */}
              <div className="pt-5 md:pt-12">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="92"
                  height="26"
                  viewBox="0 0 92 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.725 14.434c-.789-.426-1.194-.785-1.194-1.278 0-.628.563-1.031 1.443-1.031 1.023 0 1.937.426 1.937.426l.721-2.197s-.663-.516-2.614-.516c-2.715 0-4.597 1.547-4.597 3.721 0 1.233.878 2.175 2.05 2.847.947.537 1.286.919 1.286 1.479 0 .583-.474 1.053-1.353 1.053-1.31 0-2.546-.672-2.546-.672l-.766 2.197s1.143.762 3.065.762c2.795 0 4.8-1.368 4.8-3.833 0-1.322-1.014-2.264-2.232-2.958ZM42.859 9.816c-1.375 0-2.457.65-3.29 1.636l-.045-.022 1.194-6.21h-3.11l-3.02 15.803h3.11l1.037-5.401c.405-2.04 1.464-3.295 2.456-3.295.699 0 .97.47.97 1.143 0 .426-.046.942-.136 1.368l-1.171 6.186h3.11l1.217-6.388c.135-.673.226-1.48.226-2.018-.002-1.749-.926-2.802-2.548-2.802ZM52.437 9.816c-3.742 0-6.22 3.362-6.22 7.105 0 2.399 1.487 4.326 4.282 4.326 3.673 0 6.153-3.272 6.153-7.105 0-2.22-1.308-4.326-4.215-4.326Zm-1.533 9.056c-1.059 0-1.51-.896-1.51-2.017 0-1.771.924-4.663 2.615-4.663 1.104 0 1.464.942 1.464 1.861 0 1.905-.923 4.82-2.569 4.82ZM64.607 9.816c-2.099 0-3.29 1.838-3.29 1.838h-.045l.18-1.659h-2.749a65.765 65.765 0 0 1-.631 4.102l-2.164 11.32h3.11l.857-4.573h.068s.638.403 1.825.403c3.65 0 6.04-3.72 6.04-7.487 0-2.083-.925-3.944-3.2-3.944Zm-2.975 9.1c-.807 0-1.285-.448-1.285-.448l.519-2.891c.36-1.928 1.375-3.206 2.456-3.206.947 0 1.24.874 1.24 1.704 0 1.995-1.194 4.841-2.93 4.841ZM72.247 5.378a1.77 1.77 0 0 0-1.78 1.793c0 .92.586 1.547 1.464 1.547h.046c.969 0 1.802-.65 1.825-1.793 0-.897-.608-1.547-1.555-1.547ZM67.898 21.023h3.11l2.12-10.96h-3.134l-2.096 10.96ZM81.037 10.04h-2.163l.112-.515c.18-1.054.812-1.995 1.848-1.995.553 0 .992.157.992.157l.608-2.421s-.54-.269-1.69-.269c-1.105 0-2.209.314-3.043 1.031-1.059.897-1.555 2.196-1.802 3.497l-.09.516h-1.443l-.45 2.331h1.442l-1.645 8.652h3.11l1.645-8.652h2.141l.428-2.331ZM88.52 10.063s-1.944 4.872-2.817 7.531h-.046c-.06-.856-.766-7.53-.766-7.53h-3.268l1.871 10.063c.046.224.023.359-.068.516-.36.694-.969 1.367-1.69 1.86-.586.426-1.24.695-1.758.875L80.835 26c.63-.134 1.938-.65 3.042-1.68 1.42-1.323 2.727-3.363 4.079-6.143l3.809-8.114H88.52Z"
                    fill="#000"
                  ></path>
                  <path
                    d="m16.207 25.512 6.509-1.609S19.913 5.06 19.896 4.93a.25.25 0 0 0-.226-.208 203 203 0 0 0-1.926-.036s-1.117-1.079-1.537-1.487v22.313Z"
                    fill="#5E8E3E"
                  ></path>
                  <path
                    d="m15.499 2.984-.77.237c-.08-.26-.2-.58-.369-.9-.545-1.036-1.344-1.584-2.31-1.585h-.003c-.068 0-.134.006-.201.012a2.846 2.846 0 0 0-.087-.1c-.42-.448-.96-.666-1.606-.647-1.247.036-2.489.931-3.496 2.522-.708 1.12-1.247 2.526-1.4 3.615l-2.455.756c-.723.226-.746.248-.84.926C1.89 8.332 0 22.875 0 22.875l15.689 2.699V2.952a.92.92 0 0 0-.19.032Zm-3.623 1.115-2.646.815c.256-.974.74-1.943 1.336-2.579.222-.236.531-.5.899-.65.345.715.42 1.729.41 2.414ZM10.177.826c.293-.006.54.058.75.196a3.606 3.606 0 0 0-.968.75c-.792.845-1.4 2.157-1.642 3.423l-2.173.669C6.574 3.87 8.252.882 10.177.826Zm-2.426 11.35c.084 1.327 3.596 1.617 3.793 4.727.155 2.446-1.305 4.12-3.408 4.252-2.524.158-3.914-1.324-3.914-1.324l.535-2.263s1.399 1.05 2.519.98c.73-.047.992-.639.966-1.057-.11-1.732-2.97-1.63-3.15-4.475-.152-2.394 1.429-4.82 4.917-5.04 1.344-.084 2.033.258 2.033.258l-.798 2.968s-.89-.403-1.945-.336c-1.547.097-1.564 1.067-1.548 1.31Zm4.954-8.332c-.01-.627-.084-1.501-.379-2.256.947.178 1.412 1.243 1.61 1.878-.366.111-.781.24-1.231.378Z"
                    fill="#95BF47"
                  ></path>
                </svg>
              </div>
              {/* Bar */}
              <div className="w-full my-5">
                <div className="h-2 bg-[#e3e3e3] rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-[#303030]"
                    style={{
                      width: `${step}%`,
                      transition: "all 500ms cubic-bezier(0.25,0.1,0.25,1)",
                    }}
                  ></div>
                </div>
              </div>
              {/* Pages */}
              {renderPage()}
              <div className="w-full flex items-center justify-between md:flex-1 md:place-items-end md:py-9">
                <div className="">
                  <button
                    className="text-sm text-[#616161] py-2"
                    onClick={() => setStep(step > 1 ? step - 100 / 2 : step)}
                  >
                    &lt; Back
                  </button>
                </div>
                <div className="space-x-3">
                  <button
                    className="text-sm text-[#616161]"
                    onClick={() => setStep(100)}
                  >
                    Skip All
                  </button>
                  <button
                    className="text-sm text-[#616161]"
                    onClick={() => setStep(step < 100 ? step + 100 / 2 : step)}
                  >
                    Skip
                  </button>
                  <button
                    className="px-3 py-2 rounded-lg text-sm font-medium bg-[#3f3f3f] text-white"
                    onClick={() => setStep(step < 100 ? step + 100 / 2 : step)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {step > 100 && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.47 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
        >
          <SignUp />
        </motion.div>
      )}
    </>
  );
}

export default App;
