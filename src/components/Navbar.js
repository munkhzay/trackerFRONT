import Link from "next/link";
import Logo from "../../public/icons/Logo";
import { FaSignOutAlt } from "react-icons/fa";
import { Toaster } from "sonner";

const Navbar = (props) => {
  const { signOut, handleAdd } = props;
  return (
    <div className="bg-white w-full py-4 ">
      <div className="w-[1180px] flex justify-between mx-auto">
        <div className="flex gap-6 items-center">
          <Logo />
          <Link href={"/dashboard"}>
            <p> Dashboard </p>
          </Link>
          <Link href={"/"}>
            <p> Records</p>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={handleAdd}
            className="bg-[#0166FF] py-1.5 px-3 text-white rounded-3xl text-base"
          >
            + Record
          </button>
          <div className="rounded-full w-10 h-10 bg-[url('/images/Profile.jpeg')]"></div>{" "}
          <Toaster />
          <button className="border-2 border-cyan-600" onClick={signOut}>
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
