import React from "react";
import CustomText from "../CustomText";
import Link from "next/link";

type linkProps = {
  links: linkObj[];
  header: string;
};

interface linkObj {
  text: string;
  link: string;
}

function LinkFooter(props: linkProps) {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <CustomText
        text={props.header}
        textType="heading"
        className="text-black text-2xl"
      />
      {props.links.map((item, index) => {
        return (
          <Link
            href={item.link}
            key={index}
            className="flex flex-col -space-y-1"
          >
            <CustomText
              text={item.text}
              textType="body"
              className="text-black"
            />
            <div className="border-b border-black border-1"></div>
          </Link>
        );
      })}
    </div>
  );
}

export default LinkFooter;
