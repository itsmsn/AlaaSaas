import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, SelectBox, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const moumenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MasterAccountTypesPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-8 w-[38px]"
          src="images/img_computer.svg"
          alt="computer"
        />
      ),
      label: "Dashboard",
    },
    {
      icon: (
        <Img
          className="h-[38px] w-[50px]"
          src="images/img_3dstudentgrad.svg"
          alt="3dstudentgrad"
        />
      ),
      label: "Masters",
      href: "/master",
      active: window.location.pathname === "/master",
    },
    {
      icon: (
        <Img
          className="h-[38px] w-[38px]"
          src="images/img_shoppingcart10527741.svg"
          alt="shoppingcart105"
        />
      ),
      label: "Purchase",
      href: "/purchase",
      active: window.location.pathname === "/purchase",
    },
    {
      icon: (
        <Img
          className="h-[38px] w-[38px]"
          src="images/img_3dstudentgrad.svg"
          alt="hamper70670551"
        />
      ),
      label: "Sales",
      href: "/sales",
      active: window.location.pathname === "/sales",
    },
    {
      icon: (
        <Img className="h-7 w-7" src="images/img_group_10.svg" alt="group" />
      ),
      label: "Basic Vouchers",
      href: "/basicvouchers",
      active: window.location.pathname === "/basicvouchers",
    },
    {
      icon: (
        <Img
          className="h-8 mb-[3px] w-8"
          src="images/img_computer.svg"
          alt="computer_One"
        />
      ),
      label: "Payment Vouchers",
      href: "/paymentvouchers",
      active: window.location.pathname === "/paymentvouchers",
    },
    {
      icon: (
        <Img
          className="h-8 mb-[3px] w-8"
          src="images/img_computer.svg"
          alt="computer_Two"
        />
      ),
      label: "Receipt Vouchers",
      href: "/receiptvouchers",
      active: window.location.pathname === "/receiptvouchers",
    },
    {
      icon: (
        <Img
          className="h-[38px] mb-1 w-[38px]"
          src="images/img_3dstudentgrad.svg"
          alt="process9623270"
        />
      ),
      label: "PDC Managemennt",
      href: "/pdcmanagemennt",
      active: window.location.pathname === "/pdcmanagemennt",
    },
    {
      icon: (
        <Img
          className="h-8 w-8"
          src="images/img_computer.svg"
          alt="computer_Three"
        />
      ),
      label: "Stocks",
      href: "/stocks",
      active: window.location.pathname === "/stocks",
    },
    {
      icon: (
        <Img
          className="h-[38px] mb-1 w-[38px]"
          src="images/img_3dstudentgrad.svg"
          alt="spreadsheetappThree"
        />
      ),
      label: "Reports",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ibmplexsans items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar11 className="!sticky !w-[250px] bg-blue-800 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="flex sm:h-[125px] h-[158px] md:h-[673px] justify-end relative w-full">
              <Line className="bg-gray-400_03 h-px mb-[11px] mt-auto mx-auto w-[93%]" />
              <div className="absolute sm:h-[125px] h-[158px] md:h-[673px] inset-[0] justify-center m-auto w-full">
                <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto p-2 top-[0] w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start mt-1.5 w-[95%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row gap-[3px] items-center justify-center w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_computer.svg"
                          alt="computer_Four"
                        />
                        <Text
                          className="text-base text-gray-500_33 text-right w-auto"
                          size="txtIBMPlexSansRegular16Gray50033"
                        >
                          Dashboard
                        </Text>
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_forward.svg"
                          alt="forward"
                        />
                        <Text
                          className="text-base text-gray-500_33 text-right w-auto"
                          size="txtIBMPlexSansRegular16Gray50033"
                        >
                          Master
                        </Text>
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_forward.svg"
                          alt="forward_One"
                        />
                        <Text
                          className="text-base text-deep_orange-500 text-right w-auto"
                          size="txtIBMPlexSansMedium16Deeporange500"
                        >
                          Add Account Types
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[18px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-7 items-center justify-start w-auto">
                          <Img
                            className="h-[22px] w-[22px]"
                            src="images/img_iconsearch.svg"
                            alt="iconsearch"
                          />
                          <Img
                            className="h-[22px] w-[22px]"
                            src="images/img_volume_gray_400_02.svg"
                            alt="volume"
                          />
                          <div className="relative w-6">
                            <Img
                              className="h-6 m-auto w-6"
                              src="images/img_bell01.svg"
                              alt="bellOne"
                            />
                            <div className="absolute bg-blue-800_01 h-2 outline outline-[1px] outline-gray-50_04 right-[8%] rounded-[50%] top-[0] w-2"></div>
                          </div>
                          <Img
                            className="h-8 w-px"
                            src="images/img_dividerline.svg"
                            alt="dividerline"
                          />
                        </div>
                        <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                          <div className="flex flex-col h-11 items-center justify-start outline outline-[1px] outline-gray-300_08 p-0.5 rounded-[50%] w-11">
                            <div className="flex flex-col h-10 items-center justify-start w-10">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_mheader.png"
                                alt="mheader"
                              />
                            </div>
                          </div>
                          <SelectBox
                            className="font-medium text-blue_gray-900_01 text-right text-sm tracking-[0.20px] w-[59%] sm:w-full"
                            placeholderClassName="text-blue_gray-900_01"
                            indicator={
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_arrowdown_black_900.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="frame1139"
                            options={moumenOptionsList}
                            isSearchable={false}
                            placeholder="Moumen"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="bg-white-A700 border border-blue-800 border-solid flex flex-col items-center justify-start md:mt-0 my-1.5 p-1 rounded-md shadow-bs2">
                        <Img
                          className="h-[22px] w-[22px]"
                          src="images/img_svgexport17_blue_800.svg"
                          alt="svgexportSeventeen"
                        />
                      </div>
                      <Button
                        className="border border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[168px]"
                        leftIcon={
                          <Img
                            className="mr-[17px]"
                            src="images/img_computer.svg"
                            alt="computer"
                          />
                        }
                        shape="round"
                      >
                        <div className="font-semibold leading-[normal] text-base text-left">
                          Add Account
                        </div>
                      </Button>
                      <Button
                        className="border border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[166px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-[17px]"
                            src="images/img_3dstudentgrad.svg"
                            alt="shopping_8730484 1"
                          />
                        }
                        shape="round"
                      >
                        <div className="font-semibold leading-[normal] text-base text-left">
                          Add Products
                        </div>
                      </Button>
                      <Button
                        className="border border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[171px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-[17px]"
                            src="images/img_3dstudentgrad.svg"
                            alt="add_6329712 1"
                          />
                        }
                        shape="round"
                      >
                        <div className="font-semibold leading-[normal] text-base text-left">
                          Add Customer
                        </div>
                      </Button>
                      <Button
                        className="border border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[162px]"
                        leftIcon={
                          <Img
                            className="h-6 mb-px mr-[17px]"
                            src="images/img_packaging1272189_1.svg"
                            alt="packaging_1272189 1"
                          />
                        }
                        shape="round"
                      >
                        <div className="font-semibold leading-[normal] text-base text-left">
                          Add Supplier
                        </div>
                      </Button>
                      <Button
                        className="border border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[154px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-[17px]"
                            src="images/img_3dstudentgrad.svg"
                            alt="add-file_1486753 1"
                          />
                        }
                        shape="round"
                      >
                        <div className="font-semibold leading-[normal] text-base text-left">
                          Add Service
                        </div>
                      </Button>
                      <Button
                        className="border border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[149px]"
                        leftIcon={
                          <Img
                            className="h-6 mb-px mr-[17px]"
                            src="images/img_block4491563_1_1.svg"
                            alt="block_4491563 (1) 1"
                          />
                        }
                        shape="round"
                      >
                        <div className="font-semibold leading-[normal] text-base text-left">
                          Add ِAssets
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[82px] items-end justify-start p-0.5 right-[1%] shadow-bs3"
                  style={{ backgroundImage: "url('images/img_frame1197.svg')" }}
                >
                  <a
                    href="javascript:"
                    className="mb-2.5 mr-[3px] rotate-[90deg] text-base text-blue-800"
                  >
                    <Text size="txtIBMPlexSansMedium16Blue800">Support</Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_05 flex sm:flex-col flex-row gap-3 items-start justify-start mt-[5px] p-[23px] sm:px-5 shadow-bs4 w-[94%] md:w-full">
              <div className="md:h-[164px] h-[196px] sm:h-[268px] mb-[9px] sm:ml-[0] ml-[17px] relative w-[37%] sm:w-full">
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[2%] my-auto w-[1%]">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Line className="bg-blue-800 h-[41px] w-px" />
                    <Line className="bg-blue-800 h-[41px] w-px" />
                    <Line className="bg-blue-800 h-[41px] w-px" />
                  </div>
                </div>
                <div className="absolute flex flex-row gap-[13px] items-center justify-between left-[0] top-[0] w-auto">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                  <Img
                    className="h-2.5 w-[50px]"
                    src="images/img_car.svg"
                    alt="car"
                  />
                  <Img
                    className="h-7 w-7"
                    src="images/img_computer.svg"
                    alt="computer_Five"
                  />
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtIBMPlexSansMedium16Black900"
                  >
                    Assets Group
                  </Text>
                  <Img
                    className="h-2.5 w-[50px]"
                    src="images/img_car.svg"
                    alt="car_One"
                  />
                  <Text
                    className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                    size="txtIBMPlexSansSemiBold16Blue800"
                  >
                    Add
                  </Text>
                </div>
                <div className="absolute flex flex-col gap-7 h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-start w-auto sm:w-full">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_plus.svg"
                      alt="plus_One"
                    />
                    <Img
                      className="h-2.5 w-[50px]"
                      src="images/img_car.svg"
                      alt="car_Two"
                    />
                    <Img
                      className="h-7 w-7"
                      src="images/img_computer.svg"
                      alt="computer_Six"
                    />
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtIBMPlexSansMedium16Black900"
                    >
                      Liabilities Group
                    </Text>
                    <Img
                      className="h-2.5 w-[50px]"
                      src="images/img_car.svg"
                      alt="car_Three"
                    />
                    <Text
                      className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                      size="txtIBMPlexSansSemiBold16Blue800"
                    >
                      Add
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between w-full">
                    <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_plus.svg"
                        alt="plus_Two"
                      />
                      <Img
                        className="h-2.5 w-[50px]"
                        src="images/img_car.svg"
                        alt="car_Four"
                      />
                      <Img
                        className="h-7 w-7"
                        src="images/img_computer.svg"
                        alt="computer_Seven"
                      />
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtIBMPlexSansMedium16Black900"
                      >
                        Cost And Expenses Group
                      </Text>
                    </div>
                    <Img
                      className="h-2.5"
                      src="images/img_car.svg"
                      alt="car_Five"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-row gap-[13px] inset-x-[0] items-center justify-between mx-auto w-auto">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_plus.svg"
                    alt="plus_Three"
                  />
                  <Img
                    className="h-2.5 w-[50px]"
                    src="images/img_car.svg"
                    alt="car_Six"
                  />
                  <Img
                    className="h-7 w-7"
                    src="images/img_computer.svg"
                    alt="computer_Eight"
                  />
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtIBMPlexSansMedium16Black900"
                  >
                    Revenue Group
                  </Text>
                  <Img
                    className="h-2.5 w-[50px]"
                    src="images/img_car.svg"
                    alt="car_Seven"
                  />
                  <Text
                    className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                    size="txtIBMPlexSansSemiBold16Blue800"
                  >
                    Add
                  </Text>
                </div>
              </div>
              <Text
                className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center mb-[65px] sm:mt-0 mt-28 px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                size="txtIBMPlexSansSemiBold16Blue800"
              >
                Add
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterAccountTypesPage;
