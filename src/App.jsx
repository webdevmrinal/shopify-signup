import { useEffect, useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { AnimatePresence, motion } from "framer-motion";
import OGLogo from "./assets/OG-Logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [step, setStep] = useState(1);
  const [showSignUp, setShowSignUp] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.fromSignup) {
      setStep(100);
    }
  }, [location]);

  useEffect(() => {
    if (step > 100) {
      navigate("/signup");
    }
  }, [step, navigate]);

  const renderPage = () => {
    if (step < 50) {
      return <Page1 />;
    } else if (step >= 50 && step <= 100) {
      return <Page2 />;
    }
  };

  const handleBack = () => {
    if (location.state && location.state.fromSignup) {
      setStep(1);
    } else if (step > 1) {
      setStep(Math.max(1, step - 60));
    }
  };

  const handleNext = () => {
    if (step < 100) {
      setStep(100);
    } else {
      navigate("/signup");
    }
  };

  const handleSkipAll = () => {
    navigate("/signup");
  };

  return (
    <>
      <Header />
      <AnimatePresence>
        {step <= 100 && (
          <motion.div
            style={{ paddingTop: '20px', marginBottom: '20px', marginTop: '12px' }}
            initial={{ opacity: 0, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -75 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="md:h-screen md:w-screen md:flex md:items-center md:justify-center relative z-10"
          >
            <div className="px-5 md:px-14 w-full h-screen md:max-w-4xl md:h-[48rem] bg-white md:rounded-xl flex flex-col shadow-lg border"
            style={{ maxWidth: '91rem' }}>
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
              <div className="w-full flex items-center justify-between md:flex-1 md:place-items-end md:pb-6">
                <div className="">
                  <button
                    className="text-sm text-[#616161] py-2"
                    onClick={handleBack}
                  >
                    &lt; Back
                  </button>
                </div>
                <div className="space-x-3">
                  <button
                    className="text-sm text-[#616161]"
                    onClick={handleSkipAll}
                  >
                    Skip All
                  </button>
                  <button
                    className="text-sm text-[#616161]"
                    onClick={handleNext}
                  >
                    Skip
                  </button>
                  <button
                    className="px-3 py-2 rounded-lg text-sm font-medium bg-[#3f3f3f] text-white"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
