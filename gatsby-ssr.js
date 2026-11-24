const React = require('react');
const { googleTagSnippet } = require('./src/analytics');

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({
    lang: 'en',
    'data-theme': 'workbench',
    'data-color-scheme': 'dark',
  });

  if (process.env.NODE_ENV === 'production') {
    setHeadComponents([
      React.createElement('script', {
        key: 'google-tag',
        dangerouslySetInnerHTML: { __html: googleTagSnippet },
      }),
    ]);
  }
};
