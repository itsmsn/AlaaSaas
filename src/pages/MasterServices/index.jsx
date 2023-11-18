import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, SelectBox, Text } from "components";
import Sidebar11 from "components/Sidebar11";

const moumenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MasterServicesPage = () => {
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
        <Img className="h-7 w-7" src="images/img_group_23.svg" alt="group" />
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
          alt="computerone"
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
          alt="computertwo"
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
          alt="computerthree"
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
          alt="spreadsheetappt"
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
          <div className="flex flex-1 flex-col gap-6 items-center justify-start md:px-5 w-full">
            <div className="sm:h-[146px] h-[198px] md:h-[611px] relative w-full">
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[93%]">
                <div className="flex flex-col gap-[9px] items-end justify-start w-full">
                  <Line className="bg-gray-400_03 h-px w-full" />
                  <Button
                    className="border border-blue-800 border-solid cursor-pointer flex items-center justify-center min-w-[204px]"
                    leftIcon={
                      <Img
                        className="h-6 mb-px mr-[17px]"
                        src="images/img_3dstudentgrad.svg"
                        alt="add-file_1486753 1"
                      />
                    }
                    shape="round"
                  >
                    <div className="font-semibold leading-[normal] text-base text-left">
                      Add Service Group
                    </div>
                  </Button>
                </div>
              </div>
              <div className="absolute sm:h-[146px] h-[158px] md:h-[611px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto p-2 top-[0] w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start mt-1.5 w-[95%] md:w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row gap-[3px] items-center justify-center w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_computer.svg"
                          alt="computerfour"
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
                          alt="forwardone"
                        />
                        <Text
                          className="text-base text-deep_orange-500 text-right w-auto"
                          size="txtIBMPlexSansMedium16Deeporange500"
                        >
                          Services
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
                              alt="bellone"
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
                          alt="svgexportsevent"
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
            <div className="bg-gray-50_05 md:h-[358px] h-[396px] sm:h-[905px] p-[27px] sm:px-5 relative shadow-bs4 w-[94%] md:w-full">
              <div className="absolute flex flex-col justify-start left-[4%] top-[7%] w-[53%]">
                <div className="flex flex-col relative w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mx-auto w-full">
                    <div className="bg-blue-800 flex flex-col h-[18px] items-center justify-start sm:mt-0 my-[5px] p-1 rounded-[50%] w-[18px]">
                      <div className="bg-white-A700 h-px my-1 w-[90%]"></div>
                    </div>
                    <Img
                      className="h-2.5 sm:mt-0 my-[9px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Img
                      className="h-7 w-7"
                      src="images/img_computer.svg"
                      alt="computerfive"
                    />
                    <Img
                      className="h-4 md:h-auto sm:mt-0 my-1.5 object-cover rounded-[1px] w-4"
                      src="images/img_rectangle24.png"
                      alt="rectangletwenty"
                    />
                    <Text
                      className="sm:mt-0 my-1 text-black-900 text-sm"
                      size="txtIBMPlexSansMedium14"
                    >
                      خدمات (1)
                    </Text>
                    <Img
                      className="h-2.5 sm:mt-0 my-[9px]"
                      src="images/img_car_blue_gray_400_19.svg"
                      alt="carone"
                    />
                    <Img
                      className="h-[18px] sm:mt-0 my-[5px] w-[18px]"
                      src="images/img_computer.svg"
                      alt="computersix"
                    />
                    <Img
                      className="h-2.5 sm:mt-0 my-[9px]"
                      src="images/img_car_blue_gray_400_19.svg"
                      alt="cartwo"
                    />
                    <Img
                      className="h-[18px] sm:mt-0 my-[5px] w-[18px]"
                      src="images/img_delete10337516.svg"
                      alt="delete10337516"
                    />
                    <Img
                      className="h-2.5 sm:mt-0 my-[9px]"
                      src="images/img_car.svg"
                      alt="carthree"
                    />
                    <Text
                      className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                      size="txtIBMPlexSansSemiBold16Blue800"
                    >
                      Add
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-400_19 h-11 ml-[31px] mt-[-14px] w-px z-[1]" />
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[31px] mt-[5px] w-[4%] md:w-full">
                  <div className="flex flex-col gap-3 items-center justify-start mt-1 w-[5%]">
                    <Line className="bg-blue-800 h-[206px] w-px" />
                    <Line className="bg-blue-800 h-[33px] w-px" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-[5%]">
                    <Line className="bg-blue_gray-400_19 h-11 w-px" />
                    <Line className="bg-blue_gray-400_19 h-11 w-px" />
                    <Line className="bg-blue_gray-400_19 h-11 w-px" />
                  </div>
                </div>
              </div>
              <div className="absolute flex sm:flex-col flex-row sm:gap-5 items-end justify-start left-[6%] top-[19%] w-[52%]">
                <div className="bg-blue-800 flex flex-col h-3.5 items-center justify-start sm:mt-0 my-[7px] p-[3px] rounded-[50%] w-3.5">
                  <div className="bg-white-A700 h-px my-[3px] w-[88%]"></div>
                </div>
                <Img
                  className="h-2.5 ml-3 sm:ml-[0] sm:mt-0 my-[9px]"
                  src="images/img_car.svg"
                  alt="carfour"
                />
                <Img
                  className="h-[18px] ml-2.5 sm:ml-[0] sm:mt-0 my-[5px] w-[18px]"
                  src="images/img_3dstudentgrad.svg"
                  alt="satisfied124473"
                />
                <Img
                  className="h-4 md:h-auto sm:ml-[0] ml-[11px] sm:mt-0 my-1.5 object-cover rounded-[1px] w-4"
                  src="images/img_rectangle24.png"
                  alt="rectangletwenty_One"
                />
                <Text
                  className="ml-4 sm:ml-[0] sm:mt-0 my-1 text-black-900 text-sm"
                  size="txtIBMPlexSansMedium14"
                >
                  {" "}
                  صيانة (11){" "}
                </Text>
                <Img
                  className="h-2.5 sm:ml-[0] ml-[17px] sm:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="carfive"
                />
                <Img
                  className="h-[18px] ml-5 sm:ml-[0] sm:mt-0 my-[5px] w-[18px]"
                  src="images/img_computer.svg"
                  alt="computerseven"
                />
                <Img
                  className="h-2.5 sm:ml-[0] ml-[13px] sm:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="carsix"
                />
                <Img
                  className="h-[18px] ml-5 sm:ml-[0] sm:mt-0 my-[5px] w-[18px]"
                  src="images/img_delete10337516.svg"
                  alt="delete10337516o"
                />
                <Img
                  className="h-2.5 ml-2.5 sm:ml-[0] sm:mt-0 my-[9px]"
                  src="images/img_car.svg"
                  alt="carseven"
                />
                <Text
                  className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center sm:ml-[0] ml-[13px] px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                  size="txtIBMPlexSansSemiBold16Blue800"
                >
                  Add
                </Text>
              </div>
              <div className="absolute bottom-[19%] flex md:flex-col flex-row md:gap-5 items-end justify-start left-[6%] w-3/5">
                <div className="h-3.5 md:h-[21px] md:mt-0 my-[7px] relative w-[12%] md:w-full">
                  <Img
                    className="absolute h-2.5 inset-y-[0] my-auto right-[0]"
                    src="images/img_car_blue_gray_400_19_10x66.svg"
                    alt="careight"
                  />
                  <Img
                    className="absolute h-3.5 inset-y-[0] left-[0] my-auto w-3.5"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
                <Img
                  className="h-[18px] ml-2.5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_3dstudentgrad.svg"
                  alt="satisfied124473_One"
                />
                <Text
                  className="ml-2.5 md:ml-[0] md:mt-0 my-1 text-black-900 text-sm"
                  size="txtIBMPlexSansMedium14"
                >
                  (12) Property and Equipment
                </Text>
                <Img
                  className="h-2.5 ml-3.5 md:ml-[0] md:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="carnine"
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_computer.svg"
                  alt="computereight"
                />
                <Img
                  className="h-2.5 md:ml-[0] ml-[13px] md:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="carten"
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_delete10337516.svg"
                  alt="delete10337516t"
                />
                <Img
                  className="h-2.5 ml-2.5 md:ml-[0] md:mt-0 my-[9px]"
                  src="images/img_car.svg"
                  alt="careleven"
                />
                <Text
                  className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center md:ml-[0] ml-[13px] px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                  size="txtIBMPlexSansSemiBold16Blue800"
                >
                  Add
                </Text>
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-5 items-end justify-start left-[8%] top-[32%] w-[55%]">
                <div className="h-3.5 md:h-5 md:mt-0 my-[7px] relative w-[10%] md:w-full">
                  <Img
                    className="absolute h-2.5 right-[0] top-[0]"
                    src="images/img_car.svg"
                    alt="cartwelve"
                  />
                  <div className="absolute bg-blue-800 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[3px] rounded-[50%] w-3.5">
                    <div className="bg-white-A700 h-px my-[3px] w-[88%]"></div>
                  </div>
                </div>
                <Img
                  className="h-[18px] ml-2.5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_3dstudentgrad.svg"
                  alt="satisfied124473_Two"
                />
                <Text
                  className="mb-0.5 ml-2.5 md:ml-[0] md:mt-0 mt-1.5 text-black-900 text-sm"
                  size="txtIBMPlexSansMedium14"
                >
                  {" "}
                  تصليح مكيفات (11002)
                </Text>
                <Img
                  className="h-2.5 ml-4 md:ml-[0] md:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="carthirteen"
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_computer.svg"
                  alt="computernine"
                />
                <Img
                  className="h-2.5 md:ml-[0] ml-[13px] md:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="carfourteen"
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_delete10337516.svg"
                  alt="delete10337516t_One"
                />
                <Img
                  className="h-2.5 ml-2.5 md:ml-[0] md:mt-0 my-[9px]"
                  src="images/img_car.svg"
                  alt="carfifteen"
                />
                <Text
                  className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center md:ml-[0] ml-[13px] px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                  size="txtIBMPlexSansSemiBold16Blue800"
                >
                  Add
                </Text>
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-end justify-start left-[8%] my-auto w-[55%]">
                <div className="h-3.5 md:h-5 md:mt-0 my-[7px] relative w-[10%] md:w-full">
                  <Img
                    className="absolute h-2.5 right-[0] top-[0]"
                    src="images/img_car.svg"
                    alt="carsixteen"
                  />
                  <div className="absolute bg-blue-800 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[3px] rounded-[50%] w-3.5">
                    <div className="bg-white-A700 h-px my-[3px] w-[88%]"></div>
                  </div>
                </div>
                <Img
                  className="h-[18px] ml-2.5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_3dstudentgrad.svg"
                  alt="satisfied124473_Three"
                />
                <Text
                  className="mb-0.5 ml-2.5 md:ml-[0] md:mt-0 mt-1.5 text-black-900 text-sm"
                  size="txtIBMPlexSansMedium14"
                >
                  {" "}
                  تصليح مكيفات (11002)
                </Text>
                <Img
                  className="h-2.5 ml-4 md:ml-[0] md:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="carseventeen"
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_computer.svg"
                  alt="computerten"
                />
                <Img
                  className="h-2.5 md:ml-[0] ml-[13px] md:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="careighteen"
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_delete10337516.svg"
                  alt="delete10337516f"
                />
                <Img
                  className="h-2.5 ml-2.5 md:ml-[0] md:mt-0 my-[9px]"
                  src="images/img_car.svg"
                  alt="carnineteen"
                />
                <Text
                  className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center md:ml-[0] ml-[13px] px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                  size="txtIBMPlexSansSemiBold16Blue800"
                >
                  Add
                </Text>
              </div>
              <div className="absolute bottom-[33%] flex md:flex-col flex-row md:gap-5 items-end justify-start left-[8%] w-[55%]">
                <div className="h-3.5 md:h-5 md:mt-0 my-[7px] relative w-[10%] md:w-full">
                  <Img
                    className="absolute h-2.5 right-[0] top-[0]"
                    src="images/img_car.svg"
                    alt="cartwenty"
                  />
                  <div className="absolute bg-blue-800 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[3px] rounded-[50%] w-3.5">
                    <div className="bg-white-A700 h-px my-[3px] w-[88%]"></div>
                  </div>
                </div>
                <Img
                  className="h-[18px] ml-2.5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_3dstudentgrad.svg"
                  alt="satisfied124473_Four"
                />
                <Text
                  className="mb-0.5 ml-2.5 md:ml-[0] md:mt-0 mt-1.5 text-black-900 text-sm"
                  size="txtIBMPlexSansMedium14"
                >
                  {" "}
                  تصليح مكيفات (11002)
                </Text>
                <Img
                  className="h-2.5 ml-4 md:ml-[0] md:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="cartwentyone"
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_computer.svg"
                  alt="computereleven"
                />
                <Img
                  className="h-2.5 md:ml-[0] ml-[13px] md:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="cartwentytwo"
                />
                <Img
                  className="h-[18px] ml-5 md:ml-[0] md:mt-0 my-[5px] w-[18px]"
                  src="images/img_delete10337516.svg"
                  alt="delete10337516f_One"
                />
                <Img
                  className="h-2.5 ml-2.5 md:ml-[0] md:mt-0 my-[9px]"
                  src="images/img_car.svg"
                  alt="cartwentythree"
                />
                <Text
                  className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center md:ml-[0] ml-[13px] px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                  size="txtIBMPlexSansSemiBold16Blue800"
                >
                  Add
                </Text>
              </div>
              <div className="absolute bottom-[8%] flex sm:flex-col flex-row sm:gap-5 items-end justify-start left-[6%] w-[53%]">
                <div className="h-3.5 md:h-7 sm:h-[21px] sm:mt-0 my-[7px] relative w-[13%] sm:w-full">
                  <Img
                    className="absolute h-2.5 inset-y-[0] my-auto right-[0]"
                    src="images/img_car_blue_gray_400_19_10x66.svg"
                    alt="cartwentyfour"
                  />
                  <Img
                    className="absolute h-3.5 inset-y-[0] left-[0] my-auto w-3.5"
                    src="images/img_plus.svg"
                    alt="plusone"
                  />
                </div>
                <Img
                  className="h-[18px] ml-2.5 sm:ml-[0] sm:mt-0 my-[5px] w-[18px]"
                  src="images/img_3dstudentgrad.svg"
                  alt="satisfied124473_Five"
                />
                <Text
                  className="ml-2.5 sm:ml-[0] sm:mt-0 my-1 text-black-900 text-sm"
                  size="txtIBMPlexSansMedium14"
                >
                  (13) Other Assets
                </Text>
                <Img
                  className="h-2.5 ml-3.5 sm:ml-[0] sm:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="cartwentyfive"
                />
                <Img
                  className="h-[18px] ml-5 sm:ml-[0] sm:mt-0 my-[5px] w-[18px]"
                  src="images/img_computer.svg"
                  alt="computertwelve"
                />
                <Img
                  className="h-2.5 sm:ml-[0] ml-[13px] sm:mt-0 my-[9px]"
                  src="images/img_car_blue_gray_400_19.svg"
                  alt="cartwentysix"
                />
                <Img
                  className="h-[18px] ml-5 sm:ml-[0] sm:mt-0 my-[5px] w-[18px]"
                  src="images/img_delete10337516.svg"
                  alt="delete10337516s"
                />
                <Img
                  className="h-2.5 ml-2.5 sm:ml-[0] sm:mt-0 my-[9px]"
                  src="images/img_car.svg"
                  alt="cartwentyseven"
                />
                <Text
                  className="bg-white-A700 border border-blue-800 border-solid h-7 justify-center sm:ml-[0] ml-[13px] px-3 py-[3px] rounded-sm text-base text-blue-800 text-shadow-ts w-auto"
                  size="txtIBMPlexSansSemiBold16Blue800"
                >
                  Add
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterServicesPage;
