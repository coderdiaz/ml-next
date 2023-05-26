import Breadcrumbs from '@/components/Breadcrumbs';
import Container from '@/components/Container';
import ItemList from '@/components/ItemList';

export default function ItemsList() {
  return (
    <section>
      <Container>
        <Breadcrumbs />
        <ItemList />
      </Container>
    </section>
  );
}