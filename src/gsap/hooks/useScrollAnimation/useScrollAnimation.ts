import gsap from 'gsap';
// eslint-disable-next-line @typescript-eslint/naming-convention
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, type RefObject } from 'react';
import { animations } from '../../animations.js';
import { useAnimation } from '../useAnimation/useAnimation.js';
import { useExposeAnimation } from '../useExposeAnimation/useExposeAnimation.js';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook to create animation that make use of ScrollTrigger, ScrollTrigger is refreshed
 * when the global animations map is updated.
 *
 * Note: do not scrub a React component's root because React won't know what element to
 * unmount when the component with a pinned animation is removed from the vDOM.
 */
export function useScrollAnimation<T extends gsap.core.Animation>(
  callback: () => T | undefined,
  dependencies: ReadonlyArray<unknown>,
): RefObject<T | undefined> {
  const animation = useAnimation(callback, dependencies);

  // Expose animation so that we can leverage the listener from the global animations map
  const ref = useRef(Symbol('useScrollAnimation'));
  useExposeAnimation(animation, ref);

  useEffect(
    () =>
      animations.listen(() => {
        ScrollTrigger.refresh();
      }),
    [],
  );

  return animation;
}
