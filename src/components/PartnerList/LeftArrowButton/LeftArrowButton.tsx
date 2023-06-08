import { ArrowBack, NavigateBeforeRounded } from "@mui/icons-material";
import React from "react";
import GlassMorphism from "../../GlassMorphism";

type Props = {
  onClick?: () => void;
};

function LeftArrowButton(props: Props) {
  return (
    <div onClick={props.onClick} className="flex items-center rounded-full">
      <GlassMorphism className="rounded-full">
        <NavigateBeforeRounded
          style={{ color: "black" }}
        />
      </GlassMorphism>
    </div>
  );
}

export default LeftArrowButton;
