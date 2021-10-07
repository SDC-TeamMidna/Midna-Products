/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep, check } from 'k6';

export default () => {
  const domain = 'http://localhost:80/products';

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
  sleep(1);

  const related = http.get(`${domain}/${id}/related`);
  check(related, {
    'Related Status 200': (response) => response.status === 200,
  });
  sleep(1);
};
