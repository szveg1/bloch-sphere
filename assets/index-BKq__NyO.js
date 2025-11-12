(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var os,yt,su,Wi,ol,ou,lu,cu,Mo,y0,S0,Gr={},uu=[],Yh=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ls=Array.isArray;function ti(n,e){for(var t in e)n[t]=e[t];return n}function wo(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function $h(n,e,t){var i,r,a,s={};for(a in e)a=="key"?i=e[a]:a=="ref"?r=e[a]:s[a]=e[a];if(arguments.length>2&&(s.children=arguments.length>3?os.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)s[a]===void 0&&(s[a]=n.defaultProps[a]);return Ba(n,s,i,r,null)}function Ba(n,e,t,i,r){var a={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++su,__i:-1,__u:0};return r==null&&yt.vnode!=null&&yt.vnode(a),a}function cs(n){return n.children}function Ha(n,e){this.props=n,this.context=e}function _r(n,e){if(e==null)return n.__?_r(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?_r(n):null}function hu(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return hu(n)}}function ll(n){(!n.__d&&(n.__d=!0)&&Wi.push(n)&&!Za.__r++||ol!=yt.debounceRendering)&&((ol=yt.debounceRendering)||ou)(Za)}function Za(){for(var n,e,t,i,r,a,s,o=1;Wi.length;)Wi.length>o&&Wi.sort(lu),n=Wi.shift(),o=Wi.length,n.__d&&(t=void 0,i=void 0,r=(i=(e=n).__v).__e,a=[],s=[],e.__P&&((t=ti({},i)).__v=i.__v+1,yt.vnode&&yt.vnode(t),To(e.__P,t,i,e.__n,e.__P.namespaceURI,32&i.__u?[r]:null,a,r??_r(i),!!(32&i.__u),s),t.__v=i.__v,t.__.__k[t.__i]=t,pu(a,t,s),i.__e=i.__=null,t.__e!=r&&hu(t)));Za.__r=0}function du(n,e,t,i,r,a,s,o,l,c,h){var u,p,m,v,_,g,f,M=i&&i.__k||uu,A=e.length;for(l=Kh(t,e,M,l,A),u=0;u<A;u++)(m=t.__k[u])!=null&&(p=m.__i==-1?Gr:M[m.__i]||Gr,m.__i=u,g=To(n,m,p,r,a,s,o,l,c,h),v=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&Eo(p.ref,null,m),h.push(m.ref,m.__c||v,m)),_==null&&v!=null&&(_=v),(f=!!(4&m.__u))||p.__k===m.__k?l=fu(m,l,n,f):typeof m.type=="function"&&g!==void 0?l=g:v&&(l=v.nextSibling),m.__u&=-7);return t.__e=_,l}function Kh(n,e,t,i,r){var a,s,o,l,c,h=t.length,u=h,p=0;for(n.__k=new Array(r),a=0;a<r;a++)(s=e[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(l=a+p,(s=n.__k[a]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?Ba(null,s,null,null,null):ls(s)?Ba(cs,{children:s},null,null,null):s.constructor==null&&s.__b>0?Ba(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=n,s.__b=n.__b+1,o=null,(c=s.__i=Zh(s,t,l,u))!=-1&&(u--,(o=t[c])&&(o.__u|=2)),o==null||o.__v==null?(c==-1&&(r>h?p--:r<h&&p++),typeof s.type!="function"&&(s.__u|=4)):c!=l&&(c==l-1?p--:c==l+1?p++:(c>l?p--:p++,s.__u|=4))):n.__k[a]=null;if(u)for(a=0;a<h;a++)(o=t[a])!=null&&(2&o.__u)==0&&(o.__e==i&&(i=_r(o)),xu(o,o));return i}function fu(n,e,t,i){var r,a;if(typeof n.type=="function"){for(r=n.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=n,e=fu(r[a],e,t,i));return e}n.__e!=e&&(i&&(e&&n.type&&!e.parentNode&&(e=_r(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Zh(n,e,t,i){var r,a,s,o=n.key,l=n.type,c=e[t],h=c!=null&&(2&c.__u)==0;if(c===null&&n.key==null||h&&o==c.key&&l==c.type)return t;if(i>(h?1:0)){for(r=t-1,a=t+1;r>=0||a<e.length;)if((c=e[s=r>=0?r--:a++])!=null&&(2&c.__u)==0&&o==c.key&&l==c.type)return s}return-1}function cl(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Yh.test(e)?t:t+"px"}function aa(n,e,t,i,r){var a,s;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||cl(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||cl(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(cu,"$1")),s=e.toLowerCase(),e=s in n||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?i?t.u=i.u:(t.u=Mo,n.addEventListener(e,a?S0:y0,a)):n.removeEventListener(e,a?S0:y0,a);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function ul(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=Mo++;else if(e.t<t.u)return;return t(yt.event?yt.event(e):e)}}}function To(n,e,t,i,r,a,s,o,l,c){var h,u,p,m,v,_,g,f,M,A,R,L,C,N,O,w,E,U=e.type;if(e.constructor!=null)return null;128&t.__u&&(l=!!(32&t.__u),a=[o=e.__e=t.__e]),(h=yt.__b)&&h(e);e:if(typeof U=="function")try{if(f=e.props,M="prototype"in U&&U.prototype.render,A=(h=U.contextType)&&i[h.__c],R=h?A?A.props.value:h.__:i,t.__c?g=(u=e.__c=t.__c).__=u.__E:(M?e.__c=u=new U(f,R):(e.__c=u=new Ha(f,R),u.constructor=U,u.render=Jh),A&&A.sub(u),u.props=f,u.state||(u.state={}),u.context=R,u.__n=i,p=u.__d=!0,u.__h=[],u._sb=[]),M&&u.__s==null&&(u.__s=u.state),M&&U.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=ti({},u.__s)),ti(u.__s,U.getDerivedStateFromProps(f,u.__s))),m=u.props,v=u.state,u.__v=e,p)M&&U.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),M&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(M&&U.getDerivedStateFromProps==null&&f!==m&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(f,R),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(f,u.__s,R)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(u.props=f,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(B){B&&(B.__=e)}),L=0;L<u._sb.length;L++)u.__h.push(u._sb[L]);u._sb=[],u.__h.length&&s.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(f,u.__s,R),M&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(m,v,_)})}if(u.context=R,u.props=f,u.__P=n,u.__e=!1,C=yt.__r,N=0,M){for(u.state=u.__s,u.__d=!1,C&&C(e),h=u.render(u.props,u.state,u.context),O=0;O<u._sb.length;O++)u.__h.push(u._sb[O]);u._sb=[]}else do u.__d=!1,C&&C(e),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++N<25);u.state=u.__s,u.getChildContext!=null&&(i=ti(ti({},i),u.getChildContext())),M&&!p&&u.getSnapshotBeforeUpdate!=null&&(_=u.getSnapshotBeforeUpdate(m,v)),w=h,h!=null&&h.type===cs&&h.key==null&&(w=mu(h.props.children)),o=du(n,ls(w)?w:[w],e,t,i,r,a,s,o,l,c),u.base=e.__e,e.__u&=-161,u.__h.length&&s.push(u),g&&(u.__E=u.__=null)}catch(B){if(e.__v=null,l||a!=null)if(B.then){for(e.__u|=l?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;a[a.indexOf(o)]=null,e.__e=o}else{for(E=a.length;E--;)wo(a[E]);M0(e)}else e.__e=t.__e,e.__k=t.__k,B.then||M0(e);yt.__e(B,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):o=e.__e=jh(t.__e,e,t,i,r,a,s,l,c);return(h=yt.diffed)&&h(e),128&e.__u?void 0:o}function M0(n){n&&n.__c&&(n.__c.__e=!0),n&&n.__k&&n.__k.forEach(M0)}function pu(n,e,t){for(var i=0;i<t.length;i++)Eo(t[i],t[++i],t[++i]);yt.__c&&yt.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(a){a.call(r)})}catch(a){yt.__e(a,r.__v)}})}function mu(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:ls(n)?n.map(mu):ti({},n)}function jh(n,e,t,i,r,a,s,o,l){var c,h,u,p,m,v,_,g=t.props,f=e.props,M=e.type;if(M=="svg"?r="http://www.w3.org/2000/svg":M=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((m=a[c])&&"setAttribute"in m==!!M&&(M?m.localName==M:m.nodeType==3)){n=m,a[c]=null;break}}if(n==null){if(M==null)return document.createTextNode(f);n=document.createElementNS(r,M,f.is&&f),o&&(yt.__m&&yt.__m(e,a),o=!1),a=null}if(M==null)g===f||o&&n.data==f||(n.data=f);else{if(a=a&&os.call(n.childNodes),g=t.props||Gr,!o&&a!=null)for(g={},c=0;c<n.attributes.length;c++)g[(m=n.attributes[c]).name]=m.value;for(c in g)if(m=g[c],c!="children"){if(c=="dangerouslySetInnerHTML")u=m;else if(!(c in f)){if(c=="value"&&"defaultValue"in f||c=="checked"&&"defaultChecked"in f)continue;aa(n,c,null,m,r)}}for(c in f)m=f[c],c=="children"?p=m:c=="dangerouslySetInnerHTML"?h=m:c=="value"?v=m:c=="checked"?_=m:o&&typeof m!="function"||g[c]===m||aa(n,c,m,g[c],r);if(h)o||u&&(h.__html==u.__html||h.__html==n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(u&&(n.innerHTML=""),du(e.type=="template"?n.content:n,ls(p)?p:[p],e,t,i,M=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,s,a?a[0]:t.__k&&_r(t,0),o,l),a!=null)for(c=a.length;c--;)wo(a[c]);o||(c="value",M=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[c]||M=="progress"&&!v||M=="option"&&v!=g[c])&&aa(n,c,v,g[c],r),c="checked",_!=null&&_!=n[c]&&aa(n,c,_,g[c],r))}return n}function Eo(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(r){yt.__e(r,t)}}function xu(n,e,t){var i,r;if(yt.unmount&&yt.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||Eo(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){yt.__e(a,e)}i.base=i.__P=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&xu(i[r],e,t||typeof n.type!="function");t||wo(n.__e),n.__c=n.__=n.__e=void 0}function Jh(n,e,t){return this.constructor(n,t)}function Qh(n,e,t){var i,r,a,s;e==document&&(e=document.documentElement),yt.__&&yt.__(n,e),r=(i=!1)?null:e.__k,a=[],s=[],To(e,n=e.__k=$h(cs,null,[n]),r||Gr,Gr,e.namespaceURI,r?null:e.firstChild?os.call(e.childNodes):null,a,r?r.__e:e.firstChild,i,s),pu(a,n,s)}os=uu.slice,yt={__e:function(n,e,t,i){for(var r,a,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(n)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,i||{}),s=r.__d),s)return r.__E=r}catch(o){n=o}throw n}},su=0,Ha.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ti({},this.state),typeof n=="function"&&(n=n(ti({},t),this.props)),n&&ti(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),ll(this))},Ha.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ll(this))},Ha.prototype.render=cs,Wi=[],ou=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,lu=function(n,e){return n.__v.__b-e.__v.__b},Za.__r=0,cu=/(PointerCapture)$|Capture$/i,Mo=0,y0=ul(!1),S0=ul(!0);var ed=0;function Ei(n,e,t,i,r,a){e||(e={});var s,o,l=e;if("ref"in l)for(o in l={},e)o=="ref"?s=e[o]:l[o]=e[o];var c={type:n,props:l,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ed,__i:-1,__u:0,__source:r,__self:a};if(typeof n=="function"&&(s=n.defaultProps))for(o in s)l[o]===void 0&&(l[o]=s[o]);return yt.vnode&&yt.vnode(c),c}function td(){return Ei("div",{class:"Controls",children:Ei("h1",{class:"h1",children:"Bloch Sphere Visualization"})})}var w0,ln,As,hl,dl=0,gu=[],Ot=yt,fl=Ot.__b,pl=Ot.__r,ml=Ot.diffed,xl=Ot.__c,gl=Ot.unmount,vl=Ot.__;function nd(n,e){Ot.__h&&Ot.__h(ln,n,dl||e),dl=0;var t=ln.__H||(ln.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function id(n,e){var t=nd(w0++,3);!Ot.__s&&sd(t.__H,e)&&(t.__=n,t.u=e,ln.__H.__h.push(t))}function rd(){for(var n;n=gu.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Va),n.__H.__h.forEach(T0),n.__H.__h=[]}catch(e){n.__H.__h=[],Ot.__e(e,n.__v)}}Ot.__b=function(n){ln=null,fl&&fl(n)},Ot.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),vl&&vl(n,e)},Ot.__r=function(n){pl&&pl(n),w0=0;var e=(ln=n.__c).__H;e&&(As===ln?(e.__h=[],ln.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(Va),e.__h.forEach(T0),e.__h=[],w0=0)),As=ln},Ot.diffed=function(n){ml&&ml(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(gu.push(e)!==1&&hl===Ot.requestAnimationFrame||((hl=Ot.requestAnimationFrame)||ad)(rd)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),As=ln=null},Ot.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Va),t.__h=t.__h.filter(function(i){return!i.__||T0(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],Ot.__e(i,t.__v)}}),xl&&xl(n,e)},Ot.unmount=function(n){gl&&gl(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{Va(i)}catch(r){e=r}}),t.__H=void 0,e&&Ot.__e(e,t.__v))};var _l=typeof requestAnimationFrame=="function";function ad(n){var e,t=function(){clearTimeout(i),_l&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);_l&&(e=requestAnimationFrame(t))}function Va(n){var e=ln,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),ln=e}function T0(n){var e=ln;n.__c=n.__(),ln=e}function sd(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}const Ao="181",od=0,bl=1,ld=2,vu=1,cd=2,Jn=3,Ci=0,cn=1,ei=2,ai=0,xr=1,yl=2,Sl=3,Ml=4,ud=5,qi=100,hd=101,dd=102,fd=103,pd=104,md=200,xd=201,gd=202,vd=203,E0=204,A0=205,_d=206,bd=207,yd=208,Sd=209,Md=210,wd=211,Td=212,Ed=213,Ad=214,C0=0,R0=1,D0=2,br=3,P0=4,L0=5,I0=6,N0=7,_u=0,Cd=1,Rd=2,Ai=0,Dd=1,Pd=2,Ld=3,Id=4,Nd=5,Ud=6,Fd=7,bu=300,yr=301,Sr=302,U0=303,F0=304,us=306,k0=1e3,ni=1001,z0=1002,xn=1003,kd=1004,sa=1005,wn=1006,Cs=1007,Yi=1008,ci=1009,yu=1010,Su=1011,Wr=1012,Co=1013,$i=1014,ii=1015,Er=1016,Ro=1017,Do=1018,qr=1020,Mu=35902,wu=35899,Tu=1021,Eu=1022,In=1023,Xr=1026,Yr=1027,Au=1028,Po=1029,Lo=1030,Io=1031,No=1033,Ga=33776,Wa=33777,qa=33778,Xa=33779,O0=35840,B0=35841,H0=35842,V0=35843,G0=36196,W0=37492,q0=37496,X0=37808,Y0=37809,$0=37810,K0=37811,Z0=37812,j0=37813,J0=37814,Q0=37815,eo=37816,to=37817,no=37818,io=37819,ro=37820,ao=37821,so=36492,oo=36494,lo=36495,co=36283,uo=36284,ho=36285,fo=36286,zd=3200,Od=3201,Bd=0,Hd=1,Mi="",yn="srgb",Mr="srgb-linear",ja="linear",_t="srgb",Qi=7680,wl=519,Vd=512,Gd=513,Wd=514,Cu=515,qd=516,Xd=517,Yd=518,$d=519,Tl=35044,El="300 es",On=2e3,Ja=2001;function Ru(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kd(){const n=Qa("canvas");return n.style.display="block",n}const Al={};function Cl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ke(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Ut(...n){const e="THREE."+n.shift();console.error(e,...n)}function $r(...n){const e=n.join(" ");e in Al||(Al[e]=!0,Ke(...n))}function Zd(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ya=Math.PI/180,po=180/Math.PI;function jr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function jd(n,e){return(n%e+e)%e}function Rs(n,e,t){return(1-t)*n+t*e}function Ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],p=a[s+0],m=a[s+1],v=a[s+2],_=a[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(u!==_||l!==p||c!==m||h!==v){let g=l*p+c*m+h*v+u*_;g<0&&(p=-p,m=-m,v=-v,_=-_,g=-g);let f=1-o;if(g<.9995){const M=Math.acos(g),A=Math.sin(M);f=Math.sin(f*M)/A,o=Math.sin(o*M)/A,l=l*f+p*o,c=c*f+m*o,h=h*f+v*o,u=u*f+_*o}else{l=l*f+p*o,c=c*f+m*o,h=h*f+v*o,u=u*f+_*o;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=a[s],p=a[s+1],m=a[s+2],v=a[s+3];return e[t]=o*v+h*u+l*m-c*p,e[t+1]=l*v+h*p+c*u-o*m,e[t+2]=c*v+h*m+o*p-l*u,e[t+3]=h*v-o*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(a/2),p=l(i/2),m=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=p*h*u+c*m*v,this._y=c*m*u-p*h*v,this._z=c*h*v+p*m*u,this._w=c*h*u-p*m*v;break;case"YXZ":this._x=p*h*u+c*m*v,this._y=c*m*u-p*h*v,this._z=c*h*v-p*m*u,this._w=c*h*u+p*m*v;break;case"ZXY":this._x=p*h*u-c*m*v,this._y=c*m*u+p*h*v,this._z=c*h*v+p*m*u,this._w=c*h*u-p*m*v;break;case"ZYX":this._x=p*h*u-c*m*v,this._y=c*m*u+p*h*v,this._z=c*h*v-p*m*u,this._w=c*h*u+p*m*v;break;case"YZX":this._x=p*h*u+c*m*v,this._y=c*m*u+p*h*v,this._z=c*h*v-p*m*u,this._w=c*h*u-p*m*v;break;case"XZY":this._x=p*h*u-c*m*v,this._y=c*m*u-p*h*v,this._z=c*h*v+p*m*u,this._w=c*h*u+p*m*v;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=i+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),h=2*(o*t-a*r),u=2*(a*i-s*t);return this.x=t+l*c+s*u-o*h,this.y=i+l*h+o*c-a*u,this.z=r+l*u+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ds.copy(this).projectOnVector(e),this.sub(Ds)}reflect(e){return this.sub(Ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new q,Rl=new Cr;class je{constructor(e,t,i,r,a,s,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],m=i[5],v=i[8],_=r[0],g=r[3],f=r[6],M=r[1],A=r[4],R=r[7],L=r[2],C=r[5],N=r[8];return a[0]=s*_+o*M+l*L,a[3]=s*g+o*A+l*C,a[6]=s*f+o*R+l*N,a[1]=c*_+h*M+u*L,a[4]=c*g+h*A+u*C,a[7]=c*f+h*R+u*N,a[2]=p*_+m*M+v*L,a[5]=p*g+m*A+v*C,a[8]=p*f+m*R+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,p=o*l-h*a,m=c*a-s*l,v=t*u+i*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*s)*_,e[3]=p*_,e[4]=(h*t-r*l)*_,e[5]=(r*a-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ps.makeScale(e,t)),this}rotate(e){return this.premultiply(Ps.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ps.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new je,Dl=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){const n={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===_t&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_t&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mi?ja:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return $r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return $r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mr]:{primaries:e,whitePoint:i,transfer:ja,toXYZ:Dl,fromXYZ:Pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Dl,fromXYZ:Pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const ut=Jd();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let er;class Qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{er===void 0&&(er=Qa("canvas")),er.width=e.width,er.height=e.height;const r=er.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=si(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ef=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Ls(r[s].image)):a.push(Ls(r[s]))}else a=Ls(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ls(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let tf=0;const Is=new q;class Qt extends Ar{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=ni,r=ni,a=wn,s=Yi,o=In,l=ci,c=Qt.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=jr(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Is).x}get height(){return this.source.getSize(Is).y}get depth(){return this.source.getSize(Is).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case k0:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case z0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case k0:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case z0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=bu;Qt.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],v=l[9],_=l[2],g=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,R=(m+1)/2,L=(f+1)/2,C=(h+p)/4,N=(u+_)/4,O=(v+g)/4;return A>R&&A>L?A<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(A),r=C/i,a=N/i):R>L?R<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(R),i=C/r,a=O/r):L<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),i=N/a,r=O/a),this.set(i,r,a,t),this}let M=Math.sqrt((g-v)*(g-v)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(g-v)/M,this.y=(u-_)/M,this.z=(p-h)/M,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nf extends Ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:i.depth},a=new Qt(r);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Uo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends nf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Du extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rf extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Rn):Rn.fromBufferAttribute(a,s),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oa.copy(i.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),la.subVectors(this.max,Nr),tr.subVectors(e.a,Nr),nr.subVectors(e.b,Nr),ir.subVectors(e.c,Nr),mi.subVectors(nr,tr),xi.subVectors(ir,nr),Ui.subVectors(tr,ir);let t=[0,-mi.z,mi.y,0,-xi.z,xi.y,0,-Ui.z,Ui.y,mi.z,0,-mi.x,xi.z,0,-xi.x,Ui.z,0,-Ui.x,-mi.y,mi.x,0,-xi.y,xi.x,0,-Ui.y,Ui.x,0];return!Ns(t,tr,nr,ir,la)||(t=[1,0,0,0,1,0,0,0,1],!Ns(t,tr,nr,ir,la))?!1:(ca.crossVectors(mi,xi),t=[ca.x,ca.y,ca.z],Ns(t,tr,nr,ir,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new q,new q,new q,new q,new q,new q,new q,new q],Rn=new q,oa=new Jr,tr=new q,nr=new q,ir=new q,mi=new q,xi=new q,Ui=new q,Nr=new q,la=new q,ca=new q,Fi=new q;function Ns(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Fi.fromArray(n,a);const o=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),h=i.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const af=new Jr,Ur=new q,Us=new q;class hs{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):af.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Us.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Us)),this.expandByPoint(Ur.copy(e.center).sub(Us))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xn=new q,Fs=new q,ua=new q,gi=new q,ks=new q,ha=new q,zs=new q;class Pu{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fs.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Fs);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ua),o=gi.dot(this.direction),l=-gi.dot(ua),c=gi.lengthSq(),h=Math.abs(1-s*s);let u,p,m,v;if(h>0)if(u=s*l-o,p=s*o-l,v=a*h,u>=0)if(p>=-v)if(p<=v){const _=1/h;u*=_,p*=_,m=u*(u+s*p+2*o)+p*(s*u+p+2*l)+c}else p=a,u=Math.max(0,-(s*p+o)),m=-u*u+p*(p+2*l)+c;else p=-a,u=Math.max(0,-(s*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-v?(u=Math.max(0,-(-s*a+o)),p=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+p*(p+2*l)+c):p<=v?(u=0,p=Math.min(Math.max(-a,-l),a),m=p*(p+2*l)+c):(u=Math.max(0,-(s*a+o)),p=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+p*(p+2*l)+c);else p=s>0?-a:a,u=Math.max(0,-(s*p+o)),m=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fs).addScaledVector(ua,p),m}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(a=(e.min.y-p.y)*h,s=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,s=(e.min.y-p.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,r,a){ks.subVectors(t,e),ha.subVectors(i,e),zs.crossVectors(ks,ha);let s=this.direction.dot(zs),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;gi.subVectors(this.origin,e);const l=o*this.direction.dot(ha.crossVectors(gi,ha));if(l<0)return null;const c=o*this.direction.dot(ks.cross(gi));if(c<0||l+c>s)return null;const h=-o*gi.dot(zs);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,i,r,a,s,o,l,c,h,u,p,m,v,_,g){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,h,u,p,m,v,_,g)}set(e,t,i,r,a,s,o,l,c,h,u,p,m,v,_,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=v,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),a=1/rr.setFromMatrixColumn(e,1).length(),s=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const p=s*h,m=s*u,v=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+v*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const p=l*h,m=l*u,v=c*h,_=c*u;t[0]=p+_*o,t[4]=v*o-m,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=m*o-v,t[6]=_+p*o,t[10]=s*l}else if(e.order==="ZXY"){const p=l*h,m=l*u,v=c*h,_=c*u;t[0]=p-_*o,t[4]=-s*u,t[8]=v+m*o,t[1]=m+v*o,t[5]=s*h,t[9]=_-p*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const p=s*h,m=s*u,v=o*h,_=o*u;t[0]=l*h,t[4]=v*c-m,t[8]=p*c+_,t[1]=l*u,t[5]=_*c+p,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const p=s*l,m=s*c,v=o*l,_=o*c;t[0]=l*h,t[4]=_-p*u,t[8]=v*u+m,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+v,t[10]=p-_*u}else if(e.order==="XZY"){const p=s*l,m=s*c,v=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+_,t[5]=s*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=o*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sf,e,of)}lookAt(e,t,i){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),vi.crossVectors(i,fn),vi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),vi.crossVectors(i,fn)),vi.normalize(),da.crossVectors(fn,vi),r[0]=vi.x,r[4]=da.x,r[8]=fn.x,r[1]=vi.y,r[5]=da.y,r[9]=fn.y,r[2]=vi.z,r[6]=da.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],m=i[13],v=i[2],_=i[6],g=i[10],f=i[14],M=i[3],A=i[7],R=i[11],L=i[15],C=r[0],N=r[4],O=r[8],w=r[12],E=r[1],U=r[5],B=r[9],X=r[13],K=r[2],Z=r[6],Q=r[10],se=r[14],J=r[3],de=r[7],he=r[11],De=r[15];return a[0]=s*C+o*E+l*K+c*J,a[4]=s*N+o*U+l*Z+c*de,a[8]=s*O+o*B+l*Q+c*he,a[12]=s*w+o*X+l*se+c*De,a[1]=h*C+u*E+p*K+m*J,a[5]=h*N+u*U+p*Z+m*de,a[9]=h*O+u*B+p*Q+m*he,a[13]=h*w+u*X+p*se+m*De,a[2]=v*C+_*E+g*K+f*J,a[6]=v*N+_*U+g*Z+f*de,a[10]=v*O+_*B+g*Q+f*he,a[14]=v*w+_*X+g*se+f*De,a[3]=M*C+A*E+R*K+L*J,a[7]=M*N+A*U+R*Z+L*de,a[11]=M*O+A*B+R*Q+L*he,a[15]=M*w+A*X+R*se+L*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],v=e[3],_=e[7],g=e[11],f=e[15];return v*(+a*l*u-r*c*u-a*o*p+i*c*p+r*o*m-i*l*m)+_*(+t*l*m-t*c*p+a*s*p-r*s*m+r*c*h-a*l*h)+g*(+t*c*u-t*o*m-a*s*u+i*s*m+a*o*h-i*c*h)+f*(-r*o*h-t*l*u+t*o*p+r*s*u-i*s*p+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],v=e[12],_=e[13],g=e[14],f=e[15],M=u*g*c-_*p*c+_*l*m-o*g*m-u*l*f+o*p*f,A=v*p*c-h*g*c-v*l*m+s*g*m+h*l*f-s*p*f,R=h*_*c-v*u*c+v*o*m-s*_*m-h*o*f+s*u*f,L=v*u*l-h*_*l-v*o*p+s*_*p+h*o*g-s*u*g,C=t*M+i*A+r*R+a*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=M*N,e[1]=(_*p*a-u*g*a-_*r*m+i*g*m+u*r*f-i*p*f)*N,e[2]=(o*g*a-_*l*a+_*r*c-i*g*c-o*r*f+i*l*f)*N,e[3]=(u*l*a-o*p*a-u*r*c+i*p*c+o*r*m-i*l*m)*N,e[4]=A*N,e[5]=(h*g*a-v*p*a+v*r*m-t*g*m-h*r*f+t*p*f)*N,e[6]=(v*l*a-s*g*a-v*r*c+t*g*c+s*r*f-t*l*f)*N,e[7]=(s*p*a-h*l*a+h*r*c-t*p*c-s*r*m+t*l*m)*N,e[8]=R*N,e[9]=(v*u*a-h*_*a-v*i*m+t*_*m+h*i*f-t*u*f)*N,e[10]=(s*_*a-v*o*a+v*i*c-t*_*c-s*i*f+t*o*f)*N,e[11]=(h*o*a-s*u*a-h*i*c+t*u*c+s*i*m-t*o*m)*N,e[12]=L*N,e[13]=(h*_*r-v*u*r+v*i*p-t*_*p-h*i*g+t*u*g)*N,e[14]=(v*o*r-s*_*r-v*i*l+t*_*l+s*i*g-t*o*g)*N,e[15]=(s*u*r-h*o*r+h*i*l-t*u*l-s*i*p+t*o*p)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,p=a*c,m=a*h,v=a*u,_=s*h,g=s*u,f=o*u,M=l*c,A=l*h,R=l*u,L=i.x,C=i.y,N=i.z;return r[0]=(1-(_+f))*L,r[1]=(m+R)*L,r[2]=(v-A)*L,r[3]=0,r[4]=(m-R)*C,r[5]=(1-(p+f))*C,r[6]=(g+M)*C,r[7]=0,r[8]=(v+A)*N,r[9]=(g-M)*N,r[10]=(1-(p+_))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=rr.set(r[0],r[1],r[2]).length();const s=rr.set(r[4],r[5],r[6]).length(),o=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/a,h=1/s,u=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=On,l=!1){const c=this.elements,h=2*a/(t-e),u=2*a/(i-r),p=(t+e)/(t-e),m=(i+r)/(i-r);let v,_;if(l)v=a/(s-a),_=s*a/(s-a);else if(o===On)v=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===Ja)v=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=On,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-r),p=-(t+e)/(t-e),m=-(i+r)/(i-r);let v,_;if(l)v=1/(s-a),_=s/(s-a);else if(o===On)v=-2/(s-a),_=-(s+a)/(s-a);else if(o===Ja)v=-1/(s-a),_=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rr=new q,Dn=new Nt,sf=new q(0,0,0),of=new q(1,1,1),vi=new q,da=new q,fn=new q,Ll=new Nt,Il=new Cr;class ui{constructor(e=0,t=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(at(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ll,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Il.setFromEuler(this),this.setFromQuaternion(Il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lf=0;const Nl=new q,ar=new Cr,Yn=new Nt,fa=new q,Fr=new q,cf=new q,uf=new Cr,Ul=new q(1,0,0),Fl=new q(0,1,0),kl=new q(0,0,1),zl={type:"added"},hf={type:"removed"},sr={type:"childadded",child:null},Os={type:"childremoved",child:null};class en extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new q,t=new ui,i=new Cr,r=new q(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new je}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Ul,e)}rotateY(e){return this.rotateOnAxis(Fl,e)}rotateZ(e){return this.rotateOnAxis(kl,e)}translateOnAxis(e,t){return Nl.copy(e).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ul,e)}translateY(e){return this.translateOnAxis(Fl,e)}translateZ(e){return this.translateOnAxis(kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fa.copy(e):fa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Fr,fa,this.up):Yn.lookAt(fa,Fr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(Yn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),sr.child=e,this.dispatchEvent(sr),sr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hf),Os.child=e,this.dispatchEvent(Os),Os.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),p=s(e.skeletons),m=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new q(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new q,$n=new q,Bs=new q,Kn=new q,or=new q,lr=new q,Ol=new q,Hs=new q,Vs=new q,Gs=new q,Ws=new Ft,qs=new Ft,Xs=new Ft;class Mn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pn.subVectors(e,t),r.cross(Pn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Pn.subVectors(r,t),$n.subVectors(i,t),Bs.subVectors(e,t);const s=Pn.dot(Pn),o=Pn.dot($n),l=Pn.dot(Bs),c=$n.dot($n),h=$n.dot(Bs),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;const p=1/u,m=(c*l-o*h)*p,v=(s*h-o*l)*p;return a.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Kn.x),l.addScaledVector(s,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Ws.setScalar(0),qs.setScalar(0),Xs.setScalar(0),Ws.fromBufferAttribute(e,t),qs.fromBufferAttribute(e,i),Xs.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Ws,a.x),s.addScaledVector(qs,a.y),s.addScaledVector(Xs,a.z),s}static isFrontFacing(e,t,i,r){return Pn.subVectors(i,t),$n.subVectors(e,t),Pn.cross($n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Pn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;or.subVectors(r,i),lr.subVectors(a,i),Hs.subVectors(e,i);const l=or.dot(Hs),c=lr.dot(Hs);if(l<=0&&c<=0)return t.copy(i);Vs.subVectors(e,r);const h=or.dot(Vs),u=lr.dot(Vs);if(h>=0&&u<=h)return t.copy(r);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(or,s);Gs.subVectors(e,a);const m=or.dot(Gs),v=lr.dot(Gs);if(v>=0&&m<=v)return t.copy(a);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(lr,o);const g=h*v-m*u;if(g<=0&&u-h>=0&&m-v>=0)return Ol.subVectors(a,r),o=(u-h)/(u-h+(m-v)),t.copy(r).addScaledVector(Ol,o);const f=1/(g+_+p);return s=_*f,o=p*f,t.copy(i).addScaledVector(or,s).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Ys(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=jd(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Ys(s,a,e+1/3),this.g=Ys(s,a,e),this.b=Ys(s,a,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=yn){function i(a){a!==void 0&&parseFloat(a)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=Iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return ut.workingToColorSpace(Yt.copy(this),e),Math.round(at(Yt.r*255,0,255))*65536+Math.round(at(Yt.g*255,0,255))*256+Math.round(at(Yt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,a=Yt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case i:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-i)/u+2;break;case a:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=yn){ut.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(pa);const i=Rs(_i.h,pa.h,t),r=Rs(_i.s,pa.s,t),a=Rs(_i.l,pa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new pt;pt.NAMES=Iu;let df=0;class Qr extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=xr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=E0,this.blendDst=A0,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==E0&&(i.blendSrc=this.blendSrc),this.blendDst!==A0&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ds extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=_u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new q,ma=new mt;let ff=0;class Hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ff++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tl,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array),a=an(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}}class Nu extends Hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uu extends Hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends Hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pf=0;const bn=new Nt,$s=new en,cr=new q,pn=new Jr,kr=new Jr,qt=new q;class An extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ru(e)?Uu:Nu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new je().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];pn.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(pn.min,kr.min),pn.expandByPoint(qt),qt.addVectors(pn.max,kr.max),pn.expandByPoint(qt)):(pn.expandByPoint(kr.min),pn.expandByPoint(kr.max))}pn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)qt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qt.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(e,c),qt.add(cr)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new q,l[O]=new q;const c=new q,h=new q,u=new q,p=new mt,m=new mt,v=new mt,_=new q,g=new q;function f(O,w,E){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,E),p.fromBufferAttribute(a,O),m.fromBufferAttribute(a,w),v.fromBufferAttribute(a,E),h.sub(c),u.sub(c),m.sub(p),v.sub(p);const U=1/(m.x*v.y-v.x*m.y);isFinite(U)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(U),g.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(U),o[O].add(_),o[w].add(_),o[E].add(_),l[O].add(g),l[w].add(g),l[E].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,w=M.length;O<w;++O){const E=M[O],U=E.start,B=E.count;for(let X=U,K=U+B;X<K;X+=3)f(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const A=new q,R=new q,L=new q,C=new q;function N(O){L.fromBufferAttribute(r,O),C.copy(L);const w=o[O];A.copy(w),A.sub(L.multiplyScalar(L.dot(w))).normalize(),R.crossVectors(C,w);const U=R.dot(l[O])<0?-1:1;s.setXYZW(O,A.x,A.y,A.z,U)}for(let O=0,w=M.length;O<w;++O){const E=M[O],U=E.start,B=E.count;for(let X=U,K=U+B;X<K;X+=3)N(e.getX(X+0)),N(e.getX(X+1)),N(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new q,a=new q,s=new q,o=new q,l=new q,c=new q,h=new q,u=new q;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),_=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h);let m=0,v=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)p[v++]=c[m++]}return new Hn(p,h,u)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new Nt,ki=new Pu,xa=new hs,Hl=new q,ga=new q,va=new q,_a=new q,Ks=new q,ba=new q,Vl=new q,ya=new q;class Nn extends en{constructor(e=new An,t=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ba.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(Ks.fromBufferAttribute(u,e),s?ba.addScaledVector(Ks,h):ba.addScaledVector(Ks.sub(t),h))}t.add(ba)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(a),ki.copy(e.ray).recast(e.near),!(xa.containsPoint(ki.origin)===!1&&(ki.intersectSphere(xa,Hl)===null||ki.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(Bl.copy(a).invert(),ki.copy(e.ray).applyMatrix4(Bl),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,p=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,_=p.length;v<_;v++){const g=p[v],f=s[g.materialIndex],M=Math.max(g.start,m.start),A=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let R=M,L=A;R<L;R+=3){const C=o.getX(R),N=o.getX(R+1),O=o.getX(R+2);r=Sa(this,f,e,i,c,h,u,C,N,O),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=v,f=_;g<f;g+=3){const M=o.getX(g),A=o.getX(g+1),R=o.getX(g+2);r=Sa(this,s,e,i,c,h,u,M,A,R),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,_=p.length;v<_;v++){const g=p[v],f=s[g.materialIndex],M=Math.max(g.start,m.start),A=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let R=M,L=A;R<L;R+=3){const C=R,N=R+1,O=R+2;r=Sa(this,f,e,i,c,h,u,C,N,O),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=v,f=_;g<f;g+=3){const M=g,A=g+1,R=g+2;r=Sa(this,s,e,i,c,h,u,M,A,R),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function mf(n,e,t,i,r,a,s,o){let l;if(e.side===cn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Ci,o),l===null)return null;ya.copy(o),ya.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ya);return c<t.near||c>t.far?null:{distance:c,point:ya.clone(),object:n}}function Sa(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,ga),n.getVertexPosition(l,va),n.getVertexPosition(c,_a);const h=mf(n,e,t,i,ga,va,_a,Vl);if(h){const u=new q;Mn.getBarycoord(Vl,ga,va,_a,u),r&&(h.uv=Mn.getInterpolatedAttribute(r,o,l,c,u,new mt)),a&&(h.uv1=Mn.getInterpolatedAttribute(a,o,l,c,u,new mt)),s&&(h.normal=Mn.getInterpolatedAttribute(s,o,l,c,u,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new q,materialIndex:0};Mn.getNormal(ga,va,_a,p.normal),h.face=p,h.barycoord=u}return h}class ea extends An{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],u=[];let p=0,m=0;v("z","y","x",-1,-1,i,t,e,s,a,0),v("z","y","x",1,-1,i,t,-e,s,a,1),v("x","z","y",1,1,e,i,t,r,s,2),v("x","z","y",1,-1,e,i,-t,r,s,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function v(_,g,f,M,A,R,L,C,N,O,w){const E=R/N,U=L/O,B=R/2,X=L/2,K=C/2,Z=N+1,Q=O+1;let se=0,J=0;const de=new q;for(let he=0;he<Q;he++){const De=he*U-X;for(let We=0;We<Z;We++){const st=We*E-B;de[_]=st*M,de[g]=De*A,de[f]=K,c.push(de.x,de.y,de.z),de[_]=0,de[g]=0,de[f]=C>0?1:-1,h.push(de.x,de.y,de.z),u.push(We/N),u.push(1-he/O),se+=1}}for(let he=0;he<O;he++)for(let De=0;De<N;De++){const We=p+De+Z*he,st=p+De+Z*(he+1),ft=p+(De+1)+Z*(he+1),ot=p+(De+1)+Z*he;l.push(We,st,ot),l.push(st,ft,ot),J+=6}o.addGroup(m,J,w),m+=J,p+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=wr(n[t]);for(const r in i)e[r]=i[r]}return e}function xf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const gf={clone:wr,merge:jt};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ku extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new q,Gl=new mt,Wl=new mt;class Sn extends ku{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Gl,Wl),t.subVectors(Wl,Gl)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ur=-90,hr=1;class bf extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(ur,hr,e,t);r.layers=this.layers,this.add(r);const a=new Sn(ur,hr,e,t);a.layers=this.layers,this.add(a);const s=new Sn(ur,hr,e,t);s.layers=this.layers,this.add(s);const o=new Sn(ur,hr,e,t);o.layers=this.layers,this.add(o);const l=new Sn(ur,hr,e,t);l.layers=this.layers,this.add(l);const c=new Sn(ur,hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class zu extends Qt{constructor(e=[],t=yr,i,r,a,s,o,l,c,h){super(e,t,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yf extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ea(5,5,5),a=new hi({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:ai});a.uniforms.tEquirect.value=t;const s=new Nn(r,a),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=wn),new bf(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class mr extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sf={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),f=this._getHandJoint(c,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Mf extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wf extends Qt{constructor(e=null,t=1,i=1,r,a,s,o,l,c=xn,h=xn,u,p){super(null,s,o,l,c,h,r,a,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const js=new q,Tf=new q,Ef=new je;class Gi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=js.subVectors(i,t).cross(Tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(js),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ef.getNormalMatrix(e),r=this.coplanarPoint(js).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new hs,Af=new mt(.5,.5),Ma=new q;class Ou{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,a=new Gi,s=new Gi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],h=a[4],u=a[5],p=a[6],m=a[7],v=a[8],_=a[9],g=a[10],f=a[11],M=a[12],A=a[13],R=a[14],L=a[15];if(r[0].setComponents(c-s,m-h,f-v,L-M).normalize(),r[1].setComponents(c+s,m+h,f+v,L+M).normalize(),r[2].setComponents(c+o,m+u,f+_,L+A).normalize(),r[3].setComponents(c-o,m-u,f-_,L-A).normalize(),i)r[4].setComponents(l,p,g,R).normalize(),r[5].setComponents(c-l,m-p,f-g,L-R).normalize();else if(r[4].setComponents(c-l,m-p,f-g,L-R).normalize(),t===On)r[5].setComponents(c+l,m+p,f+g,L+R).normalize();else if(t===Ja)r[5].setComponents(l,p,g,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);const t=Af.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ma.x=r.normal.x>0?e.max.x:e.min.x,Ma.y=r.normal.y>0?e.max.y:e.min.y,Ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bu extends Qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const es=new q,ts=new q,ql=new Nt,zr=new Pu,wa=new hs,Js=new q,Xl=new q;class Cf extends en{constructor(e=new An,t=new Bu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)es.fromBufferAttribute(t,r-1),ts.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=es.distanceTo(ts);e.setAttribute("lineDistance",new $t(i,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),wa.radius+=a,e.ray.intersectsSphere(wa)===!1)return;ql.copy(r).invert(),zr.copy(e.ray).applyMatrix4(ql);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const m=Math.max(0,s.start),v=Math.min(h.count,s.start+s.count);for(let _=m,g=v-1;_<g;_+=c){const f=h.getX(_),M=h.getX(_+1),A=Ta(this,e,zr,l,f,M,_);A&&t.push(A)}if(this.isLineLoop){const _=h.getX(v-1),g=h.getX(m),f=Ta(this,e,zr,l,_,g,v-1);f&&t.push(f)}}else{const m=Math.max(0,s.start),v=Math.min(p.count,s.start+s.count);for(let _=m,g=v-1;_<g;_+=c){const f=Ta(this,e,zr,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Ta(this,e,zr,l,v-1,m,v-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ta(n,e,t,i,r,a,s){const o=n.geometry.attributes.position;if(es.fromBufferAttribute(o,r),ts.fromBufferAttribute(o,a),t.distanceSqToSegment(es,ts,Js,Xl)>i)return;Js.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Js);if(!(c<e.near||c>e.far))return{distance:c,point:Xl.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Yl=new q,$l=new q;class Rf extends Cf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Yl.fromBufferAttribute(t,r),$l.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Yl.distanceTo($l);e.setAttribute("lineDistance",new $t(i,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hu extends Qt{constructor(e,t,i=$i,r,a,s,o=xn,l=xn,c,h=Xr,u=1){if(h!==Xr&&h!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vu extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fs extends An{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const h=[],u=[],p=[],m=[];let v=0;const _=[],g=i/2;let f=0;M(),s===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(m,2));function M(){const R=new q,L=new q;let C=0;const N=(t-e)/i;for(let O=0;O<=a;O++){const w=[],E=O/a,U=E*(t-e)+e;for(let B=0;B<=r;B++){const X=B/r,K=X*l+o,Z=Math.sin(K),Q=Math.cos(K);L.x=U*Z,L.y=-E*i+g,L.z=U*Q,u.push(L.x,L.y,L.z),R.set(Z,N,Q).normalize(),p.push(R.x,R.y,R.z),m.push(X,1-E),w.push(v++)}_.push(w)}for(let O=0;O<r;O++)for(let w=0;w<a;w++){const E=_[w][O],U=_[w+1][O],B=_[w+1][O+1],X=_[w][O+1];(e>0||w!==0)&&(h.push(E,U,X),C+=3),(t>0||w!==a-1)&&(h.push(U,B,X),C+=3)}c.addGroup(f,C,0),f+=C}function A(R){const L=v,C=new mt,N=new q;let O=0;const w=R===!0?e:t,E=R===!0?1:-1;for(let B=1;B<=r;B++)u.push(0,g*E,0),p.push(0,E,0),m.push(.5,.5),v++;const U=v;for(let B=0;B<=r;B++){const K=B/r*l+o,Z=Math.cos(K),Q=Math.sin(K);N.x=w*Q,N.y=g*E,N.z=w*Z,u.push(N.x,N.y,N.z),p.push(0,E,0),C.x=Z*.5+.5,C.y=Q*.5*E+.5,m.push(C.x,C.y),v++}for(let B=0;B<r;B++){const X=L+B,K=U+B;R===!0?h.push(K,K+1,X):h.push(K+1,K,X),O+=3}c.addGroup(f,O,R===!0?1:2),f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fo extends fs{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Fo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ea=new q,Aa=new q,Qs=new q,Ca=new Mn;class Df extends An{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(Ya*t),s=e.getIndex(),o=e.getAttribute("position"),l=s?s.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),p={},m=[];for(let v=0;v<l;v+=3){s?(c[0]=s.getX(v),c[1]=s.getX(v+1),c[2]=s.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:g,c:f}=Ca;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Ca.getNormal(Qs),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const A=(M+1)%3,R=u[M],L=u[A],C=Ca[h[M]],N=Ca[h[A]],O=`${R}_${L}`,w=`${L}_${R}`;w in p&&p[w]?(Qs.dot(p[w].normal)<=a&&(m.push(C.x,C.y,C.z),m.push(N.x,N.y,N.z)),p[w]=null):O in p||(p[O]={index0:c[M],index1:c[A],normal:Qs.clone()})}}for(const v in p)if(p[v]){const{index0:_,index1:g}=p[v];Ea.fromBufferAttribute(o,_),Aa.fromBufferAttribute(o,g),m.push(Ea.x,Ea.y,Ea.z),m.push(Aa.x,Aa.y,Aa.z)}this.setAttribute("position",new $t(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ps extends An{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,p=t/l,m=[],v=[],_=[],g=[];for(let f=0;f<h;f++){const M=f*p-s;for(let A=0;A<c;A++){const R=A*u-a;v.push(R,-M,0),_.push(0,0,1),g.push(A/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const A=M+c*f,R=M+c*(f+1),L=M+1+c*(f+1),C=M+1+c*f;m.push(A,R,C),m.push(R,L,C)}this.setIndex(m),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments)}}class ko extends An{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const h=[],u=new q,p=new q,m=[],v=[],_=[],g=[];for(let f=0;f<=i;f++){const M=[],A=f/i;let R=0;f===0&&s===0?R=.5/t:f===i&&l===Math.PI&&(R=-.5/t);for(let L=0;L<=t;L++){const C=L/t;u.x=-e*Math.cos(r+C*a)*Math.sin(s+A*o),u.y=e*Math.cos(s+A*o),u.z=e*Math.sin(r+C*a)*Math.sin(s+A*o),v.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),g.push(C+R,1-A),M.push(c++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){const A=h[f][M+1],R=h[f][M],L=h[f+1][M],C=h[f+1][M+1];(f!==0||s>0)&&m.push(A,R,C),(f!==i-1||l<Math.PI)&&m.push(R,L,C)}this.setIndex(m),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pf extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lf extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class If extends ku{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Nf extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Kl(n,e,t,i){const r=Uf(i);switch(t){case Tu:return n*e;case Au:return n*e/r.components*r.byteLength;case Po:return n*e/r.components*r.byteLength;case Lo:return n*e*2/r.components*r.byteLength;case Io:return n*e*2/r.components*r.byteLength;case Eu:return n*e*3/r.components*r.byteLength;case In:return n*e*4/r.components*r.byteLength;case No:return n*e*4/r.components*r.byteLength;case Ga:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case B0:case V0:return Math.max(n,16)*Math.max(e,8)/4;case O0:case H0:return Math.max(n,8)*Math.max(e,8)/2;case G0:case W0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case q0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case X0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Y0:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $0:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case K0:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Z0:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case j0:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case J0:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Q0:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case eo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case to:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case no:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case io:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ro:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ao:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case so:case oo:case lo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case co:case uo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ho:case fo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Uf(n){switch(n){case ci:case yu:return{byteLength:1,components:1};case Wr:case Su:case Er:return{byteLength:2,components:1};case Ro:case Do:return{byteLength:2,components:4};case $i:case Co:case ii:return{byteLength:4,components:1};case Mu:case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);function Gu(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Ff(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<u.length;m++){const v=u[p],_=u[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++p,u[p]=_)}u.length=p+1;for(let m=0,v=u.length;m<v;m++){const _=u[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Up=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:kf,alphahash_pars_fragment:zf,alphamap_fragment:Of,alphamap_pars_fragment:Bf,alphatest_fragment:Hf,alphatest_pars_fragment:Vf,aomap_fragment:Gf,aomap_pars_fragment:Wf,batching_pars_vertex:qf,batching_vertex:Xf,begin_vertex:Yf,beginnormal_vertex:$f,bsdfs:Kf,iridescence_fragment:Zf,bumpmap_pars_fragment:jf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:ep,clipping_planes_vertex:tp,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:rp,color_vertex:ap,common:sp,cube_uv_reflection_fragment:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:up,emissivemap_fragment:hp,emissivemap_pars_fragment:dp,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:xp,envmap_pars_fragment:gp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Rp,envmap_vertex:_p,fog_vertex:bp,fog_pars_vertex:yp,fog_fragment:Sp,fog_pars_fragment:Mp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Ap,lights_pars_begin:Cp,lights_toon_fragment:Dp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Np,lights_physical_pars_fragment:Up,lights_fragment_begin:Fp,lights_fragment_maps:kp,lights_fragment_end:zp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Vp,map_fragment:Gp,map_pars_fragment:Wp,map_particle_fragment:qp,map_particle_pars_fragment:Xp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Kp,morphcolor_vertex:Zp,morphnormal_vertex:jp,morphtarget_pars_vertex:Jp,morphtarget_vertex:Qp,normal_fragment_begin:em,normal_fragment_maps:tm,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:rm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:um,packing:hm,premultiplied_alpha_fragment:dm,project_vertex:fm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:_m,shadowmap_vertex:bm,shadowmask_pars_fragment:ym,skinbase_vertex:Sm,skinning_pars_vertex:Mm,skinning_vertex:wm,skinnormal_vertex:Tm,specularmap_fragment:Em,specularmap_pars_fragment:Am,tonemapping_fragment:Cm,tonemapping_pars_fragment:Rm,transmission_fragment:Dm,transmission_pars_fragment:Pm,uv_pars_fragment:Lm,uv_pars_vertex:Im,uv_vertex:Nm,worldpos_vertex:Um,background_vert:Fm,background_frag:km,backgroundCube_vert:zm,backgroundCube_frag:Om,cube_vert:Bm,cube_frag:Hm,depth_vert:Vm,depth_frag:Gm,distanceRGBA_vert:Wm,distanceRGBA_frag:qm,equirect_vert:Xm,equirect_frag:Ym,linedashed_vert:$m,linedashed_frag:Km,meshbasic_vert:Zm,meshbasic_frag:jm,meshlambert_vert:Jm,meshlambert_frag:Qm,meshmatcap_vert:e1,meshmatcap_frag:t1,meshnormal_vert:n1,meshnormal_frag:i1,meshphong_vert:r1,meshphong_frag:a1,meshphysical_vert:s1,meshphysical_frag:o1,meshtoon_vert:l1,meshtoon_frag:c1,points_vert:u1,points_frag:h1,shadow_vert:d1,shadow_frag:f1,sprite_vert:p1,sprite_frag:m1},ve={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},kn={basic:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new pt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:jt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:jt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:jt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new pt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:jt([ve.points,ve.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:jt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:jt([ve.common,ve.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:jt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:jt([ve.sprite,ve.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:jt([ve.common,ve.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:jt([ve.lights,ve.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};kn.physical={uniforms:jt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ra={r:0,b:0,g:0},Oi=new ui,x1=new Nt;function g1(n,e,t,i,r,a,s){const o=new pt(0);let l=a===!0?0:1,c,h,u=null,p=0,m=null;function v(A){let R=A.isScene===!0?A.background:null;return R&&R.isTexture&&(R=(A.backgroundBlurriness>0?t:e).get(R)),R}function _(A){let R=!1;const L=v(A);L===null?f(o,l):L&&L.isColor&&(f(L,1),R=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(A,R){const L=v(R);L&&(L.isCubeTexture||L.mapping===us)?(h===void 0&&(h=new Nn(new ea(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:wr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Oi.copy(R.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x1.makeRotationFromEuler(Oi)),h.material.toneMapped=ut.getTransfer(L.colorSpace)!==_t,(u!==L||p!==L.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=L,p=L.version,m=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Nn(new ps(2,2),new hi({name:"BackgroundMaterial",uniforms:wr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=ut.getTransfer(L.colorSpace)!==_t,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||p!==L.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=L,p=L.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,R){A.getRGB(Ra,Fu(n)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,R,s)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,R=1){o.set(A),l=R,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(o,l)},render:_,addToRenderList:g,dispose:M}}function v1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let a=r,s=!1;function o(E,U,B,X,K){let Z=!1;const Q=u(X,B,U);a!==Q&&(a=Q,c(a.object)),Z=m(E,X,B,K),Z&&v(E,X,B,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,R(E,U,B,X),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function u(E,U,B){const X=B.wireframe===!0;let K=i[E.id];K===void 0&&(K={},i[E.id]=K);let Z=K[U.id];Z===void 0&&(Z={},K[U.id]=Z);let Q=Z[X];return Q===void 0&&(Q=p(l()),Z[X]=Q),Q}function p(E){const U=[],B=[],X=[];for(let K=0;K<t;K++)U[K]=0,B[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:X,object:E,attributes:{},index:null}}function m(E,U,B,X){const K=a.attributes,Z=U.attributes;let Q=0;const se=B.getAttributes();for(const J in se)if(se[J].location>=0){const he=K[J];let De=Z[J];if(De===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(De=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(De=E.instanceColor)),he===void 0||he.attribute!==De||De&&he.data!==De.data)return!0;Q++}return a.attributesNum!==Q||a.index!==X}function v(E,U,B,X){const K={},Z=U.attributes;let Q=0;const se=B.getAttributes();for(const J in se)if(se[J].location>=0){let he=Z[J];he===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(he=E.instanceColor));const De={};De.attribute=he,he&&he.data&&(De.data=he.data),K[J]=De,Q++}a.attributes=K,a.attributesNum=Q,a.index=X}function _(){const E=a.newAttributes;for(let U=0,B=E.length;U<B;U++)E[U]=0}function g(E){f(E,0)}function f(E,U){const B=a.newAttributes,X=a.enabledAttributes,K=a.attributeDivisors;B[E]=1,X[E]===0&&(n.enableVertexAttribArray(E),X[E]=1),K[E]!==U&&(n.vertexAttribDivisor(E,U),K[E]=U)}function M(){const E=a.newAttributes,U=a.enabledAttributes;for(let B=0,X=U.length;B<X;B++)U[B]!==E[B]&&(n.disableVertexAttribArray(B),U[B]=0)}function A(E,U,B,X,K,Z,Q){Q===!0?n.vertexAttribIPointer(E,U,B,K,Z):n.vertexAttribPointer(E,U,B,X,K,Z)}function R(E,U,B,X){_();const K=X.attributes,Z=B.getAttributes(),Q=U.defaultAttributeValues;for(const se in Z){const J=Z[se];if(J.location>=0){let de=K[se];if(de===void 0&&(se==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),se==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const he=de.normalized,De=de.itemSize,We=e.get(de);if(We===void 0)continue;const st=We.buffer,ft=We.type,ot=We.bytesPerElement,ee=ft===n.INT||ft===n.UNSIGNED_INT||de.gpuType===Co;if(de.isInterleavedBufferAttribute){const ie=de.data,Se=ie.stride,qe=de.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<J.locationSize;Pe++)f(J.location+Pe,ie.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<J.locationSize;Pe++)g(J.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Pe=0;Pe<J.locationSize;Pe++)A(J.location+Pe,De/J.locationSize,ft,he,Se*ot,(qe+De/J.locationSize*Pe)*ot,ee)}else{if(de.isInstancedBufferAttribute){for(let ie=0;ie<J.locationSize;ie++)f(J.location+ie,de.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ie=0;ie<J.locationSize;ie++)g(J.location+ie);n.bindBuffer(n.ARRAY_BUFFER,st);for(let ie=0;ie<J.locationSize;ie++)A(J.location+ie,De/J.locationSize,ft,he,De*ot,De/J.locationSize*ie*ot,ee)}}else if(Q!==void 0){const he=Q[se];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(J.location,he);break;case 3:n.vertexAttrib3fv(J.location,he);break;case 4:n.vertexAttrib4fv(J.location,he);break;default:n.vertexAttrib1fv(J.location,he)}}}}M()}function L(){O();for(const E in i){const U=i[E];for(const B in U){const X=U[B];for(const K in X)h(X[K].object),delete X[K];delete U[B]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const B in U){const X=U[B];for(const K in X)h(X[K].object),delete X[K];delete U[B]}delete i[E.id]}function N(E){for(const U in i){const B=i[U];if(B[E.id]===void 0)continue;const X=B[E.id];for(const K in X)h(X[K].object),delete X[K];delete B[E.id]}}function O(){w(),s=!0,a!==r&&(a=r,c(a.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function _1(n,e,t){let i;function r(c){i=c}function a(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function s(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];t.update(m,i,1)}function l(c,h,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],h[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,u);let v=0;for(let _=0;_<u;_++)v+=h[_]*p[_];t.update(v,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function b1(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(N){return!(N!==In&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const O=N===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ci&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ii&&!O)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:R,vertexTextures:L,maxSamples:C}}function y1(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Gi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||i!==0||r;return r=p,i=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){const v=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,f=n.get(u);if(!r||v===null||v.length===0||a&&!g)a?h(null):c();else{const M=a?0:i,A=M*4;let R=f.clippingState||null;l.value=R,R=h(v,p,A,m);for(let L=0;L!==A;++L)R[L]=t[L];f.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,p,m,v){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const f=m+_*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let A=0,R=m;A!==_;++A,R+=4)s.copy(u[A]).applyMatrix4(M,o),s.normal.toArray(g,R),g[R+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function S1(n){let e=new WeakMap;function t(s,o){return o===U0?s.mapping=yr:o===F0&&(s.mapping=Sr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===U0||o===F0)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new yf(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const wi=4,Zl=[.125,.215,.35,.446,.526,.582],Xi=20,M1=256,Or=new If,jl=new pt;let e0=null,t0=0,n0=0,i0=!1;const w1=new q;class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=w1}=a;e0=this._renderer.getRenderTarget(),t0=this._renderer.getActiveCubeFace(),n0=this._renderer.getActiveMipmapLevel(),i0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(e0,t0,n0),this._renderer.xr.enabled=i0,e.scissorTest=!1,dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),e0=this._renderer.getRenderTarget(),t0=this._renderer.getActiveCubeFace(),n0=this._renderer.getActiveMipmapLevel(),i0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Er,format:In,colorSpace:Mr,depthBuffer:!1},r=Ql(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=T1(a)),this._blurMaterial=A1(a,e,t)}return r}_compileMaterial(e){const t=new Nn(new An,e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,i,r,a){const l=new Sn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(jl),u.toneMapping=Ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new ea,new ds({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let f=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,f=!0):(g.color.copy(jl),f=!0);for(let A=0;A<6;A++){const R=A%3;R===0?(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[A],a.y,a.z)):R===1?(l.up.set(0,0,c[A]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[A],a.z)):(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[A]));const L=this._cubeSize;dr(r,R*L,A>2?L:0,L,L),u.setRenderTarget(r),f&&u.render(_,l),u.render(e,l)}u.toneMapping=m,u.autoClear=p,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===yr||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Or)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget;if(this._ggxMaterial===null){const M=3*Math.max(this._cubeSize,16),A=4*this._cubeSize;this._ggxMaterial=E1(this._lodMax,M,A)}const s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),p=.05+c*.95,m=u*p,{_lodMax:v}=this,_=this._sizeLods[i],g=3*_*(i>v-wi?i-v+wi:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,dr(a,g,f,3*_,2*_),r.setRenderTarget(a),r.render(o,Or),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,dr(e,g,f,3*_,2*_),r.setRenderTarget(e),r.render(o,Or)}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[r];u.material=c;const p=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Xi-1),_=a/v,g=isFinite(a)?1+Math.floor(h*_):Xi;g>Xi&&Ke(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);const f=[];let M=0;for(let N=0;N<Xi;++N){const O=N/_,w=Math.exp(-O*O/2);f.push(w),N===0?M+=w:N<g&&(M+=2*w)}for(let N=0;N<f.length;N++)f[N]=f[N]/M;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:A}=this;p.dTheta.value=v,p.mipInt.value=A-i;const R=this._sizeLods[r],L=3*R*(r>A-wi?r-A+wi:0),C=4*(this._cubeSize-R);dr(t,L,C,3*R,2*R),l.setRenderTarget(t),l.render(u,Or)}}function T1(n){const e=[],t=[],i=[];let r=n;const a=n-wi+1+Zl.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>n-wi?l=Zl[s-n+wi-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,_=3,g=2,f=1,M=new Float32Array(_*v*m),A=new Float32Array(g*v*m),R=new Float32Array(f*v*m);for(let C=0;C<m;C++){const N=C%3*2/3-1,O=C>2?0:-1,w=[N,O,0,N+2/3,O,0,N+2/3,O+1,0,N,O,0,N+2/3,O+1,0,N,O+1,0];M.set(w,_*v*C),A.set(p,g*v*C);const E=[C,C,C,C,C,C];R.set(E,f*v*C)}const L=new An;L.setAttribute("position",new Hn(M,_)),L.setAttribute("uv",new Hn(A,g)),L.setAttribute("faceIndex",new Hn(R,f)),i.push(new Nn(L,null)),r>wi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ql(n,e,t){const i=new Ki(n,e,t);return i.texture.mapping=us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function E1(n,e,t){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ms(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function A1(n,e,t){const i=new Float32Array(Xi),r=new q(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ec(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function tc(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ms(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ms(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===U0||l===F0,h=l===yr||l===Sr;if(c||h){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Jl(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new Jl(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function R1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&$r("WebGLRenderer: "+i+" extension not supported."),r}}}function D1(n,e,t,i){const r={},a=new WeakMap;function s(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",s),delete r[p.id];const m=a.get(p);m&&(e.remove(m),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function l(u){const p=u.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function c(u){const p=[],m=u.index,v=u.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let A=0,R=M.length;A<R;A+=3){const L=M[A+0],C=M[A+1],N=M[A+2];p.push(L,C,C,N,N,L)}}else if(v!==void 0){const M=v.array;_=v.version;for(let A=0,R=M.length/3-1;A<R;A+=3){const L=A+0,C=A+1,N=A+2;p.push(L,C,C,N,N,L)}}else return;const g=new(Ru(p)?Uu:Nu)(p,1);g.version=_;const f=a.get(u);f&&e.remove(f),a.set(u,g)}function h(u){const p=a.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function P1(n,e,t){let i;function r(p){i=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,m){n.drawElements(i,m,a,p*s),t.update(m,i,1)}function c(p,m,v){v!==0&&(n.drawElementsInstanced(i,m,a,p*s,v),t.update(m,i,v))}function h(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,p,0,v);let g=0;for(let f=0;f<v;f++)g+=m[f];t.update(g,i,1)}function u(p,m,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<p.length;f++)c(p[f]/s,m[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,a,p,0,_,0,v);let f=0;for(let M=0;M<v;M++)f+=m[M]*_[M];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function L1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:Ut("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function I1(n,e,t){const i=new WeakMap,r=new Ft;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==u){let E=function(){O.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var m=E;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let R=0;v===!0&&(R=1),_===!0&&(R=2),g===!0&&(R=3);let L=o.attributes.position.count*R,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const N=new Float32Array(L*C*4*u),O=new Du(N,L,C,u);O.type=ii,O.needsUpdate=!0;const w=R*4;for(let U=0;U<u;U++){const B=f[U],X=M[U],K=A[U],Z=L*C*4*U;for(let Q=0;Q<B.count;Q++){const se=Q*w;v===!0&&(r.fromBufferAttribute(B,Q),N[Z+se+0]=r.x,N[Z+se+1]=r.y,N[Z+se+2]=r.z,N[Z+se+3]=0),_===!0&&(r.fromBufferAttribute(X,Q),N[Z+se+4]=r.x,N[Z+se+5]=r.y,N[Z+se+6]=r.z,N[Z+se+7]=0),g===!0&&(r.fromBufferAttribute(K,Q),N[Z+se+8]=r.x,N[Z+se+9]=r.y,N[Z+se+10]=r.z,N[Z+se+11]=K.itemSize===4?r.w:1)}}p={count:u,texture:O,size:new mt(L,C)},i.set(o,p),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:a}}function N1(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return u}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const Wu=new Qt,nc=new Hu(1,1),qu=new Du,Xu=new rf,Yu=new zu,ic=[],rc=[],ac=new Float32Array(16),sc=new Float32Array(9),oc=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=ic[r];if(a===void 0&&(a=new Float32Array(r),ic[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xs(n,e){let t=rc[e];t===void 0&&(t=new Int32Array(e),rc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function U1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function F1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function k1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function O1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;oc.set(i),n.uniformMatrix2fv(this.addr,!1,oc),Gt(t,i)}}function B1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;sc.set(i),n.uniformMatrix3fv(this.addr,!1,sc),Gt(t,i)}}function H1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;ac.set(i),n.uniformMatrix4fv(this.addr,!1,ac),Gt(t,i)}}function V1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function G1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function W1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function X1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function $1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function Z1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(nc.compareFunction=Cu,a=nc):a=Wu,t.setTexture2D(e||a,r)}function j1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xu,r)}function J1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yu,r)}function Q1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qu,r)}function e3(n){switch(n){case 5126:return U1;case 35664:return F1;case 35665:return k1;case 35666:return z1;case 35674:return O1;case 35675:return B1;case 35676:return H1;case 5124:case 35670:return V1;case 35667:case 35671:return G1;case 35668:case 35672:return W1;case 35669:case 35673:return q1;case 5125:return X1;case 36294:return Y1;case 36295:return $1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return Q1}}function t3(n,e){n.uniform1fv(this.addr,e)}function n3(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function i3(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function r3(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function a3(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s3(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function o3(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function l3(n,e){n.uniform1iv(this.addr,e)}function c3(n,e){n.uniform2iv(this.addr,e)}function u3(n,e){n.uniform3iv(this.addr,e)}function h3(n,e){n.uniform4iv(this.addr,e)}function d3(n,e){n.uniform1uiv(this.addr,e)}function f3(n,e){n.uniform2uiv(this.addr,e)}function p3(n,e){n.uniform3uiv(this.addr,e)}function m3(n,e){n.uniform4uiv(this.addr,e)}function x3(n,e,t){const i=this.cache,r=e.length,a=xs(t,r);Vt(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Wu,a[s])}function g3(n,e,t){const i=this.cache,r=e.length,a=xs(t,r);Vt(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Xu,a[s])}function v3(n,e,t){const i=this.cache,r=e.length,a=xs(t,r);Vt(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Yu,a[s])}function _3(n,e,t){const i=this.cache,r=e.length,a=xs(t,r);Vt(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||qu,a[s])}function b3(n){switch(n){case 5126:return t3;case 35664:return n3;case 35665:return i3;case 35666:return r3;case 35674:return a3;case 35675:return s3;case 35676:return o3;case 5124:case 35670:return l3;case 35667:case 35671:return c3;case 35668:case 35672:return u3;case 35669:case 35673:return h3;case 5125:return d3;case 36294:return f3;case 36295:return p3;case 36296:return m3;case 35678:case 36198:case 36298:case 36306:case 35682:return x3;case 35679:case 36299:case 36307:return g3;case 35680:case 36300:case 36308:case 36293:return v3;case 36289:case 36303:case 36311:case 36292:return _3}}class y3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=e3(t.type)}}class S3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b3(t.type)}}class M3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const r0=/(\w+)(\])?(\[|\.)?/g;function lc(n,e){n.seq.push(e),n.map[e.id]=e}function w3(n,e,t){const i=n.name,r=i.length;for(r0.lastIndex=0;;){const a=r0.exec(i),s=r0.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){lc(t,c===void 0?new y3(o,n,e):new S3(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new M3(o),lc(t,u)),t=u}}}class $a{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);w3(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function cc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const T3=37297;let E3=0;function A3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const uc=new je;function C3(n){ut._getMatrix(uc,ut.workingColorSpace,n);const e=`mat3( ${uc.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case ja:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+A3(n.getShaderSource(e),o)}else return a}function R3(n,e){const t=C3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D3(n,e){let t;switch(e){case Dd:t="Linear";break;case Pd:t="Reinhard";break;case Ld:t="Cineon";break;case Id:t="ACESFilmic";break;case Ud:t="AgX";break;case Fd:t="Neutral";break;case Nd:t="Custom";break;default:Ke("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Da=new q;function P3(){ut.getLuminanceCoefficients(Da);const n=Da.x.toFixed(4),e=Da.y.toFixed(4),t=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function I3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N3(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Br(n){return n!==""}function dc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U3=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(n){return n.replace(U3,k3)}const F3=new Map;function k3(n,e){let t=et[e];if(t===void 0){const i=F3.get(e);if(i!==void 0)t=et[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mo(t)}const z3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(n){return n.replace(z3,O3)}function O3(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function mc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function H3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case Sr:e="ENVMAP_TYPE_CUBE";break;case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function G3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _u:e="ENVMAP_BLENDING_MULTIPLY";break;case Cd:e="ENVMAP_BLENDING_MIX";break;case Rd:e="ENVMAP_BLENDING_ADD";break}return e}function W3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function q3(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=B3(t),c=H3(t),h=V3(t),u=G3(t),p=W3(t),m=L3(t),v=I3(a),_=r.createProgram();let g,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Br).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Br).join(`
`),f.length>0&&(f+=`
`)):(g=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),f=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?et.tonemapping_pars_fragment:"",t.toneMapping!==Ai?D3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,R3("linearToOutputTexel",t.outputColorSpace),P3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),s=mo(s),s=dc(s,t),s=fc(s,t),o=mo(o),o=dc(o,t),o=fc(o,t),s=pc(s),o=pc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=M+g+s,R=M+f+o,L=cc(r,r.VERTEX_SHADER,A),C=cc(r,r.FRAGMENT_SHADER,R);r.attachShader(_,L),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function N(U){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",X=r.getShaderInfoLog(L)||"",K=r.getShaderInfoLog(C)||"",Z=B.trim(),Q=X.trim(),se=K.trim();let J=!0,de=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,C);else{const he=hc(r,L,"vertex"),De=hc(r,C,"fragment");Ut("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Z+`
`+he+`
`+De)}else Z!==""?Ke("WebGLProgram: Program Info Log:",Z):(Q===""||se==="")&&(de=!1);de&&(U.diagnostics={runnable:J,programLog:Z,vertexShader:{log:Q,prefix:g},fragmentShader:{log:se,prefix:f}})}r.deleteShader(L),r.deleteShader(C),O=new $a(r,_),w=N3(r,_)}let O;this.getUniforms=function(){return O===void 0&&N(this),O};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,T3)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let X3=0;class Y3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $3(e),t.set(e,i)),i}}class $3{constructor(e){this.id=X3++,this.code=e,this.usedTimes=0}}function K3(n,e,t,i,r,a,s){const o=new Lu,l=new Y3,c=new Set,h=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,E,U,B,X){const K=B.fog,Z=X.geometry,Q=w.isMeshStandardMaterial?B.environment:null,se=(w.isMeshStandardMaterial?t:e).get(w.envMap||Q),J=se&&se.mapping===us?se.image.height:null,de=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&Ke("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,De=he!==void 0?he.length:0;let We=0;Z.morphAttributes.position!==void 0&&(We=1),Z.morphAttributes.normal!==void 0&&(We=2),Z.morphAttributes.color!==void 0&&(We=3);let st,ft,ot,ee;if(de){const gt=kn[de];st=gt.vertexShader,ft=gt.fragmentShader}else st=w.vertexShader,ft=w.fragmentShader,l.update(w),ot=l.getVertexShaderID(w),ee=l.getFragmentShaderID(w);const ie=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),qe=X.isInstancedMesh===!0,Pe=X.isBatchedMesh===!0,it=!!w.map,Ht=!!w.matcap,tt=!!se,xt=!!w.aoMap,F=!!w.lightMap,nt=!!w.bumpMap,Qe=!!w.normalMap,dt=!!w.displacementMap,Ee=!!w.emissiveMap,Et=!!w.metalnessMap,Ue=!!w.roughnessMap,Ze=w.anisotropy>0,D=w.clearcoat>0,y=w.dispersion>0,W=w.iridescence>0,te=w.sheen>0,ae=w.transmission>0,j=Ze&&!!w.anisotropyMap,Ie=D&&!!w.clearcoatMap,_e=D&&!!w.clearcoatNormalMap,ze=D&&!!w.clearcoatRoughnessMap,Le=W&&!!w.iridescenceMap,oe=W&&!!w.iridescenceThicknessMap,me=te&&!!w.sheenColorMap,Ve=te&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Te=!!w.specularColorMap,Ye=!!w.specularIntensityMap,k=ae&&!!w.transmissionMap,be=ae&&!!w.thicknessMap,xe=!!w.gradientMap,ge=!!w.alphaMap,ce=w.alphaTest>0,ne=!!w.alphaHash,Ce=!!w.extensions;let $e=Ai;w.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&($e=n.toneMapping);const wt={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:st,fragmentShader:ft,defines:w.defines,customVertexShaderID:ot,customFragmentShaderID:ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&X._colorsTexture!==null,instancing:qe,instancingColor:qe&&X.instanceColor!==null,instancingMorph:qe&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Mr,alphaToCoverage:!!w.alphaToCoverage,map:it,matcap:Ht,envMap:tt,envMapMode:tt&&se.mapping,envMapCubeUVHeight:J,aoMap:xt,lightMap:F,bumpMap:nt,normalMap:Qe,displacementMap:p&&dt,emissiveMap:Ee,normalMapObjectSpace:Qe&&w.normalMapType===Hd,normalMapTangentSpace:Qe&&w.normalMapType===Bd,metalnessMap:Et,roughnessMap:Ue,anisotropy:Ze,anisotropyMap:j,clearcoat:D,clearcoatMap:Ie,clearcoatNormalMap:_e,clearcoatRoughnessMap:ze,dispersion:y,iridescence:W,iridescenceMap:Le,iridescenceThicknessMap:oe,sheen:te,sheenColorMap:me,sheenRoughnessMap:Ve,specularMap:Be,specularColorMap:Te,specularIntensityMap:Ye,transmission:ae,transmissionMap:k,thicknessMap:be,gradientMap:xe,opaque:w.transparent===!1&&w.blending===xr&&w.alphaToCoverage===!1,alphaMap:ge,alphaTest:ce,alphaHash:ne,combine:w.combine,mapUv:it&&_(w.map.channel),aoMapUv:xt&&_(w.aoMap.channel),lightMapUv:F&&_(w.lightMap.channel),bumpMapUv:nt&&_(w.bumpMap.channel),normalMapUv:Qe&&_(w.normalMap.channel),displacementMapUv:dt&&_(w.displacementMap.channel),emissiveMapUv:Ee&&_(w.emissiveMap.channel),metalnessMapUv:Et&&_(w.metalnessMap.channel),roughnessMapUv:Ue&&_(w.roughnessMap.channel),anisotropyMapUv:j&&_(w.anisotropyMap.channel),clearcoatMapUv:Ie&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(w.sheenRoughnessMap.channel),specularMapUv:Be&&_(w.specularMap.channel),specularColorMapUv:Te&&_(w.specularColorMap.channel),specularIntensityMapUv:Ye&&_(w.specularIntensityMap.channel),transmissionMapUv:k&&_(w.transmissionMap.channel),thicknessMapUv:be&&_(w.thicknessMap.channel),alphaMapUv:ge&&_(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Qe||Ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Z.attributes.uv&&(it||ge),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:X.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:We,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:it&&w.map.isVideoTexture===!0&&ut.getTransfer(w.map.colorSpace)===_t,decodeVideoTextureEmissive:Ee&&w.emissiveMap.isVideoTexture===!0&&ut.getTransfer(w.emissiveMap.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ei,flipSided:w.side===cn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&w.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function f(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)E.push(U),E.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(M(E,w),A(E,w),E.push(n.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function M(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function A(w,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),w.push(o.mask)}function R(w){const E=v[w.type];let U;if(E){const B=kn[E];U=gf.clone(B.uniforms)}else U=w.uniforms;return U}function L(w,E){let U;for(let B=0,X=h.length;B<X;B++){const K=h[B];if(K.cacheKey===E){U=K,++U.usedTimes;break}}return U===void 0&&(U=new q3(n,E,w,a),h.push(U)),U}function C(w){if(--w.usedTimes===0){const E=h.indexOf(w);h[E]=h[h.length-1],h.pop(),w.destroy()}}function N(w){l.remove(w)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:R,acquireProgram:L,releaseProgram:C,releaseShaderCache:N,programs:h,dispose:O}}function Z3(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function j3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gc(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(u,p,m,v,_,g){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:v,renderOrder:u.renderOrder,z:_,group:g},n[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=_,f.group=g),e++,f}function o(u,p,m,v,_,g){const f=s(u,p,m,v,_,g);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(u,p,m,v,_,g){const f=s(u,p,m,v,_,g);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||j3),i.length>1&&i.sort(p||xc),r.length>1&&r.sort(p||xc)}function h(){for(let u=e,p=n.length;u<p;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function J3(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new gc,n.set(i,[s])):r>=a.length?(s=new gc,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Q3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new pt};break;case"SpotLight":t={position:new q,direction:new q,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function e2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let t2=0;function n2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function i2(n){const e=new Q3,t=e2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,a=new Nt,s=new Nt;function o(c){let h=0,u=0,p=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,v=0,_=0,g=0,f=0,M=0,A=0,R=0,L=0,C=0,N=0;c.sort(n2);for(let w=0,E=c.length;w<E;w++){const U=c[w],B=U.color,X=U.intensity,K=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=B.r*X,u+=B.g*X,p+=B.b*X;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(U.sh.coefficients[Q],X);N++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const se=U.shadow,J=t.get(U);J.shadowIntensity=se.intensity,J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=U.shadow.matrix,M++}i.directional[m]=Q,m++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(B).multiplyScalar(X),Q.distance=K,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,i.spot[_]=Q;const se=U.shadow;if(U.map&&(i.spotLightMap[L]=U.map,L++,se.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[_]=se.matrix,U.castShadow){const J=t.get(U);J.shadowIntensity=se.intensity,J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=Z,R++}_++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(B).multiplyScalar(X),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=Q,g++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const se=U.shadow,J=t.get(U);J.shadowIntensity=se.intensity,J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,J.shadowCameraNear=se.camera.near,J.shadowCameraFar=se.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=U.shadow.matrix,A++}i.point[v]=Q,v++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(X),Q.groundColor.copy(U.groundColor).multiplyScalar(X),i.hemi[f]=Q,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;const O=i.hash;(O.directionalLength!==m||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==g||O.hemiLength!==f||O.numDirectionalShadows!==M||O.numPointShadows!==A||O.numSpotShadows!==R||O.numSpotMaps!==L||O.numLightProbes!==N)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=R+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=N,O.directionalLength=m,O.pointLength=v,O.spotLength=_,O.rectAreaLength=g,O.hemiLength=f,O.numDirectionalShadows=M,O.numPointShadows=A,O.numSpotShadows=R,O.numSpotMaps=L,O.numLightProbes=N,i.version=t2++)}function l(c,h){let u=0,p=0,m=0,v=0,_=0;const g=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const A=c[f];if(A.isDirectionalLight){const R=i.directional[u];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),u++}else if(A.isSpotLight){const R=i.spot[m];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const R=i.rectArea[v];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),s.identity(),a.copy(A.matrixWorld),a.premultiply(g),s.extractRotation(a),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(s),R.halfHeight.applyMatrix4(s),v++}else if(A.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),p++}else if(A.isHemisphereLight){const R=i.hemi[_];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function vc(n){const e=new i2(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function r2(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new vc(n),e.set(r,[o])):a>=s.length?(o=new vc(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const a2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o2(n,e,t){let i=new Ou;const r=new mt,a=new mt,s=new Ft,o=new Pf({depthPacking:Od}),l=new Lf,c={},h=t.maxTextureSize,u={[Ci]:cn,[cn]:Ci,[ei]:ei},p=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:a2,fragmentShader:s2}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new An;v.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nn(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let f=this.type;this.render=function(C,N,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ai),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=f!==Jn&&this.type===Jn,K=f===Jn&&this.type!==Jn;for(let Z=0,Q=C.length;Z<Q;Z++){const se=C[Z],J=se.shadow;if(J===void 0){Ke("WebGLShadowMap:",se,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const de=J.getFrameExtents();if(r.multiply(de),a.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/de.x),r.x=a.x*de.x,J.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/de.y),r.y=a.y*de.y,J.mapSize.y=a.y)),J.map===null||X===!0||K===!0){const De=this.type!==Jn?{minFilter:xn,magFilter:xn}:{};J.map!==null&&J.map.dispose(),J.map=new Ki(r.x,r.y,De),J.map.texture.name=se.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const he=J.getViewportCount();for(let De=0;De<he;De++){const We=J.getViewport(De);s.set(a.x*We.x,a.y*We.y,a.x*We.z,a.y*We.w),B.viewport(s),J.updateMatrices(se,De),i=J.getFrustum(),R(N,O,J.camera,se,this.type)}J.isPointLightShadow!==!0&&this.type===Jn&&M(J,O),J.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(w,E,U)};function M(C,N){const O=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ki(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(N,null,O,p,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(N,null,O,m,_,null)}function A(C,N,O,w){let E=null;const U=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)E=U;else if(E=O.isPointLight===!0?l:o,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const B=E.uuid,X=N.uuid;let K=c[B];K===void 0&&(K={},c[B]=K);let Z=K[X];Z===void 0&&(Z=E.clone(),K[X]=Z,N.addEventListener("dispose",L)),E=Z}if(E.visible=N.visible,E.wireframe=N.wireframe,w===Jn?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:u[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=n.properties.get(E);B.light=O}return E}function R(C,N,O,w,E){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Jn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const X=e.update(C),K=C.material;if(Array.isArray(K)){const Z=X.groups;for(let Q=0,se=Z.length;Q<se;Q++){const J=Z[Q],de=K[J.materialIndex];if(de&&de.visible){const he=A(C,de,w,E);C.onBeforeShadow(n,C,N,O,X,he,J),n.renderBufferDirect(O,null,X,he,C,J),C.onAfterShadow(n,C,N,O,X,he,J)}}}else if(K.visible){const Z=A(C,K,w,E);C.onBeforeShadow(n,C,N,O,X,Z,null),n.renderBufferDirect(O,null,X,Z,C,null),C.onAfterShadow(n,C,N,O,X,Z,null)}}const B=C.children;for(let X=0,K=B.length;X<K;X++)R(B[X],N,O,w,E)}function L(C){C.target.removeEventListener("dispose",L);for(const O in c){const w=c[O],E=C.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const l2={[C0]:R0,[D0]:I0,[P0]:N0,[br]:L0,[R0]:C0,[I0]:D0,[N0]:P0,[L0]:br};function c2(n,e){function t(){let k=!1;const be=new Ft;let xe=null;const ge=new Ft(0,0,0,0);return{setMask:function(ce){xe!==ce&&!k&&(n.colorMask(ce,ce,ce,ce),xe=ce)},setLocked:function(ce){k=ce},setClear:function(ce,ne,Ce,$e,wt){wt===!0&&(ce*=$e,ne*=$e,Ce*=$e),be.set(ce,ne,Ce,$e),ge.equals(be)===!1&&(n.clearColor(ce,ne,Ce,$e),ge.copy(be))},reset:function(){k=!1,xe=null,ge.set(-1,0,0,0)}}}function i(){let k=!1,be=!1,xe=null,ge=null,ce=null;return{setReversed:function(ne){if(be!==ne){const Ce=e.get("EXT_clip_control");ne?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),be=ne;const $e=ce;ce=null,this.setClear($e)}},getReversed:function(){return be},setTest:function(ne){ne?ie(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(ne){xe!==ne&&!k&&(n.depthMask(ne),xe=ne)},setFunc:function(ne){if(be&&(ne=l2[ne]),ge!==ne){switch(ne){case C0:n.depthFunc(n.NEVER);break;case R0:n.depthFunc(n.ALWAYS);break;case D0:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case P0:n.depthFunc(n.EQUAL);break;case L0:n.depthFunc(n.GEQUAL);break;case I0:n.depthFunc(n.GREATER);break;case N0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=ne}},setLocked:function(ne){k=ne},setClear:function(ne){ce!==ne&&(be&&(ne=1-ne),n.clearDepth(ne),ce=ne)},reset:function(){k=!1,xe=null,ge=null,ce=null,be=!1}}}function r(){let k=!1,be=null,xe=null,ge=null,ce=null,ne=null,Ce=null,$e=null,wt=null;return{setTest:function(gt){k||(gt?ie(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(gt){be!==gt&&!k&&(n.stencilMask(gt),be=gt)},setFunc:function(gt,Fn,Cn){(xe!==gt||ge!==Fn||ce!==Cn)&&(n.stencilFunc(gt,Fn,Cn),xe=gt,ge=Fn,ce=Cn)},setOp:function(gt,Fn,Cn){(ne!==gt||Ce!==Fn||$e!==Cn)&&(n.stencilOp(gt,Fn,Cn),ne=gt,Ce=Fn,$e=Cn)},setLocked:function(gt){k=gt},setClear:function(gt){wt!==gt&&(n.clearStencil(gt),wt=gt)},reset:function(){k=!1,be=null,xe=null,ge=null,ce=null,ne=null,Ce=null,$e=null,wt=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,m=[],v=null,_=!1,g=null,f=null,M=null,A=null,R=null,L=null,C=null,N=new pt(0,0,0),O=0,w=!1,E=null,U=null,B=null,X=null,K=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,se=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(J)[1]),Q=se>=1):J.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Q=se>=2);let de=null,he={};const De=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),st=new Ft().fromArray(De),ft=new Ft().fromArray(We);function ot(k,be,xe,ge){const ce=new Uint8Array(4),ne=n.createTexture();n.bindTexture(k,ne),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<xe;Ce++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(be+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ne}const ee={};ee[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),s.setFunc(br),nt(!1),Qe(bl),ie(n.CULL_FACE),xt(ai);function ie(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function Se(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function qe(k,be){return u[k]!==be?(n.bindFramebuffer(k,be),u[k]=be,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=be),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Pe(k,be){let xe=m,ge=!1;if(k){xe=p.get(be),xe===void 0&&(xe=[],p.set(be,xe));const ce=k.textures;if(xe.length!==ce.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,Ce=ce.length;ne<Ce;ne++)xe[ne]=n.COLOR_ATTACHMENT0+ne;xe.length=ce.length,ge=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,ge=!0);ge&&n.drawBuffers(xe)}function it(k){return v!==k?(n.useProgram(k),v=k,!0):!1}const Ht={[qi]:n.FUNC_ADD,[hd]:n.FUNC_SUBTRACT,[dd]:n.FUNC_REVERSE_SUBTRACT};Ht[fd]=n.MIN,Ht[pd]=n.MAX;const tt={[md]:n.ZERO,[xd]:n.ONE,[gd]:n.SRC_COLOR,[E0]:n.SRC_ALPHA,[Md]:n.SRC_ALPHA_SATURATE,[yd]:n.DST_COLOR,[_d]:n.DST_ALPHA,[vd]:n.ONE_MINUS_SRC_COLOR,[A0]:n.ONE_MINUS_SRC_ALPHA,[Sd]:n.ONE_MINUS_DST_COLOR,[bd]:n.ONE_MINUS_DST_ALPHA,[wd]:n.CONSTANT_COLOR,[Td]:n.ONE_MINUS_CONSTANT_COLOR,[Ed]:n.CONSTANT_ALPHA,[Ad]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(k,be,xe,ge,ce,ne,Ce,$e,wt,gt){if(k===ai){_===!0&&(Se(n.BLEND),_=!1);return}if(_===!1&&(ie(n.BLEND),_=!0),k!==ud){if(k!==g||gt!==w){if((f!==qi||R!==qi)&&(n.blendEquation(n.FUNC_ADD),f=qi,R=qi),gt)switch(k){case xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yl:n.blendFunc(n.ONE,n.ONE);break;case Sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ml:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ut("WebGLState: Invalid blending: ",k);break}else switch(k){case xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sl:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",k);break}M=null,A=null,L=null,C=null,N.set(0,0,0),O=0,g=k,w=gt}return}ce=ce||be,ne=ne||xe,Ce=Ce||ge,(be!==f||ce!==R)&&(n.blendEquationSeparate(Ht[be],Ht[ce]),f=be,R=ce),(xe!==M||ge!==A||ne!==L||Ce!==C)&&(n.blendFuncSeparate(tt[xe],tt[ge],tt[ne],tt[Ce]),M=xe,A=ge,L=ne,C=Ce),($e.equals(N)===!1||wt!==O)&&(n.blendColor($e.r,$e.g,$e.b,wt),N.copy($e),O=wt),g=k,w=!1}function F(k,be){k.side===ei?Se(n.CULL_FACE):ie(n.CULL_FACE);let xe=k.side===cn;be&&(xe=!xe),nt(xe),k.blending===xr&&k.transparent===!1?xt(ai):xt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),a.setMask(k.colorWrite);const ge=k.stencilWrite;o.setTest(ge),ge&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ee(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(k){E!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),E=k)}function Qe(k){k!==od?(ie(n.CULL_FACE),k!==U&&(k===bl?n.cullFace(n.BACK):k===ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),U=k}function dt(k){k!==B&&(Q&&n.lineWidth(k),B=k)}function Ee(k,be,xe){k?(ie(n.POLYGON_OFFSET_FILL),(X!==be||K!==xe)&&(n.polygonOffset(be,xe),X=be,K=xe)):Se(n.POLYGON_OFFSET_FILL)}function Et(k){k?ie(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Ue(k){k===void 0&&(k=n.TEXTURE0+Z-1),de!==k&&(n.activeTexture(k),de=k)}function Ze(k,be,xe){xe===void 0&&(de===null?xe=n.TEXTURE0+Z-1:xe=de);let ge=he[xe];ge===void 0&&(ge={type:void 0,texture:void 0},he[xe]=ge),(ge.type!==k||ge.texture!==be)&&(de!==xe&&(n.activeTexture(xe),de=xe),n.bindTexture(k,be||ee[k]),ge.type=k,ge.texture=be)}function D(){const k=he[de];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function te(){try{n.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ae(){try{n.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function _e(){try{n.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ze(){try{n.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Le(){try{n.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function oe(){try{n.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function me(k){st.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),st.copy(k))}function Ve(k){ft.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ft.copy(k))}function Be(k,be){let xe=c.get(be);xe===void 0&&(xe=new WeakMap,c.set(be,xe));let ge=xe.get(k);ge===void 0&&(ge=n.getUniformBlockIndex(be,k.name),xe.set(k,ge))}function Te(k,be){const ge=c.get(be).get(k);l.get(be)!==ge&&(n.uniformBlockBinding(be,ge,k.__bindingPointIndex),l.set(be,ge))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},de=null,he={},u={},p=new WeakMap,m=[],v=null,_=!1,g=null,f=null,M=null,A=null,R=null,L=null,C=null,N=new pt(0,0,0),O=0,w=!1,E=null,U=null,B=null,X=null,K=null,st.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ie,disable:Se,bindFramebuffer:qe,drawBuffers:Pe,useProgram:it,setBlending:xt,setMaterial:F,setFlipSided:nt,setCullFace:Qe,setLineWidth:dt,setPolygonOffset:Ee,setScissorTest:Et,activeTexture:Ue,bindTexture:Ze,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:Le,texImage3D:oe,updateUBOMapping:Be,uniformBlockBinding:Te,texStorage2D:_e,texStorage3D:ze,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:j,compressedTexSubImage3D:Ie,scissor:me,viewport:Ve,reset:Ye}}function u2(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,y){return m?new OffscreenCanvas(D,y):Qa("canvas")}function _(D,y,W){let te=1;const ae=Ze(D);if((ae.width>W||ae.height>W)&&(te=W/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const j=Math.floor(te*ae.width),Ie=Math.floor(te*ae.height);u===void 0&&(u=v(j,Ie));const _e=y?v(j,Ie):u;return _e.width=j,_e.height=Ie,_e.getContext("2d").drawImage(D,0,0,j,Ie),Ke("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+j+"x"+Ie+")."),_e}else return"data"in D&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),D;return D}function g(D){return D.generateMipmaps}function f(D){n.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(D,y,W,te,ae=!1){if(D!==null){if(n[D]!==void 0)return n[D];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=y;if(y===n.RED&&(W===n.FLOAT&&(j=n.R32F),W===n.HALF_FLOAT&&(j=n.R16F),W===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.R8UI),W===n.UNSIGNED_SHORT&&(j=n.R16UI),W===n.UNSIGNED_INT&&(j=n.R32UI),W===n.BYTE&&(j=n.R8I),W===n.SHORT&&(j=n.R16I),W===n.INT&&(j=n.R32I)),y===n.RG&&(W===n.FLOAT&&(j=n.RG32F),W===n.HALF_FLOAT&&(j=n.RG16F),W===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RG8UI),W===n.UNSIGNED_SHORT&&(j=n.RG16UI),W===n.UNSIGNED_INT&&(j=n.RG32UI),W===n.BYTE&&(j=n.RG8I),W===n.SHORT&&(j=n.RG16I),W===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGB8UI),W===n.UNSIGNED_SHORT&&(j=n.RGB16UI),W===n.UNSIGNED_INT&&(j=n.RGB32UI),W===n.BYTE&&(j=n.RGB8I),W===n.SHORT&&(j=n.RGB16I),W===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),W===n.UNSIGNED_INT&&(j=n.RGBA32UI),W===n.BYTE&&(j=n.RGBA8I),W===n.SHORT&&(j=n.RGBA16I),W===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(W===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){const Ie=ae?ja:ut.getTransfer(te);W===n.FLOAT&&(j=n.RGBA32F),W===n.HALF_FLOAT&&(j=n.RGBA16F),W===n.UNSIGNED_BYTE&&(j=Ie===_t?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function R(D,y){let W;return D?y===null||y===$i||y===qr?W=n.DEPTH24_STENCIL8:y===ii?W=n.DEPTH32F_STENCIL8:y===Wr&&(W=n.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$i||y===qr?W=n.DEPTH_COMPONENT24:y===ii?W=n.DEPTH_COMPONENT32F:y===Wr&&(W=n.DEPTH_COMPONENT16),W}function L(D,y){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==xn&&D.minFilter!==wn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function C(D){const y=D.target;y.removeEventListener("dispose",C),O(y),y.isVideoTexture&&h.delete(y)}function N(D){const y=D.target;y.removeEventListener("dispose",N),E(y)}function O(D){const y=i.get(D);if(y.__webglInit===void 0)return;const W=D.source,te=p.get(W);if(te){const ae=te[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(D),Object.keys(te).length===0&&p.delete(W)}i.remove(D)}function w(D){const y=i.get(D);n.deleteTexture(y.__webglTexture);const W=D.source,te=p.get(W);delete te[y.__cacheKey],s.memory.textures--}function E(D){const y=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let ae=0;ae<y.__webglFramebuffer[te].length;ae++)n.deleteFramebuffer(y.__webglFramebuffer[te][ae]);else n.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)n.deleteFramebuffer(y.__webglFramebuffer[te]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=D.textures;for(let te=0,ae=W.length;te<ae;te++){const j=i.get(W[te]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),s.memory.textures--),i.remove(W[te])}i.remove(D)}let U=0;function B(){U=0}function X(){const D=U;return D>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),U+=1,D}function K(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function Z(D,y){const W=i.get(D);if(D.isVideoTexture&&Et(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const te=D.image;if(te===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(W,D,y);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+y)}function Q(D,y){const W=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){ee(W,D,y);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+y)}function se(D,y){const W=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){ee(W,D,y);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+y)}function J(D,y){const W=i.get(D);if(D.version>0&&W.__version!==D.version){ie(W,D,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+y)}const de={[k0]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[z0]:n.MIRRORED_REPEAT},he={[xn]:n.NEAREST,[kd]:n.NEAREST_MIPMAP_NEAREST,[sa]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[Cs]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},De={[Vd]:n.NEVER,[$d]:n.ALWAYS,[Gd]:n.LESS,[Cu]:n.LEQUAL,[Wd]:n.EQUAL,[Yd]:n.GEQUAL,[qd]:n.GREATER,[Xd]:n.NOTEQUAL};function We(D,y){if(y.type===ii&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===wn||y.magFilter===Cs||y.magFilter===sa||y.magFilter===Yi||y.minFilter===wn||y.minFilter===Cs||y.minFilter===sa||y.minFilter===Yi)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,de[y.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,de[y.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,de[y.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,he[y.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,De[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==sa&&y.minFilter!==Yi||y.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function st(D,y){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",C));const te=y.source;let ae=p.get(te);ae===void 0&&(ae={},p.set(te,ae));const j=K(y);if(j!==D.__cacheKey){ae[j]===void 0&&(ae[j]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,W=!0),ae[j].usedTimes++;const Ie=ae[D.__cacheKey];Ie!==void 0&&(ae[D.__cacheKey].usedTimes--,Ie.usedTimes===0&&w(y)),D.__cacheKey=j,D.__webglTexture=ae[j].texture}return W}function ft(D,y,W){return Math.floor(Math.floor(D/W)/y)}function ot(D,y,W,te){const j=D.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,W,te,y.data);else{j.sort((oe,me)=>oe.start-me.start);let Ie=0;for(let oe=1;oe<j.length;oe++){const me=j[Ie],Ve=j[oe],Be=me.start+me.count,Te=ft(Ve.start,y.width,4),Ye=ft(me.start,y.width,4);Ve.start<=Be+1&&Te===Ye&&ft(Ve.start+Ve.count-1,y.width,4)===Te?me.count=Math.max(me.count,Ve.start+Ve.count-me.start):(++Ie,j[Ie]=Ve)}j.length=Ie+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),ze=n.getParameter(n.UNPACK_SKIP_PIXELS),Le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let oe=0,me=j.length;oe<me;oe++){const Ve=j[oe],Be=Math.floor(Ve.start/4),Te=Math.ceil(Ve.count/4),Ye=Be%y.width,k=Math.floor(Be/y.width),be=Te,xe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,Ye,k,be,xe,W,te,y.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function ee(D,y,W){let te=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=n.TEXTURE_3D);const ae=st(D,y),j=y.source;t.bindTexture(te,D.__webglTexture,n.TEXTURE0+W);const Ie=i.get(j);if(j.version!==Ie.__version||ae===!0){t.activeTexture(n.TEXTURE0+W);const _e=ut.getPrimaries(ut.workingColorSpace),ze=y.colorSpace===Mi?null:ut.getPrimaries(y.colorSpace),Le=y.colorSpace===Mi||_e===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let oe=_(y.image,!1,r.maxTextureSize);oe=Ue(y,oe);const me=a.convert(y.format,y.colorSpace),Ve=a.convert(y.type);let Be=A(y.internalFormat,me,Ve,y.colorSpace,y.isVideoTexture);We(te,y);let Te;const Ye=y.mipmaps,k=y.isVideoTexture!==!0,be=Ie.__version===void 0||ae===!0,xe=j.dataReady,ge=L(y,oe);if(y.isDepthTexture)Be=R(y.format===Yr,y.type),be&&(k?t.texStorage2D(n.TEXTURE_2D,1,Be,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Be,oe.width,oe.height,0,me,Ve,null));else if(y.isDataTexture)if(Ye.length>0){k&&be&&t.texStorage2D(n.TEXTURE_2D,ge,Be,Ye[0].width,Ye[0].height);for(let ce=0,ne=Ye.length;ce<ne;ce++)Te=Ye[ce],k?xe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Te.width,Te.height,me,Ve,Te.data):t.texImage2D(n.TEXTURE_2D,ce,Be,Te.width,Te.height,0,me,Ve,Te.data);y.generateMipmaps=!1}else k?(be&&t.texStorage2D(n.TEXTURE_2D,ge,Be,oe.width,oe.height),xe&&ot(y,oe,me,Ve)):t.texImage2D(n.TEXTURE_2D,0,Be,oe.width,oe.height,0,me,Ve,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Be,Ye[0].width,Ye[0].height,oe.depth);for(let ce=0,ne=Ye.length;ce<ne;ce++)if(Te=Ye[ce],y.format!==In)if(me!==null)if(k){if(xe)if(y.layerUpdates.size>0){const Ce=Kl(Te.width,Te.height,y.format,y.type);for(const $e of y.layerUpdates){const wt=Te.data.subarray($e*Ce/Te.data.BYTES_PER_ELEMENT,($e+1)*Ce/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,$e,Te.width,Te.height,1,me,wt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Te.width,Te.height,oe.depth,me,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Be,Te.width,Te.height,oe.depth,0,Te.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Te.width,Te.height,oe.depth,me,Ve,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Be,Te.width,Te.height,oe.depth,0,me,Ve,Te.data)}else{k&&be&&t.texStorage2D(n.TEXTURE_2D,ge,Be,Ye[0].width,Ye[0].height);for(let ce=0,ne=Ye.length;ce<ne;ce++)Te=Ye[ce],y.format!==In?me!==null?k?xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Te.width,Te.height,me,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Be,Te.width,Te.height,0,Te.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?xe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Te.width,Te.height,me,Ve,Te.data):t.texImage2D(n.TEXTURE_2D,ce,Be,Te.width,Te.height,0,me,Ve,Te.data)}else if(y.isDataArrayTexture)if(k){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Be,oe.width,oe.height,oe.depth),xe)if(y.layerUpdates.size>0){const ce=Kl(oe.width,oe.height,y.format,y.type);for(const ne of y.layerUpdates){const Ce=oe.data.subarray(ne*ce/oe.data.BYTES_PER_ELEMENT,(ne+1)*ce/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,me,Ve,Ce)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Ve,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,oe.width,oe.height,oe.depth,0,me,Ve,oe.data);else if(y.isData3DTexture)k?(be&&t.texStorage3D(n.TEXTURE_3D,ge,Be,oe.width,oe.height,oe.depth),xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Ve,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,oe.width,oe.height,oe.depth,0,me,Ve,oe.data);else if(y.isFramebufferTexture){if(be)if(k)t.texStorage2D(n.TEXTURE_2D,ge,Be,oe.width,oe.height);else{let ce=oe.width,ne=oe.height;for(let Ce=0;Ce<ge;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Be,ce,ne,0,me,Ve,null),ce>>=1,ne>>=1}}else if(Ye.length>0){if(k&&be){const ce=Ze(Ye[0]);t.texStorage2D(n.TEXTURE_2D,ge,Be,ce.width,ce.height)}for(let ce=0,ne=Ye.length;ce<ne;ce++)Te=Ye[ce],k?xe&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,me,Ve,Te):t.texImage2D(n.TEXTURE_2D,ce,Be,me,Ve,Te);y.generateMipmaps=!1}else if(k){if(be){const ce=Ze(oe);t.texStorage2D(n.TEXTURE_2D,ge,Be,ce.width,ce.height)}xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ve,oe)}else t.texImage2D(n.TEXTURE_2D,0,Be,me,Ve,oe);g(y)&&f(te),Ie.__version=j.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ie(D,y,W){if(y.image.length!==6)return;const te=st(D,y),ae=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+W);const j=i.get(ae);if(ae.version!==j.__version||te===!0){t.activeTexture(n.TEXTURE0+W);const Ie=ut.getPrimaries(ut.workingColorSpace),_e=y.colorSpace===Mi?null:ut.getPrimaries(y.colorSpace),ze=y.colorSpace===Mi||Ie===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Le=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!Le&&!oe?me[ne]=_(y.image[ne],!0,r.maxCubemapSize):me[ne]=oe?y.image[ne].image:y.image[ne],me[ne]=Ue(y,me[ne]);const Ve=me[0],Be=a.convert(y.format,y.colorSpace),Te=a.convert(y.type),Ye=A(y.internalFormat,Be,Te,y.colorSpace),k=y.isVideoTexture!==!0,be=j.__version===void 0||te===!0,xe=ae.dataReady;let ge=L(y,Ve);We(n.TEXTURE_CUBE_MAP,y);let ce;if(Le){k&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ye,Ve.width,Ve.height);for(let ne=0;ne<6;ne++){ce=me[ne].mipmaps;for(let Ce=0;Ce<ce.length;Ce++){const $e=ce[Ce];y.format!==In?Be!==null?k?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,$e.width,$e.height,Be,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Ye,$e.width,$e.height,0,$e.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,$e.width,$e.height,Be,Te,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Ye,$e.width,$e.height,0,Be,Te,$e.data)}}}else{if(ce=y.mipmaps,k&&be){ce.length>0&&ge++;const ne=Ze(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ye,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){k?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Be,Te,me[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,me[ne].width,me[ne].height,0,Be,Te,me[ne].data);for(let Ce=0;Ce<ce.length;Ce++){const wt=ce[Ce].image[ne].image;k?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,wt.width,wt.height,Be,Te,wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Ye,wt.width,wt.height,0,Be,Te,wt.data)}}else{k?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Be,Te,me[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ye,Be,Te,me[ne]);for(let Ce=0;Ce<ce.length;Ce++){const $e=ce[Ce];k?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,Be,Te,$e.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Ye,Be,Te,$e.image[ne])}}}g(y)&&f(n.TEXTURE_CUBE_MAP),j.__version=ae.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function Se(D,y,W,te,ae,j){const Ie=a.convert(W.format,W.colorSpace),_e=a.convert(W.type),ze=A(W.internalFormat,Ie,_e,W.colorSpace),Le=i.get(y),oe=i.get(W);if(oe.__renderTarget=y,!Le.__hasExternalTextures){const me=Math.max(1,y.width>>j),Ve=Math.max(1,y.height>>j);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,j,ze,me,Ve,y.depth,0,Ie,_e,null):t.texImage2D(ae,j,ze,me,Ve,0,Ie,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Ee(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ae,oe.__webglTexture,0,dt(y)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ae,oe.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(D,y,W){if(n.bindRenderbuffer(n.RENDERBUFFER,D),y.depthBuffer){const te=y.depthTexture,ae=te&&te.isDepthTexture?te.type:null,j=R(y.stencilBuffer,ae),Ie=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=dt(y);Ee(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,j,y.width,y.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,D)}else{const te=y.textures;for(let ae=0;ae<te.length;ae++){const j=te[ae],Ie=a.convert(j.format,j.colorSpace),_e=a.convert(j.type),ze=A(j.internalFormat,Ie,_e,j.colorSpace),Le=dt(y);W&&Ee(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ze,y.width,y.height):Ee(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,ze,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ze,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(D,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(y.depthTexture);te.__renderTarget=y,(!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const ae=te.__webglTexture,j=dt(y);if(y.depthTexture.format===Xr)Ee(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(y.depthTexture.format===Yr)Ee(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function it(D){const y=i.get(D),W=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const te=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){const ae=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),y.__depthDisposeCallback=ae}y.__boundDepthTexture=te}if(D.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const te=D.texture.mipmaps;te&&te.length>0?Pe(y.__webglFramebuffer[0],D):Pe(y.__webglFramebuffer,D)}else if(W){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=n.createRenderbuffer(),qe(y.__webglDepthbuffer[te],D,!1);else{const ae=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,j)}}else{const te=D.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),qe(y.__webglDepthbuffer,D,!1);else{const ae=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(D,y,W){const te=i.get(D);y!==void 0&&Se(te.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&it(D)}function tt(D){const y=D.texture,W=i.get(D),te=i.get(y);D.addEventListener("dispose",N);const ae=D.textures,j=D.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=y.version,s.memory.textures++),j){W.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[_e]=[];for(let ze=0;ze<y.mipmaps.length;ze++)W.__webglFramebuffer[_e][ze]=n.createFramebuffer()}else W.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let _e=0;_e<y.mipmaps.length;_e++)W.__webglFramebuffer[_e]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let _e=0,ze=ae.length;_e<ze;_e++){const Le=i.get(ae[_e]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&Ee(D)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _e=0;_e<ae.length;_e++){const ze=ae[_e];W.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[_e]);const Le=a.convert(ze.format,ze.colorSpace),oe=a.convert(ze.type),me=A(ze.internalFormat,Le,oe,ze.colorSpace,D.isXRRenderTarget===!0),Ve=dt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,me,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,W.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),qe(W.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),We(n.TEXTURE_CUBE_MAP,y);for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0)for(let ze=0;ze<y.mipmaps.length;ze++)Se(W.__webglFramebuffer[_e][ze],D,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze);else Se(W.__webglFramebuffer[_e],D,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(y)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let _e=0,ze=ae.length;_e<ze;_e++){const Le=ae[_e],oe=i.get(Le);let me=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),We(me,Le),Se(W.__webglFramebuffer,D,Le,n.COLOR_ATTACHMENT0+_e,me,0),g(Le)&&f(me)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,te.__webglTexture),We(_e,y),y.mipmaps&&y.mipmaps.length>0)for(let ze=0;ze<y.mipmaps.length;ze++)Se(W.__webglFramebuffer[ze],D,y,n.COLOR_ATTACHMENT0,_e,ze);else Se(W.__webglFramebuffer,D,y,n.COLOR_ATTACHMENT0,_e,0);g(y)&&f(_e),t.unbindTexture()}D.depthBuffer&&it(D)}function xt(D){const y=D.textures;for(let W=0,te=y.length;W<te;W++){const ae=y[W];if(g(ae)){const j=M(D),Ie=i.get(ae).__webglTexture;t.bindTexture(j,Ie),f(j),t.unbindTexture()}}}const F=[],nt=[];function Qe(D){if(D.samples>0){if(Ee(D)===!1){const y=D.textures,W=D.width,te=D.height;let ae=n.COLOR_BUFFER_BIT;const j=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(D),_e=y.length>1;if(_e)for(let Le=0;Le<y.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const ze=D.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Le=0;Le<y.length;Le++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);const oe=i.get(y[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,W,te,0,0,W,te,ae,n.NEAREST),l===!0&&(F.length=0,nt.length=0,F.push(n.COLOR_ATTACHMENT0+Le),D.depthBuffer&&D.resolveDepthBuffer===!1&&(F.push(j),nt.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Le=0;Le<y.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);const oe=i.get(y[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const y=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function dt(D){return Math.min(r.maxSamples,D.samples)}function Ee(D){const y=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Et(D){const y=s.render.frame;h.get(D)!==y&&(h.set(D,y),D.update())}function Ue(D,y){const W=D.colorSpace,te=D.format,ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Mr&&W!==Mi&&(ut.getTransfer(W)===_t?(te!==In||ae!==ci)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",W)),y}function Ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=se,this.setTextureCube=J,this.rebindTextures=Ht,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ee}function h2(n,e){function t(i,r=Mi){let a;const s=ut.getTransfer(r);if(i===ci)return n.UNSIGNED_BYTE;if(i===Ro)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Do)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yu)return n.BYTE;if(i===Su)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===Co)return n.INT;if(i===$i)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===Er)return n.HALF_FLOAT;if(i===Tu)return n.ALPHA;if(i===Eu)return n.RGB;if(i===In)return n.RGBA;if(i===Xr)return n.DEPTH_COMPONENT;if(i===Yr)return n.DEPTH_STENCIL;if(i===Au)return n.RED;if(i===Po)return n.RED_INTEGER;if(i===Lo)return n.RG;if(i===Io)return n.RG_INTEGER;if(i===No)return n.RGBA_INTEGER;if(i===Ga||i===Wa||i===qa||i===Xa)if(s===_t)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===O0||i===B0||i===H0||i===V0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===O0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===B0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===H0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===V0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===G0||i===W0||i===q0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===G0||i===W0)return s===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===q0)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===X0||i===Y0||i===$0||i===K0||i===Z0||i===j0||i===J0||i===Q0||i===eo||i===to||i===no||i===io||i===ro||i===ao)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===X0)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Y0)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$0)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===K0)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Z0)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===j0)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===J0)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Q0)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===eo)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===to)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===no)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===io)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ro)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ao)return s===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===so||i===oo||i===lo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===so)return s===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===co||i===uo||i===ho||i===fo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===co)return a.COMPRESSED_RED_RGTC1_EXT;if(i===uo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ho)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const d2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new hi({vertexShader:d2,fragmentShader:f2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m2 extends Ar{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,v=null;const _=typeof XRWebGLBinding<"u",g=new p2,f={},M=t.getContextAttributes();let A=null,R=null;const L=[],C=[],N=new mt;let O=null;const w=new Sn;w.viewport=new Ft;const E=new Sn;E.viewport=new Ft;const U=[w,E],B=new Nf;let X=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ie=L[ee];return ie===void 0&&(ie=new Zs,L[ee]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(ee){let ie=L[ee];return ie===void 0&&(ie=new Zs,L[ee]=ie),ie.getGripSpace()},this.getHand=function(ee){let ie=L[ee];return ie===void 0&&(ie=new Zs,L[ee]=ie),ie.getHandSpace()};function Z(ee){const ie=C.indexOf(ee.inputSource);if(ie===-1)return;const Se=L[ie];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,c||s),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Q(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",se);for(let ee=0;ee<L.length;ee++){const ie=C[ee];ie!==null&&(C[ee]=null,L[ee].disconnect(ie))}X=null,K=null,g.reset();for(const ee in f)delete f[ee];e.setRenderTarget(A),m=null,p=null,u=null,r=null,R=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",se),M.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(N),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,qe=null,Pe=null;M.depth&&(Pe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?Yr:Xr,qe=M.stencil?qr:$i);const it={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:a};u=this.getBinding(),p=u.createProjectionLayer(it),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new Ki(p.textureWidth,p.textureHeight,{format:In,type:ci,depthTexture:new Hu(p.textureWidth,p.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new Ki(m.framebufferWidth,m.framebufferHeight,{format:In,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),ot.setContext(r),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(ee){for(let ie=0;ie<ee.removed.length;ie++){const Se=ee.removed[ie],qe=C.indexOf(Se);qe>=0&&(C[qe]=null,L[qe].disconnect(Se))}for(let ie=0;ie<ee.added.length;ie++){const Se=ee.added[ie];let qe=C.indexOf(Se);if(qe===-1){for(let it=0;it<L.length;it++)if(it>=C.length){C.push(Se),qe=it;break}else if(C[it]===null){C[it]=Se,qe=it;break}if(qe===-1)break}const Pe=L[qe];Pe&&Pe.connect(Se)}}const J=new q,de=new q;function he(ee,ie,Se){J.setFromMatrixPosition(ie.matrixWorld),de.setFromMatrixPosition(Se.matrixWorld);const qe=J.distanceTo(de),Pe=ie.projectionMatrix.elements,it=Se.projectionMatrix.elements,Ht=Pe[14]/(Pe[10]-1),tt=Pe[14]/(Pe[10]+1),xt=(Pe[9]+1)/Pe[5],F=(Pe[9]-1)/Pe[5],nt=(Pe[8]-1)/Pe[0],Qe=(it[8]+1)/it[0],dt=Ht*nt,Ee=Ht*Qe,Et=qe/(-nt+Qe),Ue=Et*-nt;if(ie.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ue),ee.translateZ(Et),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Pe[10]===-1)ee.projectionMatrix.copy(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ze=Ht+Et,D=tt+Et,y=dt-Ue,W=Ee+(qe-Ue),te=xt*tt/D*Ze,ae=F*tt/D*Ze;ee.projectionMatrix.makePerspective(y,W,te,ae,Ze,D),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function De(ee,ie){ie===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ie.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ie=ee.near,Se=ee.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),B.near=E.near=w.near=ie,B.far=E.far=w.far=Se,(X!==B.near||K!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,K=B.far),B.layers.mask=ee.layers.mask|6,w.layers.mask=B.layers.mask&3,E.layers.mask=B.layers.mask&5;const qe=ee.parent,Pe=B.cameras;De(B,qe);for(let it=0;it<Pe.length;it++)De(Pe[it],qe);Pe.length===2?he(B,w,E):B.projectionMatrix.copy(w.projectionMatrix),We(ee,B,qe)};function We(ee,ie,Se){Se===null?ee.matrix.copy(ie.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ie.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ie.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=po*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(ee){l=ee,p!==null&&(p.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(ee){return f[ee]};let st=null;function ft(ee,ie){if(h=ie.getViewerPose(c||s),v=ie,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let qe=!1;Se.length!==B.cameras.length&&(B.cameras.length=0,qe=!0);for(let tt=0;tt<Se.length;tt++){const xt=Se[tt];let F=null;if(m!==null)F=m.getViewport(xt);else{const Qe=u.getViewSubImage(p,xt);F=Qe.viewport,tt===0&&(e.setRenderTargetTextures(R,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(R))}let nt=U[tt];nt===void 0&&(nt=new Sn,nt.layers.enable(tt),nt.viewport=new Ft,U[tt]=nt),nt.matrix.fromArray(xt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(xt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(F.x,F.y,F.width,F.height),tt===0&&(B.matrix.copy(nt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),qe===!0&&B.cameras.push(nt)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const tt=u.getDepthInformation(Se[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,r.renderState)}if(Pe&&Pe.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let tt=0;tt<Se.length;tt++){const xt=Se[tt].camera;if(xt){let F=f[xt];F||(F=new Vu,f[xt]=F);const nt=u.getCameraImage(xt);F.sourceTexture=nt}}}}for(let Se=0;Se<L.length;Se++){const qe=C[Se],Pe=L[Se];qe!==null&&Pe!==void 0&&Pe.update(qe,ie,c||s)}st&&st(ee,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const ot=new Gu;ot.setAnimationLoop(ft),this.setAnimationLoop=function(ee){st=ee},this.dispose=function(){}}}const Bi=new ui,x2=new Nt;function g2(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Fu(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,M,A,R){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(g,f):f.isMeshToonMaterial?(a(g,f),u(g,f)):f.isMeshPhongMaterial?(a(g,f),h(g,f)):f.isMeshStandardMaterial?(a(g,f),p(g,f),f.isMeshPhysicalMaterial&&m(g,f,R)):f.isMeshMatcapMaterial?(a(g,f),v(g,f)):f.isMeshDepthMaterial?a(g,f):f.isMeshDistanceMaterial?(a(g,f),_(g,f)):f.isMeshNormalMaterial?a(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,M,A):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===cn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===cn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const M=e.get(f),A=M.envMap,R=M.envMapRotation;A&&(g.envMap.value=A,Bi.copy(R),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),g.envMapRotation.value.setFromMatrix4(x2.makeRotationFromEuler(Bi)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,M,A){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=A*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){const M=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function v2(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const R=A.program;i.uniformBlockBinding(M,R)}function c(M,A){let R=r[M.id];R===void 0&&(v(M),R=h(M),r[M.id]=R,M.addEventListener("dispose",g));const L=A.program;i.updateUBOMapping(M,L);const C=e.render.frame;a[M.id]!==C&&(p(M),a[M.id]=C)}function h(M){const A=u();M.__bindingPointIndex=A;const R=n.createBuffer(),L=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,R),R}function u(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const A=r[M.id],R=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let C=0,N=R.length;C<N;C++){const O=Array.isArray(R[C])?R[C]:[R[C]];for(let w=0,E=O.length;w<E;w++){const U=O[w];if(m(U,C,w,L)===!0){const B=U.__offset,X=Array.isArray(U.value)?U.value:[U.value];let K=0;for(let Z=0;Z<X.length;Z++){const Q=X[Z],se=_(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,B+K,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,K),K+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,A,R,L){const C=M.value,N=A+"_"+R;if(L[N]===void 0)return typeof C=="number"||typeof C=="boolean"?L[N]=C:L[N]=C.clone(),!0;{const O=L[N];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return L[N]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function v(M){const A=M.uniforms;let R=0;const L=16;for(let N=0,O=A.length;N<O;N++){const w=Array.isArray(A[N])?A[N]:[A[N]];for(let E=0,U=w.length;E<U;E++){const B=w[E],X=Array.isArray(B.value)?B.value:[B.value];for(let K=0,Z=X.length;K<Z;K++){const Q=X[K],se=_(Q),J=R%L,de=J%se.boundary,he=J+de;R+=de,he!==0&&L-he<se.storage&&(R+=L-he),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=R,R+=se.storage}}}const C=R%L;return C>0&&(R+=L-C),M.__size=R,M.__cache={},this}function _(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ke("WebGLRenderer: Unsupported uniform value type.",M),A}function g(M){const A=M.target;A.removeEventListener("dispose",g);const R=s.indexOf(A.__bindingPointIndex);s.splice(R,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function f(){for(const M in r)n.deleteBuffer(r[M]);s=[],r={},a={}}return{bind:l,update:c,dispose:f}}const _2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Zn=null;function b2(){return Zn===null&&(Zn=new wf(_2,32,32,Lo,Er),Zn.minFilter=wn,Zn.magFilter=wn,Zn.wrapS=ni,Zn.wrapT=ni,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}class y2{constructor(e={}){const{canvas:t=Kd(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const v=new Set([No,Io,Po]),_=new Set([ci,$i,Wr,qr,Ro,Do]),g=new Uint32Array(4),f=new Int32Array(4);let M=null,A=null;const R=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1;this._outputColorSpace=yn;let O=0,w=0,E=null,U=-1,B=null;const X=new Ft,K=new Ft;let Z=null;const Q=new pt(0);let se=0,J=t.width,de=t.height,he=1,De=null,We=null;const st=new Ft(0,0,J,de),ft=new Ft(0,0,J,de);let ot=!1;const ee=new Ou;let ie=!1,Se=!1;const qe=new Nt,Pe=new q,it=new Ft,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function xt(){return E===null?he:1}let F=i;function nt(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),F===null){const H="webgl2";if(F=nt(H,T),F===null)throw nt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let Qe,dt,Ee,Et,Ue,Ze,D,y,W,te,ae,j,Ie,_e,ze,Le,oe,me,Ve,Be,Te,Ye,k,be;function xe(){Qe=new R1(F),Qe.init(),Ye=new h2(F,Qe),dt=new b1(F,Qe,e,Ye),Ee=new c2(F,Qe),dt.reversedDepthBuffer&&p&&Ee.buffers.depth.setReversed(!0),Et=new L1(F),Ue=new Z3,Ze=new u2(F,Qe,Ee,Ue,dt,Ye,Et),D=new S1(C),y=new C1(C),W=new Ff(F),k=new v1(F,W),te=new D1(F,W,Et,k),ae=new N1(F,te,W,Et),Ve=new I1(F,dt,Ze),Le=new y1(Ue),j=new K3(C,D,y,Qe,dt,k,Le),Ie=new g2(C,Ue),_e=new J3,ze=new r2(Qe),me=new g1(C,D,y,Ee,ae,m,l),oe=new o2(C,ae,dt),be=new v2(F,Et,dt,Ee),Be=new _1(F,Qe,Et),Te=new P1(F,Qe,Et),Et.programs=j.programs,C.capabilities=dt,C.extensions=Qe,C.properties=Ue,C.renderLists=_e,C.shadowMap=oe,C.state=Ee,C.info=Et}xe();const ge=new m2(C,F);this.xr=ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Qe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Qe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(J,de,!1))},this.getSize=function(T){return T.set(J,de)},this.setSize=function(T,H,Y=!0){if(ge.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,de=H,t.width=Math.floor(T*he),t.height=Math.floor(H*he),Y===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(J*he,de*he).floor()},this.setDrawingBufferSize=function(T,H,Y){J=T,de=H,he=Y,t.width=Math.floor(T*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(X)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,H,Y,$){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,H,Y,$),Ee.viewport(X.copy(st).multiplyScalar(he).round())},this.getScissor=function(T){return T.copy(ft)},this.setScissor=function(T,H,Y,$){T.isVector4?ft.set(T.x,T.y,T.z,T.w):ft.set(T,H,Y,$),Ee.scissor(K.copy(ft).multiplyScalar(he).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){Ee.setScissorTest(ot=T)},this.setOpaqueSort=function(T){De=T},this.setTransparentSort=function(T){We=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,Y=!0){let $=0;if(T){let V=!1;if(E!==null){const fe=E.texture.format;V=v.has(fe)}if(V){const fe=E.texture.type,Me=_.has(fe),Re=me.getClearColor(),Ae=me.getClearAlpha(),He=Re.r,Xe=Re.g,Ne=Re.b;Me?(g[0]=He,g[1]=Xe,g[2]=Ne,g[3]=Ae,F.clearBufferuiv(F.COLOR,0,g)):(f[0]=He,f[1]=Xe,f[2]=Ne,f[3]=Ae,F.clearBufferiv(F.COLOR,0,f))}else $|=F.COLOR_BUFFER_BIT}H&&($|=F.DEPTH_BUFFER_BIT),Y&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),me.dispose(),_e.dispose(),ze.dispose(),Ue.dispose(),D.dispose(),y.dispose(),ae.dispose(),k.dispose(),be.dispose(),j.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",el),ge.removeEventListener("sessionend",tl),Ii.stop()};function ce(T){T.preventDefault(),Cl("WebGLRenderer: Context Lost."),N=!0}function ne(){Cl("WebGLRenderer: Context Restored."),N=!1;const T=Et.autoReset,H=oe.enabled,Y=oe.autoUpdate,$=oe.needsUpdate,V=oe.type;xe(),Et.autoReset=T,oe.enabled=H,oe.autoUpdate=Y,oe.needsUpdate=$,oe.type=V}function Ce(T){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $e(T){const H=T.target;H.removeEventListener("dispose",$e),wt(H)}function wt(T){gt(T),Ue.remove(T)}function gt(T){const H=Ue.get(T).programs;H!==void 0&&(H.forEach(function(Y){j.releaseProgram(Y)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Y,$,V,fe){H===null&&(H=Ht);const Me=V.isMesh&&V.matrixWorld.determinant()<0,Re=Hh(T,H,Y,$,V);Ee.setMaterial($,Me);let Ae=Y.index,He=1;if($.wireframe===!0){if(Ae=te.getWireframeAttribute(Y),Ae===void 0)return;He=2}const Xe=Y.drawRange,Ne=Y.attributes.position;let rt=Xe.start*He,vt=(Xe.start+Xe.count)*He;fe!==null&&(rt=Math.max(rt,fe.start*He),vt=Math.min(vt,(fe.start+fe.count)*He)),Ae!==null?(rt=Math.max(rt,0),vt=Math.min(vt,Ae.count)):Ne!=null&&(rt=Math.max(rt,0),vt=Math.min(vt,Ne.count));const Pt=vt-rt;if(Pt<0||Pt===1/0)return;k.setup(V,$,Re,Y,Ae);let Lt,bt=Be;if(Ae!==null&&(Lt=W.get(Ae),bt=Te,bt.setIndex(Lt)),V.isMesh)$.wireframe===!0?(Ee.setLineWidth($.wireframeLinewidth*xt()),bt.setMode(F.LINES)):bt.setMode(F.TRIANGLES);else if(V.isLine){let Oe=$.linewidth;Oe===void 0&&(Oe=1),Ee.setLineWidth(Oe*xt()),V.isLineSegments?bt.setMode(F.LINES):V.isLineLoop?bt.setMode(F.LINE_LOOP):bt.setMode(F.LINE_STRIP)}else V.isPoints?bt.setMode(F.POINTS):V.isSprite&&bt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)$r("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))bt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Oe=V._multiDrawStarts,At=V._multiDrawCounts,ct=V._multiDrawCount,hn=Ae?W.get(Ae).bytesPerElement:1,Ji=Ue.get($).currentProgram.getUniforms();for(let dn=0;dn<ct;dn++)Ji.setValue(F,"_gl_DrawID",dn),bt.render(Oe[dn]/hn,At[dn])}else if(V.isInstancedMesh)bt.renderInstances(rt,Pt,V.count);else if(Y.isInstancedBufferGeometry){const Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,At=Math.min(Y.instanceCount,Oe);bt.renderInstances(rt,Pt,At)}else bt.render(rt,Pt)};function Fn(T,H,Y){T.transparent===!0&&T.side===ei&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,ra(T,H,Y),T.side=Ci,T.needsUpdate=!0,ra(T,H,Y),T.side=ei):ra(T,H,Y)}this.compile=function(T,H,Y=null){Y===null&&(Y=T),A=ze.get(Y),A.init(H),L.push(A),Y.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),T!==Y&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const $=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const Re=fe[Me];Fn(Re,Y,V),$.add(Re)}else Fn(fe,Y,V),$.add(fe)}),A=L.pop(),$},this.compileAsync=function(T,H,Y=null){const $=this.compile(T,H,Y);return new Promise(V=>{function fe(){if($.forEach(function(Me){Ue.get(Me).currentProgram.isReady()&&$.delete(Me)}),$.size===0){V(T);return}setTimeout(fe,10)}Qe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Cn=null;function Bh(T){Cn&&Cn(T)}function el(){Ii.stop()}function tl(){Ii.start()}const Ii=new Gu;Ii.setAnimationLoop(Bh),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(T){Cn=T,ge.setAnimationLoop(T),T===null?Ii.stop():Ii.start()},ge.addEventListener("sessionstart",el),ge.addEventListener("sessionend",tl),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(H),H=ge.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,H,E),A=ze.get(T,L.length),A.init(H),L.push(A),qe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ee.setFromProjectionMatrix(qe,On,H.reversedDepth),Se=this.localClippingEnabled,ie=Le.init(this.clippingPlanes,Se),M=_e.get(T,R.length),M.init(),R.push(M),ge.enabled===!0&&ge.isPresenting===!0){const fe=C.xr.getDepthSensingMesh();fe!==null&&Ts(fe,H,-1/0,C.sortObjects)}Ts(T,H,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(De,We),tt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,tt&&me.addToRenderList(M,T),this.info.render.frame++,ie===!0&&Le.beginShadows();const Y=A.state.shadowsArray;oe.render(Y,T,H),ie===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=M.opaque,V=M.transmissive;if(A.setupLights(),H.isArrayCamera){const fe=H.cameras;if(V.length>0)for(let Me=0,Re=fe.length;Me<Re;Me++){const Ae=fe[Me];il($,V,T,Ae)}tt&&me.render(T);for(let Me=0,Re=fe.length;Me<Re;Me++){const Ae=fe[Me];nl(M,T,Ae,Ae.viewport)}}else V.length>0&&il($,V,T,H),tt&&me.render(T),nl(M,T,H);E!==null&&w===0&&(Ze.updateMultisampleRenderTarget(E),Ze.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(C,T,H),k.resetDefaultState(),U=-1,B=null,L.pop(),L.length>0?(A=L[L.length-1],ie===!0&&Le.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function Ts(T,H,Y,$){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){$&&it.setFromMatrixPosition(T.matrixWorld).applyMatrix4(qe);const Me=ae.update(T),Re=T.material;Re.visible&&M.push(T,Me,Re,Y,it.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const Me=ae.update(T),Re=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),it.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),it.copy(Me.boundingSphere.center)),it.applyMatrix4(T.matrixWorld).applyMatrix4(qe)),Array.isArray(Re)){const Ae=Me.groups;for(let He=0,Xe=Ae.length;He<Xe;He++){const Ne=Ae[He],rt=Re[Ne.materialIndex];rt&&rt.visible&&M.push(T,Me,rt,Y,it.z,Ne)}}else Re.visible&&M.push(T,Me,Re,Y,it.z,null)}}const fe=T.children;for(let Me=0,Re=fe.length;Me<Re;Me++)Ts(fe[Me],H,Y,$)}function nl(T,H,Y,$){const{opaque:V,transmissive:fe,transparent:Me}=T;A.setupLightsView(Y),ie===!0&&Le.setGlobalState(C.clippingPlanes,Y),$&&Ee.viewport(X.copy($)),V.length>0&&ia(V,H,Y),fe.length>0&&ia(fe,H,Y),Me.length>0&&ia(Me,H,Y),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function il(T,H,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[$.id]===void 0&&(A.state.transmissionRenderTarget[$.id]=new Ki(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Er:ci,minFilter:Yi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const fe=A.state.transmissionRenderTarget[$.id],Me=$.viewport||X;fe.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);const Re=C.getRenderTarget(),Ae=C.getActiveCubeFace(),He=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(Q),se=C.getClearAlpha(),se<1&&C.setClearColor(16777215,.5),C.clear(),tt&&me.render(Y);const Xe=C.toneMapping;C.toneMapping=Ai;const Ne=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),ie===!0&&Le.setGlobalState(C.clippingPlanes,$),ia(T,Y,$),Ze.updateMultisampleRenderTarget(fe),Ze.updateRenderTargetMipmap(fe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let vt=0,Pt=H.length;vt<Pt;vt++){const Lt=H[vt],{object:bt,geometry:Oe,material:At,group:ct}=Lt;if(At.side===ei&&bt.layers.test($.layers)){const hn=At.side;At.side=cn,At.needsUpdate=!0,rl(bt,Y,$,Oe,At,ct),At.side=hn,At.needsUpdate=!0,rt=!0}}rt===!0&&(Ze.updateMultisampleRenderTarget(fe),Ze.updateRenderTargetMipmap(fe))}C.setRenderTarget(Re,Ae,He),C.setClearColor(Q,se),Ne!==void 0&&($.viewport=Ne),C.toneMapping=Xe}function ia(T,H,Y){const $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,fe=T.length;V<fe;V++){const Me=T[V],{object:Re,geometry:Ae,group:He}=Me;let Xe=Me.material;Xe.allowOverride===!0&&$!==null&&(Xe=$),Re.layers.test(Y.layers)&&rl(Re,H,Y,Ae,Xe,He)}}function rl(T,H,Y,$,V,fe){T.onBeforeRender(C,H,Y,$,V,fe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(C,H,Y,$,T,fe),V.transparent===!0&&V.side===ei&&V.forceSinglePass===!1?(V.side=cn,V.needsUpdate=!0,C.renderBufferDirect(Y,H,$,V,T,fe),V.side=Ci,V.needsUpdate=!0,C.renderBufferDirect(Y,H,$,V,T,fe),V.side=ei):C.renderBufferDirect(Y,H,$,V,T,fe),T.onAfterRender(C,H,Y,$,V,fe)}function ra(T,H,Y){H.isScene!==!0&&(H=Ht);const $=Ue.get(T),V=A.state.lights,fe=A.state.shadowsArray,Me=V.state.version,Re=j.getParameters(T,V.state,fe,H,Y),Ae=j.getProgramCacheKey(Re);let He=$.programs;$.environment=T.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(T.isMeshStandardMaterial?y:D).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,He===void 0&&(T.addEventListener("dispose",$e),He=new Map,$.programs=He);let Xe=He.get(Ae);if(Xe!==void 0){if($.currentProgram===Xe&&$.lightsStateVersion===Me)return sl(T,Re),Xe}else Re.uniforms=j.getUniforms(T),T.onBeforeCompile(Re,C),Xe=j.acquireProgram(Re,Ae),He.set(Ae,Xe),$.uniforms=Re.uniforms;const Ne=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=Le.uniform),sl(T,Re),$.needsLights=Gh(T),$.lightsStateVersion=Me,$.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.directionalShadowMap.value=V.state.directionalShadowMap,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotShadowMap.value=V.state.spotShadowMap,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMap.value=V.state.pointShadowMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Xe,$.uniformsList=null,Xe}function al(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=$a.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function sl(T,H){const Y=Ue.get(T);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Hh(T,H,Y,$,V){H.isScene!==!0&&(H=Ht),Ze.resetTextureUnits();const fe=H.fog,Me=$.isMeshStandardMaterial?H.environment:null,Re=E===null?C.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Mr,Ae=($.isMeshStandardMaterial?y:D).get($.envMap||Me),He=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,vt=!!Y.morphAttributes.color;let Pt=Ai;$.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Pt=C.toneMapping);const Lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,bt=Lt!==void 0?Lt.length:0,Oe=Ue.get($),At=A.state.lights;if(ie===!0&&(Se===!0||T!==B)){const Kt=T===B&&$.id===U;Le.setState($,T,Kt)}let ct=!1;$.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==At.state.version||Oe.outputColorSpace!==Re||V.isBatchedMesh&&Oe.batching===!1||!V.isBatchedMesh&&Oe.batching===!0||V.isBatchedMesh&&Oe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Oe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Oe.instancing===!1||!V.isInstancedMesh&&Oe.instancing===!0||V.isSkinnedMesh&&Oe.skinning===!1||!V.isSkinnedMesh&&Oe.skinning===!0||V.isInstancedMesh&&Oe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Oe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Oe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Oe.instancingMorph===!1&&V.morphTexture!==null||Oe.envMap!==Ae||$.fog===!0&&Oe.fog!==fe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Le.numPlanes||Oe.numIntersection!==Le.numIntersection)||Oe.vertexAlphas!==He||Oe.vertexTangents!==Xe||Oe.morphTargets!==Ne||Oe.morphNormals!==rt||Oe.morphColors!==vt||Oe.toneMapping!==Pt||Oe.morphTargetsCount!==bt)&&(ct=!0):(ct=!0,Oe.__version=$.version);let hn=Oe.currentProgram;ct===!0&&(hn=ra($,H,V));let Ji=!1,dn=!1,Lr=!1;const Ct=hn.getUniforms(),nn=Oe.uniforms;if(Ee.useProgram(hn.program)&&(Ji=!0,dn=!0,Lr=!0),$.id!==U&&(U=$.id,dn=!0),Ji||B!==T){Ee.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ct.setValue(F,"projectionMatrix",T.projectionMatrix),Ct.setValue(F,"viewMatrix",T.matrixWorldInverse);const rn=Ct.map.cameraPosition;rn!==void 0&&rn.setValue(F,Pe.setFromMatrixPosition(T.matrixWorld)),dt.logarithmicDepthBuffer&&Ct.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ct.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,dn=!0,Lr=!0)}if(V.isSkinnedMesh){Ct.setOptional(F,V,"bindMatrix"),Ct.setOptional(F,V,"bindMatrixInverse");const Kt=V.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Ct.setValue(F,"boneTexture",Kt.boneTexture,Ze))}V.isBatchedMesh&&(Ct.setOptional(F,V,"batchingTexture"),Ct.setValue(F,"batchingTexture",V._matricesTexture,Ze),Ct.setOptional(F,V,"batchingIdTexture"),Ct.setValue(F,"batchingIdTexture",V._indirectTexture,Ze),Ct.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&Ct.setValue(F,"batchingColorTexture",V._colorsTexture,Ze));const _n=Y.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Ve.update(V,Y,hn),(dn||Oe.receiveShadow!==V.receiveShadow)&&(Oe.receiveShadow=V.receiveShadow,Ct.setValue(F,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(nn.envMap.value=Ae,nn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=b2()),dn&&(Ct.setValue(F,"toneMappingExposure",C.toneMappingExposure),Oe.needsLights&&Vh(nn,Lr),fe&&$.fog===!0&&Ie.refreshFogUniforms(nn,fe),Ie.refreshMaterialUniforms(nn,$,he,de,A.state.transmissionRenderTarget[T.id]),$a.upload(F,al(Oe),nn,Ze)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&($a.upload(F,al(Oe),nn,Ze),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ct.setValue(F,"center",V.center),Ct.setValue(F,"modelViewMatrix",V.modelViewMatrix),Ct.setValue(F,"normalMatrix",V.normalMatrix),Ct.setValue(F,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Kt=$.uniformsGroups;for(let rn=0,Es=Kt.length;rn<Es;rn++){const Ni=Kt[rn];be.update(Ni,hn),be.bind(Ni,hn)}}return hn}function Vh(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Gh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,H,Y){const $=Ue.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ue.get(T.texture).__webglTexture=H,Ue.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const Y=Ue.get(T);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const Wh=F.createFramebuffer();this.setRenderTarget=function(T,H=0,Y=0){E=T,O=H,w=Y;let $=!0,V=null,fe=!1,Me=!1;if(T){const Ae=Ue.get(T);if(Ae.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Ae.__webglFramebuffer===void 0)Ze.setupRenderTarget(T);else if(Ae.__hasExternalTextures)Ze.rebindTextures(T,Ue.get(T.texture).__webglTexture,Ue.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ne=T.depthTexture;if(Ae.__boundDepthTexture!==Ne){if(Ne!==null&&Ue.has(Ne)&&(T.width!==Ne.image.width||T.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(T)}}const He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const Xe=Ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[H])?V=Xe[H][Y]:V=Xe[H],fe=!0):T.samples>0&&Ze.useMultisampledRTT(T)===!1?V=Ue.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?V=Xe[Y]:V=Xe,X.copy(T.viewport),K.copy(T.scissor),Z=T.scissorTest}else X.copy(st).multiplyScalar(he).floor(),K.copy(ft).multiplyScalar(he).floor(),Z=ot;if(Y!==0&&(V=Wh),Ee.bindFramebuffer(F.FRAMEBUFFER,V)&&$&&Ee.drawBuffers(T,V),Ee.viewport(X),Ee.scissor(K),Ee.setScissorTest(Z),fe){const Ae=Ue.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,Y)}else if(Me){const Ae=H;for(let He=0;He<T.textures.length;He++){const Xe=Ue.get(T.textures[He]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+He,Xe.__webglTexture,Y,Ae)}}else if(T!==null&&Y!==0){const Ae=Ue.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ae.__webglTexture,Y)}U=-1},this.readRenderTargetPixels=function(T,H,Y,$,V,fe,Me,Re=0){if(!(T&&T.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){Ee.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const He=T.textures[Re],Xe=He.format,Ne=He.type;if(!dt.textureFormatReadable(Xe)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ne)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-$&&Y>=0&&Y<=T.height-V&&(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Re),F.readPixels(H,Y,$,V,Ye.convert(Xe),Ye.convert(Ne),fe))}finally{const He=E!==null?Ue.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,H,Y,$,V,fe,Me,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(H>=0&&H<=T.width-$&&Y>=0&&Y<=T.height-V){Ee.bindFramebuffer(F.FRAMEBUFFER,Ae);const He=T.textures[Re],Xe=He.format,Ne=He.type;if(!dt.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,rt),F.bufferData(F.PIXEL_PACK_BUFFER,fe.byteLength,F.STREAM_READ),T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Re),F.readPixels(H,Y,$,V,Ye.convert(Xe),Ye.convert(Ne),0);const vt=E!==null?Ue.get(E).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,vt);const Pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zd(F,Pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,rt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,fe),F.deleteBuffer(rt),F.deleteSync(Pt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,Y=0){const $=Math.pow(2,-Y),V=Math.floor(T.image.width*$),fe=Math.floor(T.image.height*$),Me=H!==null?H.x:0,Re=H!==null?H.y:0;Ze.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Me,Re,V,fe),Ee.unbindTexture()};const qh=F.createFramebuffer(),Xh=F.createFramebuffer();this.copyTextureToTexture=function(T,H,Y=null,$=null,V=0,fe=null){fe===null&&(V!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=V,V=0):fe=0);let Me,Re,Ae,He,Xe,Ne,rt,vt,Pt;const Lt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(Y!==null)Me=Y.max.x-Y.min.x,Re=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,He=Y.min.x,Xe=Y.min.y,Ne=Y.isBox3?Y.min.z:0;else{const _n=Math.pow(2,-V);Me=Math.floor(Lt.width*_n),Re=Math.floor(Lt.height*_n),T.isDataArrayTexture?Ae=Lt.depth:T.isData3DTexture?Ae=Math.floor(Lt.depth*_n):Ae=1,He=0,Xe=0,Ne=0}$!==null?(rt=$.x,vt=$.y,Pt=$.z):(rt=0,vt=0,Pt=0);const bt=Ye.convert(H.format),Oe=Ye.convert(H.type);let At;H.isData3DTexture?(Ze.setTexture3D(H,0),At=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ze.setTexture2DArray(H,0),At=F.TEXTURE_2D_ARRAY):(Ze.setTexture2D(H,0),At=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const ct=F.getParameter(F.UNPACK_ROW_LENGTH),hn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ji=F.getParameter(F.UNPACK_SKIP_PIXELS),dn=F.getParameter(F.UNPACK_SKIP_ROWS),Lr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Lt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Lt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,He),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ne);const Ct=T.isDataArrayTexture||T.isData3DTexture,nn=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const _n=Ue.get(T),Kt=Ue.get(H),rn=Ue.get(_n.__renderTarget),Es=Ue.get(Kt.__renderTarget);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,Es.__webglFramebuffer);for(let Ni=0;Ni<Ae;Ni++)Ct&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.get(T).__webglTexture,V,Ne+Ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.get(H).__webglTexture,fe,Pt+Ni)),F.blitFramebuffer(He,Xe,Me,Re,rt,vt,Me,Re,F.DEPTH_BUFFER_BIT,F.NEAREST);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||Ue.has(T)){const _n=Ue.get(T),Kt=Ue.get(H);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,qh),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,Xh);for(let rn=0;rn<Ae;rn++)Ct?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_n.__webglTexture,V,Ne+rn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_n.__webglTexture,V),nn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.__webglTexture,fe,Pt+rn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Kt.__webglTexture,fe),V!==0?F.blitFramebuffer(He,Xe,Me,Re,rt,vt,Me,Re,F.COLOR_BUFFER_BIT,F.NEAREST):nn?F.copyTexSubImage3D(At,fe,rt,vt,Pt+rn,He,Xe,Me,Re):F.copyTexSubImage2D(At,fe,rt,vt,He,Xe,Me,Re);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else nn?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(At,fe,rt,vt,Pt,Me,Re,Ae,bt,Oe,Lt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(At,fe,rt,vt,Pt,Me,Re,Ae,bt,Lt.data):F.texSubImage3D(At,fe,rt,vt,Pt,Me,Re,Ae,bt,Oe,Lt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,fe,rt,vt,Me,Re,bt,Oe,Lt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,fe,rt,vt,Lt.width,Lt.height,bt,Lt.data):F.texSubImage2D(F.TEXTURE_2D,fe,rt,vt,Me,Re,bt,Oe,Lt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ct),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,hn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ji),F.pixelStorei(F.UNPACK_SKIP_ROWS,dn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Lr),fe===0&&H.generateMipmaps&&F.generateMipmap(At),Ee.unbindTexture()},this.initRenderTarget=function(T){Ue.get(T).__webglFramebuffer===void 0&&Ze.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ze.setTextureCube(T,0):T.isData3DTexture?Ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ze.setTexture2DArray(T,0):Ze.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){O=0,w=0,E=null,Ee.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}class S2 extends en{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new mt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const fr=new q,_c=new Nt,bc=new Nt,yc=new q,Sc=new q;class M2{constructor(e={}){const t=this;let i,r,a,s;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:r}},this.render=function(v,_){v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),_c.copy(_.matrixWorldInverse),bc.multiplyMatrices(_.projectionMatrix,_c),h(v,v,_),this.sortObjects&&m(v)},this.setSize=function(v,_){i=v,r=_,a=i/2,s=r/2,l.style.width=v+"px",l.style.height=_+"px"};function c(v){v.isCSS2DObject&&(v.element.style.display="none");for(let _=0,g=v.children.length;_<g;_++)c(v.children[_])}function h(v,_,g){if(v.visible===!1){c(v);return}if(v.isCSS2DObject){fr.setFromMatrixPosition(v.matrixWorld),fr.applyMatrix4(bc);const f=fr.z>=-1&&fr.z<=1&&v.layers.test(g.layers)===!0,M=v.element;M.style.display=f===!0?"":"none",f===!0&&(v.onBeforeRender(t,_,g),M.style.transform="translate("+-100*v.center.x+"%,"+-100*v.center.y+"%)translate("+(fr.x*a+a)+"px,"+(-fr.y*s+s)+"px)",M.parentNode!==l&&l.appendChild(M),v.onAfterRender(t,_,g));const A={distanceToCameraSquared:u(g,v)};o.objects.set(v,A)}for(let f=0,M=v.children.length;f<M;f++)h(v.children[f],_,g)}function u(v,_){return yc.setFromMatrixPosition(v.matrixWorld),Sc.setFromMatrixPosition(_.matrixWorld),yc.distanceToSquared(Sc)}function p(v){const _=[];return v.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function m(v){const _=p(v).sort(function(f,M){if(f.renderOrder!==M.renderOrder)return M.renderOrder-f.renderOrder;const A=o.objects.get(f).distanceToCameraSquared,R=o.objects.get(M).distanceToCameraSquared;return A-R}),g=_.length;for(let f=0,M=_.length;f<M;f++)_[f].element.style.zIndex=g-f}}}class on{constructor(e,t,i){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=i}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new on(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class gn{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(e,t){return new gn(t,on.range(this,e))}}class ue{constructor(e,t){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var i="KaTeX parse error: "+e,r,a,s=t&&t.loc;if(s&&s.start<=s.end){var o=s.lexer.input;r=s.start,a=s.end,r===o.length?i+=" at end of input: ":i+=" at position "+(r+1)+": ";var l=o.slice(r,a).replace(/[^]/g,"$&̲"),c;r>15?c="…"+o.slice(r-15,r):c=o.slice(0,r);var h;a+15<o.length?h=o.slice(a,a+15)+"…":h=o.slice(a),i+=c+l+h}var u=new Error(i);return u.name="ParseError",u.__proto__=ue.prototype,u.position=r,r!=null&&a!=null&&(u.length=a-r),u.rawMessage=e,u}}ue.prototype.__proto__=Error.prototype;var w2=function(e,t){return e===void 0?t:e},T2=/([A-Z])/g,E2=function(e){return e.replace(T2,"-$1").toLowerCase()},A2={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},C2=/[&><"']/g;function R2(n){return String(n).replace(C2,e=>A2[e])}var $u=function n(e){return e.type==="ordgroup"||e.type==="color"?e.body.length===1?n(e.body[0]):e:e.type==="font"?n(e.body):e},D2=function(e){var t=$u(e);return t.type==="mathord"||t.type==="textord"||t.type==="atom"},P2=function(e){if(!e)throw new Error("Expected non-null, but got "+String(e));return e},L2=function(e){var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},ht={deflt:w2,escape:R2,hyphenate:E2,getBaseElem:$u,isCharacterBox:D2,protocolFromUrl:L2},a0={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:n=>"#"+n},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(n,e)=>(e.push(n),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:n=>Math.max(0,n),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:n=>Math.max(0,n),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:n=>Math.max(0,n),cli:"-e, --max-expand <n>",cliProcessor:n=>n==="Infinity"?1/0:parseInt(n)},globalGroup:{type:"boolean",cli:!1}};function I2(n){if(n.default)return n.default;var e=n.type,t=Array.isArray(e)?e[0]:e;if(typeof t!="string")return t.enum[0];switch(t){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class N2{constructor(e){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var t in a0)if(a0.hasOwnProperty(t)){var i=a0[t];this[t]=e[t]!==void 0?i.processor?i.processor(e[t]):e[t]:I2(i)}}reportNonstrict(e,t,i){var r=this.strict;if(typeof r=="function"&&(r=r(e,t,i)),!(!r||r==="ignore")){if(r===!0||r==="error")throw new ue("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+e+"]"),i);r==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]"))}}useStrictBehavior(e,t,i){var r=this.strict;if(typeof r=="function")try{r=r(e,t,i)}catch{r="error"}return!r||r==="ignore"?!1:r===!0||r==="error"?!0:r==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]")),!1)}isTrusted(e){if(e.url&&!e.protocol){var t=ht.protocolFromUrl(e.url);if(t==null)return!1;e.protocol=t}var i=typeof this.trust=="function"?this.trust(e):this.trust;return!!i}}class yi{constructor(e,t,i){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=i}sup(){return zn[U2[this.id]]}sub(){return zn[F2[this.id]]}fracNum(){return zn[k2[this.id]]}fracDen(){return zn[z2[this.id]]}cramp(){return zn[O2[this.id]]}text(){return zn[B2[this.id]]}isTight(){return this.size>=2}}var zo=0,ns=1,vr=2,oi=3,Kr=4,Tn=5,Tr=6,Jt=7,zn=[new yi(zo,0,!1),new yi(ns,0,!0),new yi(vr,1,!1),new yi(oi,1,!0),new yi(Kr,2,!1),new yi(Tn,2,!0),new yi(Tr,3,!1),new yi(Jt,3,!0)],U2=[Kr,Tn,Kr,Tn,Tr,Jt,Tr,Jt],F2=[Tn,Tn,Tn,Tn,Jt,Jt,Jt,Jt],k2=[vr,oi,Kr,Tn,Tr,Jt,Tr,Jt],z2=[oi,oi,Tn,Tn,Jt,Jt,Jt,Jt],O2=[ns,ns,oi,oi,Tn,Tn,Jt,Jt],B2=[zo,ns,vr,oi,vr,oi,vr,oi],ke={DISPLAY:zn[zo],TEXT:zn[vr],SCRIPT:zn[Kr],SCRIPTSCRIPT:zn[Tr]},xo=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function H2(n){for(var e=0;e<xo.length;e++)for(var t=xo[e],i=0;i<t.blocks.length;i++){var r=t.blocks[i];if(n>=r[0]&&n<=r[1])return t.name}return null}var Ka=[];xo.forEach(n=>n.blocks.forEach(e=>Ka.push(...e)));function Ku(n){for(var e=0;e<Ka.length;e+=2)if(n>=Ka[e]&&n<=Ka[e+1])return!0;return!1}var pr=80,V2=function(e,t){return"M95,"+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},G2=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},W2=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},q2=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},X2=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},Y2=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},$2=function(e,t,i){var r=i-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},K2=function(e,t,i){t=1e3*t;var r="";switch(e){case"sqrtMain":r=V2(t,pr);break;case"sqrtSize1":r=G2(t,pr);break;case"sqrtSize2":r=W2(t,pr);break;case"sqrtSize3":r=q2(t,pr);break;case"sqrtSize4":r=X2(t,pr);break;case"sqrtTall":r=$2(t,pr,i)}return r},Z2=function(e,t){switch(e){case"⎜":return"M291 0 H417 V"+t+" H291z M291 0 H417 V"+t+" H291z";case"∣":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z";case"∥":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z"+("M367 0 H410 V"+t+" H367z M367 0 H410 V"+t+" H367z");case"⎟":return"M457 0 H583 V"+t+" H457z M457 0 H583 V"+t+" H457z";case"⎢":return"M319 0 H403 V"+t+" H319z M319 0 H403 V"+t+" H319z";case"⎥":return"M263 0 H347 V"+t+" H263z M263 0 H347 V"+t+" H263z";case"⎪":return"M384 0 H504 V"+t+" H384z M384 0 H504 V"+t+" H384z";case"⏐":return"M312 0 H355 V"+t+" H312z M312 0 H355 V"+t+" H312z";case"‖":return"M257 0 H300 V"+t+" H257z M257 0 H300 V"+t+" H257z"+("M478 0 H521 V"+t+" H478z M478 0 H521 V"+t+" H478z");default:return""}},Mc={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},j2=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class ta{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){var e=t=>t.toText();return this.children.map(e).join("")}}var ri={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Pa={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},wc={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function Oo(n,e,t){if(!ri[e])throw new Error("Font metrics not found for font: "+e+".");var i=n.charCodeAt(0),r=ri[e][i];if(!r&&n[0]in wc&&(i=wc[n[0]].charCodeAt(0),r=ri[e][i]),!r&&t==="text"&&Ku(i)&&(r=ri[e][77]),r)return{depth:r[0],height:r[1],italic:r[2],skew:r[3],width:r[4]}}var s0={};function J2(n){var e;if(n>=5?e=0:n>=3?e=1:e=2,!s0[e]){var t=s0[e]={cssEmPerMu:Pa.quad[e]/18};for(var i in Pa)Pa.hasOwnProperty(i)&&(t[i]=Pa[i][e])}return s0[e]}var Q2=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Tc=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Ec=function(e,t){return t.size<2?e:Q2[e-1][t.size-1]};class Qn{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||Qn.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=Tc[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return new Qn(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:Ec(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:Tc[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=Ec(Qn.BASESIZE,e);return this.size===t&&this.textSize===Qn.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Qn.BASESIZE?["sizing","reset-size"+this.size,"size"+Qn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=J2(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Qn.BASESIZE=6;var go={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},ex={ex:!0,em:!0,mu:!0},Zu=function(e){return typeof e!="string"&&(e=e.unit),e in go||e in ex||e==="ex"},Dt=function(e,t){var i;if(e.unit in go)i=go[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")i=t.fontMetrics().cssEmPerMu;else{var r;if(t.style.isTight()?r=t.havingStyle(t.style.text()):r=t,e.unit==="ex")i=r.fontMetrics().xHeight;else if(e.unit==="em")i=r.fontMetrics().quad;else throw new ue("Invalid unit: '"+e.unit+"'");r!==t&&(i*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*i,t.maxSize)},pe=function(e){return+e.toFixed(4)+"em"},Ri=function(e){return e.filter(t=>t).join(" ")},ju=function(e,t,i){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=i||{},t){t.style.isTight()&&this.classes.push("mtight");var r=t.getColor();r&&(this.style.color=r)}},Ju=function(e){var t=document.createElement(e);t.className=Ri(this.classes);for(var i in this.style)this.style.hasOwnProperty(i)&&(t.style[i]=this.style[i]);for(var r in this.attributes)this.attributes.hasOwnProperty(r)&&t.setAttribute(r,this.attributes[r]);for(var a=0;a<this.children.length;a++)t.appendChild(this.children[a].toNode());return t},tx=/[\s"'>/=\x00-\x1f]/,Qu=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+ht.escape(Ri(this.classes))+'"');var i="";for(var r in this.style)this.style.hasOwnProperty(r)&&(i+=ht.hyphenate(r)+":"+this.style[r]+";");i&&(t+=' style="'+ht.escape(i)+'"');for(var a in this.attributes)if(this.attributes.hasOwnProperty(a)){if(tx.test(a))throw new ue("Invalid attribute name '"+a+"'");t+=" "+a+'="'+ht.escape(this.attributes[a])+'"'}t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+e+">",t};class gs{constructor(e,t,i,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,ju.call(this,e,i,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Ju.call(this,"span")}toMarkup(){return Qu.call(this,"span")}}class eh{constructor(e,t,i,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,ju.call(this,t,r),this.children=i||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Ju.call(this,"a")}toMarkup(){return Qu.call(this,"a")}}class nx{constructor(e,t,i){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=["mord"],this.style=i}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement("img");e.src=this.src,e.alt=this.alt,e.className="mord";for(var t in this.style)this.style.hasOwnProperty(t)&&(e.style[t]=this.style[t]);return e}toMarkup(){var e='<img src="'+ht.escape(this.src)+'"'+(' alt="'+ht.escape(this.alt)+'"'),t="";for(var i in this.style)this.style.hasOwnProperty(i)&&(t+=ht.hyphenate(i)+":"+this.style[i]+";");return t&&(e+=' style="'+ht.escape(t)+'"'),e+="'/>",e}}var ix={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Un{constructor(e,t,i,r,a,s,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=i||0,this.italic=r||0,this.skew=a||0,this.width=s||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var c=H2(this.text.charCodeAt(0));c&&this.classes.push(c+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=ix[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;this.italic>0&&(t=document.createElement("span"),t.style.marginRight=pe(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Ri(this.classes));for(var i in this.style)this.style.hasOwnProperty(i)&&(t=t||document.createElement("span"),t.style[i]=this.style[i]);return t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=ht.escape(Ri(this.classes)),t+='"');var i="";this.italic>0&&(i+="margin-right:"+this.italic+"em;");for(var r in this.style)this.style.hasOwnProperty(r)&&(i+=ht.hyphenate(r)+":"+this.style[r]+";");i&&(e=!0,t+=' style="'+ht.escape(i)+'"');var a=ht.escape(this.text);return e?(t+=">",t+=a,t+="</span>",t):a}}class Di{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var i in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,i)&&t.setAttribute(i,this.attributes[i]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="'+ht.escape(this.attributes[t])+'"');e+=">";for(var i=0;i<this.children.length;i++)e+=this.children[i].toMarkup();return e+="</svg>",e}}class Zi{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",Mc[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+ht.escape(this.alternate)+'"/>':'<path d="'+ht.escape(Mc[this.pathName])+'"/>'}}class Ac{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var i in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,i)&&t.setAttribute(i,this.attributes[i]);return t}toMarkup(){var e="<line";for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="'+ht.escape(this.attributes[t])+'"');return e+="/>",e}}function Cc(n){if(n instanceof Un)return n;throw new Error("Expected symbolNode but got "+String(n)+".")}function rx(n){if(n instanceof gs)return n;throw new Error("Expected span<HtmlDomNode> but got "+String(n)+".")}var ax={bin:1,close:1,inner:1,open:1,punct:1,rel:1},sx={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Mt={math:{},text:{}};function d(n,e,t,i,r,a){Mt[n][r]={font:e,group:t,replace:i},a&&i&&(Mt[n][i]=Mt[n][r])}var x="math",re="text",b="main",P="ams",Tt="accent-token",we="bin",tn="close",Dr="inner",Fe="mathord",Bt="op-token",vn="open",vs="punct",I="rel",pi="spacing",z="textord";d(x,b,I,"≡","\\equiv",!0);d(x,b,I,"≺","\\prec",!0);d(x,b,I,"≻","\\succ",!0);d(x,b,I,"∼","\\sim",!0);d(x,b,I,"⊥","\\perp");d(x,b,I,"⪯","\\preceq",!0);d(x,b,I,"⪰","\\succeq",!0);d(x,b,I,"≃","\\simeq",!0);d(x,b,I,"∣","\\mid",!0);d(x,b,I,"≪","\\ll",!0);d(x,b,I,"≫","\\gg",!0);d(x,b,I,"≍","\\asymp",!0);d(x,b,I,"∥","\\parallel");d(x,b,I,"⋈","\\bowtie",!0);d(x,b,I,"⌣","\\smile",!0);d(x,b,I,"⊑","\\sqsubseteq",!0);d(x,b,I,"⊒","\\sqsupseteq",!0);d(x,b,I,"≐","\\doteq",!0);d(x,b,I,"⌢","\\frown",!0);d(x,b,I,"∋","\\ni",!0);d(x,b,I,"∝","\\propto",!0);d(x,b,I,"⊢","\\vdash",!0);d(x,b,I,"⊣","\\dashv",!0);d(x,b,I,"∋","\\owns");d(x,b,vs,".","\\ldotp");d(x,b,vs,"⋅","\\cdotp");d(x,b,z,"#","\\#");d(re,b,z,"#","\\#");d(x,b,z,"&","\\&");d(re,b,z,"&","\\&");d(x,b,z,"ℵ","\\aleph",!0);d(x,b,z,"∀","\\forall",!0);d(x,b,z,"ℏ","\\hbar",!0);d(x,b,z,"∃","\\exists",!0);d(x,b,z,"∇","\\nabla",!0);d(x,b,z,"♭","\\flat",!0);d(x,b,z,"ℓ","\\ell",!0);d(x,b,z,"♮","\\natural",!0);d(x,b,z,"♣","\\clubsuit",!0);d(x,b,z,"℘","\\wp",!0);d(x,b,z,"♯","\\sharp",!0);d(x,b,z,"♢","\\diamondsuit",!0);d(x,b,z,"ℜ","\\Re",!0);d(x,b,z,"♡","\\heartsuit",!0);d(x,b,z,"ℑ","\\Im",!0);d(x,b,z,"♠","\\spadesuit",!0);d(x,b,z,"§","\\S",!0);d(re,b,z,"§","\\S");d(x,b,z,"¶","\\P",!0);d(re,b,z,"¶","\\P");d(x,b,z,"†","\\dag");d(re,b,z,"†","\\dag");d(re,b,z,"†","\\textdagger");d(x,b,z,"‡","\\ddag");d(re,b,z,"‡","\\ddag");d(re,b,z,"‡","\\textdaggerdbl");d(x,b,tn,"⎱","\\rmoustache",!0);d(x,b,vn,"⎰","\\lmoustache",!0);d(x,b,tn,"⟯","\\rgroup",!0);d(x,b,vn,"⟮","\\lgroup",!0);d(x,b,we,"∓","\\mp",!0);d(x,b,we,"⊖","\\ominus",!0);d(x,b,we,"⊎","\\uplus",!0);d(x,b,we,"⊓","\\sqcap",!0);d(x,b,we,"∗","\\ast");d(x,b,we,"⊔","\\sqcup",!0);d(x,b,we,"◯","\\bigcirc",!0);d(x,b,we,"∙","\\bullet",!0);d(x,b,we,"‡","\\ddagger");d(x,b,we,"≀","\\wr",!0);d(x,b,we,"⨿","\\amalg");d(x,b,we,"&","\\And");d(x,b,I,"⟵","\\longleftarrow",!0);d(x,b,I,"⇐","\\Leftarrow",!0);d(x,b,I,"⟸","\\Longleftarrow",!0);d(x,b,I,"⟶","\\longrightarrow",!0);d(x,b,I,"⇒","\\Rightarrow",!0);d(x,b,I,"⟹","\\Longrightarrow",!0);d(x,b,I,"↔","\\leftrightarrow",!0);d(x,b,I,"⟷","\\longleftrightarrow",!0);d(x,b,I,"⇔","\\Leftrightarrow",!0);d(x,b,I,"⟺","\\Longleftrightarrow",!0);d(x,b,I,"↦","\\mapsto",!0);d(x,b,I,"⟼","\\longmapsto",!0);d(x,b,I,"↗","\\nearrow",!0);d(x,b,I,"↩","\\hookleftarrow",!0);d(x,b,I,"↪","\\hookrightarrow",!0);d(x,b,I,"↘","\\searrow",!0);d(x,b,I,"↼","\\leftharpoonup",!0);d(x,b,I,"⇀","\\rightharpoonup",!0);d(x,b,I,"↙","\\swarrow",!0);d(x,b,I,"↽","\\leftharpoondown",!0);d(x,b,I,"⇁","\\rightharpoondown",!0);d(x,b,I,"↖","\\nwarrow",!0);d(x,b,I,"⇌","\\rightleftharpoons",!0);d(x,P,I,"≮","\\nless",!0);d(x,P,I,"","\\@nleqslant");d(x,P,I,"","\\@nleqq");d(x,P,I,"⪇","\\lneq",!0);d(x,P,I,"≨","\\lneqq",!0);d(x,P,I,"","\\@lvertneqq");d(x,P,I,"⋦","\\lnsim",!0);d(x,P,I,"⪉","\\lnapprox",!0);d(x,P,I,"⊀","\\nprec",!0);d(x,P,I,"⋠","\\npreceq",!0);d(x,P,I,"⋨","\\precnsim",!0);d(x,P,I,"⪹","\\precnapprox",!0);d(x,P,I,"≁","\\nsim",!0);d(x,P,I,"","\\@nshortmid");d(x,P,I,"∤","\\nmid",!0);d(x,P,I,"⊬","\\nvdash",!0);d(x,P,I,"⊭","\\nvDash",!0);d(x,P,I,"⋪","\\ntriangleleft");d(x,P,I,"⋬","\\ntrianglelefteq",!0);d(x,P,I,"⊊","\\subsetneq",!0);d(x,P,I,"","\\@varsubsetneq");d(x,P,I,"⫋","\\subsetneqq",!0);d(x,P,I,"","\\@varsubsetneqq");d(x,P,I,"≯","\\ngtr",!0);d(x,P,I,"","\\@ngeqslant");d(x,P,I,"","\\@ngeqq");d(x,P,I,"⪈","\\gneq",!0);d(x,P,I,"≩","\\gneqq",!0);d(x,P,I,"","\\@gvertneqq");d(x,P,I,"⋧","\\gnsim",!0);d(x,P,I,"⪊","\\gnapprox",!0);d(x,P,I,"⊁","\\nsucc",!0);d(x,P,I,"⋡","\\nsucceq",!0);d(x,P,I,"⋩","\\succnsim",!0);d(x,P,I,"⪺","\\succnapprox",!0);d(x,P,I,"≆","\\ncong",!0);d(x,P,I,"","\\@nshortparallel");d(x,P,I,"∦","\\nparallel",!0);d(x,P,I,"⊯","\\nVDash",!0);d(x,P,I,"⋫","\\ntriangleright");d(x,P,I,"⋭","\\ntrianglerighteq",!0);d(x,P,I,"","\\@nsupseteqq");d(x,P,I,"⊋","\\supsetneq",!0);d(x,P,I,"","\\@varsupsetneq");d(x,P,I,"⫌","\\supsetneqq",!0);d(x,P,I,"","\\@varsupsetneqq");d(x,P,I,"⊮","\\nVdash",!0);d(x,P,I,"⪵","\\precneqq",!0);d(x,P,I,"⪶","\\succneqq",!0);d(x,P,I,"","\\@nsubseteqq");d(x,P,we,"⊴","\\unlhd");d(x,P,we,"⊵","\\unrhd");d(x,P,I,"↚","\\nleftarrow",!0);d(x,P,I,"↛","\\nrightarrow",!0);d(x,P,I,"⇍","\\nLeftarrow",!0);d(x,P,I,"⇏","\\nRightarrow",!0);d(x,P,I,"↮","\\nleftrightarrow",!0);d(x,P,I,"⇎","\\nLeftrightarrow",!0);d(x,P,I,"△","\\vartriangle");d(x,P,z,"ℏ","\\hslash");d(x,P,z,"▽","\\triangledown");d(x,P,z,"◊","\\lozenge");d(x,P,z,"Ⓢ","\\circledS");d(x,P,z,"®","\\circledR");d(re,P,z,"®","\\circledR");d(x,P,z,"∡","\\measuredangle",!0);d(x,P,z,"∄","\\nexists");d(x,P,z,"℧","\\mho");d(x,P,z,"Ⅎ","\\Finv",!0);d(x,P,z,"⅁","\\Game",!0);d(x,P,z,"‵","\\backprime");d(x,P,z,"▲","\\blacktriangle");d(x,P,z,"▼","\\blacktriangledown");d(x,P,z,"■","\\blacksquare");d(x,P,z,"⧫","\\blacklozenge");d(x,P,z,"★","\\bigstar");d(x,P,z,"∢","\\sphericalangle",!0);d(x,P,z,"∁","\\complement",!0);d(x,P,z,"ð","\\eth",!0);d(re,b,z,"ð","ð");d(x,P,z,"╱","\\diagup");d(x,P,z,"╲","\\diagdown");d(x,P,z,"□","\\square");d(x,P,z,"□","\\Box");d(x,P,z,"◊","\\Diamond");d(x,P,z,"¥","\\yen",!0);d(re,P,z,"¥","\\yen",!0);d(x,P,z,"✓","\\checkmark",!0);d(re,P,z,"✓","\\checkmark");d(x,P,z,"ℶ","\\beth",!0);d(x,P,z,"ℸ","\\daleth",!0);d(x,P,z,"ℷ","\\gimel",!0);d(x,P,z,"ϝ","\\digamma",!0);d(x,P,z,"ϰ","\\varkappa");d(x,P,vn,"┌","\\@ulcorner",!0);d(x,P,tn,"┐","\\@urcorner",!0);d(x,P,vn,"└","\\@llcorner",!0);d(x,P,tn,"┘","\\@lrcorner",!0);d(x,P,I,"≦","\\leqq",!0);d(x,P,I,"⩽","\\leqslant",!0);d(x,P,I,"⪕","\\eqslantless",!0);d(x,P,I,"≲","\\lesssim",!0);d(x,P,I,"⪅","\\lessapprox",!0);d(x,P,I,"≊","\\approxeq",!0);d(x,P,we,"⋖","\\lessdot");d(x,P,I,"⋘","\\lll",!0);d(x,P,I,"≶","\\lessgtr",!0);d(x,P,I,"⋚","\\lesseqgtr",!0);d(x,P,I,"⪋","\\lesseqqgtr",!0);d(x,P,I,"≑","\\doteqdot");d(x,P,I,"≓","\\risingdotseq",!0);d(x,P,I,"≒","\\fallingdotseq",!0);d(x,P,I,"∽","\\backsim",!0);d(x,P,I,"⋍","\\backsimeq",!0);d(x,P,I,"⫅","\\subseteqq",!0);d(x,P,I,"⋐","\\Subset",!0);d(x,P,I,"⊏","\\sqsubset",!0);d(x,P,I,"≼","\\preccurlyeq",!0);d(x,P,I,"⋞","\\curlyeqprec",!0);d(x,P,I,"≾","\\precsim",!0);d(x,P,I,"⪷","\\precapprox",!0);d(x,P,I,"⊲","\\vartriangleleft");d(x,P,I,"⊴","\\trianglelefteq");d(x,P,I,"⊨","\\vDash",!0);d(x,P,I,"⊪","\\Vvdash",!0);d(x,P,I,"⌣","\\smallsmile");d(x,P,I,"⌢","\\smallfrown");d(x,P,I,"≏","\\bumpeq",!0);d(x,P,I,"≎","\\Bumpeq",!0);d(x,P,I,"≧","\\geqq",!0);d(x,P,I,"⩾","\\geqslant",!0);d(x,P,I,"⪖","\\eqslantgtr",!0);d(x,P,I,"≳","\\gtrsim",!0);d(x,P,I,"⪆","\\gtrapprox",!0);d(x,P,we,"⋗","\\gtrdot");d(x,P,I,"⋙","\\ggg",!0);d(x,P,I,"≷","\\gtrless",!0);d(x,P,I,"⋛","\\gtreqless",!0);d(x,P,I,"⪌","\\gtreqqless",!0);d(x,P,I,"≖","\\eqcirc",!0);d(x,P,I,"≗","\\circeq",!0);d(x,P,I,"≜","\\triangleq",!0);d(x,P,I,"∼","\\thicksim");d(x,P,I,"≈","\\thickapprox");d(x,P,I,"⫆","\\supseteqq",!0);d(x,P,I,"⋑","\\Supset",!0);d(x,P,I,"⊐","\\sqsupset",!0);d(x,P,I,"≽","\\succcurlyeq",!0);d(x,P,I,"⋟","\\curlyeqsucc",!0);d(x,P,I,"≿","\\succsim",!0);d(x,P,I,"⪸","\\succapprox",!0);d(x,P,I,"⊳","\\vartriangleright");d(x,P,I,"⊵","\\trianglerighteq");d(x,P,I,"⊩","\\Vdash",!0);d(x,P,I,"∣","\\shortmid");d(x,P,I,"∥","\\shortparallel");d(x,P,I,"≬","\\between",!0);d(x,P,I,"⋔","\\pitchfork",!0);d(x,P,I,"∝","\\varpropto");d(x,P,I,"◀","\\blacktriangleleft");d(x,P,I,"∴","\\therefore",!0);d(x,P,I,"∍","\\backepsilon");d(x,P,I,"▶","\\blacktriangleright");d(x,P,I,"∵","\\because",!0);d(x,P,I,"⋘","\\llless");d(x,P,I,"⋙","\\gggtr");d(x,P,we,"⊲","\\lhd");d(x,P,we,"⊳","\\rhd");d(x,P,I,"≂","\\eqsim",!0);d(x,b,I,"⋈","\\Join");d(x,P,I,"≑","\\Doteq",!0);d(x,P,we,"∔","\\dotplus",!0);d(x,P,we,"∖","\\smallsetminus");d(x,P,we,"⋒","\\Cap",!0);d(x,P,we,"⋓","\\Cup",!0);d(x,P,we,"⩞","\\doublebarwedge",!0);d(x,P,we,"⊟","\\boxminus",!0);d(x,P,we,"⊞","\\boxplus",!0);d(x,P,we,"⋇","\\divideontimes",!0);d(x,P,we,"⋉","\\ltimes",!0);d(x,P,we,"⋊","\\rtimes",!0);d(x,P,we,"⋋","\\leftthreetimes",!0);d(x,P,we,"⋌","\\rightthreetimes",!0);d(x,P,we,"⋏","\\curlywedge",!0);d(x,P,we,"⋎","\\curlyvee",!0);d(x,P,we,"⊝","\\circleddash",!0);d(x,P,we,"⊛","\\circledast",!0);d(x,P,we,"⋅","\\centerdot");d(x,P,we,"⊺","\\intercal",!0);d(x,P,we,"⋒","\\doublecap");d(x,P,we,"⋓","\\doublecup");d(x,P,we,"⊠","\\boxtimes",!0);d(x,P,I,"⇢","\\dashrightarrow",!0);d(x,P,I,"⇠","\\dashleftarrow",!0);d(x,P,I,"⇇","\\leftleftarrows",!0);d(x,P,I,"⇆","\\leftrightarrows",!0);d(x,P,I,"⇚","\\Lleftarrow",!0);d(x,P,I,"↞","\\twoheadleftarrow",!0);d(x,P,I,"↢","\\leftarrowtail",!0);d(x,P,I,"↫","\\looparrowleft",!0);d(x,P,I,"⇋","\\leftrightharpoons",!0);d(x,P,I,"↶","\\curvearrowleft",!0);d(x,P,I,"↺","\\circlearrowleft",!0);d(x,P,I,"↰","\\Lsh",!0);d(x,P,I,"⇈","\\upuparrows",!0);d(x,P,I,"↿","\\upharpoonleft",!0);d(x,P,I,"⇃","\\downharpoonleft",!0);d(x,b,I,"⊶","\\origof",!0);d(x,b,I,"⊷","\\imageof",!0);d(x,P,I,"⊸","\\multimap",!0);d(x,P,I,"↭","\\leftrightsquigarrow",!0);d(x,P,I,"⇉","\\rightrightarrows",!0);d(x,P,I,"⇄","\\rightleftarrows",!0);d(x,P,I,"↠","\\twoheadrightarrow",!0);d(x,P,I,"↣","\\rightarrowtail",!0);d(x,P,I,"↬","\\looparrowright",!0);d(x,P,I,"↷","\\curvearrowright",!0);d(x,P,I,"↻","\\circlearrowright",!0);d(x,P,I,"↱","\\Rsh",!0);d(x,P,I,"⇊","\\downdownarrows",!0);d(x,P,I,"↾","\\upharpoonright",!0);d(x,P,I,"⇂","\\downharpoonright",!0);d(x,P,I,"⇝","\\rightsquigarrow",!0);d(x,P,I,"⇝","\\leadsto");d(x,P,I,"⇛","\\Rrightarrow",!0);d(x,P,I,"↾","\\restriction");d(x,b,z,"‘","`");d(x,b,z,"$","\\$");d(re,b,z,"$","\\$");d(re,b,z,"$","\\textdollar");d(x,b,z,"%","\\%");d(re,b,z,"%","\\%");d(x,b,z,"_","\\_");d(re,b,z,"_","\\_");d(re,b,z,"_","\\textunderscore");d(x,b,z,"∠","\\angle",!0);d(x,b,z,"∞","\\infty",!0);d(x,b,z,"′","\\prime");d(x,b,z,"△","\\triangle");d(x,b,z,"Γ","\\Gamma",!0);d(x,b,z,"Δ","\\Delta",!0);d(x,b,z,"Θ","\\Theta",!0);d(x,b,z,"Λ","\\Lambda",!0);d(x,b,z,"Ξ","\\Xi",!0);d(x,b,z,"Π","\\Pi",!0);d(x,b,z,"Σ","\\Sigma",!0);d(x,b,z,"Υ","\\Upsilon",!0);d(x,b,z,"Φ","\\Phi",!0);d(x,b,z,"Ψ","\\Psi",!0);d(x,b,z,"Ω","\\Omega",!0);d(x,b,z,"A","Α");d(x,b,z,"B","Β");d(x,b,z,"E","Ε");d(x,b,z,"Z","Ζ");d(x,b,z,"H","Η");d(x,b,z,"I","Ι");d(x,b,z,"K","Κ");d(x,b,z,"M","Μ");d(x,b,z,"N","Ν");d(x,b,z,"O","Ο");d(x,b,z,"P","Ρ");d(x,b,z,"T","Τ");d(x,b,z,"X","Χ");d(x,b,z,"¬","\\neg",!0);d(x,b,z,"¬","\\lnot");d(x,b,z,"⊤","\\top");d(x,b,z,"⊥","\\bot");d(x,b,z,"∅","\\emptyset");d(x,P,z,"∅","\\varnothing");d(x,b,Fe,"α","\\alpha",!0);d(x,b,Fe,"β","\\beta",!0);d(x,b,Fe,"γ","\\gamma",!0);d(x,b,Fe,"δ","\\delta",!0);d(x,b,Fe,"ϵ","\\epsilon",!0);d(x,b,Fe,"ζ","\\zeta",!0);d(x,b,Fe,"η","\\eta",!0);d(x,b,Fe,"θ","\\theta",!0);d(x,b,Fe,"ι","\\iota",!0);d(x,b,Fe,"κ","\\kappa",!0);d(x,b,Fe,"λ","\\lambda",!0);d(x,b,Fe,"μ","\\mu",!0);d(x,b,Fe,"ν","\\nu",!0);d(x,b,Fe,"ξ","\\xi",!0);d(x,b,Fe,"ο","\\omicron",!0);d(x,b,Fe,"π","\\pi",!0);d(x,b,Fe,"ρ","\\rho",!0);d(x,b,Fe,"σ","\\sigma",!0);d(x,b,Fe,"τ","\\tau",!0);d(x,b,Fe,"υ","\\upsilon",!0);d(x,b,Fe,"ϕ","\\phi",!0);d(x,b,Fe,"χ","\\chi",!0);d(x,b,Fe,"ψ","\\psi",!0);d(x,b,Fe,"ω","\\omega",!0);d(x,b,Fe,"ε","\\varepsilon",!0);d(x,b,Fe,"ϑ","\\vartheta",!0);d(x,b,Fe,"ϖ","\\varpi",!0);d(x,b,Fe,"ϱ","\\varrho",!0);d(x,b,Fe,"ς","\\varsigma",!0);d(x,b,Fe,"φ","\\varphi",!0);d(x,b,we,"∗","*",!0);d(x,b,we,"+","+");d(x,b,we,"−","-",!0);d(x,b,we,"⋅","\\cdot",!0);d(x,b,we,"∘","\\circ",!0);d(x,b,we,"÷","\\div",!0);d(x,b,we,"±","\\pm",!0);d(x,b,we,"×","\\times",!0);d(x,b,we,"∩","\\cap",!0);d(x,b,we,"∪","\\cup",!0);d(x,b,we,"∖","\\setminus",!0);d(x,b,we,"∧","\\land");d(x,b,we,"∨","\\lor");d(x,b,we,"∧","\\wedge",!0);d(x,b,we,"∨","\\vee",!0);d(x,b,z,"√","\\surd");d(x,b,vn,"⟨","\\langle",!0);d(x,b,vn,"∣","\\lvert");d(x,b,vn,"∥","\\lVert");d(x,b,tn,"?","?");d(x,b,tn,"!","!");d(x,b,tn,"⟩","\\rangle",!0);d(x,b,tn,"∣","\\rvert");d(x,b,tn,"∥","\\rVert");d(x,b,I,"=","=");d(x,b,I,":",":");d(x,b,I,"≈","\\approx",!0);d(x,b,I,"≅","\\cong",!0);d(x,b,I,"≥","\\ge");d(x,b,I,"≥","\\geq",!0);d(x,b,I,"←","\\gets");d(x,b,I,">","\\gt",!0);d(x,b,I,"∈","\\in",!0);d(x,b,I,"","\\@not");d(x,b,I,"⊂","\\subset",!0);d(x,b,I,"⊃","\\supset",!0);d(x,b,I,"⊆","\\subseteq",!0);d(x,b,I,"⊇","\\supseteq",!0);d(x,P,I,"⊈","\\nsubseteq",!0);d(x,P,I,"⊉","\\nsupseteq",!0);d(x,b,I,"⊨","\\models");d(x,b,I,"←","\\leftarrow",!0);d(x,b,I,"≤","\\le");d(x,b,I,"≤","\\leq",!0);d(x,b,I,"<","\\lt",!0);d(x,b,I,"→","\\rightarrow",!0);d(x,b,I,"→","\\to");d(x,P,I,"≱","\\ngeq",!0);d(x,P,I,"≰","\\nleq",!0);d(x,b,pi," ","\\ ");d(x,b,pi," ","\\space");d(x,b,pi," ","\\nobreakspace");d(re,b,pi," ","\\ ");d(re,b,pi," "," ");d(re,b,pi," ","\\space");d(re,b,pi," ","\\nobreakspace");d(x,b,pi,null,"\\nobreak");d(x,b,pi,null,"\\allowbreak");d(x,b,vs,",",",");d(x,b,vs,";",";");d(x,P,we,"⊼","\\barwedge",!0);d(x,P,we,"⊻","\\veebar",!0);d(x,b,we,"⊙","\\odot",!0);d(x,b,we,"⊕","\\oplus",!0);d(x,b,we,"⊗","\\otimes",!0);d(x,b,z,"∂","\\partial",!0);d(x,b,we,"⊘","\\oslash",!0);d(x,P,we,"⊚","\\circledcirc",!0);d(x,P,we,"⊡","\\boxdot",!0);d(x,b,we,"△","\\bigtriangleup");d(x,b,we,"▽","\\bigtriangledown");d(x,b,we,"†","\\dagger");d(x,b,we,"⋄","\\diamond");d(x,b,we,"⋆","\\star");d(x,b,we,"◃","\\triangleleft");d(x,b,we,"▹","\\triangleright");d(x,b,vn,"{","\\{");d(re,b,z,"{","\\{");d(re,b,z,"{","\\textbraceleft");d(x,b,tn,"}","\\}");d(re,b,z,"}","\\}");d(re,b,z,"}","\\textbraceright");d(x,b,vn,"{","\\lbrace");d(x,b,tn,"}","\\rbrace");d(x,b,vn,"[","\\lbrack",!0);d(re,b,z,"[","\\lbrack",!0);d(x,b,tn,"]","\\rbrack",!0);d(re,b,z,"]","\\rbrack",!0);d(x,b,vn,"(","\\lparen",!0);d(x,b,tn,")","\\rparen",!0);d(re,b,z,"<","\\textless",!0);d(re,b,z,">","\\textgreater",!0);d(x,b,vn,"⌊","\\lfloor",!0);d(x,b,tn,"⌋","\\rfloor",!0);d(x,b,vn,"⌈","\\lceil",!0);d(x,b,tn,"⌉","\\rceil",!0);d(x,b,z,"\\","\\backslash");d(x,b,z,"∣","|");d(x,b,z,"∣","\\vert");d(re,b,z,"|","\\textbar",!0);d(x,b,z,"∥","\\|");d(x,b,z,"∥","\\Vert");d(re,b,z,"∥","\\textbardbl");d(re,b,z,"~","\\textasciitilde");d(re,b,z,"\\","\\textbackslash");d(re,b,z,"^","\\textasciicircum");d(x,b,I,"↑","\\uparrow",!0);d(x,b,I,"⇑","\\Uparrow",!0);d(x,b,I,"↓","\\downarrow",!0);d(x,b,I,"⇓","\\Downarrow",!0);d(x,b,I,"↕","\\updownarrow",!0);d(x,b,I,"⇕","\\Updownarrow",!0);d(x,b,Bt,"∐","\\coprod");d(x,b,Bt,"⋁","\\bigvee");d(x,b,Bt,"⋀","\\bigwedge");d(x,b,Bt,"⨄","\\biguplus");d(x,b,Bt,"⋂","\\bigcap");d(x,b,Bt,"⋃","\\bigcup");d(x,b,Bt,"∫","\\int");d(x,b,Bt,"∫","\\intop");d(x,b,Bt,"∬","\\iint");d(x,b,Bt,"∭","\\iiint");d(x,b,Bt,"∏","\\prod");d(x,b,Bt,"∑","\\sum");d(x,b,Bt,"⨂","\\bigotimes");d(x,b,Bt,"⨁","\\bigoplus");d(x,b,Bt,"⨀","\\bigodot");d(x,b,Bt,"∮","\\oint");d(x,b,Bt,"∯","\\oiint");d(x,b,Bt,"∰","\\oiiint");d(x,b,Bt,"⨆","\\bigsqcup");d(x,b,Bt,"∫","\\smallint");d(re,b,Dr,"…","\\textellipsis");d(x,b,Dr,"…","\\mathellipsis");d(re,b,Dr,"…","\\ldots",!0);d(x,b,Dr,"…","\\ldots",!0);d(x,b,Dr,"⋯","\\@cdots",!0);d(x,b,Dr,"⋱","\\ddots",!0);d(x,b,z,"⋮","\\varvdots");d(re,b,z,"⋮","\\varvdots");d(x,b,Tt,"ˊ","\\acute");d(x,b,Tt,"ˋ","\\grave");d(x,b,Tt,"¨","\\ddot");d(x,b,Tt,"~","\\tilde");d(x,b,Tt,"ˉ","\\bar");d(x,b,Tt,"˘","\\breve");d(x,b,Tt,"ˇ","\\check");d(x,b,Tt,"^","\\hat");d(x,b,Tt,"⃗","\\vec");d(x,b,Tt,"˙","\\dot");d(x,b,Tt,"˚","\\mathring");d(x,b,Fe,"","\\@imath");d(x,b,Fe,"","\\@jmath");d(x,b,z,"ı","ı");d(x,b,z,"ȷ","ȷ");d(re,b,z,"ı","\\i",!0);d(re,b,z,"ȷ","\\j",!0);d(re,b,z,"ß","\\ss",!0);d(re,b,z,"æ","\\ae",!0);d(re,b,z,"œ","\\oe",!0);d(re,b,z,"ø","\\o",!0);d(re,b,z,"Æ","\\AE",!0);d(re,b,z,"Œ","\\OE",!0);d(re,b,z,"Ø","\\O",!0);d(re,b,Tt,"ˊ","\\'");d(re,b,Tt,"ˋ","\\`");d(re,b,Tt,"ˆ","\\^");d(re,b,Tt,"˜","\\~");d(re,b,Tt,"ˉ","\\=");d(re,b,Tt,"˘","\\u");d(re,b,Tt,"˙","\\.");d(re,b,Tt,"¸","\\c");d(re,b,Tt,"˚","\\r");d(re,b,Tt,"ˇ","\\v");d(re,b,Tt,"¨",'\\"');d(re,b,Tt,"˝","\\H");d(re,b,Tt,"◯","\\textcircled");var th={"--":!0,"---":!0,"``":!0,"''":!0};d(re,b,z,"–","--",!0);d(re,b,z,"–","\\textendash");d(re,b,z,"—","---",!0);d(re,b,z,"—","\\textemdash");d(re,b,z,"‘","`",!0);d(re,b,z,"‘","\\textquoteleft");d(re,b,z,"’","'",!0);d(re,b,z,"’","\\textquoteright");d(re,b,z,"“","``",!0);d(re,b,z,"“","\\textquotedblleft");d(re,b,z,"”","''",!0);d(re,b,z,"”","\\textquotedblright");d(x,b,z,"°","\\degree",!0);d(re,b,z,"°","\\degree");d(re,b,z,"°","\\textdegree",!0);d(x,b,z,"£","\\pounds");d(x,b,z,"£","\\mathsterling",!0);d(re,b,z,"£","\\pounds");d(re,b,z,"£","\\textsterling",!0);d(x,P,z,"✠","\\maltese");d(re,P,z,"✠","\\maltese");var Rc='0123456789/@."';for(var o0=0;o0<Rc.length;o0++){var Dc=Rc.charAt(o0);d(x,b,z,Dc,Dc)}var Pc='0123456789!@*()-=+";:?/.,';for(var l0=0;l0<Pc.length;l0++){var Lc=Pc.charAt(l0);d(re,b,z,Lc,Lc)}var is="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var c0=0;c0<is.length;c0++){var La=is.charAt(c0);d(x,b,Fe,La,La),d(re,b,z,La,La)}d(x,P,z,"C","ℂ");d(re,P,z,"C","ℂ");d(x,P,z,"H","ℍ");d(re,P,z,"H","ℍ");d(x,P,z,"N","ℕ");d(re,P,z,"N","ℕ");d(x,P,z,"P","ℙ");d(re,P,z,"P","ℙ");d(x,P,z,"Q","ℚ");d(re,P,z,"Q","ℚ");d(x,P,z,"R","ℝ");d(re,P,z,"R","ℝ");d(x,P,z,"Z","ℤ");d(re,P,z,"Z","ℤ");d(x,b,Fe,"h","ℎ");d(re,b,Fe,"h","ℎ");var Ge="";for(var Zt=0;Zt<is.length;Zt++){var It=is.charAt(Zt);Ge=String.fromCharCode(55349,56320+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge),Ge=String.fromCharCode(55349,56372+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge),Ge=String.fromCharCode(55349,56424+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge),Ge=String.fromCharCode(55349,56580+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge),Ge=String.fromCharCode(55349,56684+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge),Ge=String.fromCharCode(55349,56736+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge),Ge=String.fromCharCode(55349,56788+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge),Ge=String.fromCharCode(55349,56840+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge),Ge=String.fromCharCode(55349,56944+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge),Zt<26&&(Ge=String.fromCharCode(55349,56632+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge),Ge=String.fromCharCode(55349,56476+Zt),d(x,b,Fe,It,Ge),d(re,b,z,It,Ge))}Ge="𝕜";d(x,b,Fe,"k",Ge);d(re,b,z,"k",Ge);for(var Hi=0;Hi<10;Hi++){var Si=Hi.toString();Ge=String.fromCharCode(55349,57294+Hi),d(x,b,Fe,Si,Ge),d(re,b,z,Si,Ge),Ge=String.fromCharCode(55349,57314+Hi),d(x,b,Fe,Si,Ge),d(re,b,z,Si,Ge),Ge=String.fromCharCode(55349,57324+Hi),d(x,b,Fe,Si,Ge),d(re,b,z,Si,Ge),Ge=String.fromCharCode(55349,57334+Hi),d(x,b,Fe,Si,Ge),d(re,b,z,Si,Ge)}var vo="ÐÞþ";for(var u0=0;u0<vo.length;u0++){var Ia=vo.charAt(u0);d(x,b,Fe,Ia,Ia),d(re,b,z,Ia,Ia)}var Na=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],Ic=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],ox=function(e,t){var i=e.charCodeAt(0),r=e.charCodeAt(1),a=(i-55296)*1024+(r-56320)+65536,s=t==="math"?0:1;if(119808<=a&&a<120484){var o=Math.floor((a-119808)/26);return[Na[o][2],Na[o][s]]}else if(120782<=a&&a<=120831){var l=Math.floor((a-120782)/10);return[Ic[l][2],Ic[l][s]]}else{if(a===120485||a===120486)return[Na[0][2],Na[0][s]];if(120486<a&&a<120782)return["",""];throw new ue("Unsupported character: "+e)}},_s=function(e,t,i){return Mt[i][e]&&Mt[i][e].replace&&(e=Mt[i][e].replace),{value:e,metrics:Oo(e,t,i)}},Ln=function(e,t,i,r,a){var s=_s(e,t,i),o=s.metrics;e=s.value;var l;if(o){var c=o.italic;(i==="text"||r&&r.font==="mathit")&&(c=0),l=new Un(e,o.height,o.depth,c,o.skew,o.width,a)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+t+"' and mode '"+i+"'")),l=new Un(e,0,0,0,0,0,a);if(r){l.maxFontSize=r.sizeMultiplier,r.style.isTight()&&l.classes.push("mtight");var h=r.getColor();h&&(l.style.color=h)}return l},lx=function(e,t,i,r){return r===void 0&&(r=[]),i.font==="boldsymbol"&&_s(e,"Main-Bold",t).metrics?Ln(e,"Main-Bold",t,i,r.concat(["mathbf"])):e==="\\"||Mt[t][e].font==="main"?Ln(e,"Main-Regular",t,i,r):Ln(e,"AMS-Regular",t,i,r.concat(["amsrm"]))},cx=function(e,t,i,r,a){return a!=="textord"&&_s(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},ux=function(e,t,i){var r=e.mode,a=e.text,s=["mord"],o=r==="math"||r==="text"&&t.font,l=o?t.font:t.fontFamily,c="",h="";if(a.charCodeAt(0)===55349&&([c,h]=ox(a,r)),c.length>0)return Ln(a,c,r,t,s.concat(h));if(l){var u,p;if(l==="boldsymbol"){var m=cx(a,r,t,s,i);u=m.fontName,p=[m.fontClass]}else o?(u=rh[l].fontName,p=[l]):(u=Ua(l,t.fontWeight,t.fontShape),p=[l,t.fontWeight,t.fontShape]);if(_s(a,u,r).metrics)return Ln(a,u,r,t,s.concat(p));if(th.hasOwnProperty(a)&&u.slice(0,10)==="Typewriter"){for(var v=[],_=0;_<a.length;_++)v.push(Ln(a[_],u,r,t,s.concat(p)));return ih(v)}}if(i==="mathord")return Ln(a,"Math-Italic",r,t,s.concat(["mathnormal"]));if(i==="textord"){var g=Mt[r][a]&&Mt[r][a].font;if(g==="ams"){var f=Ua("amsrm",t.fontWeight,t.fontShape);return Ln(a,f,r,t,s.concat("amsrm",t.fontWeight,t.fontShape))}else if(g==="main"||!g){var M=Ua("textrm",t.fontWeight,t.fontShape);return Ln(a,M,r,t,s.concat(t.fontWeight,t.fontShape))}else{var A=Ua(g,t.fontWeight,t.fontShape);return Ln(a,A,r,t,s.concat(A,t.fontWeight,t.fontShape))}}else throw new Error("unexpected type: "+i+" in makeOrd")},hx=(n,e)=>{if(Ri(n.classes)!==Ri(e.classes)||n.skew!==e.skew||n.maxFontSize!==e.maxFontSize)return!1;if(n.classes.length===1){var t=n.classes[0];if(t==="mbin"||t==="mord")return!1}for(var i in n.style)if(n.style.hasOwnProperty(i)&&n.style[i]!==e.style[i])return!1;for(var r in e.style)if(e.style.hasOwnProperty(r)&&n.style[r]!==e.style[r])return!1;return!0},dx=n=>{for(var e=0;e<n.length-1;e++){var t=n[e],i=n[e+1];t instanceof Un&&i instanceof Un&&hx(t,i)&&(t.text+=i.text,t.height=Math.max(t.height,i.height),t.depth=Math.max(t.depth,i.depth),t.italic=i.italic,n.splice(e+1,1),e--)}return n},Bo=function(e){for(var t=0,i=0,r=0,a=0;a<e.children.length;a++){var s=e.children[a];s.height>t&&(t=s.height),s.depth>i&&(i=s.depth),s.maxFontSize>r&&(r=s.maxFontSize)}e.height=t,e.depth=i,e.maxFontSize=r},sn=function(e,t,i,r){var a=new gs(e,t,i,r);return Bo(a),a},nh=(n,e,t,i)=>new gs(n,e,t,i),fx=function(e,t,i){var r=sn([e],[],t);return r.height=Math.max(i||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=pe(r.height),r.maxFontSize=1,r},px=function(e,t,i,r){var a=new eh(e,t,i,r);return Bo(a),a},ih=function(e){var t=new ta(e);return Bo(t),t},mx=function(e,t){return e instanceof ta?sn([],[e],t):e},xx=function(e){if(e.positionType==="individualShift"){for(var t=e.children,i=[t[0]],r=-t[0].shift-t[0].elem.depth,a=r,s=1;s<t.length;s++){var o=-t[s].shift-a-t[s].elem.depth,l=o-(t[s-1].elem.height+t[s-1].elem.depth);a=a+o,i.push({type:"kern",size:l}),i.push(t[s])}return{children:i,depth:r}}var c;if(e.positionType==="top"){for(var h=e.positionData,u=0;u<e.children.length;u++){var p=e.children[u];h-=p.type==="kern"?p.size:p.elem.height+p.elem.depth}c=h}else if(e.positionType==="bottom")c=-e.positionData;else{var m=e.children[0];if(m.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")c=-m.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")c=-m.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:c}},gx=function(e,t){for(var{children:i,depth:r}=xx(e),a=0,s=0;s<i.length;s++){var o=i[s];if(o.type==="elem"){var l=o.elem;a=Math.max(a,l.maxFontSize,l.height)}}a+=2;var c=sn(["pstrut"],[]);c.style.height=pe(a);for(var h=[],u=r,p=r,m=r,v=0;v<i.length;v++){var _=i[v];if(_.type==="kern")m+=_.size;else{var g=_.elem,f=_.wrapperClasses||[],M=_.wrapperStyle||{},A=sn(f,[c,g],void 0,M);A.style.top=pe(-a-m-g.depth),_.marginLeft&&(A.style.marginLeft=_.marginLeft),_.marginRight&&(A.style.marginRight=_.marginRight),h.push(A),m+=g.height+g.depth}u=Math.min(u,m),p=Math.max(p,m)}var R=sn(["vlist"],h);R.style.height=pe(p);var L;if(u<0){var C=sn([],[]),N=sn(["vlist"],[C]);N.style.height=pe(-u);var O=sn(["vlist-s"],[new Un("​")]);L=[sn(["vlist-r"],[R,O]),sn(["vlist-r"],[N])]}else L=[sn(["vlist-r"],[R])];var w=sn(["vlist-t"],L);return L.length===2&&w.classes.push("vlist-t2"),w.height=p,w.depth=-u,w},vx=(n,e)=>{var t=sn(["mspace"],[],e),i=Dt(n,e);return t.style.marginRight=pe(i),t},Ua=function(e,t,i){var r="";switch(e){case"amsrm":r="AMS";break;case"textrm":r="Main";break;case"textsf":r="SansSerif";break;case"texttt":r="Typewriter";break;default:r=e}var a;return t==="textbf"&&i==="textit"?a="BoldItalic":t==="textbf"?a="Bold":t==="textit"?a="Italic":a="Regular",r+"-"+a},rh={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},ah={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},_x=function(e,t){var[i,r,a]=ah[e],s=new Zi(i),o=new Di([s],{width:pe(r),height:pe(a),style:"width:"+pe(r),viewBox:"0 0 "+1e3*r+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),l=nh(["overlay"],[o],t);return l.height=a,l.style.height=pe(a),l.style.width=pe(r),l},G={fontMap:rh,makeSymbol:Ln,mathsym:lx,makeSpan:sn,makeSvgSpan:nh,makeLineSpan:fx,makeAnchor:px,makeFragment:ih,wrapFragment:mx,makeVList:gx,makeOrd:ux,makeGlue:vx,staticSvg:_x,svgData:ah,tryCombineChars:dx},Rt={number:3,unit:"mu"},Vi={number:4,unit:"mu"},jn={number:5,unit:"mu"},bx={mord:{mop:Rt,mbin:Vi,mrel:jn,minner:Rt},mop:{mord:Rt,mop:Rt,mrel:jn,minner:Rt},mbin:{mord:Vi,mop:Vi,mopen:Vi,minner:Vi},mrel:{mord:jn,mop:jn,mopen:jn,minner:jn},mopen:{},mclose:{mop:Rt,mbin:Vi,mrel:jn,minner:Rt},mpunct:{mord:Rt,mop:Rt,mrel:jn,mopen:Rt,mclose:Rt,mpunct:Rt,minner:Rt},minner:{mord:Rt,mop:Rt,mbin:Vi,mrel:jn,mopen:Rt,mpunct:Rt,minner:Rt}},yx={mord:{mop:Rt},mop:{mord:Rt,mop:Rt},mbin:{},mrel:{},mopen:{},mclose:{mop:Rt},mpunct:{},minner:{mop:Rt}},sh={},rs={},as={};function ye(n){for(var{type:e,names:t,props:i,handler:r,htmlBuilder:a,mathmlBuilder:s}=n,o={type:e,numArgs:i.numArgs,argTypes:i.argTypes,allowedInArgument:!!i.allowedInArgument,allowedInText:!!i.allowedInText,allowedInMath:i.allowedInMath===void 0?!0:i.allowedInMath,numOptionalArgs:i.numOptionalArgs||0,infix:!!i.infix,primitive:!!i.primitive,handler:r},l=0;l<t.length;++l)sh[t[l]]=o;e&&(a&&(rs[e]=a),s&&(as[e]=s))}function ji(n){var{type:e,htmlBuilder:t,mathmlBuilder:i}=n;ye({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:i})}var ss=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},kt=function(e){return e.type==="ordgroup"?e.body:[e]},di=G.makeSpan,Sx=["leftmost","mbin","mopen","mrel","mop","mpunct"],Mx=["rightmost","mrel","mclose","mpunct"],wx={display:ke.DISPLAY,text:ke.TEXT,script:ke.SCRIPT,scriptscript:ke.SCRIPTSCRIPT},Tx={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Wt=function(e,t,i,r){r===void 0&&(r=[null,null]);for(var a=[],s=0;s<e.length;s++){var o=lt(e[s],t);if(o instanceof ta){var l=o.children;a.push(...l)}else a.push(o)}if(G.tryCombineChars(a),!i)return a;var c=t;if(e.length===1){var h=e[0];h.type==="sizing"?c=t.havingSize(h.size):h.type==="styling"&&(c=t.havingStyle(wx[h.style]))}var u=di([r[0]||"leftmost"],[],t),p=di([r[1]||"rightmost"],[],t),m=i==="root";return Nc(a,(v,_)=>{var g=_.classes[0],f=v.classes[0];g==="mbin"&&Mx.includes(f)?_.classes[0]="mord":f==="mbin"&&Sx.includes(g)&&(v.classes[0]="mord")},{node:u},p,m),Nc(a,(v,_)=>{var g=_o(_),f=_o(v),M=g&&f?v.hasClass("mtight")?yx[g][f]:bx[g][f]:null;if(M)return G.makeGlue(M,c)},{node:u},p,m),a},Nc=function n(e,t,i,r,a){r&&e.push(r);for(var s=0;s<e.length;s++){var o=e[s],l=oh(o);if(l){n(l.children,t,i,null,a);continue}var c=!o.hasClass("mspace");if(c){var h=t(o,i.node);h&&(i.insertAfter?i.insertAfter(h):(e.unshift(h),s++))}c?i.node=o:a&&o.hasClass("newline")&&(i.node=di(["leftmost"])),i.insertAfter=(u=>p=>{e.splice(u+1,0,p),s++})(s)}r&&e.pop()},oh=function(e){return e instanceof ta||e instanceof eh||e instanceof gs&&e.hasClass("enclosing")?e:null},Ex=function n(e,t){var i=oh(e);if(i){var r=i.children;if(r.length){if(t==="right")return n(r[r.length-1],"right");if(t==="left")return n(r[0],"left")}}return e},_o=function(e,t){return e?(t&&(e=Ex(e,t)),Tx[e.classes[0]]||null):null},Zr=function(e,t){var i=["nulldelimiter"].concat(e.baseSizingClasses());return di(t.concat(i))},lt=function(e,t,i){if(!e)return di();if(rs[e.type]){var r=rs[e.type](e,t);if(i&&t.size!==i.size){r=di(t.sizingClasses(i),[r],t);var a=t.sizeMultiplier/i.sizeMultiplier;r.height*=a,r.depth*=a}return r}else throw new ue("Got group of unknown type: '"+e.type+"'")};function Fa(n,e){var t=di(["base"],n,e),i=di(["strut"]);return i.style.height=pe(t.height+t.depth),t.depth&&(i.style.verticalAlign=pe(-t.depth)),t.children.unshift(i),t}function Uc(n,e){var t=null;n.length===1&&n[0].type==="tag"&&(t=n[0].tag,n=n[0].body);var i=Wt(n,e,"root"),r;i.length===2&&i[1].hasClass("tag")&&(r=i.pop());for(var a=[],s=[],o=0;o<i.length;o++)if(s.push(i[o]),i[o].hasClass("mbin")||i[o].hasClass("mrel")||i[o].hasClass("allowbreak")){for(var l=!1;o<i.length-1&&i[o+1].hasClass("mspace")&&!i[o+1].hasClass("newline");)o++,s.push(i[o]),i[o].hasClass("nobreak")&&(l=!0);l||(a.push(Fa(s,e)),s=[])}else i[o].hasClass("newline")&&(s.pop(),s.length>0&&(a.push(Fa(s,e)),s=[]),a.push(i[o]));s.length>0&&a.push(Fa(s,e));var c;t?(c=Fa(Wt(t,e,!0)),c.classes=["tag"],a.push(c)):r&&a.push(r);var h=di(["katex-html"],a);if(h.setAttribute("aria-hidden","true"),c){var u=c.children[0];u.style.height=pe(h.height+h.depth),h.depth&&(u.style.verticalAlign=pe(-h.depth))}return h}function lh(n){return new ta(n)}class mn{constructor(e,t,i){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=i||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Ri(this.classes));for(var i=0;i<this.children.length;i++)if(this.children[i]instanceof Bn&&this.children[i+1]instanceof Bn){for(var r=this.children[i].toText()+this.children[++i].toText();this.children[i+1]instanceof Bn;)r+=this.children[++i].toText();e.appendChild(new Bn(r).toNode())}else e.appendChild(this.children[i].toNode());return e}toMarkup(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=ht.escape(this.attributes[t]),e+='"');this.classes.length>0&&(e+=' class ="'+ht.escape(Ri(this.classes))+'"'),e+=">";for(var i=0;i<this.children.length;i++)e+=this.children[i].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class Bn{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return ht.escape(this.toText())}toText(){return this.text}}class Ax{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",pe(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+pe(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var le={MathNode:mn,TextNode:Bn,SpaceNode:Ax,newDocumentFragment:lh},En=function(e,t,i){return Mt[t][e]&&Mt[t][e].replace&&e.charCodeAt(0)!==55349&&!(th.hasOwnProperty(e)&&i&&(i.fontFamily&&i.fontFamily.slice(4,6)==="tt"||i.font&&i.font.slice(4,6)==="tt"))&&(e=Mt[t][e].replace),new le.TextNode(e)},Ho=function(e){return e.length===1?e[0]:new le.MathNode("mrow",e)},Vo=function(e,t){if(t.fontFamily==="texttt")return"monospace";if(t.fontFamily==="textsf")return t.fontShape==="textit"&&t.fontWeight==="textbf"?"sans-serif-bold-italic":t.fontShape==="textit"?"sans-serif-italic":t.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(t.fontShape==="textit"&&t.fontWeight==="textbf")return"bold-italic";if(t.fontShape==="textit")return"italic";if(t.fontWeight==="textbf")return"bold";var i=t.font;if(!i||i==="mathnormal")return null;var r=e.mode;if(i==="mathit")return"italic";if(i==="boldsymbol")return e.type==="textord"?"bold":"bold-italic";if(i==="mathbf")return"bold";if(i==="mathbb")return"double-struck";if(i==="mathsfit")return"sans-serif-italic";if(i==="mathfrak")return"fraktur";if(i==="mathscr"||i==="mathcal")return"script";if(i==="mathsf")return"sans-serif";if(i==="mathtt")return"monospace";var a=e.text;if(["\\imath","\\jmath"].includes(a))return null;Mt[r][a]&&Mt[r][a].replace&&(a=Mt[r][a].replace);var s=G.fontMap[i].fontName;return Oo(a,s,r)?G.fontMap[i].variant:null};function h0(n){if(!n)return!1;if(n.type==="mi"&&n.children.length===1){var e=n.children[0];return e instanceof Bn&&e.text==="."}else if(n.type==="mo"&&n.children.length===1&&n.getAttribute("separator")==="true"&&n.getAttribute("lspace")==="0em"&&n.getAttribute("rspace")==="0em"){var t=n.children[0];return t instanceof Bn&&t.text===","}else return!1}var un=function(e,t,i){if(e.length===1){var r=St(e[0],t);return i&&r instanceof mn&&r.type==="mo"&&(r.setAttribute("lspace","0em"),r.setAttribute("rspace","0em")),[r]}for(var a=[],s,o=0;o<e.length;o++){var l=St(e[o],t);if(l instanceof mn&&s instanceof mn){if(l.type==="mtext"&&s.type==="mtext"&&l.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...l.children);continue}else if(l.type==="mn"&&s.type==="mn"){s.children.push(...l.children);continue}else if(h0(l)&&s.type==="mn"){s.children.push(...l.children);continue}else if(l.type==="mn"&&h0(s))l.children=[...s.children,...l.children],a.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(s.type==="mn"||h0(s))){var c=l.children[0];c instanceof mn&&c.type==="mn"&&(c.children=[...s.children,...c.children],a.pop())}else if(s.type==="mi"&&s.children.length===1){var h=s.children[0];if(h instanceof Bn&&h.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var u=l.children[0];u instanceof Bn&&u.text.length>0&&(u.text=u.text.slice(0,1)+"̸"+u.text.slice(1),a.pop())}}}a.push(l),s=l}return a},Pi=function(e,t,i){return Ho(un(e,t,i))},St=function(e,t){if(!e)return new le.MathNode("mrow");if(as[e.type]){var i=as[e.type](e,t);return i}else throw new ue("Got group of unknown type: '"+e.type+"'")};function Fc(n,e,t,i,r){var a=un(n,t),s;a.length===1&&a[0]instanceof mn&&["mrow","mtable"].includes(a[0].type)?s=a[0]:s=new le.MathNode("mrow",a);var o=new le.MathNode("annotation",[new le.TextNode(e)]);o.setAttribute("encoding","application/x-tex");var l=new le.MathNode("semantics",[s,o]),c=new le.MathNode("math",[l]);c.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),i&&c.setAttribute("display","block");var h=r?"katex":"katex-mathml";return G.makeSpan([h],[c])}var Cx=function(e){return new Qn({style:e.displayMode?ke.DISPLAY:ke.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},Rx=function(e,t){if(t.displayMode){var i=["katex-display"];t.leqno&&i.push("leqno"),t.fleqn&&i.push("fleqn"),e=G.makeSpan(i,[e])}return e},Dx=function(e,t,i){var r=Cx(i),a;if(i.output==="mathml")return Fc(e,t,r,i.displayMode,!0);if(i.output==="html"){var s=Uc(e,r);a=G.makeSpan(["katex"],[s])}else{var o=Fc(e,t,r,i.displayMode,!1),l=Uc(e,r);a=G.makeSpan(["katex"],[o,l])}return Rx(a,i)},Px={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Lx=function(e){var t=new le.MathNode("mo",[new le.TextNode(Px[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},Ix={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},Nx=function(e){return e.type==="ordgroup"?e.body.length:1},Ux=function(e,t){function i(){var o=4e5,l=e.label.slice(1);if(["widehat","widecheck","widetilde","utilde"].includes(l)){var c=e,h=Nx(c.base),u,p,m;if(h>5)l==="widehat"||l==="widecheck"?(u=420,o=2364,m=.42,p=l+"4"):(u=312,o=2340,m=.34,p="tilde4");else{var v=[1,1,2,2,3,3][h];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][v],u=[0,239,300,360,420][v],m=[0,.24,.3,.3,.36,.42][v],p=l+v):(o=[0,600,1033,2339,2340][v],u=[0,260,286,306,312][v],m=[0,.26,.286,.3,.306,.34][v],p="tilde"+v)}var _=new Zi(p),g=new Di([_],{width:"100%",height:pe(m),viewBox:"0 0 "+o+" "+u,preserveAspectRatio:"none"});return{span:G.makeSvgSpan([],[g],t),minWidth:0,height:m}}else{var f=[],M=Ix[l],[A,R,L]=M,C=L/1e3,N=A.length,O,w;if(N===1){var E=M[3];O=["hide-tail"],w=[E]}else if(N===2)O=["halfarrow-left","halfarrow-right"],w=["xMinYMin","xMaxYMin"];else if(N===3)O=["brace-left","brace-center","brace-right"],w=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+N+" children.");for(var U=0;U<N;U++){var B=new Zi(A[U]),X=new Di([B],{width:"400em",height:pe(C),viewBox:"0 0 "+o+" "+L,preserveAspectRatio:w[U]+" slice"}),K=G.makeSvgSpan([O[U]],[X],t);if(N===1)return{span:K,minWidth:R,height:C};K.style.height=pe(C),f.push(K)}return{span:G.makeSpan(["stretchy"],f,t),minWidth:R,height:C}}}var{span:r,minWidth:a,height:s}=i();return r.height=s,r.style.height=pe(s),a>0&&(r.style.minWidth=pe(a)),r},Fx=function(e,t,i,r,a){var s,o=e.height+e.depth+i+r;if(/fbox|color|angl/.test(t)){if(s=G.makeSpan(["stretchy",t],[],a),t==="fbox"){var l=a.color&&a.getColor();l&&(s.style.borderColor=l)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new Ac({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&c.push(new Ac({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new Di(c,{width:"100%",height:pe(o)});s=G.makeSvgSpan([],[h],a)}return s.height=o,s.style.height=pe(o),s},fi={encloseSpan:Fx,mathMLnode:Lx,svgSpan:Ux};function Je(n,e){if(!n||n.type!==e)throw new Error("Expected node of type "+e+", but got "+(n?"node of type "+n.type:String(n)));return n}function Go(n){var e=bs(n);if(!e)throw new Error("Expected node of symbol group type, but got "+(n?"node of type "+n.type:String(n)));return e}function bs(n){return n&&(n.type==="atom"||sx.hasOwnProperty(n.type))?n:null}var Wo=(n,e)=>{var t,i,r;n&&n.type==="supsub"?(i=Je(n.base,"accent"),t=i.base,n.base=t,r=rx(lt(n,e)),n.base=i):(i=Je(n,"accent"),t=i.base);var a=lt(t,e.havingCrampedStyle()),s=i.isShifty&&ht.isCharacterBox(t),o=0;if(s){var l=ht.getBaseElem(t),c=lt(l,e.havingCrampedStyle());o=Cc(c).skew}var h=i.label==="\\c",u=h?a.height+a.depth:Math.min(a.height,e.fontMetrics().xHeight),p;if(i.isStretchy)p=fi.svgSpan(i,e),p=G.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"elem",elem:p,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+pe(2*o)+")",marginLeft:pe(2*o)}:void 0}]},e);else{var m,v;i.label==="\\vec"?(m=G.staticSvg("vec",e),v=G.svgData.vec[1]):(m=G.makeOrd({mode:i.mode,text:i.label},e,"textord"),m=Cc(m),m.italic=0,v=m.width,h&&(u+=m.depth)),p=G.makeSpan(["accent-body"],[m]);var _=i.label==="\\textcircled";_&&(p.classes.push("accent-full"),u=a.height);var g=o;_||(g-=v/2),p.style.left=pe(g),i.label==="\\textcircled"&&(p.style.top=".2em"),p=G.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:-u},{type:"elem",elem:p}]},e)}var f=G.makeSpan(["mord","accent"],[p],e);return r?(r.children[0]=f,r.height=Math.max(f.height,r.height),r.classes[0]="mord",r):f},ch=(n,e)=>{var t=n.isStretchy?fi.mathMLnode(n.label):new le.MathNode("mo",[En(n.label,n.mode)]),i=new le.MathNode("mover",[St(n.base,e),t]);return i.setAttribute("accent","true"),i},kx=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(n=>"\\"+n).join("|"));ye({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(n,e)=>{var t=ss(e[0]),i=!kx.test(n.funcName),r=!i||n.funcName==="\\widehat"||n.funcName==="\\widetilde"||n.funcName==="\\widecheck";return{type:"accent",mode:n.parser.mode,label:n.funcName,isStretchy:i,isShifty:r,base:t}},htmlBuilder:Wo,mathmlBuilder:ch});ye({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(n,e)=>{var t=e[0],i=n.parser.mode;return i==="math"&&(n.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+n.funcName+" works only in text mode"),i="text"),{type:"accent",mode:i,label:n.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:Wo,mathmlBuilder:ch});ye({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0];return{type:"accentUnder",mode:t.mode,label:i,base:r}},htmlBuilder:(n,e)=>{var t=lt(n.base,e),i=fi.svgSpan(n,e),r=n.label==="\\utilde"?.12:0,a=G.makeVList({positionType:"top",positionData:t.height,children:[{type:"elem",elem:i,wrapperClasses:["svg-align"]},{type:"kern",size:r},{type:"elem",elem:t}]},e);return G.makeSpan(["mord","accentunder"],[a],e)},mathmlBuilder:(n,e)=>{var t=fi.mathMLnode(n.label),i=new le.MathNode("munder",[St(n.base,e),t]);return i.setAttribute("accentunder","true"),i}});var ka=n=>{var e=new le.MathNode("mpadded",n?[n]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};ye({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(n,e,t){var{parser:i,funcName:r}=n;return{type:"xArrow",mode:i.mode,label:r,body:e[0],below:t[0]}},htmlBuilder(n,e){var t=e.style,i=e.havingStyle(t.sup()),r=G.wrapFragment(lt(n.body,i,e),e),a=n.label.slice(0,2)==="\\x"?"x":"cd";r.classes.push(a+"-arrow-pad");var s;n.below&&(i=e.havingStyle(t.sub()),s=G.wrapFragment(lt(n.below,i,e),e),s.classes.push(a+"-arrow-pad"));var o=fi.svgSpan(n,e),l=-e.fontMetrics().axisHeight+.5*o.height,c=-e.fontMetrics().axisHeight-.5*o.height-.111;(r.depth>.25||n.label==="\\xleftequilibrium")&&(c-=r.depth);var h;if(s){var u=-e.fontMetrics().axisHeight+s.height+.5*o.height+.111;h=G.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l},{type:"elem",elem:s,shift:u}]},e)}else h=G.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l}]},e);return h.children[0].children[0].children[1].classes.push("svg-align"),G.makeSpan(["mrel","x-arrow"],[h],e)},mathmlBuilder(n,e){var t=fi.mathMLnode(n.label);t.setAttribute("minsize",n.label.charAt(0)==="x"?"1.75em":"3.0em");var i;if(n.body){var r=ka(St(n.body,e));if(n.below){var a=ka(St(n.below,e));i=new le.MathNode("munderover",[t,a,r])}else i=new le.MathNode("mover",[t,r])}else if(n.below){var s=ka(St(n.below,e));i=new le.MathNode("munder",[t,s])}else i=ka(),i=new le.MathNode("mover",[t,i]);return i}});var zx=G.makeSpan;function uh(n,e){var t=Wt(n.body,e,!0);return zx([n.mclass],t,e)}function hh(n,e){var t,i=un(n.body,e);return n.mclass==="minner"?t=new le.MathNode("mpadded",i):n.mclass==="mord"?n.isCharacterBox?(t=i[0],t.type="mi"):t=new le.MathNode("mi",i):(n.isCharacterBox?(t=i[0],t.type="mo"):t=new le.MathNode("mo",i),n.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):n.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):n.mclass==="mopen"||n.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):n.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}ye({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(n,e){var{parser:t,funcName:i}=n,r=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+i.slice(5),body:kt(r),isCharacterBox:ht.isCharacterBox(r)}},htmlBuilder:uh,mathmlBuilder:hh});var ys=n=>{var e=n.type==="ordgroup"&&n.body.length?n.body[0]:n;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};ye({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(n,e){var{parser:t}=n;return{type:"mclass",mode:t.mode,mclass:ys(e[0]),body:kt(e[1]),isCharacterBox:ht.isCharacterBox(e[1])}}});ye({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(n,e){var{parser:t,funcName:i}=n,r=e[1],a=e[0],s;i!=="\\stackrel"?s=ys(r):s="mrel";var o={type:"op",mode:r.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:i!=="\\stackrel",body:kt(r)},l={type:"supsub",mode:a.mode,base:o,sup:i==="\\underset"?null:a,sub:i==="\\underset"?a:null};return{type:"mclass",mode:t.mode,mclass:s,body:[l],isCharacterBox:ht.isCharacterBox(l)}},htmlBuilder:uh,mathmlBuilder:hh});ye({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(n,e){var{parser:t}=n;return{type:"pmb",mode:t.mode,mclass:ys(e[0]),body:kt(e[0])}},htmlBuilder(n,e){var t=Wt(n.body,e,!0),i=G.makeSpan([n.mclass],t,e);return i.style.textShadow="0.02em 0.01em 0.04px",i},mathmlBuilder(n,e){var t=un(n.body,e),i=new le.MathNode("mstyle",t);return i.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),i}});var Ox={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},kc=()=>({type:"styling",body:[],mode:"math",style:"display"}),zc=n=>n.type==="textord"&&n.text==="@",Bx=(n,e)=>(n.type==="mathord"||n.type==="atom")&&n.text===e;function Hx(n,e,t){var i=Ox[n];switch(i){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(i,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var r=t.callFunction("\\\\cdleft",[e[0]],[]),a={type:"atom",text:i,mode:"math",family:"rel"},s=t.callFunction("\\Big",[a],[]),o=t.callFunction("\\\\cdright",[e[1]],[]),l={type:"ordgroup",mode:"math",body:[r,s,o]};return t.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var c={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[c],[])}default:return{type:"textord",text:" ",mode:"math"}}}function Vx(n){var e=[];for(n.gullet.beginGroup(),n.gullet.macros.set("\\cr","\\\\\\relax"),n.gullet.beginGroup();;){e.push(n.parseExpression(!1,"\\\\")),n.gullet.endGroup(),n.gullet.beginGroup();var t=n.fetch().text;if(t==="&"||t==="\\\\")n.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new ue("Expected \\\\ or \\cr or \\end",n.nextToken)}for(var i=[],r=[i],a=0;a<e.length;a++){for(var s=e[a],o=kc(),l=0;l<s.length;l++)if(!zc(s[l]))o.body.push(s[l]);else{i.push(o),l+=1;var c=Go(s[l]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!("=|.".indexOf(c)>-1))if("<>AV".indexOf(c)>-1)for(var u=0;u<2;u++){for(var p=!0,m=l+1;m<s.length;m++){if(Bx(s[m],c)){p=!1,l=m;break}if(zc(s[m]))throw new ue("Missing a "+c+" character to complete a CD arrow.",s[m]);h[u].body.push(s[m])}if(p)throw new ue("Missing a "+c+" character to complete a CD arrow.",s[l])}else throw new ue('Expected one of "<>AV=|." after @',s[l]);var v=Hx(c,h,n),_={type:"styling",body:[v],mode:"math",style:"display"};i.push(_),o=kc()}a%2===0?i.push(o):i.shift(),i=[],r.push(i)}n.gullet.endGroup(),n.gullet.endGroup();var g=new Array(r[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:r,arraystretch:1,addJot:!0,rowGaps:[null],cols:g,colSeparationType:"CD",hLinesBeforeRow:new Array(r.length+1).fill([])}}ye({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(n,e){var{parser:t,funcName:i}=n;return{type:"cdlabel",mode:t.mode,side:i.slice(4),label:e[0]}},htmlBuilder(n,e){var t=e.havingStyle(e.style.sup()),i=G.wrapFragment(lt(n.label,t,e),e);return i.classes.push("cd-label-"+n.side),i.style.bottom=pe(.8-i.depth),i.height=0,i.depth=0,i},mathmlBuilder(n,e){var t=new le.MathNode("mrow",[St(n.label,e)]);return t=new le.MathNode("mpadded",[t]),t.setAttribute("width","0"),n.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new le.MathNode("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});ye({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(n,e){var{parser:t}=n;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(n,e){var t=G.wrapFragment(lt(n.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(n,e){return new le.MathNode("mrow",[St(n.fragment,e)])}});ye({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(n,e){for(var{parser:t}=n,i=Je(e[0],"ordgroup"),r=i.body,a="",s=0;s<r.length;s++){var o=Je(r[s],"textord");a+=o.text}var l=parseInt(a),c;if(isNaN(l))throw new ue("\\@char has non-numeric argument "+a);if(l<0||l>=1114111)throw new ue("\\@char with invalid code point "+a);return l<=65535?c=String.fromCharCode(l):(l-=65536,c=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:t.mode,text:c}}});var dh=(n,e)=>{var t=Wt(n.body,e.withColor(n.color),!1);return G.makeFragment(t)},fh=(n,e)=>{var t=un(n.body,e.withColor(n.color)),i=new le.MathNode("mstyle",t);return i.setAttribute("mathcolor",n.color),i};ye({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(n,e){var{parser:t}=n,i=Je(e[0],"color-token").color,r=e[1];return{type:"color",mode:t.mode,color:i,body:kt(r)}},htmlBuilder:dh,mathmlBuilder:fh});ye({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(n,e){var{parser:t,breakOnTokenText:i}=n,r=Je(e[0],"color-token").color;t.gullet.macros.set("\\current@color",r);var a=t.parseExpression(!0,i);return{type:"color",mode:t.mode,color:r,body:a}},htmlBuilder:dh,mathmlBuilder:fh});ye({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(n,e,t){var{parser:i}=n,r=i.gullet.future().text==="["?i.parseSizeGroup(!0):null,a=!i.settings.displayMode||!i.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:i.mode,newLine:a,size:r&&Je(r,"size").value}},htmlBuilder(n,e){var t=G.makeSpan(["mspace"],[],e);return n.newLine&&(t.classes.push("newline"),n.size&&(t.style.marginTop=pe(Dt(n.size,e)))),t},mathmlBuilder(n,e){var t=new le.MathNode("mspace");return n.newLine&&(t.setAttribute("linebreak","newline"),n.size&&t.setAttribute("height",pe(Dt(n.size,e)))),t}});var bo={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},ph=n=>{var e=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new ue("Expected a control sequence",n);return e},Gx=n=>{var e=n.gullet.popToken();return e.text==="="&&(e=n.gullet.popToken(),e.text===" "&&(e=n.gullet.popToken())),e},mh=(n,e,t,i)=>{var r=n.gullet.macros.get(t.text);r==null&&(t.noexpand=!0,r={tokens:[t],numArgs:0,unexpandable:!n.gullet.isExpandable(t.text)}),n.gullet.macros.set(e,r,i)};ye({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(n){var{parser:e,funcName:t}=n;e.consumeSpaces();var i=e.fetch();if(bo[i.text])return(t==="\\global"||t==="\\\\globallong")&&(i.text=bo[i.text]),Je(e.parseFunction(),"internal");throw new ue("Invalid token after macro prefix",i)}});ye({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n){var{parser:e,funcName:t}=n,i=e.gullet.popToken(),r=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(r))throw new ue("Expected a control sequence",i);for(var a=0,s,o=[[]];e.gullet.future().text!=="{";)if(i=e.gullet.popToken(),i.text==="#"){if(e.gullet.future().text==="{"){s=e.gullet.future(),o[a].push("{");break}if(i=e.gullet.popToken(),!/^[1-9]$/.test(i.text))throw new ue('Invalid argument number "'+i.text+'"');if(parseInt(i.text)!==a+1)throw new ue('Argument number "'+i.text+'" out of order');a++,o.push([])}else{if(i.text==="EOF")throw new ue("Expected a macro definition");o[a].push(i.text)}var{tokens:l}=e.gullet.consumeArg();return s&&l.unshift(s),(t==="\\edef"||t==="\\xdef")&&(l=e.gullet.expandTokens(l),l.reverse()),e.gullet.macros.set(r,{tokens:l,numArgs:a,delimiters:o},t===bo[t]),{type:"internal",mode:e.mode}}});ye({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n){var{parser:e,funcName:t}=n,i=ph(e.gullet.popToken());e.gullet.consumeSpaces();var r=Gx(e);return mh(e,i,r,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});ye({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n){var{parser:e,funcName:t}=n,i=ph(e.gullet.popToken()),r=e.gullet.popToken(),a=e.gullet.popToken();return mh(e,i,a,t==="\\\\globalfuture"),e.gullet.pushToken(a),e.gullet.pushToken(r),{type:"internal",mode:e.mode}}});var Hr=function(e,t,i){var r=Mt.math[e]&&Mt.math[e].replace,a=Oo(r||e,t,i);if(!a)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return a},qo=function(e,t,i,r){var a=i.havingBaseStyle(t),s=G.makeSpan(r.concat(a.sizingClasses(i)),[e],i),o=a.sizeMultiplier/i.sizeMultiplier;return s.height*=o,s.depth*=o,s.maxFontSize=a.sizeMultiplier,s},xh=function(e,t,i){var r=t.havingBaseStyle(i),a=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=pe(a),e.height-=a,e.depth+=a},Wx=function(e,t,i,r,a,s){var o=G.makeSymbol(e,"Main-Regular",a,r),l=qo(o,t,r,s);return i&&xh(l,r,t),l},qx=function(e,t,i,r){return G.makeSymbol(e,"Size"+t+"-Regular",i,r)},gh=function(e,t,i,r,a,s){var o=qx(e,t,a,r),l=qo(G.makeSpan(["delimsizing","size"+t],[o],r),ke.TEXT,r,s);return i&&xh(l,r,ke.TEXT),l},d0=function(e,t,i){var r;t==="Size1-Regular"?r="delim-size1":r="delim-size4";var a=G.makeSpan(["delimsizinginner",r],[G.makeSpan([],[G.makeSymbol(e,t,i)])]);return{type:"elem",elem:a}},f0=function(e,t,i){var r=ri["Size4-Regular"][e.charCodeAt(0)]?ri["Size4-Regular"][e.charCodeAt(0)][4]:ri["Size1-Regular"][e.charCodeAt(0)][4],a=new Zi("inner",Z2(e,Math.round(1e3*t))),s=new Di([a],{width:pe(r),height:pe(t),style:"width:"+pe(r),viewBox:"0 0 "+1e3*r+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),o=G.makeSvgSpan([],[s],i);return o.height=t,o.style.height=pe(t),o.style.width=pe(r),{type:"elem",elem:o}},yo=.008,za={type:"kern",size:-1*yo},Xx=["|","\\lvert","\\rvert","\\vert"],Yx=["\\|","\\lVert","\\rVert","\\Vert"],vh=function(e,t,i,r,a,s){var o,l,c,h,u="",p=0;o=c=h=e,l=null;var m="Size1-Regular";e==="\\uparrow"?c=h="⏐":e==="\\Uparrow"?c=h="‖":e==="\\downarrow"?o=c="⏐":e==="\\Downarrow"?o=c="‖":e==="\\updownarrow"?(o="\\uparrow",c="⏐",h="\\downarrow"):e==="\\Updownarrow"?(o="\\Uparrow",c="‖",h="\\Downarrow"):Xx.includes(e)?(c="∣",u="vert",p=333):Yx.includes(e)?(c="∥",u="doublevert",p=556):e==="["||e==="\\lbrack"?(o="⎡",c="⎢",h="⎣",m="Size4-Regular",u="lbrack",p=667):e==="]"||e==="\\rbrack"?(o="⎤",c="⎥",h="⎦",m="Size4-Regular",u="rbrack",p=667):e==="\\lfloor"||e==="⌊"?(c=o="⎢",h="⎣",m="Size4-Regular",u="lfloor",p=667):e==="\\lceil"||e==="⌈"?(o="⎡",c=h="⎢",m="Size4-Regular",u="lceil",p=667):e==="\\rfloor"||e==="⌋"?(c=o="⎥",h="⎦",m="Size4-Regular",u="rfloor",p=667):e==="\\rceil"||e==="⌉"?(o="⎤",c=h="⎥",m="Size4-Regular",u="rceil",p=667):e==="("||e==="\\lparen"?(o="⎛",c="⎜",h="⎝",m="Size4-Regular",u="lparen",p=875):e===")"||e==="\\rparen"?(o="⎞",c="⎟",h="⎠",m="Size4-Regular",u="rparen",p=875):e==="\\{"||e==="\\lbrace"?(o="⎧",l="⎨",h="⎩",c="⎪",m="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(o="⎫",l="⎬",h="⎭",c="⎪",m="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(o="⎧",h="⎩",c="⎪",m="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(o="⎫",h="⎭",c="⎪",m="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(o="⎧",h="⎭",c="⎪",m="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(o="⎫",h="⎩",c="⎪",m="Size4-Regular");var v=Hr(o,m,a),_=v.height+v.depth,g=Hr(c,m,a),f=g.height+g.depth,M=Hr(h,m,a),A=M.height+M.depth,R=0,L=1;if(l!==null){var C=Hr(l,m,a);R=C.height+C.depth,L=2}var N=_+A+R,O=Math.max(0,Math.ceil((t-N)/(L*f))),w=N+O*L*f,E=r.fontMetrics().axisHeight;i&&(E*=r.sizeMultiplier);var U=w/2-E,B=[];if(u.length>0){var X=w-_-A,K=Math.round(w*1e3),Z=j2(u,Math.round(X*1e3)),Q=new Zi(u,Z),se=(p/1e3).toFixed(3)+"em",J=(K/1e3).toFixed(3)+"em",de=new Di([Q],{width:se,height:J,viewBox:"0 0 "+p+" "+K}),he=G.makeSvgSpan([],[de],r);he.height=K/1e3,he.style.width=se,he.style.height=J,B.push({type:"elem",elem:he})}else{if(B.push(d0(h,m,a)),B.push(za),l===null){var De=w-_-A+2*yo;B.push(f0(c,De,r))}else{var We=(w-_-A-R)/2+2*yo;B.push(f0(c,We,r)),B.push(za),B.push(d0(l,m,a)),B.push(za),B.push(f0(c,We,r))}B.push(za),B.push(d0(o,m,a))}var st=r.havingBaseStyle(ke.TEXT),ft=G.makeVList({positionType:"bottom",positionData:U,children:B},st);return qo(G.makeSpan(["delimsizing","mult"],[ft],st),ke.TEXT,r,s)},p0=80,m0=.08,x0=function(e,t,i,r,a){var s=K2(e,r,i),o=new Zi(e,s),l=new Di([o],{width:"400em",height:pe(t),viewBox:"0 0 400000 "+i,preserveAspectRatio:"xMinYMin slice"});return G.makeSvgSpan(["hide-tail"],[l],a)},$x=function(e,t){var i=t.havingBaseSizing(),r=Sh("\\surd",e*i.sizeMultiplier,yh,i),a=i.sizeMultiplier,s=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,l=0,c=0,h=0,u;return r.type==="small"?(h=1e3+1e3*s+p0,e<1?a=1:e<1.4&&(a=.7),l=(1+s+m0)/a,c=(1+s)/a,o=x0("sqrtMain",l,h,s,t),o.style.minWidth="0.853em",u=.833/a):r.type==="large"?(h=(1e3+p0)*Vr[r.size],c=(Vr[r.size]+s)/a,l=(Vr[r.size]+s+m0)/a,o=x0("sqrtSize"+r.size,l,h,s,t),o.style.minWidth="1.02em",u=1/a):(l=e+s+m0,c=e+s,h=Math.floor(1e3*e+s)+p0,o=x0("sqrtTall",l,h,s,t),o.style.minWidth="0.742em",u=1.056),o.height=c,o.style.height=pe(l),{span:o,advanceWidth:u,ruleWidth:(t.fontMetrics().sqrtRuleThickness+s)*a}},_h=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],Kx=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],bh=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],Vr=[0,1.2,1.8,2.4,3],Zx=function(e,t,i,r,a){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),_h.includes(e)||bh.includes(e))return gh(e,t,!1,i,r,a);if(Kx.includes(e))return vh(e,Vr[t],!1,i,r,a);throw new ue("Illegal delimiter: '"+e+"'")},jx=[{type:"small",style:ke.SCRIPTSCRIPT},{type:"small",style:ke.SCRIPT},{type:"small",style:ke.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],Jx=[{type:"small",style:ke.SCRIPTSCRIPT},{type:"small",style:ke.SCRIPT},{type:"small",style:ke.TEXT},{type:"stack"}],yh=[{type:"small",style:ke.SCRIPTSCRIPT},{type:"small",style:ke.SCRIPT},{type:"small",style:ke.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Qx=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+e.type+"' here.")},Sh=function(e,t,i,r){for(var a=Math.min(2,3-r.style.size),s=a;s<i.length&&i[s].type!=="stack";s++){var o=Hr(e,Qx(i[s]),"math"),l=o.height+o.depth;if(i[s].type==="small"){var c=r.havingBaseStyle(i[s].style);l*=c.sizeMultiplier}if(l>t)return i[s]}return i[i.length-1]},Mh=function(e,t,i,r,a,s){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var o;bh.includes(e)?o=jx:_h.includes(e)?o=yh:o=Jx;var l=Sh(e,t,o,r);return l.type==="small"?Wx(e,l.style,i,r,a,s):l.type==="large"?gh(e,l.size,i,r,a,s):vh(e,t,i,r,a,s)},e4=function(e,t,i,r,a,s){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,l=901,c=5/r.fontMetrics().ptPerEm,h=Math.max(t-o,i+o),u=Math.max(h/500*l,2*h-c);return Mh(e,u,!0,r,a,s)},li={sqrtImage:$x,sizedDelim:Zx,sizeToMaxHeight:Vr,customSizedDelim:Mh,leftRightDelim:e4},Oc={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},t4=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function Ss(n,e){var t=bs(n);if(t&&t4.includes(t.text))return t;throw t?new ue("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",n):new ue("Invalid delimiter type '"+n.type+"'",n)}ye({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(n,e)=>{var t=Ss(e[0],n);return{type:"delimsizing",mode:n.parser.mode,size:Oc[n.funcName].size,mclass:Oc[n.funcName].mclass,delim:t.text}},htmlBuilder:(n,e)=>n.delim==="."?G.makeSpan([n.mclass]):li.sizedDelim(n.delim,n.size,e,n.mode,[n.mclass]),mathmlBuilder:n=>{var e=[];n.delim!=="."&&e.push(En(n.delim,n.mode));var t=new le.MathNode("mo",e);n.mclass==="mopen"||n.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var i=pe(li.sizeToMaxHeight[n.size]);return t.setAttribute("minsize",i),t.setAttribute("maxsize",i),t}});function Bc(n){if(!n.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ye({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var t=n.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new ue("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:n.parser.mode,delim:Ss(e[0],n).text,color:t}}});ye({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var t=Ss(e[0],n),i=n.parser;++i.leftrightDepth;var r=i.parseExpression(!1);--i.leftrightDepth,i.expect("\\right",!1);var a=Je(i.parseFunction(),"leftright-right");return{type:"leftright",mode:i.mode,body:r,left:t.text,right:a.delim,rightColor:a.color}},htmlBuilder:(n,e)=>{Bc(n);for(var t=Wt(n.body,e,!0,["mopen","mclose"]),i=0,r=0,a=!1,s=0;s<t.length;s++)t[s].isMiddle?a=!0:(i=Math.max(t[s].height,i),r=Math.max(t[s].depth,r));i*=e.sizeMultiplier,r*=e.sizeMultiplier;var o;if(n.left==="."?o=Zr(e,["mopen"]):o=li.leftRightDelim(n.left,i,r,e,n.mode,["mopen"]),t.unshift(o),a)for(var l=1;l<t.length;l++){var c=t[l],h=c.isMiddle;h&&(t[l]=li.leftRightDelim(h.delim,i,r,h.options,n.mode,[]))}var u;if(n.right===".")u=Zr(e,["mclose"]);else{var p=n.rightColor?e.withColor(n.rightColor):e;u=li.leftRightDelim(n.right,i,r,p,n.mode,["mclose"])}return t.push(u),G.makeSpan(["minner"],t,e)},mathmlBuilder:(n,e)=>{Bc(n);var t=un(n.body,e);if(n.left!=="."){var i=new le.MathNode("mo",[En(n.left,n.mode)]);i.setAttribute("fence","true"),t.unshift(i)}if(n.right!=="."){var r=new le.MathNode("mo",[En(n.right,n.mode)]);r.setAttribute("fence","true"),n.rightColor&&r.setAttribute("mathcolor",n.rightColor),t.push(r)}return Ho(t)}});ye({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var t=Ss(e[0],n);if(!n.parser.leftrightDepth)throw new ue("\\middle without preceding \\left",t);return{type:"middle",mode:n.parser.mode,delim:t.text}},htmlBuilder:(n,e)=>{var t;if(n.delim===".")t=Zr(e,[]);else{t=li.sizedDelim(n.delim,1,e,n.mode,[]);var i={delim:n.delim,options:e};t.isMiddle=i}return t},mathmlBuilder:(n,e)=>{var t=n.delim==="\\vert"||n.delim==="|"?En("|","text"):En(n.delim,n.mode),i=new le.MathNode("mo",[t]);return i.setAttribute("fence","true"),i.setAttribute("lspace","0.05em"),i.setAttribute("rspace","0.05em"),i}});var Xo=(n,e)=>{var t=G.wrapFragment(lt(n.body,e),e),i=n.label.slice(1),r=e.sizeMultiplier,a,s=0,o=ht.isCharacterBox(n.body);if(i==="sout")a=G.makeSpan(["stretchy","sout"]),a.height=e.fontMetrics().defaultRuleThickness/r,s=-.5*e.fontMetrics().xHeight;else if(i==="phase"){var l=Dt({number:.6,unit:"pt"},e),c=Dt({number:.35,unit:"ex"},e),h=e.havingBaseSizing();r=r/h.sizeMultiplier;var u=t.height+t.depth+l+c;t.style.paddingLeft=pe(u/2+l);var p=Math.floor(1e3*u*r),m=Y2(p),v=new Di([new Zi("phase",m)],{width:"400em",height:pe(p/1e3),viewBox:"0 0 400000 "+p,preserveAspectRatio:"xMinYMin slice"});a=G.makeSvgSpan(["hide-tail"],[v],e),a.style.height=pe(u),s=t.depth+l+c}else{/cancel/.test(i)?o||t.classes.push("cancel-pad"):i==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var _=0,g=0,f=0;/box/.test(i)?(f=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),_=e.fontMetrics().fboxsep+(i==="colorbox"?0:f),g=_):i==="angl"?(f=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),_=4*f,g=Math.max(0,.25-t.depth)):(_=o?.2:0,g=_),a=fi.encloseSpan(t,i,_,g,e),/fbox|boxed|fcolorbox/.test(i)?(a.style.borderStyle="solid",a.style.borderWidth=pe(f)):i==="angl"&&f!==.049&&(a.style.borderTopWidth=pe(f),a.style.borderRightWidth=pe(f)),s=t.depth+g,n.backgroundColor&&(a.style.backgroundColor=n.backgroundColor,n.borderColor&&(a.style.borderColor=n.borderColor))}var M;if(n.backgroundColor)M=G.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:s},{type:"elem",elem:t,shift:0}]},e);else{var A=/cancel|phase/.test(i)?["svg-align"]:[];M=G.makeVList({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:a,shift:s,wrapperClasses:A}]},e)}return/cancel/.test(i)&&(M.height=t.height,M.depth=t.depth),/cancel/.test(i)&&!o?G.makeSpan(["mord","cancel-lap"],[M],e):G.makeSpan(["mord"],[M],e)},Yo=(n,e)=>{var t=0,i=new le.MathNode(n.label.indexOf("colorbox")>-1?"mpadded":"menclose",[St(n.body,e)]);switch(n.label){case"\\cancel":i.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":i.setAttribute("notation","downdiagonalstrike");break;case"\\phase":i.setAttribute("notation","phasorangle");break;case"\\sout":i.setAttribute("notation","horizontalstrike");break;case"\\fbox":i.setAttribute("notation","box");break;case"\\angl":i.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,i.setAttribute("width","+"+2*t+"pt"),i.setAttribute("height","+"+2*t+"pt"),i.setAttribute("lspace",t+"pt"),i.setAttribute("voffset",t+"pt"),n.label==="\\fcolorbox"){var r=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);i.setAttribute("style","border: "+r+"em solid "+String(n.borderColor))}break;case"\\xcancel":i.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return n.backgroundColor&&i.setAttribute("mathbackground",n.backgroundColor),i};ye({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(n,e,t){var{parser:i,funcName:r}=n,a=Je(e[0],"color-token").color,s=e[1];return{type:"enclose",mode:i.mode,label:r,backgroundColor:a,body:s}},htmlBuilder:Xo,mathmlBuilder:Yo});ye({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(n,e,t){var{parser:i,funcName:r}=n,a=Je(e[0],"color-token").color,s=Je(e[1],"color-token").color,o=e[2];return{type:"enclose",mode:i.mode,label:r,backgroundColor:s,borderColor:a,body:o}},htmlBuilder:Xo,mathmlBuilder:Yo});ye({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(n,e){var{parser:t}=n;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});ye({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(n,e){var{parser:t,funcName:i}=n,r=e[0];return{type:"enclose",mode:t.mode,label:i,body:r}},htmlBuilder:Xo,mathmlBuilder:Yo});ye({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(n,e){var{parser:t}=n;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var wh={};function Vn(n){for(var{type:e,names:t,props:i,handler:r,htmlBuilder:a,mathmlBuilder:s}=n,o={type:e,numArgs:i.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:r},l=0;l<t.length;++l)wh[t[l]]=o;a&&(rs[e]=a),s&&(as[e]=s)}var Th={};function S(n,e){Th[n]=e}function Hc(n){var e=[];n.consumeSpaces();var t=n.fetch().text;for(t==="\\relax"&&(n.consume(),n.consumeSpaces(),t=n.fetch().text);t==="\\hline"||t==="\\hdashline";)n.consume(),e.push(t==="\\hdashline"),n.consumeSpaces(),t=n.fetch().text;return e}var Ms=n=>{var e=n.parser.settings;if(!e.displayMode)throw new ue("{"+n.envName+"} can be used only in display mode.")};function $o(n){if(n.indexOf("ed")===-1)return n.indexOf("*")===-1}function Li(n,e,t){var{hskipBeforeAndAfter:i,addJot:r,cols:a,arraystretch:s,colSeparationType:o,autoTag:l,singleRow:c,emptySingleRow:h,maxNumCols:u,leqno:p}=e;if(n.gullet.beginGroup(),c||n.gullet.macros.set("\\cr","\\\\\\relax"),!s){var m=n.gullet.expandMacroAsText("\\arraystretch");if(m==null)s=1;else if(s=parseFloat(m),!s||s<0)throw new ue("Invalid \\arraystretch: "+m)}n.gullet.beginGroup();var v=[],_=[v],g=[],f=[],M=l!=null?[]:void 0;function A(){l&&n.gullet.macros.set("\\@eqnsw","1",!0)}function R(){M&&(n.gullet.macros.get("\\df@tag")?(M.push(n.subparse([new gn("\\df@tag")])),n.gullet.macros.set("\\df@tag",void 0,!0)):M.push(!!l&&n.gullet.macros.get("\\@eqnsw")==="1"))}for(A(),f.push(Hc(n));;){var L=n.parseExpression(!1,c?"\\end":"\\\\");n.gullet.endGroup(),n.gullet.beginGroup(),L={type:"ordgroup",mode:n.mode,body:L},t&&(L={type:"styling",mode:n.mode,style:t,body:[L]}),v.push(L);var C=n.fetch().text;if(C==="&"){if(u&&v.length===u){if(c||o)throw new ue("Too many tab characters: &",n.nextToken);n.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}n.consume()}else if(C==="\\end"){R(),v.length===1&&L.type==="styling"&&L.body[0].body.length===0&&(_.length>1||!h)&&_.pop(),f.length<_.length+1&&f.push([]);break}else if(C==="\\\\"){n.consume();var N=void 0;n.gullet.future().text!==" "&&(N=n.parseSizeGroup(!0)),g.push(N?N.value:null),R(),f.push(Hc(n)),v=[],_.push(v),A()}else throw new ue("Expected & or \\\\ or \\cr or \\end",n.nextToken)}return n.gullet.endGroup(),n.gullet.endGroup(),{type:"array",mode:n.mode,addJot:r,arraystretch:s,body:_,cols:a,rowGaps:g,hskipBeforeAndAfter:i,hLinesBeforeRow:f,colSeparationType:o,tags:M,leqno:p}}function Ko(n){return n.slice(0,1)==="d"?"display":"text"}var Gn=function(e,t){var i,r,a=e.body.length,s=e.hLinesBeforeRow,o=0,l=new Array(a),c=[],h=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),u=1/t.fontMetrics().ptPerEm,p=5*u;if(e.colSeparationType&&e.colSeparationType==="small"){var m=t.havingStyle(ke.SCRIPT).sizeMultiplier;p=.2778*(m/t.sizeMultiplier)}var v=e.colSeparationType==="CD"?Dt({number:3,unit:"ex"},t):12*u,_=3*u,g=e.arraystretch*v,f=.7*g,M=.3*g,A=0;function R(dt){for(var Ee=0;Ee<dt.length;++Ee)Ee>0&&(A+=.25),c.push({pos:A,isDashed:dt[Ee]})}for(R(s[0]),i=0;i<e.body.length;++i){var L=e.body[i],C=f,N=M;o<L.length&&(o=L.length);var O=new Array(L.length);for(r=0;r<L.length;++r){var w=lt(L[r],t);N<w.depth&&(N=w.depth),C<w.height&&(C=w.height),O[r]=w}var E=e.rowGaps[i],U=0;E&&(U=Dt(E,t),U>0&&(U+=M,N<U&&(N=U),U=0)),e.addJot&&(N+=_),O.height=C,O.depth=N,A+=C,O.pos=A,A+=N+U,l[i]=O,R(s[i+1])}var B=A/2+t.fontMetrics().axisHeight,X=e.cols||[],K=[],Z,Q,se=[];if(e.tags&&e.tags.some(dt=>dt))for(i=0;i<a;++i){var J=l[i],de=J.pos-B,he=e.tags[i],De=void 0;he===!0?De=G.makeSpan(["eqn-num"],[],t):he===!1?De=G.makeSpan([],[],t):De=G.makeSpan([],Wt(he,t,!0),t),De.depth=J.depth,De.height=J.height,se.push({type:"elem",elem:De,shift:de})}for(r=0,Q=0;r<o||Q<X.length;++r,++Q){for(var We=X[Q]||{},st=!0;We.type==="separator";){if(st||(Z=G.makeSpan(["arraycolsep"],[]),Z.style.width=pe(t.fontMetrics().doubleRuleSep),K.push(Z)),We.separator==="|"||We.separator===":"){var ft=We.separator==="|"?"solid":"dashed",ot=G.makeSpan(["vertical-separator"],[],t);ot.style.height=pe(A),ot.style.borderRightWidth=pe(h),ot.style.borderRightStyle=ft,ot.style.margin="0 "+pe(-h/2);var ee=A-B;ee&&(ot.style.verticalAlign=pe(-ee)),K.push(ot)}else throw new ue("Invalid separator type: "+We.separator);Q++,We=X[Q]||{},st=!1}if(!(r>=o)){var ie=void 0;(r>0||e.hskipBeforeAndAfter)&&(ie=ht.deflt(We.pregap,p),ie!==0&&(Z=G.makeSpan(["arraycolsep"],[]),Z.style.width=pe(ie),K.push(Z)));var Se=[];for(i=0;i<a;++i){var qe=l[i],Pe=qe[r];if(Pe){var it=qe.pos-B;Pe.depth=qe.depth,Pe.height=qe.height,Se.push({type:"elem",elem:Pe,shift:it})}}Se=G.makeVList({positionType:"individualShift",children:Se},t),Se=G.makeSpan(["col-align-"+(We.align||"c")],[Se]),K.push(Se),(r<o-1||e.hskipBeforeAndAfter)&&(ie=ht.deflt(We.postgap,p),ie!==0&&(Z=G.makeSpan(["arraycolsep"],[]),Z.style.width=pe(ie),K.push(Z)))}}if(l=G.makeSpan(["mtable"],K),c.length>0){for(var Ht=G.makeLineSpan("hline",t,h),tt=G.makeLineSpan("hdashline",t,h),xt=[{type:"elem",elem:l,shift:0}];c.length>0;){var F=c.pop(),nt=F.pos-B;F.isDashed?xt.push({type:"elem",elem:tt,shift:nt}):xt.push({type:"elem",elem:Ht,shift:nt})}l=G.makeVList({positionType:"individualShift",children:xt},t)}if(se.length===0)return G.makeSpan(["mord"],[l],t);var Qe=G.makeVList({positionType:"individualShift",children:se},t);return Qe=G.makeSpan(["tag"],[Qe],t),G.makeFragment([l,Qe])},n4={c:"center ",l:"left ",r:"right "},Wn=function(e,t){for(var i=[],r=new le.MathNode("mtd",[],["mtr-glue"]),a=new le.MathNode("mtd",[],["mml-eqn-num"]),s=0;s<e.body.length;s++){for(var o=e.body[s],l=[],c=0;c<o.length;c++)l.push(new le.MathNode("mtd",[St(o[c],t)]));e.tags&&e.tags[s]&&(l.unshift(r),l.push(r),e.leqno?l.unshift(a):l.push(a)),i.push(new le.MathNode("mtr",l))}var h=new le.MathNode("mtable",i),u=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);h.setAttribute("rowspacing",pe(u));var p="",m="";if(e.cols&&e.cols.length>0){var v=e.cols,_="",g=!1,f=0,M=v.length;v[0].type==="separator"&&(p+="top ",f=1),v[v.length-1].type==="separator"&&(p+="bottom ",M-=1);for(var A=f;A<M;A++)v[A].type==="align"?(m+=n4[v[A].align],g&&(_+="none "),g=!0):v[A].type==="separator"&&g&&(_+=v[A].separator==="|"?"solid ":"dashed ",g=!1);h.setAttribute("columnalign",m.trim()),/[sd]/.test(_)&&h.setAttribute("columnlines",_.trim())}if(e.colSeparationType==="align"){for(var R=e.cols||[],L="",C=1;C<R.length;C++)L+=C%2?"0em ":"1em ";h.setAttribute("columnspacing",L.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var N="",O=e.hLinesBeforeRow;p+=O[0].length>0?"left ":"",p+=O[O.length-1].length>0?"right ":"";for(var w=1;w<O.length-1;w++)N+=O[w].length===0?"none ":O[w][0]?"dashed ":"solid ";return/[sd]/.test(N)&&h.setAttribute("rowlines",N.trim()),p!==""&&(h=new le.MathNode("menclose",[h]),h.setAttribute("notation",p.trim())),e.arraystretch&&e.arraystretch<1&&(h=new le.MathNode("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},Eh=function(e,t){e.envName.indexOf("ed")===-1&&Ms(e);var i=[],r=e.envName.indexOf("at")>-1?"alignat":"align",a=e.envName==="split",s=Li(e.parser,{cols:i,addJot:!0,autoTag:a?void 0:$o(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:a?2:void 0,leqno:e.parser.settings.leqno},"display"),o,l=0,c={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var h="",u=0;u<t[0].body.length;u++){var p=Je(t[0].body[u],"textord");h+=p.text}o=Number(h),l=o*2}var m=!l;s.body.forEach(function(f){for(var M=1;M<f.length;M+=2){var A=Je(f[M],"styling"),R=Je(A.body[0],"ordgroup");R.body.unshift(c)}if(m)l<f.length&&(l=f.length);else{var L=f.length/2;if(o<L)throw new ue("Too many math in a row: "+("expected "+o+", but got "+L),f[0])}});for(var v=0;v<l;++v){var _="r",g=0;v%2===1?_="l":v>0&&m&&(g=1),i[v]={type:"align",align:_,pregap:g,postgap:0}}return s.colSeparationType=m?"align":"alignat",s};Vn({type:"array",names:["array","darray"],props:{numArgs:1},handler(n,e){var t=bs(e[0]),i=t?[e[0]]:Je(e[0],"ordgroup").body,r=i.map(function(s){var o=Go(s),l=o.text;if("lcr".indexOf(l)!==-1)return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new ue("Unknown column alignment: "+l,s)}),a={cols:r,hskipBeforeAndAfter:!0,maxNumCols:r.length};return Li(n.parser,a,Ko(n.envName))},htmlBuilder:Gn,mathmlBuilder:Wn});Vn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(n){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[n.envName.replace("*","")],t="c",i={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(n.envName.charAt(n.envName.length-1)==="*"){var r=n.parser;if(r.consumeSpaces(),r.fetch().text==="["){if(r.consume(),r.consumeSpaces(),t=r.fetch().text,"lcr".indexOf(t)===-1)throw new ue("Expected l or c or r",r.nextToken);r.consume(),r.consumeSpaces(),r.expect("]"),r.consume(),i.cols=[{type:"align",align:t}]}}var a=Li(n.parser,i,Ko(n.envName)),s=Math.max(0,...a.body.map(o=>o.length));return a.cols=new Array(s).fill({type:"align",align:t}),e?{type:"leftright",mode:n.mode,body:[a],left:e[0],right:e[1],rightColor:void 0}:a},htmlBuilder:Gn,mathmlBuilder:Wn});Vn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(n){var e={arraystretch:.5},t=Li(n.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:Gn,mathmlBuilder:Wn});Vn({type:"array",names:["subarray"],props:{numArgs:1},handler(n,e){var t=bs(e[0]),i=t?[e[0]]:Je(e[0],"ordgroup").body,r=i.map(function(s){var o=Go(s),l=o.text;if("lc".indexOf(l)!==-1)return{type:"align",align:l};throw new ue("Unknown column alignment: "+l,s)});if(r.length>1)throw new ue("{subarray} can contain only one column");var a={cols:r,hskipBeforeAndAfter:!1,arraystretch:.5};if(a=Li(n.parser,a,"script"),a.body.length>0&&a.body[0].length>1)throw new ue("{subarray} can contain only one column");return a},htmlBuilder:Gn,mathmlBuilder:Wn});Vn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(n){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=Li(n.parser,e,Ko(n.envName));return{type:"leftright",mode:n.mode,body:[t],left:n.envName.indexOf("r")>-1?".":"\\{",right:n.envName.indexOf("r")>-1?"\\}":".",rightColor:void 0}},htmlBuilder:Gn,mathmlBuilder:Wn});Vn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Eh,htmlBuilder:Gn,mathmlBuilder:Wn});Vn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(n){["gather","gather*"].includes(n.envName)&&Ms(n);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:$o(n.envName),emptySingleRow:!0,leqno:n.parser.settings.leqno};return Li(n.parser,e,"display")},htmlBuilder:Gn,mathmlBuilder:Wn});Vn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Eh,htmlBuilder:Gn,mathmlBuilder:Wn});Vn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(n){Ms(n);var e={autoTag:$o(n.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:n.parser.settings.leqno};return Li(n.parser,e,"display")},htmlBuilder:Gn,mathmlBuilder:Wn});Vn({type:"array",names:["CD"],props:{numArgs:0},handler(n){return Ms(n),Vx(n.parser)},htmlBuilder:Gn,mathmlBuilder:Wn});S("\\nonumber","\\gdef\\@eqnsw{0}");S("\\notag","\\nonumber");ye({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(n,e){throw new ue(n.funcName+" valid only within array environment")}});var Vc=wh;ye({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(n,e){var{parser:t,funcName:i}=n,r=e[0];if(r.type!=="ordgroup")throw new ue("Invalid environment name",r);for(var a="",s=0;s<r.body.length;++s)a+=Je(r.body[s],"textord").text;if(i==="\\begin"){if(!Vc.hasOwnProperty(a))throw new ue("No such environment: "+a,r);var o=Vc[a],{args:l,optArgs:c}=t.parseArguments("\\begin{"+a+"}",o),h={mode:t.mode,envName:a,parser:t},u=o.handler(h,l,c);t.expect("\\end",!1);var p=t.nextToken,m=Je(t.parseFunction(),"environment");if(m.name!==a)throw new ue("Mismatch: \\begin{"+a+"} matched by \\end{"+m.name+"}",p);return u}return{type:"environment",mode:t.mode,name:a,nameGroup:r}}});var Ah=(n,e)=>{var t=n.font,i=e.withFont(t);return lt(n.body,i)},Ch=(n,e)=>{var t=n.font,i=e.withFont(t);return St(n.body,i)},Gc={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};ye({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=ss(e[0]),a=i;return a in Gc&&(a=Gc[a]),{type:"font",mode:t.mode,font:a.slice(1),body:r}},htmlBuilder:Ah,mathmlBuilder:Ch});ye({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(n,e)=>{var{parser:t}=n,i=e[0],r=ht.isCharacterBox(i);return{type:"mclass",mode:t.mode,mclass:ys(i),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:i}],isCharacterBox:r}}});ye({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(n,e)=>{var{parser:t,funcName:i,breakOnTokenText:r}=n,{mode:a}=t,s=t.parseExpression(!0,r),o="math"+i.slice(1);return{type:"font",mode:a,font:o,body:{type:"ordgroup",mode:t.mode,body:s}}},htmlBuilder:Ah,mathmlBuilder:Ch});var Rh=(n,e)=>{var t=e;return n==="display"?t=t.id>=ke.SCRIPT.id?t.text():ke.DISPLAY:n==="text"&&t.size===ke.DISPLAY.size?t=ke.TEXT:n==="script"?t=ke.SCRIPT:n==="scriptscript"&&(t=ke.SCRIPTSCRIPT),t},Zo=(n,e)=>{var t=Rh(n.size,e.style),i=t.fracNum(),r=t.fracDen(),a;a=e.havingStyle(i);var s=lt(n.numer,a,e);if(n.continued){var o=8.5/e.fontMetrics().ptPerEm,l=3.5/e.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}a=e.havingStyle(r);var c=lt(n.denom,a,e),h,u,p;n.hasBarLine?(n.barSize?(u=Dt(n.barSize,e),h=G.makeLineSpan("frac-line",e,u)):h=G.makeLineSpan("frac-line",e),u=h.height,p=h.height):(h=null,u=0,p=e.fontMetrics().defaultRuleThickness);var m,v,_;t.size===ke.DISPLAY.size||n.size==="display"?(m=e.fontMetrics().num1,u>0?v=3*p:v=7*p,_=e.fontMetrics().denom1):(u>0?(m=e.fontMetrics().num2,v=p):(m=e.fontMetrics().num3,v=3*p),_=e.fontMetrics().denom2);var g;if(h){var M=e.fontMetrics().axisHeight;m-s.depth-(M+.5*u)<v&&(m+=v-(m-s.depth-(M+.5*u))),M-.5*u-(c.height-_)<v&&(_+=v-(M-.5*u-(c.height-_)));var A=-(M-.5*u);g=G.makeVList({positionType:"individualShift",children:[{type:"elem",elem:c,shift:_},{type:"elem",elem:h,shift:A},{type:"elem",elem:s,shift:-m}]},e)}else{var f=m-s.depth-(c.height-_);f<v&&(m+=.5*(v-f),_+=.5*(v-f)),g=G.makeVList({positionType:"individualShift",children:[{type:"elem",elem:c,shift:_},{type:"elem",elem:s,shift:-m}]},e)}a=e.havingStyle(t),g.height*=a.sizeMultiplier/e.sizeMultiplier,g.depth*=a.sizeMultiplier/e.sizeMultiplier;var R;t.size===ke.DISPLAY.size?R=e.fontMetrics().delim1:t.size===ke.SCRIPTSCRIPT.size?R=e.havingStyle(ke.SCRIPT).fontMetrics().delim2:R=e.fontMetrics().delim2;var L,C;return n.leftDelim==null?L=Zr(e,["mopen"]):L=li.customSizedDelim(n.leftDelim,R,!0,e.havingStyle(t),n.mode,["mopen"]),n.continued?C=G.makeSpan([]):n.rightDelim==null?C=Zr(e,["mclose"]):C=li.customSizedDelim(n.rightDelim,R,!0,e.havingStyle(t),n.mode,["mclose"]),G.makeSpan(["mord"].concat(a.sizingClasses(e)),[L,G.makeSpan(["mfrac"],[g]),C],e)},jo=(n,e)=>{var t=new le.MathNode("mfrac",[St(n.numer,e),St(n.denom,e)]);if(!n.hasBarLine)t.setAttribute("linethickness","0px");else if(n.barSize){var i=Dt(n.barSize,e);t.setAttribute("linethickness",pe(i))}var r=Rh(n.size,e.style);if(r.size!==e.style.size){t=new le.MathNode("mstyle",[t]);var a=r.size===ke.DISPLAY.size?"true":"false";t.setAttribute("displaystyle",a),t.setAttribute("scriptlevel","0")}if(n.leftDelim!=null||n.rightDelim!=null){var s=[];if(n.leftDelim!=null){var o=new le.MathNode("mo",[new le.TextNode(n.leftDelim.replace("\\",""))]);o.setAttribute("fence","true"),s.push(o)}if(s.push(t),n.rightDelim!=null){var l=new le.MathNode("mo",[new le.TextNode(n.rightDelim.replace("\\",""))]);l.setAttribute("fence","true"),s.push(l)}return Ho(s)}return t};ye({type:"genfrac",names:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0],a=e[1],s,o=null,l=null,c="auto";switch(i){case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,o="(",l=")";break;case"\\\\bracefrac":s=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":s=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}switch(i){case"\\dfrac":case"\\dbinom":c="display";break;case"\\tfrac":case"\\tbinom":c="text";break}return{type:"genfrac",mode:t.mode,continued:!1,numer:r,denom:a,hasBarLine:s,leftDelim:o,rightDelim:l,size:c,barSize:null}},htmlBuilder:Zo,mathmlBuilder:jo});ye({type:"genfrac",names:["\\cfrac"],props:{numArgs:2},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0],a=e[1];return{type:"genfrac",mode:t.mode,continued:!0,numer:r,denom:a,hasBarLine:!0,leftDelim:null,rightDelim:null,size:"display",barSize:null}}});ye({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(n){var{parser:e,funcName:t,token:i}=n,r;switch(t){case"\\over":r="\\frac";break;case"\\choose":r="\\binom";break;case"\\atop":r="\\\\atopfrac";break;case"\\brace":r="\\\\bracefrac";break;case"\\brack":r="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:r,token:i}}});var Wc=["display","text","script","scriptscript"],qc=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};ye({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(n,e){var{parser:t}=n,i=e[4],r=e[5],a=ss(e[0]),s=a.type==="atom"&&a.family==="open"?qc(a.text):null,o=ss(e[1]),l=o.type==="atom"&&o.family==="close"?qc(o.text):null,c=Je(e[2],"size"),h,u=null;c.isBlank?h=!0:(u=c.value,h=u.number>0);var p="auto",m=e[3];if(m.type==="ordgroup"){if(m.body.length>0){var v=Je(m.body[0],"textord");p=Wc[Number(v.text)]}}else m=Je(m,"textord"),p=Wc[Number(m.text)];return{type:"genfrac",mode:t.mode,numer:i,denom:r,continued:!1,hasBarLine:h,barSize:u,leftDelim:s,rightDelim:l,size:p}},htmlBuilder:Zo,mathmlBuilder:jo});ye({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(n,e){var{parser:t,funcName:i,token:r}=n;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:Je(e[0],"size").value,token:r}}});ye({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0],a=P2(Je(e[1],"infix").size),s=e[2],o=a.number>0;return{type:"genfrac",mode:t.mode,numer:r,denom:s,continued:!1,hasBarLine:o,barSize:a,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:Zo,mathmlBuilder:jo});var Dh=(n,e)=>{var t=e.style,i,r;n.type==="supsub"?(i=n.sup?lt(n.sup,e.havingStyle(t.sup()),e):lt(n.sub,e.havingStyle(t.sub()),e),r=Je(n.base,"horizBrace")):r=Je(n,"horizBrace");var a=lt(r.base,e.havingBaseStyle(ke.DISPLAY)),s=fi.svgSpan(r,e),o;if(r.isOver?(o=G.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:s}]},e),o.children[0].children[0].children[1].classes.push("svg-align")):(o=G.makeVList({positionType:"bottom",positionData:a.depth+.1+s.height,children:[{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:a}]},e),o.children[0].children[0].children[0].classes.push("svg-align")),i){var l=G.makeSpan(["mord",r.isOver?"mover":"munder"],[o],e);r.isOver?o=G.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:i}]},e):o=G.makeVList({positionType:"bottom",positionData:l.depth+.2+i.height+i.depth,children:[{type:"elem",elem:i},{type:"kern",size:.2},{type:"elem",elem:l}]},e)}return G.makeSpan(["mord",r.isOver?"mover":"munder"],[o],e)},i4=(n,e)=>{var t=fi.mathMLnode(n.label);return new le.MathNode(n.isOver?"mover":"munder",[St(n.base,e),t])};ye({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(n,e){var{parser:t,funcName:i}=n;return{type:"horizBrace",mode:t.mode,label:i,isOver:/^\\over/.test(i),base:e[0]}},htmlBuilder:Dh,mathmlBuilder:i4});ye({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,i=e[1],r=Je(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:r})?{type:"href",mode:t.mode,href:r,body:kt(i)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(n,e)=>{var t=Wt(n.body,e,!1);return G.makeAnchor(n.href,[],t,e)},mathmlBuilder:(n,e)=>{var t=Pi(n.body,e);return t instanceof mn||(t=new mn("mrow",[t])),t.setAttribute("href",n.href),t}});ye({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,i=Je(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:i}))return t.formatUnsupportedCmd("\\url");for(var r=[],a=0;a<i.length;a++){var s=i[a];s==="~"&&(s="\\textasciitilde"),r.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:t.mode,font:"\\texttt",body:r};return{type:"href",mode:t.mode,href:i,body:kt(o)}}});ye({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(n,e){var{parser:t}=n;return{type:"hbox",mode:t.mode,body:kt(e[0])}},htmlBuilder(n,e){var t=Wt(n.body,e,!1);return G.makeFragment(t)},mathmlBuilder(n,e){return new le.MathNode("mrow",un(n.body,e))}});ye({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(n,e)=>{var{parser:t,funcName:i,token:r}=n,a=Je(e[0],"raw").string,s=e[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(i){case"\\htmlClass":l.class=a,o={command:"\\htmlClass",class:a};break;case"\\htmlId":l.id=a,o={command:"\\htmlId",id:a};break;case"\\htmlStyle":l.style=a,o={command:"\\htmlStyle",style:a};break;case"\\htmlData":{for(var c=a.split(","),h=0;h<c.length;h++){var u=c[h].split("=");if(u.length!==2)throw new ue("Error parsing key-value for \\htmlData");l["data-"+u[0].trim()]=u[1].trim()}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(o)?{type:"html",mode:t.mode,attributes:l,body:kt(s)}:t.formatUnsupportedCmd(i)},htmlBuilder:(n,e)=>{var t=Wt(n.body,e,!1),i=["enclosing"];n.attributes.class&&i.push(...n.attributes.class.trim().split(/\s+/));var r=G.makeSpan(i,t,e);for(var a in n.attributes)a!=="class"&&n.attributes.hasOwnProperty(a)&&r.setAttribute(a,n.attributes[a]);return r},mathmlBuilder:(n,e)=>Pi(n.body,e)});ye({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n;return{type:"htmlmathml",mode:t.mode,html:kt(e[0]),mathml:kt(e[1])}},htmlBuilder:(n,e)=>{var t=Wt(n.html,e,!1);return G.makeFragment(t)},mathmlBuilder:(n,e)=>Pi(n.mathml,e)});var g0=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new ue("Invalid size: '"+e+"' in \\includegraphics");var i={number:+(t[1]+t[2]),unit:t[3]};if(!Zu(i))throw new ue("Invalid unit: '"+i.unit+"' in \\includegraphics.");return i};ye({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(n,e,t)=>{var{parser:i}=n,r={number:0,unit:"em"},a={number:.9,unit:"em"},s={number:0,unit:"em"},o="";if(t[0])for(var l=Je(t[0],"raw").string,c=l.split(","),h=0;h<c.length;h++){var u=c[h].split("=");if(u.length===2){var p=u[1].trim();switch(u[0].trim()){case"alt":o=p;break;case"width":r=g0(p);break;case"height":a=g0(p);break;case"totalheight":s=g0(p);break;default:throw new ue("Invalid key: '"+u[0]+"' in \\includegraphics.")}}}var m=Je(e[0],"url").url;return o===""&&(o=m,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),i.settings.isTrusted({command:"\\includegraphics",url:m})?{type:"includegraphics",mode:i.mode,alt:o,width:r,height:a,totalheight:s,src:m}:i.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(n,e)=>{var t=Dt(n.height,e),i=0;n.totalheight.number>0&&(i=Dt(n.totalheight,e)-t);var r=0;n.width.number>0&&(r=Dt(n.width,e));var a={height:pe(t+i)};r>0&&(a.width=pe(r)),i>0&&(a.verticalAlign=pe(-i));var s=new nx(n.src,n.alt,a);return s.height=t,s.depth=i,s},mathmlBuilder:(n,e)=>{var t=new le.MathNode("mglyph",[]);t.setAttribute("alt",n.alt);var i=Dt(n.height,e),r=0;if(n.totalheight.number>0&&(r=Dt(n.totalheight,e)-i,t.setAttribute("valign",pe(-r))),t.setAttribute("height",pe(i+r)),n.width.number>0){var a=Dt(n.width,e);t.setAttribute("width",pe(a))}return t.setAttribute("src",n.src),t}});ye({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(n,e){var{parser:t,funcName:i}=n,r=Je(e[0],"size");if(t.settings.strict){var a=i[1]==="m",s=r.value.unit==="mu";a?(s||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" supports only mu units, "+("not "+r.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" works only in math mode")):s&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:r.value}},htmlBuilder(n,e){return G.makeGlue(n.dimension,e)},mathmlBuilder(n,e){var t=Dt(n.dimension,e);return new le.SpaceNode(t)}});ye({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0];return{type:"lap",mode:t.mode,alignment:i.slice(5),body:r}},htmlBuilder:(n,e)=>{var t;n.alignment==="clap"?(t=G.makeSpan([],[lt(n.body,e)]),t=G.makeSpan(["inner"],[t],e)):t=G.makeSpan(["inner"],[lt(n.body,e)]);var i=G.makeSpan(["fix"],[]),r=G.makeSpan([n.alignment],[t,i],e),a=G.makeSpan(["strut"]);return a.style.height=pe(r.height+r.depth),r.depth&&(a.style.verticalAlign=pe(-r.depth)),r.children.unshift(a),r=G.makeSpan(["thinbox"],[r],e),G.makeSpan(["mord","vbox"],[r],e)},mathmlBuilder:(n,e)=>{var t=new le.MathNode("mpadded",[St(n.body,e)]);if(n.alignment!=="rlap"){var i=n.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",i+"width")}return t.setAttribute("width","0px"),t}});ye({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(n,e){var{funcName:t,parser:i}=n,r=i.mode;i.switchMode("math");var a=t==="\\("?"\\)":"$",s=i.parseExpression(!1,a);return i.expect(a),i.switchMode(r),{type:"styling",mode:i.mode,style:"text",body:s}}});ye({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(n,e){throw new ue("Mismatched "+n.funcName)}});var Xc=(n,e)=>{switch(e.style.size){case ke.DISPLAY.size:return n.display;case ke.TEXT.size:return n.text;case ke.SCRIPT.size:return n.script;case ke.SCRIPTSCRIPT.size:return n.scriptscript;default:return n.text}};ye({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(n,e)=>{var{parser:t}=n;return{type:"mathchoice",mode:t.mode,display:kt(e[0]),text:kt(e[1]),script:kt(e[2]),scriptscript:kt(e[3])}},htmlBuilder:(n,e)=>{var t=Xc(n,e),i=Wt(t,e,!1);return G.makeFragment(i)},mathmlBuilder:(n,e)=>{var t=Xc(n,e);return Pi(t,e)}});var Ph=(n,e,t,i,r,a,s)=>{n=G.makeSpan([],[n]);var o=t&&ht.isCharacterBox(t),l,c;if(e){var h=lt(e,i.havingStyle(r.sup()),i);c={elem:h,kern:Math.max(i.fontMetrics().bigOpSpacing1,i.fontMetrics().bigOpSpacing3-h.depth)}}if(t){var u=lt(t,i.havingStyle(r.sub()),i);l={elem:u,kern:Math.max(i.fontMetrics().bigOpSpacing2,i.fontMetrics().bigOpSpacing4-u.height)}}var p;if(c&&l){var m=i.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+n.depth+s;p=G.makeVList({positionType:"bottom",positionData:m,children:[{type:"kern",size:i.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:pe(-a)},{type:"kern",size:l.kern},{type:"elem",elem:n},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:pe(a)},{type:"kern",size:i.fontMetrics().bigOpSpacing5}]},i)}else if(l){var v=n.height-s;p=G.makeVList({positionType:"top",positionData:v,children:[{type:"kern",size:i.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:pe(-a)},{type:"kern",size:l.kern},{type:"elem",elem:n}]},i)}else if(c){var _=n.depth+s;p=G.makeVList({positionType:"bottom",positionData:_,children:[{type:"elem",elem:n},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:pe(a)},{type:"kern",size:i.fontMetrics().bigOpSpacing5}]},i)}else return n;var g=[p];if(l&&a!==0&&!o){var f=G.makeSpan(["mspace"],[],i);f.style.marginRight=pe(a),g.unshift(f)}return G.makeSpan(["mop","op-limits"],g,i)},Lh=["\\smallint"],Pr=(n,e)=>{var t,i,r=!1,a;n.type==="supsub"?(t=n.sup,i=n.sub,a=Je(n.base,"op"),r=!0):a=Je(n,"op");var s=e.style,o=!1;s.size===ke.DISPLAY.size&&a.symbol&&!Lh.includes(a.name)&&(o=!0);var l;if(a.symbol){var c=o?"Size2-Regular":"Size1-Regular",h="";if((a.name==="\\oiint"||a.name==="\\oiiint")&&(h=a.name.slice(1),a.name=h==="oiint"?"\\iint":"\\iiint"),l=G.makeSymbol(a.name,c,"math",e,["mop","op-symbol",o?"large-op":"small-op"]),h.length>0){var u=l.italic,p=G.staticSvg(h+"Size"+(o?"2":"1"),e);l=G.makeVList({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:p,shift:o?.08:0}]},e),a.name="\\"+h,l.classes.unshift("mop"),l.italic=u}}else if(a.body){var m=Wt(a.body,e,!0);m.length===1&&m[0]instanceof Un?(l=m[0],l.classes[0]="mop"):l=G.makeSpan(["mop"],m,e)}else{for(var v=[],_=1;_<a.name.length;_++)v.push(G.mathsym(a.name[_],a.mode,e));l=G.makeSpan(["mop"],v,e)}var g=0,f=0;return(l instanceof Un||a.name==="\\oiint"||a.name==="\\oiiint")&&!a.suppressBaseShift&&(g=(l.height-l.depth)/2-e.fontMetrics().axisHeight,f=l.italic),r?Ph(l,t,i,e,s,f,g):(g&&(l.style.position="relative",l.style.top=pe(g)),l)},na=(n,e)=>{var t;if(n.symbol)t=new mn("mo",[En(n.name,n.mode)]),Lh.includes(n.name)&&t.setAttribute("largeop","false");else if(n.body)t=new mn("mo",un(n.body,e));else{t=new mn("mi",[new Bn(n.name.slice(1))]);var i=new mn("mo",[En("⁡","text")]);n.parentIsSupSub?t=new mn("mrow",[t,i]):t=lh([t,i])}return t},r4={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ye({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=i;return r.length===1&&(r=r4[r]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Pr,mathmlBuilder:na});ye({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(n,e)=>{var{parser:t}=n,i=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:kt(i)}},htmlBuilder:Pr,mathmlBuilder:na});var a4={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ye({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(n){var{parser:e,funcName:t}=n;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Pr,mathmlBuilder:na});ye({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(n){var{parser:e,funcName:t}=n;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Pr,mathmlBuilder:na});ye({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0},handler(n){var{parser:e,funcName:t}=n,i=t;return i.length===1&&(i=a4[i]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:Pr,mathmlBuilder:na});var Ih=(n,e)=>{var t,i,r=!1,a;n.type==="supsub"?(t=n.sup,i=n.sub,a=Je(n.base,"operatorname"),r=!0):a=Je(n,"operatorname");var s;if(a.body.length>0){for(var o=a.body.map(u=>{var p=u.text;return typeof p=="string"?{type:"textord",mode:u.mode,text:p}:u}),l=Wt(o,e.withFont("mathrm"),!0),c=0;c<l.length;c++){var h=l[c];h instanceof Un&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=G.makeSpan(["mop"],l,e)}else s=G.makeSpan(["mop"],[],e);return r?Ph(s,t,i,e,e.style,0,0):s},s4=(n,e)=>{for(var t=un(n.body,e.withFont("mathrm")),i=!0,r=0;r<t.length;r++){var a=t[r];if(!(a instanceof le.SpaceNode))if(a instanceof le.MathNode)switch(a.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var s=a.children[0];a.children.length===1&&s instanceof le.TextNode?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):i=!1;break}default:i=!1}else i=!1}if(i){var o=t.map(h=>h.toText()).join("");t=[new le.TextNode(o)]}var l=new le.MathNode("mi",t);l.setAttribute("mathvariant","normal");var c=new le.MathNode("mo",[En("⁡","text")]);return n.parentIsSupSub?new le.MathNode("mrow",[l,c]):le.newDocumentFragment([l,c])};ye({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(n,e)=>{var{parser:t,funcName:i}=n,r=e[0];return{type:"operatorname",mode:t.mode,body:kt(r),alwaysHandleSupSub:i==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Ih,mathmlBuilder:s4});S("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");ji({type:"ordgroup",htmlBuilder(n,e){return n.semisimple?G.makeFragment(Wt(n.body,e,!1)):G.makeSpan(["mord"],Wt(n.body,e,!0),e)},mathmlBuilder(n,e){return Pi(n.body,e,!0)}});ye({type:"overline",names:["\\overline"],props:{numArgs:1},handler(n,e){var{parser:t}=n,i=e[0];return{type:"overline",mode:t.mode,body:i}},htmlBuilder(n,e){var t=lt(n.body,e.havingCrampedStyle()),i=G.makeLineSpan("overline-line",e),r=e.fontMetrics().defaultRuleThickness,a=G.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*r},{type:"elem",elem:i},{type:"kern",size:r}]},e);return G.makeSpan(["mord","overline"],[a],e)},mathmlBuilder(n,e){var t=new le.MathNode("mo",[new le.TextNode("‾")]);t.setAttribute("stretchy","true");var i=new le.MathNode("mover",[St(n.body,e),t]);return i.setAttribute("accent","true"),i}});ye({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,i=e[0];return{type:"phantom",mode:t.mode,body:kt(i)}},htmlBuilder:(n,e)=>{var t=Wt(n.body,e.withPhantom(),!1);return G.makeFragment(t)},mathmlBuilder:(n,e)=>{var t=un(n.body,e);return new le.MathNode("mphantom",t)}});ye({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,i=e[0];return{type:"hphantom",mode:t.mode,body:i}},htmlBuilder:(n,e)=>{var t=G.makeSpan([],[lt(n.body,e.withPhantom())]);if(t.height=0,t.depth=0,t.children)for(var i=0;i<t.children.length;i++)t.children[i].height=0,t.children[i].depth=0;return t=G.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t}]},e),G.makeSpan(["mord"],[t],e)},mathmlBuilder:(n,e)=>{var t=un(kt(n.body),e),i=new le.MathNode("mphantom",t),r=new le.MathNode("mpadded",[i]);return r.setAttribute("height","0px"),r.setAttribute("depth","0px"),r}});ye({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(n,e)=>{var{parser:t}=n,i=e[0];return{type:"vphantom",mode:t.mode,body:i}},htmlBuilder:(n,e)=>{var t=G.makeSpan(["inner"],[lt(n.body,e.withPhantom())]),i=G.makeSpan(["fix"],[]);return G.makeSpan(["mord","rlap"],[t,i],e)},mathmlBuilder:(n,e)=>{var t=un(kt(n.body),e),i=new le.MathNode("mphantom",t),r=new le.MathNode("mpadded",[i]);return r.setAttribute("width","0px"),r}});ye({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(n,e){var{parser:t}=n,i=Je(e[0],"size").value,r=e[1];return{type:"raisebox",mode:t.mode,dy:i,body:r}},htmlBuilder(n,e){var t=lt(n.body,e),i=Dt(n.dy,e);return G.makeVList({positionType:"shift",positionData:-i,children:[{type:"elem",elem:t}]},e)},mathmlBuilder(n,e){var t=new le.MathNode("mpadded",[St(n.body,e)]),i=n.dy.number+n.dy.unit;return t.setAttribute("voffset",i),t}});ye({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(n){var{parser:e}=n;return{type:"internal",mode:e.mode}}});ye({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(n,e,t){var{parser:i}=n,r=t[0],a=Je(e[0],"size"),s=Je(e[1],"size");return{type:"rule",mode:i.mode,shift:r&&Je(r,"size").value,width:a.value,height:s.value}},htmlBuilder(n,e){var t=G.makeSpan(["mord","rule"],[],e),i=Dt(n.width,e),r=Dt(n.height,e),a=n.shift?Dt(n.shift,e):0;return t.style.borderRightWidth=pe(i),t.style.borderTopWidth=pe(r),t.style.bottom=pe(a),t.width=i,t.height=r+a,t.depth=-a,t.maxFontSize=r*1.125*e.sizeMultiplier,t},mathmlBuilder(n,e){var t=Dt(n.width,e),i=Dt(n.height,e),r=n.shift?Dt(n.shift,e):0,a=e.color&&e.getColor()||"black",s=new le.MathNode("mspace");s.setAttribute("mathbackground",a),s.setAttribute("width",pe(t)),s.setAttribute("height",pe(i));var o=new le.MathNode("mpadded",[s]);return r>=0?o.setAttribute("height",pe(r)):(o.setAttribute("height",pe(r)),o.setAttribute("depth",pe(-r))),o.setAttribute("voffset",pe(r)),o}});function Nh(n,e,t){for(var i=Wt(n,e,!1),r=e.sizeMultiplier/t.sizeMultiplier,a=0;a<i.length;a++){var s=i[a].classes.indexOf("sizing");s<0?Array.prototype.push.apply(i[a].classes,e.sizingClasses(t)):i[a].classes[s+1]==="reset-size"+e.size&&(i[a].classes[s+1]="reset-size"+t.size),i[a].height*=r,i[a].depth*=r}return G.makeFragment(i)}var Yc=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],o4=(n,e)=>{var t=e.havingSize(n.size);return Nh(n.body,t,e)};ye({type:"sizing",names:Yc,props:{numArgs:0,allowedInText:!0},handler:(n,e)=>{var{breakOnTokenText:t,funcName:i,parser:r}=n,a=r.parseExpression(!1,t);return{type:"sizing",mode:r.mode,size:Yc.indexOf(i)+1,body:a}},htmlBuilder:o4,mathmlBuilder:(n,e)=>{var t=e.havingSize(n.size),i=un(n.body,t),r=new le.MathNode("mstyle",i);return r.setAttribute("mathsize",pe(t.sizeMultiplier)),r}});ye({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(n,e,t)=>{var{parser:i}=n,r=!1,a=!1,s=t[0]&&Je(t[0],"ordgroup");if(s)for(var o="",l=0;l<s.body.length;++l){var c=s.body[l];if(o=c.text,o==="t")r=!0;else if(o==="b")a=!0;else{r=!1,a=!1;break}}else r=!0,a=!0;var h=e[0];return{type:"smash",mode:i.mode,body:h,smashHeight:r,smashDepth:a}},htmlBuilder:(n,e)=>{var t=G.makeSpan([],[lt(n.body,e)]);if(!n.smashHeight&&!n.smashDepth)return t;if(n.smashHeight&&(t.height=0,t.children))for(var i=0;i<t.children.length;i++)t.children[i].height=0;if(n.smashDepth&&(t.depth=0,t.children))for(var r=0;r<t.children.length;r++)t.children[r].depth=0;var a=G.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t}]},e);return G.makeSpan(["mord"],[a],e)},mathmlBuilder:(n,e)=>{var t=new le.MathNode("mpadded",[St(n.body,e)]);return n.smashHeight&&t.setAttribute("height","0px"),n.smashDepth&&t.setAttribute("depth","0px"),t}});ye({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(n,e,t){var{parser:i}=n,r=t[0],a=e[0];return{type:"sqrt",mode:i.mode,body:a,index:r}},htmlBuilder(n,e){var t=lt(n.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=G.wrapFragment(t,e);var i=e.fontMetrics(),r=i.defaultRuleThickness,a=r;e.style.id<ke.TEXT.id&&(a=e.fontMetrics().xHeight);var s=r+a/4,o=t.height+t.depth+s+r,{span:l,ruleWidth:c,advanceWidth:h}=li.sqrtImage(o,e),u=l.height-c;u>t.height+t.depth+s&&(s=(s+u-t.height-t.depth)/2);var p=l.height-t.height-s-c;t.style.paddingLeft=pe(h);var m=G.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+p)},{type:"elem",elem:l},{type:"kern",size:c}]},e);if(n.index){var v=e.havingStyle(ke.SCRIPTSCRIPT),_=lt(n.index,v,e),g=.6*(m.height-m.depth),f=G.makeVList({positionType:"shift",positionData:-g,children:[{type:"elem",elem:_}]},e),M=G.makeSpan(["root"],[f]);return G.makeSpan(["mord","sqrt"],[M,m],e)}else return G.makeSpan(["mord","sqrt"],[m],e)},mathmlBuilder(n,e){var{body:t,index:i}=n;return i?new le.MathNode("mroot",[St(t,e),St(i,e)]):new le.MathNode("msqrt",[St(t,e)])}});var $c={display:ke.DISPLAY,text:ke.TEXT,script:ke.SCRIPT,scriptscript:ke.SCRIPTSCRIPT};ye({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(n,e){var{breakOnTokenText:t,funcName:i,parser:r}=n,a=r.parseExpression(!0,t),s=i.slice(1,i.length-5);return{type:"styling",mode:r.mode,style:s,body:a}},htmlBuilder(n,e){var t=$c[n.style],i=e.havingStyle(t).withFont("");return Nh(n.body,i,e)},mathmlBuilder(n,e){var t=$c[n.style],i=e.havingStyle(t),r=un(n.body,i),a=new le.MathNode("mstyle",r),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=s[n.style];return a.setAttribute("scriptlevel",o[0]),a.setAttribute("displaystyle",o[1]),a}});var l4=function(e,t){var i=e.base;if(i)if(i.type==="op"){var r=i.limits&&(t.style.size===ke.DISPLAY.size||i.alwaysHandleSupSub);return r?Pr:null}else if(i.type==="operatorname"){var a=i.alwaysHandleSupSub&&(t.style.size===ke.DISPLAY.size||i.limits);return a?Ih:null}else{if(i.type==="accent")return ht.isCharacterBox(i.base)?Wo:null;if(i.type==="horizBrace"){var s=!e.sub;return s===i.isOver?Dh:null}else return null}else return null};ji({type:"supsub",htmlBuilder(n,e){var t=l4(n,e);if(t)return t(n,e);var{base:i,sup:r,sub:a}=n,s=lt(i,e),o,l,c=e.fontMetrics(),h=0,u=0,p=i&&ht.isCharacterBox(i);if(r){var m=e.havingStyle(e.style.sup());o=lt(r,m,e),p||(h=s.height-m.fontMetrics().supDrop*m.sizeMultiplier/e.sizeMultiplier)}if(a){var v=e.havingStyle(e.style.sub());l=lt(a,v,e),p||(u=s.depth+v.fontMetrics().subDrop*v.sizeMultiplier/e.sizeMultiplier)}var _;e.style===ke.DISPLAY?_=c.sup1:e.style.cramped?_=c.sup3:_=c.sup2;var g=e.sizeMultiplier,f=pe(.5/c.ptPerEm/g),M=null;if(l){var A=n.base&&n.base.type==="op"&&n.base.name&&(n.base.name==="\\oiint"||n.base.name==="\\oiiint");(s instanceof Un||A)&&(M=pe(-s.italic))}var R;if(o&&l){h=Math.max(h,_,o.depth+.25*c.xHeight),u=Math.max(u,c.sub2);var L=c.defaultRuleThickness,C=4*L;if(h-o.depth-(l.height-u)<C){u=C-(h-o.depth)+l.height;var N=.8*c.xHeight-(h-o.depth);N>0&&(h+=N,u-=N)}var O=[{type:"elem",elem:l,shift:u,marginRight:f,marginLeft:M},{type:"elem",elem:o,shift:-h,marginRight:f}];R=G.makeVList({positionType:"individualShift",children:O},e)}else if(l){u=Math.max(u,c.sub1,l.height-.8*c.xHeight);var w=[{type:"elem",elem:l,marginLeft:M,marginRight:f}];R=G.makeVList({positionType:"shift",positionData:u,children:w},e)}else if(o)h=Math.max(h,_,o.depth+.25*c.xHeight),R=G.makeVList({positionType:"shift",positionData:-h,children:[{type:"elem",elem:o,marginRight:f}]},e);else throw new Error("supsub must have either sup or sub.");var E=_o(s,"right")||"mord";return G.makeSpan([E],[s,G.makeSpan(["msupsub"],[R])],e)},mathmlBuilder(n,e){var t=!1,i,r;n.base&&n.base.type==="horizBrace"&&(r=!!n.sup,r===n.base.isOver&&(t=!0,i=n.base.isOver)),n.base&&(n.base.type==="op"||n.base.type==="operatorname")&&(n.base.parentIsSupSub=!0);var a=[St(n.base,e)];n.sub&&a.push(St(n.sub,e)),n.sup&&a.push(St(n.sup,e));var s;if(t)s=i?"mover":"munder";else if(n.sub)if(n.sup){var c=n.base;c&&c.type==="op"&&c.limits&&e.style===ke.DISPLAY||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(e.style===ke.DISPLAY||c.limits)?s="munderover":s="msubsup"}else{var l=n.base;l&&l.type==="op"&&l.limits&&(e.style===ke.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===ke.DISPLAY)?s="munder":s="msub"}else{var o=n.base;o&&o.type==="op"&&o.limits&&(e.style===ke.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||e.style===ke.DISPLAY)?s="mover":s="msup"}return new le.MathNode(s,a)}});ji({type:"atom",htmlBuilder(n,e){return G.mathsym(n.text,n.mode,e,["m"+n.family])},mathmlBuilder(n,e){var t=new le.MathNode("mo",[En(n.text,n.mode)]);if(n.family==="bin"){var i=Vo(n,e);i==="bold-italic"&&t.setAttribute("mathvariant",i)}else n.family==="punct"?t.setAttribute("separator","true"):(n.family==="open"||n.family==="close")&&t.setAttribute("stretchy","false");return t}});var Uh={mi:"italic",mn:"normal",mtext:"normal"};ji({type:"mathord",htmlBuilder(n,e){return G.makeOrd(n,e,"mathord")},mathmlBuilder(n,e){var t=new le.MathNode("mi",[En(n.text,n.mode,e)]),i=Vo(n,e)||"italic";return i!==Uh[t.type]&&t.setAttribute("mathvariant",i),t}});ji({type:"textord",htmlBuilder(n,e){return G.makeOrd(n,e,"textord")},mathmlBuilder(n,e){var t=En(n.text,n.mode,e),i=Vo(n,e)||"normal",r;return n.mode==="text"?r=new le.MathNode("mtext",[t]):/[0-9]/.test(n.text)?r=new le.MathNode("mn",[t]):n.text==="\\prime"?r=new le.MathNode("mo",[t]):r=new le.MathNode("mi",[t]),i!==Uh[r.type]&&r.setAttribute("mathvariant",i),r}});var v0={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},_0={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};ji({type:"spacing",htmlBuilder(n,e){if(_0.hasOwnProperty(n.text)){var t=_0[n.text].className||"";if(n.mode==="text"){var i=G.makeOrd(n,e,"textord");return i.classes.push(t),i}else return G.makeSpan(["mspace",t],[G.mathsym(n.text,n.mode,e)],e)}else{if(v0.hasOwnProperty(n.text))return G.makeSpan(["mspace",v0[n.text]],[],e);throw new ue('Unknown type of space "'+n.text+'"')}},mathmlBuilder(n,e){var t;if(_0.hasOwnProperty(n.text))t=new le.MathNode("mtext",[new le.TextNode(" ")]);else{if(v0.hasOwnProperty(n.text))return new le.MathNode("mspace");throw new ue('Unknown type of space "'+n.text+'"')}return t}});var Kc=()=>{var n=new le.MathNode("mtd",[]);return n.setAttribute("width","50%"),n};ji({type:"tag",mathmlBuilder(n,e){var t=new le.MathNode("mtable",[new le.MathNode("mtr",[Kc(),new le.MathNode("mtd",[Pi(n.body,e)]),Kc(),new le.MathNode("mtd",[Pi(n.tag,e)])])]);return t.setAttribute("width","100%"),t}});var Zc={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},jc={"\\textbf":"textbf","\\textmd":"textmd"},c4={"\\textit":"textit","\\textup":"textup"},Jc=(n,e)=>{var t=n.font;if(t){if(Zc[t])return e.withTextFontFamily(Zc[t]);if(jc[t])return e.withTextFontWeight(jc[t]);if(t==="\\emph")return e.fontShape==="textit"?e.withTextFontShape("textup"):e.withTextFontShape("textit")}else return e;return e.withTextFontShape(c4[t])};ye({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(n,e){var{parser:t,funcName:i}=n,r=e[0];return{type:"text",mode:t.mode,body:kt(r),font:i}},htmlBuilder(n,e){var t=Jc(n,e),i=Wt(n.body,t,!0);return G.makeSpan(["mord","text"],i,t)},mathmlBuilder(n,e){var t=Jc(n,e);return Pi(n.body,t)}});ye({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(n,e){var{parser:t}=n;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(n,e){var t=lt(n.body,e),i=G.makeLineSpan("underline-line",e),r=e.fontMetrics().defaultRuleThickness,a=G.makeVList({positionType:"top",positionData:t.height,children:[{type:"kern",size:r},{type:"elem",elem:i},{type:"kern",size:3*r},{type:"elem",elem:t}]},e);return G.makeSpan(["mord","underline"],[a],e)},mathmlBuilder(n,e){var t=new le.MathNode("mo",[new le.TextNode("‾")]);t.setAttribute("stretchy","true");var i=new le.MathNode("munder",[St(n.body,e),t]);return i.setAttribute("accentunder","true"),i}});ye({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(n,e){var{parser:t}=n;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(n,e){var t=lt(n.body,e),i=e.fontMetrics().axisHeight,r=.5*(t.height-i-(t.depth+i));return G.makeVList({positionType:"shift",positionData:r,children:[{type:"elem",elem:t}]},e)},mathmlBuilder(n,e){return new le.MathNode("mpadded",[St(n.body,e)],["vcenter"])}});ye({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(n,e,t){throw new ue("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(n,e){for(var t=Qc(n),i=[],r=e.havingStyle(e.style.text()),a=0;a<t.length;a++){var s=t[a];s==="~"&&(s="\\textasciitilde"),i.push(G.makeSymbol(s,"Typewriter-Regular",n.mode,r,["mord","texttt"]))}return G.makeSpan(["mord","text"].concat(r.sizingClasses(e)),G.tryCombineChars(i),r)},mathmlBuilder(n,e){var t=new le.TextNode(Qc(n)),i=new le.MathNode("mtext",[t]);return i.setAttribute("mathvariant","monospace"),i}});var Qc=n=>n.body.replace(/ /g,n.star?"␣":" "),Ti=sh,Fh=`[ \r
	]`,u4="\\\\[a-zA-Z@]+",h4="\\\\[^\uD800-\uDFFF]",d4="("+u4+")"+Fh+"*",f4=`\\\\(
|[ \r	]+
?)[ \r	]*`,So="[̀-ͯ]",p4=new RegExp(So+"+$"),m4="("+Fh+"+)|"+(f4+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(So+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(So+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+d4)+("|"+h4+")");class eu{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(m4,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new gn("EOF",new on(this,t,t));var i=this.tokenRegex.exec(e);if(i===null||i.index!==t)throw new ue("Unexpected character: '"+e[t]+"'",new gn(e[t],new on(this,t,t+1)));var r=i[6]||i[3]||(i[2]?"\\ ":" ");if(this.catcodes[r]===14){var a=e.indexOf(`
`,this.tokenRegex.lastIndex);return a===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=a+1,this.lex()}return new gn(r,new on(this,t,this.tokenRegex.lastIndex))}}class x4{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ue("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,i){if(i===void 0&&(i=!1),i){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var a=this.undefStack[this.undefStack.length-1];a&&!a.hasOwnProperty(e)&&(a[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}}var g4=Th;S("\\noexpand",function(n){var e=n.popToken();return n.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});S("\\expandafter",function(n){var e=n.popToken();return n.expandOnce(!0),{tokens:[e],numArgs:0}});S("\\@firstoftwo",function(n){var e=n.consumeArgs(2);return{tokens:e[0],numArgs:0}});S("\\@secondoftwo",function(n){var e=n.consumeArgs(2);return{tokens:e[1],numArgs:0}});S("\\@ifnextchar",function(n){var e=n.consumeArgs(3);n.consumeSpaces();var t=n.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});S("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");S("\\TextOrMath",function(n){var e=n.consumeArgs(2);return n.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var tu={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};S("\\char",function(n){var e=n.popToken(),t,i="";if(e.text==="'")t=8,e=n.popToken();else if(e.text==='"')t=16,e=n.popToken();else if(e.text==="`")if(e=n.popToken(),e.text[0]==="\\")i=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new ue("\\char` missing argument");i=e.text.charCodeAt(0)}else t=10;if(t){if(i=tu[e.text],i==null||i>=t)throw new ue("Invalid base-"+t+" digit "+e.text);for(var r;(r=tu[n.future().text])!=null&&r<t;)i*=t,i+=r,n.popToken()}return"\\@char{"+i+"}"});var Jo=(n,e,t,i)=>{var r=n.consumeArg().tokens;if(r.length!==1)throw new ue("\\newcommand's first argument must be a macro name");var a=r[0].text,s=n.isDefined(a);if(s&&!e)throw new ue("\\newcommand{"+a+"} attempting to redefine "+(a+"; use \\renewcommand"));if(!s&&!t)throw new ue("\\renewcommand{"+a+"} when command "+a+" does not yet exist; use \\newcommand");var o=0;if(r=n.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var l="",c=n.expandNextToken();c.text!=="]"&&c.text!=="EOF";)l+=c.text,c=n.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new ue("Invalid number of arguments: "+l);o=parseInt(l),r=n.consumeArg().tokens}return s&&i||n.macros.set(a,{tokens:r,numArgs:o}),""};S("\\newcommand",n=>Jo(n,!1,!0,!1));S("\\renewcommand",n=>Jo(n,!0,!1,!1));S("\\providecommand",n=>Jo(n,!0,!0,!0));S("\\message",n=>{var e=n.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});S("\\errmessage",n=>{var e=n.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});S("\\show",n=>{var e=n.popToken(),t=e.text;return console.log(e,n.macros.get(t),Ti[t],Mt.math[t],Mt.text[t]),""});S("\\bgroup","{");S("\\egroup","}");S("~","\\nobreakspace");S("\\lq","`");S("\\rq","'");S("\\aa","\\r a");S("\\AA","\\r A");S("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");S("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");S("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");S("ℬ","\\mathscr{B}");S("ℰ","\\mathscr{E}");S("ℱ","\\mathscr{F}");S("ℋ","\\mathscr{H}");S("ℐ","\\mathscr{I}");S("ℒ","\\mathscr{L}");S("ℳ","\\mathscr{M}");S("ℛ","\\mathscr{R}");S("ℭ","\\mathfrak{C}");S("ℌ","\\mathfrak{H}");S("ℨ","\\mathfrak{Z}");S("\\Bbbk","\\Bbb{k}");S("·","\\cdotp");S("\\llap","\\mathllap{\\textrm{#1}}");S("\\rlap","\\mathrlap{\\textrm{#1}}");S("\\clap","\\mathclap{\\textrm{#1}}");S("\\mathstrut","\\vphantom{(}");S("\\underbar","\\underline{\\text{#1}}");S("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');S("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");S("\\ne","\\neq");S("≠","\\neq");S("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");S("∉","\\notin");S("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");S("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");S("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");S("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");S("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");S("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");S("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");S("⟂","\\perp");S("‼","\\mathclose{!\\mkern-0.8mu!}");S("∌","\\notni");S("⌜","\\ulcorner");S("⌝","\\urcorner");S("⌞","\\llcorner");S("⌟","\\lrcorner");S("©","\\copyright");S("®","\\textregistered");S("️","\\textregistered");S("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');S("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');S("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');S("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');S("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");S("⋮","\\vdots");S("\\varGamma","\\mathit{\\Gamma}");S("\\varDelta","\\mathit{\\Delta}");S("\\varTheta","\\mathit{\\Theta}");S("\\varLambda","\\mathit{\\Lambda}");S("\\varXi","\\mathit{\\Xi}");S("\\varPi","\\mathit{\\Pi}");S("\\varSigma","\\mathit{\\Sigma}");S("\\varUpsilon","\\mathit{\\Upsilon}");S("\\varPhi","\\mathit{\\Phi}");S("\\varPsi","\\mathit{\\Psi}");S("\\varOmega","\\mathit{\\Omega}");S("\\substack","\\begin{subarray}{c}#1\\end{subarray}");S("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");S("\\boxed","\\fbox{$\\displaystyle{#1}$}");S("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");S("\\implies","\\DOTSB\\;\\Longrightarrow\\;");S("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");S("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");S("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var nu={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};S("\\dots",function(n){var e="\\dotso",t=n.expandAfterFuture().text;return t in nu?e=nu[t]:(t.slice(0,4)==="\\not"||t in Mt.math&&["bin","rel"].includes(Mt.math[t].group))&&(e="\\dotsb"),e});var Qo={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};S("\\dotso",function(n){var e=n.future().text;return e in Qo?"\\ldots\\,":"\\ldots"});S("\\dotsc",function(n){var e=n.future().text;return e in Qo&&e!==","?"\\ldots\\,":"\\ldots"});S("\\cdots",function(n){var e=n.future().text;return e in Qo?"\\@cdots\\,":"\\@cdots"});S("\\dotsb","\\cdots");S("\\dotsm","\\cdots");S("\\dotsi","\\!\\cdots");S("\\dotsx","\\ldots\\,");S("\\DOTSI","\\relax");S("\\DOTSB","\\relax");S("\\DOTSX","\\relax");S("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");S("\\,","\\tmspace+{3mu}{.1667em}");S("\\thinspace","\\,");S("\\>","\\mskip{4mu}");S("\\:","\\tmspace+{4mu}{.2222em}");S("\\medspace","\\:");S("\\;","\\tmspace+{5mu}{.2777em}");S("\\thickspace","\\;");S("\\!","\\tmspace-{3mu}{.1667em}");S("\\negthinspace","\\!");S("\\negmedspace","\\tmspace-{4mu}{.2222em}");S("\\negthickspace","\\tmspace-{5mu}{.277em}");S("\\enspace","\\kern.5em ");S("\\enskip","\\hskip.5em\\relax");S("\\quad","\\hskip1em\\relax");S("\\qquad","\\hskip2em\\relax");S("\\tag","\\@ifstar\\tag@literal\\tag@paren");S("\\tag@paren","\\tag@literal{({#1})}");S("\\tag@literal",n=>{if(n.macros.get("\\df@tag"))throw new ue("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});S("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");S("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");S("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");S("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");S("\\newline","\\\\\\relax");S("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var kh=pe(ri["Main-Regular"][84][1]-.7*ri["Main-Regular"][65][1]);S("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+kh+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");S("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+kh+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");S("\\hspace","\\@ifstar\\@hspacer\\@hspace");S("\\@hspace","\\hskip #1\\relax");S("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");S("\\ordinarycolon",":");S("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");S("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');S("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');S("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');S("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');S("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');S("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');S("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');S("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');S("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');S("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');S("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');S("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');S("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');S("∷","\\dblcolon");S("∹","\\eqcolon");S("≔","\\coloneqq");S("≕","\\eqqcolon");S("⩴","\\Coloneqq");S("\\ratio","\\vcentcolon");S("\\coloncolon","\\dblcolon");S("\\colonequals","\\coloneqq");S("\\coloncolonequals","\\Coloneqq");S("\\equalscolon","\\eqqcolon");S("\\equalscoloncolon","\\Eqqcolon");S("\\colonminus","\\coloneq");S("\\coloncolonminus","\\Coloneq");S("\\minuscolon","\\eqcolon");S("\\minuscoloncolon","\\Eqcolon");S("\\coloncolonapprox","\\Colonapprox");S("\\coloncolonsim","\\Colonsim");S("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");S("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");S("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");S("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");S("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");S("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");S("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");S("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");S("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");S("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");S("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");S("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");S("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");S("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");S("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");S("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");S("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");S("\\nleqq","\\html@mathml{\\@nleqq}{≰}");S("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");S("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");S("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");S("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");S("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");S("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");S("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");S("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");S("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");S("\\imath","\\html@mathml{\\@imath}{ı}");S("\\jmath","\\html@mathml{\\@jmath}{ȷ}");S("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");S("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");S("⟦","\\llbracket");S("⟧","\\rrbracket");S("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");S("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");S("⦃","\\lBrace");S("⦄","\\rBrace");S("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");S("⦵","\\minuso");S("\\darr","\\downarrow");S("\\dArr","\\Downarrow");S("\\Darr","\\Downarrow");S("\\lang","\\langle");S("\\rang","\\rangle");S("\\uarr","\\uparrow");S("\\uArr","\\Uparrow");S("\\Uarr","\\Uparrow");S("\\N","\\mathbb{N}");S("\\R","\\mathbb{R}");S("\\Z","\\mathbb{Z}");S("\\alef","\\aleph");S("\\alefsym","\\aleph");S("\\Alpha","\\mathrm{A}");S("\\Beta","\\mathrm{B}");S("\\bull","\\bullet");S("\\Chi","\\mathrm{X}");S("\\clubs","\\clubsuit");S("\\cnums","\\mathbb{C}");S("\\Complex","\\mathbb{C}");S("\\Dagger","\\ddagger");S("\\diamonds","\\diamondsuit");S("\\empty","\\emptyset");S("\\Epsilon","\\mathrm{E}");S("\\Eta","\\mathrm{H}");S("\\exist","\\exists");S("\\harr","\\leftrightarrow");S("\\hArr","\\Leftrightarrow");S("\\Harr","\\Leftrightarrow");S("\\hearts","\\heartsuit");S("\\image","\\Im");S("\\infin","\\infty");S("\\Iota","\\mathrm{I}");S("\\isin","\\in");S("\\Kappa","\\mathrm{K}");S("\\larr","\\leftarrow");S("\\lArr","\\Leftarrow");S("\\Larr","\\Leftarrow");S("\\lrarr","\\leftrightarrow");S("\\lrArr","\\Leftrightarrow");S("\\Lrarr","\\Leftrightarrow");S("\\Mu","\\mathrm{M}");S("\\natnums","\\mathbb{N}");S("\\Nu","\\mathrm{N}");S("\\Omicron","\\mathrm{O}");S("\\plusmn","\\pm");S("\\rarr","\\rightarrow");S("\\rArr","\\Rightarrow");S("\\Rarr","\\Rightarrow");S("\\real","\\Re");S("\\reals","\\mathbb{R}");S("\\Reals","\\mathbb{R}");S("\\Rho","\\mathrm{P}");S("\\sdot","\\cdot");S("\\sect","\\S");S("\\spades","\\spadesuit");S("\\sub","\\subset");S("\\sube","\\subseteq");S("\\supe","\\supseteq");S("\\Tau","\\mathrm{T}");S("\\thetasym","\\vartheta");S("\\weierp","\\wp");S("\\Zeta","\\mathrm{Z}");S("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");S("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");S("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");S("\\bra","\\mathinner{\\langle{#1}|}");S("\\ket","\\mathinner{|{#1}\\rangle}");S("\\braket","\\mathinner{\\langle{#1}\\rangle}");S("\\Bra","\\left\\langle#1\\right|");S("\\Ket","\\left|#1\\right\\rangle");var zh=n=>e=>{var t=e.consumeArg().tokens,i=e.consumeArg().tokens,r=e.consumeArg().tokens,a=e.consumeArg().tokens,s=e.macros.get("|"),o=e.macros.get("\\|");e.macros.beginGroup();var l=u=>p=>{n&&(p.macros.set("|",s),r.length&&p.macros.set("\\|",o));var m=u;if(!u&&r.length){var v=p.future();v.text==="|"&&(p.popToken(),m=!0)}return{tokens:m?r:i,numArgs:0}};e.macros.set("|",l(!1)),r.length&&e.macros.set("\\|",l(!0));var c=e.consumeArg().tokens,h=e.expandTokens([...a,...c,...t]);return e.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};S("\\bra@ket",zh(!1));S("\\bra@set",zh(!0));S("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");S("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");S("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");S("\\angln","{\\angl n}");S("\\blue","\\textcolor{##6495ed}{#1}");S("\\orange","\\textcolor{##ffa500}{#1}");S("\\pink","\\textcolor{##ff00af}{#1}");S("\\red","\\textcolor{##df0030}{#1}");S("\\green","\\textcolor{##28ae7b}{#1}");S("\\gray","\\textcolor{gray}{#1}");S("\\purple","\\textcolor{##9d38bd}{#1}");S("\\blueA","\\textcolor{##ccfaff}{#1}");S("\\blueB","\\textcolor{##80f6ff}{#1}");S("\\blueC","\\textcolor{##63d9ea}{#1}");S("\\blueD","\\textcolor{##11accd}{#1}");S("\\blueE","\\textcolor{##0c7f99}{#1}");S("\\tealA","\\textcolor{##94fff5}{#1}");S("\\tealB","\\textcolor{##26edd5}{#1}");S("\\tealC","\\textcolor{##01d1c1}{#1}");S("\\tealD","\\textcolor{##01a995}{#1}");S("\\tealE","\\textcolor{##208170}{#1}");S("\\greenA","\\textcolor{##b6ffb0}{#1}");S("\\greenB","\\textcolor{##8af281}{#1}");S("\\greenC","\\textcolor{##74cf70}{#1}");S("\\greenD","\\textcolor{##1fab54}{#1}");S("\\greenE","\\textcolor{##0d923f}{#1}");S("\\goldA","\\textcolor{##ffd0a9}{#1}");S("\\goldB","\\textcolor{##ffbb71}{#1}");S("\\goldC","\\textcolor{##ff9c39}{#1}");S("\\goldD","\\textcolor{##e07d10}{#1}");S("\\goldE","\\textcolor{##a75a05}{#1}");S("\\redA","\\textcolor{##fca9a9}{#1}");S("\\redB","\\textcolor{##ff8482}{#1}");S("\\redC","\\textcolor{##f9685d}{#1}");S("\\redD","\\textcolor{##e84d39}{#1}");S("\\redE","\\textcolor{##bc2612}{#1}");S("\\maroonA","\\textcolor{##ffbde0}{#1}");S("\\maroonB","\\textcolor{##ff92c6}{#1}");S("\\maroonC","\\textcolor{##ed5fa6}{#1}");S("\\maroonD","\\textcolor{##ca337c}{#1}");S("\\maroonE","\\textcolor{##9e034e}{#1}");S("\\purpleA","\\textcolor{##ddd7ff}{#1}");S("\\purpleB","\\textcolor{##c6b9fc}{#1}");S("\\purpleC","\\textcolor{##aa87ff}{#1}");S("\\purpleD","\\textcolor{##7854ab}{#1}");S("\\purpleE","\\textcolor{##543b78}{#1}");S("\\mintA","\\textcolor{##f5f9e8}{#1}");S("\\mintB","\\textcolor{##edf2df}{#1}");S("\\mintC","\\textcolor{##e0e5cc}{#1}");S("\\grayA","\\textcolor{##f6f7f7}{#1}");S("\\grayB","\\textcolor{##f0f1f2}{#1}");S("\\grayC","\\textcolor{##e3e5e6}{#1}");S("\\grayD","\\textcolor{##d6d8da}{#1}");S("\\grayE","\\textcolor{##babec2}{#1}");S("\\grayF","\\textcolor{##888d93}{#1}");S("\\grayG","\\textcolor{##626569}{#1}");S("\\grayH","\\textcolor{##3b3e40}{#1}");S("\\grayI","\\textcolor{##21242c}{#1}");S("\\kaBlue","\\textcolor{##314453}{#1}");S("\\kaGreen","\\textcolor{##71B307}{#1}");var Oh={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class v4{constructor(e,t,i){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new x4(g4,t.macros),this.mode=i,this.stack=[]}feed(e){this.lexer=new eu(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,i,r;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:r,end:i}=this.consumeArg(["]"])}else({tokens:r,start:t,end:i}=this.consumeArg());return this.pushToken(new gn("EOF",i.loc)),this.pushTokens(r),new gn("",on.range(t,i))}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],i=e&&e.length>0;i||this.consumeSpaces();var r=this.future(),a,s=0,o=0;do{if(a=this.popToken(),t.push(a),a.text==="{")++s;else if(a.text==="}"){if(--s,s===-1)throw new ue("Extra }",a)}else if(a.text==="EOF")throw new ue("Unexpected end of input in a macro argument, expected '"+(e&&i?e[o]:"}")+"'",a);if(e&&i)if((s===0||s===1&&e[o]==="{")&&a.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(s!==0||i);return r.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:a}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new ue("The length of delimiters doesn't match the number of args!");for(var i=t[0],r=0;r<i.length;r++){var a=this.popToken();if(i[r]!==a.text)throw new ue("Use of the macro doesn't match its definition",a)}}for(var s=[],o=0;o<e;o++)s.push(this.consumeArg(t&&t[o+1]).tokens);return s}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new ue("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(e){var t=this.popToken(),i=t.text,r=t.noexpand?null:this._getExpansion(i);if(r==null||e&&r.unexpandable){if(e&&r==null&&i[0]==="\\"&&!this.isDefined(i))throw new ue("Undefined control sequence: "+i);return this.pushToken(t),!1}this.countExpansion(1);var a=r.tokens,s=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){a=a.slice();for(var o=a.length-1;o>=0;--o){var l=a[o];if(l.text==="#"){if(o===0)throw new ue("Incomplete placeholder at end of macro body",l);if(l=a[--o],l.text==="#")a.splice(o+1,1);else if(/^[1-9]$/.test(l.text))a.splice(o,2,...s[+l.text-1]);else throw new ue("Not a valid argument number",l)}}}return this.pushTokens(a),a.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}throw new Error}expandMacro(e){return this.macros.has(e)?this.expandTokens([new gn(e)]):void 0}expandTokens(e){var t=[],i=this.stack.length;for(this.pushTokens(e);this.stack.length>i;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&(r.noexpand=!1,r.treatAsRelax=!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(i=>i.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var i=this.lexer.catcodes[e];if(i!=null&&i!==13)return}var r=typeof t=="function"?t(this):t;if(typeof r=="string"){var a=0;if(r.indexOf("#")!==-1)for(var s=r.replace(/##/g,"");s.indexOf("#"+(a+1))!==-1;)++a;for(var o=new eu(r,this.settings),l=[],c=o.lex();c.text!=="EOF";)l.push(c),c=o.lex();l.reverse();var h={tokens:l,numArgs:a};return h}return r}isDefined(e){return this.macros.has(e)||Ti.hasOwnProperty(e)||Mt.math.hasOwnProperty(e)||Mt.text.hasOwnProperty(e)||Oh.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:Ti.hasOwnProperty(e)&&!Ti[e].primitive}}var iu=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Oa=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),b0={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},ru={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class ws{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new v4(e,t,this.mode),this.settings=t,this.leftrightDepth=0}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new ue("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new gn("}")),this.gullet.pushTokens(e);var i=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,i}parseExpression(e,t){for(var i=[];;){this.mode==="math"&&this.consumeSpaces();var r=this.fetch();if(ws.endOfExpression.indexOf(r.text)!==-1||t&&r.text===t||e&&Ti[r.text]&&Ti[r.text].infix)break;var a=this.parseAtom(t);if(a){if(a.type==="internal")continue}else break;i.push(a)}return this.mode==="text"&&this.formLigatures(i),this.handleInfixNodes(i)}handleInfixNodes(e){for(var t=-1,i,r=0;r<e.length;r++)if(e[r].type==="infix"){if(t!==-1)throw new ue("only one infix operator per group",e[r].token);t=r,i=e[r].replaceWith}if(t!==-1&&i){var a,s,o=e.slice(0,t),l=e.slice(t+1);o.length===1&&o[0].type==="ordgroup"?a=o[0]:a={type:"ordgroup",mode:this.mode,body:o},l.length===1&&l[0].type==="ordgroup"?s=l[0]:s={type:"ordgroup",mode:this.mode,body:l};var c;return i==="\\\\abovefrac"?c=this.callFunction(i,[a,e[t],s],[]):c=this.callFunction(i,[a,s],[]),[c]}else return e}handleSupSubscript(e){var t=this.fetch(),i=t.text;this.consume(),this.consumeSpaces();var r;do{var a;r=this.parseGroup(e)}while(((a=r)==null?void 0:a.type)==="internal");if(!r)throw new ue("Expected group after '"+i+"'",t);return r}formatUnsupportedCmd(e){for(var t=[],i=0;i<e.length;i++)t.push({type:"textord",mode:"text",text:e[i]});var r={type:"text",mode:this.mode,body:t},a={type:"color",mode:this.mode,color:this.settings.errorColor,body:[r]};return a}parseAtom(e){var t=this.parseGroup("atom",e);if(t?.type==="internal"||this.mode==="text")return t;for(var i,r;;){this.consumeSpaces();var a=this.fetch();if(a.text==="\\limits"||a.text==="\\nolimits"){if(t&&t.type==="op"){var s=a.text==="\\limits";t.limits=s,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=a.text==="\\limits");else throw new ue("Limit controls must follow a math operator",a);this.consume()}else if(a.text==="^"){if(i)throw new ue("Double superscript",a);i=this.handleSupSubscript("superscript")}else if(a.text==="_"){if(r)throw new ue("Double subscript",a);r=this.handleSupSubscript("subscript")}else if(a.text==="'"){if(i)throw new ue("Double superscript",a);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),i={type:"ordgroup",mode:this.mode,body:l}}else if(Oa[a.text]){var c=iu.test(a.text),h=[];for(h.push(new gn(Oa[a.text])),this.consume();;){var u=this.fetch().text;if(!Oa[u]||iu.test(u)!==c)break;h.unshift(new gn(Oa[u])),this.consume()}var p=this.subparse(h);c?r={type:"ordgroup",mode:"math",body:p}:i={type:"ordgroup",mode:"math",body:p}}else break}return i||r?{type:"supsub",mode:this.mode,base:t,sup:i,sub:r}:t}parseFunction(e,t){var i=this.fetch(),r=i.text,a=Ti[r];if(!a)return null;if(this.consume(),t&&t!=="atom"&&!a.allowedInArgument)throw new ue("Got function '"+r+"' with no arguments"+(t?" as "+t:""),i);if(this.mode==="text"&&!a.allowedInText)throw new ue("Can't use function '"+r+"' in text mode",i);if(this.mode==="math"&&a.allowedInMath===!1)throw new ue("Can't use function '"+r+"' in math mode",i);var{args:s,optArgs:o}=this.parseArguments(r,a);return this.callFunction(r,s,o,i,e)}callFunction(e,t,i,r,a){var s={funcName:e,parser:this,token:r,breakOnTokenText:a},o=Ti[e];if(o&&o.handler)return o.handler(s,t,i);throw new ue("No function handler for "+e)}parseArguments(e,t){var i=t.numArgs+t.numOptionalArgs;if(i===0)return{args:[],optArgs:[]};for(var r=[],a=[],s=0;s<i;s++){var o=t.argTypes&&t.argTypes[s],l=s<t.numOptionalArgs;(t.primitive&&o==null||t.type==="sqrt"&&s===1&&a[0]==null)&&(o="primitive");var c=this.parseGroupOfType("argument to '"+e+"'",o,l);if(l)a.push(c);else if(c!=null)r.push(c);else throw new ue("Null argument, please report this as a bug")}return{args:r,optArgs:a}}parseGroupOfType(e,t,i){switch(t){case"color":return this.parseColorGroup(i);case"size":return this.parseSizeGroup(i);case"url":return this.parseUrlGroup(i);case"math":case"text":return this.parseArgumentGroup(i,t);case"hbox":{var r=this.parseArgumentGroup(i,"text");return r!=null?{type:"styling",mode:r.mode,body:[r],style:"text"}:null}case"raw":{var a=this.parseStringGroup("raw",i);return a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(i)throw new ue("A primitive argument cannot be optional");var s=this.parseGroup(e);if(s==null)throw new ue("Expected group as "+e,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(i);default:throw new ue("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,t){var i=this.gullet.scanArgument(t);if(i==null)return null;for(var r="",a;(a=this.fetch()).text!=="EOF";)r+=a.text,this.consume();return this.consume(),i.text=r,i}parseRegexGroup(e,t){for(var i=this.fetch(),r=i,a="",s;(s=this.fetch()).text!=="EOF"&&e.test(a+s.text);)r=s,a+=r.text,this.consume();if(a==="")throw new ue("Invalid "+t+": '"+i.text+"'",i);return i.range(r,a)}parseColorGroup(e){var t=this.parseStringGroup("color",e);if(t==null)return null;var i=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!i)throw new ue("Invalid color: '"+t.text+"'",t);var r=i[0];return/^[0-9a-f]{6}$/i.test(r)&&(r="#"+r),{type:"color-token",mode:this.mode,color:r}}parseSizeGroup(e){var t,i=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",i=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new ue("Invalid size: '"+t.text+"'",t);var a={number:+(r[1]+r[2]),unit:r[3]};if(!Zu(a))throw new ue("Invalid unit: '"+a.unit+"'",t);return{type:"size",mode:this.mode,value:a,isBlank:i}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var i=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:i}}parseArgumentGroup(e,t){var i=this.gullet.scanArgument(e);if(i==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var a=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:i.loc,body:a};return t&&this.switchMode(r),s}parseGroup(e,t){var i=this.fetch(),r=i.text,a;if(r==="{"||r==="\\begingroup"){this.consume();var s=r==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,s),l=this.fetch();this.expect(s),this.gullet.endGroup(),a={type:"ordgroup",mode:this.mode,loc:on.range(i,l),body:o,semisimple:r==="\\begingroup"||void 0}}else if(a=this.parseFunction(t,e)||this.parseSymbol(),a==null&&r[0]==="\\"&&!Oh.hasOwnProperty(r)){if(this.settings.throwOnError)throw new ue("Undefined control sequence: "+r,i);a=this.formatUnsupportedCmd(r),this.consume()}return a}formLigatures(e){for(var t=e.length-1,i=0;i<t;++i){var r=e[i],a=r.text;a==="-"&&e[i+1].text==="-"&&(i+1<t&&e[i+2].text==="-"?(e.splice(i,3,{type:"textord",mode:"text",loc:on.range(r,e[i+2]),text:"---"}),t-=2):(e.splice(i,2,{type:"textord",mode:"text",loc:on.range(r,e[i+1]),text:"--"}),t-=1)),(a==="'"||a==="`")&&e[i+1].text===a&&(e.splice(i,2,{type:"textord",mode:"text",loc:on.range(r,e[i+1]),text:a+a}),t-=1)}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var i=t.slice(5),r=i.charAt(0)==="*";if(r&&(i=i.slice(1)),i.length<2||i.charAt(0)!==i.slice(-1))throw new ue(`\\verb assertion failed --
                    please report what input caused this bug`);return i=i.slice(1,-1),{type:"verb",mode:"text",body:i,star:r}}ru.hasOwnProperty(t[0])&&!Mt[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=ru[t[0]]+t.slice(1));var a=p4.exec(t);a&&(t=t.substring(0,a.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var s;if(Mt[this.mode][t]){this.settings.strict&&this.mode==="math"&&vo.indexOf(t)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var o=Mt[this.mode][t].group,l=on.range(e),c;if(ax.hasOwnProperty(o)){var h=o;c={type:"atom",mode:this.mode,family:h,loc:l,text:t}}else c={type:o,mode:this.mode,loc:l,text:t};s=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(Ku(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),e)),s={type:"textord",mode:"text",loc:on.range(e),text:t};else return null;if(this.consume(),a)for(var u=0;u<a[0].length;u++){var p=a[0][u];if(!b0[p])throw new ue("Unknown accent ' "+p+"'",e);var m=b0[p][this.mode]||b0[p].text;if(!m)throw new ue("Accent "+p+" unsupported in "+this.mode+" mode",e);s={type:"accent",mode:this.mode,loc:on.range(e),label:m,isStretchy:!1,isShifty:!0,base:s}}return s}}ws.endOfExpression=["}","\\endgroup","\\end","\\right","&"];var _4=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var i=new ws(e,t);delete i.gullet.macros.current["\\df@tag"];var r=i.parse();if(delete i.gullet.macros.current["\\current@color"],delete i.gullet.macros.current["\\color"],i.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new ue("\\tag works only in display equations");r=[{type:"tag",mode:"text",body:r,tag:i.subparse([new gn("\\df@tag")])}]}return r};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");var b4=function(e,t){var i=S4(e,t).toMarkup();return i},y4=function(e,t,i){if(i.throwOnError||!(e instanceof ue))throw e;var r=G.makeSpan(["katex-error"],[new Un(t)]);return r.setAttribute("title",e.toString()),r.setAttribute("style","color:"+i.errorColor),r},S4=function(e,t){var i=new N2(t);try{var r=_4(e,i);return Dx(r,e,i)}catch(a){return y4(a,e,i)}};function M4(n=.5){const e=new ko(n,8,8),t=new Df(e),i=new ds({color:170,transparent:!0,opacity:.15}),r=new Bu({color:0}),a=new Nn(e,i),s=new Rf(t,r),o=new mr;return o.add(a,s),o.rotation.x=.4,o}function w4(n){const e=new M2;return e.domElement.style.position="absolute",e.domElement.style.top="0",e.domElement.style.pointerEvents="none",n.parentElement?.appendChild(e.domElement),e}function au(n,e=20,t="#ffffff"){const i=document.createElement("div");i.style.color=t,i.style.fontSize=`${e}px`,i.style.lineHeight="1",i.style.whiteSpace="nowrap",i.style.pointerEvents="none";const r={"\\ket":"\\lvert#1\\rangle"};try{i.innerHTML=b4(n,{throwOnError:!1,macros:r})}catch{i.textContent=n}return new S2(i)}function T4(n=new q(1,0,0),e=.5,t=16711680,i=.02,r=.1,a=.05){const s=n.clone().normalize(),o=Math.min(r,e*.5),l=Math.max(0,e-o),c=new ds({color:t}),h=new fs(i,i,l,8),u=new Nn(h,c);u.rotation.z=Math.PI/2,u.position.x=l/2;const p=new Fo(a,o,8),m=new Nn(p,c);m.rotation.z=-Math.PI/2,m.position.x=l+o/2;const v=new mr;v.add(u,m);const _=new Cr;return _.setFromUnitVectors(new q(1,0,0),s),v.setRotationFromQuaternion(_),v}function E4(n){if(!n)return()=>{};const e=new y2({canvas:n,antialias:!0});e.setPixelRatio(window.devicePixelRatio||1);const t=75,i=2,r=.1,a=5,s=new Sn(t,i,r,a);s.position.z=2;const o=new Mf;o.background=new pt(16777215);const l=M4(.5);o.add(l);const c=w4(n),h=T4(new q(1,0,0),.5,16711680);l.add(h);const u=.5,p=.08,m=au("\\ket{0}",20,"#000000");m.position.set(0,u+p,0);const v=au("\\ket{1}",20,"#000000");v.position.set(0,-u-p,0),l.add(m,v);function _(M){const A=M.domElement,R=A.clientWidth,L=A.clientHeight,C=A.width!==Math.floor(R*window.devicePixelRatio)||A.height!==Math.floor(L*window.devicePixelRatio);return C&&(M.setSize(R,L,!1),c.setSize(R,L)),C}let g=0;function f(){if(_(e)){const M=e.domElement;s.aspect=M.clientWidth/M.clientHeight,s.updateProjectionMatrix()}e.render(o,s),c.render(o,s),g=requestAnimationFrame(f)}return g=requestAnimationFrame(f),()=>{cancelAnimationFrame(g),[m,v].forEach(M=>{M.parent&&M.parent.remove(M)}),c.domElement&&c.domElement.parentElement&&c.domElement.parentElement.removeChild(c.domElement),e.dispose()}}function A4(){return id(()=>{const n=document.getElementById("three-scene");return n?E4(n):void 0},[]),Ei("div",{class:"Main",children:[Ei("canvas",{id:"three-scene",style:{width:"100%",height:"100%"}}),Ei(td,{})]})}function C4(){return Ei("div",{children:Ei(A4,{})})}Qh(Ei(C4,{}),document.getElementById("app"));
