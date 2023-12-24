import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface ItemMenuProps {
  href: Url;
  name: String;
  onClickFunction?: () => void;
}

const ItemMenu = ({ href, name, onClickFunction }: ItemMenuProps) => {
  return (
    <li
      className="flex h-full flex-wrap items-center justify-center gap-1 border-primaryColor px-2 font-text font-bold text-secondaryColor duration-100 hover:cursor-pointer hover:border-b-4 hover:text-primaryColor"
      onClick={onClickFunction}
    >
      <Link href={href} className="py-6 uppercase">
        {name}
      </Link>
    </li>
  );
};

export default ItemMenu;
