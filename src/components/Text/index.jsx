import React from "react";

const sizeClasses = {
  txtIBMPlexSansRegular16Gray700: "font-ibmplexsans font-normal",
  txtIBMPlexSansRegular16Gray900: "font-ibmplexsans font-normal",
  txtIBMPlexSansMedium14Gray60021: "font-ibmplexsans font-medium",
  txtIBMPlexSansSemiBold16Blue800: "font-ibmplexsans font-semibold",
  txtCairoRegular18: "font-cairo font-normal",
  txtIBMPlexSansSemiBold16: "font-ibmplexsans font-semibold",
  txtIBMPlexSansSemiBold14: "font-ibmplexsans font-semibold",
  txtIBMPlexSansSemiBold18Deeporange60001: "font-ibmplexsans font-semibold",
  txtIBMPlexSansRegular14Black900: "font-ibmplexsans font-normal",
  txtIBMPlexSansRegular16Gray50033: "font-ibmplexsans font-normal",
  txtIBMPlexSansBold40: "font-bold font-ibmplexsans",
  txtCairoSemiBold14: "font-cairo font-semibold",
  txtIBMPlexSansMedium16Gray40004: "font-ibmplexsans font-medium",
  txtIBMPlexSansMedium16Blue80099: "font-ibmplexsans font-medium",
  txtIBMPlexSansMedium16: "font-ibmplexsans font-medium",
  txtCairoMedium14: "font-cairo font-medium",
  txtIBMPlexSansMedium18: "font-ibmplexsans font-medium",
  txtIBMPlexSansMedium19: "font-ibmplexsans font-medium",
  txtIBMPlexSansRegular20: "font-ibmplexsans font-normal",
  txtIBMPlexSansSemiBold20: "font-ibmplexsans font-semibold",
  txtIBMPlexSansSemiBold16Bluegray80001: "font-ibmplexsans font-semibold",
  txtIBMPlexSansMedium16Bluegray30017: "font-ibmplexsans font-medium",
  txtIBMPlexSansMedium14: "font-ibmplexsans font-medium",
  txtIBMPlexSansBold18: "font-bold font-ibmplexsans",
  txtIBMPlexSansMedium16Deeporange500: "font-ibmplexsans font-medium",
  txtIBMPlexSansMedium18Black900: "font-ibmplexsans font-medium",
  txtIBMPlexSansBold40Blue800: "font-bold font-ibmplexsans",
  txtInterMedium12: "font-inter font-medium",
  txtIBMPlexSansMedium16Black900: "font-ibmplexsans font-medium",
  txtIBMPlexSansMedium14Bluegray90001: "font-ibmplexsans font-medium",
  txtIBMPlexSansRegular14Blue80099: "font-ibmplexsans font-normal",
  txtIBMPlexSansRegular16: "font-ibmplexsans font-normal",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtIBMPlexSansRegular14Bluegray10005: "font-ibmplexsans font-normal",
  txtIBMPlexSansMedium14Bluegray40019: "font-ibmplexsans font-medium",
  txtIBMPlexSansRegular14: "font-ibmplexsans font-normal",
  txtIBMPlexSansMedium16Blue800: "font-ibmplexsans font-medium",
  txtIBMPlexSansRegular16Black900: "font-ibmplexsans font-normal",
  txtIBMPlexSansRegular18: "font-ibmplexsans font-normal",
  txtIBMPlexSansSemiBold18: "font-ibmplexsans font-semibold",
  txtIBMPlexSansMedium16Deeporange500b2: "font-ibmplexsans font-medium",
  txtIBMPlexSansMedium16Gray60022: "font-ibmplexsans font-medium",
  txtIBMPlexSansMedium16Deeporange60001: "font-ibmplexsans font-medium",
  txtRobotoRomanMedium16: "font-medium font-roboto",
  txtIBMPlexSansMedium14Gray50036: "font-ibmplexsans font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
