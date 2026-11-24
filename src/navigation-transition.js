import { navigate } from 'gatsby';

// The original one-second wipe spent one sixth of its time fully covered.
const holdDuration = 1000 / 6;
const slideOptions = {
  duration: (1000 - holdDuration) / 2,
  easing: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  fill: 'forwards',
};

let activeSwipe;

export function revealPage() {
  activeSwipe?.routeRendered?.();
}

function slide(cover, from, to) {
  return cover.animate(
    [
      { transform: `translateX(${from}%)` },
      { transform: `translateX(${to}%)` },
    ],
    slideOptions,
  ).finished;
}

export async function swipeOnClick(event, to) {
  const currentPath = window.location.pathname.replace(/\/$/, '');
  const nextPath = event.currentTarget.pathname.replace(/\/$/, '');
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    currentPath === nextPath ||
    !document.documentElement.animate ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  event.preventDefault();
  if (activeSwipe) return;

  const cover = document.createElement('div');
  cover.className =
    'navigation-cover pointer-events-none fixed inset-0 z-[1200] surface-secondary [transform:translateX(100%)]';
  cover.setAttribute('aria-hidden', 'true');
  document.body.append(cover);

  const swipe = {};
  const from = window.location.href;
  let revealTimeout;
  activeSwipe = swipe;

  try {
    await slide(cover, 100, 0);
    if (window.location.href !== from) return;

    const covered = new Promise((resolve) => setTimeout(resolve, holdDuration));
    const destinationReady = new Promise((resolve) => {
      swipe.routeRendered = resolve;
      // Release the cover if a slow route never reaches Gatsby's update hook.
      revealTimeout = setTimeout(resolve, 2000);
    });
    navigate(to);

    await Promise.all([covered, destinationReady]);
    await slide(cover, 0, -100);
  } finally {
    clearTimeout(revealTimeout);
    cover.remove();
    activeSwipe = undefined;
  }
}
