import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Content } from "@/layout/Content";

import { isStringEmpty } from "@/utility/utility";

import { SecondCard } from "@/components/SecondCard";
import { FirstCard } from "@/components/FirstCard";

export function App() {
  const [selectedStar, setSelectedStar] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <Content>
      <AnimatePresence mode="popLayout">
        {!submitted ? (
          <motion.div
            key="firstCard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FirstCard
              selectedStar={selectedStar}
              onChangeStar={(star) => setSelectedStar(star)}
              submitFn={() =>
                !isStringEmpty(selectedStar) && setSubmitted(true)
              }
            />
          </motion.div>
        ) : (
          <motion.div
            key="secondCard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SecondCard star={selectedStar} />
          </motion.div>
        )}
      </AnimatePresence>
    </Content>
  );
}

export default App;
