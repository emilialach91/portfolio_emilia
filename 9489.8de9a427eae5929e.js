"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9489],{9489:(M,g,o)=>{o.r(g),o.d(g,{HomePageModule:()=>P});var l=o(6019),i=o(7930),s=o(9010),m=o(790),n=o(865);const p=["textElement"];let f=(()=>{class t{constructor(){this.typingSpeedMilliseconds=120,this.wordArray=["I am mobile frontend developer."]}ngAfterViewInit(){setTimeout(()=>{this.typingEffect()},2e3)}typingEffect(){const a=this.wordArray[0].split(""),r=()=>{a.length>0&&(this.textElement.nativeElement.innerHTML+=a.shift()),setTimeout(r,this.typingSpeedMilliseconds)};r()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],viewQuery:function(e,a){if(1&e&&n.Gf(p,5),2&e){let r;n.iGM(r=n.CRH())&&(a.textElement=r.first)}},decls:23,vars:1,consts:[["loop","","autoplay","","playsinline","",3,"muted"],["src","assets/video/bg.mp4","type","video/mp4"],[1,"center"],["color","dark"],[1,"typing-container"],[1,"text"],["textElement",""],[1,"cursor"],["blinkElement",""],["vertical","bottom","horizontal","start","slot","fixed"],["color","dark","bottom",""],["name","menu-outline"],["side","top"],["ion-fab","","href"," https://www.youtube.com/watch?v=dQw4w9WgXcQ","target","_blank"],["color","dark","name","gift-outline"],["ion-fab","","href","mailto:emilia.lach.91@gmail.com","target","_blank"],["color","dark","name","mail-outline"],["ion-fab","","href","https://www.linkedin.com/in/emilia-lach/","target","_blank"],["color","dark","name","logo-linkedin"],["ion-fab","","href","https://github.com/emilialach91","target","_blank"],["color","dark","name","logo-github"]],template:function(e,a){1&e&&(n.TgZ(0,"ion-content"),n.TgZ(1,"video",0),n._UZ(2,"source",1),n.qZA(),n.TgZ(3,"div",2),n.TgZ(4,"h1",3),n._uU(5,"Emilia Lach"),n.qZA(),n.TgZ(6,"div",4),n._UZ(7,"span",5,6),n._UZ(9,"span",7,8),n.qZA(),n.qZA(),n.TgZ(11,"ion-fab",9),n.TgZ(12,"ion-fab-button",10),n._UZ(13,"ion-icon",11),n.qZA(),n.TgZ(14,"ion-fab-list",12),n.TgZ(15,"ion-fab-button",13),n._UZ(16,"ion-icon",14),n.qZA(),n.TgZ(17,"ion-fab-button",15),n._UZ(18,"ion-icon",16),n.qZA(),n.TgZ(19,"ion-fab-button",17),n._UZ(20,"ion-icon",18),n.qZA(),n.TgZ(21,"ion-fab-button",19),n._UZ(22,"ion-icon",20),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(1),n.Q6J("muted",!0))},directives:[i.W2,i.IJ,i.W4,i.gu,i.zq],styles:['ion-content[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{opacity:.8;object-fit:cover;width:100vw;height:100vh;position:fixed;top:50%;left:50%;z-index:-100;transform:translate(-50%) translateY(-50%)}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{top:45%;left:15%;position:absolute!important;width:100%}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:110px;font-family:"Licorice",cursive;font-weight:600;letter-spacing:1.2px;line-height:1;color:#222428;max-width:max-content}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#222428;margin:10px 0 0 10px;font-size:25px;font-family:"Nanum Gothic Coding",monospace}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%]{width:3px;text-align:left;vertical-align:text-bottom;font-size:25px}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%]:after{content:"|";animation:blink .75s step-end infinite}@keyframes blink{0%,to{color:transparent}50%{color:#22201e}}@media (max-width: 768px){ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{left:50%;top:50%;transform:translate(-50%) translateY(-50%)}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:85px;font-weight:600;text-align:center;margin:0 auto}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .typing-container[_ngcontent-%COMP%]{width:350px;margin:0 auto}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:10px 0 0 25px!important;font-size:20px}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%]{font-size:20px}}@media (max-width: 480px){ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .typing-container[_ngcontent-%COMP%]{width:270px;margin:0 auto}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:10px 0 0 15px!important;font-size:16px}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%]{font-size:18px}}@media (max-width: 375px){ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:45px}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .typing-container[_ngcontent-%COMP%]{width:200px;margin:0 auto}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:10px 0 0 10px!important;font-size:12px}ion-content[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%]{font-size:16px}}']}),t})(),P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.ez,s.u5,i.Pc,m.Bz.forChild([{path:"",component:f}])]]}),t})()}}]);