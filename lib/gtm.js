export const GA_TRACKING_ID_DIGITALLAB = 'GTM-KB7XC3G';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
