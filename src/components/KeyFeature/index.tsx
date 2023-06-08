import Image from "next/image";
import React from "react";
import CustomText from "../CustomText";
import HighLightText from "../HighLightText";

type keyProps = {
  index: number;
  className?: string;
};

function KeyFeature(props: keyProps) {
  return (
    <div className={`flex px-40 ${props.className}`}>
      {props.index % 2 != 0 ? (
        <div className="flex justify-center items-center">
          <Image alt="" src={`/forwardRef.svg`} width={500} height={500} className="ml-14" />
          <div className="flex flex-col mx-10">
            <CustomText
              text="NHANH CHÓNG CHÍNH XÁC TỰ ĐỘNG LƯU HÓA ĐƠN"
              textType="heading"
              className="text-5xl mb-20 h-20"
            />
            <CustomText
              text="TÍNH NĂNG"
              textType="body"
              className="text-5xl text-sunny mb-2"
            />
            <div className="flex flex-row items-center">
              <CustomText
                text="AUTO-FORWARD CỦA"
                textType="body"
                className="text-5xl text-sunny mr-5"
              />
              <HighLightText
                imgSrc="gmailLogo.svg"
                link="https://www.google.com/gmail/about/"
              />
            </div>
            <div className="mt-14 h-20">
              <CustomText
                text="Luân chuyển và lưu trữ thông tin hóa đơn cho đơn vị kế toán một cách chính xác và nhanh nhất"
                textType="body"
                className="text-3xl"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col mx-20">
            <CustomText
              text="NHẬP LIỆU CHÍNH XÁC VÀ NHANH CHÓNG"
              textType="heading"
              className="text-5xl mb-16"
            />
            <div>
              <CustomText
                text="TRÍCH XUẤT THÔNG TIN HOÁ ĐƠN"
                textType="body"
                className="text-5xl text-sunny mb-2"
              />
              <div className="flex flex-row items-center">
                <CustomText
                  text="THÀNH MẪU"
                  textType="body"
                  className="text-5xl text-sunny mr-5"
                />
                <HighLightText
                  imgSrc="EXCEL.svg"
                  link="https://www.google.com/gmail/about/"
                />
              </div>
            </div>
            <div className="mt-20">
              <CustomText
                text="Giúp các kế toán giảm thiểu sai xót khâu nhập liệu thông tin"
                textType="body"
                className="text-3xl"
              />
            </div>
          </div>
          <Image alt="" src={`/excelRef.svg`} width={500} height={500} />
        </>
      )}
    </div>
  );
}

export default KeyFeature;
