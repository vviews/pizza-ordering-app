import mongoose from "mongoose";
import {Order} from "@/models/Order";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";

export async function POST(req) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    console.log(data)
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    const order = await Order.create({userEmail: userEmail, ...data});
    return Response.json(order)
}

    // userEmail: String,
//   phone: String,
//   streetAddress: String,
//   postalCode: String,
//   city: String,
//   country: String,
//   cartProducts: Object,
//   paid: {type: Boolean, default: false},