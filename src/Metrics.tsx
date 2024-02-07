import { useEffect, useState } from 'react';

const Metrics = () => {
  const [timing, setTiming] = useState<PerformanceTiming | null>(null);

  useEffect(() => {
    setTiming(window.performance.timing);
  }, []);

  return timing ? (
    <div>
      <h4>Navigation Timing API</h4>
      <p>navigationStart: {timing.navigationStart}</p>
      {/* <p>redirectStart: {timing.redirectStart}</p> */}
      {/* <p>unloadStart: {timing.unloadEventStart}</p> */}
      {/* <p>unloadEnd: {timing.unloadEventEnd}</p> */}
      {/* <p>unloadEnd: {timing.unloadEventEnd}</p> */}
      {/* <p>redirectEnd: {timing.redirectEnd}</p> */}
      {/* <p>fetchStart: {timing.fetchStart}</p> */}
      {/* <p>domainLookupStart: {timing.domainLookupStart}</p> */}
      {/* <p>domainLookupEnd: {timing.domainLookupEnd}</p> */}
      {/* <p>connectStart: {timing.connectStart}</p> */}
      {/* <p>secureConnectionStart: {timing.secureConnectionStart}</p> */}
      {/* <p>connectEnd: {timing.connectEnd}</p> */}
      {/* <p>requestStart: {timing.requestStart}</p> */}
      {/* <p>responseStart: {timing.responseStart}</p> */}
      {/* <p>responseEnd: {timing.responseEnd}</p> */}
      <p>domLoading: {timing.domLoading}</p>
      <p>domInteractive: {timing.domInteractive}</p>
      {/* <p>domContentLoadedStart: {timing.domContentLoadedEventStart}</p> */}
      <p>domContentLoaded: {timing.domContentLoadedEventEnd}</p>
      <p>domComplete: {timing.domComplete}</p>
      {/* <p>loadEventStart: {timing.loadEventStart}</p> */}
      {/* <p>loadEventEnd: {timing.loadEventEnd}</p> */}
      <p>ページの総ロード時間：{timing.domComplete - timing.navigationStart}</p>
      <p>
        ページがロードされたとユーザーが体感する時間：
        {timing.domInteractive - timing.navigationStart}
      </p>
    </div>
  ) : null;
};

export default Metrics;
