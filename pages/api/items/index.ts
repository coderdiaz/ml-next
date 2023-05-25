import { NextApiRequest, NextApiResponse } from 'next';
import { payloadDto } from '@/utils/dto/payload';
import { config } from '@/utils/constants';

const fetchItems = async (query: string) => {
  try {
    return await fetch(`${config.api.url}/sites/MLA/search?q=${query}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json());
  } catch (e) {
    console.error(e);
    throw new Error('Error fetching items from Mercado Libre API');
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(404);

  try {
    const data = await fetchItems(req.query.q as string);
    const payload = payloadDto(data); // Transform data to DTO to avoid exposing internal data structure

    return res.json(payload);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}