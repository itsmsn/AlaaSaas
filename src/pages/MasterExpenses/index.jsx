import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import Sidebar11 from "components/Sidebar11";

const moumenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MasterExpensesPage = () => {
  const tableData = React.useRef([
    {
      rowcode: "322024",
      rownameone: "Depreciation Expenses",
      rowlanguagetwo: "مصاريف الاهتلاكات",
      rowdiscription: "Depreciation",
      rowsvgexportseventone: "images/img_cut_9.svg",
    },
    {
      rowcode: "322023",
      rownameone: "Charity Expenses",
      rowlanguagetwo: "رسوم الكفيل",
      rowdiscription: "Depreciation",
      rowsvgexportseventone: "images/img_cut_10.svg",
    },
    {
      rowcode: "322022",
      rownameone: "Auditing Expenses",
      rowlanguagetwo: "صدقات وهبات",
      rowdiscription: "Depreciation",
      rowsvgexportseventone: "images/img_cut_11.svg",
    },
    {
      rowcode: "322021",
      rownameone: "Stationery Expenses",
      rowlanguagetwo: "تدقيق حسابات",
      rowdiscription: "Depreciation",
      rowsvgexportseventone: "images/img_cut_12.svg",
    },
    {
      rowcode: "322020",
      rownameone: "Hotels Expenses",
      rowlanguagetwo: "انطمة الحريق والسلامة",
      rowdiscription: "Depreciation",
      rowsvgexportseventone: "images/img_cut_13.svg",
    },
    {
      rowcode: "322019",
      rownameone: "Bank Commissions",
      rowlanguagetwo: "قرطاسية",
      rowdiscription: "Depreciation",
      rowsvgexportseventone: "images/img_cut_14.svg",
    },
    {
      rowcode: "322018",
      rownameone: "Medical Expenses",
      rowlanguagetwo: "لباس موحد",
      rowdiscription: "Depreciation",
      rowsvgexportseventone: "images/img_cut_15.svg",
    },
    {
      rowcode: "322017",
      rownameone: "Cleaning Expenses",
      rowlanguagetwo: "عمولات بنكية",
      rowdiscription: "Depreciation",
      rowsvgexportseventone: "images/img_cut_16.svg",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowcode", {
        cell: (info) => (
          <Text
            className="pb-[-2px] pt-[35px] text-blue_gray-900_01 text-sm"
            size="txtIBMPlexSansMedium14Bluegray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start min-w-[190px]">
            <Text
              className="text-base text-blue_gray-300_17 w-auto"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Code
            </Text>
            <Img
              className="h-3 w-3"
              src="images/img_svgexport1826.svg"
              alt="svgexport1826"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rownameone", {
        cell: (info) => (
          <Text
            className="pb-[-3px] pt-[35px] text-blue_gray-900_01 text-sm"
            size="txtIBMPlexSansMedium14Bluegray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start min-w-[196px]">
            <Text
              className="text-base text-blue_gray-300_17 w-auto"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Name
            </Text>
            <Img
              className="h-3 w-3"
              src="images/img_svgexport1826.svg"
              alt="svgexport1826on"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowlanguagetwo", {
        cell: (info) => (
          <Text
            className="pb-[-7px] pt-[35px] text-blue_gray-900_01 text-sm"
            size="txtCairoMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start min-w-[264px]">
            <Text
              className="text-base text-blue_gray-300_17 w-auto"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Name in Arabic
            </Text>
            <Img
              className="h-3 w-3"
              src="images/img_svgexport1826.svg"
              alt="svgexport1826tw"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowdiscription", {
        cell: (info) => (
          <Text
            className="pb-[-3px] pt-[35px] text-blue_gray-900_01 text-sm"
            size="txtIBMPlexSansMedium14Bluegray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start min-w-[232px]">
            <Text
              className="text-base text-blue_gray-300_17 w-auto"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Discription
            </Text>
            <Img
              className="h-3 w-3"
              src="images/img_svgexport1826.svg"
              alt="svgexport1826th"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowsvgexportseventone", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-[18px] pt-[18px]">
            <Img
              className="h-5 mt-8 w-[69px]"
              alt="cut"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[9px] items-start justify-center min-w-[87px]">
            <Img
              className="h-5 w-5"
              src="images/img_svgexport17_blue_gray_300_17_20x20.svg"
              alt="svgexportsevent_One"
            />
            <Text
              className="text-base text-blue_gray-300_17 w-auto"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Options
            </Text>
          </div>
        ),
      }),
    ];
  }, []);

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
        <Img className="h-7 w-7" src="images/img_group_9.svg" alt="group" />
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
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="flex sm:h-[148px] h-[158px] md:h-[611px] justify-end relative w-full">
              <Line className="bg-gray-400_03 h-px mb-[11px] mt-auto mx-auto w-[93%]" />
              <div className="absolute sm:h-[148px] h-[158px] md:h-[611px] inset-[0] justify-center m-auto w-full">
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
                          Expenses
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
            <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
              <Text
                className="ml-0.5 md:ml-[0] text-black-900 text-lg"
                size="txtIBMPlexSansMedium18Black900"
              >
                Your information
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[22px] w-full">
                <div className="md:h-12 h-[57px] relative w-[24%] md:w-full">
                  <Input
                    name="group275"
                    placeholder="Input name"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-100_05 text-left text-sm w-full"
                    wrapClassName="absolute border border-blue_gray-100_06 border-solid bottom-[0] inset-x-[0] mx-auto w-full"
                    type="text"
                    shape="round"
                  ></Input>
                  <Text
                    className="absolute left-[10%] text-gray-600_21 text-sm top-[0]"
                    size="txtIBMPlexSansMedium14Gray60021"
                  >
                    Name
                  </Text>
                </div>
                <div className="h-[57px] relative w-[24%] md:w-full">
                  <Text
                    className="mb-[-9.37px] ml-7 text-gray-600_21 text-sm z-[1]"
                    size="txtIBMPlexSansMedium14Gray60021"
                  >
                    Name in Arabic
                  </Text>
                  <Input
                    name="language"
                    placeholder="Input name in Arabic"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-100_05 text-left text-sm w-full"
                    wrapClassName="border border-blue_gray-100_06 border-solid mb-[undefinedpx] mt-auto mx-auto w-full z-[1]"
                    type="text"
                    shape="round"
                  ></Input>
                </div>
                <div className="md:h-[45px] h-[57px] relative w-[24%] md:w-full">
                  <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col gap-[15px] inset-x-[0] items-center justify-start mx-auto rounded w-full">
                    <Line className="bg-white-A700 h-px w-[34%]" />
                    <Text
                      className="mb-2.5 text-blue_gray-100_05 text-sm"
                      size="txtIBMPlexSansRegular14Bluegray10005"
                    >
                      Input description
                    </Text>
                  </div>
                  <Text
                    className="absolute left-[10%] text-gray-600_21 text-sm top-[0]"
                    size="txtIBMPlexSansMedium14Gray60021"
                  >
                    Description
                  </Text>
                </div>
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-row gap-[25px] items-center justify-start md:mt-0 my-[7px] px-3 py-[9px] shadow-bs w-auto">
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
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-row gap-[25px] items-center justify-start md:mt-0 my-[7px] px-3 py-[9px] shadow-bs w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_hyperlink7782918.svg"
                    alt="hyperlink778291"
                  />
                  <Text
                    className="text-base text-blue-800 w-auto"
                    size="txtIBMPlexSansMedium16Blue800"
                  >
                    Submit
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[51px] items-center justify-start ml-0.5 md:ml-[0] mt-7 w-[37%] md:w-full">
                <Input
                  name="frame1213"
                  placeholder="Export to excel"
                  className="!placeholder:text-blue-800 !text-blue-800 font-medium leading-[normal] p-0 text-base text-left w-full"
                  wrapClassName="border border-blue-800 border-solid flex shadow-bs w-[46%] sm:w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-[25px]"
                      src="images/img_exe6968895_1.svg"
                      alt="exe_6968895 1"
                    />
                  }
                  shape="square"
                  size="xs"
                ></Input>
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-row gap-[25px] items-center justify-start px-3 py-[9px] shadow-bs w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_pdfdocument7177827.svg"
                    alt="pdfdocument7177"
                  />
                  <Text
                    className="text-base text-blue-800 w-auto"
                    size="txtIBMPlexSansMedium16Blue800"
                  >
                    Export to Pdf
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300_08 border-solid flex flex-col items-center justify-start mt-[27px] py-3.5 rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-3.5 px-10 sm:px-5 w-full">
                  <div className="overflow-auto w-[95%]">
                    <ReactTable
                      columns={tableColumns}
                      data={tableData.current}
                      rowClass={"border-b border-gray-300_08"}
                      headerClass="border-b border-gray-300_08"
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-roboto gap-[41px] items-center justify-center md:ml-[0] ml-[273px] mt-5 w-[48%] md:w-full">
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

export default MasterExpensesPage;
