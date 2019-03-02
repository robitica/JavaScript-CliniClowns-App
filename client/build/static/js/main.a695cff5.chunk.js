(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},126:function(e,t){},129:function(e,t,a){},131:function(e,t,a){},133:function(e,t,a){},135:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(50),s=a.n(l),o=(a(61),a(2)),c=a(3),i=a(5),m=a(4),u=a(6),d=a(140),h=a(139),p=a(138),f=a(141),v=(a(63),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("token"),this.props.history.push("/")}},{key:"render",value:function(){var e=r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/register",className:"nav-link"},"Register")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/clowns",className:"nav-link"},"Clowns")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/videos",className:"nav-link"},"Videos"))),t=r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/profile",className:"nav-link"},"User")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/videochat",className:"nav-link"},"Video Chat")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#",onClick:this.logOut.bind(this),className:"nav-link"},"Logout")));return r.a.createElement("nav",null,localStorage.token?t:e)}}]),t}(n.Component)),b=Object(f.a)(v),E=(a(68),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b,null),r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Map")))}}]),t}(n.Component)),g=a(13),N=a(7),w=a(11),y=a.n(w),O=(a(88),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={email:"",password:""},e.onChange=e.onChange.bind(Object(N.a)(Object(N.a)(e))),e.onSubmit=e.onSubmit.bind(Object(N.a)(Object(N.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return y.a.post("users/login",{email:e.email,password:e.password}).then(function(e){return localStorage.setItem("token",e.data),e.data}).catch(function(e){console.log(e)})}({email:this.state.email,password:this.state.password}).then(function(e){e&&t.props.history.push("/")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),r.a.createElement("button",{type:"submit"},"Sign in")))))}}]),t}(n.Component)),j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={nickname:"",first_name:"",last_name:"",email:"",password:""},e.onChange=e.onChange.bind(Object(N.a)(Object(N.a)(e))),e.onSubmit=e.onSubmit.bind(Object(N.a)(Object(N.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a,n={nickname:this.state.nickname,first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,password:this.state.password};(a=n,y.a.post("/clowns/register",{nickname:a.nickname,firstName:a.firstName,lastName:a.lastName,email:a.email,password:a.password}).then(function(e){console.log("Registered")})).then(function(e){t.props.history.push("/login")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nickname"},"Nickname"),r.a.createElement("input",{type:"text",className:"form-control",name:"nickname",placeholder:"Enter Fist Name",value:this.state.nickname,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"first_name"},"First Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"first_name",placeholder:"Enter Fist Name",value:this.state.first_name,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"last_name"},"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"last_name",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register")))))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={email:"",password:""},e.onChange=e.onChange.bind(Object(N.a)(Object(N.a)(e))),e.onSubmit=e.onSubmit.bind(Object(N.a)(Object(N.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a,n={email:this.state.email,password:this.state.password};(a=n,y.a.post("/clowns/login",{email:a.email,password:a.password}).then(function(e){return localStorage.setItem("token",e.data),e.data}).catch(function(e){console.log(e)})).then(function(e){e&&t.props.history.push("/")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),r.a.createElement("button",{type:"submit"},"Sign in")))))}}]),t}(n.Component),C=(a(90),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={firstName:"",lastName:"",email:"",password:""},e.onChange=e.onChange.bind(Object(N.a)(Object(N.a)(e))),e.onSubmit=e.onSubmit.bind(Object(N.a)(Object(N.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a,n={firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,password:this.state.password};(a=n,y.a.post("users/register",{firstName:a.firstName,lastName:a.lastName,email:a.email,password:a.password}).then(function(e){console.log("Registered")})).then(function(e){t.props.history.push("/login")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"firstName",placeholder:"Enter Fist Name",value:this.state.firstName,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"lastName",placeholder:"Enter Last Name",value:this.state.lastName,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register")))))}}]),t}(n.Component)),S=a(53),x=a.n(S),F=function(){if(!localStorage.getItem("token")){return{res:!1}}var e=localStorage.token;return{res:!0,user:x()(e)}},D=(a(94),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={id:"",nickname:"",firstName:"",lastName:"",email:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=F();!0===e.res?"user"===e.user.type?this.setState({id:e.user.id,firstName:e.user.firstName,lastName:e.user.lastName,email:e.user.email}):"clown"===e.user.type&&this.setState({id:e.user.id,nickname:e.user.nickname,firstName:e.user.firstName,lastName:e.user.lastName,email:e.user.email}):this.props.history.push("/login")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron mt-5"},r.a.createElement("div",{className:"col-sm-8 mx-auto"},r.a.createElement("h1",{className:"text-center"},"PROFILE")),r.a.createElement("table",{className:"table col-md-6 mx-auto"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Id"),r.a.createElement("td",null,this.state.id)),r.a.createElement("tr",null,r.a.createElement("td",null,"First Name"),r.a.createElement("td",null,this.state.firstName)),r.a.createElement("tr",null,r.a.createElement("td",null,"Last Name"),r.a.createElement("td",null,this.state.lastName)),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,this.state.email))))))}}]),t}(n.Component)),P=(a(96),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onClick=function(t){t.preventDefault(),e.props.history.goBack()},e.state={},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("a",{href:"#",onClick:this.onClick},"Terug"))}}]),t}(n.Component)),U=Object(f.a)(P),L=(a(98),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={youTubeVideos:[],youTubeVideosUrl:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAxljpEKy0-vwjWrGJEYcOsohzfBDPe8wE&channelId=UCbcMVpCRxwcqaT1wiWM_ocg&part=snippet,id&order=date&maxResults=20").then(function(e){return e.json()}).then(function(t){e.setState({youTubeVideos:t.items});var a=[];e.state.youTubeVideos.forEach(function(e){if(e.id.videoId){var t="https://www.youtube.com/embed/"+e.id.videoId;a.push(t)}}),e.setState({youTubeVideosUrl:a})})}},{key:"render",value:function(){var e=this.state.youTubeVideosUrl.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("iframe",{width:"560",height:"315",src:e,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))});return r.a.createElement("div",{className:"container"},r.a.createElement(U,null),r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Videos"),r.a.createElement("ul",null,e)))}}]),t}(n.Component)),R=a(30),V=a.n(R),q=a(54),I=(a(102),a(55)),_=a.n(I),T=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={id:"",nickname:"",firstName:"",lastName:"",email:"",connection:new RTCPeerConnection({iceServers:[{url:"stun:stun2.1.google.com:19302"}]}),name:null,otherUsername:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=F();!0===t.res?"user"===t.user.type?this.setState({id:t.user.id,firstName:t.user.firstName,lastName:t.user.lastName,email:t.user.email}):"clown"===t.user.type&&this.setState({id:t.user.id,nickname:t.user.nickname,firstName:t.user.firstName,lastName:t.user.lastName,email:t.user.email}):this.props.history.push("/login");var a=_()();a.on("message",function(e){console.log("Got message",e);var t=JSON.parse(e);switch(t.type){case"login":r(t.success);break;case"offer":l(t.offer,t.username);break;case"answer":s(t.answer);break;case"candidate":o(t.candidate);break;case"close":c()}});var n=function(t){e.state.otherUsername&&(t.otherUsername=e.state.otherUsername),a.emit("message",JSON.stringify(t))};document.querySelector("div#call").style.display="none",document.querySelector("button#login").addEventListener("click",function(e){document.querySelector("#username").value.length<0?alert("Please enter a username \ud83d\ude42"):n({type:"login",username:t.user.firstName})});var r=function(){var t=Object(q.a)(V.a.mark(function t(a){var r;return V.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==a){t.next=4;break}alert("\ud83d\ude1e Username already taken"),t.next=20;break;case 4:return document.querySelector("div#login").style.display="none",document.querySelector("div#call").style.display="block",t.prev=6,t.next=9,navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:!0});case 9:r=t.sent,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(6),alert("".concat(t.t0.name)),console.error(t.t0);case 16:document.querySelector("video#local").srcObject=r,e.state.connection.addStream(r),e.state.connection.onaddstream=function(e){document.querySelector("video#remote").srcObject=e.stream},e.state.connection.onicecandidate=function(e){e.candidate&&n({type:"candidate",candidate:e.candidate})};case 20:case"end":return t.stop()}},t,this,[[6,12]])}));return function(e){return t.apply(this,arguments)}}();document.querySelector("button#call").addEventListener("click",function(){var t=document.querySelector("input#username-to-call").value;0!==t.length?(e.setState({otherUsername:t}),e.state.connection.createOffer(function(t){n({type:"offer",offer:t}),e.state.connection.setLocalDescription(t)},function(e){alert("Error when creating an offer"),console.error(e)})):alert("Enter a username \ud83d\ude09")});var l=function(t,a){e.setState({otherUsername:a}),e.state.connection.setRemoteDescription(new RTCSessionDescription(t)),e.state.connection.createAnswer(function(t){e.state.connection.setLocalDescription(t),n({type:"answer",answer:t})},function(e){alert("Error when creating an answer"),console.error(e)})},s=function(t){e.state.connection.setRemoteDescription(new RTCSessionDescription(t))},o=function(t){e.state.connection.addIceCandidate(new RTCIceCandidate(t))};document.querySelector("button#close-call").addEventListener("click",function(){n({type:"close"}),c()});var c=function(){e.setState({otherUsername:null}),document.querySelector("video#remote").src=null,e.state.connection.close(),e.state.connection.onicecandidate=null,e.state.connection.onaddstream=null}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"login"},r.a.createElement("label",{htmlFor:"username"},"Login"),r.a.createElement("input",{id:"username",placeholder:"Login",required:"",autoFocus:""}),r.a.createElement("button",{id:"login"},"Login")),r.a.createElement("div",{id:"call"},r.a.createElement("video",{id:"local",autoPlay:!0}),r.a.createElement("video",{id:"remote",autoPlay:!0}),r.a.createElement("div",null,r.a.createElement("input",{id:"username-to-call",placeholder:"Username to call"}),r.a.createElement("button",{id:"call"},"Call"),r.a.createElement("button",{id:"close-call"},"Close call"))))}}]),t}(n.Component),M=(a(129),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={clowns:[]},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/clowns/all").then(function(t){e.setState({clowns:t.data})})}},{key:"render",value:function(){var e=this.state.clowns.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{src:window.location.origin+e.image,alt:"foto "+e.nickname}),r.a.createElement("a",{href:"clowns/"+e.id},e.nickname))});return r.a.createElement("div",{className:"container"},r.a.createElement(U,null),r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Clowns"),r.a.createElement("ul",null,e)))}}]),t}(n.Component)),A=(a(131),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={firstName:"",lastName:"",imageUrl:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.match.params.id,y.a.get("/clowns/"+e)).then(function(e){t.setState({firstName:e.data.firstName,lastName:e.data.lastName,imageUrl:"../src/logo.svg"})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(U,null),r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},this.state.firstName," ",this.state.lastName)))}}]),t}(n.Component)),B=(a(133),a(135),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{exact:!0,path:"/",component:E}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{exact:!0,path:"/register",component:C}),r.a.createElement(h.a,{exact:!0,path:"/login",component:O}),r.a.createElement(h.a,{exact:!0,path:"/profile",component:D}),r.a.createElement(h.a,{exact:!0,path:"/videos",component:L}),r.a.createElement(h.a,{exact:!0,path:"/videochat",component:T}),r.a.createElement(h.a,{exact:!0,path:"/clowns",component:M}),r.a.createElement(h.a,{exact:!0,path:"/clowns/:id",component:A}),r.a.createElement(h.a,{exact:!0,path:"/clowns/login",component:k}),r.a.createElement(h.a,{exact:!0,path:"/clowns/register",component:j}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){e.exports=a(137)},61:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){}},[[56,2,1]]]);
//# sourceMappingURL=main.a695cff5.chunk.js.map