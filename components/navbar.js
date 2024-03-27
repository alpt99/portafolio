import Link from "next/link";

export default function Navbar() {
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Alejandro López Torres</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link href="/">About Me</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                {/* <li>
                    <details>
                    <summary>
                        Parent
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li> */}
                </ul>
            </div>
        </div>
        // <div className=" px-4 ml-0 mb-2 bg-blue-400 w-full h-14">
        //     <nav className="flex w-fit text-white">
        //         <div className="mx-4 text-2xl mt-2.5">
        //             <Link href="/">Alejandro López</Link>
        //         </div>
        //         <div className="mx-4 text-2xl mt-2.5">
        //             <Link href="/projects">Projects</Link>
        //         </div>
        //     </nav>
        // </div>
    );
}