import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Sidebar6 from "components/Sidebar6";

const moumenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectCompanyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BasicVouchersCompanyexpensesPage = () => {
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
        <Img className="h-7 w-7" src="images/img_group_52.svg" alt="group" />
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
          <Sidebar6 className="!sticky !w-[250px] bg-blue-800 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="flex sm:h-[125px] h-[158px] md:h-[673px] justify-end relative w-full">
              <Line className="bg-gray-400_03 h-px mb-[11px] mt-auto mx-auto w-[93%]" />
              <div className="absolute sm:h-[125px] h-[158px] md:h-[673px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[125px] mx-auto object-cover w-full"
                  src="images/img_rectangle16_22.png"
                  alt="rectanglesixtee"
                />
                <div className="absolute sm:h-[125px] h-[158px] md:h-[673px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto p-2 top-[0] w-full">
                    <div className="flex flex-col gap-[17px] items-center justify-start mt-1.5 w-[95%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-[3px] items-center justify-center w-auto sm:w-full">
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
                            Basic Vouchers
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
                            Company expenses
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
            <div className="flex flex-col items-start justify-start mt-1 w-[93%] md:w-full">
              <Text
                className="ml-0.5 md:ml-[0] text-black-900 text-lg"
                size="txtIBMPlexSansMedium18Black900"
              >
                Your information
              </Text>
              <div className="bg-white-A700 border border-gray-500_31 border-solid gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start mt-5 p-3.5 rounded w-full">
                <div className="md:h-[45px] h-[57px] relative w-full">
                  <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto rounded w-full">
                    <div className="flex flex-col gap-2.5 justify-start mb-2.5 w-[93%] md:w-full">
                      <Line className="bg-white-A700 h-px md:ml-[0] ml-[9px] mr-64 w-[16%]" />
                      <div className="flex flex-row items-end justify-between w-full">
                        <Text
                          className="mt-[5px] text-blue_gray-100_05 text-sm"
                          size="txtIBMPlexSansRegular14Bluegray10005"
                        >
                          mm/dd/yy
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_calendar_blue_gray_700_06.svg"
                          alt="calendar"
                        />
                      </div>
                    </div>
                  </div>
                  <Text
                    className="absolute left-[9%] text-gray-600_21 text-sm top-[0]"
                    size="txtIBMPlexSansMedium14Gray60021"
                  >
                    {" "}
                    Date{" "}
                  </Text>
                </div>
                <div className="h-[57px] relative w-full">
                  <Text
                    className="mb-[-9.41px] ml-[26px] text-gray-600_21 text-sm z-[1]"
                    size="txtIBMPlexSansMedium14Gray60021"
                  >
                    Remarks
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-100_06 border-solid flex flex-col items-start justify-start mt-auto mx-auto rounded w-full">
                    <Line className="bg-white-A700 h-px mb-[45px] md:ml-[0] ml-[21px] w-[19%]" />
                  </div>
                </div>
                <div className="md:h-[45px] h-[57px] relative w-full">
                  <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col gap-3 inset-x-[0] justify-start mx-auto rounded w-full">
                    <Line className="bg-white-A700 h-px md:ml-[0] ml-[21px] mr-[244px] w-[22%]" />
                    <SelectBox
                      className="leading-[normal] mb-2.5 mx-auto text-blue_gray-100_05 text-left text-sm w-[93%] sm:w-full"
                      placeholderClassName="text-blue_gray-100_05"
                      indicator={
                        <Img
                          className="h-5 mr-[0] w-5"
                          src="images/img_arrowdown_gray_400_07.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group699"
                      options={selectCompanyOptionsList}
                      isSearchable={false}
                      placeholder="Select Company"
                    />
                  </div>
                  <Text
                    className="absolute left-[8%] text-gray-600_21 text-sm top-[0]"
                    size="txtIBMPlexSansMedium14Gray60021"
                  >
                    Company
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-400_03 h-px mt-4 w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[13px] w-full">
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-row gap-[25px] items-center justify-start px-3 py-[9px] shadow-bs w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_refreshbutton2267901.svg"
                    alt="refreshbuttontw"
                  />
                  <Text
                    className="text-base text-blue-800 w-auto"
                    size="txtIBMPlexSansMedium16Blue800"
                  >
                    Refresh
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[9px] grid grid-cols-2 md:ml-[0] ml-[9px] w-[21%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 border border-blue-800 border-solid flex flex-row gap-[25px] items-center justify-start px-3 py-[9px] shadow-bs w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_computer.svg"
                      alt="computer"
                    />
                    <Text
                      className="text-base text-blue-800 w-auto"
                      size="txtIBMPlexSansMedium16Blue800"
                    >
                      View
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-blue-800 border-solid flex flex-row gap-[25px] items-center justify-start px-3 py-[9px] shadow-bs w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_file.svg"
                      alt="file"
                    />
                    <Text
                      className="text-base text-blue-800 w-auto"
                      size="txtIBMPlexSansMedium16Blue800"
                    >
                      Save
                    </Text>
                  </div>
                </List>
                <Button
                  className="border border-blue-800 border-solid cursor-pointer font-medium leading-[normal] mb-[3px] min-w-[201px] md:ml-[0] ml-[539px] text-base text-center"
                  shape="square"
                >
                  Apply Cost Center To All
                </Button>
              </div>
              <div className="flex h-[428px] sm:h-[442px] md:h-[722px] justify-end mt-[15px] relative w-full">
                <Line className="bg-gray-400_03 h-px mb-[147px] mt-auto mx-auto w-full" />
                <div className="absolute bg-white-A700 border border-gray-300_08 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto py-3.5 rounded-lg w-full">
                  <div className="flex flex-col items-center justify-start mb-[46px] w-full">
                    <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between w-[99%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-start justify-between w-[11%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Account Co..
                        </Text>
                        <Img
                          className="h-3 mt-[5px] w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-center w-[11%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Account Na..
                        </Text>
                        <Img
                          className="h-3 mt-[3px] w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826on"
                        />
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-3.5 grid grid-cols-2 w-[14%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-row gap-2.5 items-start justify-between sm:ml-[0] w-full">
                          <Text
                            className="text-base text-blue_gray-300_17"
                            size="txtIBMPlexSansMedium16Bluegray30017"
                          >
                            Rem..
                          </Text>
                          <Img
                            className="h-3 mt-[3px] w-3"
                            src="images/img_svgexport1826.svg"
                            alt="svgexport1826"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-between sm:ml-[0] w-full">
                          <Text
                            className="text-base text-blue_gray-300_17"
                            size="txtIBMPlexSansMedium16Bluegray30017"
                          >
                            Amo..
                          </Text>
                          <Img
                            className="h-3 mt-[3px] w-3"
                            src="images/img_svgexport1826.svg"
                            alt="svgexport1826"
                          />
                        </div>
                      </List>
                      <div className="flex flex-row gap-2.5 items-start justify-center pr-0.5 pt-0.5 w-[8%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Quant..
                        </Text>
                        <Img
                          className="h-3 mr-1.5 mt-0.5 w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826tw"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-center w-[8%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Sub Tot..
                        </Text>
                        <Img
                          className="h-3 mt-[5px] w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826th"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-center pt-0.5 w-[8%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          VAT_Ty..
                        </Text>
                        <Img
                          className="h-3 mt-0.5 w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826fo"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-center w-[7%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Taxab..
                        </Text>
                        <Img
                          className="h-3 mt-[5px] w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826fi"
                        />
                      </div>
                      <div className="flex flex-row gap-3.5 items-center justify-center w-[19%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-between w-[41%]">
                          <Text
                            className="text-base text-blue_gray-300_17"
                            size="txtIBMPlexSansMedium16Bluegray30017"
                          >
                            Total V..
                          </Text>
                          <Img
                            className="h-3 mt-[5px] w-3"
                            src="images/img_svgexport1826.svg"
                            alt="svgexport1826si"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-between w-[53%]">
                          <Text
                            className="text-base text-blue_gray-300_17"
                            size="txtIBMPlexSansMedium16Bluegray30017"
                          >
                            Grand_Tot..
                          </Text>
                          <Img
                            className="h-3 mt-[3px] w-3"
                            src="images/img_svgexport1826.svg"
                            alt="svgexport1826se"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-between pt-0.5 w-[7%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Comp..
                        </Text>
                        <Img
                          className="h-3 mt-0.5 w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826ei"
                        />
                      </div>
                    </div>
                    <Line className="bg-gray-300_08 h-px mt-3 w-full" />
                    <div className="flex flex-col gap-[59px] items-center justify-start mt-[78px] w-[99%] md:w-full">
                      <Line className="bg-gray-300_08 h-px w-full" />
                      <Line className="bg-gray-300_08 h-px w-full" />
                      <Line className="bg-gray-300_08 h-px w-full" />
                      <Line className="bg-gray-300_08 h-px w-full" />
                      <Line className="bg-gray-300_08 h-px w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row font-roboto gap-3 items-start justify-start md:ml-[0] ml-[379px] mt-[25px] w-auto">
                <Button
                  className="flex h-9 items-center justify-center w-9"
                  shape="circle"
                  color="gray_100_03"
                >
                  <Img
                    className="h-5"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </Button>
                <div className="flex flex-row items-start justify-start w-auto">
                  <Text
                    className="bg-deep_orange-500 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-white-A700 w-9"
                    size="txtRobotoRomanMedium16"
                  >
                    1
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700_04 w-9"
                    size="txtRobotoRomanRegular16"
                  >
                    2
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700_04 w-9"
                    size="txtRobotoRomanRegular16"
                  >
                    3
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700_04 w-9"
                    size="txtRobotoRomanRegular16"
                  >
                    4
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700_04 w-9"
                    size="txtRobotoRomanRegular16"
                  >
                    5
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700_04 w-9"
                    size="txtRobotoRomanRegular16"
                  >
                    ...
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700_04 w-9"
                    size="txtRobotoRomanRegular16"
                  >
                    21
                  </Text>
                </div>
                <Button
                  className="border border-gray-300_09 border-solid flex h-9 items-center justify-center rotate-[180deg] w-9"
                  shape="circle"
                >
                  <Img
                    className="h-5"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicVouchersCompanyexpensesPage;
