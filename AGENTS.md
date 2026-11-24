# Repository guidance

## Analytics

- The portfolio uses Google Analytics 4 on `darthcharles.github.io`. Gatsby injects the Google tag in production builds through `gatsby-ssr.js`, and `src/analytics.js` limits it to the public hostname.
- Use the existing `trackAnalyticsEvent` helper in `src/analytics.js` when adding on-site event tracking.
