$(document).ready(function() {
  mixpanel.track_links("#order-plus", "Clicked Order Plus", {
    "referrer": document.referrer
  });

  mixpanel.track_links("#order-standard", "Clicked Order Standard", {
    "referrer": document.referrer
  });

  mixpanel.track_links("#order-basic", "Clicked Order Basic", {
    "referrer": document.referrer
  });

  mixpanel.track_links("#dl-partial", "Clicked download partial", {
    "referrer": document.referrer
  });

  mixpanel.track_links("#dl-partial-sm", "Clicked sm download partial", {
    "referrer": document.referrer
  });
});
