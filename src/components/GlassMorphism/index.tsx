import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function GlassMorphism(props: Props) {
  return (
    <div
      className={
        "bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 drop-shadow-lg p-2 " +
        props.className
      }
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default GlassMorphism;
