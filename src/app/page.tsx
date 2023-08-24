import Image from 'next/image';
import Counter from '@/compontents/Counter';
export default function Home() {
  return (
    <div className="">
      <Image
        alt="Random image"
        src="https://i.imgur.com/MK3eW3As.jpg"
        width={640}
        height={480}
        style={{
          maxWidth: '100%',
          height: '200px',
          objectFit: 'cover'
        }}
      />
      <Image
        alt="Random image"
        src="https://source.unsplash.com/random"
        width={640}
        height={480}
        style={{
          maxWidth: '100%',
          height: '200px',
          objectFit: 'cover'
        }}
      />
      <Counter></Counter>
    </div>
  );
}
