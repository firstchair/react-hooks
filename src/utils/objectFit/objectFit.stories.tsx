/* eslint-disable react/no-multi-comp */
import { type ReactElement, useCallback, useRef } from 'react';
import { useResizeObserver } from '../../hooks/useResizeObserver/useResizeObserver.js';
import { contain, cover } from './objectFit.js';

export default {
  title: 'utils/objectFit',
};

export function Contain(): ReactElement {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLImageElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const onResize = useCallback(() => {
    if (!parentRef.current || !childRef.current || !infoRef.current) {
      return;
    }

    const objectFit = contain(parentRef.current.offsetWidth, parentRef.current.offsetHeight, 1, 1);
    childRef.current.style.cssText += objectFit.cssText;

    infoRef.current.innerHTML = JSON.stringify(objectFit);
  }, [parentRef, childRef, infoRef]);

  useResizeObserver(parentRef, onResize);

  return (
    <div style={{ display: 'grid', placeItems: 'center', height: 'calc(100vh - 2rem)' }}>
      <div
        ref={parentRef}
        style={{
          width: '200px',
          height: '200px',
          outline: '1px solid green',
          position: 'relative',
          resize: 'both',
          overflow: 'auto',
        }}
      >
        <img
          ref={childRef}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAAQ4CAIAAABjcvvYAAAb3ElEQVR4nO3dXW9UBdeAYUAoKAYCiChCEGIREQhQ/APG+Kc988REC4hKESsaDJ8RihCCQkvnOTDpO29RvoT27nBdR8yaPZN11rnZM3uvnpmZWQUAAFCyZrkXAAAAWEyoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAc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coQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAAByhAoAAJAjVAAAgByhAgAA5AgVAAAgR6gAAAA5QgUAAMgRKgAAQI5QAQAAcoQKAACQI1QAAIAcoQIAAOQIFQAAIEeoAAAAOUIFAADIESoAAECOUAEAAHKECgAAkCNUAACAHKECAADkCBUAACBHqAAAADlCBQAAyBEqAABAjlABAABy/gdmrBeq8/cywgAAAABJRU5ErkJggg=="
          alt=""
          style={{ position: 'relative' }}
        />
      </div>
      <div ref={infoRef} style={{ position: 'absolute', bottom: 0, wordBreak: 'break-all' }} />
    </div>
  );
}

export function Cover(): ReactElement {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLImageElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLImageElement>(null);

  const onResize = useCallback(() => {
    if (!parentRef.current || !childRef.current || !infoRef.current || !demoRef.current) {
      return;
    }

    const objectFit = cover(
      parentRef.current.offsetWidth,
      parentRef.current.offsetHeight,
      childRef.current.naturalWidth,
      childRef.current.naturalHeight,
    );
    childRef.current.style.cssText += objectFit.cssText;

    infoRef.current.innerHTML = JSON.stringify(objectFit);
    // Using a second image to show the overflowing from the child element on the parent element because the css resize property doesn't allow overflowing.
    const size = childRef.current.getBoundingClientRect();
    demoRef.current.style.cssText += `left:${size.left}px;width:${size.width}px;height:${size.height}px;`;
  }, [parentRef, childRef, infoRef]);

  useResizeObserver(parentRef, onResize);

  const dataUri =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAQ4CAIAAABnsVYUAAAszUlEQVR4nO3d21NV5/3H8b05uDeo4AHcKh4CajUiSWNr7enCNpP+Af1Pc9XOdDJNp/VQk0yamKqNh1YNoGgQAeW42b8LZ/itwSoo+xO1vF5XPA9rrf3lznnP8tnl8fHxEgAAAAAANFvL6x4AAAAAAID/TQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABECNAAAAAAAEQI0AAAAAAARAjQAAAAAABFtr3sAAABYl3q9/qc//enJkyelUun48ePHjh175Uc9ePDg7t274+Pj09PTCwsLjUZj06ZNHR0dO3furNVqtVqteVM/1+Li4r179+7du/fw4cO5ubn5+fnW1tZKpdLd3d3T07Nv375KpfIDjAEAAE1RHh8ff90zAADAq7t06dK1a9ee/vzKAXp4ePjy5ctTU1MvuKarq2toaCiXoev1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7m7uGAAA0HSO4AAAYEPr6en56KOPrl69evPmzXq9/rzLyuXy3r17T5w4sXnz5sQYe/fu/fDDD7/66qu7d+++4LJqtXrs2LH+/v6XfWMaAABeCwEaAICNrr29fWho6NixYyMjI2NjY48ePZqZmVlcXGxpaalUKlu3bu3t7e3r6wul52WbN2/+5S9/OTk5OTw8/ODBg+np6fn5+Uaj0d7e3tnZuWPHjlqtVqvVpGcAAN4i5fHx8dc9AwAAAAAA/4OcAQ0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQIQADQAAAABAhAANAAAAAECEAA0AAAAAQMT/AZN1LTqqap2hAAAAAElFTkSuQmCC';
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: 'calc(100vh - 2rem)' }}>
      <div
        ref={parentRef}
        style={{
          width: '200px',
          height: '200px',
          outline: '1px solid green',
          position: 'relative',
          resize: 'both',
          overflow: 'hidden',
        }}
      >
        <img ref={childRef} src={dataUri} alt="" style={{ position: 'absolute' }} />
      </div>
      <div ref={infoRef} style={{ position: 'absolute', bottom: 0, wordBreak: 'break-all' }} />
      <img ref={demoRef} style={{ position: 'absolute', zIndex: -1 }} src={dataUri} alt="" />
    </div>
  );
}