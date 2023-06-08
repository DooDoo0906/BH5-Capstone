import React from "react";
import GlassMorphism from "../GlassMorphism";
import CustomText from "../CustomText";
import { TextField } from "@mui/material";
import PrimaryButton from "../PrimaryButton";

type Props = {};

interface FormData {
  name: string;
  email: string;
  phone: string;
  taxCode: string;
}

interface FormError {
  name: {
    isError: boolean;
    message: string;
  };
  email: {
    isError: boolean;
    message: string;
  };
  phone: {
    isError: boolean;
    message: string;
  };
  taxCode: {
    isError: boolean;
    message: string;
  };
}

function SubscriptionForm({}: Props) {
  // #region local state declaration
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    taxCode: "",
  });
  const [formError, setFormError] = React.useState<FormError>({
    name: {
      isError: false,
      message: "",
    },
    email: {
      isError: false,
      message: "",
    },
    phone: {
      isError: false,
      message: "",
    },
    taxCode: {
      isError: false,
      message: "",
    },
  });
  // #endregion

  // email regex
  const emailRegex = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);

  // function check valid email
  const checkValidEmail = (email: string) => {
    return emailRegex.test(email);
  };

  // phone number regex
  const phoneNumberRegex = new RegExp(/^[0-9]{10}$/);

  // function check valid phone number
  const checkValidPhoneNumber = (phoneNumber: string) => {
    return phoneNumberRegex.test(phoneNumber);
  };

  // tax code regex
  const tenDigitsTaxCodeRegex = new RegExp(/^[0-9]{10}$/);
  const thirteenDigitsTaxCodeRegex = new RegExp(/^[0-9]{10}-[0-9]{3}$/);

  // function check valid tax code
  const checkValidTaxCode = (taxCode: string) => {
    return (
      tenDigitsTaxCodeRegex.test(taxCode) ||
      thirteenDigitsTaxCodeRegex.test(taxCode)
    );
  };

  // function to validate form
  const handleFormValidation = () => {
    let error = false;
    let formErrorTemp = { ...formError };
    if (formData.name === "") {
      error = true;
      formErrorTemp.name = {
        isError: true,
        message: "Họ và tên không được để trống",
      };
    } else {
      formErrorTemp.name = {
        isError: false,
        message: "",
      };
    }
    if (formData.email === "") {
      error = true;
      formErrorTemp.email = {
        isError: true,
        message: "Email không được để trống",
      };
    } else if (checkValidEmail(formData.email) === false) {
      error = true;
      formErrorTemp.email = {
        isError: true,
        message: "Email không hợp lệ",
      };
    } else {
      formErrorTemp.email = {
        isError: false,
        message: "",
      };
    }
    if (formData.phone === "") {
      error = true;
      formErrorTemp.phone = {
        isError: true,
        message: "Số điện thoại không được để trống",
      };
    } else if (checkValidPhoneNumber(formData.phone) === false) {
      error = true;
      formErrorTemp.phone = {
        isError: true,
        message: "Số điện thoại không hợp lệ",
      };
    } else {
      formErrorTemp.phone = {
        isError: false,
        message: "",
      };
    }
    if (formData.taxCode === "") {
      error = true;
      formErrorTemp.taxCode = {
        isError: true,
        message: "Mã số thuế không được để trống",
      };
    } else if (checkValidTaxCode(formData.taxCode) === false) {
      error = true;
      formErrorTemp.taxCode = {
        isError: true,
        message: "Mã số thuế không hợp lệ",
      };
    } else {
      formErrorTemp.taxCode = {
        isError: false,
        message: "",
      };
    }
    if (error) {
      setFormError(formErrorTemp);
    } else {
      // do something here
      setFormError(formErrorTemp);
      alert("Đăng ký thành công");
    }
  };

  const handleFormSubmit = () => {
    handleFormValidation();
  };

  return (
    <GlassMorphism className="flex flex-col items-center rounded-lg px-20">
      <CustomText
        textType="heading"
        text="Thông tin đăng ký"
        className="text-dark-blue mb-10 text-2xl"
      />
      {formError.name.isError ? (
        <TextField
          error
          helperText={formError.name.message}
          id="outlined-required"
          label="Họ và tên*"
          variant="outlined"
          className="bg-white rounded-lg my-3 w-96"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
      ) : (
        <TextField
          id="outlined-required"
          label="Họ và tên*"
          variant="outlined"
          className="bg-white rounded-lg my-3 w-96"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
      )}
      {formError.email.isError ? (
        <TextField
          error
          helperText={formError.email.message}
          id="outlined-required"
          label="Email*"
          variant="outlined"
          className="bg-white rounded-lg my-3 w-96"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      ) : (
        <TextField
          id="outlined-required"
          label="Email*"
          variant="outlined"
          className="bg-white rounded-lg my-3 w-96"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      )}
      {formError.phone.isError ? (
        <TextField
          error
          helperText={formError.phone.message}
          id="outlined-required"
          label="Số điện thoại*"
          variant="outlined"
          className="bg-white rounded-lg my-3 w-96"
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />
      ) : (
        <TextField
          id="outlined-required"
          label="Số điện thoại*"
          variant="outlined"
          className="bg-white rounded-lg my-3 w-96"
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />
      )}
      {formError.taxCode.isError ? (
        <TextField
          error
          helperText={formError.taxCode.message}
          id="outlined-required"
          label="Mã số thuế*"
          variant="outlined"
          className="bg-white rounded-lg my-3 w-96"
          onChange={(e) => {
            setFormData({ ...formData, taxCode: e.target.value });
          }}
        />
      ) : (
        <TextField
          id="outlined-required"
          label="Mã số thuế*"
          variant="outlined"
          className="bg-white rounded-lg my-3 w-96"
          onChange={(e) => {
            setFormData({ ...formData, taxCode: e.target.value });
          }}
        />
      )}

      <PrimaryButton
        onClick={() => {
          handleFormSubmit();
        }}
        buttonTitle="Đăng ký"
        classNameButton="my-3 !px-20"
      />
    </GlassMorphism>
  );
}

export default SubscriptionForm;
