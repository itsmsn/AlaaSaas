import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Line, List, SelectBox, Text } from "components";

const moumenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const bulkUploadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const supportOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Page = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

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
          className="h-6 w-6"
          src="images/img_masters1.svg"
          alt="mastersone"
        />
      ),
      label: "Masters",
      href: "/master",
      active: window.location.pathname === "/master",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_cart.svg" alt="cart" />,
      label: "Punchase",
    },
    {
      icon: (
        <Img
          className="h-6 md:h-auto object-cover w-6"
          src="images/img_icons8increase48.png"
          alt="icons8increasef"
        />
      ),
      label: "Sales",
      href: "/sales",
      active: window.location.pathname === "/sales",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_basicvouchers1.svg"
          alt="basicvoucherson"
        />
      ),
      label: "Basic Vouchers",
      href: "/basicvouchers",
      active: window.location.pathname === "/basicvouchers",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_paymentvouchers.svg"
          alt="paymentvouchers"
        />
      ),
      label: "Payment Vouchers",
      href: "/paymentvouchers",
      active: window.location.pathname === "/paymentvouchers",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_receiptvouchers.svg"
          alt="receiptvouchers"
        />
      ),
      label: "Receipt Vouchers",
      href: "/receiptvouchers",
      active: window.location.pathname === "/receiptvouchers",
    },
    {
      icon: (
        <Img
          className="h-3.5"
          src="images/img_layerx00201.svg"
          alt="layerx00201"
        />
      ),
      label: "PDC Managemennt",
      href: "/pdcmanagemennt",
      active: window.location.pathname === "/pdcmanagemennt",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_stocks1.svg" alt="stocksone" />
      ),
      label: "Stocks",
      href: "/stocks",
      active: window.location.pathname === "/stocks",
    },
    {
      icon: (
        <Img
          className="h-6 mb-1 w-6"
          src="images/img_reports1.svg"
          alt="reportsone"
        />
      ),
      label: "Reports",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ibmplexsans items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[27px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[250px] bg-blue-800 flex h-screen md:hidden justify-start overflow-auto top-[0]"
          >
            <div className="bg-blue-800 flex flex-col h-[135px] md:h-auto items-start justify-start w-auto">
              <div className="flex flex-col items-center justify-start pl-[3px] py-[3px] w-[51%] md:w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <div className="md:h-[52px] h-[59px] relative w-full">
                    <div className="absolute md:h-[52px] h-[59px] inset-y-[0] my-auto right-[0] w-[88%]">
                      <div className="md:h-[52px] h-[59px] m-auto w-full">
                        <div className="absolute md:h-[52px] h-[53px] inset-x-[0] mx-auto top-[0] w-full">
                          <div className="absolute md:h-[52px] h-[53px] inset-[0] justify-center m-auto w-full">
                            <div className="md:h-[52px] h-[53px] m-auto w-full">
                              <div className="md:h-[52px] h-[53px] m-auto w-full">
                                <div className="md:h-[52px] h-[53px] m-auto w-full">
                                  <Img
                                    className="absolute h-[52px] inset-y-[0] left-[0] my-auto"
                                    src="images/img_volume_white_a700.svg"
                                    alt="volume"
                                  />
                                  <Img
                                    className="absolute h-[33px] right-[0] top-[0]"
                                    src="images/img_settings_white_a700.svg"
                                    alt="settings"
                                  />
                                </div>
                                <div className="absolute flex flex-row items-start justify-start left-[9%] top-[0] w-[62%]">
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-start pb-4 w-[49%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group444.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-[23px]"
                                      src="images/img_alarm.svg"
                                      alt="alarm"
                                    />
                                  </div>
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-col h-[21px] items-center justify-start w-[49%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group446.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-5"
                                      src="images/img_bookmark.svg"
                                      alt="bookmark"
                                    />
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="absolute h-5 right-[18%] top-[6%]"
                                src="images/img_settings_white_a700_20x27.svg"
                                alt="settingsone"
                              />
                            </div>
                            <Img
                              className="absolute h-[7px] right-[18%] top-[9%]"
                              src="images/img_vector_white_a700_7x5.svg"
                              alt="vector"
                            />
                            <Img
                              className="absolute bottom-[17%] h-[22px] right-[36%]"
                              src="images/img_offer.svg"
                              alt="offer"
                            />
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[13%] flex flex-col h-[23px] items-end justify-end left-[0] p-0.5 w-[59%]"
                            style={{
                              backgroundImage: "url('images/img_group445.svg')",
                            }}
                          >
                            <Img
                              className="h-[9px] mr-1.5 mt-2"
                              src="images/img_send.svg"
                              alt="send"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[25px] left-[10%]"
                          src="images/img_vector.svg"
                          alt="vectorone"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[22%] h-[9px] left-[0]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[19px] left-[0]"
                      src="images/img_vector_white_a700.svg"
                      alt="vectortwo"
                    />
                    <div className="absolute bottom-[0] flex flex-row gap-[9px] inset-x-[0] items-start justify-center mx-auto w-[47%]">
                      <Img
                        className="h-[9px] mt-0.5"
                        src="images/img_offer_white_a700.svg"
                        alt="offerone"
                      />
                      <Img
                        className="h-[19px]"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[54%] md:w-full">
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                      <Img
                        className="h-[13px]"
                        src="images/img_contrast_white_a700.svg"
                        alt="contrastone"
                      />
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_contrast.svg"
                        alt="contrasttwo"
                      />
                      <Img
                        className="h-[13px]"
                        src="images/img_vector_white_a700_13x11.svg"
                        alt="vectorthree"
                      />
                      <Img
                        className="h-[13px]"
                        src="images/img_sort.svg"
                        alt="sort"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-evenly mt-[3px] w-full">
                      <Img
                        className="h-[5px] w-1"
                        src="images/img_vector_white_a700_5x4.svg"
                        alt="vectorfour"
                      />
                      <Img
                        className="h-[5px]"
                        src="images/img_vector_white_a700_5x1.svg"
                        alt="vectorfive"
                      />
                      <Img
                        className="h-[5px] w-[5px]"
                        src="images/img_vector_white_a700_5x5.svg"
                        alt="vectorsix"
                      />
                      <Img
                        className="h-[5px]"
                        src="images/img_vector_5x1.svg"
                        alt="vectorseven"
                      />
                      <Img
                        className="h-[5px]"
                        src="images/img_vector_white_a700_5x3.svg"
                        alt="vectoreight"
                      />
                      <Img
                        className="h-[5px] w-1"
                        src="images/img_vector_5x4.svg"
                        alt="vectornine"
                      />
                      <Img
                        className="h-[5px]"
                        src="images/img_vector_white_a700_5x2.svg"
                        alt="vectorten"
                      />
                      <Img
                        className="h-[5px]"
                        src="images/img_vector_5x3.svg"
                        alt="vectoreleven"
                      />
                      <Img
                        className="h-[5px] w-[5px]"
                        src="images/img_vector_5x5.svg"
                        alt="vectortwelve"
                      />
                      <Img
                        className="h-[5px]"
                        src="images/img_vector_5x2.svg"
                        alt="vectorthirteen"
                      />
                      <Img
                        className="h-[5px]"
                        src="images/img_vector_1.svg"
                        alt="vectorfourteen"
                      />
                      <Img
                        className="h-[5px]"
                        src="images/img_vector_2.svg"
                        alt="vectorfifteen"
                      />
                      <Img
                        className="h-[5px]"
                        src="images/img_vector_white_a700_5x1.svg"
                        alt="vectorsixteen"
                      />
                      <Img
                        className="h-[5px] w-[5px]"
                        src="images/img_vector_3.svg"
                        alt="vectorseventeen"
                      />
                      <Img
                        className="h-[5px] w-1"
                        src="images/img_vector_4.svg"
                        alt="vectoreighteen"
                      />
                      <Img
                        className="h-[5px]"
                        src="images/img_vector_5.svg"
                        alt="vectornineteen"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "15px 15px 15px 28px",
                  gap: "23px",
                  marginTop: "23px",
                  color: "#ffffff",
                  textAlign: "right",
                  fontSize: "18px",
                  borderRadius: "4px",
                  [`&:hover, &.ps-active`]: {
                    fontWeight: "600 !important",
                    backgroundColor: "#ffffff61 !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-4 mt-[35px] pt-[3px] w-full"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
              <Text
                className="text-deep_orange-600_01 text-lg text-right"
                size="txtIBMPlexSansSemiBold18Deeporange60001"
              >
                Dashboard
              </Text>
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
                    alt="volumeone"
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
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[18px] w-[98%] md:w-full">
              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-col items-start justify-start rounded-md shadow-bs2 w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_bulkupload1.svg"
                    alt="bulkuploadone"
                  />
                </div>
                <SelectBox
                  className="font-medium leading-[normal] text-base text-black-900 text-left w-[73%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame1131"
                  options={bulkUploadOptionsList}
                  isSearchable={false}
                  placeholder="Bulk Upload"
                />
              </div>
              <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[38px] w-auto">
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-col items-start justify-start rounded-md shadow-bs2 w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_shortcuts1.svg"
                    alt="shortcutsone"
                  />
                </div>
                <div className="flex flex-col items-end justify-end w-auto">
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtIBMPlexSansMedium16Black900"
                  >
                    Shortcuts
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[11px] items-center justify-start md:ml-[0] ml-[62px] w-auto">
                <div className="bg-white-A700 border border-blue-800 border-solid flex flex-col items-start justify-start rounded-md shadow-bs2 w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_settings_blue_800_02.svg"
                    alt="settingstwo"
                  />
                </div>
                <SelectBox
                  className="font-medium leading-[normal] text-base text-black-900 text-left w-[66%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame1134"
                  options={supportOptionsList}
                  isSearchable={false}
                  placeholder="Support"
                />
              </div>
              <div className="bg-white-A700 border border-blue-800 border-solid flex flex-col items-start justify-start md:ml-[0] ml-[578px] rounded-md shadow-bs2 w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_list1.svg"
                  alt="listone"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[26px] items-center justify-center mt-[35px] w-auto md:w-full">
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
                      alt="svgexportsevent"
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
                  alt="volumetwo"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300_08 border-solid flex flex-col items-center justify-end p-[21px] sm:px-5 rounded-lg w-[24%] md:w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_svgexport66.svg"
                      alt="svgexportsixtys"
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
            <Line className="bg-gray-400_03 h-px mt-[25px] w-[98%]" />
            <div className="flex md:flex-col flex-row gap-3 items-center justify-between mt-[19px] w-[98%] md:w-full">
              <Img
                className="h-[308px] md:h-auto object-cover rounded"
                src="images/img_screenshot20230830.png"
                alt="screenshot20230"
              />
              <Img
                className="h-[309px] md:h-auto object-cover rounded"
                src="images/img_screenshot20230830_309x564.png"
                alt="screenshot20230_One"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300_08 border-solid flex flex-col items-center justify-start mt-[39px] rounded-lg w-full">
              <div className="flex flex-col items-start justify-start mb-4 mt-[13px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-10 md:ml-[0] w-[84%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-[54%] md:w-full">
                    <div className="flex flex-row gap-[9px] items-end justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="text-base text-blue_gray-300_17 w-auto"
                        size="txtIBMPlexSansMedium16Bluegray30017"
                      >
                        Name
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[9px] items-end justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_svgexport17_blue_gray_300_17.svg"
                        alt="svgexportsevent_One"
                      />
                      <Text
                        className="text-base text-blue_gray-300_17 w-auto"
                        size="txtIBMPlexSansMedium16Bluegray30017"
                      >
                        Country
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[9px] items-end justify-start w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_svgexport17_blue_gray_300_17_20x20.svg"
                      alt="svgexportsevent_Two"
                    />
                    <Text
                      className="text-base text-blue_gray-300_17 w-auto"
                      size="txtIBMPlexSansMedium16Bluegray30017"
                    >
                      Options
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-300_08 h-px mt-2.5 w-full" />
                <List
                  className="flex flex-col gap-[22px] ml-10 md:ml-[0] mt-[26px] w-[87%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-[62%] md:w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                        <div className="flex flex-col h-11 items-center justify-start outline outline-[1px] outline-gray-300_08 p-0.5 rounded-[50%] w-11">
                          <Img
                            className="h-10 md:h-auto object-cover w-10"
                            src="images/img_avatarmanheader.png"
                            alt="avatarmanheader"
                          />
                        </div>
                        <Text
                          className="text-blue_gray-900_01 text-right text-sm w-auto"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          Moumen Saher Dhair
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-900_01 text-sm"
                        size="txtIBMPlexSansMedium14Bluegray90001"
                      >
                        United Arab Emirates Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[29px] items-start justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-[62%] md:w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                        <div className="flex flex-col h-11 items-center justify-start outline outline-[1px] outline-gray-300_08 p-0.5 rounded-[50%] w-11">
                          <Img
                            className="h-10 md:h-auto object-cover w-10"
                            src="images/img_avatarmanheader.png"
                            alt="avatarmanheader"
                          />
                        </div>
                        <Text
                          className="text-blue_gray-900_01 text-right text-sm w-auto"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          Moumen Saher Dhair
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-900_01 text-sm"
                        size="txtIBMPlexSansMedium14Bluegray90001"
                      >
                        United Arab Emirates Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[29px] items-start justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-[62%] md:w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                        <div className="flex flex-col h-11 items-center justify-start outline outline-[1px] outline-gray-300_08 p-0.5 rounded-[50%] w-11">
                          <Img
                            className="h-10 md:h-auto object-cover w-10"
                            src="images/img_avatarmanheader.png"
                            alt="avatarmanheader"
                          />
                        </div>
                        <Text
                          className="text-blue_gray-900_01 text-right text-sm w-auto"
                          size="txtIBMPlexSansMedium14Bluegray90001"
                        >
                          Moumen Saher Dhair
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-900_01 text-sm"
                        size="txtIBMPlexSansMedium14Bluegray90001"
                      >
                        United Arab Emirates Delete
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[29px] items-start justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_trash.svg"
                        alt="trash"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
