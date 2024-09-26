import { Schema } from "mongoose";

const UserSchema = new Schema({
    clerkId: { type: String ,required: true, unique: true },
    email:{ type: String ,required: true, unique: true},
    username:{ type: String ,required: true, unique: true},
    fisrtName:{ type: String ,required: true},
    lastName:{ type: String, required: true},
    
    
})