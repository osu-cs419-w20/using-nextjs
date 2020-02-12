import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';

const menu = {
  tacos: "https://media.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif",
  pizza: "https://media.giphy.com/media/VCDSo9xqCJOjC/giphy.gif",
  sushi: "https://media1.tenor.com/images/a7087e13ce68524779c9b6946818986b/tenor.gif"
};

function MenuItem() {
  const router = useRouter();
  const menuItem = router.query.item;
  return (
    <Layout>
      <h1>Menu Item: {menuItem}</h1>
      <p>router.pathname: {router.pathname}</p>
      <p>router.asPath: {router.asPath}</p>
      <div>
        <img src={menu[menuItem]} alt={menuItem} />
      </div>
    </Layout>
  )
}

export default MenuItem;
