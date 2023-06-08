import React from "react";
import Image from "next/image";
import CustomText from "../CustomText";
import GlassMorphism from "../GlassMorphism";

type Props = {};

interface PartnerData {
  id: number;
  avatarPath: string;
}

const partnerData: PartnerData[] = [
  {
    id: 1,
    avatarPath: "/PartnerAvatar/fpt_uni_logo.webp",
  },
  {
    id: 2,
    avatarPath: "/PartnerAvatar/nash_tech_logo.webp",
  },
  {
    id: 3,
    avatarPath: "/PartnerAvatar/mwg_logo.webp",
  },
  {
    id: 4,
    avatarPath: "/PartnerAvatar/cyber_logo.webp",
  },
];

const PartnerList = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Text */}
      <CustomText
        textType="body"
        className="text-center mb-10 text-xl w-[500px]"
        text="Được hơn 1,000 doanh nghiệp dùng để tìm kiếm đối tác hỗ trợ việc khai báo thuế, lập báo cáo tài chính."
      />
      {/* Partner list */}
      <GlassMorphism className="flex flex-row items-center rounded-lg">
        {partnerData.map((partner) => (
          <div key={partner.id} className="mx-10 my-2">
            <Image
              src={partner.avatarPath}
              alt="partner avatar"
              width={partner.id === 2 || partner.id === 3 ? 60 : 100}
              height={100}
            />
          </div>
        ))}
      </GlassMorphism>
    </div>
  );
};

export default PartnerList;
