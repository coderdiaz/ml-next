import Image from 'next/image';
import Logo from '@/assets/images/logo.png';
import Container from './Container';
import Searchbox from './Searchbox';

export default function Header() {
  return (
    <header className="bg-meli-primary py-2">
      <Container>
        <div className="flex justify-between items-center space-x-7">
          <div className="relative">
            <Image width={53} height={36} src={Logo} alt="Mercado Libre" />
          </div>
          <Searchbox />
        </div>
      </Container>
    </header>
  );
}