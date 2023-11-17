import Welcome from "@/components/Dashboard/Welcome";

export const metadata = {
  title: "Minha Dashboard",
};

const Dashboard = () => {
  return <div className="flex justify-center">{<Welcome />}</div>;
};

export default Dashboard;
