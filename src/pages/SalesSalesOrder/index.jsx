import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  ReactTable,
  SelectBox,
  Switch,
  Text,
} from "components";
import Sidebar3 from "components/Sidebar3";

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
const selectCurrencyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SalesSalesOrderPage = () => {
  const table9Data = React.useRef([
    {
      rowcode: "code",
      rowproductname: "name product",
      rowdescription: "description",
      rowunit: "packets",
      rowvat: "vat 5%",
      rowquantity: "Quantity",
      rowunitprice: "unit price",
      rowgross: "Gross",
      rowdiscount: "discount",
      rowtaxable: "taxable",
      rowroundvat: "round vat",
    },
    {
      rowcode: "code",
      rowproductname: "name product",
      rowdescription: "description",
      rowunit: "numbers",
      rowvat: "vat 5%",
      rowquantity: "Quantity",
      rowunitprice: "unit price",
      rowgross: "Gross",
      rowdiscount: "discount",
      rowtaxable: "taxable",
      rowroundvat: "round vat",
    },
    {
      rowcode: "code",
      rowproductname: "name product",
      rowdescription: "description",
      rowunit: "kg",
      rowvat: "vat 5%",
      rowquantity: "Quantity",
      rowunitprice: "unit price",
      rowgross: "Gross",
      rowdiscount: "discount",
      rowtaxable: "taxable",
      rowroundvat: "round vat",
    },
    {
      rowcode: "code",
      rowproductname: "name product",
      rowdescription: "description",
      rowunit: "meters",
      rowvat: "vat 5%",
      rowquantity: "Quantity",
      rowunitprice: "unit price",
      rowgross: "Gross",
      rowdiscount: "discount",
      rowtaxable: "taxable",
      rowroundvat: "round vat",
    },
    {
      rowcode: "code",
      rowproductname: "name product",
      rowdescription: "description",
      rowunit: "numbers",
      rowvat: "vat 5%",
      rowquantity: "Quantity",
      rowunitprice: "unit price",
      rowgross: "Gross",
      rowdiscount: "discount",
      rowtaxable: "taxable",
      rowroundvat: "round vat",
    },
    {
      rowcode: "code",
      rowproductname: "name product",
      rowdescription: "description",
      rowunit: "numbers",
      rowvat: "vat 5%",
      rowquantity: "Quantity",
      rowunitprice: "unit price",
      rowgross: "Gross",
      rowdiscount: "discount",
      rowtaxable: "taxable",
      rowroundvat: "round vat",
    },
  ]);
  const table9Columns = React.useMemo(() => {
    const table9ColumnHelper = createColumnHelper();
    return [
      table9ColumnHelper.accessor("rowcode", {
        cell: (info) => (
          <Text
            className="pb-[-4px] pt-[35px] text-blue_gray-900_01 text-sm"
            size="txtIBMPlexSansMedium14Bluegray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-start justify-start min-w-[83px] pr-1.5 py-1.5">
            <Text
              className="mt-[3px] text-base text-blue_gray-300_17"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Code
            </Text>
            <Img
              className="h-3 mt-2 w-3"
              src="images/img_svgexport1826.svg"
              alt="svgexport1826"
            />
          </div>
        ),
      }),
      table9ColumnHelper.accessor("rowproductname", {
        cell: (info) => (
          <Text
            className="pb-[-5px] pt-[35px] text-blue_gray-900_01 text-sm"
            size="txtIBMPlexSansMedium14Bluegray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start min-w-[105px] sm:pr-5 pr-[23px]">
            <Text
              className="leading-[18.00px] text-base text-blue_gray-300_17 w-3/4 sm:w-full"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Product Name
            </Text>
            <Img
              className="h-2.5 w-[11px]"
              src="images/img_settings.svg"
              alt="settings"
            />
          </div>
        ),
      }),
      table9ColumnHelper.accessor("rowdescription", {
        cell: (info) => (
          <Text
            className="pb-[-5px] pt-[35px] text-blue_gray-900_01 text-sm"
            size="txtIBMPlexSansMedium14Bluegray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-start justify-start min-w-[129px] pr-1.5 py-1.5">
            <Text
              className="mt-[5px] text-base text-blue_gray-300_17 w-auto"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Description
            </Text>
            <Img
              className="h-3 mt-2 w-3"
              src="images/img_svgexport1826.svg"
              alt="svgexport1826_One"
            />
          </div>
        ),
      }),
      table9ColumnHelper.accessor("rowunit", {
        cell: (info) => (
          <Text
            className="pb-[-5px] pt-[35px] text-black-900 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-start justify-start min-w-[88px] pr-1.5 py-1.5">
            <Text
              className="mt-[3px] text-base text-blue_gray-300_17 w-auto"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Unit
            </Text>
            <Img
              className="h-3 mt-2 w-3"
              src="images/img_svgexport1826.svg"
              alt="svgexport1826_Two"
            />
          </div>
        ),
      }),
      table9ColumnHelper.accessor("rowvat", {
        cell: (info) => (
          <Text
            className="pb-[-4px] pl-[3px] pt-[35px] text-black-900 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-start justify-start min-w-[62px] pr-1.5 py-1.5">
            <Text
              className="mt-[3px] text-base text-blue_gray-300_17 w-auto"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              VAT
            </Text>
            <Img
              className="h-3 mt-2 w-3"
              src="images/img_svgexport1826.svg"
              alt="svgexport1826_Three"
            />
          </div>
        ),
      }),
      table9ColumnHelper.accessor("rowquantity", {
        cell: (info) => (
          <Text
            className="pb-[-5px] pt-[35px] text-black-900 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-start justify-start min-w-[108px] pr-1.5 py-1.5">
            <Text
              className="mt-[5px] text-base text-blue_gray-300_17"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Quantity
            </Text>
            <Img
              className="h-3 mt-2 w-3"
              src="images/img_svgexport1826.svg"
              alt="svgexport1826_Four"
            />
          </div>
        ),
      }),
      table9ColumnHelper.accessor("rowunitprice", {
        cell: (info) => (
          <Text
            className="pb-[-5px] pt-[35px] text-black-900 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-start justify-start min-w-[117px] pr-1.5 py-1.5">
            <Text
              className="mt-[3px] text-base text-blue_gray-300_17"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Unit Price
            </Text>
            <Img
              className="h-3 mt-2 w-3"
              src="images/img_svgexport1826.svg"
              alt="svgexport1826_Five"
            />
          </div>
        ),
      }),
      table9ColumnHelper.accessor("rowgross", {
        cell: (info) => (
          <Text
            className="pb-[-4px] pt-[35px] text-black-900 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-end justify-start min-w-[87px] pr-1.5 py-1.5">
            <Text
              className="mt-[3px] text-base text-blue_gray-300_17"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Gross
            </Text>
            <Img
              className="h-2.5 mb-[5px] mt-[9px] w-[11px]"
              src="images/img_settings.svg"
              alt="settings_One"
            />
          </div>
        ),
      }),
      table9ColumnHelper.accessor("rowdiscount", {
        cell: (info) => (
          <Text
            className="pb-[-4px] pt-[35px] text-black-900 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-end justify-start min-w-[109px] pr-1.5 py-1.5">
            <Text
              className="mt-[3px] text-base text-blue_gray-300_17"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Discount
            </Text>
            <Img
              className="h-2.5 mb-[5px] mt-[9px] w-[11px]"
              src="images/img_settings.svg"
              alt="settings_Two"
            />
          </div>
        ),
      }),
      table9ColumnHelper.accessor("rowtaxable", {
        cell: (info) => (
          <Text
            className="pb-[-4px] pt-[35px] text-black-900 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-end justify-start min-w-[102px] pr-1.5 py-1.5">
            <Text
              className="mt-[3px] text-base text-blue_gray-300_17"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Taxable
            </Text>
            <Img
              className="h-2.5 mb-[5px] mt-[9px] w-[11px]"
              src="images/img_settings.svg"
              alt="settings_Three"
            />
          </div>
        ),
      }),
      table9ColumnHelper.accessor("rowroundvat", {
        cell: (info) => (
          <Text
            className="pb-[-4px] pt-[35px] text-black-900 text-sm"
            size="txtIBMPlexSansMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-end justify-start min-w-[97px] py-1.5">
            <Text
              className="mt-[3px] text-base text-blue_gray-300_17"
              size="txtIBMPlexSansMedium16Bluegray30017"
            >
              Round Vat
            </Text>
            <Img
              className="h-2.5 mb-[5px] mt-[9px] w-[11px]"
              src="images/img_settings.svg"
              alt="settings_Four"
            />
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
        <Img className="h-7 w-7" src="images/img_group_40.svg" alt="group" />
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
          <Sidebar3 className="!sticky !w-[250px] bg-blue-800 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="flex sm:h-[146px] h-[158px] md:h-[611px] justify-end relative w-full">
              <Line className="bg-gray-400_03 h-px mb-[11px] mt-auto mx-auto w-[93%]" />
              <div className="absolute sm:h-[146px] h-[158px] md:h-[611px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[125px] mx-auto object-cover w-full"
                  src="images/img_rectangle16_10.png"
                  alt="rectangleSixteen"
                />
                <div className="absolute sm:h-[146px] h-[158px] md:h-[611px] inset-[0] justify-center m-auto w-full">
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
                            className="text-base text-gray-500_33 text-right w-auto"
                            size="txtIBMPlexSansRegular16Gray50033"
                          >
                            Sales
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
                            Sales Order
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
                <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
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
                        name="group432"
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
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-4 w-full">
                    <div className="h-[57px] relative w-[32%] md:w-full">
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
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="md:h-[45px] h-[57px] sm:ml-[0] relative w-full">
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
                            name="group871"
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
                      <div className="md:h-[45px] h-[57px] sm:ml-[0] relative w-full">
                        <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col gap-3 inset-x-[0] justify-start mx-auto rounded w-full">
                          <Line className="bg-white-A700 h-px md:ml-[0] ml-[21px] mr-[247px] w-[21%]" />
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
                            name="group873"
                            options={selectCurrencyOptionsList}
                            isSearchable={false}
                            placeholder="Select Currency"
                          />
                        </div>
                        <Text
                          className="absolute left-[8%] text-gray-600_21 text-sm top-[0]"
                          size="txtIBMPlexSansMedium14Gray60021"
                        >
                          Currency
                        </Text>
                      </div>
                    </List>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[78px] items-center justify-start mt-6 w-[61%] md:w-full">
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
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-start mt-6 w-[66%] md:w-full">
                    <div className="md:h-[46px] h-[57px] relative w-[49%] md:w-full">
                      <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto rounded w-full">
                        <Line className="bg-white-A700 h-px mb-[45px] md:ml-[0] ml-[21px] w-[48%]" />
                      </div>
                      <Text
                        className="absolute left-[8%] text-gray-600_21 text-sm top-[0]"
                        size="txtIBMPlexSansMedium14Gray60021"
                      >
                        Intro Letter Description
                      </Text>
                    </div>
                    <div className="md:h-[46px] h-[57px] relative w-[49%] md:w-full">
                      <div className="absolute bg-white-A700 border border-blue_gray-100_06 border-solid bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto rounded w-full">
                        <Line className="bg-white-A700 h-px mb-[45px] md:ml-[0] ml-[21px] w-[46%]" />
                      </div>
                      <Text
                        className="absolute left-[8%] text-gray-600_21 text-sm top-[0]"
                        size="txtIBMPlexSansMedium14Gray60021"
                      >
                        End Letter Description
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-400_03 h-px mt-7 w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-4 w-full">
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-row gap-[25px] items-center justify-start px-3 py-[9px] shadow-bs w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_refreshbutton2267901.svg"
                    alt="refreshbuttonTwentyTwo"
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
                  <div className="flex flex-col items-center justify-start mb-[15px] px-2 w-full">
                    <div className="overflow-auto w-full">
                      <ReactTable
                        columns={table9Columns}
                        data={table9Data.current}
                        rowClass={"border-b border-gray-300_08"}
                        headerClass="border-b border-gray-300_08"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-300_08 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-end md:px-10 sm:px-5 px-[97px] w-full">
                  <Text
                    className="md:mt-0 mt-[5px] text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    Total
                  </Text>
                  <Line className="bg-gray-300_08 h-[29px] md:h-px md:ml-[0] ml-[206px] md:w-full w-px" />
                  <Text
                    className="md:ml-[0] ml-[5px] md:mt-0 mt-[5px] text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    0
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[99px] md:mt-0 mt-[5px] text-black-900 text-sm"
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
                    className="md:ml-[0] ml-[78px] md:mt-0 mt-[5px] text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    0
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[100px] md:mt-0 mt-[5px] text-black-900 text-sm"
                    size="txtIBMPlexSansMedium14"
                  >
                    0
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[93px] md:mt-0 mt-[5px] text-black-900 text-sm"
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
                    alt="computer_Five"
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

export default SalesSalesOrderPage;
