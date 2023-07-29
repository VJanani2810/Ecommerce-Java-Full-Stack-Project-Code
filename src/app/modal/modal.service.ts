import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
}
// jc add all undefined
export class User {
  id: number | undefined;
  username: string | undefined;
  password: string | undefined;
  address: string | undefined;
  admin: boolean | undefined;
  cardNumber: string | undefined;
  cvv: any;
  email: string | undefined;
  nameOnCard: string | undefined

}
export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  pictureUrl: string;
}
export interface Category {
  id:number,
  name: string
}
export interface Comment {
  id: number,
  addedAt: any,
  addedBy: string,
  message: string,
  title: string
}
export interface ReplayComment {
  id: number,
  addedAt: any,
  addedBy: string,
  messageReplay: string
}
export interface Order {
  id: number,
  dateCreated: any,
  status: any
}
export class ProductOrder {
  id: number | undefined;
  product: Product;
  quantity: number = 1;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity = 1;
  }
}
export class ProductOrders {
  productOrders: ProductOrder[] = [];
}
export interface Product {
  id: number,
  description: string,
  name: string,
  pictureUrl: string,
  price: number
}
export interface Tag {
  id: number,
  name: string,
  products: any
}
export class Item {
  name: string | undefined;
  value: string | undefined;
  price: number | undefined;
}
export class UpdateProduct {
  id: number | undefined;
  name: string | undefined;
  description!: string;
  price: number | undefined;
  pictureUrl: string | undefined;
}
export const ITEMS: Item[] = [
  {
    name: 'TakAway  ',
    value: 'item_1',
    price: 1.99
  },
  {
    name: 'Relay  ',
    value: 'item_2',
    price: 2.99
  },
  {
    name: 'Express  ',
    value: 'item_3',
    price: 3.99
  },
  {
    name: 'Direct  ',
    value: 'item_4',
    price: 4.99
  }
];