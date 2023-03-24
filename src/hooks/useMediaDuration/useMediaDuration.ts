import { type MutableRefObject, useCallback, useEffect, useState } from 'react';

/**
 * Retrieves the duration of the audio / video file in seconds.
 */
export function useMediaDuration(
  mediaElementRef: MutableRefObject<Pick<
    HTMLAudioElement,
    'addEventListener' | 'removeEventListener' | 'duration'
  > | null>,
): number {
  const [mediaDuration, setMediaDuration] = useState<number>(Number.NaN);

  const updateDuration = useCallback(() => {
    setMediaDuration(mediaElementRef.current?.duration ?? Number.NaN);
  }, [mediaElementRef]);

  useEffect(() => {
    const mediaElement = mediaElementRef.current;
    mediaElement?.addEventListener('durationchange', updateDuration);
    // metadata could have been loaded before listener is attached
    updateDuration();

    return () => {
      mediaElement?.removeEventListener('durationchange', updateDuration);
    };
  }, [mediaElementRef, updateDuration]);

  return mediaDuration;
}
