import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const moumenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PurchasePage = () => {
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
        <Img className="h-7 w-7" src="images/img_group_30.svg" alt="group" />
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
      <div className="bg-white-A700 font-ibmplexsans h-[1041px] mx-auto relative w-full">
        <Sidebar1 className="!sticky !w-[250px] bg-blue-800 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto md:px-5 top-[0]" />
        <div className="absolute flex flex-col items-center justify-start md:px-5 right-[0] top-[0] w-[83%]">
          <div className="flex sm:h-[146px] h-[158px] md:h-[611px] justify-end relative w-full">
            <Line className="bg-gray-400_03 h-px mb-[11px] mt-auto mx-auto w-[93%]" />
            <div className="absolute sm:h-[146px] h-[158px] md:h-[611px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[125px] mx-auto object-cover w-full"
                src="images/img_rectangle16_125x1190.png"
                alt="rectanglesixtee"
              />
              <div className="absolute sm:h-[146px] h-[158px] md:h-[611px] inset-[0] justify-center m-auto w-full">
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
                          className="text-base text-deep_orange-500 text-right w-auto"
                          size="txtIBMPlexSansMedium16Deeporange500"
                        >
                          Purchase
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
          </div>
          <Img
            className="h-[213px] mt-[19px]"
            src="images/img_50.svg"
            alt="fifty"
          />
          <Text
            className="mt-[30px] text-center text-gray-600_23 text-xl"
            size="txtIBMPlexSansRegular20"
          >
            No Purchase Datas Found!
          </Text>
          <div className="flex flex-col items-start justify-start mt-[47px] w-[93%] md:w-full">
            <Line className="bg-gray-400_03 h-px w-full" />
            <Text
              className="ml-0.5 md:ml-[0] mt-[26px] text-black-900 text-lg"
              size="txtIBMPlexSansMedium18Black900"
            >
              Purchase Flow
            </Text>
            <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between ml-0.5 md:ml-[0] mt-[18px] w-[99%] md:w-full">
              <Button
                className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[159px] text-base text-center"
                shape="round"
              >
                Purchase Request
              </Button>
              <Button
                className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[159px] text-base text-center"
                shape="round"
              >
                Purchase Request
              </Button>
              <Button
                className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[171px] text-base text-center"
                shape="round"
              >
                Purchase Quotation
              </Button>
              <Button
                className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[159px] text-base text-center"
                shape="round"
              >
                Purchase Request
              </Button>
              <Button
                className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[171px] text-base text-center"
                shape="round"
              >
                Purchase Quotation
              </Button>
              <Button
                className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[144px] text-base text-center"
                shape="round"
              >
                Purchase Order
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[33%] h-[87px] left-[38%] md:px-5 w-[14%]">
          <Line className="bg-blue-800 h-10 w-px" />
          <div className="absolute h-[87px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[12%]">
              <div className="flex flex-row items-start justify-evenly w-full">
                <Img
                  className="h-[47px] mt-10"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <Img
                  className="h-[47px] mb-10"
                  src="images/img_arrowdown_blue_800.svg"
                  alt="arrowdownone"
                />
              </div>
            </div>
            <Line className="absolute bg-blue-800 h-px inset-x-[0] mx-auto top-[46%] w-[98%]" />
          </div>
        </div>
        <div className="absolute bottom-[33%] flex flex-col items-start justify-start left-1/4 md:px-5 w-[13%]">
          <Line className="bg-blue-800 h-10 w-px" />
          <div className="h-[47px] relative w-full">
            <Img
              className="absolute h-[47px] inset-y-[0] my-auto right-[0]"
              src="images/img_arrowdown.svg"
              alt="arrowdowntwo"
            />
            <Line className="absolute bg-blue-800 h-px inset-x-[0] mx-auto top-[0] w-[98%]" />
          </div>
        </div>
        <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
            <Button
              className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[159px] text-base text-center"
              shape="round"
            >
              Purchase Request
            </Button>
            <Button
              className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[171px] sm:ml-[0] ml-[21px] text-base text-center"
              shape="round"
            >
              Purchase Quotation
            </Button>
            <Button
              className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[140px] sm:ml-[0] ml-[21px] text-base text-center"
              shape="round"
            >
              Purchase Order
            </Button>
            <Button
              className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[143px] sm:ml-[0] ml-[252px] text-base text-center"
              shape="round"
            >
              Goods Received
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start mt-1 w-[84%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Line className="bg-blue-800 h-10 md:h-px md:w-full w-px" />
              <Line className="bg-blue-800 h-10 md:h-px md:ml-[0] ml-[170px] md:w-full w-px" />
              <Line className="bg-blue-800 h-10 md:h-px md:ml-[0] ml-[191px] md:w-full w-px" />
              <Line className="bg-blue-800 h-10 md:h-px md:ml-[0] ml-[391px] md:w-full w-px" />
            </div>
            <div className="h-[47px] relative w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[70%]">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[47px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdownthree"
                  />
                  <Img
                    className="h-[47px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdownfour"
                  />
                </div>
              </div>
              <Line className="absolute bg-blue-800 h-px inset-x-[0] mx-auto top-[0] w-full" />
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-1 w-[88%] md:w-full">
              <Button
                className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[148px] text-base text-center"
                shape="round"
              >
                Purchase Return
              </Button>
              <Button
                className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[152px] text-base text-center"
                shape="round"
              >
                Purchase Invocie
              </Button>
            </div>
            <div className="flex flex-row items-center justify-between w-[68%] md:w-full">
              <Line className="bg-blue-800 h-10 w-px" />
              <Line className="bg-blue-800 h-10 w-px" />
            </div>
            <div className="h-[47px] relative w-[68%] sm:w-full">
              <Img
                className="absolute h-[47px] inset-[0] justify-center m-auto"
                src="images/img_arrowdown.svg"
                alt="arrowdownfive"
              />
              <Line className="absolute bg-blue-800 h-px inset-x-[0] mx-auto top-[0] w-full" />
            </div>
            <Button
              className="border border-blue-800 border-solid cursor-pointer font-semibold leading-[normal] min-w-[94px] mt-1 text-base text-center"
              shape="round"
            >
              Purchase
            </Button>
          </div>
        </div>
        <div className="absolute bottom-[33%] flex flex-col items-center justify-start md:px-5 right-[10%] w-[26%]">
          <div className="flex flex-row items-center justify-between w-full">
            <Line className="bg-blue-800 h-10 w-px" />
            <Line className="bg-blue-800 h-10 w-px" />
            <Line className="bg-blue-800 h-10 w-px" />
          </div>
          <div className="h-[47px] relative w-full">
            <Img
              className="absolute h-[47px] inset-[0] justify-center m-auto"
              src="images/img_arrowdown.svg"
              alt="arrowdownsix"
            />
            <Line className="absolute bg-blue-800 h-px inset-x-[0] mx-auto top-[0] w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchasePage;
