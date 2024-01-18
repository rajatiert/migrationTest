import mongoose from "mongoose";

const MenuSchema = mongoose.Schema({
    day:String,
    itemsLinked:[String]
})


export const Menu = mongoose.model('menu',MenuSchema);