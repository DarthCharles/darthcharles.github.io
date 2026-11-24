exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: 'en',
    'data-theme': 'workbench',
    'data-color-scheme': 'dark',
  });
};
