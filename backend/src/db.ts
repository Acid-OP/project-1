import mongoose , {model , Schema} from "mongoose";

mongoose.connect("");

const ClientSchema = new Schema({
    email: {type: String , unique:true},
    password: String
})

export const ClientModel = model("Client",ClientSchema);

const DataSchema = new Schema({
    username: String,
    avatar: String,
    roomId : String
})

export const DataModel = model("Data",DataSchema);