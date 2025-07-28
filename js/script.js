"use strict"
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length>0){
  menuLinks.forEach(menuLinks=>{
    menuLinks.addEventListener("click", onMenu);
  });
  function onMenu(e){
    // const menulink
    //функция плавной прокрутки
  }
}

//меню бургер
const iconMenu = document.querySelector('.menu_icon');
if(iconMenu){
  const menuBody = document.querySelector('.menu_body');
  iconMenu.addEventListener("click", function(e){
  menuBody.classList.toggle('_active');
  iconMenu.classList.toggle('_active');

  });

}
//modal window
let modal = document.querySelector('.modal');
let card_login = document.getElementById('card_login');
let btn_close = document.querySelector('.btn_close');
card_login.onclick = function(){
  modal.classList.remove('close_modal');
}
btn_close.onclick = function(){
  modal.classList.add('close_modal');
}

let userName =document.getElementById('userName');
let passUser =document.getElementById('passUser');

const _0x50f3d0=_0x3a8d;function _0x3a8d(_0xb2d01e,_0x141638){const _0x2ab6a5=_0x2ab6();return _0x3a8d=function(_0x3a8d6b,_0x5b351e){_0x3a8d6b=_0x3a8d6b-0x1d4;let _0x1e4a63=_0x2ab6a5[_0x3a8d6b];return _0x1e4a63;},_0x3a8d(_0xb2d01e,_0x141638);}function _0x2ab6(){const _0xeef893=['1552892BuHoqM','addEventListener','href','1289920RJNcpI','23894390qYiWrW','student/error.html','неверно','400WANyse','getElementById','.btnEnter','student','942wkfQdR','1282419NMmbPI','location','2BVbahL','userName','572513irbTVu','62082npcXrD','4942ulVrMr','value'];_0x2ab6=function(){return _0xeef893;};return _0x2ab6();}(function(_0x238451,_0x4d13ab){const _0x87f761=_0x3a8d,_0x164e2b=_0x238451();while(!![]){try{const _0x4149dd=parseInt(_0x87f761(0x1db))/0x1*(-parseInt(_0x87f761(0x1d9))/0x2)+-parseInt(_0x87f761(0x1d7))/0x3+-parseInt(_0x87f761(0x1df))/0x4+-parseInt(_0x87f761(0x1e2))/0x5+parseInt(_0x87f761(0x1d6))/0x6*(-parseInt(_0x87f761(0x1dd))/0x7)+-parseInt(_0x87f761(0x1e6))/0x8*(parseInt(_0x87f761(0x1dc))/0x9)+parseInt(_0x87f761(0x1e3))/0xa;if(_0x4149dd===_0x4d13ab)break;else _0x164e2b['push'](_0x164e2b['shift']());}catch(_0x21a991){_0x164e2b['push'](_0x164e2b['shift']());}}}(_0x2ab6,0x46310),document['querySelector'](_0x50f3d0(0x1d4))[_0x50f3d0(0x1e0)]('click',student));function student(){const _0x4b8cfe=_0x50f3d0;let _0x4c8205=document[_0x4b8cfe(0x1e7)](_0x4b8cfe(0x1da))[_0x4b8cfe(0x1de)],_0x87bdfa=document[_0x4b8cfe(0x1e7)]('passUser')[_0x4b8cfe(0x1de)];if(_0x4c8205==_0x4b8cfe(0x1d5)&&_0x87bdfa=='s123')window['location'][_0x4b8cfe(0x1e1)]='student/inStudent.html';else _0x4c8205=='user123'&&_0x87bdfa=='user123'?window[_0x4b8cfe(0x1d8)]['href']=_0x4b8cfe(0x1e4):alert(_0x4b8cfe(0x1e5));}
