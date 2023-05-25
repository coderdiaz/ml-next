import { NextApiRequest, NextApiResponse } from 'next';
import { itemDto } from '@/utils/dto/item';
import { config } from '@/utils/constants';

const fetchItem = async (id: string) => {
  try {
    return await fetch(`${config.api.url}/items/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json());
  } catch (e) {
    console.error(e);
    throw new Error('Error fetching the item from Mercado Libre API');
  }
}

const fetchItemDescription = async (id: string) => {
  try {
    return await fetch(`${config.api.url}/items/${id}/description`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json());
  } catch (e) {
    console.error(e);
    throw new Error('Error fetching the item from Mercado Libre API');
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(404);
  const { id } = req.query;

  try {
    const item = await fetchItem(id as string);
    if (!item) return res.status(404).json({ message: 'Item not found' });

    const itemDescription = await fetchItemDescription(id as string);
    const parsedItem = itemDto(item, itemDescription);

    return res.json(parsedItem);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}