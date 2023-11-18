import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Page = React.lazy(() => import("pages/Page"));
const StocksStockReceive = React.lazy(() => import("pages/StocksStockReceive"));
const StocksStockIssue = React.lazy(() => import("pages/StocksStockIssue"));
const StocksOpeningStocks = React.lazy(
  () => import("pages/StocksOpeningStocks"),
);
const Stocks = React.lazy(() => import("pages/Stocks"));
const PDCManagemenntReconcileChequeReceipt = React.lazy(
  () => import("pages/PDCManagemenntReconcileChequeReceipt"),
);
const PDCManagemenntReconcileChequePayment = React.lazy(
  () => import("pages/PDCManagemenntReconcileChequePayment"),
);
const PDCManagemenntProcessedPDCs = React.lazy(
  () => import("pages/PDCManagemenntProcessedPDCs"),
);
const PDCManagemenntPendingPDCs = React.lazy(
  () => import("pages/PDCManagemenntPendingPDCs"),
);
const PDCManagemennt = React.lazy(() => import("pages/PDCManagemennt"));
const ReceiptVouchersChequeReceipt = React.lazy(
  () => import("pages/ReceiptVouchersChequeReceipt"),
);
const ReceiptVouchersFundReceipt = React.lazy(
  () => import("pages/ReceiptVouchersFundReceipt"),
);
const ReceiptVouchersCashReceipt = React.lazy(
  () => import("pages/ReceiptVouchersCashReceipt"),
);
const ReceiptVouchers = React.lazy(() => import("pages/ReceiptVouchers"));
const PaymentVouchersVerifyPaymentVoucher = React.lazy(
  () => import("pages/PaymentVouchersVerifyPaymentVoucher"),
);
const PaymentVouchersFundPaymentVoucher = React.lazy(
  () => import("pages/PaymentVouchersFundPaymentVoucher"),
);
const PaymentVouchersCashPayment = React.lazy(
  () => import("pages/PaymentVouchersCashPayment"),
);
const PaymentVouchers = React.lazy(() => import("pages/PaymentVouchers"));
const BasicVouchersCompanyexpenses = React.lazy(
  () => import("pages/BasicVouchersCompanyexpenses"),
);
const BasicVouchersDailycoupon = React.lazy(
  () => import("pages/BasicVouchersDailycoupon"),
);
const BasicVouchersInitialBalance = React.lazy(
  () => import("pages/BasicVouchersInitialBalance"),
);
const BasicVouchers = React.lazy(() => import("pages/BasicVouchers"));
const SalesOscarVegetablesandFruitsLLC = React.lazy(
  () => import("pages/SalesOscarVegetablesandFruitsLLC"),
);
const SalesManaratHouranFoodstuffTradingLLC = React.lazy(
  () => import("pages/SalesManaratHouranFoodstuffTradingLLC"),
);
const SalesManaratAlShamVegetableandFruitTradingLLC = React.lazy(
  () => import("pages/SalesManaratAlShamVegetableandFruitTradingLLC"),
);
const SalesDistinguishedagentfortechnicalservices = React.lazy(
  () => import("pages/SalesDistinguishedagentfortechnicalservices"),
);
const SalesAlRawanFoodstuffTrading = React.lazy(
  () => import("pages/SalesAlRawanFoodstuffTrading"),
);
const SalesSalesReturn = React.lazy(() => import("pages/SalesSalesReturn"));
const SalesSalesInvoice = React.lazy(() => import("pages/SalesSalesInvoice"));
const SalesDeliveryNote = React.lazy(() => import("pages/SalesDeliveryNote"));
const SalesSalesOrder = React.lazy(() => import("pages/SalesSalesOrder"));
const SalesSalesQuotation = React.lazy(
  () => import("pages/SalesSalesQuotation"),
);
const SalessalesEnquiry = React.lazy(() => import("pages/SalessalesEnquiry"));
const Sales = React.lazy(() => import("pages/Sales"));
const PurchasePurchasereturn = React.lazy(
  () => import("pages/PurchasePurchasereturn"),
);
const PurchasePurchaseinvoice = React.lazy(
  () => import("pages/PurchasePurchaseinvoice"),
);
const PurchaseGoodsreceived = React.lazy(
  () => import("pages/PurchaseGoodsreceived"),
);
const PurchasePurchaseOrder = React.lazy(
  () => import("pages/PurchasePurchaseOrder"),
);
const PurchasePurchaseQuotation = React.lazy(
  () => import("pages/PurchasePurchaseQuotation"),
);
const PurchasePurchaseRequest = React.lazy(
  () => import("pages/PurchasePurchaseRequest"),
);
const Purchase = React.lazy(() => import("pages/Purchase"));
const MasterVoucherDocs = React.lazy(() => import("pages/MasterVoucherDocs"));
const MasterUserButtonRole = React.lazy(
  () => import("pages/MasterUserButtonRole"),
);
const MasterUserPageRole = React.lazy(() => import("pages/MasterUserPageRole"));
const MasterProductColors = React.lazy(
  () => import("pages/MasterProductColors"),
);
const MasterProductTypes = React.lazy(() => import("pages/MasterProductTypes"));
const MasterAssts = React.lazy(() => import("pages/MasterAssts"));
const MasterServices = React.lazy(() => import("pages/MasterServices"));
const MasterProductUpdate = React.lazy(
  () => import("pages/MasterProductUpdate"),
);
const MasterProductUpload = React.lazy(
  () => import("pages/MasterProductUpload"),
);
const MasterServiceList = React.lazy(() => import("pages/MasterServiceList"));
const MasterAssetList = React.lazy(() => import("pages/MasterAssetList"));
const MasterProductList = React.lazy(() => import("pages/MasterProductList"));
const MasterProducts = React.lazy(() => import("pages/MasterProducts"));
const MasterCostCenterTwo = React.lazy(
  () => import("pages/MasterCostCenterTwo"),
);
const MasterCostCenter = React.lazy(() => import("pages/MasterCostCenter"));
const MasterChartsofAccountsThree = React.lazy(
  () => import("pages/MasterChartsofAccountsThree"),
);
const MasterChartsofAccountsTwo = React.lazy(
  () => import("pages/MasterChartsofAccountsTwo"),
);
const MasterChartsofAccounts = React.lazy(
  () => import("pages/MasterChartsofAccounts"),
);
const MasterAccountTypesTwo = React.lazy(
  () => import("pages/MasterAccountTypesTwo"),
);
const MasterAccountTypes = React.lazy(() => import("pages/MasterAccountTypes"));
const MasterExpenses = React.lazy(() => import("pages/MasterExpenses"));
const MasterVendors = React.lazy(() => import("pages/MasterVendors"));
const MasterCustomerUpload = React.lazy(
  () => import("pages/MasterCustomerUpload"),
);
const MasterCustomer = React.lazy(() => import("pages/MasterCustomer"));
const MasterCurrencyConvertion = React.lazy(
  () => import("pages/MasterCurrencyConvertion"),
);
const MasterCurrency = React.lazy(() => import("pages/MasterCurrency"));
const MasterEmployees = React.lazy(() => import("pages/MasterEmployees"));
const MasterVAT = React.lazy(() => import("pages/MasterVAT"));
const MasterUnit = React.lazy(() => import("pages/MasterUnit"));
const MasterCity = React.lazy(() => import("pages/MasterCity"));
const MasterCountry = React.lazy(() => import("pages/MasterCountry"));
const Master = React.lazy(() => import("pages/Master"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/master" element={<Master />} />
          <Route path="/mastercountry" element={<MasterCountry />} />
          <Route path="/mastercity" element={<MasterCity />} />
          <Route path="/masterunit" element={<MasterUnit />} />
          <Route path="/mastervat" element={<MasterVAT />} />
          <Route path="/masteremployees" element={<MasterEmployees />} />
          <Route path="/mastercurrency" element={<MasterCurrency />} />
          <Route
            path="/mastercurrencyconvertion"
            element={<MasterCurrencyConvertion />}
          />
          <Route path="/mastercustomer" element={<MasterCustomer />} />
          <Route
            path="/mastercustomerupload"
            element={<MasterCustomerUpload />}
          />
          <Route path="/mastervendors" element={<MasterVendors />} />
          <Route path="/masterexpenses" element={<MasterExpenses />} />
          <Route path="/masteraccounttypes" element={<MasterAccountTypes />} />
          <Route
            path="/masteraccounttypestwo"
            element={<MasterAccountTypesTwo />}
          />
          <Route
            path="/masterchartsofaccounts"
            element={<MasterChartsofAccounts />}
          />
          <Route
            path="/masterchartsofaccountstwo"
            element={<MasterChartsofAccountsTwo />}
          />
          <Route
            path="/masterchartsofaccountsthree"
            element={<MasterChartsofAccountsThree />}
          />
          <Route path="/mastercostcenter" element={<MasterCostCenter />} />
          <Route
            path="/mastercostcentertwo"
            element={<MasterCostCenterTwo />}
          />
          <Route path="/masterproducts" element={<MasterProducts />} />
          <Route path="/masterproductlist" element={<MasterProductList />} />
          <Route path="/masterassetlist" element={<MasterAssetList />} />
          <Route path="/masterservicelist" element={<MasterServiceList />} />
          <Route
            path="/masterproductupload"
            element={<MasterProductUpload />}
          />
          <Route
            path="/masterproductupdate"
            element={<MasterProductUpdate />}
          />
          <Route path="/masterservices" element={<MasterServices />} />
          <Route path="/masterassts" element={<MasterAssts />} />
          <Route path="/masterproducttypes" element={<MasterProductTypes />} />
          <Route
            path="/masterproductcolors"
            element={<MasterProductColors />}
          />
          <Route path="/masteruserpagerole" element={<MasterUserPageRole />} />
          <Route
            path="/masteruserbuttonrole"
            element={<MasterUserButtonRole />}
          />
          <Route path="/mastervoucherdocs" element={<MasterVoucherDocs />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route
            path="/purchasepurchaserequest"
            element={<PurchasePurchaseRequest />}
          />
          <Route
            path="/purchasepurchasequotation"
            element={<PurchasePurchaseQuotation />}
          />
          <Route
            path="/purchasepurchaseorder"
            element={<PurchasePurchaseOrder />}
          />
          <Route
            path="/purchasegoodsreceived"
            element={<PurchaseGoodsreceived />}
          />
          <Route
            path="/purchasepurchaseinvoice"
            element={<PurchasePurchaseinvoice />}
          />
          <Route
            path="/purchasepurchasereturn"
            element={<PurchasePurchasereturn />}
          />
          <Route path="/sales" element={<Sales />} />
          <Route path="/salessalesenquiry" element={<SalessalesEnquiry />} />
          <Route
            path="/salessalesquotation"
            element={<SalesSalesQuotation />}
          />
          <Route path="/salessalesorder" element={<SalesSalesOrder />} />
          <Route path="/salesdeliverynote" element={<SalesDeliveryNote />} />
          <Route path="/salessalesinvoice" element={<SalesSalesInvoice />} />
          <Route path="/salessalesreturn" element={<SalesSalesReturn />} />
          <Route
            path="/salesalrawanfoodstufftrading"
            element={<SalesAlRawanFoodstuffTrading />}
          />
          <Route
            path="/salesdistinguishedagentfortechnicalservices"
            element={<SalesDistinguishedagentfortechnicalservices />}
          />
          <Route
            path="/salesmanaratalshamvegetableandfruittradingllc"
            element={<SalesManaratAlShamVegetableandFruitTradingLLC />}
          />
          <Route
            path="/salesmanarathouranfoodstufftradingllc"
            element={<SalesManaratHouranFoodstuffTradingLLC />}
          />
          <Route
            path="/salesoscarvegetablesandfruitsllc"
            element={<SalesOscarVegetablesandFruitsLLC />}
          />
          <Route path="/basicvouchers" element={<BasicVouchers />} />
          <Route
            path="/basicvouchersinitialbalance"
            element={<BasicVouchersInitialBalance />}
          />
          <Route
            path="/basicvouchersdailycoupon"
            element={<BasicVouchersDailycoupon />}
          />
          <Route
            path="/basicvoucherscompanyexpenses"
            element={<BasicVouchersCompanyexpenses />}
          />
          <Route path="/paymentvouchers" element={<PaymentVouchers />} />
          <Route
            path="/paymentvoucherscashpayment"
            element={<PaymentVouchersCashPayment />}
          />
          <Route
            path="/paymentvouchersfundpaymentvoucher"
            element={<PaymentVouchersFundPaymentVoucher />}
          />
          <Route
            path="/paymentvouchersverifypaymentvoucher"
            element={<PaymentVouchersVerifyPaymentVoucher />}
          />
          <Route path="/receiptvouchers" element={<ReceiptVouchers />} />
          <Route
            path="/receiptvoucherscashreceipt"
            element={<ReceiptVouchersCashReceipt />}
          />
          <Route
            path="/receiptvouchersfundreceipt"
            element={<ReceiptVouchersFundReceipt />}
          />
          <Route
            path="/receiptvoucherschequereceipt"
            element={<ReceiptVouchersChequeReceipt />}
          />
          <Route path="/pdcmanagemennt" element={<PDCManagemennt />} />
          <Route
            path="/pdcmanagemenntpendingpdcs"
            element={<PDCManagemenntPendingPDCs />}
          />
          <Route
            path="/pdcmanagemenntprocessedpdcs"
            element={<PDCManagemenntProcessedPDCs />}
          />
          <Route
            path="/pdcmanagemenntreconcilechequepayment"
            element={<PDCManagemenntReconcileChequePayment />}
          />
          <Route
            path="/pdcmanagemenntreconcilechequereceipt"
            element={<PDCManagemenntReconcileChequeReceipt />}
          />
          <Route path="/stocks" element={<Stocks />} />
          <Route
            path="/stocksopeningstocks"
            element={<StocksOpeningStocks />}
          />
          <Route path="/stocksstockissue" element={<StocksStockIssue />} />
          <Route path="/stocksstockreceive" element={<StocksStockReceive />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
