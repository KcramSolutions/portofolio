export function scrollToTop(scrollDuration = 600) {
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    
    var scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

export function scrollToElement(element, scrollDuration = 300) {
    var targetPosition = element.getBoundingClientRect().top + window.scrollY;
    var startingPosition = window.scrollY;
    var startTime = null;
  
    function scrollStep(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var percentage = Math.min(progress / scrollDuration, 1);
  
      window.scrollTo(0, startingPosition + (targetPosition - startingPosition) * percentage);
  
      if (progress < scrollDuration) {
        requestAnimationFrame(scrollStep);
      }
    }
  
    requestAnimationFrame(scrollStep);
  }