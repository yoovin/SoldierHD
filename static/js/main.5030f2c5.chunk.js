(this.webpackJsonpsoldierhd=this.webpackJsonpsoldierhd||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(7),c=t.n(s),m=(t(13),t(1)),r=t(2),i=t(4),o=t(3),E=t(5),p=(t(14),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={allTimeLeft:0,allTimePer:0},t.msToTime=function(e){var a=(e=(e-e%1e3)/1e3)%60,t=(e=(e-a)/60)%60,n=Math.floor((e-t)/1440);return{day:n,hour:(e-t)/60-24*n,minute:t,second:a}},t.printLeftTime=function(){var e=new Date,a=Date.parse(e),n=new Date(2019,4,13,14),l=new Date(2020,11,12,8),s=Date.parse(n),c=Date.parse(l),m=c-a,r=new Date(2019,8,1),i=Date.parse(r)-a,o=new Date(2020,2,1),E=Date.parse(o)-a,p=new Date(2020,8,1),u=Date.parse(p)-a,h=(a-s)/(c-s)*100;t.setState({allTimeLeft:m,allTimePer:h.toFixed(6),ilgyeongLeft:i,sanggyeongLeft:E,sugyeongLeft:u}),setTimeout(t.printLeftTime,1e3)},t}return Object(E.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.printLeftTime()}},{key:"render",value:function(){var e=this.state,a=e.allTimeLeft,t=e.allTimePer,n=e.ilgyeongLeft,s=e.sanggyeongLeft,c=e.sugyeongLeft,m=this.msToTime(a),r=m.day,i=m.hour,o=m.minute,E=m.second,p=this.msToTime(n),u=this.msToTime(s),h=this.msToTime(c);return l.a.createElement("div",null,l.a.createElement("span",{className:"hangleLeftGuide"},"\ud604\ub300\uc758 \ub0a8\uc740 \uad70\uc0dd\ud65c"),l.a.createElement("br",null),l.a.createElement("span",{className:"time"},r),l.a.createElement("span",{className:"hangleTime"},"\uc77c"),l.a.createElement("br",null),l.a.createElement("span",{className:"time"},i),l.a.createElement("span",{className:"hangleTime"},"\uc2dc\uac04 "),l.a.createElement("span",{className:"time"},o),l.a.createElement("span",{className:"hangleTime"},"\ubd84 "),l.a.createElement("br",null),l.a.createElement("span",{className:"time",style:{color:"#ffad33"}},E),l.a.createElement("span",{className:"hangleTime"},"\ucd08"),l.a.createElement("br",null),l.a.createElement("span",{className:"percent",style:{color:"#808080"}},t),l.a.createElement("span",{className:"hangleTime"},"%"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"solStart"},"\uad70\uc0dd\ud65c \uc2dc\uc791 : 2019\ub144 5\uc6d4 13\uc77c"),l.a.createElement("br",null),l.a.createElement("span",{className:"solStart"},"\uad70\uc0dd\ud65c \ub05d : 2020\ub144 12\uc6d4 12\uc77c"),l.a.createElement("br",null),l.a.createElement("div",{className:"classIn"},l.a.createElement("span",{className:"cUp"},"\uc77c\ubcd1 \uc9c4\uae09"),l.a.createElement("br",null),n>0?l.a.createElement("div",null,l.a.createElement("span",{className:"ctime"},p.day),l.a.createElement("span",{className:"changleTime"},"\uc77c "),l.a.createElement("span",{className:"ctime"},p.hour),l.a.createElement("span",{className:"changleTime"},"\uc2dc\uac04 "),l.a.createElement("span",{className:"ctime"},p.minute),l.a.createElement("span",{className:"changleTime"},"\ubd84 "),l.a.createElement("span",{className:"ctime"},p.second),l.a.createElement("span",{className:"changleTime"},"\ucd08"),l.a.createElement("br",null)):l.a.createElement("div",null,l.a.createElement("span",{className:"cUp"},"2019 / 09 / 01 \uc790\ub85c \uc9c4\uae09!"))),l.a.createElement("br",null),l.a.createElement("div",{className:"classIn"},l.a.createElement("span",{className:"cUp"},"\uc0c1\ubcd1 \uc9c4\uae09"),l.a.createElement("br",null),s>0?l.a.createElement("div",null,l.a.createElement("span",{className:"ctime"},u.day),l.a.createElement("span",{className:"changleTime"},"\uc77c "),l.a.createElement("span",{className:"ctime"},u.hour),l.a.createElement("span",{className:"changleTime"},"\uc2dc\uac04 "),l.a.createElement("span",{className:"ctime"},u.minute),l.a.createElement("span",{className:"changleTime"},"\ubd84 "),l.a.createElement("span",{className:"ctime"},u.second),l.a.createElement("span",{className:"changleTime"},"\ucd08"),l.a.createElement("br",null)):l.a.createElement("div",null,l.a.createElement("span",{className:"cUp"},"2020 / 03 / 01 \uc790\ub85c \uc9c4\uae09!"))),l.a.createElement("br",null),l.a.createElement("div",{className:"classIn"},l.a.createElement("span",{className:"cUp"},"\ubcd1\uc7a5 \uc9c4\uae09"),l.a.createElement("br",null),c>0?l.a.createElement("div",null,l.a.createElement("span",{className:"ctime"},h.day),l.a.createElement("span",{className:"changleTime"},"\uc77c "),l.a.createElement("span",{className:"ctime"},h.hour),l.a.createElement("span",{className:"changleTime"},"\uc2dc\uac04 "),l.a.createElement("span",{className:"ctime"},h.minute),l.a.createElement("span",{className:"changleTime"},"\ubd84 "),l.a.createElement("span",{className:"ctime"},h.second),l.a.createElement("span",{className:"changleTime"},"\ucd08"),l.a.createElement("br",null)):l.a.createElement("div",null,l.a.createElement("span",{className:"cUp"},"2020 / 09 / 01 \uc790\ub85c \uc9c4\uae09!"))))}}]),a}(n.Component)),u=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"out"},l.a.createElement("div",{className:"in"},l.a.createElement(p,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.5030f2c5.chunk.js.map