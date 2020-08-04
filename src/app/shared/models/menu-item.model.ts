export interface MenuItem {
    itemText: string;
    itemName: string;
    routerLink: string;
    innerItems?: MenuItem[];
}
