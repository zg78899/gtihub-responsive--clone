(function  (window,document){

  const $toggles = document.querySelectorAll('.toggle');//nodeList(유사 배열객체)
  const $toggleBtn =document.getElementById('toggle-btn');
  const $signIn = document.querySelector('.sign-in')
  const $signUp = document.querySelector('.sign-up');


  $toggleBtn.addEventListener('click',()=>{
  toggleElement();
  });
  $signIn.addEventListener('click',()=>{
  offElement();
  });
  $signUp.addEventListener('click',()=>{
  offElement();
  });
  window.addEventListener('resize',()=>{
    if(window,innerWidth >1024){
      offElement();
    }
  });
  function toggleElement(){
    [].forEach.call($toggles,(toggle)=>{
      toggle.classList.toggle('on');
    });
  }
  function offElement(){
    [].forEach.call($toggles,(toggle)=>{
      toggle.classList.remove('on');
    });
  }
})(window,document);
