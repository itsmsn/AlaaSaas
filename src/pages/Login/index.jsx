import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";

const LoginPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-blue-800 flex flex-col font-ibmplexsans items-center justify-center mx-auto p-[72px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1296px] mx-auto my-[55px] md:px-5 rounded-[24px] shadow-bs1 w-full">
          <Img
            className="h-[714px]"
            src="images/img_illustration.svg"
            alt="illustration"
          />
          <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start mb-[5px] p-[21px] sm:px-5 w-[43%] md:w-full">
            <Img
              className="h-[84px] md:h-auto md:ml-[0] ml-[43px] object-cover w-[23%] sm:w-full"
              src="images/img_ozonepng1.png"
              alt="ozonepngOne"
            />
            <Text
              className="leading-[150.00%] md:ml-[0] ml-[43px] mt-4 text-blue-800 text-xl w-[61%] sm:w-full"
              size="txtIBMPlexSansSemiBold20"
            >
              Welcome ,Please log in to access your account
            </Text>
            <Text
              className="md:ml-[0] ml-[43px] mt-[18px] text-base text-blue_gray-400"
              size="txtIBMPlexSansRegular16"
            >
              Welcome Back, Please login to your account
            </Text>
            <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[43px] mt-3.5 w-[422px] sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-800 w-full"
                  size="txtIBMPlexSansSemiBold16"
                >
                  Username
                </Text>
                <Input
                  name="frameTwo"
                  placeholder="Moumen Dhair"
                  className="!placeholder:text-gray-500 !text-gray-500 p-0 text-base text-left w-full"
                  wrapClassName="border border-blue-800_33 border-solid rounded-lg w-full"
                  size="md"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-800_01 w-full"
                  size="txtIBMPlexSansSemiBold16Bluegray80001"
                >
                  Password
                </Text>
                <Img
                  className="h-14 rounded-tl-lg rounded-tr-lg w-full"
                  src="images/img_frame2.svg"
                  alt="frameTwo_One"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-800 w-full"
                  size="txtIBMPlexSansSemiBold16"
                >
                  Fin Year
                </Text>
                <Input
                  name="zipcode"
                  placeholder="2023"
                  className="!placeholder:text-gray-500 !text-gray-500 p-0 text-base text-left w-full"
                  wrapClassName="border border-blue-800_33 border-solid flex rounded-lg w-full"
                  suffix={
                    <Img
                      className="h-8 ml-[35px] my-auto"
                      src="images/img_arrowdown_gray_500_01.svg"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></Input>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_checkboxdefault.svg"
                    alt="checkboxdefault"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtIBMPlexSansRegular16Gray900"
                  >
                    Remember me
                  </Text>
                </div>
                <a
                  href="javascript:"
                  className="text-base text-gray-900 text-right underline w-auto"
                >
                  <Text size="txtIBMPlexSansRegular16Gray900">
                    Forgot password?
                  </Text>
                </a>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                <Button
                  className="cursor-pointer flex-1 font-semibold rounded-lg text-base text-center w-full"
                  color="blue_800"
                  size="sm"
                >
                  Login
                </Button>
                <Button
                  className="cursor-pointer flex-1 font-semibold rounded-lg text-base text-center w-full"
                  color="blue_800"
                  size="sm"
                  variant="outline"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start justify-start mb-[3px] md:ml-[0] ml-[43px] mt-6 w-auto">
              <Text
                className="text-base text-gray-700 w-auto"
                size="txtIBMPlexSansRegular16Gray700"
              >
                Or, login with
              </Text>
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtIBMPlexSansMedium16"
              >
                Facebook
              </Text>
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtIBMPlexSansMedium16"
              >
                Linked In
              </Text>
              <Text
                className="common-pointer text-base text-gray-900 w-auto"
                size="txtIBMPlexSansMedium16"
                onClick={() => googleSignIn()}
              >
                Google
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
