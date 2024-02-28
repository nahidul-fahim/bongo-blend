import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

// connect to the database
connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log("Data from front end", reqBody);

        const { name, email, userName, password, userImage } = reqBody;

        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            console.log("User already exists in the database:", true)
            return NextResponse.json({
                status: 400,
                message: 'User already exists',
            })
        }

        // hash the user password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);


        // if existingUser is false, save the new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            userName,
            userImage
        })

        console.log("New user info here before database:", newUser)

        const savedUser = await newUser.save()
        console.log("User saved")

        return NextResponse.json({
            message: 'User created successfully!',
            success: true,
            savedUser
        })


    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}