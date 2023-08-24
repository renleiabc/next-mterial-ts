export default function Page({
  params
}: {
  params: { slug: string | number };
}) {
  console.log('🚀 ~ file: page.tsx:2 ~ Page ~ params:', params.slug);
  return <div>My Page{params.slug}</div>;
}
