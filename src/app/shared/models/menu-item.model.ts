export interface MenuItem {
    itemText: string;
    itemName: string;
    routerLink: string;
    fragment?: string;
    innerItems?: MenuItem[];
}
