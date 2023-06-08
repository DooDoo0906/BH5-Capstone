import React, { useEffect, useState } from "react";
import CustomText from "../CustomText";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import Link from "next/link";
import GlassMorphism from "../GlassMorphism";

type NavBarProps = {
  isLoggedin: boolean;
};

function NavBar(props: NavBarProps) {
  const router = useRouter();
  const [isLog, setIsLog] = useState(props.isLoggedin);
  const handleClick = (url: string, log:boolean) => {
    setIsLog(log);
    router.push(url);

  };

  useEffect(()=>{router.prefetch("login")},[])
  return (
    <GlassMorphism className="flex sticky top-0 bg-dark-blue-bg bg-opacity-50 drop-shadow-lg rounded-b-xl z-[100]">
      <div className="flex-none">
        <Image
          src={"MainLogo.svg"}
          width={300}
          height={300}
          alt="Main logo of start up land"
          className="p-6"
        />
      </div>
      <div className="flex-1 pt-10  px-36 flex">
        <Link
          className="pr-20 cursor-pointer hover:text-gray-400"
          href="https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating"
        >
          <CustomText text="Home" textType="heading" className="text-xl" />
        </Link>
        <Link
          className="px-10 cursor-pointer hover:text-gray-400"
          href="https://nextjs.org/docs/app/api-reference/functions/use-router"
        >
          <CustomText text="Package" textType="heading" className="text-xl" />
        </Link>
        <Link
          className="px-10 cursor-pointer hover:text-gray-400"
          href="https://tailwindcss.com/docs/drop-shadow"
        >
          <CustomText text="Package2" textType="heading" className="text-xl" />
        </Link>
      </div>
      {!isLog ? (
        <div className="flex p-7">
          <div className="mr-8">
            <SecondaryButton
              btnText="Đăng nhập"
              className="text-white text-lg p-2"
              onClick={() =>
                handleClick("login",true)
              }
            />
          </div>
          <div>
            <PrimaryButton
              buttonTitle="Đăng ký"
              classNameTitle="text-lg p-2"
              onClick={() =>
                handleClick("https://mui.com/material-ui/react-app-bar/",false)
              }
            />
          </div>
        </div>
      ) : (
        <div className="p-7">
            <PrimaryButton
              buttonTitle="Đăng xuất"
              classNameTitle="text-lg p-2"
              onClick={() =>
                handleClick("https://mui.com/material-ui/react-app-bar/",false)
              }
            />
          </div>
      )}
    </GlassMorphism>
  );
}

export default NavBar;
