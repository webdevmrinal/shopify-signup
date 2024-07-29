import { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import SignupNew from "./SignupNew";
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.47 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
        >
          <div className="h-screen w-screen overflow-y-scroll bg-white">
            <SignupNew />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;
