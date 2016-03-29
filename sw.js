'use strict';

self.oninstall = function oninstall(event) {
  console.info('install Service Workers');
};

self.onactivate = function onactivate(event) {
  console.info('activate Service Workers');
};

self.onfetch = function onfetch(event) {
  console.info('fetch in Service Workers');
  console.info(event.request.url);

  if (!/\/api\/user\/item$/.test(event.request.url)) {
    return;
  }

  event.respondWith(
    new Response(
      new Blob([
        '{"id":1,"name":"Alice","city":"Tokyo"}'
      ], {
        type: 'application/json'
      })
    )
  );
};
