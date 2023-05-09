import { useEffect, useState } from 'react';
import { version } from '../config/version';

export default function useInterval() {
  const interval = 3000;
  const [reload, setReload] = useState(false);

  const savedCallback = async () => {
    const response = await fetch('/api/build-id');
    const { buildId } = await response.json();

    console.log(buildId);

    if (buildId && version && buildId !== version) {
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
