import { SyntheticEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Search from '@/assets/images/search.png';

export default function Searchbox() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const { q } = router.query;
    if (q) setQuery(q.toString());
  }, [router]);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/items?q=${query.trim()}`);
  }

  return (
    <form className="relative flex items-center flex-1 w-full" onSubmit={onSubmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-full bg-white px-3 py-2 rounded-tl rounded-bl focus:outline-none"
        type="text"
        placeholder="Nunca dejes de buscar"
      />
      <button className="bg-gray-200 p-3 rounded-tr rounded-br" type="submit">
        <Image width={18} height={18} src={Search} alt="Search Icon" />
      </button>
    </form>
  );
}