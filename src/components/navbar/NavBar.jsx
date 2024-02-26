"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


const NavBar = () => {

    // hooks
    const pathName = usePathname();

    console.log(pathName);


    // Navbar link array
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Search",
            path: "/search"
        },
        {
            title: "Sign in",
            path: "/signIn"
        },
    ]

    if (pathName === "/signIn" || pathName === "/signUp") {
        return ""
    }
    else {
        return (
            <div className="w-[250px] min-h-screen px-5 py-10 border-r-[1px] border-lightBlack">
                <div className="flex flex-col justify-start items-start gap-5">
                    {
                        links.map(link =>
                            <Link key={link.title}
                                href={link.path}
                                className={`${pathName === link.path ? "duration-300 font-bold text-black active-nav-link flex justify-center items-center gap-2" : "text-lightBlack nav-link flex justify-center items-center gap-2"}`}>
                                {link.title}
                            </Link>)
                    }
                </div>
            </div>
        );
    }
};

export default NavBar;