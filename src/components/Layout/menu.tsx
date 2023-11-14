import HomeSVG from "../../assets/svg/HomeSVG";
import SettingsSVG from "../../assets/svg/SettingsSVG";

export const sidebarOptions = [
  {
    title: "Home",
    icon: <HomeSVG />,
    url: "/dashboard",
  },
  {
    title: "MultiStep Signup",
    icon: <SettingsSVG />,
    url: "/auth/multistep-signup",
  },
  {
    title: "Persinal Info Signup",
    icon: <SettingsSVG />,
    url: "/auth/personalinfo-signup",
  },
];
