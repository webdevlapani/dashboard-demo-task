import BillingSVG from "../../assets/svg/BillingSVG";
import HomeSVG from "../../assets/svg/HomeSVG";
import ScrollSVG from "../../assets/svg/ScrollSVG";
import SubmitViolationsSVG from "../../assets/svg/SubmitViolationsSVG";
import AffiliateProgramSVG from "../../assets/svg/AffiliateProgram";
import SupportSVG from "../../assets/svg/SupportSVG";
import FaqSVG from "../../assets/svg/FaqSVG";
import SettingsSVG from "../../assets/svg/SettingsSVG";

export const sidebarOptions = [
  {
    title: "Home",
    icon: <HomeSVG />,
    url: "/dashboard",
  },
  {
    title: "Submit Violations",
    icon: <SubmitViolationsSVG />,
    url: "/submit-violations",
  },
  {
    title: "Whitelist",
    icon: <ScrollSVG />,
    url: "/whitelist",
  },
  {
    title: "Billing",
    icon: <BillingSVG />,
    url: "/billing",
  },
  {
    title: "Affiliate Program",
    icon: <AffiliateProgramSVG />,
    url: "/affiliate-program",
  },
  {
    title: "Settings",
    icon: <SettingsSVG />,
    url: "/settings",
  },
  {
    title: "FAQ",
    icon: <FaqSVG />,
    url: "/faq",
  },
  {
    title: "Support",
    icon: <SupportSVG />,
    url: "/support",
  },
];
