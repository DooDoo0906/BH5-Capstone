"use client";
import Image from "next/image";
import CustomText from "../components/CustomText";
import NavBar from "../components/NavBar";
import PartnerList from "../components/PartnerList";
import PrimaryButton from "../components/PrimaryButton";
import QnA from "../components/QnA";
import CategorySelection from "../components/CategorySelection";
import HighLightText from "../components/HighLightText";
import KeyFeature from "../components/KeyFeature";
import SubscriptionForm from "../components/SubscriptionForm";
import ChildItemLstKey from "../components/ChildItemLstKey";
import LastKey from "../components/LastKey";
import Footer from "../components/Footer";

const qnaList = [
  {
    id: 1,
    question: "Câu hỏi 1?",
    answer: "hehe 1",
  },
  {
    id: 2,
    question: "Câu hỏi 2?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    question: "Câu hỏi 3?",
    answer: "hehe 3",
  },
];

export default function LandingPage() {
  return (
    <>
      <NavBar isLoggedin={false} />
      <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-dark-blue via-medium-electric-blue to-cyan-500 px-20 ">
        {/* #region Hero section */}
        <div className="flex flex-row justify-center items-center">
          <div className="mr-40 w-[500px]">
            <CustomText
              textType="heading"
              text="Hệ thống hỗ trợ doanh nghiệp & kế toán"
              className="text-sunny mb-5 text-xl"
            />
            <CustomText
              textType="heading"
              text="NỀN TẢNG KẾT NỐI
DỊCH VỤ KẾ TOÁN"
              className="mb-5 text-3xl"
            />
            <CustomText
              textType="body"
              text="Kết nối doanh nghiệp với công ty dịch vụ kế toán và cung cấp kho lưu trữ các hóa đơn, giấy tờ liên quan tới khai báo thuế, báo cáo tài chính."
              className="mb-5"
            />
            <PrimaryButton buttonTitle="Tham gia ngay" onClick={() => {}} />
          </div>
          <Image
            src={"/LandingPage/ldp_reference_img.webp"}
            alt="landing page reference image"
            width={500}
            height={500}
          />
        </div>
        <PartnerList />
        <div id="pricing">
          <CustomText
            textType="heading"
            text="Bảng giá ASS VN Kế Toán"
            className="text-2xl my-10 mt-32"
          />
        </div>
        <CategorySelection className="mb-16" />

        <KeyFeature index={1} className="my-36" />
        <KeyFeature index={2} className="my-36" />
        <LastKey className="my-36" />

        <div className="mb-20"></div>
        {/* #endregion */}
        {/* #region QnA section */}
        <CustomText
          textType="heading"
          text="CÂU HỎI THƯỜNG GẶP"
          className="text-2xl my-10"
        />
        {qnaList.map((qna) => (
          <QnA key={qna.id} question={qna.question} answer={qna.answer} />
        ))}
        {/* #endregion */}
        {/* #region Subscription form section */}
        <div className="flex flex-row items-center justify-center mt-20 mb-20">
          <div className="flex flex-col mr-20">
            <CustomText
              textType="heading"
              text="Đăng ký nhận tư vấn miễn phí"
              className="text-3xl mb-20"
            />
            <CustomText
              textType="body"
              text="NỀN TẢNG KẾT NỐI DỊCH VỤ KẾ TOÁN"
              className="text-xl"
            />
          </div>
          <SubscriptionForm />
        </div>
        {/* #endregion */}
      </main>
      <Footer/>

    </>
  );
}
