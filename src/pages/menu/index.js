import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';

function Menu() {
  const router = useRouter();
  return (
    <Layout>
      <h1>Menu</h1>
      <div>
        <Link
          href={`${router.pathname}/[item]`}
          as={`${router.asPath}/tacos`}
        >
          <a>Tacos</a>
        </Link>
      </div>
      <div>
        <Link
          href={`${router.pathname}/[item]`}
          as={`${router.asPath}/pizza`}
        >
          <a>Pizza</a>
        </Link>
      </div>
      <div>
        <Link
          href={`${router.pathname}/[item]`}
          as={`${router.asPath}/sushi`}
        >
          <a>Sushi</a>
        </Link>
      </div>

    </Layout>
  );
}

export default Menu;
