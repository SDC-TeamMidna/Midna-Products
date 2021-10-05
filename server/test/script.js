import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
  const domain = 'http://localhost:3001/products';

  const id = Math.floor(Math.random() + 100000 + 900000);

  const products = http.get(domain);
  check(products, {
    'Products Status 200': (response) => response.status === 200,
  });
  sleep(1);

  const features = http.get(`${domain}/${id}`);
  check(features, {
    'Features Status 200': (response) => response.status === 200,
  });
  sleep(1);

  const styles = http.get(`${domain}/${id}`);
  check(styles, {
    'Styles Status 200': (response) => response.status === 200,
  });
}
