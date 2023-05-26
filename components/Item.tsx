import Image from 'next/image';
import { Item } from '@/types/Item';
import Shipping from '@/assets/images/shipping.png';
import Link from 'next/link';

export default function Item(props: Item) {
  return (
    <Link
      href={{
        pathname: '/items/[id]',
        query: { id: props.id },
      }}
      className="flex p-4 space-x-4 bg-white border-b border-gray-200 last:border-0"
    >
      <div className="relative flex flex-shrink-0 w-[11.25rem] h-[11.25rem] aspect-square overflow-hidden rounded">
        <Image className="object-contain" src={props.picture} alt={props.title} fill />
      </div>
      <div className="grid grid-cols-5 gap-4 w-full">
        <div className="col-span-4 flex flex-col space-y-8 flex-1 py-4">
          <div className="col-span-1 flex space-x-2 items-center">
            <span className="text-2xl leading-none text-gray-500">
              $ {props.price.decimals}
            </span>
            { props.free_shipping && <Image src={Shipping} width={18} height={18} alt="Free shipping" />} 
          </div>
          <p className="text-lg pr-56 text-gray-400">
            {props.title}
          </p>
        </div>
        <span className="col-span-1 block text-xs py-4 text-gray-400">
          Capital Federal
        </span>
      </div>
    </Link>
  )
}