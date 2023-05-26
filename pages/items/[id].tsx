import Breadcrumbs from '@/components/Breadcrumbs';
import Container from '@/components/Container';
import Detail from '@/components/Detail';

export default function ItemDetailPage() {
  return (
    <section>
      <Container>
        <Breadcrumbs />
        <Detail />
      </Container>
    </section>
  );
}