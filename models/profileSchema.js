import mongoose from "mongoose"

const ProfileSchema = new mongoose.Schema(
{
    displayName : {
        type : String,
        required : [true,"Display Name wajib diisi"]
    },
    profilePicture: {
        type: String,
        required :[true,"Profile picture wajib diisi"]
    },
    bio :{
        type : String,
        minLength : [10,"minimal 10 karakter"],
        maxLength : [150,"maksimal 150 karakter"],
        required : [true,"Bio wajib diisi"],
        trim : true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true,
    }
},
    {
        timestamps:true
    }
)

const profileModel = mongoose.Model("Profile", ProfileSchema)

export default ProfileModel