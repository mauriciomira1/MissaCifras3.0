import { NewMusicContextProvider } from "@/contexts/useNewMusicContext";
import MenuLateral from "./MenuLateral";

export const metadata = {
  title: "Dashboard",
  description: "Área do usuário",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NewMusicContextProvider>
      <div className="flex min-h-screen w-full">
        <div className="flex h-auto w-12 flex-col items-center justify-start bg-primaryColor pt-4 shadow-lg shadow-gray-800 md:w-72 md:pl-2 md:pr-5 md:pt-1">
          <h1 className="mt-3 hidden py-4 font-text text-xl font-semibold uppercase text-white md:block">
            Dashboard
          </h1>
          <MenuLateral />
        </div>
        <div className="flex w-full flex-col items-center px-3">{children}</div>
      </div>
    </NewMusicContextProvider>
  );
}
