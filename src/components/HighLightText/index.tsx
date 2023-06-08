import React from "react";
import GlassMorphism from "../GlassMorphism";
import Image from "next/image";
import CustomText from "../CustomText";
import { useRouter } from "next/navigation";

type highLightProps = {
  imgSrc?: string;
  link?: string;
};

function HighLightText(props: highLightProps) {
  const router = useRouter();
  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <GlassMorphism
      className="flex cursor-pointer rounded-md p-4 justify-center w-fit"
      onClick={() => {
        handleClick(props.link);
      }}
    >
      <Image alt="" src={`/${props.imgSrc}`} width={100} height={100} />
    </GlassMorphism>
  );
}

export default HighLightText;
