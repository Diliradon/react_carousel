(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{11:function(e,t,i){},12:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);i(6);var n=i(5),a=i.n(n),s=i(2),c=i(1),r=(i(11),i(4)),l=i.n(r),m=(i(12),i(0)),u=function(e){var t=e.images,i=e.step,n=e.frameSize,a=e.itemWidth,r=e.animationDuration,u=e.infinite,o=Object(c.useState)(0),j=Object(s.a)(o,2),b=j[0],h=j[1],p=t.length-n;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"carousel",children:Object(m.jsx)("ul",{className:"carousel__list",style:{width:"".concat(a*n,"px")},children:t.map((function(e){return Object(m.jsx)("li",{className:"carousel__items",style:{transition:"transform ".concat(r,"ms"),transform:"translateX(".concat(-b*a,"px"),width:"".concat(i)},children:Object(m.jsx)("img",{width:a,src:e,alt:"Emoji",className:"carousel__image"})},e)}))})}),Object(m.jsxs)("div",{className:"carousel-buttons",children:[Object(m.jsx)("button",{type:"button",className:l()("button",{"is-success":u||0!==b,"is-light":u||0!==b,"disablet-btn":!u&&0===b}),onClick:function(){h(b-i>0?b-i:0),u&&0===b&&h(p)},children:"Prev"}),Object(m.jsx)("button",{type:"button",className:l()("button",{"is-success":u||b!==p,"is-light":u||b!==p,"disablet-btn":!u&&b===p}),onClick:function(){h(b+i<p?b+i:p),u&&b===p&&h(0)},children:"Next"})]})]})},o=(i(14),function(e){var t=e.step,i=e.frameSize,n=e.itemWidth,a=e.animationDuration,s=e.infinite,c=e.setStep,r=e.setFrameSize,l=e.setItemWidth,u=e.setAnimation,o=e.setInfinite;return Object(m.jsx)("form",{action:"/my-handling-form-page",method:"get",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{htmlFor:"step",className:"label",children:"Step"}),Object(m.jsx)("input",{onChange:function(e){return c(+e.target.value)},value:t,className:"input is-primary",type:"number",id:"step",name:"user_name",min:"1",max:"10"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{htmlFor:"frameSize",className:"label",children:"Frame Size:"}),Object(m.jsx)("input",{onChange:function(e){return r(+e.target.value)},value:i,className:"input is-primary",type:"number",id:"frameSize",name:"user_email",min:"1",max:"10"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{htmlFor:"itemWidth",className:"label",children:"Picture Width:"}),Object(m.jsx)("input",{onChange:function(e){return l(+e.target.value)},value:n,className:"input is-primary",type:"number",id:"itemWidth",name:"user_email",min:"130",max:"260",step:"5"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{htmlFor:"animationDuration",className:"label",children:"Animation Duration:"}),Object(m.jsx)("input",{onChange:function(e){return u(+e.target.value)},value:a,className:"input is-primary",type:"number",id:"animationDuration",name:"user_email",min:"0",max:"2000",step:"50"})]}),Object(m.jsxs)("li",{className:"checkboxItems",children:[Object(m.jsx)("label",{htmlFor:"accepted",className:"checkbox is-primary",children:"Infinity scroll"}),Object(m.jsx)("input",{onChange:function(e){return o(e.target.checked)},checked:s,id:"accepted",type:"checkbox",name:"accepted"})]})]})})}),j=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],b=function(){var e=Object(c.useState)(3),t=Object(s.a)(e,2),i=t[0],n=t[1],a=Object(c.useState)(3),r=Object(s.a)(a,2),l=r[0],b=r[1],h=Object(c.useState)(130),p=Object(s.a)(h,2),d=p[0],g=p[1],O=Object(c.useState)(1e3),x=Object(s.a)(O,2),f=x[0],N=x[1],y=Object(c.useState)(!1),S=Object(s.a)(y,2),v=S[0],_=S[1];return Object(m.jsxs)("div",{className:"App section",children:[Object(m.jsxs)("h1",{"data-cy":"title",className:"title",children:["Carousel with ",j.length," images"]}),Object(m.jsx)(u,{images:j,step:i,frameSize:l,itemWidth:d,animationDuration:f,infinite:v}),Object(m.jsx)(o,{step:i,frameSize:l,itemWidth:d,animationDuration:f,infinite:v,setStep:function(e){return n(e)},setFrameSize:function(e){return b(e)},setItemWidth:function(e){return g(e)},setAnimation:function(e){return N(e)},setInfinite:function(e){return _(e)}})]})};a.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e4c7f1d1.chunk.js.map