import { MenuItemEnum } from "../enums/menu-item-enum";
export interface MenuItem {
    title:String;
    link:String;
    classname:String;
    abcd?:MenuItemEnum.propertyA
}
