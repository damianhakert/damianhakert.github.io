// Track main navbar links
mixpanel.track_links("#main-gl-nav a", "click nav link", {
  "referrer": document.referrer
});

mixpanel.track_links("#landing-cta a", "click landing page CTA link", {
  "referrer": document.referrer
});
