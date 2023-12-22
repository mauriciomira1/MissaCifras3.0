import Welcome from "@/components/Dashboard/Welcome";

export const metadata = {
  title: "Minha Dashboard",
};

const Dashboard = () => {
  return <div className="flex w-full justify-center">{<Welcome />}</div>;
};

export default Dashboard;
