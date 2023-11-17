import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

interface ItemMenuMobileProps {
  href: Url;
  name: String;
}

const ItemMenuMobile = ({ href, name }: ItemMenuMobileProps) => {
  return (
    <>
      <li className="font-text text-white hover:text-tertiaryColor active:text-tertiaryColor">
        <Link href={href} className="py-6 uppercase">
          {name}
        </Link>
      </li>
    </>
  );
};

export default ItemMenuMobile;
