"use client";

// NextJS
import Image from "next/image";
import Link from "next/link";

// Icons
import userIcon from "../../public/images/generic/user.svg";
import { MdLogout } from "react-icons/md";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

//Hooks
import { FiMenu } from "react-icons/fi";
import { useSession } from "next-auth/react";

// Components
import ItemMenuMobile from "./ItemMenuMobile";
import ItemMenuMobileLogout from "./ItemMenuMobileLogout";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { useState } from "react";

const MenuMobile = () => {
  const { data, status } = useSession();
  const [open, setOpen] = useState(false);

  const openToogle = () => {
    setOpen(false);
  };

  return status === "loading" ? (
    <LoadingIcon size={20} />
  ) : (
    <div className="absolute xl:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
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
            {status === "authenticated" && (
              <>
                <li className="justify-betwee flex w-full content-between items-center">
                  <h3 className="w-full font-text text-sm">
                    Bem vindo,
                    <br /> {data?.user?.name}
                  </h3>
                  <div className="w-12">
                    <Image
                      src={data?.user?.image!}
                      width={0}
                      height={0}
                      alt="Foto do usuário"
                      sizes="100vw"
                      className="h-auto w-full rounded-full object-cover"
                    />
                  </div>
                </li>
                <div className="my-2 h-[1px] w-full bg-blue-900"></div>
              </>
            )}
            <ItemMenuMobile href="/" name="Home" openFunction={openToogle} />
            <ItemMenuMobile
              href="/acordes"
              name="Acordes"
              openFunction={openToogle}
            />
            <ItemMenuMobile
              href="/colabore"
              name="Colabore"
              openFunction={openToogle}
            />
            <ItemMenuMobile
              href="/fale-conosco"
              name="Fale conosco"
              openFunction={openToogle}
            />
            <ItemMenuMobile
              href="/enviar-cifra"
              name="Enviar cifra"
              openFunction={openToogle}
            />

            {status === "authenticated" ? (
              <>
                <ItemMenuMobileLogout
                  href=""
                  name="Logout"
                  icon={MdLogout}
                  openFunction={openToogle}
                />

                <li className=" rounded-md border border-tertiaryColor px-4 py-2 font-bold text-white hover:bg-tertiaryColor active:bg-secondaryColor active:text-tertiaryColor">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 uppercase"
                    onClick={openToogle}
                  >
                    Minha dashboard
                  </Link>
                </li>
              </>
            ) : (
              <>
                <ItemMenuMobile
                  href="/login"
                  name="Login"
                  openFunction={openToogle}
                />

                <li
                  className="flex rounded bg-secondaryColor px-3 py-1 font-text text-white active:text-tertiaryColor"
                  onClick={openToogle}
                >
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
