import Link from "next/link";

export default function Navbar() {
    return(
        <div className=" px-4 ml-0 mb-2 bg-slate-200 w-full h-12">
            <nav className="flex w-fit">
                <div className="mx-4 text-xl mt-2.5">
                    <Link href="/">Alejandro López</Link>
                </div>
                <div className="mx-4 text-xl mt-2.5">
                    <Link href="/projects">Projects</Link>
                </div>
            </nav>
        </div>
    );
}