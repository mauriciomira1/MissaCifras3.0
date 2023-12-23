import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ItemMenuMobileProps {
  href: Url;
  name: String;
  icon?: IconType;
}

const ItemMenuMobile = ({ href, name, icon }: ItemMenuMobileProps) => {
  const Icon = icon;

  return (
    <>
      <li className="font-text text-white hover:text-tertiaryColor active:text-tertiaryColor">
        <Link href={href} className="flex items-center gap-2 uppercase">
          {name}
          {Icon && <Icon size={20} />}
        </Link>
      </li>
    </>
  );
};

export default ItemMenuMobile;
