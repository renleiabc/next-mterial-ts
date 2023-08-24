'use client';

import { decrement, increment, reset } from '@/store/profileSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <div
      style={{ marginBottom: '4rem', textAlign: 'center', height: '2000px' }}
    >
      <h4 style={{ marginBottom: 16 }}>{count}</h4>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginInline: 16 }}
      >
        decrement
      </button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}
