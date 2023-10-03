import React, { useCallback, useEffect, useState } from 'react';
import { version } from '../config/version';

export default function useInterval() {
  const buildIdRef = React.useRef(null);
  const interval = 3000;
  const [shouldReload, setShouldReload] = React.useState(false);

  useEffect(() => {
    // I found there is a  __NEXT_DATA__ IDed script tag
    // It contains JSON that includes buildId
    buildIdRef.current = JSON.parse(
      document.querySelector('#__NEXT_DATA__').textContent
    ).buildId;

    // check if the buildId path exists
    const id = setInterval(() => {
      const request = new XMLHttpRequest();
      request.open(
        'HEAD',
        `/_next/static/${buildIdRef.current}/_buildManifest.js`,
        false
      );
      request.setRequestHeader('Pragma', 'no-cache');
      request.setRequestHeader('Cache-Control', 'no-cache');
      request.setRequestHeader(
        'If-Modified-Since',
        'Thu, 01 Jun 1970 00:00:00 GMT'
      );
      request.send(null);
      console.log(request.status);
      setShouldReload(request.status === 404);
    }, interval);

    return () => {
      clearInterval(id);
    };
  }, []);

  return [shouldReload];
}
