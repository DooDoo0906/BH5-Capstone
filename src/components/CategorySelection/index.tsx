import React, { useEffect, useState } from "react";
import GlassMorphism from "../GlassMorphism";
import Selections from "../Selections";
import PricingCard from "../PricingCard";

const packageLst1 = [
  {
    packageName: "Gói 1 nè",
    featureLst: ["Feature 1", "Feature 2", "Feature 3"],
    price: 90099912321,
    pkgLink: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_num_options3",
  },
  {
    packageName: "Gói 2 nè",
    featureLst: ["Feature 3", "Feature 4", "Feature 5"],
    price: 990456123213,
    pkgLink: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_num_options3",
  },
  {
    packageName: "Gói 3 nè",
    featureLst: ["Feature 5", "Feature 6", "Feature 7"],
    price: 9901230456,
    pkgLink: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_num_options3",
  },
];

const packageLst2 = [
  {
    packageName: "Gói 4 nè",
    featureLst: ["Feature 5", "Feature 6", "Feature 7"],
    price: 9800456,
    pkgLink: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_num_options3",
  },
  {
    packageName: "Gói 5 nè",
    featureLst: ["Feature 7", "Feature 8", "Feature 9"],
    price: 970045,
    pkgLink: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_num_options3",
  },
  {
    packageName: "Gói 6 nè",
    featureLst: ["Feature 7", "Feature 8", "Feature 9"],
    price: 970065,
    pkgLink: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_num_options3",
  },
];

const packageLst3 = [
  {
    packageName: "Gói 7 nè",
    featureLst: ["Feature 5", "Feature 6", "Feature 7"],
    price: 980065,
    pkgLink: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_num_options3",
  },
  {
    packageName: "Gói 8 nè",
    featureLst: ["Feature 7", "Feature 8", "Feature 9"],
    price: 970045,
    pkgLink: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_num_options3",
  },
  {
    packageName: "Gói 9 nè",
    featureLst: ["Feature 7", "Feature 8", "Feature 9"],
    price: 9700345,
    pkgLink: "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_num_options3",
  },
];

type cateProps = {
  className?:string,
}
function CategorySelection(props: cateProps) {
  const [isActive, setIsActive] = useState(1);
  const [pkgLst, setPkgLst] = useState(packageLst1);

//  Use this to set pkgLst when call api in the future
  useEffect(() => {}, [isActive]);
  const selectionClick = (sltNum: number, pkgLst: any[]) => {
    setIsActive(sltNum);
    setPkgLst(pkgLst);
  };
  return (
    <div className={props.className}>
      <GlassMorphism className="flex rounded-2xl justify-center space-x-36 py-5  mb-28">
        <div
          onClick={() => {
            selectionClick(1, packageLst1);
          }}
          className="w-96"
        >
          <Selections
            text="Kế toán dịch vụ"
            isActive={isActive === 1 ? true : false}
          />
        </div>
        <div
          onClick={() => {
            selectionClick(2, packageLst2);
          }}
          className="w-96"
        >
          <Selections
            text="Doanh nghiệp"
            isActive={isActive === 2 ? true : false}
          />
        </div>
        <div
          onClick={() => {
            selectionClick(3, packageLst3);
          }}
          className="w-96"
        >
          <Selections
            text="Kế toán cá nhân"
            isActive={isActive === 3 ? true : false}
          />
        </div>
      </GlassMorphism>
      <div className="flex space-x-9">
        {pkgLst.map((item, index) => {
          return (
            <PricingCard
              key={index}
              featureLst={item.featureLst}
              packageName={item.packageName}
              price={item.price}
              pkgLink={item.pkgLink}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategorySelection;
