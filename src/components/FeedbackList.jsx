import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback &&
          feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem item={item} />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>

    // <div className="feedback-list">
    //   {feedback &&
    //     feedback.map((item) => (
    //       <FeedbackItem
    //         key={item.id}
    //         item={item}
    //         handleDelete={handleDelete}
    //       />
    //     ))}
    // </div>
  );
};

export default FeedbackList;