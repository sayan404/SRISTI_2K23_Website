import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="w-full h-20 bg-gray-800/40 backdrop-blur-md fixed top-0 z-40 flex justify-between items-center px-12 text-white font-griffy">
        <div>
        <Link href={"/"}>
          <Image src="/Images/Sristi 3.png" alt="logo" width={100} height={100} draggable={false}/>
          </Link>
        </div>
        <ul className="flex justify-center items-center text-xl">
          <Link href={"/"}>
            <li className="mx-4 cursor-pointer capitalize">Home</li>
          </Link>
          <Link href={"/events"}>
            <li className="mx-4 cursor-pointer capitalize">Events</li>
          </Link>
          <Link href={"/team"}>
            <li className="mx-4 cursor-pointer capitalize">Teams</li>
          </Link>
          <Link href={"/login"}>
            <li className="mx-4 cursor-pointer capitalize">Log in</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
