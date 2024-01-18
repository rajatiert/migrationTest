import { Menu } from "../models/menu.js";
import { idsArray } from "../constant/constant.js";
import mongoose from "mongoose";
import { Menuitem } from "../models/menuItem.js";

export const addMenu = async ()=>{
    const currMenu = await new Menu({
        day:"Friday",
        itemsLinked:idsArray
    });
    currMenu.save();
}

export const getMenuIds  = async(req , res)=>{

    try{

        const menu  = await Menu.find({});
        const allItem = await Menuitem.find({});

        const linkedItemIds = menu[0].itemsLinked;
        const filteredItems = allItem.filter(item => linkedItemIds.includes(item._id.toString()));
      
        return res.status(200).json(filteredItems);

    }catch(error)
    {
        return res.status(500).json({"msg":error?.message});
    }

}