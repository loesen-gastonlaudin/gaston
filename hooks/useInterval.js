import { useEffect, useState } from 'react';

export default function useInterval() {
  const interval = 3000;
  const [reload, setReload] = useState(false);

  const savedCallback = async () => {
    const response = await fetch('/api/build-id');
    const { buildId } = await response.json();

    console.log(buildId);

    if (
      buildId &&
      process.env.NEXT_PUBLIC_BUILD_ID &&
      buildId !== process.env.NEXT_PUBLIC_BUILD_ID
    ) {
      setReload(true);
    } else {
    }
  };

  useEffect(() => {
    if (interval !== null) {
      const id = setInterval(savedCallback, interval);

      return () => clearInterval(id);
    }
  }, []);

  return [reload];
}
