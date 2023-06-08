import Image from "next/image";
import React from "react";
import CustomText from "../CustomText";

type childProps={
  header:string,
  imgSrc: string,
  content:string,
}

function ChildItemLstKey(props: childProps) {
  return (
    <div className="flex space-x-5">
      <div>
        <Image alt="" src={`/${props.imgSrc}`} width={60} height={60} />
      </div>
      <div className="w-11/12">
        <CustomText
          text={`${props.header}`}
          textType="heading"
          className="text-4xl mb-5"
        />
        <CustomText
          text={`${props.content}`}
          textType="body"
          className="w-96 text-md mb-3"
        />
        <div className="  border border-gray-400 border-opacity-40 border-solid mb-3"></div>
      </div>
    </div>
  );
}

export default ChildItemLstKey;
