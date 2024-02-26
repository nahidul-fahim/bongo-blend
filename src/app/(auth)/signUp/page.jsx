"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner"
import axios from 'axios';


const SignUp = () => {

    // imgBB hosting
    const imgHostingKey = process.env.NEXT_PUBLIC_IMG_HOSTING_KEY;
    const imgUploadUrl = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;


    // hooks
    const router = useRouter();
    const [selectedImageName, setSelectedImageName] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null);


    // image input and get the file name
    const handleImageInput = e => {
        e.preventDefault();
        const fileInput = e.target;
        if (fileInput.files.length > 0) {
            const file = { image: fileInput.files[0] }
            const fileName = fileInput.files[0].name;
            setSelectedImageName(fileName);
            setSelectedImage(file)
        }
        else {
            setSelectedImageName('')
        }
    }



    return (
        <div className="container mx-auto p-5 flex flex-col justify-center items-center min-h-screen relative">

            <Link href={"/"} className="absolute top-8 left-8 font-medium hover:font-semibold duration-300">Back to Home</Link>

            <div className="w-[40%] border-[1px] border-border flex flex-col justify-center items-center gap-8 py-14 rounded-[20px] shadow-border">
                <h1 className="text-2xl font-semibold text-foreground">Unlock a World of Connections!</h1>

                {/* registration form */}
                <form
                    className="w-full flex flex-col justify-center items-center gap-5">
                    {/* Full name */}
                    <input required type="text" name="name" id="name" placeholder="Full name" className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3" />

                    {/* Email */}
                    <input required type="email" name="email" id="email" placeholder="Email address" className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3" />

                    {/* Username */}
                    <input required type="text" name="userName" id="userName" placeholder="User name" className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3" />

                    {/* Password */}
                    <input required type="password" name="password" id="password" placeholder="Password" className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3" />

                    {/* image file input */}
                    <label
                        htmlFor="image"
                        className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3 flex justify-start items-center gap-2 text-[#979797]"
                    >
                        <Upload /> {selectedImageName.length > 25 ? selectedImageName.slice(0, 25) + "...." : selectedImageName || "Choose your profile picture"}
                        <input
                            type="file"
                            name="image"
                            id="image"
                            accept="image/*"
                            onChange={handleImageInput}
                            className="cursor-pointer opacity-0 absolute top-0 left-0 w-full" />
                    </label>

                    {/* Submit button */}
                    <input type="submit" value={"Sign Up"} className="bg-foreground text-background font-medium hover:bg-background hover:text-foreground duration-500 border-[1px] border-transparent px-4 py-2 rounded focus:outline-none hover:border-lightBlack cursor-pointer w-2/3" />

                    {/* Error message */}
                    <p className="text-left text-[red] text-[14px] font-medium">{error && error}</p>
                </form>

                <div className="flex justify-center items-center gap-2 text-lightBlack">
                    <p>Already have an account?</p>
                    <Link href={"/signIn"} className="hover:text-foreground font-medium hover:font-semibold duration-500">Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;