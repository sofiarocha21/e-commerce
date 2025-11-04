import { useTranslation } from "react-i18next";
import "../../i18n.js";

//imagens
import logo from "../../../images/logo/logo.svg";
import accountIcon from "../../../images/icons/navbar/account.svg";
import cartIcon from "../../../images/icons/navbar/cart.svg";
import heartIcon from "../../../images/icons/navbar/heart.svg";
import searchIcon from "../../../images/icons/navbar/search.svg";
import Link from "../Components/Link.jsx";

export default function Navbar() {
  const { t } = useTranslation("home");
  return (
    <div>
      <main className="flex px-4 lg:pl-12 lg:pr-24 justify-between items-center py-3 lg:py-9 relative">
        <Link href="/" className="flex items-center gap-1 ">
          <img className="lg:h-9" src={logo}></img>
          <h1 className="hidden lg:block font-montserrat font-bold lg:text-[34px] lg:leading-[34px]">
            Furniro
          </h1>
        </Link>
        <div className="hidden lg:flex font-poppins lg:text-[16px] font-medium lg:gap-16 justify-center absolute left-1/2 transform -translate-x-1/2">
          <Link className="cursor-pointer hover:text-primary duration-300 ">
            {t("home")}
          </Link>
          <Link className="cursor-pointer hover:text-primary duration-300 ">
            {t("shop")}
          </Link>
          <Link className="cursor-pointer hover:text-primary duration-300 ">
            {t("about")}
          </Link>
          <Link className="cursor-pointer hover:text-primary duration-300 ">
            {t("contact")}
          </Link>
        </div>
        <section className="flex gap-2 lg:gap-11">
          <Link className="cursor-pointer hover:text-primary duration-300 ">
            <img src={accountIcon} />
          </Link>
          <Link className="cursor-pointer hover:text-primary duration-300 hidden lg:block">
            <img src={searchIcon}></img>
          </Link>
          <Link className="cursor-pointer hover:text-primary duration-300 hidden lg:block">
            <img src={heartIcon}></img>
          </Link>
          <Link className="cursor-pointer hover:text-primary duration-300 ">
            <img src={cartIcon}></img>
          </Link>
        </section>
      </main>
    </div>
  );
}
