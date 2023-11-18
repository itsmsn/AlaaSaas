import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const moumenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReceiptVouchersPage = () => {
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
        <Img className="h-7 w-7" src="images/img_group_57.svg" alt="group" />
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
          <Sidebar1 className="!sticky !w-[250px] bg-blue-800 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
            <div className="sm:h-[147px] h-[275px] md:h-[611px] relative w-full">
              <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[26px] inset-x-[0] items-center justify-center mx-auto w-auto">
                <List
                  className="sm:flex-col flex-row gap-[26px] grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 border border-gray-300_08 border-solid flex flex-col items-center justify-end p-[21px] sm:px-5 rounded-lg w-full">
                    <div className="flex flex-col gap-[11px] items-center justify-start w-auto">
                      <div className="flex flex-row gap-2 items-end justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_close.svg"
                          alt="close"
                        />
                        <Text
                          className="text-[19px] text-blue_gray-300_17 text-center w-auto"
                          size="txtIBMPlexSansMedium19"
                        >
                          Customers
                        </Text>
                      </div>
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_01 text-center tracking-[1.00px] w-auto"
                        size="txtIBMPlexSansBold40"
                      >
                        31
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-300_08 border-solid flex flex-col items-center justify-end p-[21px] sm:px-5 rounded-lg w-full">
                    <div className="flex flex-col gap-[11px] items-center justify-start mt-0.5 w-auto">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_svgexport1820.svg"
                          alt="svgexport1820"
                        />
                        <Text
                          className="text-blue_gray-300_17 text-center text-lg w-auto"
                          size="txtIBMPlexSansMedium18"
                        >
                          Suppliers
                        </Text>
                      </div>
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_01 text-center tracking-[1.00px] w-auto"
                        size="txtIBMPlexSansBold40"
                      >
                        20
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-row gap-[42px] items-center justify-center p-4 rounded-lg w-[24%] md:w-full">
                  <div className="flex flex-col gap-[11px] items-center justify-start mb-[5px] ml-[73px] mt-2 w-auto">
                    <div className="flex flex-row gap-2 items-end justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_svgexport17.svg"
                        alt="svgexportSeventeen"
                      />
                      <Text
                        className="text-blue-800 text-center text-lg w-auto"
                        size="txtIBMPlexSansBold18"
                      >
                        Sales
                      </Text>
                    </div>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue-800 text-center tracking-[1.00px] w-auto"
                      size="txtIBMPlexSansBold40Blue800"
                    >
                      126
                    </Text>
                  </div>
                  <Img
                    className="h-4 mr-4 w-4"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                </div>
                <div className="bg-white-A700 border border-gray-300_08 border-solid flex flex-col items-center justify-end p-[21px] sm:px-5 rounded-lg w-[24%] md:w-full">
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_svgexport66.svg"
                        alt="svgexportSixtySix"
                      />
                      <Text
                        className="text-blue_gray-300_17 text-center text-lg w-auto"
                        size="txtIBMPlexSansMedium18"
                      >
                        Purchase
                      </Text>
                    </div>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900_01 text-center tracking-[1.00px] w-auto"
                      size="txtIBMPlexSansBold40"
                    >
                      64
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute sm:h-[147px] h-[158px] md:h-[611px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="h-[125px] mx-auto object-cover w-full"
                  src="images/img_rectangle16_27.png"
                  alt="rectangleSixteen"
                />
                <div className="absolute sm:h-[147px] h-[158px] md:h-[611px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto p-2 top-[0] w-full">
                    <div className="flex flex-col gap-[17px] items-center justify-start mt-1.5 w-[95%] md:w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
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
                            className="text-base text-deep_orange-500 text-right w-auto"
                            size="txtIBMPlexSansMedium16Deeporange500"
                          >
                            Receipt Vouchers
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
                              alt="volume_One"
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
                            alt="svgexportSeventeen_One"
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
                    style={{
                      backgroundImage: "url('images/img_frame1197.svg')",
                    }}
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
            </div>
            <div className="flex flex-col gap-[19px] items-center justify-start w-[95%] md:w-full">
              <Line className="bg-gray-400_03 h-px w-full" />
              <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
                <Img
                  className="h-[308px] md:h-auto object-cover rounded"
                  src="images/img_screenshot20230830.png"
                  alt="screenshot20230"
                />
                <List
                  className="bg-white-A700 border border-gray-500_31 border-solid flex flex-col gap-[72px] p-[9px] rounded"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start mr-[3px] my-0 w-full">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                        <Text
                          className="sm:mt-0 mt-1.5 text-black-900 text-sm"
                          size="txtIBMPlexSansSemiBold14"
                        >
                          Income
                        </Text>
                        <div className="h-[45px] relative w-[88%] sm:w-full">
                          <div className="flex m-auto w-full">
                            <Line className="bg-gray-500_32 h-[45px] my-auto w-px" />
                            <div className="bg-indigo-600 h-[22px] ml-[undefinedpx] mr-auto mt-[5px] w-full z-[1]"></div>
                            <Line className="bg-gray-500_32 h-px mb-1 ml-[-1px] mr-auto mt-auto w-full z-[1]" />
                          </div>
                          <div className="absolute bottom-[4%] flex flex-row gap-5 items-center justify-between left-[4%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 left-[13%] rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center left-[17%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 left-1/4 rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center left-[30%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 left-[38%] rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center left-[42%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 inset-x-[0] mx-auto rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center right-[41%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 right-[36%] rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center right-[28%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 right-[24%] rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center right-[15%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 right-[11%] rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-between right-[3%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-center justify-end md:ml-[0] ml-[66px] mt-[3px] w-[84%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          0
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[39px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          2000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[29px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          4000
                        </Text>
                        <Text
                          className="ml-7 sm:ml-[0] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          6000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[29px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          8000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[29px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          10000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[23px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          11000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[25px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          120000
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mr-[3px] my-0 w-full">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between w-full">
                        <Text
                          className="text-black-900 text-sm"
                          size="txtIBMPlexSansSemiBold14"
                        >
                          Expense
                        </Text>
                        <div className="h-[45px] relative w-[88%] sm:w-full">
                          <div className="flex m-auto w-full">
                            <Line className="bg-gray-500_32 h-[45px] my-auto w-px" />
                            <div className="bg-deep_orange-500 h-[22px] ml-[undefinedpx] mr-auto mt-[5px] w-full z-[1]"></div>
                            <Line className="bg-gray-500_32 h-px mb-1 ml-[-1px] mr-auto mt-auto w-full z-[1]" />
                          </div>
                          <div className="absolute bottom-[4%] flex flex-row gap-5 items-center justify-between left-[4%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 left-[13%] rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center left-[17%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 left-1/4 rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center left-[30%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 left-[38%] rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center left-[42%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 inset-x-[0] mx-auto rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center right-[41%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 right-[36%] rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center right-[28%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 right-[24%] rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-center right-[15%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                          <Line className="absolute bg-gray-500_32 bottom-[0] h-1.5 right-[11%] rotate-[-90deg] w-px" />
                          <div className="absolute bottom-[4%] flex flex-row gap-[19px] items-center justify-between right-[3%] w-[5%]">
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                            <Line className="bg-gray-500_32 h-1 rotate-[-90deg] w-px" />
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-center justify-end md:ml-[0] ml-[66px] mt-[3px] w-[84%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          0
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[39px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          2000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[29px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          4000
                        </Text>
                        <Text
                          className="ml-7 sm:ml-[0] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          6000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[29px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          8000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[29px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          10000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[23px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          11000
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[25px] text-blue_gray-400 text-xs"
                          size="txtInterMedium12"
                        >
                          120000
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="bg-white-A700 border border-gray-500_31 border-solid flex md:flex-1 flex-col items-center justify-start p-[11px] rounded w-[39%] md:w-full">
                  <div className="flex flex-col gap-[27px] items-center justify-start mb-[23px] w-[95%] md:w-full">
                    <Text
                      className="text-base text-center text-gray-400_04"
                      size="txtIBMPlexSansMedium16Gray40004"
                    >
                      PDC list for next 30 days
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="gap-[30px] grid grid-cols-4 justify-center min-h-[auto] w-full">
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-center text-deep_orange-500_b2 text-sm w-auto"
                              size="txtIBMPlexSansRegular14"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-center text-deep_orange-500_b2 w-auto"
                              size="txtIBMPlexSansMedium16Deeporange500b2"
                            >
                              Saturday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar_blue_800.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-blue-800_99 text-center text-sm w-auto"
                              size="txtIBMPlexSansRegular14Blue80099"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-blue-800_99 text-center w-auto"
                              size="txtIBMPlexSansMedium16Blue80099"
                            >
                              Sunday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-center text-deep_orange-500_b2 text-sm w-auto"
                              size="txtIBMPlexSansRegular14"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-center text-deep_orange-500_b2 w-auto"
                              size="txtIBMPlexSansMedium16Deeporange500b2"
                            >
                              Monday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-center text-deep_orange-500_b2 text-sm w-auto"
                              size="txtIBMPlexSansRegular14"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-center text-deep_orange-500_b2 w-auto"
                              size="txtIBMPlexSansMedium16Deeporange500b2"
                            >
                              Tuesday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar_blue_800.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-blue-800_99 text-center text-sm w-auto"
                              size="txtIBMPlexSansRegular14Blue80099"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-blue-800_99 text-center w-auto"
                              size="txtIBMPlexSansMedium16Blue80099"
                            >
                              Friday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-center text-deep_orange-500_b2 text-sm w-auto"
                              size="txtIBMPlexSansRegular14"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-center text-deep_orange-500_b2 w-auto"
                              size="txtIBMPlexSansMedium16Deeporange500b2"
                            >
                              Saturday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar_blue_800.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-blue-800_99 text-center text-sm w-auto"
                              size="txtIBMPlexSansRegular14Blue80099"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-blue-800_99 text-center w-auto"
                              size="txtIBMPlexSansMedium16Blue80099"
                            >
                              Saturday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar_blue_800.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-blue-800_99 text-center text-sm w-auto"
                              size="txtIBMPlexSansRegular14Blue80099"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-blue-800_99 text-center w-auto"
                              size="txtIBMPlexSansMedium16Blue80099"
                            >
                              Saturday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-center text-deep_orange-500_b2 text-sm w-auto"
                              size="txtIBMPlexSansRegular14"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-center text-deep_orange-500_b2 w-auto"
                              size="txtIBMPlexSansMedium16Deeporange500b2"
                            >
                              Saturday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar_blue_800.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-blue-800_99 text-center text-sm w-auto"
                              size="txtIBMPlexSansRegular14Blue80099"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-blue-800_99 text-center w-auto"
                              size="txtIBMPlexSansMedium16Blue80099"
                            >
                              Saturday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-center text-deep_orange-500_b2 text-sm w-auto"
                              size="txtIBMPlexSansRegular14"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-center text-deep_orange-500_b2 w-auto"
                              size="txtIBMPlexSansMedium16Deeporange500b2"
                            >
                              Saturday
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-center text-deep_orange-500_b2 text-sm w-auto"
                              size="txtIBMPlexSansRegular14"
                            >
                              02.09.2023
                            </Text>
                            <Text
                              className="text-base text-center text-deep_orange-500_b2 w-auto"
                              size="txtIBMPlexSansMedium16Deeporange500b2"
                            >
                              Saturday
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-500_31 border-solid h-[374px] p-[11px] relative rounded w-3/5 md:w-full">
                  <Text
                    className="mb-[undefinedpx] mx-auto text-base text-center text-gray-400_04 z-[1]"
                    size="txtIBMPlexSansMedium16Gray40004"
                  >
                    Monthly wise
                  </Text>
                  <div className="flex flex-row font-ibmplexsans items-center justify-center mb-[-1.65px] ml-auto mr-[3px] mt-[9px] w-[11%] z-[1]">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtIBMPlexSansMedium14"
                    >
                      Income
                    </Text>
                    <div className="bg-white-A700 border border-gray-400_06 border-solid flex flex-col h-[15px] items-center justify-start ml-1 p-[3px] rounded-[7px] w-[15px]">
                      <div className="bg-blue-800 h-[9px] rounded w-[9px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-row font-ibmplexsans items-start justify-center mb-[-1.95px] ml-auto mr-[99px] mt-[9px] w-[12%] z-[1]">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtIBMPlexSansSemiBold14"
                    >
                      Expense
                    </Text>
                    <div className="bg-white-A700 border border-gray-400_06 border-solid flex flex-col h-[15px] items-center justify-start ml-1 p-[3px] rounded-[7px] w-[15px]">
                      <div className="bg-deep_orange-500 h-[9px] rounded w-[9px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col font-cairo items-center justify-start mb-0.5 mt-auto mx-auto w-[95%]">
                    <div className="flex md:flex-col flex-row gap-[15px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[17px] items-start justify-start">
                        <Text
                          className="text-gray-400_05 text-lg"
                          size="txtCairoRegular18"
                        >
                          100
                        </Text>
                        <Text
                          className="text-gray-400_05 text-lg"
                          size="txtCairoRegular18"
                        >
                          80
                        </Text>
                        <Text
                          className="text-gray-400_05 text-lg"
                          size="txtCairoRegular18"
                        >
                          60
                        </Text>
                        <Text
                          className="text-gray-400_05 text-lg"
                          size="txtCairoRegular18"
                        >
                          40
                        </Text>
                        <Text
                          className="text-gray-400_05 text-lg"
                          size="txtCairoRegular18"
                        >
                          20
                        </Text>
                        <Text
                          className="text-gray-400_05 text-lg"
                          size="txtCairoRegular18"
                        >
                          0
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-2.5 justify-start md:mt-0 mt-5 w-[93%] md:w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-64 items-start justify-start pt-0.5 px-0.5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group118.svg')",
                          }}
                        >
                          <Img
                            className="h-[254px] md:ml-[0] ml-[15px]"
                            src="images/img_chart.svg"
                            alt="chart"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[26px] w-[87%] md:w-full">
                          <Text
                            className="text-gray-400_05 text-lg"
                            size="txtCairoRegular18"
                          >
                            Sat
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[50px] text-gray-400_05 text-lg"
                            size="txtCairoRegular18"
                          >
                            Sun
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[50px] text-gray-400_05 text-lg"
                            size="txtCairoRegular18"
                          >
                            Mon
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[50px] text-gray-400_05 text-lg"
                            size="txtCairoRegular18"
                          >
                            Tue
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[50px] text-gray-400_05 text-lg"
                            size="txtCairoRegular18"
                          >
                            Wed
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[42px] text-gray-400_05 text-lg"
                            size="txtCairoRegular18"
                          >
                            Thur
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[47px] text-gray-400_05 text-lg"
                            size="txtCairoRegular18"
                          >
                            Fri
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiptVouchersPage;
