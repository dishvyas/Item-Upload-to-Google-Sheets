export class Note {

  id: number;
  itemname: string;
  quantity: number;
  price: number;

  toArray(): Array<any> {
      return [this.itemname, this.quantity, this.price];
  }
}
