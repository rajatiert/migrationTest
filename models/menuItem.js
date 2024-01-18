import mongoose from "mongoose";
const menuItem = mongoose.Schema({
    description:String,
    name:String,
    photo:String,
    price:String,
    restaurantName:String,
    veg:Boolean
});

export const Menuitem = mongoose.model('menuItem',menuItem);