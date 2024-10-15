
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
  
      const titles = ('CHÚC CÁC BẠN NỮ 20/10 VUI VẺ').split('')
      const titleElement = document.getElementById('title');
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerHTML += titles[index];
          index++;
          setTimeout(appendTitle, 300); // 1000ms delay
        }
      }
  
      appendTitle();
  
      clearTimeout(c);
    }, 1000);
  };