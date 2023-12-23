// Hooks
import { signOut } from "next-auth/react";

//NextJS
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

// Ícones
import { IconType } from "react-icons";

interface ItemMenuMobileLogoutProps {
  href: Url;
  name: String;
  icon?: IconType;
  openFunction?: () => void;
}

const ItemMenuMobileLogout = ({
  href,
  name,
  icon,
  openFunction,
}: ItemMenuMobileLogoutProps) => {
  const Icon = icon;

  const handleSignout = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <>
      <li
        className="font-text text-red-400 hover:text-tertiaryColor active:text-tertiaryColor"
        onClick={openFunction}
      >
        <Link
          href={href}
          className="flex items-center gap-2 uppercase"
          onClick={handleSignout}
        >
          {name}
          {Icon && <Icon size={20} />}
        </Link>
      </li>
    </>
  );
};

export default ItemMenuMobileLogout;
