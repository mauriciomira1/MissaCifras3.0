import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface FooterItemProps {
  href: Url;
  name: String;
}

const FooterItem = ({ href, name }: FooterItemProps) => {
  return (
    <Link
      href={href}
      className="text-white font-bold duration-150 hover:border-t-4 border-t-tertiaryColor hover:text-tertiaryColor hover:underline text-xs lg:text-sm flex items-end w-28 lg:w-52 justify-center"
    >
      {name}
    </Link>
  );
};

export default FooterItem;
