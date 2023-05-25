import { MLItemsPayload } from '@/types/Item';

export const payloadDto = (data: any): MLItemsPayload => {
  const results = data.results;
  const available_filters = data.available_filters;

  // Finding categories
  const categories = available_filters.find(filter => filter.id === 'category');

  return {
    author: {
      name: 'Javier',
      lastname: 'Diaz Chamorro'
    },
    categories: categories?.values?.map(category => category.name) ?? [],
    items: results.map(item => ({
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
    })),
  };
}