// This component is a button that is used as the primary button throughout the app.
// It is used as the primary button in the login screen, as well as the primary button in the signup screen.
// It is also used as the primary button in the login and signup screens.

import { Button } from "@mui/material";
import React from "react";
import CustomText from "../CustomText";

type Props = {
  classNameButton?: string; // The class name for the button.
  classNameTitle?: string; // The class name for the title.
  buttonTitle: string; // The title of the button.
  onClick: () => void; // The function to call when the button is clicked.
};

function PrimaryButton(props: Props) {
  return (
    <Button
      variant="contained"
      className={
        "rounded-md bg-sunny hover:bg-sunny hover:bg-opacity-80 duration-300 backdrop-blur cursor-pointer px-4 py-2 " +
        props.classNameButton
      }
      onClick={props.onClick}
    >
      <CustomText
        textType="heading"
        text={props.buttonTitle}
        className={"text-dark-blue normal-case " + props.classNameTitle}
      />
    </Button>
  );
}

export default PrimaryButton;
