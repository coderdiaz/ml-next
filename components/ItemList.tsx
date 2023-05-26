import useSwr from 'swr';
import { useRouter } from 'next/router';
import { fetcher } from '@/lib/fetcher';
import Item from '@/components/Item';
import { MLItemsPayload } from '@/types/Item';

export default function ItemList() {
  const router = useRouter();
  const q = router.query.q;

  const { data, error, isLoading } = useSwr<MLItemsPayload>(
    q ? `/api/items?q=${q}` : null,
    fetcher
  );

  if (isLoading) return <div />;
  if (error) return <div>Algo salio mal</div>;

  return (
    <div className="flex flex-col">
      { data?.items.map(item => <Item key={item.id} {...item} />)}
    </div>
  )
}