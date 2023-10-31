import CatalogItem from './components/CatalogItem';
import { fetchCarrotById } from '../../api/carrots.api';
import { useLoaderData } from 'react-router-dom';

const CatalogItemDetailPage = () => {
  const data = useLoaderData();

  return (
    <CatalogItem item={data}/>
  )
};

export default CatalogItemDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.catalogItemId;

  return await fetchCarrotById(id);
}