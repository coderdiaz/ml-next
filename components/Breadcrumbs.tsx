import Image from 'next/image';
import ChevronRight from '@/assets/svg/chevron-right.svg'

export default function Breadcrumbs() {
  return (
    <div className="flex items-center space-x-2 py-4 text-sm">
      <a href="#" className="text-gray-300">Electrónica, Audio y Video</a>
      <span>
        <Image width={6} height={8} src={ChevronRight} alt="Next to" />
      </span>
      <a href="#" className="text-gray-300">iPod</a>
      <span>
        <Image width={6} height={8} src={ChevronRight} alt="Next to" />
      </span>
      <a href="#" className="text-gray-300">Reproductores</a>
      <span>
        <Image width={6} height={8} src={ChevronRight} alt="Next to" />
      </span>
      <a href="#" className="text-gray-300">iPod Touch</a>
      <span>
        <Image width={6} height={8} src={ChevronRight} alt="Next to" />
      </span>
      <a href="#" className="text-gray-400 font-semibold">32 GB</a>
    </div>
  )
}