import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ItemMenuMobileLogoutProps {
  href: Url;
  name: String;
  icon?: IconType;
}

const ItemMenuMobileLogout = ({
  href,
  name,
  icon,
}: ItemMenuMobileLogoutProps) => {
  const Icon = icon;

  return (
    <>
      <li className="font-text text-red-400 hover:text-tertiaryColor active:text-tertiaryColor">
        <Link href={href} className="flex items-center gap-2 uppercase">
          {name}
          {Icon && <Icon size={20} />}
        </Link>
      </li>
    </>
  );
};

export default ItemMenuMobileLogout;
