import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

import { getHostels } from "../../api";
import HostelsTable from "../../components/table/hostels-table";

const AdminHome = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["hostels"],
    queryFn: getHostels,
  });

  if (isLoading) return <Loader2 className="animate-spin" />;

  return (
    <div className="container mx-auto my-10">
      <Link to="/admin/new-hostel">
        <button className="flex items-center justify-center bg-green-400 text-white rounded-md px-4 py-2">
          NEW HOSTEL
        </button>
      </Link>

      {data.data.length > 0 && <HostelsTable hostels={data.data} />}
    </div>
  );
};

export default AdminHome;
