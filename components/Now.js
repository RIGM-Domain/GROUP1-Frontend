'use client';
import { useEffect, useState } from 'react';

export default function Now() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
  }, []);

  return <div>{now}</div>;
}