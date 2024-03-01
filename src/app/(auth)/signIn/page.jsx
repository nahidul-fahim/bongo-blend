"use client"

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const SignIn = () => {



    // hooks
    const router = useRouter();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle sign in function
    const handleSignIn = async (e) => {
        e.preventDefault();
        // get data from the form
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            setError("Please provide all the credentials")
        }

        try {
            setLoading(true)

            const res = await signIn('credentials', {
                email: email,
                password: password,
                redirect: false,
                callbackUrl: process.env.NEXTAUTH_URL,
            })

            if (!res.ok) {
                setError("Failed! Please try again.")
            }

            if (res.error) {
                setError('Invalid credentials')
                setLoading(false);
                return
            }

            setLoading(false);
            router.replace('/')

        } catch (error) {
            setLoading(false)
            setError(error)
        }

    };



    return (
        <div className="container mx-auto p-5 flex flex-col justify-center items-center min-h-screen relative">

            <Link href={"/"} className="absolute top-8 left-8 font-medium hover:font-semibold duration-300">Back to Home</Link>

            <div className="w-[40%] border-[1px] border-border flex flex-col justify-center items-center gap-8 py-14 rounded-[20px] shadow-border">
                <h1 className="text-2xl font-semibold text-foreground">Welcome Back!</h1>

                {/* sign in form */}
                <form onSubmit={handleSignIn}
                    className="w-full flex flex-col justify-center items-center gap-5">

                    {/* Email */}
                    <input type="email" name="email" id="email" placeholder="Email address" className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3" />

                    {/* Password */}
                    <input type="password" name="password" id="password" placeholder="Password" className="border-[1px] px-4 py-2 rounded focus:outline-none focus:border-lightBlack w-2/3" />

                    {/* Submit button */}
                    <input disabled={loading === true} type="submit" value={"Sign In"} className="bg-foreground text-background font-medium hover:bg-background hover:text-foreground duration-500 border-[1px] border-transparent px-4 py-2 rounded focus:outline-none hover:border-lightBlack cursor-pointer w-2/3 disabled:bg-[#8b8b8b] disabled:cursor-not-allowed disabled:text-white disabled:border-[#ffffff00]" />

                    {/* Error message */}
                    <p className="text-left text-[red] text-[14px] font-medium">{error && error}</p>

                </form>

                <div className="flex justify-center items-center gap-2 text-lightBlack">
                    <p>{'Don\'t'} have an account?</p>
                    <Link href={"/signUp"} className="hover:text-foreground font-medium hover:font-semibold duration-500">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;