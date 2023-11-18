import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Switch,
  Text,
} from "components";
import Sidebar5 from "components/Sidebar5";

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
const selectSalesEmployeeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectCurrencyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SalesDistinguishedagentfortechnicalservicesPage = () => {
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
        <Img className="h-7 w-7" src="images/img_group_45.svg" alt="group" />
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
          <Sidebar5 className="!sticky !w-[250px] bg-blue-800 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="flex sm:h-[125px] h-[158px] md:h-[674px] justify-end relative w-full">
              <Line className="bg-gray-400_03 h-px mb-[11px] mt-auto mx-auto w-[93%]" />
              <div className="absolute sm:h-[125px] h-[158px] md:h-[674px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[125px] mx-auto object-cover w-full"
                  src="images/img_rectangle16_15.png"
                  alt="rectanglesixtee"
                />
                <div className="absolute sm:h-[125px] h-[158px] md:h-[674px] inset-[0] justify-center m-auto w-full">
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
                            Sales
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
                            Distinguished ِِAgent For Technical Services
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
              <div className="bg-white-A700 border border-gray-500_31 border-solid flex flex-col items-center justify-start mt-5 p-3.5 rounded w-full">
                <div className="flex flex-col gap-4 items-start justify-start mb-3 w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="md:h-[45px] h-[57px] relative w-[32%] md:w-full">
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
                    <div className="md:h-12 h-[57px] relative w-[45%] md:w-full">
                      <Input
                        name="group160"
                        placeholder="Search by name"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-100_05 text-left text-sm w-full"
                        wrapClassName="absolute border border-blue_gray-100_06 border-solid bottom-[0] inset-x-[0] mx-auto w-full"
                        type="text"
                        shape="round"
                      ></Input>
                      <Text
                        className="absolute left-[6%] text-gray-600_21 text-sm top-[0]"
                        size="txtIBMPlexSansMedium14Gray60021"
                      >
                        Customer
                      </Text>
                    </div>
                    <Input
                      name="language_One"
                      placeholder="Voucher Mapping "
                      className="!placeholder:text-blue-800 !text-blue-800 font-medium leading-[normal] md:h-auto p-0 sm:h-auto text-base text-left w-full"
                      wrapClassName="border border-blue-800 border-solid flex md:flex-1 md:mt-0 mt-[9px] shadow-bs md:w-full"
                      prefix={
                        <Img
                          className="h-[33px] mr-[25px] my-auto"
                          src="images/img_chain5174497_1.svg"
                          alt="chain_5174497 1"
                        />
                      }
                      shape="square"
                      size="xs"
                    ></Input>
                  </div>
                  <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="h-[57px] relative w-full">
                      <Text
                        className="mb-[-9.37px] ml-[27px] text-gray-600_21 text-sm z-[1]"
                        size="txtIBMPlexSansMedium14Gray60021"
                      >
                        Mobile No
                      </Text>
                      <div className="bg-white-A700 border border-blue_gray-100_06 border-solid flex flex-col gap-[15px] justify-start mt-auto mx-auto rounded w-full">
                        <Line className="bg-white-A700 h-px md:ml-[0] ml-[21px] mr-[241px] w-[22%]" />
                        <Text
                          className="mb-2.5 ml-3 md:ml-[0] mr-[196px] text-blue_gray-100_05 text-sm"
                          size="txtIBMPlexSansRegular14Bluegray10005"
                        >
                          Search by mobile no
                        </Text>
                      </div>
                    </div>
                    <div className="h-[57px] relative w-full">
                      <Text
                        className="mb-[-9.37px] ml-[27px] text-gray-600_21 text-sm z-[1]"
                        size="txtIBMPlexSansMedium14Gray60021"
                      >
                        Credit Account
                      </Text>
                      <div className="bg-white-A700 border border-blue_gray-100_06 border-solid flex flex-col gap-3.5 justify-start mt-auto mx-auto rounded w-full">
                        <Line className="bg-white-A700 h-px md:ml-[0] ml-[21px] mr-[211px] w-[31%]" />
                        <Text
                          className="mb-[11px] ml-3 md:ml-[0] text-blue_gray-100_05 text-sm"
                          size="txtIBMPlexSansRegular14Bluegray10005"
                        >
                          Sales account
                        </Text>
                      </div>
                    </div>
                    <div className="h-[57px] relative w-full">
                      <Text
                        className="mb-[-9.41px] ml-7 text-gray-600_21 text-sm z-[1]"
                        size="txtIBMPlexSansMedium14Gray60021"
                      >
                        Order No
                      </Text>
                      <div className="bg-white-A700 border border-blue_gray-100_06 border-solid flex flex-col gap-[15px] items-center justify-start mt-auto mx-auto rounded w-full">
                        <Line className="bg-white-A700 h-px w-[21%]" />
                        <Text
                          className="mb-2.5 text-blue_gray-100_05 text-sm"
                          size="txtIBMPlexSansRegular14Bluegray10005"
                        >
                          Input order no
                        </Text>
                      </div>
                    </div>
                    <div className="h-[57px] relative w-full">
                      <Text
                        className="mb-[-9.41px] ml-[29px] text-gray-600_21 text-sm z-[1]"
                        size="txtIBMPlexSansMedium14Gray60021"
                      >
                        Remarks
                      </Text>
                      <div className="bg-white-A700 border border-blue_gray-100_06 border-solid flex flex-col items-start justify-start mt-auto mx-auto rounded w-full">
                        <Line className="bg-white-A700 h-px mb-[45px] md:ml-[0] ml-[21px] w-[21%]" />
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
                          name="group623"
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
                    <div className="md:h-[45px] h-[57px] relative w-full">
                      <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col gap-[15px] inset-x-[0] items-center justify-start mx-auto rounded w-full">
                        <Line className="bg-white-A700 h-px w-[33%]" />
                        <Text
                          className="mb-2.5 text-blue_gray-100_05 text-sm"
                          size="txtIBMPlexSansRegular14Bluegray10005"
                        >
                          Input place of supply
                        </Text>
                      </div>
                      <Text
                        className="absolute left-[8%] text-gray-600_21 text-sm top-[0]"
                        size="txtIBMPlexSansMedium14Gray60021"
                      >
                        Place of Supply
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[66%]"
                    orientation="horizontal"
                  >
                    <div className="md:h-[45px] h-[57px] relative w-full">
                      <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col gap-3 inset-x-[0] justify-start mx-auto rounded w-full">
                        <Line className="bg-white-A700 h-px md:ml-[0] ml-[21px] mr-[203px] w-[34%]" />
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
                          name="group625"
                          options={selectSalesEmployeeOptionsList}
                          isSearchable={false}
                          placeholder="Select sales employee"
                        />
                      </div>
                      <Text
                        className="absolute left-[8%] text-gray-600_21 text-sm top-[0]"
                        size="txtIBMPlexSansMedium14Gray60021"
                      >
                        Sales Employee
                      </Text>
                    </div>
                    <div className="md:h-[45px] h-[57px] relative w-full">
                      <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col gap-3 inset-x-[0] justify-start mx-auto rounded w-full">
                        <Line className="bg-white-A700 h-px md:ml-[0] ml-[21px] mr-[241px] w-[22%]" />
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
                          name="group627"
                          options={selectCurrencyOptionsList}
                          isSearchable={false}
                          placeholder="Select currency"
                        />
                      </div>
                      <Text
                        className="absolute left-[9%] text-gray-600_21 text-sm top-[0]"
                        size="txtIBMPlexSansMedium14Gray60021"
                      >
                        Currency
                      </Text>
                    </div>
                  </List>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-center justify-start ml-1 md:ml-[0] w-3/5 md:w-full">
                    <div className="flex flex-row gap-3 items-end justify-start w-auto">
                      <Switch
                        onColor="#d1d1d6"
                        offColor="#d1d1d6"
                        onHandleColor="#ffffff"
                        offHandleColor="#ffffff"
                        value={false}
                        className="w-[15%]"
                      />
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtIBMPlexSansRegular16Black900"
                      >
                        Enable to send mail to customer
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-end justify-start w-auto">
                      <Switch
                        onColor="#d1d1d6"
                        offColor="#d1d1d6"
                        onHandleColor="#ffffff"
                        offHandleColor="#ffffff"
                        value={false}
                        className="w-[15%]"
                      />
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtIBMPlexSansRegular16Black900"
                      >
                        Enable to sent sms to customer
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[66%]"
                    orientation="horizontal"
                  >
                    <div className="md:h-[45px] h-[57px] relative w-full">
                      <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto rounded w-full">
                        <div className="flex flex-col gap-2.5 justify-start mb-2.5 w-[93%] md:w-full">
                          <Line className="bg-white-A700 h-px md:ml-[0] ml-[9px] mr-[205px] w-[32%]" />
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
                        Delivery Date
                      </Text>
                    </div>
                    <div className="md:h-[45px] h-[57px] relative w-full">
                      <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto rounded w-full">
                        <div className="flex flex-col gap-2.5 justify-start mb-2.5 w-[93%] md:w-full">
                          <Line className="bg-white-A700 h-px md:ml-[0] ml-[9px] mr-[213px] w-[30%]" />
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
                        Return Date
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <Line className="bg-gray-400_03 h-px mt-[21px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[11px] w-full">
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
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-row gap-[25px] items-center justify-start md:ml-[0] ml-[21px] px-3 py-[9px] shadow-bs w-auto">
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
                <Button
                  className="border border-blue-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[201px] md:ml-[0] ml-[645px] text-base text-center"
                  shape="square"
                >
                  Apply Cost Center To All
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <div className="bg-white-A700 border border-gray-300_08 border-solid flex flex-col items-center justify-start py-[5px] rounded-tl-lg rounded-tr-lg w-full">
                  <div className="flex flex-col items-center justify-start mb-[25px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                      <div className="flex flex-row gap-[23px] items-center justify-between w-[16%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-between w-[37%]">
                          <Text
                            className="text-base text-blue_gray-300_17"
                            size="txtIBMPlexSansMedium16Bluegray30017"
                          >
                            Code
                          </Text>
                          <Img
                            className="h-3 mt-[5px] w-3"
                            src="images/img_svgexport1826.svg"
                            alt="svgexport1826"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-1/2">
                          <div className="flex flex-col items-center justify-center w-auto">
                            <Text
                              className="leading-[18.00px] max-w-[61px] md:max-w-full text-base text-blue_gray-300_17"
                              size="txtIBMPlexSansMedium16Bluegray30017"
                            >
                              Product Name
                            </Text>
                          </div>
                          <Img
                            className="h-2.5 w-[11px]"
                            src="images/img_settings.svg"
                            alt="settings"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-center w-[10%] md:w-full">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-base text-blue_gray-300_17 w-auto"
                            size="txtIBMPlexSansMedium16Bluegray30017"
                          >
                            Description
                          </Text>
                        </div>
                        <Img
                          className="h-3 mt-[5px] w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826on"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-center w-[5%] md:w-full">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-base text-blue_gray-300_17 w-auto"
                            size="txtIBMPlexSansMedium16Bluegray30017"
                          >
                            Unit
                          </Text>
                        </div>
                        <Img
                          className="h-3 mt-[5px] w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826tw"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-center w-[5%] md:w-full">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-base text-blue_gray-300_17 w-auto"
                            size="txtIBMPlexSansMedium16Bluegray30017"
                          >
                            VAT
                          </Text>
                        </div>
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
                          Quantity
                        </Text>
                        <Img
                          className="h-3 mt-0.5 w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826fo"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-center w-[9%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Unit Price
                        </Text>
                        <Img
                          className="h-3 mt-[5px] w-3"
                          src="images/img_svgexport1826.svg"
                          alt="svgexport1826fi"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-end justify-center w-[6%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Gross
                        </Text>
                        <Img
                          className="h-2.5 my-[5px] w-[11px]"
                          src="images/img_settings.svg"
                          alt="settingsone"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-end justify-center w-[8%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Discount
                        </Text>
                        <Img
                          className="h-2.5 my-[5px] w-[11px]"
                          src="images/img_settings.svg"
                          alt="settingstwo"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-end justify-center w-[8%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Taxable
                        </Text>
                        <Img
                          className="h-2.5 my-[5px] w-[11px]"
                          src="images/img_settings.svg"
                          alt="settingsthree"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-end justify-between w-[9%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-300_17"
                          size="txtIBMPlexSansMedium16Bluegray30017"
                        >
                          Round Vat
                        </Text>
                        <Img
                          className="h-2.5 my-[5px] w-[11px]"
                          src="images/img_settings.svg"
                          alt="settingsfour"
                        />
                      </div>
                    </div>
                    <Line className="bg-gray-300_08 h-px mt-1.5 w-full" />
                    <List
                      className="flex flex-col gap-[19.5px] items-center mt-[38px] pr-[17px] w-[97%]"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900_01 text-sm"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          code
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-blue_gray-900_01 text-sm"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          name product
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[15px] text-blue_gray-900_01 text-sm"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          description
                        </Text>
                        <Text
                          className="ml-14 sm:ml-[0] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          packets
                        </Text>
                        <Text
                          className="ml-10 sm:ml-[0] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          vat 5%
                        </Text>
                        <Text
                          className="ml-3.5 sm:ml-[0] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          Quantity
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[52px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          unit price
                        </Text>
                        <Text
                          className="ml-14 sm:ml-[0] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          Gross
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[50px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          discount
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[53px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          taxable
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[54px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          round vat
                        </Text>
                      </div>
                      <Line className="self-center h-px bg-gray-300_08 w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900_01 text-sm"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          code
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-blue_gray-900_01 text-sm"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          name product
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[15px] text-blue_gray-900_01 text-sm"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          description
                        </Text>
                        <Text
                          className="ml-14 sm:ml-[0] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          numbers
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[34px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          vat 5%
                        </Text>
                        <Text
                          className="ml-3.5 sm:ml-[0] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          Quantity
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[52px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          unit price
                        </Text>
                        <Text
                          className="ml-14 sm:ml-[0] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          Gross
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[50px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          discount
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[53px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          taxable
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[54px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          round vat
                        </Text>
                      </div>
                      <Line className="self-center h-px bg-gray-300_08 w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900_01 text-sm"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          code
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-blue_gray-900_01 text-sm"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          name product
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[15px] text-blue_gray-900_01 text-sm"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          description
                        </Text>
                        <Text
                          className="ml-14 sm:ml-[0] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          numbers
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[34px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          vat 5%
                        </Text>
                        <Text
                          className="ml-3.5 sm:ml-[0] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          Quantity
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[52px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          unit price
                        </Text>
                        <Text
                          className="ml-14 sm:ml-[0] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          Gross
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[50px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          discount
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[53px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          taxable
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[54px] text-black-900 text-sm"
                          size="txtIBMPlexSansMedium14"
                        >
                          round vat
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-300_08 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    Total
                  </Text>
                  <Line className="bg-gray-300_08 h-[29px] md:h-px md:ml-[0] ml-[206px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[5px] text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    0
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[99px] text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    0
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[108px] text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    0
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[78px] text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    0
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[100px] text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    0
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[93px] mr-24 text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    0
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-roboto gap-[41px] items-center justify-center md:ml-[0] ml-[292px] mt-5 w-[48%] md:w-full">
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
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
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-row font-ibmplexsans gap-[25px] items-center justify-start px-3 py-[9px] shadow-bs w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_computer.svg"
                    alt="computerfive"
                  />
                  <a
                    href="javascript:"
                    className="text-base text-blue-800 w-auto"
                  >
                    <Text size="txtIBMPlexSansMedium16Blue800">View All</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesDistinguishedagentfortechnicalservicesPage;
