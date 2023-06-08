import React from "react";
import GlassMorphism from "../GlassMorphism";
import CustomText from "../CustomText";
import EastIcon from "@mui/icons-material/East";
import { useRouter } from "next/navigation";
type pricingProps = {
  packageName: string;
  featureLst: string[];
  price: number;
  pkgLink: string;
};

const convertNumber = (price: number) => {
  return price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

function PricingCard(props: pricingProps) {
  const router = useRouter();
  const pkgRedirection = (pkgLink: string) => {
    router.push(pkgLink);
  };
  return (
    <GlassMorphism className="flex flex-col rounded-2xl px-16 py-64 h-90 w-max items-center">
      <GlassMorphism className="relative rounded-2xl -top-72 bg-opacity-95 w-96 text-center">
        <CustomText
          text={props.packageName}
          textType="heading"
          className="text-[#0950A1] text-5xl  py-3"
        />
      </GlassMorphism>
      <ul className="relative -left-28 -top-52">
        {props.featureLst.map((item, index) => {
          return (
            <li key={index}>
              <CustomText
                text={item}
                textType="body"
                className="text-black text-3xl"
              />
            </li>
          );
        })}
      </ul>
      <div
        className="flex justify-center bg-sunny rounded-b-2xl absolute bottom-0 w-full space-x-24  py-5 cursor-pointer"
        onClick={() =>pkgRedirection(props.pkgLink)}
      >
        <CustomText
          text={convertNumber(props.price) + ""}
          textType="heading"
          className="flex text-[#0950A1] text-2xl pl-36"
        />
        <div className="text-[#0950A1] text-2xl pl-3">
          <EastIcon />
        </div>
      </div>
    </GlassMorphism>
  );
}

export default PricingCard;
