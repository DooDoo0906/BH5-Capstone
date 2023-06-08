import React from "react";
import CustomText from "../CustomText";

type contactProps = {
  children: React.ReactNode;
  text: string;
  className?:string;
};

function Contact(props: contactProps) {
  return <div className={`flex space-x-4 ${props.className}`}>{props.children} <CustomText text={props.text} textType="body"/></div>;
}

export default Contact;
