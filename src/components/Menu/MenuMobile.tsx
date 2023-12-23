"use client";

// NextJS
import Image from "next/image";
import Link from "next/link";

// Components
import ItemMenuMobile from "./ItemMenuMobile";

// Icons
import userIcon from "../../public/images/generic/user.svg";
import { MdLogout } from "react-icons/md";

//Hooks
import { FiMenu } from "react-icons/fi";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { useSession } from "next-auth/react";
import ItemMenuMobileLogout from "./ItemMenuMobileLogout";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

const MenuMobile = () => {
  const { data, status } = useSession();

  return !data ? (
    <LoadingIcon size={20} />
  ) : (
    <div className="absolute">
      <Sheet>
        <SheetTrigger asChild>
          <div className="p-5">
            <FiMenu className="rounded-full text-2xl text-primaryColor" />
          </div>
        </SheetTrigger>

        <SheetContent
          className="w-64 border-none bg-primaryColor text-white"
          side="left"
        >
          <ul className="flex w-full flex-col items-center gap-5 pt-10 font-semibold">
            <SheetClose asChild>
              <ItemMenuMobile href="/" name="Home" />
            </SheetClose>

            <SheetClose asChild>
              <ItemMenuMobile href="/acordes" name="Acordes" />
            </SheetClose>

            <ItemMenuMobile href="/colabore" name="Colabore" />
            <ItemMenuMobile href="/fale-conosco" name="Fale conosco" />
            <ItemMenuMobile href="/enviar-cifra" name="Enviar cifra" />

            <ItemMenuMobileLogout href="" name="Logout" icon={MdLogout} />

            <li className=" rounded-md border border-tertiaryColor px-4 py-2 font-bold text-white hover:bg-tertiaryColor active:bg-secondaryColor active:text-tertiaryColor">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 uppercase"
              >
                Minha dashboard
              </Link>
            </li>

            {status === "authenticated" ? (
              ""
            ) : (
              <>
                <ItemMenuMobile href="/login" name="Login" />

                <li className="flex rounded bg-secondaryColor px-3 py-1 font-text text-white active:text-tertiaryColor">
                  <Link href="/cadastro" className="flex items-center">
                    <Image src={userIcon} alt="Usuário" />
                    CADASTRE-SE
                  </Link>
                </li>
              </>
            )}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuMobile;
