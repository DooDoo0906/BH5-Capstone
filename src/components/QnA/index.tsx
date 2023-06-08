// This component is used to display a question and answer
// It is used in the FAQ page
// It takes in 2 props: question and answer
// The question and answer are strings
// It uses a state variable to toggle the answer
// It uses the GlassMorphism component to display the question and answer in a glass effect

import React, { useState } from "react";
import GlassMorphism from "../GlassMorphism";
import CustomText from "../CustomText";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

type Props = {
  question: string;
  answer: string;
};

function QnA(props: Props) {
  const [isShowAnswer, setIsShowAnswer] = useState(false);

  // We use this function to toggle the answer
  const onClickQuestion = () => {
    setIsShowAnswer(!isShowAnswer);
  };

  return (
    <div className="flex flex-col items-center justify-center my-2">
      <div
        className="flex flex-row items-center justify-center cursor-pointer"
        onClick={() => onClickQuestion()}
      >
        <GlassMorphism className="flex items-center px-44 py-5 !drop-shadow-md rounded-lg">
          <CustomText
            textType="heading"
            text={props.question}
            className="text-dark-blue text-xl"
          />
        </GlassMorphism>

        <GlassMorphism className="flex !rounded-full w-8 h-8 relative right-4 justify-center items-center">
          {isShowAnswer ? (
            <ExpandLessRoundedIcon style={{ color: "black" }} />
          ) : (
            <ExpandMoreRoundedIcon style={{ color: "black" }} />
          )}
        </GlassMorphism>
      </div>

      {/* We use the isShowAnswer state to determine whether to show the answer */}
      {isShowAnswer && (
        <GlassMorphism className="flex relative -left-4 w-5/6 items-center px-14 py-10 mb-5 rounded-b-lg">
          <CustomText
            textType="body"
            text={props.answer}
            className="text-base text-black w-96"
          />
        </GlassMorphism>
      )}
    </div>
  );
}

export default QnA;
