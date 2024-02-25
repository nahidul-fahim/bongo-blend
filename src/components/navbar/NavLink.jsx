import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ item }) => {

    // hooks
    const pathName = usePathname();


    return (
        <Link href={item.path} className={`${pathName === item.path ? "duration-300 font-bold text-black active-nav-link flex justify-center items-center gap-2" : "text-lightBlack nav-link flex justify-center items-center gap-2"}`}>
            {item.title}
        </Link>
    );
};

export default NavLink;