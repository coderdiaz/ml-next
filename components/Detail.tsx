import useSwr from 'swr';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { fetcher } from '@/lib/fetcher';
import { MLItemPayload } from '@/types/Item';

export default function Detail() {
  const router = useRouter();
  const id = router.query.id;

  const { data, error, isLoading } = useSwr<MLItemPayload>(
    id ? `/api/items/${id}` : null,
    fetcher,
  );

  if (isLoading) return <div />;
  if (error) return <div>Algo salio mal</div>;

  return data?.item ? (
    <div className="bg-white rounded overflow-hidden">
      <div className="flex">
        <div className="relative w-[42.5rem] h-[42.5rem] aspect-square flex-shrink-0 bg-gray-300">
          {data.item.picture && <Image src={data.item.picture} alt={data.item.title} fill /> }
        </div>
        <div className="p-8 flex flex-col space-y-[0.875rem]">
          <span className="text-xs">Nuevo - 234 vendidos</span>
          <div className="flex flex-col space-y-8">
            <h1 className="text-2xl">
              {data.item.title}
            </h1>
            <div className="col-span-1 flex space-x-2 items-center">
              <span className="text-[2.875rem] leading-none text-gray-500">
                $ {data.item.price.decimals}
              </span>
            </div>
            <button className="text-lg px-3 py-2 text-white bg-meli-secondary hover:bg-meli-secondary/90 rounded">
              Comprar
            </button>
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col space-y-8">
        <h2 className="text-[1.75rem]">
          Descripción del producto
        </h2>
        <p className="text-gray-300">{data.item.description}</p>
      </div>
    </div>
  ) : null;
}