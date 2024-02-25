import Navbar from "./navbar";

export default function Layout({ children }) {
    return(
        <div className="relative">
            <Navbar className="fixed w-full z-10"/>
            <div className="">
                {children}
            </div>
        </div>
    );
}