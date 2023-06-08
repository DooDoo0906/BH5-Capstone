
import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomText from "../CustomText";

// This component is a secondary button with a text and an onClick function
// Props:
// className: string - class name for the button
// btnText: string - text for the button
// classNameButton: string - class name for the button
// onClick: () => void - onClick function for the button
type Props = {
  className?: string;
  btnText: string;
  classNameButton?: string;
  onClick: () => void;
};

function SecondaryButton(props: Props) {
  return (
    <Button
      variant="text"
      className={props.classNameButton}
      onClick={props.onClick}
    >
      <CustomText
        textType="heading"
        text={props.btnText}
        className={`${props.className} hover:text-gray-400  duration-300 normal-case`}
      />
    </Button>
  );
}

export default SecondaryButton;
