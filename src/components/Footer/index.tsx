import React from "react";
import GlassMorphism from "../GlassMorphism";
import Image from "next/image";
import CustomText from "../CustomText";
import Link from "next/link";
import Contact from "../Contact";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkIcon from "@mui/icons-material/Link";
import LinkFooter from "../LinkFooter";
function Footer() {
  return (
    <GlassMorphism className=" flex flex-col relative bottom-0 bg-dark-blue-bg bg-opacity-80 drop-shadow-lg rounded-t-sm">
      <div className="flex">
        <div className="py-9 px-40 w-6/12 ">
          <Image
            src={"MainLogo.svg"}
            width={300}
            height={300}
            alt="Main logo of start up land"
          />
          <CustomText
            text="Công ty StartupLand"
            textType="heading"
            className="font-bold text-4xl mt-5 mb-1 text-black"
          />
          <CustomText
            text="Trụ sở chính: ở đâu đó chưa biết"
            textType="body"
            className="text-xl text-black"
          />
          <div className="mt-7 space-y-4">
            <CustomText
              text="Contact:"
              textType="heading"
              className="text-md font-bold text-black"
            />
            <Contact text="abc@gmail.com" className="text-black">
              {" "}
              <MailOutlineIcon />
            </Contact>
            <Contact text="0123456789" className="text-black">
              {" "}
              <PhoneIphoneIcon />
            </Contact>
            <Contact text="www.domain.com" className="text-black">
              {" "}
              <LinkIcon />
            </Contact>
          </div>
        </div>
        <div className="py-36 flex space-x-44">
          <LinkFooter
            header="Khám Phá"
            links={[{link:"mmm.com", text:"Link gì đó"},{link:"mmm.com", text:"Link gì đó"},{link:"mmm.com", text:"Link gì đó"}]}
          />
          <LinkFooter
            header="Tài Nguyên"
            links={[{link:"mmm.com", text:"Link gì đó"},{link:"mmm.com", text:"Link gì đó"},{link:"mmm.com", text:"Link gì đó"}]}
          />
          <LinkFooter
            header="Blogs"
            links={[{link:"mmm.com", text:"Link gì đó"},{link:"mmm.com", text:"Link gì đó"},{link:"mmm.com", text:"Link gì đó"}]}
          />
        </div>
      </div>
      <div className="flex justify-center mb-9 mt-20">
        <Image
          alt=""
          src="/footerImg.svg"
          width={0}
          height={0}
          className="w-10/12 "
        />
      </div>
      <div className="flex justify-center space-x-1 text-xl">
        <CustomText
          text="Copyright © 2023 ASS VN"
          textType="body"
          className="text-black"
        />
        <div className="border-1 border-r border-black"></div>
        <Link href="" className="flex flex-col -space-y-1">
          <CustomText
            text="Chính sách bảo mật"
            textType="body"
            className="text-black"
          />
          <div className="border-1 border-b border-black"></div>
        </Link>
        <div className="border-1 border-r border-black"></div>
        <Link href="" className="flex flex-col -space-y-1">
          <CustomText
            text="Điều khoản sử dụng"
            textType="body"
            className="text-black"
          />
          <div className="border-1 border-b border-black"></div>
        </Link>
      </div>
    </GlassMorphism>
  );
}

export default Footer;
