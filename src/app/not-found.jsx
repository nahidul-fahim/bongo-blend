"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center p-10 gap-5">
            <h2 className="text-8xl text-[red] font-bold text-center">404</h2>
            <Link href={"/"}><Button>Back to home</Button></Link>
        </div>
    );
};

export default NotFound;