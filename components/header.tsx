import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-400 font-semibold">
          <Link className="text-primary font-semibold text-2xl " href="">
            ST PIZZA
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
        <nav>
          <Link
            className="rounded-full text-gray-500 px-4 py-2 font-semibold"
            href={""}
          >
            Login
          </Link>
          <Link
            className="bg-primary rounded-full text-white px-4 py-2"
            href={"/register"}
          >
            Register
          </Link>
        </nav>
      </header>
    </div>
  );
}
