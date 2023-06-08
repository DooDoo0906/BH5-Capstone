import React from "react";
import { Source_Sans_Pro, Montserrat } from "next/font/google";

/**
 * This component is used to render text.
 *
 * Props:
 * - textType: The type of text to render.
 * - text: The text to render.
 * - styles: Custom styles to apply to the text.
 * - className: A custom class name to apply to the text.
 */

type Props = {
  textType: "heading" | "body";
  text: string;
  styles?: React.CSSProperties;
  className?: string;
};

const sourceSansPro = Source_Sans_Pro({
  weight: "400",
  subsets: ["vietnamese"],
});

const montserrat = Montserrat({
  weight: "700",
  subsets: ["vietnamese"],
});

function CustomText(props: Props) {
  return (
    <div
      className={`${
        props.textType === "body"
          ? sourceSansPro.className
          : montserrat.className
      } ${props.className}`}
      style={props.styles}
    >
      {props.text}
    </div>
  );
}

export default CustomText;
