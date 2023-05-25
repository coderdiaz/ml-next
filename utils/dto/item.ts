import { MLItemPayload } from '@/types/Item';

export const itemDto = (item, itemDescription): MLItemPayload => {
  return {
    author: {
      name: 'Javier',
      lastname: 'Diaz Chamorro'
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: (Number(item.price) / 100).toFixed(2),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      description: itemDescription.plain_text,
    }
  };
}