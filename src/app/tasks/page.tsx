import Link from 'next/link';
import http from '@/api/http';
import Head from 'next/head';
export const metadata = {
  title: 'test',
  description: 'Next.js App Router + Material UI v5'
};

export default async function Tasks() {
  const res = await http.get(
    `http://rap.chain.gs:38080/app/mock/20/api/v2/search_token/%7B$token_symbol%7D`
  );
  const data = res.data.list;
  console.log('🚀 ~ file: page.tsx:9 ~ Tasks ~ data:', data);
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>{data.length}</div>
      {data.length > 0 &&
        data.map((item: any) => {
          return (
            <li key={item.id}>
              <Link key={item.id} href={`/tasks/${item.id}`}>
                {item.token_symbol}
              </Link>
            </li>
          );
        })}
      <Link href={`/tasks/ddd`}>跳转</Link>
    </div>
  );
}
