import dashboard_logo from "../../public/assets/sidebar/dashboard.svg";
import enquiry_logo from "../../public/assets/sidebar/inquiry.svg";
import inventory_logo from "../../public/assets/sidebar/car.svg";
import user_logo from "../../public/assets/sidebar/user.svg";
import brand_logo from "../../public/assets/sidebar/brand.svg";
import model_logo from "../../public/assets/sidebar/models.svg";
import profile_logo from "../../public/assets/sidebar/profile.svg";
export const adminRoutes = [
  {
    id: "dashboard",
    route: "/dashboard",
    logo: dashboard_logo,
  },
  {
    id: "enquiry",
    route: "/enquiry",
    logo: enquiry_logo,
  },
  {
    id: "inventory",
    route: "/inventory",
    logo: inventory_logo,
  },
  {
    id: "user",
    route: "/user-management",
    logo: user_logo,
  },
  {
    id: "brands",
    route: "/brands",
    logo: brand_logo,
  },
  {
    id: "models",
    route: "/models",
    logo: model_logo,
  },
  {
    id: "profile",
    route: "/profile",
    logo: profile_logo,
  },
];
