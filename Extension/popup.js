
function loadUrls() {
    var urls = document.getElementById('urls').value.split('\n');
      for(var i=0; i<urls.length; i++){
        cleanUrl = urls[i].replace(/\s/g, '');
        if(cleanUrl != '') {
           chrome.tabs.create({"url": cleanUrl, "selected": false}); 
        }
        else {
           document.getElementById('urls').innerHTML = "No value specified";
        }
      }
  }
  

  function saveUrls() {
      var urls = document.getElementById('urls').value.split('\n');
      var urlsContainer = "";
      for (i=0; i<urls.length; i++) {
  
  
        // if the user input valid urls, save it in local chrome storage
        if(urls[i] != ' ') {
           
           urlsContainer += urls[i] + '\n';
           localStorage['urls'] = urlsContainer;
  
        }
      }
   }
    
  
  document.addEventListener('DOMContentLoaded', function () {
  // add an event listener to load url when button is clicked
    document.getElementById('button').addEventListener('click', loadUrls);
    // add an event listener to save url when button is clicked
    document.getElementById('button').addEventListener('click', saveUrls);
       // reload the urls in the browser
      var urls = localStorage['urls'];
      if (!urls) {
        return;
      }
      document.getElementById('urls').value = urls;
  
  
  });
  