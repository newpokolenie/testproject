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

// let userName =document.getElementById('userName');
// let passUser =document.getElementById('passUser');

// document.querySelector('.btnEnter').addEventListener('click', student);
// function student(){
//   let userName =document.getElementById('userName').value;
//   let passUser =document.getElementById('passUser').value;
//   if(userName=='user123'&& passUser=='user123'){
//     window.location.href = "student/inStudent.html";
//   }
// }
function _0x2bfe(){const _0x5f0032=['954064VYXMmd','passUser','querySelec','pTslQ','4197588JQQSwk','.btnEnter','value','user123','ById','Student.ht','tor','2ukudXG','addEventLi','bUBvH','xMapQ','click','wdSRw','getElement','userName','student/in','1118398gRNOGp','2072943BSvMHG','3858381FkHJKM','bhbcn','2872140BoYYfM','21rmFspG','stener','2921565uaAwJc','location','href'];_0x2bfe=function(){return _0x5f0032;};return _0x2bfe();}function _0x42c6(_0x228615,_0x303372){const _0x54cbb3=_0x2bfe();return _0x42c6=function(_0x5453e0,_0x5320db){_0x5453e0=_0x5453e0-(-0x12b7+-0x2*-0x371+0xd5b);let _0x263018=_0x54cbb3[_0x5453e0];return _0x263018;},_0x42c6(_0x228615,_0x303372);}const _0x1280c7=_0x42c6;(function(_0x350bc4,_0x3e5024){const _0x16c792=_0x42c6,_0x4ab7fe=_0x350bc4();while(!![]){try{const _0x56ce81=parseInt(_0x16c792(0x196))/(0x83c*-0x2+-0x2*0x11be+0x33f5)+-parseInt(_0x16c792(0x18d))/(-0xa57+0x14db+-0xa82)*(parseInt(_0x16c792(0x197))/(0x226c+0x652*0x1+-0x28bb))+parseInt(_0x16c792(0x186))/(-0x13a3*0x1+-0x1644+-0x29eb*-0x1)+-parseInt(_0x16c792(0x19d))/(-0x5c3+-0x1ca7+0x226f*0x1)+parseInt(_0x16c792(0x19a))/(0x144*0x1+-0x4*0x9af+0x257e)+parseInt(_0x16c792(0x19b))/(-0x25bf*0x1+0x1570+-0x66*-0x29)*(-parseInt(_0x16c792(0x1a0))/(-0x1690+0xcaf+-0x3b*-0x2b))+-parseInt(_0x16c792(0x198))/(-0x6*0x261+0x7*0x4b9+-0x12c0);if(_0x56ce81===_0x3e5024)break;else _0x4ab7fe['push'](_0x4ab7fe['shift']());}catch(_0x2fb3a6){_0x4ab7fe['push'](_0x4ab7fe['shift']());}}}(_0x2bfe,-0xd807b+-0x1*0x4be0b+0x1b2a8a),document[_0x1280c7(0x1a2)+_0x1280c7(0x18c)](_0x1280c7(0x187))[_0x1280c7(0x18e)+_0x1280c7(0x19c)](_0x1280c7(0x191),student));function student(){const _0x1f31c5=_0x1280c7,_0x2e7ec8={'xMapQ':_0x1f31c5(0x194),'pTslQ':_0x1f31c5(0x1a1),'wdSRw':function(_0x186355,_0x382508){return _0x186355==_0x382508;},'bhbcn':_0x1f31c5(0x189),'bUBvH':_0x1f31c5(0x195)+_0x1f31c5(0x18b)+'ml'};let _0x3320fa=document[_0x1f31c5(0x193)+_0x1f31c5(0x18a)](_0x2e7ec8[_0x1f31c5(0x190)])[_0x1f31c5(0x188)],_0x4071c9=document[_0x1f31c5(0x193)+_0x1f31c5(0x18a)](_0x2e7ec8[_0x1f31c5(0x1a3)])[_0x1f31c5(0x188)];_0x2e7ec8[_0x1f31c5(0x192)](_0x3320fa,_0x2e7ec8[_0x1f31c5(0x199)])&&_0x2e7ec8[_0x1f31c5(0x192)](_0x4071c9,_0x2e7ec8[_0x1f31c5(0x199)])&&(window[_0x1f31c5(0x19e)][_0x1f31c5(0x19f)]=_0x2e7ec8[_0x1f31c5(0x18f)]);}

