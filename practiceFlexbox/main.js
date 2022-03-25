document.querySelector('button').addEventListener('click', function () {
    document.querySelector('main')
            .appendChild(document.querySelector('p').cloneNode(true));
  }, false);
  
  document.querySelectorAll('button')[1].addEventListener('click', function () {
    if (document.querySelectorAll('p')[1]) {
      document.querySelector('p').remove();
    }
            
  }, false);