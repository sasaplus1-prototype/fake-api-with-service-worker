(function(){

  'use strict';

  var registration;

  window.addEventListener('unload', function() {
    if (!registration) {
      return;
    }

    registration
      .unregister()
      .then(function() {
        console.log('unregistered');
        registration = null;
      })
      .catch(function(err) {
        console.error(err);
      });
  }, false);

  navigator
    .serviceWorker
    .register('./sw.js')
    .then(function(r) {
      console.log('registered');
      registration = r;
    })
    .catch(function(err) {
      console.error(err);
    });

  //----------------------------------------------------------------------------

  var button = document.getElementById('js-request');

  button.addEventListener('click', function(event) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(
          JSON.stringify(
            JSON.parse(xhr.responseText), null, 2
          )
        );
      }
    };
    xhr.open('GET', './api/user/item');
    xhr.send(null);
  }, false);

}());
