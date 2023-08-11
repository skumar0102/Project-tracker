import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    role: {type:String},
    item : {type:Array}
});

export default new mongoose.model("Menu",MenuSchema);