import React from "react";
import CustomText from "../CustomText";
import Image from "next/image";
import ChildItemLstKey from "../ChildItemLstKey";

type lastKeyProps={
    className?:string,
}

function LastKey(props: lastKeyProps) {
  return (
    <div className={`flex flex-col ml-20 ${props.className}`}>
      <CustomText
        text="Kho lưu trữ và trực quan hóa dữ liệu báo cáo tài chính"
        textType="heading"
        className="text-5xl w-8/12 mb-2"
      />
      <CustomText
        text="LƯU TRỮ  VÀ TẠO BIỂU ĐỒ KINH DOANH CHO DOANH NGHIỆP"
        textType="body"
        className="text-3xl text-sunny mb-5"
      />
      <div className="flex space-x-24">
        <Image alt="" src="/profitUpImg.svg" width={550} height={550} />
        <div>
          <ChildItemLstKey
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            header="Lưu báo cáo tài chính"
            imgSrc="iconReport.svg"
          />
          <ChildItemLstKey
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            header="Tạo biểu đồ báo cáo và phân tích"
            imgSrc="iconTrend.svg"
          />
          <ChildItemLstKey
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            header="Lưu báo cáo tài chính"
            imgSrc="iconQuestion.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default LastKey;
