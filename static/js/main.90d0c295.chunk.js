(this.webpackJsonpbitgama=this.webpackJsonpbitgama||[]).push([[0],{212:function(n,e,t){},213:function(n,e,t){},384:function(n,e,t){"use strict";t.r(e);var a,c,i,o,r,d,l,s,b,j,h,f,x,u,p,m,g,O,w,v,y,_,k,S,C,M,D,z,I,T,E,A,F,H,R,B,q,$,L,P,V,N,Q,Y,G,J,K,U,W,X,Z,nn,en,tn,an,cn,on,rn,dn,ln,sn,bn,jn,hn,fn,xn,un,pn,mn,gn,On,wn,vn,yn=t(1),_n=t.n(yn),kn=t(44),Sn=t.n(kn),Cn=(t(212),t(213),t(178)),Mn=t(59),Dn=t(23),zn=t(14),In=t(6),Tn=t(5),En=Tn.c.div(a||(a=Object(In.a)(["\n    height: 100vh;\n    background-color: #131313;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),An=t(183),Fn=Tn.c.nav(c||(c=Object(In.a)(["\n    height: 75px;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    z-index: 999;\n\n    background-color: #7d38db;\n    opacity: 0.95;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: solid 1px #68de5a;;\n\n    color: #fff;\n"]))),Hn=Tn.c.section(i||(i=Object(In.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-left: 2%;\n\n    @media(max-width: 800px) {\n        padding-left: 0;\n        \n    }\n   \n"]))),Rn=Tn.c.section(o||(o=Object(In.a)(["\n    \n    width: 100%;\n    height: 100%;\n    display: 'block';    \n\n    @media(max-width: 800px) {\n        display: none;\n        \n    }\n   \n"]))),Bn=Tn.c.ul(r||(r=Object(In.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 100%;\n"]))),qn=Tn.c.li(d||(d=Object(In.a)(["    \n    height: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 150px;\n    border-radius: 5px ;\n    background-color: ",";\n"])),(function(n){return!0===n.active?"#fafafa":"transparent"})),$n=Object(Tn.c)(Mn.b)(l||(l=Object(In.a)(["\n    transition: 0.6s;    \n    text-decoration: none;\n    font-size: 1.2rem;\n    font-weight: 700;    \n    color: #68de5a;\n    font-family: 'roboto';    \n\n    &:hover{\n        transition: 0.6s;\n        color: #131313;\n    }\n"]))),Ln=Tn.c.section(s||(s=Object(In.a)(["\n    width: 80px;\n    text-align: center;\n    cursor: pointer;\n    display: none;\n    \n\n    @media(max-width: 800px) {\n        display: block;\n        \n    }\n"]))),Pn=Object(Tn.c)(An.a)(b||(b=Object(In.a)(["\n    font-size: 2rem;\n    color: #fafafa;\n"]))),Vn=t(3),Nn=function(n){var e=Object(yn.useState)(!1),t=Object(zn.a)(e,2),a=t[0],c=t[1],i=Object(yn.useState)("dashboard"),o=Object(zn.a)(i,2),r=o[0],d=o[1];return r!==n.active&&d(n.active),Object(Vn.jsxs)(Vn.Fragment,{children:[Object(Vn.jsxs)(Fn,{children:[Object(Vn.jsx)(Hn,{children:Object(Vn.jsx)(te,{})}),Object(Vn.jsx)(Rn,{children:Object(Vn.jsxs)(Bn,{children:[Object(Vn.jsx)(qn,{active:"dashboard"===r,children:Object(Vn.jsx)($n,{to:"/dashboard",children:"Dashboard"})}),Object(Vn.jsx)(qn,{active:"detalhes"===r,children:Object(Vn.jsx)($n,{to:"/details",children:"Detalhes"})}),Object(Vn.jsx)(qn,{active:"cadastro"===r,children:Object(Vn.jsx)($n,{to:"/config",children:"Cadastro"})})]})}),Object(Vn.jsx)(Ln,{onClick:function(){c(!a)},children:Object(Vn.jsx)(Pn,{})})]}),Object(Vn.jsx)(se,{toggle:a})]})},Qn=Tn.c.div(j||(j=Object(In.a)(["\n    border: solid #68de5a 3px;\n    border-radius: 5px;\n\n    min-width: 600px;\n    height: 70%;\n    width: 40%;\n    background-color: #7d38db;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n    @media(max-width: 800px) {\n        min-width: 300px;\n        justify-content: start;\n        padding-top: 10%;\n        \n    }\n"]))),Yn=Tn.c.div(h||(h=Object(In.a)(["\n    border: solid #68de5a 3px;\n    border-radius: 5px;\n    width: 70%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    @media(max-width: 800px) {\n        width: 80%;\n        \n    }\n"]))),Gn=Tn.c.div(f||(f=Object(In.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n"]))),Jn=function(n){var e=Object(yn.useState)(""),t=Object(zn.a)(e,2),a=t[0],c=t[1],i=Object(yn.useState)(""),o=Object(zn.a)(i,2),r=o[0],d=o[1],l=Object(yn.useState)(!1),s=Object(zn.a)(l,2),b=s[0],j=s[1];Object(yn.useEffect)((function(){j(""===a||""===r)}),[a,r]);return Object(Vn.jsxs)(Qn,{children:[Object(Vn.jsx)(te,{}),Object(Vn.jsxs)(Yn,{children:[Object(Vn.jsxs)(Gn,{children:[Object(Vn.jsx)(Xn,{label:"E-mail"}),Object(Vn.jsx)(Un,{type:"email",onChange:function(n){c(n)}})]}),Object(Vn.jsxs)(Gn,{children:[Object(Vn.jsx)(Xn,{label:"Senha"}),Object(Vn.jsx)(Un,{type:"password",onChange:function(n){d(n)}})]}),Object(Vn.jsx)(ie,{disabled:b,handleClick:function(){var e={email:a,pass:r};n.handleOnSubmit(e)}})]})]})},Kn=Tn.c.input(x||(x=Object(In.a)(["\n   width: 85%;\n   height: ",";\n   background-color: #fafafa;\n   color: rgba(0, 0, 0, 1);\n   font-family: 'roboto';\n   font-size: 0.9rem;\n   font-weight: 600;\n   padding-left: 2%;\n   margin-bottom: "," ;\n   font-family: Helvetica, Sans-Serif;\n\n   \n   border: 2px solid #68de5a;\n\n   ::placeholder{      \n      //opacity: 1;\n   }  \n\n   &:focus {\n      transition: 0.5s;\n      outline: none;      \n      border: 2px solid #ffffff;\n      background-color: #68de5a;\n      color: #ffffff;\n      \n      font-weight: 700;\n   }\n\n   \n"])),(function(n){return n.height?n.height:"50px"}),(function(n){return n.marginBottom?n.marginBottom:"5%"})),Un=function(n){var e=n.placeholder;return Object(Vn.jsx)(Kn,{type:n.type,placeholder:e,onChange:function(e){return function(e){n.onChange(e.target.value)}(e)},height:n.height,step:"0.01",marginBottom:n.marginBottom})},Wn=Tn.c.p(u||(u=Object(In.a)(["\n   margin: 0;\n   font-size: 12px;\n   margin-bottom: 5px;\n   color: #0a0a0a;\n   font-family: Helvetica, Sans-Serif;\n   font-size: 0.9rem;\n   font-weight: 600;\n\n"]))),Xn=function(n){return Object(Vn.jsx)(Wn,{children:n.label})},Zn=Tn.c.div(p||(p=Object(In.a)(["   \n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    background-color: #68de5a;\n    width: 300px;\n    padding: 5px;\n    margin: 20px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n    @media(max-width: 800px) {\n        width: 200px;        \n    }\n\n\n"]))),ne=Tn.c.p(m||(m=Object(In.a)(["\n    font-size: 3.0rem;\n    font-weight: 600;\n    color: #131313;\n    font-family: Helvetica, Sans-Serif;\n\n    @media(max-width: 800px) {\n        font-size: 2.0rem;       \n    }\n"]))),ee=Tn.c.p(g||(g=Object(In.a)(["\n    font-size: 3.0rem;\n    font-weight: 700;\n    color: #7d38db;\n    font-family: Helvetica, Sans-Serif;\n    text-shadow: 2px 2px #131313;\n\n    @media(max-width: 800px) {\n        font-size: 2.0rem;       \n    }\n"]))),te=function(n){return Object(Vn.jsxs)(Zn,{children:[Object(Vn.jsx)(ne,{children:"Gama"}),Object(Vn.jsx)(ee,{children:"BTC"})]})},ae=Tn.c.div(O||(O=Object(In.a)(["\n    transition: 0.8s;\n    width: 60%;\n    max-width: 300px;\n    padding: 5px;\n    background-color: #68de5a;\n    \n    border-radius: 5px;\n\n    &:hover {\n        transition: 0.8s;\n        background-color: #499b3f;\n        border: solid 1px #fff;\n    }\n\n    &:disabled {\n        background-color: #7d38db;\n        border: solid 1px #fff;\n    }\n"]))),ce=Tn.c.button(w||(w=Object(In.a)(["    \n    transition: 0.8s;\n    background-color: #68de5a;\n    width: 100%;\n    height: 35px;\n    border-radius: 5px;\n    border: solid 1px #fff;\n\n    box-shadow: none;\n\n    color: #181e23;\n    font-size: 16px;\n    font-weight: 600;\n    font-family: 'roboto';\n\n    cursor: pointer;\n\n    &:hover {\n        transition: 0.8s;\n        background-color: #499b3f;\n        color: #ffff;\n    }\n\n    &:disabled {\n        background-color: #7d38db;\n        color: #ffff;\n    }\n\n"]))),ie=function(n){return Object(Vn.jsx)(ae,{children:Object(Vn.jsx)(ce,{onClick:function(){return n.handleClick()},disabled:n.disabled,children:n.label?n.label:"Entrar"})})},oe=Tn.c.div(v||(v=Object(In.a)(["\n    transition: 0.8s;\n    width: 200px;\n    height: 200px;\n    position: fixed;\n    top: 75px;\n    right: ",";\n    background-color: #7d38db;\n    border: solid 1px #68de5a;\n    opacity: 0.95;\n    z-index: 999;\n\n    \n"])),(function(n){return n.toggle?"0":"-250px"})),re=Tn.c.ul(y||(y=Object(In.a)(["\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n"]))),de=Tn.c.li(_||(_=Object(In.a)(["\n    \n"]))),le=Object(Tn.c)(Mn.b)(k||(k=Object(In.a)(["\n    transition: 0.6s;    \n    text-decoration: none;\n    font-size: 1.2rem;\n    font-weight: 700;    \n    color: #68de5a;;\n    font-family: 'roboto';\n\n    &:hover{\n        transition: 0.6s;\n        color: #fafafa;\n    }\n"]))),se=function(n){var e=n.toggle;return Object(Vn.jsx)(oe,{toggle:e,children:Object(Vn.jsxs)(re,{children:[Object(Vn.jsx)(de,{children:Object(Vn.jsx)(le,{to:"/dashboard",children:"Dashboard"})}),Object(Vn.jsx)(de,{children:Object(Vn.jsx)(le,{to:"/details",children:"Detalhes"})}),Object(Vn.jsx)(de,{children:Object(Vn.jsx)(le,{to:"/config",children:"Cadastro"})})]})})},be=Tn.c.div(S||(S=Object(In.a)(["\n    background-color: #7d38db;    \n    width: 250px;\n    height: 200px;\n    border: solid 3px #68de5a;\n    border-radius: 5px;\n    margin: 2%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    box-shadow: 0 4px 8px 0 #68de5a, 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n    font-family: Helvetica, Sans-Serif;    \n\n    @media(max-width: 800px) {\n        margin-bottom: 5%;\n    }\n    \n"]))),je=Tn.c.p(C||(C=Object(In.a)(["\n   color: #f0f0f0;\n   font-size: 1.8rem;\n   font-weight: 600;\n"]))),he=Tn.c.div(M||(M=Object(In.a)(["\n   display: flex;\n   flex-direction: row;\n   justify-content: center;\n   width: 90%;\n   \n"]))),fe=Tn.c.div(D||(D=Object(In.a)(["\n   display: grid;\n   grid-template-columns: 50% 50%;\n   width: 90%;\n\n"]))),xe=Tn.c.p(z||(z=Object(In.a)(["\n    color: #f0f0f0;\n    font-size: 1.0rem;\n    font-weight: 600;\n    margin-right: 5%;\n"]))),ue=Tn.c.p(I||(I=Object(In.a)(["\n    color: #f0f0f0;\n"]))),pe=function(n){return Object(Vn.jsxs)(be,{children:[Object(Vn.jsx)(he,{children:Object(Vn.jsx)(je,{children:n.title})}),n.data?Object(Vn.jsx)(Vn.Fragment,{children:n.data.map((function(n,e){return Object(Vn.jsxs)(fe,{children:[Object(Vn.jsx)(xe,{children:n.label}),Object(Vn.jsxs)(ue,{children:["R$ ",n.value]})]},e)}))}):Object(Vn.jsx)(Vn.Fragment,{})]})},me=t(127),ge=Tn.c.div(T||(T=Object(In.a)(["\n    background-color: #7d38db;    \n    width: 250px;\n    height: 200px;\n    border: solid 3px #68de5a;\n    border-radius: 5px;\n    margin: 2%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    box-shadow: 0 4px 8px 0 #68de5a, 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n    font-family: Helvetica, Sans-Serif;    \n\n    @media(max-width: 800px) {\n        margin-bottom: 5%;\n    }\n    \n"]))),Oe=Tn.c.p(E||(E=Object(In.a)(["\n   color: #f0f0f0;\n   font-size: 1.8rem;\n   font-weight: 600;\n"]))),we=Tn.c.div(A||(A=Object(In.a)(["\n   display: flex;\n   flex-direction: row;\n   justify-content: center;\n   width: 90%;\n   \n"]))),ve=Tn.c.div(F||(F=Object(In.a)(["\n   display: grid;\n   grid-template-columns: 50% 50%;\n   width: 90%;\n\n"]))),ye=Tn.c.p(H||(H=Object(In.a)(["\n    color: #f0f0f0;\n    font-size: 1.0rem;\n    font-weight: 600;\n    margin-right: 5%;\n"]))),_e=Tn.c.p(R||(R=Object(In.a)(["\n    color: #f0f0f0;\n"]))),ke=(Object(Tn.c)(me.b)(B||(B=Object(In.a)(["\n    color: #09b109;\n    font-weight: 600;\n    font-size: 1.0rem;\n    background-color: #131313;\n    padding: 1%;\n"]))),Object(Tn.c)(me.a)(q||(q=Object(In.a)(["\n    color: #e60505;\n    font-weight: 600;\n    font-size: 1.0rem;\n    background-color: #131313;\n    padding: 1%;\n"]))),function(n){return Object(Vn.jsxs)(ge,{children:[Object(Vn.jsx)(we,{children:Object(Vn.jsx)(Oe,{children:n.title})}),Object(Vn.jsx)(ve,{}),n.data?Object(Vn.jsx)(Vn.Fragment,{children:n.data.map((function(n,e){return Object(Vn.jsxs)(ve,{children:[Object(Vn.jsx)(ye,{children:n.label}),Object(Vn.jsx)(_e,{children:n.value})]},e)}))}):Object(Vn.jsx)(Vn.Fragment,{})]})}),Se=t(388),Ce=t(389),Me=t(393),De=t(197),ze=t(198),Ie=t(86),Te=t(83),Ee=t(203),Ae=function(n){var e=n.data;return Object(Vn.jsx)(Se.a,{width:"90%",height:"80%",children:Object(Vn.jsxs)(Ce.a,{data:e,margin:{top:5,right:30,left:20,bottom:5},children:[Object(Vn.jsx)(Me.a,{strokeDasharray:"3 3"}),Object(Vn.jsx)(De.a,{dataKey:"data"}),Object(Vn.jsx)(ze.a,{}),Object(Vn.jsx)(Ie.a,{}),Object(Vn.jsx)(Te.a,{}),Object(Vn.jsx)(Ee.a,{type:"monotone",dataKey:"Total Consolidado (R$)",stroke:"#07ea27"})]})})},Fe=Tn.c.div($||($=Object(In.a)(["\n    height: 100%;\n    width: 90%;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    font-family: Helvetica, Sans-Serif;\n    background-color: #7d38db;\n    padding: 2%;\n    \n\n    @media(max-width: 820px) {       \n        height: auto;\n        margin-bottom:  5%;        \n    }\n"]))),He=Tn.c.div(L||(L=Object(In.a)(["    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n"]))),Re=Tn.c.table(P||(P=Object(In.a)(["\n    margin-top: 20px;\n    width: 95%;  \n    border: solid 3px #fafafa;\n    overflow-x: auto;\n\n    \n    \n    \n"]))),Be=Tn.c.thead(V||(V=Object(In.a)(["\n    border: solid 1px #fafafa;\n    background-color: #68de5a;\n    opacity: 0.95;\n    color: #fafafa;\n    \n    \n"]))),qe=Tn.c.tbody(N||(N=Object(In.a)(["\n     \n"]))),$e=Tn.c.tr(Q||(Q=Object(In.a)(["\n    height: 50px;\n    border-collapse: collapse;\n    \n\n    &:nth-child(even){\n        background-color: #f2f2f2;\n    }\n    \n\n    \n    \n"]))),Le=Tn.c.th(Y||(Y=Object(In.a)(["\n    min-width: 50px;\n    vertical-align: middle;\n\n    \n    \n\n"]))),Pe=Tn.c.td(G||(G=Object(In.a)(["   \n    width: fit-content;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n\n    vertical-align: middle;\n\n    \n    \n\n"]))),Ve=function(n){var e=Object(yn.useState)([]),t=Object(zn.a)(e,2),a=t[0],c=t[1];return Object(yn.useEffect)((function(){n.rows&&c(n.rows)}),[n.rows]),Object(Vn.jsx)(Fe,{children:Object(Vn.jsx)(He,{children:Object(Vn.jsxs)(Re,{children:[Object(Vn.jsx)(Be,{children:Object(Vn.jsxs)($e,{children:[Object(Vn.jsx)(Le,{children:"Data"}),Object(Vn.jsx)(Le,{children:"Quantidade"}),Object(Vn.jsx)(Le,{children:"Valor Compra"}),Object(Vn.jsx)(Le,{children:"Valor Atual"}),Object(Vn.jsx)(Le,{children:"Vari\xe2ncia"})]})}),Object(Vn.jsx)(qe,{children:a.map((function(n,e){return Object(Vn.jsxs)($e,{children:[Object(Vn.jsx)(Pe,{children:"".concat(n.data.getDate(),"/").concat(n.data.getMonth()+1,"/").concat(n.data.getFullYear())}),Object(Vn.jsx)(Pe,{children:n.quantidade}),Object(Vn.jsx)(Pe,{children:"R$ ".concat(n.compra)}),Object(Vn.jsx)(Pe,{children:"R$ ".concat(n.atual)}),Object(Vn.jsx)(Pe,{children:"".concat(n.variancia," %")})]},e)}))})]})})})},Ne=t(199),Qe=t.n(Ne),Ye=Object(Tn.c)(Qe.a)(J||(J=Object(In.a)(["\n    //color: green;   // barras + dias da semana\n    background-color: #fafafa;\n\n    \n    .react-date-picker__wrapper {    \n        border: 2px solid #68de5a;        //borda picker\n        width: 218px;\n        \n    }\n    \n    .react-date-picker__inputGroup__input {     //campos de data\n        min-width: 0.54em;          // largura campos de data\n        height: 48px;               // altura picker\n        padding: 0 1px;\n        border: 0;\n        background: none;\n        font: inherit;\n        box-sizing: content-box;\n    }\n    \n    \n    .react-date-picker__button {        //bot\xf5es\n        border: 0;                      \n        background: transparent;\n        padding: 4px 6px;\n    }\n    \n    .react-date-picker__button:enabled:hover .react-date-picker__button__icon,\n    .react-date-picker__button:enabled:focus .react-date-picker__button__icon {\n        stroke: #0078d7;\n    }\n\n    \n\n    .react-calendar {           //calendario   \n        background: white;\n        border: 1px solid #a0a096;\n        font-family: Arial, Helvetica, sans-serif;\n        line-height: 1.125em;\n    }\n   \n    \n    .react-calendar__navigation { //calendario header\n        height: 44px;\n        margin-bottom: 1em;\n    }\n    .react-calendar__navigation button {  //calendario header\n        min-width: 44px;\n        background: none;\n    }\n\n    \n    .react-calendar__navigation button:enabled:hover,       //calendario header\n    .react-calendar__navigation button:enabled:focus {\n        background-color: #e6e6e6;\n    }\n\n    \n    .react-calendar__month-view__weekdays {\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 0.75em;\n    }\n\n    \n    .react-calendar__month-view__days__day--weekend {   //sabados e domingos\n        color: #d10000;\n    }\n    .react-calendar__month-view__days__day--neighboringMonth {\n        color: #757575;\n    }\n    \n    .react-calendar__tile {   //dias\n        max-width: 100%;\n        text-align: center;\n        padding: 0.75em 0.5em;\n        background: none;\n    }    \n    \n    .react-calendar__tile:enabled:hover,\n    .react-calendar__tile:enabled:focus {\n        background-color: #e6e6e6;\n    }\n\n\n    .react-calendar__tile--now {\n        background: #ffff76;\n    }\n\n\n    .react-calendar__tile--now:enabled:hover,\n    .react-calendar__tile--now:enabled:focus {\n        background: #ffffa9;\n    }\n\n    \n    \n    .react-calendar__tile--active {\n        background: #006edc;\n        color: white;\n    }\n    .react-calendar__tile--active:enabled:hover,\n    .react-calendar__tile--active:enabled:focus {\n        background: #1087ff;\n    }\n    .react-calendar--selectRange .react-calendar__tile--hover {\n        background-color: #e6e6e6;\n    }\n\n"]))),Ge=function(n){var e=Object(yn.useState)(new Date),t=Object(zn.a)(e,2),a=t[0],c=t[1],i=function(e){c(e),n.onChange(e)};return Object(Vn.jsx)("div",{children:Object(Vn.jsx)(Ye,{onChange:function(n){return i(n)},value:a})})},Je=Tn.c.div(K||(K=Object(In.a)(["\n    height: 100%;\n    min-height: 250px;\n    width: 90%;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    font-family: Helvetica, Sans-Serif;\n    background-color: #7d38db;\n    padding: 2%;\n    \n\n    @media(max-width: 820px) {       \n        height: auto;\n        margin-bottom:  5%;        \n    }\n"]))),Ke=Tn.c.div(U||(U=Object(In.a)(["\n    border: solid #68de5a 3px;\n    border-radius: 5px;\n    width: 70%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    margin-top: 3%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\n    @media(max-width: 800px) {\n        width: 80%;    \n        flex-direction: column;\n        justify-content: space-evenly;\n        height: 300px;\n        margin-bottom: 5%;    \n    }\n"]))),Ue=Tn.c.div(W||(W=Object(In.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n"]))),We=function(n){var e=Object(yn.useState)(""),t=Object(zn.a)(e,2),a=t[0],c=t[1],i=Object(yn.useState)(""),o=Object(zn.a)(i,2),r=o[0],d=o[1];return Object(Vn.jsxs)(Je,{children:[Object(Vn.jsxs)(Ke,{children:[Object(Vn.jsxs)(Ue,{children:[Object(Vn.jsx)(Xn,{label:"Data de Compra"}),Object(Vn.jsx)(Ge,{onChange:function(n){console.log(n)}})]}),Object(Vn.jsxs)(Ue,{children:[Object(Vn.jsx)(Xn,{label:"Quantidade"}),Object(Vn.jsx)(Un,{type:"number",onChange:function(n){c(n)},marginBottom:"0"})]}),Object(Vn.jsxs)(Ue,{children:[Object(Vn.jsx)(Xn,{label:"Valor (R$)"}),Object(Vn.jsx)(Un,{type:"number",onChange:function(n){d(n)},marginBottom:"0"})]})]}),Object(Vn.jsx)(ie,{handleClick:function(){var e={email:a,pass:r};n.handleOnSubmit(e)},label:"Cadastrar",disabled:!1})]})},Xe=Tn.c.div(X||(X=Object(In.a)(["\n    height: 100%;\n    width: 90%;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    font-family: Helvetica, Sans-Serif;\n    background-color: #7d38db;\n    padding: 2%;\n    \n\n    @media(max-width: 820px) {       \n        height: auto;\n        margin-bottom:  5%;        \n    }\n"]))),Ze=Tn.c.div(Z||(Z=Object(In.a)(["\n    border: solid #68de5a 3px;\n    border-radius: 5px;\n    width: 70%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    margin-top: 3%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\n    @media(max-width: 800px) {\n        width: 80%;    \n        flex-direction: column;\n        justify-content: space-evenly;\n        height: 300px;\n        margin-bottom: 5%;    \n    }\n"]))),nt=Tn.c.div(nn||(nn=Object(In.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n"]))),et=function(n){var e=Object(yn.useState)(new Date),t=Object(zn.a)(e,2),a=t[0],c=t[1];return Object(Vn.jsx)(Xe,{children:Object(Vn.jsxs)(Ze,{children:[Object(Vn.jsxs)(nt,{children:[Object(Vn.jsx)(Xn,{label:"Data de Compra"}),Object(Vn.jsx)(Ge,{onChange:function(n){c(n)}})]}),Object(Vn.jsxs)(nt,{children:[Object(Vn.jsx)(Xn,{children:"label=''"}),Object(Vn.jsx)(ie,{handleClick:function(){var e={date:a};n.handleOnSubmit(e)},label:"Pesquisar",disabled:!1})]})]})})},tt=t(200),at=Tn.c.div(en||(en=Object(In.a)(["\n    height: 100%;\n    width: 90%;\n    overflow-y: auto;\n    display: ",";\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    font-family: Helvetica, Sans-Serif;\n    background-color: #7d38db;\n    padding: 2%;\n    \n\n    @media(max-width: 820px) {       \n        height: auto;\n        margin-bottom:  5%;        \n    }\n"])),(function(n){return n.show?"flex":"none"})),ct=Tn.c.div(tn||(tn=Object(In.a)(["    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n"]))),it=Tn.c.table(an||(an=Object(In.a)(["\n    margin-top: 20px;\n    width: 95%;  \n    border: solid 3px #fafafa;\n    overflow-x: auto;\n\n    \n    \n    \n"]))),ot=Tn.c.thead(cn||(cn=Object(In.a)(["\n    border: solid 1px #fafafa;\n    background-color: #68de5a;\n    opacity: 0.95;\n    color: #fafafa;\n    \n    \n"]))),rt=Tn.c.tbody(on||(on=Object(In.a)(["\n     \n"]))),dt=Tn.c.tr(rn||(rn=Object(In.a)(["\n    height: 50px;\n    border-collapse: collapse;\n    \n\n    &:nth-child(even){\n        background-color: #f2f2f2;\n    }\n    \n\n    \n    \n"]))),lt=Tn.c.th(dn||(dn=Object(In.a)(["\n    min-width: 50px;\n    vertical-align: middle;\n\n    \n    \n\n"]))),st=Tn.c.td(ln||(ln=Object(In.a)(["   \n    width: fit-content;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n\n    vertical-align: middle;\n\n"]))),bt=Object(Tn.c)(tt.a)(sn||(sn=Object(In.a)(["\n    cursor: pointer;\n"]))),jt=function(n){var e=Object(yn.useState)([]),t=Object(zn.a)(e,2),a=t[0],c=t[1];return Object(yn.useEffect)((function(){n.rows&&c(n.rows)}),[n.rows]),Object(Vn.jsx)(at,{show:n.show,children:Object(Vn.jsx)(ct,{children:Object(Vn.jsxs)(it,{children:[Object(Vn.jsx)(ot,{children:Object(Vn.jsxs)(dt,{children:[Object(Vn.jsx)(lt,{children:"Data"}),Object(Vn.jsx)(lt,{children:"Quantidade"}),Object(Vn.jsx)(lt,{children:"Valor Compra"}),Object(Vn.jsx)(lt,{children:"Editar"})]})}),Object(Vn.jsx)(rt,{children:a.map((function(n,e){return Object(Vn.jsxs)(dt,{children:[Object(Vn.jsx)(st,{children:"".concat(n.date.getDate(),"/").concat(n.date.getMonth()+1,"/").concat(n.date.getFullYear())}),Object(Vn.jsx)(st,{children:n.quantidade}),Object(Vn.jsx)(st,{children:"R$ ".concat(n.compra)}),Object(Vn.jsx)(st,{children:Object(Vn.jsx)(bt,{})})]},e)}))})]})})})},ht=function(n){var e=Object(yn.useState)(!1),t=Object(zn.a)(e,2),a=t[0],c=t[1];return a?Object(Vn.jsx)(Dn.a,{to:"/dashboard"}):Object(Vn.jsx)(En,{children:Object(Vn.jsx)(Jn,{handleOnSubmit:function(n){console.log(n),c(!0)}})})},ft=Tn.c.div(bn||(bn=Object(In.a)(["\n    height: 100vh;\n    background-color: #131313;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 100px;\n"]))),xt=Tn.c.section(jn||(jn=Object(In.a)(["\n    background-color: #2e2f2e;\n    min-height: 200px;\n    height: fit-content;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2%;\n    margin-bottom: 2%;\n\n    @media(max-width: 800px) {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding-top: 2%;\n    }\n"]))),ut=Tn.c.section(hn||(hn=Object(In.a)(["\n    background-color: #2e2f2e;\n    min-height: 200px;\n    height: fit-content;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-bottom: 2%;\n\n    @media(max-width: 800px) {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding-top: 2%;\n    }\n"]))),pt=Tn.c.section(fn||(fn=Object(In.a)(["\n    background-color: #2e2f2e;\n    min-height: 200px;\n    height: fit-content;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2%;\n\n    @media(max-width: 800px) {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding-top: 2%;\n    }\n"]))),mt=Tn.c.p(xn||(xn=Object(In.a)(["\n    transition: 0.6s;    \n    text-decoration: none;\n    font-size: 1.2rem;\n    font-weight: 700;    \n    color: #68de5a;\n    font-family: 'roboto';  \n    margin-bottom: 3%;  \n\n    \n"]))),gt=t(37),Ot=function(n){var e=Object(gt.c)((function(n){return n.allInfo})),t=e.btc24h,a=e.consolidado,c=e.saldoSemana,i=e.saldoMes,o=e.dataChart,r=[{label:"Atual:",value:t.atual},{label:"M\xe1ximo:",value:t.maximo},{label:"M\xednimo:",value:t.minimo}],d=[{label:"Investido:",value:a.investido},{label:"Atual:",value:a.atual},{label:"Lucro:",value:a.lucro}],l=[{label:"Saldo:",value:c.saldo},{label:"Percentual:",value:"".concat(c.percent," %")}],s=[{label:"Saldo:",value:i.saldo},{label:"Percentual:",value:"".concat(i.percent," %")}],b=[];return o.map((function(n){var e={data:"".concat(n.date.getDate(),"/").concat(n.date.getMonth()+1,"/").concat(n.date.getFullYear()),"Total Consolidado (R$)":n.value};return b.push(e),n})),Object(Vn.jsxs)(ft,{children:[Object(Vn.jsx)(Nn,{active:"dashboard"}),Object(Vn.jsxs)(xt,{children:[Object(Vn.jsx)(mt,{children:"Indicadores"}),Object(Vn.jsxs)(ut,{children:[Object(Vn.jsx)(pe,{title:"BTC / R$ (24h)",data:r}),Object(Vn.jsx)(pe,{title:"Consolidado",data:d}),Object(Vn.jsx)(ke,{title:"Saldo - Semana",data:l}),Object(Vn.jsx)(ke,{title:"Saldo - M\xeas",data:s})]})]}),Object(Vn.jsxs)(pt,{children:[Object(Vn.jsx)(mt,{children:"Posi\xe7\xe3o Consolidada na Semana"}),Object(Vn.jsx)(Ae,{data:b})]})]})},wt=Tn.c.div(un||(un=Object(In.a)(["\n    height: 100vh;\n    background-color: #131313;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 100px;\n"]))),vt=Tn.c.section(pn||(pn=Object(In.a)(["\n    background-color: #2e2f2e;\n    min-height: 200px;\n    height: 90%;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    justify-content: top;\n    align-items: center;\n    padding: 2%;\n    margin-bottom: 2%;\n\n    @media(max-width: 800px) {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding-top: 2%;\n    }\n"]))),yt=Tn.c.p(mn||(mn=Object(In.a)(["\n    transition: 0.6s;    \n    text-decoration: none;\n    font-size: 1.2rem;\n    font-weight: 700;    \n    color: #68de5a;\n    font-family: 'roboto';  \n    margin-bottom: 3%;  \n\n    \n"]))),_t=function(n){var e=Object(gt.c)((function(n){return n.allInfo})).transactions,t=[];return e.map((function(n){var e={data:n.date,quantidade:n.quantidade,compra:n.compra,atual:n.atual,variancia:n.variancia};return t.push(e),n})),Object(Vn.jsxs)(wt,{children:[Object(Vn.jsx)(Nn,{active:"detalhes"}),Object(Vn.jsxs)(vt,{children:[Object(Vn.jsx)(yt,{children:"Controle de Transa\xe7\xf5es"}),Object(Vn.jsx)(Ve,{rows:t})]})]})},kt=Tn.c.div(gn||(gn=Object(In.a)(["\n    min-height: 100vh;\n    background-color: #131313;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 100px;\n"]))),St=Tn.c.section(On||(On=Object(In.a)(["\n    background-color: #2e2f2e;\n    min-height: 400px;\n    height: 60%;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    justify-content: top;\n    align-items: center;\n    padding: 2%;\n    margin-bottom: 2%;\n\n    @media(max-width: 800px) {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding-top: 2%;\n        height: 60%;\n    }\n"]))),Ct=Tn.c.section(wn||(wn=Object(In.a)(["\n    background-color: #2e2f2e;\n    min-height: 200px;\n    height: 60%;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    justify-content: top;\n    align-items: center;\n    padding: 2%;\n    margin-bottom: 2%;\n\n    @media(max-width: 800px) {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding-top: 2%;\n        height: 60%;\n    }\n"]))),Mt=Tn.c.p(vn||(vn=Object(In.a)(["\n    transition: 0.6s;    \n    text-decoration: none;\n    font-size: 1.2rem;\n    font-weight: 700;    \n    color: #68de5a;\n    font-family: 'roboto';  \n    margin-bottom: 3%;  \n\n    \n"]))),Dt=function(n){var e=Object(yn.useState)(!1),t=Object(zn.a)(e,2),a=t[0],c=t[1],i=Object(gt.c)((function(n){return n.allInfo})).searched;return 0===i.length&&!1!==a?c(!1):0!==i.length&&!0!==a&&c(!0),Object(Vn.jsxs)(kt,{children:[Object(Vn.jsx)(Nn,{active:"cadastro"}),Object(Vn.jsxs)(St,{children:[Object(Vn.jsx)(Mt,{children:"Cadastro de Transa\xe7\xf5es"}),Object(Vn.jsx)(We,{})]}),Object(Vn.jsxs)(Ct,{children:[Object(Vn.jsx)(Mt,{children:"Edi\xe7\xe3o de Transa\xe7\xf5es (Consulta por data)"}),Object(Vn.jsx)(et,{}),Object(Vn.jsx)(jt,{rows:i,show:a})]})]})};function zt(n){return Object(Vn.jsx)(Mn.a,{basename:"",children:Object(Vn.jsxs)(Dn.d,{children:[Object(Vn.jsx)(Dn.b,{path:"/dashboard",children:Object(Vn.jsx)(Ot,{props:n})}),Object(Vn.jsx)(Dn.b,{path:"/details",children:Object(Vn.jsx)(_t,{props:n})}),Object(Vn.jsx)(Dn.b,{path:"/config",children:Object(Vn.jsx)(Dt,{props:n})}),Object(Vn.jsx)(Dn.b,{path:"/",children:Object(Vn.jsx)(ht,{props:n})})]})})}var It=t(103),Tt=t(29),Et="allInfo/SET_BTC_24H",At="allInfo/SET_CONSOLIDADO",Ft="allInfo/SET_SALDO_SEMANA",Ht="allInfo/SET_SALDO_MES",Rt="allInfo/SET_DATA_CHART",Bt="allInfo/SET_TRANSACTIONS",qt="allInfo/SET_SEARCHED",$t={btc24h:{atual:0,maximo:0,minimo:0},consolidado:{investido:0,atual:0,lucro:0},saldoSemana:{saldo:0,percent:0},saldoMes:{saldo:0,percent:0},dataChart:[{date:new Date,value:0}],transactions:[{date:new Date,quantidade:0,compra:0,atual:0,variancia:0}],searched:[{date:new Date,quantidade:0,compra:0}]},Lt=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Et:return Object(Tt.a)(Object(Tt.a)({},n),{},{btc24h:e.payload});case At:return Object(Tt.a)(Object(Tt.a)({},n),{},{consolidado:e.payload});case Ft:return Object(Tt.a)(Object(Tt.a)({},n),{},{saldoSemana:e.payload});case Ht:return Object(Tt.a)(Object(Tt.a)({},n),{},{saldoMes:e.payload});case Rt:return Object(Tt.a)(Object(Tt.a)({},n),{},{dataChart:e.payload});case Bt:return Object(Tt.a)(Object(Tt.a)({},n),{},{transactions:e.payload});case qt:return Object(Tt.a)(Object(Tt.a)({},n),{},{searched:e.payload});default:return n}},Pt=function(n){return{type:Bt,payload:n}},Vt=Object(It.a)({allInfo:Lt}),Nt=Object(It.b)(Vt),Qt=t(201),Yt=t.n(Qt).a.create({baseURL:"https://gama-backend-api.herokuapp.com"}),Gt=function(){return Yt.get("/transactions").then((function(n){return n.data})).catch((function(n){return console.log("erro getAlarmms: "+n),n}))},Jt=function(){var n=Object(gt.c)((function(n){return n.allInfo})),e=n.btc24h,t=(n.consolidado,n.saldoSemana,n.saldoMes,n.dataChart,n.transactions,Object(gt.b)());return Object(yn.useEffect)((function(){var n=setInterval((function(){try{Gt().then((function(n){console.log(n.transactions.transactions);var a=n.transactions.transactions,c=[];0!==a.length?a.map((function(n){console.log(n);var t={date:new Date(n.transactionAt),quantidade:n.amount,compra:parseInt(n.value).toFixed(2),atual:parseInt(e.atual).toFixed(2),variancia:parseInt(n.variationValue).toFixed(2)};return console.log(n.transactionAt),console.log(new Date(n.transactionAt)),c.push(t),n})):t(Pt([])),t(Pt(c))})).catch((function(n){console.log(n)}));var n={atual:Math.floor(1e3*Math.random()),maximo:Math.floor(1e3*Math.random()),minimo:Math.floor(1e3*Math.random())};t(function(n){return{type:Et,payload:n}}(n));var a={investido:Math.floor(1e3*Math.random()),atual:Math.floor(1e3*Math.random()),lucro:Math.floor(1e3*Math.random())};t(function(n){return{type:At,payload:n}}(a));var c=new Date,i=[{date:new Date(c.setDate(c.getDate()+Math.floor(10*Math.random()))),value:Math.floor(1e3*Math.random())},{date:new Date(c.setDate(c.getDate()+Math.floor(10*Math.random()))),value:Math.floor(1e3*Math.random())},{date:new Date(c.setDate(c.getDate()+Math.floor(10*Math.random()))),value:Math.floor(1e3*Math.random())}];t(function(n){return{type:Rt,payload:n}}(i))}catch(o){}}),3e4);return function(){return clearInterval(n)}}),[]),Object(Vn.jsx)(Vn.Fragment,{})};var Kt=function(){return Object(Vn.jsx)(Vn.Fragment,{children:Object(Vn.jsxs)(gt.a,{store:Nt,children:[Object(Vn.jsx)(Cn.a,{}),Object(Vn.jsx)(Jt,{}),Object(Vn.jsx)(zt,{})]})})},Ut=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,395)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),a(n),c(n),i(n),o(n)}))};Sn.a.render(Object(Vn.jsx)(_n.a.StrictMode,{children:Object(Vn.jsx)(Kt,{})}),document.getElementById("root")),Ut()}},[[384,1,2]]]);
//# sourceMappingURL=main.90d0c295.chunk.js.map