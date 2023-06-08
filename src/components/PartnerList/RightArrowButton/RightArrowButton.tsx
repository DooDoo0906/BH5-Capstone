import { NavigateNextRounded } from "@mui/icons-material";
import React from "react";
import GlassMorphism from "../../GlassMorphism";

type Props = {
  onClick?: () => void;
};

function RightArrowButton(props: Props) {
  return (
    <div onClick={props.onClick} className="flex items-center">
      <GlassMorphism className="rounded-full">
        <NavigateNextRounded
          style={{ color: "black" }}
          className="rounded-full"
        />
      </GlassMorphism>
    </div>
  );
}

export default RightArrowButton;
