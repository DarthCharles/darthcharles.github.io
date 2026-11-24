const publicHostname = 'darthcharles.github.io';
const measurementId = 'G-2L4MQ0F29Q';

function loadGoogleTag(hostname, id) {
  if (window.location.hostname !== hostname) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id);

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(script);
}

exports.googleTagSnippet = `(${loadGoogleTag})(${JSON.stringify(publicHostname)}, ${JSON.stringify(measurementId)});`;

exports.trackAnalyticsEvent = function trackAnalyticsEvent(eventName) {
  if (window.location.hostname === publicHostname) {
    window.gtag?.('event', eventName);
  }
};
