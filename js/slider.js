$(document).ready(function (){

    function init(item) {
      let items = item.querySelectorAll('li'),
      current = 0,
      autoUpdate = true,
      timeTrans = 5000,
      timer;

      //create nav
      let arrows_toggle = document.createElement('arrows_toggle');
      arrows_toggle.className = 'nav_arrows';
  
      //create button prev
      let prevbtn = document.createElement('button');
      prevbtn.className = 'prev';

  
      //create button next
      let nextbtn = document.createElement('button');
      nextbtn.className = 'next';

  
      //create counter
      let counter = document.createElement('div');
      counter.className = 'counter';
      counter.innerHTML = "<span>1</span><span>" + items.length + "</span>";
  
      if (items.length > 1) {
        arrows_toggle.appendChild(prevbtn);
        arrows_toggle.appendChild(counter);
        arrows_toggle.appendChild(nextbtn);
        item.appendChild(arrows_toggle);
      }
  
      items[current].className = "current";
      if (items.length > 1) items[items.length - 1].className = "prev_slide";
  
      let navigate = function (dir) {
        clearInterval(timer);
        items[current].className = "";
  
        if (dir === 'right') {
          current = current < items.length - 1 ? current + 1 : 0;
        } else {
          current = current > 0 ? current - 1 : items.length - 1;
        }
  
        let nextCurrent = current < items.length - 1 ? current + 1 : 0,
        prevCurrent = current > 0 ? current - 1 : items.length - 1;
  
        items[current].className = "current";
        items[prevCurrent].className = "prev_slide";
        items[nextCurrent].className = "";
  
        //update counter
        counter.firstChild.textContent = current + 1;
        if (autoUpdate) {
          timer = setInterval(function () {
            navigate('right');
          }, timeTrans);
        }
      };
  
      timer = setInterval(function () {
        if (autoUpdate) 
          navigate('right');
      }, timeTrans);
      
  
      prevbtn.addEventListener('click', function () {
        navigate('left');
      });
  
      nextbtn.addEventListener('click', function () {
        navigate('right');
      });

  }
  
    [].slice.call(document.querySelectorAll('.cd-slider')).forEach(function (item) {
      init(item);
    });
  
  });
  