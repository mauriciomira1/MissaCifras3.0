import { NewMusicContextProvider } from "@/contexts/useNewMusicContext";
import MenuLateral from "./MenuLateral";

export const metadata = {
  title: "Dashboard",
  description: "Área do colaborador",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NewMusicContextProvider>
      <div className="w-full flex min-h-screen">
        <div className="bg-primaryColor shadow-lg shadow-gray-800 flex flex-col justify-start items-center h-auto w-12 pt-4 md:pt-1 md:w-72 md:pl-2 md:pr-5">
          <h1 className="hidden md:block text-white font-semibold font-text text-xl py-4 uppercase mt-3">
            Dashboard
          </h1>
          <MenuLateral />
        </div>
        <div className="flex items-center flex-col w-full px-3">{children}</div>
      </div>
    </NewMusicContextProvider>
  );
}
