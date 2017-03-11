var clickLink = function() {
  if (document.querySelectorAll('[onclick="SST.vote_for(widget_56738713, 150972004, this); return false;"]').length > 0) {
    document.querySelector('[onclick="SST.vote_for(widget_56738713, 150972004, this); return false;"]').click();
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/,     "=;expires=" + new Date().toUTCString() + ";path=/"); });
    location.reload();       
  }
}

// Run click function every second, until it clicks it.
var waitAndClick = setInterval(clickLink, 2000);
