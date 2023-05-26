type Author = {
  name: string;
  lastname: string;
}

type Price = {
  currency: string;
  amount: number;
  decimals: string;
}

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
}

export type MLItemsPayload = {
  author: Author;
  categories: string[];
  items: Item[];
}

export type MLItemPayload = {
  author: Author;
  item: Item;
}