import { useAuth } from "../context/auth";

const NavBar = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex gap-4 justify-between  bg-[#141414]  border-0 w-full  px-8 py-2  ">
      <div className="text-amber-100 md:text-2xl text-md">
        <p>Music Library</p>
      </div>
      <div className="flex gap-5 justify-end">
        <button
          onClick={handleLogout}
          className="cursor-pointer border border-white/60 text-white px-2 rounded-lg hover:text-amber-200 capitalize"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
