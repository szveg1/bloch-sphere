(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var ys,Mt,Ru,Ki,Rl,Du,Pu,Lu,O0,Uo,Fo,Jr={},Iu=[],yd=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ss=Array.isArray;function si(i,e){for(var t in e)i[t]=e[t];return i}function z0(i){i&&i.parentNode&&i.parentNode.removeChild(i)}function Sd(i,e,t){var n,r,a,s={};for(a in e)a=="key"?n=e[a]:a=="ref"?r=e[a]:s[a]=e[a];if(arguments.length>2&&(s.children=arguments.length>3?ys.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(a in i.defaultProps)s[a]===void 0&&(s[a]=i.defaultProps[a]);return Ja(i,s,n,r,null)}function Ja(i,e,t,n,r){var a={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Ru,__i:-1,__u:0};return r==null&&Mt.vnode!=null&&Mt.vnode(a),a}function Ms(i){return i.children}function Qa(i,e){this.props=i,this.context=e}function Cr(i,e){if(e==null)return i.__?Cr(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?Cr(i):null}function Nu(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return Nu(i)}}function Dl(i){(!i.__d&&(i.__d=!0)&&Ki.push(i)&&!cs.__r++||Rl!=Mt.debounceRendering)&&((Rl=Mt.debounceRendering)||Du)(cs)}function cs(){for(var i,e,t,n,r,a,s,o=1;Ki.length;)Ki.length>o&&Ki.sort(Pu),i=Ki.shift(),o=Ki.length,i.__d&&(t=void 0,n=void 0,r=(n=(e=i).__v).__e,a=[],s=[],e.__P&&((t=si({},n)).__v=n.__v+1,Mt.vnode&&Mt.vnode(t),B0(e.__P,t,n,e.__n,e.__P.namespaceURI,32&n.__u?[r]:null,a,r??Cr(n),!!(32&n.__u),s),t.__v=n.__v,t.__.__k[t.__i]=t,ku(a,t,s),n.__e=n.__=null,t.__e!=r&&Nu(t)));cs.__r=0}function Uu(i,e,t,n,r,a,s,o,l,c,h){var u,f,m,v,_,g,p,M=n&&n.__k||Iu,A=e.length;for(l=Md(t,e,M,l,A),u=0;u<A;u++)(m=t.__k[u])!=null&&(f=m.__i==-1?Jr:M[m.__i]||Jr,m.__i=u,g=B0(i,m,f,r,a,s,o,l,c,h),v=m.__e,m.ref&&f.ref!=m.ref&&(f.ref&&H0(f.ref,null,m),h.push(m.ref,m.__c||v,m)),_==null&&v!=null&&(_=v),(p=!!(4&m.__u))||f.__k===m.__k?l=Fu(m,l,i,p):typeof m.type=="function"&&g!==void 0?l=g:v&&(l=v.nextSibling),m.__u&=-7);return t.__e=_,l}function Md(i,e,t,n,r){var a,s,o,l,c,h=t.length,u=h,f=0;for(i.__k=new Array(r),a=0;a<r;a++)(s=e[a])!=null&&typeof s!="boolean"&&typeof s!="function"?(l=a+f,(s=i.__k[a]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?Ja(null,s,null,null,null):Ss(s)?Ja(Ms,{children:s},null,null,null):s.constructor==null&&s.__b>0?Ja(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=i,s.__b=i.__b+1,o=null,(c=s.__i=wd(s,t,l,u))!=-1&&(u--,(o=t[c])&&(o.__u|=2)),o==null||o.__v==null?(c==-1&&(r>h?f--:r<h&&f++),typeof s.type!="function"&&(s.__u|=4)):c!=l&&(c==l-1?f--:c==l+1?f++:(c>l?f--:f++,s.__u|=4))):i.__k[a]=null;if(u)for(a=0;a<h;a++)(o=t[a])!=null&&(2&o.__u)==0&&(o.__e==n&&(n=Cr(o)),zu(o,o));return n}function Fu(i,e,t,n){var r,a;if(typeof i.type=="function"){for(r=i.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=i,e=Fu(r[a],e,t,n));return e}i.__e!=e&&(n&&(e&&i.type&&!e.parentNode&&(e=Cr(i)),t.insertBefore(i.__e,e||null)),e=i.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function wd(i,e,t,n){var r,a,s,o=i.key,l=i.type,c=e[t],h=c!=null&&(2&c.__u)==0;if(c===null&&i.key==null||h&&o==c.key&&l==c.type)return t;if(n>(h?1:0)){for(r=t-1,a=t+1;r>=0||a<e.length;)if((c=e[s=r>=0?r--:a++])!=null&&(2&c.__u)==0&&o==c.key&&l==c.type)return s}return-1}function Pl(i,e,t){e[0]=="-"?i.setProperty(e,t??""):i[e]=t==null?"":typeof t!="number"||yd.test(e)?t:t+"px"}function xa(i,e,t,n,r){var a,s;e:if(e=="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||Pl(i.style,e,"");if(t)for(e in t)n&&t[e]==n[e]||Pl(i.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(Lu,"$1")),s=e.toLowerCase(),e=s in i||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),i.l||(i.l={}),i.l[e+a]=t,t?n?t.u=n.u:(t.u=O0,i.addEventListener(e,a?Fo:Uo,a)):i.removeEventListener(e,a?Fo:Uo,a);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?i.removeAttribute(e):i.setAttribute(e,e=="popover"&&t==1?"":t))}}function Ll(i){return function(e){if(this.l){var t=this.l[e.type+i];if(e.t==null)e.t=O0++;else if(e.t<t.u)return;return t(Mt.event?Mt.event(e):e)}}}function B0(i,e,t,n,r,a,s,o,l,c){var h,u,f,m,v,_,g,p,M,A,R,L,C,N,z,w,E,U=e.type;if(e.constructor!=null)return null;128&t.__u&&(l=!!(32&t.__u),a=[o=e.__e=t.__e]),(h=Mt.__b)&&h(e);e:if(typeof U=="function")try{if(p=e.props,M="prototype"in U&&U.prototype.render,A=(h=U.contextType)&&n[h.__c],R=h?A?A.props.value:h.__:n,t.__c?g=(u=e.__c=t.__c).__=u.__E:(M?e.__c=u=new U(p,R):(e.__c=u=new Qa(p,R),u.constructor=U,u.render=Ed),A&&A.sub(u),u.props=p,u.state||(u.state={}),u.context=R,u.__n=n,f=u.__d=!0,u.__h=[],u._sb=[]),M&&u.__s==null&&(u.__s=u.state),M&&U.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=si({},u.__s)),si(u.__s,U.getDerivedStateFromProps(p,u.__s))),m=u.props,v=u.state,u.__v=e,f)M&&U.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),M&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(M&&U.getDerivedStateFromProps==null&&p!==m&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(p,R),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(p,u.__s,R)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(u.props=p,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(B){B&&(B.__=e)}),L=0;L<u._sb.length;L++)u.__h.push(u._sb[L]);u._sb=[],u.__h.length&&s.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(p,u.__s,R),M&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(m,v,_)})}if(u.context=R,u.props=p,u.__P=i,u.__e=!1,C=Mt.__r,N=0,M){for(u.state=u.__s,u.__d=!1,C&&C(e),h=u.render(u.props,u.state,u.context),z=0;z<u._sb.length;z++)u.__h.push(u._sb[z]);u._sb=[]}else do u.__d=!1,C&&C(e),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++N<25);u.state=u.__s,u.getChildContext!=null&&(n=si(si({},n),u.getChildContext())),M&&!f&&u.getSnapshotBeforeUpdate!=null&&(_=u.getSnapshotBeforeUpdate(m,v)),w=h,h!=null&&h.type===Ms&&h.key==null&&(w=Ou(h.props.children)),o=Uu(i,Ss(w)?w:[w],e,t,n,r,a,s,o,l,c),u.base=e.__e,e.__u&=-161,u.__h.length&&s.push(u),g&&(u.__E=u.__=null)}catch(B){if(e.__v=null,l||a!=null)if(B.then){for(e.__u|=l?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;a[a.indexOf(o)]=null,e.__e=o}else{for(E=a.length;E--;)z0(a[E]);ko(e)}else e.__e=t.__e,e.__k=t.__k,B.then||ko(e);Mt.__e(B,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):o=e.__e=Td(t.__e,e,t,n,r,a,s,l,c);return(h=Mt.diffed)&&h(e),128&e.__u?void 0:o}function ko(i){i&&i.__c&&(i.__c.__e=!0),i&&i.__k&&i.__k.forEach(ko)}function ku(i,e,t){for(var n=0;n<t.length;n++)H0(t[n],t[++n],t[++n]);Mt.__c&&Mt.__c(e,i),i.some(function(r){try{i=r.__h,r.__h=[],i.some(function(a){a.call(r)})}catch(a){Mt.__e(a,r.__v)}})}function Ou(i){return typeof i!="object"||i==null||i.__b&&i.__b>0?i:Ss(i)?i.map(Ou):si({},i)}function Td(i,e,t,n,r,a,s,o,l){var c,h,u,f,m,v,_,g=t.props,p=e.props,M=e.type;if(M=="svg"?r="http://www.w3.org/2000/svg":M=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((m=a[c])&&"setAttribute"in m==!!M&&(M?m.localName==M:m.nodeType==3)){i=m,a[c]=null;break}}if(i==null){if(M==null)return document.createTextNode(p);i=document.createElementNS(r,M,p.is&&p),o&&(Mt.__m&&Mt.__m(e,a),o=!1),a=null}if(M==null)g===p||o&&i.data==p||(i.data=p);else{if(a=a&&ys.call(i.childNodes),g=t.props||Jr,!o&&a!=null)for(g={},c=0;c<i.attributes.length;c++)g[(m=i.attributes[c]).name]=m.value;for(c in g)if(m=g[c],c!="children"){if(c=="dangerouslySetInnerHTML")u=m;else if(!(c in p)){if(c=="value"&&"defaultValue"in p||c=="checked"&&"defaultChecked"in p)continue;xa(i,c,null,m,r)}}for(c in p)m=p[c],c=="children"?f=m:c=="dangerouslySetInnerHTML"?h=m:c=="value"?v=m:c=="checked"?_=m:o&&typeof m!="function"||g[c]===m||xa(i,c,m,g[c],r);if(h)o||u&&(h.__html==u.__html||h.__html==i.innerHTML)||(i.innerHTML=h.__html),e.__k=[];else if(u&&(i.innerHTML=""),Uu(e.type=="template"?i.content:i,Ss(f)?f:[f],e,t,n,M=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,s,a?a[0]:t.__k&&Cr(t,0),o,l),a!=null)for(c=a.length;c--;)z0(a[c]);o||(c="value",M=="progress"&&v==null?i.removeAttribute("value"):v!=null&&(v!==i[c]||M=="progress"&&!v||M=="option"&&v!=g[c])&&xa(i,c,v,g[c],r),c="checked",_!=null&&_!=i[c]&&xa(i,c,_,g[c],r))}return i}function H0(i,e,t){try{if(typeof i=="function"){var n=typeof i.__u=="function";n&&i.__u(),n&&e==null||(i.__u=i(e))}else i.current=e}catch(r){Mt.__e(r,t)}}function zu(i,e,t){var n,r;if(Mt.unmount&&Mt.unmount(i),(n=i.ref)&&(n.current&&n.current!=i.__e||H0(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){Mt.__e(a,e)}n.base=n.__P=null}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&zu(n[r],e,t||typeof i.type!="function");t||z0(i.__e),i.__c=i.__=i.__e=void 0}function Ed(i,e,t){return this.constructor(i,t)}function Ad(i,e,t){var n,r,a,s;e==document&&(e=document.documentElement),Mt.__&&Mt.__(i,e),r=(n=!1)?null:e.__k,a=[],s=[],B0(e,i=e.__k=Sd(Ms,null,[i]),r||Jr,Jr,e.namespaceURI,r?null:e.firstChild?ys.call(e.childNodes):null,a,r?r.__e:e.firstChild,n,s),ku(a,i,s)}ys=Iu.slice,Mt={__e:function(i,e,t,n){for(var r,a,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(i)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),s=r.__d),s)return r.__E=r}catch(o){i=o}throw i}},Ru=0,Qa.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=si({},this.state),typeof i=="function"&&(i=i(si({},t),this.props)),i&&si(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),Dl(this))},Qa.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),Dl(this))},Qa.prototype.render=Ms,Ki=[],Du=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Pu=function(i,e){return i.__v.__b-e.__v.__b},cs.__r=0,Lu=/(PointerCapture)$|Capture$/i,O0=0,Uo=Ll(!1),Fo=Ll(!0);var Cd=0;function ht(i,e,t,n,r,a){e||(e={});var s,o,l=e;if("ref"in l)for(o in l={},e)o=="ref"?s=e[o]:l[o]=e[o];var c={type:i,props:l,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Cd,__i:-1,__u:0,__source:r,__self:a};if(typeof i=="function"&&(s=i.defaultProps))for(o in s)l[o]===void 0&&(l[o]=s[o]);return Mt.vnode&&Mt.vnode(c),c}class dn{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new dn(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class bn{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(e,t){return new bn(t,dn.range(this,e))}}class ce{constructor(e,t){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var n="KaTeX parse error: "+e,r,a,s=t&&t.loc;if(s&&s.start<=s.end){var o=s.lexer.input;r=s.start,a=s.end,r===o.length?n+=" at end of input: ":n+=" at position "+(r+1)+": ";var l=o.slice(r,a).replace(/[^]/g,"$&̲"),c;r>15?c="…"+o.slice(r-15,r):c=o.slice(0,r);var h;a+15<o.length?h=o.slice(a,a+15)+"…":h=o.slice(a),n+=c+l+h}var u=new Error(n);return u.name="ParseError",u.__proto__=ce.prototype,u.position=r,r!=null&&a!=null&&(u.length=a-r),u.rawMessage=e,u}}ce.prototype.__proto__=Error.prototype;var Rd=function(e,t){return e===void 0?t:e},Dd=/([A-Z])/g,Pd=function(e){return e.replace(Dd,"-$1").toLowerCase()},Ld={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Id=/[&><"']/g;function Nd(i){return String(i).replace(Id,e=>Ld[e])}var Bu=function i(e){return e.type==="ordgroup"||e.type==="color"?e.body.length===1?i(e.body[0]):e:e.type==="font"?i(e.body):e},Ud=function(e){var t=Bu(e);return t.type==="mathord"||t.type==="textord"||t.type==="atom"},Fd=function(e){if(!e)throw new Error("Expected non-null, but got "+String(e));return e},kd=function(e){var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},ft={deflt:Rd,escape:Nd,hyphenate:Pd,getBaseElem:Bu,isCharacterBox:Ud,protocolFromUrl:kd},es={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:i=>"#"+i},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(i,e)=>(e.push(i),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:i=>Math.max(0,i),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:i=>Math.max(0,i),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:i=>Math.max(0,i),cli:"-e, --max-expand <n>",cliProcessor:i=>i==="Infinity"?1/0:parseInt(i)},globalGroup:{type:"boolean",cli:!1}};function Od(i){if(i.default)return i.default;var e=i.type,t=Array.isArray(e)?e[0]:e;if(typeof t!="string")return t.enum[0];switch(t){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class V0{constructor(e){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var t in es)if(es.hasOwnProperty(t)){var n=es[t];this[t]=e[t]!==void 0?n.processor?n.processor(e[t]):e[t]:Od(n)}}reportNonstrict(e,t,n){var r=this.strict;if(typeof r=="function"&&(r=r(e,t,n)),!(!r||r==="ignore")){if(r===!0||r==="error")throw new ce("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+e+"]"),n);r==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]"))}}useStrictBehavior(e,t,n){var r=this.strict;if(typeof r=="function")try{r=r(e,t,n)}catch{r="error"}return!r||r==="ignore"?!1:r===!0||r==="error"?!0:r==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]")),!1)}isTrusted(e){if(e.url&&!e.protocol){var t=ft.protocolFromUrl(e.url);if(t==null)return!1;e.protocol=t}var n=typeof this.trust=="function"?this.trust(e):this.trust;return!!n}}class yi{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return Hn[zd[this.id]]}sub(){return Hn[Bd[this.id]]}fracNum(){return Hn[Hd[this.id]]}fracDen(){return Hn[Vd[this.id]]}cramp(){return Hn[Gd[this.id]]}text(){return Hn[Wd[this.id]]}isTight(){return this.size>=2}}var G0=0,us=1,Mr=2,ci=3,Qr=4,Cn=5,Rr=6,nn=7,Hn=[new yi(G0,0,!1),new yi(us,0,!0),new yi(Mr,1,!1),new yi(ci,1,!0),new yi(Qr,2,!1),new yi(Cn,2,!0),new yi(Rr,3,!1),new yi(nn,3,!0)],zd=[Qr,Cn,Qr,Cn,Rr,nn,Rr,nn],Bd=[Cn,Cn,Cn,Cn,nn,nn,nn,nn],Hd=[Mr,ci,Qr,Cn,Rr,nn,Rr,nn],Vd=[ci,ci,Cn,Cn,nn,nn,nn,nn],Gd=[us,us,ci,ci,Cn,Cn,nn,nn],Wd=[G0,us,Mr,ci,Mr,ci,Mr,ci],Oe={DISPLAY:Hn[G0],TEXT:Hn[Mr],SCRIPT:Hn[Qr],SCRIPTSCRIPT:Hn[Rr]},Oo=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function qd(i){for(var e=0;e<Oo.length;e++)for(var t=Oo[e],n=0;n<t.blocks.length;n++){var r=t.blocks[n];if(i>=r[0]&&i<=r[1])return t.name}return null}var ts=[];Oo.forEach(i=>i.blocks.forEach(e=>ts.push(...e)));function Hu(i){for(var e=0;e<ts.length;e+=2)if(i>=ts[e]&&i<=ts[e+1])return!0;return!1}var ar=80,Xd=function(e,t){return"M95,"+(622+e+t)+`
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
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},Yd=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},$d=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},Kd=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},Zd=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},jd=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},Jd=function(e,t,n){var r=n-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},Qd=function(e,t,n){t=1e3*t;var r="";switch(e){case"sqrtMain":r=Xd(t,ar);break;case"sqrtSize1":r=Yd(t,ar);break;case"sqrtSize2":r=$d(t,ar);break;case"sqrtSize3":r=Kd(t,ar);break;case"sqrtSize4":r=Zd(t,ar);break;case"sqrtTall":r=Jd(t,ar,n)}return r},ef=function(e,t){switch(e){case"⎜":return"M291 0 H417 V"+t+" H291z M291 0 H417 V"+t+" H291z";case"∣":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z";case"∥":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z"+("M367 0 H410 V"+t+" H367z M367 0 H410 V"+t+" H367z");case"⎟":return"M457 0 H583 V"+t+" H457z M457 0 H583 V"+t+" H457z";case"⎢":return"M319 0 H403 V"+t+" H319z M319 0 H403 V"+t+" H319z";case"⎥":return"M263 0 H347 V"+t+" H263z M263 0 H347 V"+t+" H263z";case"⎪":return"M384 0 H504 V"+t+" H384z M384 0 H504 V"+t+" H384z";case"⏐":return"M312 0 H355 V"+t+" H312z M312 0 H355 V"+t+" H312z";case"‖":return"M257 0 H300 V"+t+" H257z M257 0 H300 V"+t+" H257z"+("M478 0 H521 V"+t+" H478z M478 0 H521 V"+t+" H478z");default:return""}},Il={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},tf=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class oa{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){var e=t=>t.toText();return this.children.map(e).join("")}}var Gn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},ga={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Nl={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function nf(i,e){Gn[i]=e}function W0(i,e,t){if(!Gn[e])throw new Error("Font metrics not found for font: "+e+".");var n=i.charCodeAt(0),r=Gn[e][n];if(!r&&i[0]in Nl&&(n=Nl[i[0]].charCodeAt(0),r=Gn[e][n]),!r&&t==="text"&&Hu(n)&&(r=Gn[e][77]),r)return{depth:r[0],height:r[1],italic:r[2],skew:r[3],width:r[4]}}var Bs={};function rf(i){var e;if(i>=5?e=0:i>=3?e=1:e=2,!Bs[e]){var t=Bs[e]={cssEmPerMu:ga.quad[e]/18};for(var n in ga)ga.hasOwnProperty(n)&&(t[n]=ga[n][e])}return Bs[e]}var af=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Ul=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Fl=function(e,t){return t.size<2?e:af[e-1][t.size-1]};class ri{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||ri.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=Ul[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return new ri(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:Fl(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:Ul[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=Fl(ri.BASESIZE,e);return this.size===t&&this.textSize===ri.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==ri.BASESIZE?["sizing","reset-size"+this.size,"size"+ri.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=rf(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}ri.BASESIZE=6;var zo={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},sf={ex:!0,em:!0,mu:!0},Vu=function(e){return typeof e!="string"&&(e=e.unit),e in zo||e in sf||e==="ex"},Lt=function(e,t){var n;if(e.unit in zo)n=zo[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")n=t.fontMetrics().cssEmPerMu;else{var r;if(t.style.isTight()?r=t.havingStyle(t.style.text()):r=t,e.unit==="ex")n=r.fontMetrics().xHeight;else if(e.unit==="em")n=r.fontMetrics().quad;else throw new ce("Invalid unit: '"+e.unit+"'");r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},pe=function(e){return+e.toFixed(4)+"em"},Ni=function(e){return e.filter(t=>t).join(" ")},Gu=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push("mtight");var r=t.getColor();r&&(this.style.color=r)}},Wu=function(e){var t=document.createElement(e);t.className=Ni(this.classes);for(var n in this.style)this.style.hasOwnProperty(n)&&(t.style[n]=this.style[n]);for(var r in this.attributes)this.attributes.hasOwnProperty(r)&&t.setAttribute(r,this.attributes[r]);for(var a=0;a<this.children.length;a++)t.appendChild(this.children[a].toNode());return t},of=/[\s"'>/=\x00-\x1f]/,qu=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+ft.escape(Ni(this.classes))+'"');var n="";for(var r in this.style)this.style.hasOwnProperty(r)&&(n+=ft.hyphenate(r)+":"+this.style[r]+";");n&&(t+=' style="'+ft.escape(n)+'"');for(var a in this.attributes)if(this.attributes.hasOwnProperty(a)){if(of.test(a))throw new ce("Invalid attribute name '"+a+"'");t+=" "+a+'="'+ft.escape(this.attributes[a])+'"'}t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+e+">",t};class la{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Gu.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Wu.call(this,"span")}toMarkup(){return qu.call(this,"span")}}class q0{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Gu.call(this,t,r),this.children=n||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Wu.call(this,"a")}toMarkup(){return qu.call(this,"a")}}class lf{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=["mord"],this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement("img");e.src=this.src,e.alt=this.alt,e.className="mord";for(var t in this.style)this.style.hasOwnProperty(t)&&(e.style[t]=this.style[t]);return e}toMarkup(){var e='<img src="'+ft.escape(this.src)+'"'+(' alt="'+ft.escape(this.alt)+'"'),t="";for(var n in this.style)this.style.hasOwnProperty(n)&&(t+=ft.hyphenate(n)+":"+this.style[n]+";");return t&&(e+=' style="'+ft.escape(t)+'"'),e+="'/>",e}}var cf={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Dn{constructor(e,t,n,r,a,s,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=a||0,this.width=s||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var c=qd(this.text.charCodeAt(0));c&&this.classes.push(c+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=cf[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;this.italic>0&&(t=document.createElement("span"),t.style.marginRight=pe(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Ni(this.classes));for(var n in this.style)this.style.hasOwnProperty(n)&&(t=t||document.createElement("span"),t.style[n]=this.style[n]);return t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=ft.escape(Ni(this.classes)),t+='"');var n="";this.italic>0&&(n+="margin-right:"+this.italic+"em;");for(var r in this.style)this.style.hasOwnProperty(r)&&(n+=ft.hyphenate(r)+":"+this.style[r]+";");n&&(e=!0,t+=' style="'+ft.escape(n)+'"');var a=ft.escape(this.text);return e?(t+=">",t+=a,t+="</span>",t):a}}class fi{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="'+ft.escape(this.attributes[t])+'"');e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</svg>",e}}class Ui{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",Il[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+ft.escape(this.alternate)+'"/>':'<path d="'+ft.escape(Il[this.pathName])+'"/>'}}class Bo{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var n in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,n)&&t.setAttribute(n,this.attributes[n]);return t}toMarkup(){var e="<line";for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="'+ft.escape(this.attributes[t])+'"');return e+="/>",e}}function kl(i){if(i instanceof Dn)return i;throw new Error("Expected symbolNode but got "+String(i)+".")}function uf(i){if(i instanceof la)return i;throw new Error("Expected span<HtmlDomNode> but got "+String(i)+".")}var hf={bin:1,close:1,inner:1,open:1,punct:1,rel:1},df={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Tt={math:{},text:{}};function d(i,e,t,n,r,a){Tt[i][r]={font:e,group:t,replace:n},a&&n&&(Tt[i][n]=Tt[i][r])}var x="math",re="text",b="main",P="ams",At="accent-token",we="bin",sn="close",Ur="inner",ke="mathord",Gt="op-token",Sn="open",ws="punct",I="rel",bi="spacing",O="textord";d(x,b,I,"≡","\\equiv",!0);d(x,b,I,"≺","\\prec",!0);d(x,b,I,"≻","\\succ",!0);d(x,b,I,"∼","\\sim",!0);d(x,b,I,"⊥","\\perp");d(x,b,I,"⪯","\\preceq",!0);d(x,b,I,"⪰","\\succeq",!0);d(x,b,I,"≃","\\simeq",!0);d(x,b,I,"∣","\\mid",!0);d(x,b,I,"≪","\\ll",!0);d(x,b,I,"≫","\\gg",!0);d(x,b,I,"≍","\\asymp",!0);d(x,b,I,"∥","\\parallel");d(x,b,I,"⋈","\\bowtie",!0);d(x,b,I,"⌣","\\smile",!0);d(x,b,I,"⊑","\\sqsubseteq",!0);d(x,b,I,"⊒","\\sqsupseteq",!0);d(x,b,I,"≐","\\doteq",!0);d(x,b,I,"⌢","\\frown",!0);d(x,b,I,"∋","\\ni",!0);d(x,b,I,"∝","\\propto",!0);d(x,b,I,"⊢","\\vdash",!0);d(x,b,I,"⊣","\\dashv",!0);d(x,b,I,"∋","\\owns");d(x,b,ws,".","\\ldotp");d(x,b,ws,"⋅","\\cdotp");d(x,b,O,"#","\\#");d(re,b,O,"#","\\#");d(x,b,O,"&","\\&");d(re,b,O,"&","\\&");d(x,b,O,"ℵ","\\aleph",!0);d(x,b,O,"∀","\\forall",!0);d(x,b,O,"ℏ","\\hbar",!0);d(x,b,O,"∃","\\exists",!0);d(x,b,O,"∇","\\nabla",!0);d(x,b,O,"♭","\\flat",!0);d(x,b,O,"ℓ","\\ell",!0);d(x,b,O,"♮","\\natural",!0);d(x,b,O,"♣","\\clubsuit",!0);d(x,b,O,"℘","\\wp",!0);d(x,b,O,"♯","\\sharp",!0);d(x,b,O,"♢","\\diamondsuit",!0);d(x,b,O,"ℜ","\\Re",!0);d(x,b,O,"♡","\\heartsuit",!0);d(x,b,O,"ℑ","\\Im",!0);d(x,b,O,"♠","\\spadesuit",!0);d(x,b,O,"§","\\S",!0);d(re,b,O,"§","\\S");d(x,b,O,"¶","\\P",!0);d(re,b,O,"¶","\\P");d(x,b,O,"†","\\dag");d(re,b,O,"†","\\dag");d(re,b,O,"†","\\textdagger");d(x,b,O,"‡","\\ddag");d(re,b,O,"‡","\\ddag");d(re,b,O,"‡","\\textdaggerdbl");d(x,b,sn,"⎱","\\rmoustache",!0);d(x,b,Sn,"⎰","\\lmoustache",!0);d(x,b,sn,"⟯","\\rgroup",!0);d(x,b,Sn,"⟮","\\lgroup",!0);d(x,b,we,"∓","\\mp",!0);d(x,b,we,"⊖","\\ominus",!0);d(x,b,we,"⊎","\\uplus",!0);d(x,b,we,"⊓","\\sqcap",!0);d(x,b,we,"∗","\\ast");d(x,b,we,"⊔","\\sqcup",!0);d(x,b,we,"◯","\\bigcirc",!0);d(x,b,we,"∙","\\bullet",!0);d(x,b,we,"‡","\\ddagger");d(x,b,we,"≀","\\wr",!0);d(x,b,we,"⨿","\\amalg");d(x,b,we,"&","\\And");d(x,b,I,"⟵","\\longleftarrow",!0);d(x,b,I,"⇐","\\Leftarrow",!0);d(x,b,I,"⟸","\\Longleftarrow",!0);d(x,b,I,"⟶","\\longrightarrow",!0);d(x,b,I,"⇒","\\Rightarrow",!0);d(x,b,I,"⟹","\\Longrightarrow",!0);d(x,b,I,"↔","\\leftrightarrow",!0);d(x,b,I,"⟷","\\longleftrightarrow",!0);d(x,b,I,"⇔","\\Leftrightarrow",!0);d(x,b,I,"⟺","\\Longleftrightarrow",!0);d(x,b,I,"↦","\\mapsto",!0);d(x,b,I,"⟼","\\longmapsto",!0);d(x,b,I,"↗","\\nearrow",!0);d(x,b,I,"↩","\\hookleftarrow",!0);d(x,b,I,"↪","\\hookrightarrow",!0);d(x,b,I,"↘","\\searrow",!0);d(x,b,I,"↼","\\leftharpoonup",!0);d(x,b,I,"⇀","\\rightharpoonup",!0);d(x,b,I,"↙","\\swarrow",!0);d(x,b,I,"↽","\\leftharpoondown",!0);d(x,b,I,"⇁","\\rightharpoondown",!0);d(x,b,I,"↖","\\nwarrow",!0);d(x,b,I,"⇌","\\rightleftharpoons",!0);d(x,P,I,"≮","\\nless",!0);d(x,P,I,"","\\@nleqslant");d(x,P,I,"","\\@nleqq");d(x,P,I,"⪇","\\lneq",!0);d(x,P,I,"≨","\\lneqq",!0);d(x,P,I,"","\\@lvertneqq");d(x,P,I,"⋦","\\lnsim",!0);d(x,P,I,"⪉","\\lnapprox",!0);d(x,P,I,"⊀","\\nprec",!0);d(x,P,I,"⋠","\\npreceq",!0);d(x,P,I,"⋨","\\precnsim",!0);d(x,P,I,"⪹","\\precnapprox",!0);d(x,P,I,"≁","\\nsim",!0);d(x,P,I,"","\\@nshortmid");d(x,P,I,"∤","\\nmid",!0);d(x,P,I,"⊬","\\nvdash",!0);d(x,P,I,"⊭","\\nvDash",!0);d(x,P,I,"⋪","\\ntriangleleft");d(x,P,I,"⋬","\\ntrianglelefteq",!0);d(x,P,I,"⊊","\\subsetneq",!0);d(x,P,I,"","\\@varsubsetneq");d(x,P,I,"⫋","\\subsetneqq",!0);d(x,P,I,"","\\@varsubsetneqq");d(x,P,I,"≯","\\ngtr",!0);d(x,P,I,"","\\@ngeqslant");d(x,P,I,"","\\@ngeqq");d(x,P,I,"⪈","\\gneq",!0);d(x,P,I,"≩","\\gneqq",!0);d(x,P,I,"","\\@gvertneqq");d(x,P,I,"⋧","\\gnsim",!0);d(x,P,I,"⪊","\\gnapprox",!0);d(x,P,I,"⊁","\\nsucc",!0);d(x,P,I,"⋡","\\nsucceq",!0);d(x,P,I,"⋩","\\succnsim",!0);d(x,P,I,"⪺","\\succnapprox",!0);d(x,P,I,"≆","\\ncong",!0);d(x,P,I,"","\\@nshortparallel");d(x,P,I,"∦","\\nparallel",!0);d(x,P,I,"⊯","\\nVDash",!0);d(x,P,I,"⋫","\\ntriangleright");d(x,P,I,"⋭","\\ntrianglerighteq",!0);d(x,P,I,"","\\@nsupseteqq");d(x,P,I,"⊋","\\supsetneq",!0);d(x,P,I,"","\\@varsupsetneq");d(x,P,I,"⫌","\\supsetneqq",!0);d(x,P,I,"","\\@varsupsetneqq");d(x,P,I,"⊮","\\nVdash",!0);d(x,P,I,"⪵","\\precneqq",!0);d(x,P,I,"⪶","\\succneqq",!0);d(x,P,I,"","\\@nsubseteqq");d(x,P,we,"⊴","\\unlhd");d(x,P,we,"⊵","\\unrhd");d(x,P,I,"↚","\\nleftarrow",!0);d(x,P,I,"↛","\\nrightarrow",!0);d(x,P,I,"⇍","\\nLeftarrow",!0);d(x,P,I,"⇏","\\nRightarrow",!0);d(x,P,I,"↮","\\nleftrightarrow",!0);d(x,P,I,"⇎","\\nLeftrightarrow",!0);d(x,P,I,"△","\\vartriangle");d(x,P,O,"ℏ","\\hslash");d(x,P,O,"▽","\\triangledown");d(x,P,O,"◊","\\lozenge");d(x,P,O,"Ⓢ","\\circledS");d(x,P,O,"®","\\circledR");d(re,P,O,"®","\\circledR");d(x,P,O,"∡","\\measuredangle",!0);d(x,P,O,"∄","\\nexists");d(x,P,O,"℧","\\mho");d(x,P,O,"Ⅎ","\\Finv",!0);d(x,P,O,"⅁","\\Game",!0);d(x,P,O,"‵","\\backprime");d(x,P,O,"▲","\\blacktriangle");d(x,P,O,"▼","\\blacktriangledown");d(x,P,O,"■","\\blacksquare");d(x,P,O,"⧫","\\blacklozenge");d(x,P,O,"★","\\bigstar");d(x,P,O,"∢","\\sphericalangle",!0);d(x,P,O,"∁","\\complement",!0);d(x,P,O,"ð","\\eth",!0);d(re,b,O,"ð","ð");d(x,P,O,"╱","\\diagup");d(x,P,O,"╲","\\diagdown");d(x,P,O,"□","\\square");d(x,P,O,"□","\\Box");d(x,P,O,"◊","\\Diamond");d(x,P,O,"¥","\\yen",!0);d(re,P,O,"¥","\\yen",!0);d(x,P,O,"✓","\\checkmark",!0);d(re,P,O,"✓","\\checkmark");d(x,P,O,"ℶ","\\beth",!0);d(x,P,O,"ℸ","\\daleth",!0);d(x,P,O,"ℷ","\\gimel",!0);d(x,P,O,"ϝ","\\digamma",!0);d(x,P,O,"ϰ","\\varkappa");d(x,P,Sn,"┌","\\@ulcorner",!0);d(x,P,sn,"┐","\\@urcorner",!0);d(x,P,Sn,"└","\\@llcorner",!0);d(x,P,sn,"┘","\\@lrcorner",!0);d(x,P,I,"≦","\\leqq",!0);d(x,P,I,"⩽","\\leqslant",!0);d(x,P,I,"⪕","\\eqslantless",!0);d(x,P,I,"≲","\\lesssim",!0);d(x,P,I,"⪅","\\lessapprox",!0);d(x,P,I,"≊","\\approxeq",!0);d(x,P,we,"⋖","\\lessdot");d(x,P,I,"⋘","\\lll",!0);d(x,P,I,"≶","\\lessgtr",!0);d(x,P,I,"⋚","\\lesseqgtr",!0);d(x,P,I,"⪋","\\lesseqqgtr",!0);d(x,P,I,"≑","\\doteqdot");d(x,P,I,"≓","\\risingdotseq",!0);d(x,P,I,"≒","\\fallingdotseq",!0);d(x,P,I,"∽","\\backsim",!0);d(x,P,I,"⋍","\\backsimeq",!0);d(x,P,I,"⫅","\\subseteqq",!0);d(x,P,I,"⋐","\\Subset",!0);d(x,P,I,"⊏","\\sqsubset",!0);d(x,P,I,"≼","\\preccurlyeq",!0);d(x,P,I,"⋞","\\curlyeqprec",!0);d(x,P,I,"≾","\\precsim",!0);d(x,P,I,"⪷","\\precapprox",!0);d(x,P,I,"⊲","\\vartriangleleft");d(x,P,I,"⊴","\\trianglelefteq");d(x,P,I,"⊨","\\vDash",!0);d(x,P,I,"⊪","\\Vvdash",!0);d(x,P,I,"⌣","\\smallsmile");d(x,P,I,"⌢","\\smallfrown");d(x,P,I,"≏","\\bumpeq",!0);d(x,P,I,"≎","\\Bumpeq",!0);d(x,P,I,"≧","\\geqq",!0);d(x,P,I,"⩾","\\geqslant",!0);d(x,P,I,"⪖","\\eqslantgtr",!0);d(x,P,I,"≳","\\gtrsim",!0);d(x,P,I,"⪆","\\gtrapprox",!0);d(x,P,we,"⋗","\\gtrdot");d(x,P,I,"⋙","\\ggg",!0);d(x,P,I,"≷","\\gtrless",!0);d(x,P,I,"⋛","\\gtreqless",!0);d(x,P,I,"⪌","\\gtreqqless",!0);d(x,P,I,"≖","\\eqcirc",!0);d(x,P,I,"≗","\\circeq",!0);d(x,P,I,"≜","\\triangleq",!0);d(x,P,I,"∼","\\thicksim");d(x,P,I,"≈","\\thickapprox");d(x,P,I,"⫆","\\supseteqq",!0);d(x,P,I,"⋑","\\Supset",!0);d(x,P,I,"⊐","\\sqsupset",!0);d(x,P,I,"≽","\\succcurlyeq",!0);d(x,P,I,"⋟","\\curlyeqsucc",!0);d(x,P,I,"≿","\\succsim",!0);d(x,P,I,"⪸","\\succapprox",!0);d(x,P,I,"⊳","\\vartriangleright");d(x,P,I,"⊵","\\trianglerighteq");d(x,P,I,"⊩","\\Vdash",!0);d(x,P,I,"∣","\\shortmid");d(x,P,I,"∥","\\shortparallel");d(x,P,I,"≬","\\between",!0);d(x,P,I,"⋔","\\pitchfork",!0);d(x,P,I,"∝","\\varpropto");d(x,P,I,"◀","\\blacktriangleleft");d(x,P,I,"∴","\\therefore",!0);d(x,P,I,"∍","\\backepsilon");d(x,P,I,"▶","\\blacktriangleright");d(x,P,I,"∵","\\because",!0);d(x,P,I,"⋘","\\llless");d(x,P,I,"⋙","\\gggtr");d(x,P,we,"⊲","\\lhd");d(x,P,we,"⊳","\\rhd");d(x,P,I,"≂","\\eqsim",!0);d(x,b,I,"⋈","\\Join");d(x,P,I,"≑","\\Doteq",!0);d(x,P,we,"∔","\\dotplus",!0);d(x,P,we,"∖","\\smallsetminus");d(x,P,we,"⋒","\\Cap",!0);d(x,P,we,"⋓","\\Cup",!0);d(x,P,we,"⩞","\\doublebarwedge",!0);d(x,P,we,"⊟","\\boxminus",!0);d(x,P,we,"⊞","\\boxplus",!0);d(x,P,we,"⋇","\\divideontimes",!0);d(x,P,we,"⋉","\\ltimes",!0);d(x,P,we,"⋊","\\rtimes",!0);d(x,P,we,"⋋","\\leftthreetimes",!0);d(x,P,we,"⋌","\\rightthreetimes",!0);d(x,P,we,"⋏","\\curlywedge",!0);d(x,P,we,"⋎","\\curlyvee",!0);d(x,P,we,"⊝","\\circleddash",!0);d(x,P,we,"⊛","\\circledast",!0);d(x,P,we,"⋅","\\centerdot");d(x,P,we,"⊺","\\intercal",!0);d(x,P,we,"⋒","\\doublecap");d(x,P,we,"⋓","\\doublecup");d(x,P,we,"⊠","\\boxtimes",!0);d(x,P,I,"⇢","\\dashrightarrow",!0);d(x,P,I,"⇠","\\dashleftarrow",!0);d(x,P,I,"⇇","\\leftleftarrows",!0);d(x,P,I,"⇆","\\leftrightarrows",!0);d(x,P,I,"⇚","\\Lleftarrow",!0);d(x,P,I,"↞","\\twoheadleftarrow",!0);d(x,P,I,"↢","\\leftarrowtail",!0);d(x,P,I,"↫","\\looparrowleft",!0);d(x,P,I,"⇋","\\leftrightharpoons",!0);d(x,P,I,"↶","\\curvearrowleft",!0);d(x,P,I,"↺","\\circlearrowleft",!0);d(x,P,I,"↰","\\Lsh",!0);d(x,P,I,"⇈","\\upuparrows",!0);d(x,P,I,"↿","\\upharpoonleft",!0);d(x,P,I,"⇃","\\downharpoonleft",!0);d(x,b,I,"⊶","\\origof",!0);d(x,b,I,"⊷","\\imageof",!0);d(x,P,I,"⊸","\\multimap",!0);d(x,P,I,"↭","\\leftrightsquigarrow",!0);d(x,P,I,"⇉","\\rightrightarrows",!0);d(x,P,I,"⇄","\\rightleftarrows",!0);d(x,P,I,"↠","\\twoheadrightarrow",!0);d(x,P,I,"↣","\\rightarrowtail",!0);d(x,P,I,"↬","\\looparrowright",!0);d(x,P,I,"↷","\\curvearrowright",!0);d(x,P,I,"↻","\\circlearrowright",!0);d(x,P,I,"↱","\\Rsh",!0);d(x,P,I,"⇊","\\downdownarrows",!0);d(x,P,I,"↾","\\upharpoonright",!0);d(x,P,I,"⇂","\\downharpoonright",!0);d(x,P,I,"⇝","\\rightsquigarrow",!0);d(x,P,I,"⇝","\\leadsto");d(x,P,I,"⇛","\\Rrightarrow",!0);d(x,P,I,"↾","\\restriction");d(x,b,O,"‘","`");d(x,b,O,"$","\\$");d(re,b,O,"$","\\$");d(re,b,O,"$","\\textdollar");d(x,b,O,"%","\\%");d(re,b,O,"%","\\%");d(x,b,O,"_","\\_");d(re,b,O,"_","\\_");d(re,b,O,"_","\\textunderscore");d(x,b,O,"∠","\\angle",!0);d(x,b,O,"∞","\\infty",!0);d(x,b,O,"′","\\prime");d(x,b,O,"△","\\triangle");d(x,b,O,"Γ","\\Gamma",!0);d(x,b,O,"Δ","\\Delta",!0);d(x,b,O,"Θ","\\Theta",!0);d(x,b,O,"Λ","\\Lambda",!0);d(x,b,O,"Ξ","\\Xi",!0);d(x,b,O,"Π","\\Pi",!0);d(x,b,O,"Σ","\\Sigma",!0);d(x,b,O,"Υ","\\Upsilon",!0);d(x,b,O,"Φ","\\Phi",!0);d(x,b,O,"Ψ","\\Psi",!0);d(x,b,O,"Ω","\\Omega",!0);d(x,b,O,"A","Α");d(x,b,O,"B","Β");d(x,b,O,"E","Ε");d(x,b,O,"Z","Ζ");d(x,b,O,"H","Η");d(x,b,O,"I","Ι");d(x,b,O,"K","Κ");d(x,b,O,"M","Μ");d(x,b,O,"N","Ν");d(x,b,O,"O","Ο");d(x,b,O,"P","Ρ");d(x,b,O,"T","Τ");d(x,b,O,"X","Χ");d(x,b,O,"¬","\\neg",!0);d(x,b,O,"¬","\\lnot");d(x,b,O,"⊤","\\top");d(x,b,O,"⊥","\\bot");d(x,b,O,"∅","\\emptyset");d(x,P,O,"∅","\\varnothing");d(x,b,ke,"α","\\alpha",!0);d(x,b,ke,"β","\\beta",!0);d(x,b,ke,"γ","\\gamma",!0);d(x,b,ke,"δ","\\delta",!0);d(x,b,ke,"ϵ","\\epsilon",!0);d(x,b,ke,"ζ","\\zeta",!0);d(x,b,ke,"η","\\eta",!0);d(x,b,ke,"θ","\\theta",!0);d(x,b,ke,"ι","\\iota",!0);d(x,b,ke,"κ","\\kappa",!0);d(x,b,ke,"λ","\\lambda",!0);d(x,b,ke,"μ","\\mu",!0);d(x,b,ke,"ν","\\nu",!0);d(x,b,ke,"ξ","\\xi",!0);d(x,b,ke,"ο","\\omicron",!0);d(x,b,ke,"π","\\pi",!0);d(x,b,ke,"ρ","\\rho",!0);d(x,b,ke,"σ","\\sigma",!0);d(x,b,ke,"τ","\\tau",!0);d(x,b,ke,"υ","\\upsilon",!0);d(x,b,ke,"ϕ","\\phi",!0);d(x,b,ke,"χ","\\chi",!0);d(x,b,ke,"ψ","\\psi",!0);d(x,b,ke,"ω","\\omega",!0);d(x,b,ke,"ε","\\varepsilon",!0);d(x,b,ke,"ϑ","\\vartheta",!0);d(x,b,ke,"ϖ","\\varpi",!0);d(x,b,ke,"ϱ","\\varrho",!0);d(x,b,ke,"ς","\\varsigma",!0);d(x,b,ke,"φ","\\varphi",!0);d(x,b,we,"∗","*",!0);d(x,b,we,"+","+");d(x,b,we,"−","-",!0);d(x,b,we,"⋅","\\cdot",!0);d(x,b,we,"∘","\\circ",!0);d(x,b,we,"÷","\\div",!0);d(x,b,we,"±","\\pm",!0);d(x,b,we,"×","\\times",!0);d(x,b,we,"∩","\\cap",!0);d(x,b,we,"∪","\\cup",!0);d(x,b,we,"∖","\\setminus",!0);d(x,b,we,"∧","\\land");d(x,b,we,"∨","\\lor");d(x,b,we,"∧","\\wedge",!0);d(x,b,we,"∨","\\vee",!0);d(x,b,O,"√","\\surd");d(x,b,Sn,"⟨","\\langle",!0);d(x,b,Sn,"∣","\\lvert");d(x,b,Sn,"∥","\\lVert");d(x,b,sn,"?","?");d(x,b,sn,"!","!");d(x,b,sn,"⟩","\\rangle",!0);d(x,b,sn,"∣","\\rvert");d(x,b,sn,"∥","\\rVert");d(x,b,I,"=","=");d(x,b,I,":",":");d(x,b,I,"≈","\\approx",!0);d(x,b,I,"≅","\\cong",!0);d(x,b,I,"≥","\\ge");d(x,b,I,"≥","\\geq",!0);d(x,b,I,"←","\\gets");d(x,b,I,">","\\gt",!0);d(x,b,I,"∈","\\in",!0);d(x,b,I,"","\\@not");d(x,b,I,"⊂","\\subset",!0);d(x,b,I,"⊃","\\supset",!0);d(x,b,I,"⊆","\\subseteq",!0);d(x,b,I,"⊇","\\supseteq",!0);d(x,P,I,"⊈","\\nsubseteq",!0);d(x,P,I,"⊉","\\nsupseteq",!0);d(x,b,I,"⊨","\\models");d(x,b,I,"←","\\leftarrow",!0);d(x,b,I,"≤","\\le");d(x,b,I,"≤","\\leq",!0);d(x,b,I,"<","\\lt",!0);d(x,b,I,"→","\\rightarrow",!0);d(x,b,I,"→","\\to");d(x,P,I,"≱","\\ngeq",!0);d(x,P,I,"≰","\\nleq",!0);d(x,b,bi," ","\\ ");d(x,b,bi," ","\\space");d(x,b,bi," ","\\nobreakspace");d(re,b,bi," ","\\ ");d(re,b,bi," "," ");d(re,b,bi," ","\\space");d(re,b,bi," ","\\nobreakspace");d(x,b,bi,null,"\\nobreak");d(x,b,bi,null,"\\allowbreak");d(x,b,ws,",",",");d(x,b,ws,";",";");d(x,P,we,"⊼","\\barwedge",!0);d(x,P,we,"⊻","\\veebar",!0);d(x,b,we,"⊙","\\odot",!0);d(x,b,we,"⊕","\\oplus",!0);d(x,b,we,"⊗","\\otimes",!0);d(x,b,O,"∂","\\partial",!0);d(x,b,we,"⊘","\\oslash",!0);d(x,P,we,"⊚","\\circledcirc",!0);d(x,P,we,"⊡","\\boxdot",!0);d(x,b,we,"△","\\bigtriangleup");d(x,b,we,"▽","\\bigtriangledown");d(x,b,we,"†","\\dagger");d(x,b,we,"⋄","\\diamond");d(x,b,we,"⋆","\\star");d(x,b,we,"◃","\\triangleleft");d(x,b,we,"▹","\\triangleright");d(x,b,Sn,"{","\\{");d(re,b,O,"{","\\{");d(re,b,O,"{","\\textbraceleft");d(x,b,sn,"}","\\}");d(re,b,O,"}","\\}");d(re,b,O,"}","\\textbraceright");d(x,b,Sn,"{","\\lbrace");d(x,b,sn,"}","\\rbrace");d(x,b,Sn,"[","\\lbrack",!0);d(re,b,O,"[","\\lbrack",!0);d(x,b,sn,"]","\\rbrack",!0);d(re,b,O,"]","\\rbrack",!0);d(x,b,Sn,"(","\\lparen",!0);d(x,b,sn,")","\\rparen",!0);d(re,b,O,"<","\\textless",!0);d(re,b,O,">","\\textgreater",!0);d(x,b,Sn,"⌊","\\lfloor",!0);d(x,b,sn,"⌋","\\rfloor",!0);d(x,b,Sn,"⌈","\\lceil",!0);d(x,b,sn,"⌉","\\rceil",!0);d(x,b,O,"\\","\\backslash");d(x,b,O,"∣","|");d(x,b,O,"∣","\\vert");d(re,b,O,"|","\\textbar",!0);d(x,b,O,"∥","\\|");d(x,b,O,"∥","\\Vert");d(re,b,O,"∥","\\textbardbl");d(re,b,O,"~","\\textasciitilde");d(re,b,O,"\\","\\textbackslash");d(re,b,O,"^","\\textasciicircum");d(x,b,I,"↑","\\uparrow",!0);d(x,b,I,"⇑","\\Uparrow",!0);d(x,b,I,"↓","\\downarrow",!0);d(x,b,I,"⇓","\\Downarrow",!0);d(x,b,I,"↕","\\updownarrow",!0);d(x,b,I,"⇕","\\Updownarrow",!0);d(x,b,Gt,"∐","\\coprod");d(x,b,Gt,"⋁","\\bigvee");d(x,b,Gt,"⋀","\\bigwedge");d(x,b,Gt,"⨄","\\biguplus");d(x,b,Gt,"⋂","\\bigcap");d(x,b,Gt,"⋃","\\bigcup");d(x,b,Gt,"∫","\\int");d(x,b,Gt,"∫","\\intop");d(x,b,Gt,"∬","\\iint");d(x,b,Gt,"∭","\\iiint");d(x,b,Gt,"∏","\\prod");d(x,b,Gt,"∑","\\sum");d(x,b,Gt,"⨂","\\bigotimes");d(x,b,Gt,"⨁","\\bigoplus");d(x,b,Gt,"⨀","\\bigodot");d(x,b,Gt,"∮","\\oint");d(x,b,Gt,"∯","\\oiint");d(x,b,Gt,"∰","\\oiiint");d(x,b,Gt,"⨆","\\bigsqcup");d(x,b,Gt,"∫","\\smallint");d(re,b,Ur,"…","\\textellipsis");d(x,b,Ur,"…","\\mathellipsis");d(re,b,Ur,"…","\\ldots",!0);d(x,b,Ur,"…","\\ldots",!0);d(x,b,Ur,"⋯","\\@cdots",!0);d(x,b,Ur,"⋱","\\ddots",!0);d(x,b,O,"⋮","\\varvdots");d(re,b,O,"⋮","\\varvdots");d(x,b,At,"ˊ","\\acute");d(x,b,At,"ˋ","\\grave");d(x,b,At,"¨","\\ddot");d(x,b,At,"~","\\tilde");d(x,b,At,"ˉ","\\bar");d(x,b,At,"˘","\\breve");d(x,b,At,"ˇ","\\check");d(x,b,At,"^","\\hat");d(x,b,At,"⃗","\\vec");d(x,b,At,"˙","\\dot");d(x,b,At,"˚","\\mathring");d(x,b,ke,"","\\@imath");d(x,b,ke,"","\\@jmath");d(x,b,O,"ı","ı");d(x,b,O,"ȷ","ȷ");d(re,b,O,"ı","\\i",!0);d(re,b,O,"ȷ","\\j",!0);d(re,b,O,"ß","\\ss",!0);d(re,b,O,"æ","\\ae",!0);d(re,b,O,"œ","\\oe",!0);d(re,b,O,"ø","\\o",!0);d(re,b,O,"Æ","\\AE",!0);d(re,b,O,"Œ","\\OE",!0);d(re,b,O,"Ø","\\O",!0);d(re,b,At,"ˊ","\\'");d(re,b,At,"ˋ","\\`");d(re,b,At,"ˆ","\\^");d(re,b,At,"˜","\\~");d(re,b,At,"ˉ","\\=");d(re,b,At,"˘","\\u");d(re,b,At,"˙","\\.");d(re,b,At,"¸","\\c");d(re,b,At,"˚","\\r");d(re,b,At,"ˇ","\\v");d(re,b,At,"¨",'\\"');d(re,b,At,"˝","\\H");d(re,b,At,"◯","\\textcircled");var Xu={"--":!0,"---":!0,"``":!0,"''":!0};d(re,b,O,"–","--",!0);d(re,b,O,"–","\\textendash");d(re,b,O,"—","---",!0);d(re,b,O,"—","\\textemdash");d(re,b,O,"‘","`",!0);d(re,b,O,"‘","\\textquoteleft");d(re,b,O,"’","'",!0);d(re,b,O,"’","\\textquoteright");d(re,b,O,"“","``",!0);d(re,b,O,"“","\\textquotedblleft");d(re,b,O,"”","''",!0);d(re,b,O,"”","\\textquotedblright");d(x,b,O,"°","\\degree",!0);d(re,b,O,"°","\\degree");d(re,b,O,"°","\\textdegree",!0);d(x,b,O,"£","\\pounds");d(x,b,O,"£","\\mathsterling",!0);d(re,b,O,"£","\\pounds");d(re,b,O,"£","\\textsterling",!0);d(x,P,O,"✠","\\maltese");d(re,P,O,"✠","\\maltese");var Ol='0123456789/@."';for(var Hs=0;Hs<Ol.length;Hs++){var zl=Ol.charAt(Hs);d(x,b,O,zl,zl)}var Bl='0123456789!@*()-=+";:?/.,';for(var Vs=0;Vs<Bl.length;Vs++){var Hl=Bl.charAt(Vs);d(re,b,O,Hl,Hl)}var hs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Gs=0;Gs<hs.length;Gs++){var va=hs.charAt(Gs);d(x,b,ke,va,va),d(re,b,O,va,va)}d(x,P,O,"C","ℂ");d(re,P,O,"C","ℂ");d(x,P,O,"H","ℍ");d(re,P,O,"H","ℍ");d(x,P,O,"N","ℕ");d(re,P,O,"N","ℕ");d(x,P,O,"P","ℙ");d(re,P,O,"P","ℙ");d(x,P,O,"Q","ℚ");d(re,P,O,"Q","ℚ");d(x,P,O,"R","ℝ");d(re,P,O,"R","ℝ");d(x,P,O,"Z","ℤ");d(re,P,O,"Z","ℤ");d(x,b,ke,"h","ℎ");d(re,b,ke,"h","ℎ");var We="";for(var en=0;en<hs.length;en++){var Ut=hs.charAt(en);We=String.fromCharCode(55349,56320+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We),We=String.fromCharCode(55349,56372+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We),We=String.fromCharCode(55349,56424+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We),We=String.fromCharCode(55349,56580+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We),We=String.fromCharCode(55349,56684+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We),We=String.fromCharCode(55349,56736+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We),We=String.fromCharCode(55349,56788+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We),We=String.fromCharCode(55349,56840+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We),We=String.fromCharCode(55349,56944+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We),en<26&&(We=String.fromCharCode(55349,56632+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We),We=String.fromCharCode(55349,56476+en),d(x,b,ke,Ut,We),d(re,b,O,Ut,We))}We="𝕜";d(x,b,ke,"k",We);d(re,b,O,"k",We);for(var Hi=0;Hi<10;Hi++){var Si=Hi.toString();We=String.fromCharCode(55349,57294+Hi),d(x,b,ke,Si,We),d(re,b,O,Si,We),We=String.fromCharCode(55349,57314+Hi),d(x,b,ke,Si,We),d(re,b,O,Si,We),We=String.fromCharCode(55349,57324+Hi),d(x,b,ke,Si,We),d(re,b,O,Si,We),We=String.fromCharCode(55349,57334+Hi),d(x,b,ke,Si,We),d(re,b,O,Si,We)}var Ho="ÐÞþ";for(var Ws=0;Ws<Ho.length;Ws++){var _a=Ho.charAt(Ws);d(x,b,ke,_a,_a),d(re,b,O,_a,_a)}var ba=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],Vl=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],ff=function(e,t){var n=e.charCodeAt(0),r=e.charCodeAt(1),a=(n-55296)*1024+(r-56320)+65536,s=t==="math"?0:1;if(119808<=a&&a<120484){var o=Math.floor((a-119808)/26);return[ba[o][2],ba[o][s]]}else if(120782<=a&&a<=120831){var l=Math.floor((a-120782)/10);return[Vl[l][2],Vl[l][s]]}else{if(a===120485||a===120486)return[ba[0][2],ba[0][s]];if(120486<a&&a<120782)return["",""];throw new ce("Unsupported character: "+e)}},Ts=function(e,t,n){return Tt[n][e]&&Tt[n][e].replace&&(e=Tt[n][e].replace),{value:e,metrics:W0(e,t,n)}},kn=function(e,t,n,r,a){var s=Ts(e,t,n),o=s.metrics;e=s.value;var l;if(o){var c=o.italic;(n==="text"||r&&r.font==="mathit")&&(c=0),l=new Dn(e,o.height,o.depth,c,o.skew,o.width,a)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+t+"' and mode '"+n+"'")),l=new Dn(e,0,0,0,0,0,a);if(r){l.maxFontSize=r.sizeMultiplier,r.style.isTight()&&l.classes.push("mtight");var h=r.getColor();h&&(l.style.color=h)}return l},pf=function(e,t,n,r){return r===void 0&&(r=[]),n.font==="boldsymbol"&&Ts(e,"Main-Bold",t).metrics?kn(e,"Main-Bold",t,n,r.concat(["mathbf"])):e==="\\"||Tt[t][e].font==="main"?kn(e,"Main-Regular",t,n,r):kn(e,"AMS-Regular",t,n,r.concat(["amsrm"]))},mf=function(e,t,n,r,a){return a!=="textord"&&Ts(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},xf=function(e,t,n){var r=e.mode,a=e.text,s=["mord"],o=r==="math"||r==="text"&&t.font,l=o?t.font:t.fontFamily,c="",h="";if(a.charCodeAt(0)===55349&&([c,h]=ff(a,r)),c.length>0)return kn(a,c,r,t,s.concat(h));if(l){var u,f;if(l==="boldsymbol"){var m=mf(a,r,t,s,n);u=m.fontName,f=[m.fontClass]}else o?(u=Ku[l].fontName,f=[l]):(u=ya(l,t.fontWeight,t.fontShape),f=[l,t.fontWeight,t.fontShape]);if(Ts(a,u,r).metrics)return kn(a,u,r,t,s.concat(f));if(Xu.hasOwnProperty(a)&&u.slice(0,10)==="Typewriter"){for(var v=[],_=0;_<a.length;_++)v.push(kn(a[_],u,r,t,s.concat(f)));return $u(v)}}if(n==="mathord")return kn(a,"Math-Italic",r,t,s.concat(["mathnormal"]));if(n==="textord"){var g=Tt[r][a]&&Tt[r][a].font;if(g==="ams"){var p=ya("amsrm",t.fontWeight,t.fontShape);return kn(a,p,r,t,s.concat("amsrm",t.fontWeight,t.fontShape))}else if(g==="main"||!g){var M=ya("textrm",t.fontWeight,t.fontShape);return kn(a,M,r,t,s.concat(t.fontWeight,t.fontShape))}else{var A=ya(g,t.fontWeight,t.fontShape);return kn(a,A,r,t,s.concat(A,t.fontWeight,t.fontShape))}}else throw new Error("unexpected type: "+n+" in makeOrd")},gf=(i,e)=>{if(Ni(i.classes)!==Ni(e.classes)||i.skew!==e.skew||i.maxFontSize!==e.maxFontSize)return!1;if(i.classes.length===1){var t=i.classes[0];if(t==="mbin"||t==="mord")return!1}for(var n in i.style)if(i.style.hasOwnProperty(n)&&i.style[n]!==e.style[n])return!1;for(var r in e.style)if(e.style.hasOwnProperty(r)&&i.style[r]!==e.style[r])return!1;return!0},vf=i=>{for(var e=0;e<i.length-1;e++){var t=i[e],n=i[e+1];t instanceof Dn&&n instanceof Dn&&gf(t,n)&&(t.text+=n.text,t.height=Math.max(t.height,n.height),t.depth=Math.max(t.depth,n.depth),t.italic=n.italic,i.splice(e+1,1),e--)}return i},X0=function(e){for(var t=0,n=0,r=0,a=0;a<e.children.length;a++){var s=e.children[a];s.height>t&&(t=s.height),s.depth>n&&(n=s.depth),s.maxFontSize>r&&(r=s.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},hn=function(e,t,n,r){var a=new la(e,t,n,r);return X0(a),a},Yu=(i,e,t,n)=>new la(i,e,t,n),_f=function(e,t,n){var r=hn([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=pe(r.height),r.maxFontSize=1,r},bf=function(e,t,n,r){var a=new q0(e,t,n,r);return X0(a),a},$u=function(e){var t=new oa(e);return X0(t),t},yf=function(e,t){return e instanceof oa?hn([],[e],t):e},Sf=function(e){if(e.positionType==="individualShift"){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,a=r,s=1;s<t.length;s++){var o=-t[s].shift-a-t[s].elem.depth,l=o-(t[s-1].elem.height+t[s-1].elem.depth);a=a+o,n.push({type:"kern",size:l}),n.push(t[s])}return{children:n,depth:r}}var c;if(e.positionType==="top"){for(var h=e.positionData,u=0;u<e.children.length;u++){var f=e.children[u];h-=f.type==="kern"?f.size:f.elem.height+f.elem.depth}c=h}else if(e.positionType==="bottom")c=-e.positionData;else{var m=e.children[0];if(m.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")c=-m.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")c=-m.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:c}},Mf=function(e,t){for(var{children:n,depth:r}=Sf(e),a=0,s=0;s<n.length;s++){var o=n[s];if(o.type==="elem"){var l=o.elem;a=Math.max(a,l.maxFontSize,l.height)}}a+=2;var c=hn(["pstrut"],[]);c.style.height=pe(a);for(var h=[],u=r,f=r,m=r,v=0;v<n.length;v++){var _=n[v];if(_.type==="kern")m+=_.size;else{var g=_.elem,p=_.wrapperClasses||[],M=_.wrapperStyle||{},A=hn(p,[c,g],void 0,M);A.style.top=pe(-a-m-g.depth),_.marginLeft&&(A.style.marginLeft=_.marginLeft),_.marginRight&&(A.style.marginRight=_.marginRight),h.push(A),m+=g.height+g.depth}u=Math.min(u,m),f=Math.max(f,m)}var R=hn(["vlist"],h);R.style.height=pe(f);var L;if(u<0){var C=hn([],[]),N=hn(["vlist"],[C]);N.style.height=pe(-u);var z=hn(["vlist-s"],[new Dn("​")]);L=[hn(["vlist-r"],[R,z]),hn(["vlist-r"],[N])]}else L=[hn(["vlist-r"],[R])];var w=hn(["vlist-t"],L);return L.length===2&&w.classes.push("vlist-t2"),w.height=f,w.depth=-u,w},wf=(i,e)=>{var t=hn(["mspace"],[],e),n=Lt(i,e);return t.style.marginRight=pe(n),t},ya=function(e,t,n){var r="";switch(e){case"amsrm":r="AMS";break;case"textrm":r="Main";break;case"textsf":r="SansSerif";break;case"texttt":r="Typewriter";break;default:r=e}var a;return t==="textbf"&&n==="textit"?a="BoldItalic":t==="textbf"?a="Bold":t==="textit"?a="Italic":a="Regular",r+"-"+a},Ku={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Zu={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Tf=function(e,t){var[n,r,a]=Zu[e],s=new Ui(n),o=new fi([s],{width:pe(r),height:pe(a),style:"width:"+pe(r),viewBox:"0 0 "+1e3*r+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),l=Yu(["overlay"],[o],t);return l.height=a,l.style.height=pe(a),l.style.width=pe(r),l},W={fontMap:Ku,makeSymbol:kn,mathsym:pf,makeSpan:hn,makeSvgSpan:Yu,makeLineSpan:_f,makeAnchor:bf,makeFragment:$u,wrapFragment:yf,makeVList:Mf,makeOrd:xf,makeGlue:wf,staticSvg:Tf,svgData:Zu,tryCombineChars:vf},Pt={number:3,unit:"mu"},Vi={number:4,unit:"mu"},Zn={number:5,unit:"mu"},Ef={mord:{mop:Pt,mbin:Vi,mrel:Zn,minner:Pt},mop:{mord:Pt,mop:Pt,mrel:Zn,minner:Pt},mbin:{mord:Vi,mop:Vi,mopen:Vi,minner:Vi},mrel:{mord:Zn,mop:Zn,mopen:Zn,minner:Zn},mopen:{},mclose:{mop:Pt,mbin:Vi,mrel:Zn,minner:Pt},mpunct:{mord:Pt,mop:Pt,mrel:Zn,mopen:Pt,mclose:Pt,mpunct:Pt,minner:Pt},minner:{mord:Pt,mop:Pt,mbin:Vi,mrel:Zn,mopen:Pt,mpunct:Pt,minner:Pt}},Af={mord:{mop:Pt},mop:{mord:Pt,mop:Pt},mbin:{},mrel:{},mopen:{},mclose:{mop:Pt},mpunct:{},minner:{mop:Pt}},ju={},ds={},fs={};function ye(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:a,mathmlBuilder:s}=i,o={type:e,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:r},l=0;l<t.length;++l)ju[t[l]]=o;e&&(a&&(ds[e]=a),s&&(fs[e]=s))}function nr(i){var{type:e,htmlBuilder:t,mathmlBuilder:n}=i;ye({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:n})}var ps=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},Bt=function(e){return e.type==="ordgroup"?e.body:[e]},pi=W.makeSpan,Cf=["leftmost","mbin","mopen","mrel","mop","mpunct"],Rf=["rightmost","mrel","mclose","mpunct"],Df={display:Oe.DISPLAY,text:Oe.TEXT,script:Oe.SCRIPT,scriptscript:Oe.SCRIPTSCRIPT},Pf={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Xt=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var a=[],s=0;s<e.length;s++){var o=ct(e[s],t);if(o instanceof oa){var l=o.children;a.push(...l)}else a.push(o)}if(W.tryCombineChars(a),!n)return a;var c=t;if(e.length===1){var h=e[0];h.type==="sizing"?c=t.havingSize(h.size):h.type==="styling"&&(c=t.havingStyle(Df[h.style]))}var u=pi([r[0]||"leftmost"],[],t),f=pi([r[1]||"rightmost"],[],t),m=n==="root";return Gl(a,(v,_)=>{var g=_.classes[0],p=v.classes[0];g==="mbin"&&Rf.includes(p)?_.classes[0]="mord":p==="mbin"&&Cf.includes(g)&&(v.classes[0]="mord")},{node:u},f,m),Gl(a,(v,_)=>{var g=Vo(_),p=Vo(v),M=g&&p?v.hasClass("mtight")?Af[g][p]:Ef[g][p]:null;if(M)return W.makeGlue(M,c)},{node:u},f,m),a},Gl=function i(e,t,n,r,a){r&&e.push(r);for(var s=0;s<e.length;s++){var o=e[s],l=Ju(o);if(l){i(l.children,t,n,null,a);continue}var c=!o.hasClass("mspace");if(c){var h=t(o,n.node);h&&(n.insertAfter?n.insertAfter(h):(e.unshift(h),s++))}c?n.node=o:a&&o.hasClass("newline")&&(n.node=pi(["leftmost"])),n.insertAfter=(u=>f=>{e.splice(u+1,0,f),s++})(s)}r&&e.pop()},Ju=function(e){return e instanceof oa||e instanceof q0||e instanceof la&&e.hasClass("enclosing")?e:null},Lf=function i(e,t){var n=Ju(e);if(n){var r=n.children;if(r.length){if(t==="right")return i(r[r.length-1],"right");if(t==="left")return i(r[0],"left")}}return e},Vo=function(e,t){return e?(t&&(e=Lf(e,t)),Pf[e.classes[0]]||null):null},ea=function(e,t){var n=["nulldelimiter"].concat(e.baseSizingClasses());return pi(t.concat(n))},ct=function(e,t,n){if(!e)return pi();if(ds[e.type]){var r=ds[e.type](e,t);if(n&&t.size!==n.size){r=pi(t.sizingClasses(n),[r],t);var a=t.sizeMultiplier/n.sizeMultiplier;r.height*=a,r.depth*=a}return r}else throw new ce("Got group of unknown type: '"+e.type+"'")};function Sa(i,e){var t=pi(["base"],i,e),n=pi(["strut"]);return n.style.height=pe(t.height+t.depth),t.depth&&(n.style.verticalAlign=pe(-t.depth)),t.children.unshift(n),t}function Go(i,e){var t=null;i.length===1&&i[0].type==="tag"&&(t=i[0].tag,i=i[0].body);var n=Xt(i,e,"root"),r;n.length===2&&n[1].hasClass("tag")&&(r=n.pop());for(var a=[],s=[],o=0;o<n.length;o++)if(s.push(n[o]),n[o].hasClass("mbin")||n[o].hasClass("mrel")||n[o].hasClass("allowbreak")){for(var l=!1;o<n.length-1&&n[o+1].hasClass("mspace")&&!n[o+1].hasClass("newline");)o++,s.push(n[o]),n[o].hasClass("nobreak")&&(l=!0);l||(a.push(Sa(s,e)),s=[])}else n[o].hasClass("newline")&&(s.pop(),s.length>0&&(a.push(Sa(s,e)),s=[]),a.push(n[o]));s.length>0&&a.push(Sa(s,e));var c;t?(c=Sa(Xt(t,e,!0)),c.classes=["tag"],a.push(c)):r&&a.push(r);var h=pi(["katex-html"],a);if(h.setAttribute("aria-hidden","true"),c){var u=c.children[0];u.style.height=pe(h.height+h.depth),h.depth&&(u.style.verticalAlign=pe(-h.depth))}return h}function Qu(i){return new oa(i)}class _n{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Ni(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Wn&&this.children[n+1]instanceof Wn){for(var r=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Wn;)r+=this.children[++n].toText();e.appendChild(new Wn(r).toNode())}else e.appendChild(this.children[n].toNode());return e}toMarkup(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=ft.escape(this.attributes[t]),e+='"');this.classes.length>0&&(e+=' class ="'+ft.escape(Ni(this.classes))+'"'),e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class Wn{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return ft.escape(this.toText())}toText(){return this.text}}class If{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",pe(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+pe(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var le={MathNode:_n,TextNode:Wn,SpaceNode:If,newDocumentFragment:Qu},Pn=function(e,t,n){return Tt[t][e]&&Tt[t][e].replace&&e.charCodeAt(0)!==55349&&!(Xu.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(e=Tt[t][e].replace),new le.TextNode(e)},Y0=function(e){return e.length===1?e[0]:new le.MathNode("mrow",e)},$0=function(e,t){if(t.fontFamily==="texttt")return"monospace";if(t.fontFamily==="textsf")return t.fontShape==="textit"&&t.fontWeight==="textbf"?"sans-serif-bold-italic":t.fontShape==="textit"?"sans-serif-italic":t.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(t.fontShape==="textit"&&t.fontWeight==="textbf")return"bold-italic";if(t.fontShape==="textit")return"italic";if(t.fontWeight==="textbf")return"bold";var n=t.font;if(!n||n==="mathnormal")return null;var r=e.mode;if(n==="mathit")return"italic";if(n==="boldsymbol")return e.type==="textord"?"bold":"bold-italic";if(n==="mathbf")return"bold";if(n==="mathbb")return"double-struck";if(n==="mathsfit")return"sans-serif-italic";if(n==="mathfrak")return"fraktur";if(n==="mathscr"||n==="mathcal")return"script";if(n==="mathsf")return"sans-serif";if(n==="mathtt")return"monospace";var a=e.text;if(["\\imath","\\jmath"].includes(a))return null;Tt[r][a]&&Tt[r][a].replace&&(a=Tt[r][a].replace);var s=W.fontMap[n].fontName;return W0(a,s,r)?W.fontMap[n].variant:null};function qs(i){if(!i)return!1;if(i.type==="mi"&&i.children.length===1){var e=i.children[0];return e instanceof Wn&&e.text==="."}else if(i.type==="mo"&&i.children.length===1&&i.getAttribute("separator")==="true"&&i.getAttribute("lspace")==="0em"&&i.getAttribute("rspace")==="0em"){var t=i.children[0];return t instanceof Wn&&t.text===","}else return!1}var pn=function(e,t,n){if(e.length===1){var r=wt(e[0],t);return n&&r instanceof _n&&r.type==="mo"&&(r.setAttribute("lspace","0em"),r.setAttribute("rspace","0em")),[r]}for(var a=[],s,o=0;o<e.length;o++){var l=wt(e[o],t);if(l instanceof _n&&s instanceof _n){if(l.type==="mtext"&&s.type==="mtext"&&l.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...l.children);continue}else if(l.type==="mn"&&s.type==="mn"){s.children.push(...l.children);continue}else if(qs(l)&&s.type==="mn"){s.children.push(...l.children);continue}else if(l.type==="mn"&&qs(s))l.children=[...s.children,...l.children],a.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(s.type==="mn"||qs(s))){var c=l.children[0];c instanceof _n&&c.type==="mn"&&(c.children=[...s.children,...c.children],a.pop())}else if(s.type==="mi"&&s.children.length===1){var h=s.children[0];if(h instanceof Wn&&h.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var u=l.children[0];u instanceof Wn&&u.text.length>0&&(u.text=u.text.slice(0,1)+"̸"+u.text.slice(1),a.pop())}}}a.push(l),s=l}return a},Fi=function(e,t,n){return Y0(pn(e,t,n))},wt=function(e,t){if(!e)return new le.MathNode("mrow");if(fs[e.type]){var n=fs[e.type](e,t);return n}else throw new ce("Got group of unknown type: '"+e.type+"'")};function Wl(i,e,t,n,r){var a=pn(i,t),s;a.length===1&&a[0]instanceof _n&&["mrow","mtable"].includes(a[0].type)?s=a[0]:s=new le.MathNode("mrow",a);var o=new le.MathNode("annotation",[new le.TextNode(e)]);o.setAttribute("encoding","application/x-tex");var l=new le.MathNode("semantics",[s,o]),c=new le.MathNode("math",[l]);c.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&c.setAttribute("display","block");var h=r?"katex":"katex-mathml";return W.makeSpan([h],[c])}var eh=function(e){return new ri({style:e.displayMode?Oe.DISPLAY:Oe.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},th=function(e,t){if(t.displayMode){var n=["katex-display"];t.leqno&&n.push("leqno"),t.fleqn&&n.push("fleqn"),e=W.makeSpan(n,[e])}return e},Nf=function(e,t,n){var r=eh(n),a;if(n.output==="mathml")return Wl(e,t,r,n.displayMode,!0);if(n.output==="html"){var s=Go(e,r);a=W.makeSpan(["katex"],[s])}else{var o=Wl(e,t,r,n.displayMode,!1),l=Go(e,r);a=W.makeSpan(["katex"],[o,l])}return th(a,n)},Uf=function(e,t,n){var r=eh(n),a=Go(e,r),s=W.makeSpan(["katex"],[a]);return th(s,n)},Ff={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},kf=function(e){var t=new le.MathNode("mo",[new le.TextNode(Ff[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},Of={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},zf=function(e){return e.type==="ordgroup"?e.body.length:1},Bf=function(e,t){function n(){var o=4e5,l=e.label.slice(1);if(["widehat","widecheck","widetilde","utilde"].includes(l)){var c=e,h=zf(c.base),u,f,m;if(h>5)l==="widehat"||l==="widecheck"?(u=420,o=2364,m=.42,f=l+"4"):(u=312,o=2340,m=.34,f="tilde4");else{var v=[1,1,2,2,3,3][h];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][v],u=[0,239,300,360,420][v],m=[0,.24,.3,.3,.36,.42][v],f=l+v):(o=[0,600,1033,2339,2340][v],u=[0,260,286,306,312][v],m=[0,.26,.286,.3,.306,.34][v],f="tilde"+v)}var _=new Ui(f),g=new fi([_],{width:"100%",height:pe(m),viewBox:"0 0 "+o+" "+u,preserveAspectRatio:"none"});return{span:W.makeSvgSpan([],[g],t),minWidth:0,height:m}}else{var p=[],M=Of[l],[A,R,L]=M,C=L/1e3,N=A.length,z,w;if(N===1){var E=M[3];z=["hide-tail"],w=[E]}else if(N===2)z=["halfarrow-left","halfarrow-right"],w=["xMinYMin","xMaxYMin"];else if(N===3)z=["brace-left","brace-center","brace-right"],w=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+N+" children.");for(var U=0;U<N;U++){var B=new Ui(A[U]),X=new fi([B],{width:"400em",height:pe(C),viewBox:"0 0 "+o+" "+L,preserveAspectRatio:w[U]+" slice"}),K=W.makeSvgSpan([z[U]],[X],t);if(N===1)return{span:K,minWidth:R,height:C};K.style.height=pe(C),p.push(K)}return{span:W.makeSpan(["stretchy"],p,t),minWidth:R,height:C}}}var{span:r,minWidth:a,height:s}=n();return r.height=s,r.style.height=pe(s),a>0&&(r.style.minWidth=pe(a)),r},Hf=function(e,t,n,r,a){var s,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(s=W.makeSpan(["stretchy",t],[],a),t==="fbox"){var l=a.color&&a.getColor();l&&(s.style.borderColor=l)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new Bo({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&c.push(new Bo({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new fi(c,{width:"100%",height:pe(o)});s=W.makeSvgSpan([],[h],a)}return s.height=o,s.style.height=pe(o),s},mi={encloseSpan:Hf,mathMLnode:kf,svgSpan:Bf};function Qe(i,e){if(!i||i.type!==e)throw new Error("Expected node of type "+e+", but got "+(i?"node of type "+i.type:String(i)));return i}function K0(i){var e=Es(i);if(!e)throw new Error("Expected node of symbol group type, but got "+(i?"node of type "+i.type:String(i)));return e}function Es(i){return i&&(i.type==="atom"||df.hasOwnProperty(i.type))?i:null}var Z0=(i,e)=>{var t,n,r;i&&i.type==="supsub"?(n=Qe(i.base,"accent"),t=n.base,i.base=t,r=uf(ct(i,e)),i.base=n):(n=Qe(i,"accent"),t=n.base);var a=ct(t,e.havingCrampedStyle()),s=n.isShifty&&ft.isCharacterBox(t),o=0;if(s){var l=ft.getBaseElem(t),c=ct(l,e.havingCrampedStyle());o=kl(c).skew}var h=n.label==="\\c",u=h?a.height+a.depth:Math.min(a.height,e.fontMetrics().xHeight),f;if(n.isStretchy)f=mi.svgSpan(n,e),f=W.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"elem",elem:f,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+pe(2*o)+")",marginLeft:pe(2*o)}:void 0}]},e);else{var m,v;n.label==="\\vec"?(m=W.staticSvg("vec",e),v=W.svgData.vec[1]):(m=W.makeOrd({mode:n.mode,text:n.label},e,"textord"),m=kl(m),m.italic=0,v=m.width,h&&(u+=m.depth)),f=W.makeSpan(["accent-body"],[m]);var _=n.label==="\\textcircled";_&&(f.classes.push("accent-full"),u=a.height);var g=o;_||(g-=v/2),f.style.left=pe(g),n.label==="\\textcircled"&&(f.style.top=".2em"),f=W.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:-u},{type:"elem",elem:f}]},e)}var p=W.makeSpan(["mord","accent"],[f],e);return r?(r.children[0]=p,r.height=Math.max(p.height,r.height),r.classes[0]="mord",r):p},nh=(i,e)=>{var t=i.isStretchy?mi.mathMLnode(i.label):new le.MathNode("mo",[Pn(i.label,i.mode)]),n=new le.MathNode("mover",[wt(i.base,e),t]);return n.setAttribute("accent","true"),n},Vf=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(i=>"\\"+i).join("|"));ye({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(i,e)=>{var t=ps(e[0]),n=!Vf.test(i.funcName),r=!n||i.funcName==="\\widehat"||i.funcName==="\\widetilde"||i.funcName==="\\widecheck";return{type:"accent",mode:i.parser.mode,label:i.funcName,isStretchy:n,isShifty:r,base:t}},htmlBuilder:Z0,mathmlBuilder:nh});ye({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(i,e)=>{var t=e[0],n=i.parser.mode;return n==="math"&&(i.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+i.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:i.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:Z0,mathmlBuilder:nh});ye({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"accentUnder",mode:t.mode,label:n,base:r}},htmlBuilder:(i,e)=>{var t=ct(i.base,e),n=mi.svgSpan(i,e),r=i.label==="\\utilde"?.12:0,a=W.makeVList({positionType:"top",positionData:t.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:r},{type:"elem",elem:t}]},e);return W.makeSpan(["mord","accentunder"],[a],e)},mathmlBuilder:(i,e)=>{var t=mi.mathMLnode(i.label),n=new le.MathNode("munder",[wt(i.base,e),t]);return n.setAttribute("accentunder","true"),n}});var Ma=i=>{var e=new le.MathNode("mpadded",i?[i]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};ye({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n,funcName:r}=i;return{type:"xArrow",mode:n.mode,label:r,body:e[0],below:t[0]}},htmlBuilder(i,e){var t=e.style,n=e.havingStyle(t.sup()),r=W.wrapFragment(ct(i.body,n,e),e),a=i.label.slice(0,2)==="\\x"?"x":"cd";r.classes.push(a+"-arrow-pad");var s;i.below&&(n=e.havingStyle(t.sub()),s=W.wrapFragment(ct(i.below,n,e),e),s.classes.push(a+"-arrow-pad"));var o=mi.svgSpan(i,e),l=-e.fontMetrics().axisHeight+.5*o.height,c=-e.fontMetrics().axisHeight-.5*o.height-.111;(r.depth>.25||i.label==="\\xleftequilibrium")&&(c-=r.depth);var h;if(s){var u=-e.fontMetrics().axisHeight+s.height+.5*o.height+.111;h=W.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l},{type:"elem",elem:s,shift:u}]},e)}else h=W.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l}]},e);return h.children[0].children[0].children[1].classes.push("svg-align"),W.makeSpan(["mrel","x-arrow"],[h],e)},mathmlBuilder(i,e){var t=mi.mathMLnode(i.label);t.setAttribute("minsize",i.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(i.body){var r=Ma(wt(i.body,e));if(i.below){var a=Ma(wt(i.below,e));n=new le.MathNode("munderover",[t,a,r])}else n=new le.MathNode("mover",[t,r])}else if(i.below){var s=Ma(wt(i.below,e));n=new le.MathNode("munder",[t,s])}else n=Ma(),n=new le.MathNode("mover",[t,n]);return n}});var Gf=W.makeSpan;function ih(i,e){var t=Xt(i.body,e,!0);return Gf([i.mclass],t,e)}function rh(i,e){var t,n=pn(i.body,e);return i.mclass==="minner"?t=new le.MathNode("mpadded",n):i.mclass==="mord"?i.isCharacterBox?(t=n[0],t.type="mi"):t=new le.MathNode("mi",n):(i.isCharacterBox?(t=n[0],t.type="mo"):t=new le.MathNode("mo",n),i.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):i.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):i.mclass==="mopen"||i.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):i.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}ye({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+n.slice(5),body:Bt(r),isCharacterBox:ft.isCharacterBox(r)}},htmlBuilder:ih,mathmlBuilder:rh});var As=i=>{var e=i.type==="ordgroup"&&i.body.length?i.body[0]:i;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};ye({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(i,e){var{parser:t}=i;return{type:"mclass",mode:t.mode,mclass:As(e[0]),body:Bt(e[1]),isCharacterBox:ft.isCharacterBox(e[1])}}});ye({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(i,e){var{parser:t,funcName:n}=i,r=e[1],a=e[0],s;n!=="\\stackrel"?s=As(r):s="mrel";var o={type:"op",mode:r.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Bt(r)},l={type:"supsub",mode:a.mode,base:o,sup:n==="\\underset"?null:a,sub:n==="\\underset"?a:null};return{type:"mclass",mode:t.mode,mclass:s,body:[l],isCharacterBox:ft.isCharacterBox(l)}},htmlBuilder:ih,mathmlBuilder:rh});ye({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"pmb",mode:t.mode,mclass:As(e[0]),body:Bt(e[0])}},htmlBuilder(i,e){var t=Xt(i.body,e,!0),n=W.makeSpan([i.mclass],t,e);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(i,e){var t=pn(i.body,e),n=new le.MathNode("mstyle",t);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var Wf={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},ql=()=>({type:"styling",body:[],mode:"math",style:"display"}),Xl=i=>i.type==="textord"&&i.text==="@",qf=(i,e)=>(i.type==="mathord"||i.type==="atom")&&i.text===e;function Xf(i,e,t){var n=Wf[i];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(n,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var r=t.callFunction("\\\\cdleft",[e[0]],[]),a={type:"atom",text:n,mode:"math",family:"rel"},s=t.callFunction("\\Big",[a],[]),o=t.callFunction("\\\\cdright",[e[1]],[]),l={type:"ordgroup",mode:"math",body:[r,s,o]};return t.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var c={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[c],[])}default:return{type:"textord",text:" ",mode:"math"}}}function Yf(i){var e=[];for(i.gullet.beginGroup(),i.gullet.macros.set("\\cr","\\\\\\relax"),i.gullet.beginGroup();;){e.push(i.parseExpression(!1,"\\\\")),i.gullet.endGroup(),i.gullet.beginGroup();var t=i.fetch().text;if(t==="&"||t==="\\\\")i.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new ce("Expected \\\\ or \\cr or \\end",i.nextToken)}for(var n=[],r=[n],a=0;a<e.length;a++){for(var s=e[a],o=ql(),l=0;l<s.length;l++)if(!Xl(s[l]))o.body.push(s[l]);else{n.push(o),l+=1;var c=K0(s[l]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!("=|.".indexOf(c)>-1))if("<>AV".indexOf(c)>-1)for(var u=0;u<2;u++){for(var f=!0,m=l+1;m<s.length;m++){if(qf(s[m],c)){f=!1,l=m;break}if(Xl(s[m]))throw new ce("Missing a "+c+" character to complete a CD arrow.",s[m]);h[u].body.push(s[m])}if(f)throw new ce("Missing a "+c+" character to complete a CD arrow.",s[l])}else throw new ce('Expected one of "<>AV=|." after @',s[l]);var v=Xf(c,h,i),_={type:"styling",body:[v],mode:"math",style:"display"};n.push(_),o=ql()}a%2===0?n.push(o):n.shift(),n=[],r.push(n)}i.gullet.endGroup(),i.gullet.endGroup();var g=new Array(r[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:r,arraystretch:1,addJot:!0,rowGaps:[null],cols:g,colSeparationType:"CD",hLinesBeforeRow:new Array(r.length+1).fill([])}}ye({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"cdlabel",mode:t.mode,side:n.slice(4),label:e[0]}},htmlBuilder(i,e){var t=e.havingStyle(e.style.sup()),n=W.wrapFragment(ct(i.label,t,e),e);return n.classes.push("cd-label-"+i.side),n.style.bottom=pe(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(i,e){var t=new le.MathNode("mrow",[wt(i.label,e)]);return t=new le.MathNode("mpadded",[t]),t.setAttribute("width","0"),i.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new le.MathNode("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});ye({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(i,e){var{parser:t}=i;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(i,e){var t=W.wrapFragment(ct(i.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(i,e){return new le.MathNode("mrow",[wt(i.fragment,e)])}});ye({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(i,e){for(var{parser:t}=i,n=Qe(e[0],"ordgroup"),r=n.body,a="",s=0;s<r.length;s++){var o=Qe(r[s],"textord");a+=o.text}var l=parseInt(a),c;if(isNaN(l))throw new ce("\\@char has non-numeric argument "+a);if(l<0||l>=1114111)throw new ce("\\@char with invalid code point "+a);return l<=65535?c=String.fromCharCode(l):(l-=65536,c=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:t.mode,text:c}}});var ah=(i,e)=>{var t=Xt(i.body,e.withColor(i.color),!1);return W.makeFragment(t)},sh=(i,e)=>{var t=pn(i.body,e.withColor(i.color)),n=new le.MathNode("mstyle",t);return n.setAttribute("mathcolor",i.color),n};ye({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(i,e){var{parser:t}=i,n=Qe(e[0],"color-token").color,r=e[1];return{type:"color",mode:t.mode,color:n,body:Bt(r)}},htmlBuilder:ah,mathmlBuilder:sh});ye({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(i,e){var{parser:t,breakOnTokenText:n}=i,r=Qe(e[0],"color-token").color;t.gullet.macros.set("\\current@color",r);var a=t.parseExpression(!0,n);return{type:"color",mode:t.mode,color:r,body:a}},htmlBuilder:ah,mathmlBuilder:sh});ye({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(i,e,t){var{parser:n}=i,r=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,a=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:a,size:r&&Qe(r,"size").value}},htmlBuilder(i,e){var t=W.makeSpan(["mspace"],[],e);return i.newLine&&(t.classes.push("newline"),i.size&&(t.style.marginTop=pe(Lt(i.size,e)))),t},mathmlBuilder(i,e){var t=new le.MathNode("mspace");return i.newLine&&(t.setAttribute("linebreak","newline"),i.size&&t.setAttribute("height",pe(Lt(i.size,e)))),t}});var Wo={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},oh=i=>{var e=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new ce("Expected a control sequence",i);return e},$f=i=>{var e=i.gullet.popToken();return e.text==="="&&(e=i.gullet.popToken(),e.text===" "&&(e=i.gullet.popToken())),e},lh=(i,e,t,n)=>{var r=i.gullet.macros.get(t.text);r==null&&(t.noexpand=!0,r={tokens:[t],numArgs:0,unexpandable:!i.gullet.isExpandable(t.text)}),i.gullet.macros.set(e,r,n)};ye({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(i){var{parser:e,funcName:t}=i;e.consumeSpaces();var n=e.fetch();if(Wo[n.text])return(t==="\\global"||t==="\\\\globallong")&&(n.text=Wo[n.text]),Qe(e.parseFunction(),"internal");throw new ce("Invalid token after macro prefix",n)}});ye({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=e.gullet.popToken(),r=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(r))throw new ce("Expected a control sequence",n);for(var a=0,s,o=[[]];e.gullet.future().text!=="{";)if(n=e.gullet.popToken(),n.text==="#"){if(e.gullet.future().text==="{"){s=e.gullet.future(),o[a].push("{");break}if(n=e.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new ce('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==a+1)throw new ce('Argument number "'+n.text+'" out of order');a++,o.push([])}else{if(n.text==="EOF")throw new ce("Expected a macro definition");o[a].push(n.text)}var{tokens:l}=e.gullet.consumeArg();return s&&l.unshift(s),(t==="\\edef"||t==="\\xdef")&&(l=e.gullet.expandTokens(l),l.reverse()),e.gullet.macros.set(r,{tokens:l,numArgs:a,delimiters:o},t===Wo[t]),{type:"internal",mode:e.mode}}});ye({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=oh(e.gullet.popToken());e.gullet.consumeSpaces();var r=$f(e);return lh(e,n,r,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});ye({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=oh(e.gullet.popToken()),r=e.gullet.popToken(),a=e.gullet.popToken();return lh(e,n,a,t==="\\\\globalfuture"),e.gullet.pushToken(a),e.gullet.pushToken(r),{type:"internal",mode:e.mode}}});var $r=function(e,t,n){var r=Tt.math[e]&&Tt.math[e].replace,a=W0(r||e,t,n);if(!a)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return a},j0=function(e,t,n,r){var a=n.havingBaseStyle(t),s=W.makeSpan(r.concat(a.sizingClasses(n)),[e],n),o=a.sizeMultiplier/n.sizeMultiplier;return s.height*=o,s.depth*=o,s.maxFontSize=a.sizeMultiplier,s},ch=function(e,t,n){var r=t.havingBaseStyle(n),a=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=pe(a),e.height-=a,e.depth+=a},Kf=function(e,t,n,r,a,s){var o=W.makeSymbol(e,"Main-Regular",a,r),l=j0(o,t,r,s);return n&&ch(l,r,t),l},Zf=function(e,t,n,r){return W.makeSymbol(e,"Size"+t+"-Regular",n,r)},uh=function(e,t,n,r,a,s){var o=Zf(e,t,a,r),l=j0(W.makeSpan(["delimsizing","size"+t],[o],r),Oe.TEXT,r,s);return n&&ch(l,r,Oe.TEXT),l},Xs=function(e,t,n){var r;t==="Size1-Regular"?r="delim-size1":r="delim-size4";var a=W.makeSpan(["delimsizinginner",r],[W.makeSpan([],[W.makeSymbol(e,t,n)])]);return{type:"elem",elem:a}},Ys=function(e,t,n){var r=Gn["Size4-Regular"][e.charCodeAt(0)]?Gn["Size4-Regular"][e.charCodeAt(0)][4]:Gn["Size1-Regular"][e.charCodeAt(0)][4],a=new Ui("inner",ef(e,Math.round(1e3*t))),s=new fi([a],{width:pe(r),height:pe(t),style:"width:"+pe(r),viewBox:"0 0 "+1e3*r+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),o=W.makeSvgSpan([],[s],n);return o.height=t,o.style.height=pe(t),o.style.width=pe(r),{type:"elem",elem:o}},qo=.008,wa={type:"kern",size:-1*qo},jf=["|","\\lvert","\\rvert","\\vert"],Jf=["\\|","\\lVert","\\rVert","\\Vert"],hh=function(e,t,n,r,a,s){var o,l,c,h,u="",f=0;o=c=h=e,l=null;var m="Size1-Regular";e==="\\uparrow"?c=h="⏐":e==="\\Uparrow"?c=h="‖":e==="\\downarrow"?o=c="⏐":e==="\\Downarrow"?o=c="‖":e==="\\updownarrow"?(o="\\uparrow",c="⏐",h="\\downarrow"):e==="\\Updownarrow"?(o="\\Uparrow",c="‖",h="\\Downarrow"):jf.includes(e)?(c="∣",u="vert",f=333):Jf.includes(e)?(c="∥",u="doublevert",f=556):e==="["||e==="\\lbrack"?(o="⎡",c="⎢",h="⎣",m="Size4-Regular",u="lbrack",f=667):e==="]"||e==="\\rbrack"?(o="⎤",c="⎥",h="⎦",m="Size4-Regular",u="rbrack",f=667):e==="\\lfloor"||e==="⌊"?(c=o="⎢",h="⎣",m="Size4-Regular",u="lfloor",f=667):e==="\\lceil"||e==="⌈"?(o="⎡",c=h="⎢",m="Size4-Regular",u="lceil",f=667):e==="\\rfloor"||e==="⌋"?(c=o="⎥",h="⎦",m="Size4-Regular",u="rfloor",f=667):e==="\\rceil"||e==="⌉"?(o="⎤",c=h="⎥",m="Size4-Regular",u="rceil",f=667):e==="("||e==="\\lparen"?(o="⎛",c="⎜",h="⎝",m="Size4-Regular",u="lparen",f=875):e===")"||e==="\\rparen"?(o="⎞",c="⎟",h="⎠",m="Size4-Regular",u="rparen",f=875):e==="\\{"||e==="\\lbrace"?(o="⎧",l="⎨",h="⎩",c="⎪",m="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(o="⎫",l="⎬",h="⎭",c="⎪",m="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(o="⎧",h="⎩",c="⎪",m="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(o="⎫",h="⎭",c="⎪",m="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(o="⎧",h="⎭",c="⎪",m="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(o="⎫",h="⎩",c="⎪",m="Size4-Regular");var v=$r(o,m,a),_=v.height+v.depth,g=$r(c,m,a),p=g.height+g.depth,M=$r(h,m,a),A=M.height+M.depth,R=0,L=1;if(l!==null){var C=$r(l,m,a);R=C.height+C.depth,L=2}var N=_+A+R,z=Math.max(0,Math.ceil((t-N)/(L*p))),w=N+z*L*p,E=r.fontMetrics().axisHeight;n&&(E*=r.sizeMultiplier);var U=w/2-E,B=[];if(u.length>0){var X=w-_-A,K=Math.round(w*1e3),Z=tf(u,Math.round(X*1e3)),Q=new Ui(u,Z),se=(f/1e3).toFixed(3)+"em",J=(K/1e3).toFixed(3)+"em",de=new fi([Q],{width:se,height:J,viewBox:"0 0 "+f+" "+K}),he=W.makeSvgSpan([],[de],r);he.height=K/1e3,he.style.width=se,he.style.height=J,B.push({type:"elem",elem:he})}else{if(B.push(Xs(h,m,a)),B.push(wa),l===null){var Pe=w-_-A+2*qo;B.push(Ys(c,Pe,r))}else{var qe=(w-_-A-R)/2+2*qo;B.push(Ys(c,qe,r)),B.push(wa),B.push(Xs(l,m,a)),B.push(wa),B.push(Ys(c,qe,r))}B.push(wa),B.push(Xs(o,m,a))}var ot=r.havingBaseStyle(Oe.TEXT),mt=W.makeVList({positionType:"bottom",positionData:U,children:B},ot);return j0(W.makeSpan(["delimsizing","mult"],[mt],ot),Oe.TEXT,r,s)},$s=80,Ks=.08,Zs=function(e,t,n,r,a){var s=Qd(e,r,n),o=new Ui(e,s),l=new fi([o],{width:"400em",height:pe(t),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return W.makeSvgSpan(["hide-tail"],[l],a)},Qf=function(e,t){var n=t.havingBaseSizing(),r=mh("\\surd",e*n.sizeMultiplier,ph,n),a=n.sizeMultiplier,s=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,l=0,c=0,h=0,u;return r.type==="small"?(h=1e3+1e3*s+$s,e<1?a=1:e<1.4&&(a=.7),l=(1+s+Ks)/a,c=(1+s)/a,o=Zs("sqrtMain",l,h,s,t),o.style.minWidth="0.853em",u=.833/a):r.type==="large"?(h=(1e3+$s)*Zr[r.size],c=(Zr[r.size]+s)/a,l=(Zr[r.size]+s+Ks)/a,o=Zs("sqrtSize"+r.size,l,h,s,t),o.style.minWidth="1.02em",u=1/a):(l=e+s+Ks,c=e+s,h=Math.floor(1e3*e+s)+$s,o=Zs("sqrtTall",l,h,s,t),o.style.minWidth="0.742em",u=1.056),o.height=c,o.style.height=pe(l),{span:o,advanceWidth:u,ruleWidth:(t.fontMetrics().sqrtRuleThickness+s)*a}},dh=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],ep=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],fh=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],Zr=[0,1.2,1.8,2.4,3],tp=function(e,t,n,r,a){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),dh.includes(e)||fh.includes(e))return uh(e,t,!1,n,r,a);if(ep.includes(e))return hh(e,Zr[t],!1,n,r,a);throw new ce("Illegal delimiter: '"+e+"'")},np=[{type:"small",style:Oe.SCRIPTSCRIPT},{type:"small",style:Oe.SCRIPT},{type:"small",style:Oe.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],ip=[{type:"small",style:Oe.SCRIPTSCRIPT},{type:"small",style:Oe.SCRIPT},{type:"small",style:Oe.TEXT},{type:"stack"}],ph=[{type:"small",style:Oe.SCRIPTSCRIPT},{type:"small",style:Oe.SCRIPT},{type:"small",style:Oe.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],rp=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+e.type+"' here.")},mh=function(e,t,n,r){for(var a=Math.min(2,3-r.style.size),s=a;s<n.length&&n[s].type!=="stack";s++){var o=$r(e,rp(n[s]),"math"),l=o.height+o.depth;if(n[s].type==="small"){var c=r.havingBaseStyle(n[s].style);l*=c.sizeMultiplier}if(l>t)return n[s]}return n[n.length-1]},xh=function(e,t,n,r,a,s){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var o;fh.includes(e)?o=np:dh.includes(e)?o=ph:o=ip;var l=mh(e,t,o,r);return l.type==="small"?Kf(e,l.style,n,r,a,s):l.type==="large"?uh(e,l.size,n,r,a,s):hh(e,t,n,r,a,s)},ap=function(e,t,n,r,a,s){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,l=901,c=5/r.fontMetrics().ptPerEm,h=Math.max(t-o,n+o),u=Math.max(h/500*l,2*h-c);return xh(e,u,!0,r,a,s)},ui={sqrtImage:Qf,sizedDelim:tp,sizeToMaxHeight:Zr,customSizedDelim:xh,leftRightDelim:ap},Yl={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},sp=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function Cs(i,e){var t=Es(i);if(t&&sp.includes(t.text))return t;throw t?new ce("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",i):new ce("Invalid delimiter type '"+i.type+"'",i)}ye({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(i,e)=>{var t=Cs(e[0],i);return{type:"delimsizing",mode:i.parser.mode,size:Yl[i.funcName].size,mclass:Yl[i.funcName].mclass,delim:t.text}},htmlBuilder:(i,e)=>i.delim==="."?W.makeSpan([i.mclass]):ui.sizedDelim(i.delim,i.size,e,i.mode,[i.mclass]),mathmlBuilder:i=>{var e=[];i.delim!=="."&&e.push(Pn(i.delim,i.mode));var t=new le.MathNode("mo",e);i.mclass==="mopen"||i.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var n=pe(ui.sizeToMaxHeight[i.size]);return t.setAttribute("minsize",n),t.setAttribute("maxsize",n),t}});function $l(i){if(!i.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ye({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=i.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new ce("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:i.parser.mode,delim:Cs(e[0],i).text,color:t}}});ye({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=Cs(e[0],i),n=i.parser;++n.leftrightDepth;var r=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var a=Qe(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:r,left:t.text,right:a.delim,rightColor:a.color}},htmlBuilder:(i,e)=>{$l(i);for(var t=Xt(i.body,e,!0,["mopen","mclose"]),n=0,r=0,a=!1,s=0;s<t.length;s++)t[s].isMiddle?a=!0:(n=Math.max(t[s].height,n),r=Math.max(t[s].depth,r));n*=e.sizeMultiplier,r*=e.sizeMultiplier;var o;if(i.left==="."?o=ea(e,["mopen"]):o=ui.leftRightDelim(i.left,n,r,e,i.mode,["mopen"]),t.unshift(o),a)for(var l=1;l<t.length;l++){var c=t[l],h=c.isMiddle;h&&(t[l]=ui.leftRightDelim(h.delim,n,r,h.options,i.mode,[]))}var u;if(i.right===".")u=ea(e,["mclose"]);else{var f=i.rightColor?e.withColor(i.rightColor):e;u=ui.leftRightDelim(i.right,n,r,f,i.mode,["mclose"])}return t.push(u),W.makeSpan(["minner"],t,e)},mathmlBuilder:(i,e)=>{$l(i);var t=pn(i.body,e);if(i.left!=="."){var n=new le.MathNode("mo",[Pn(i.left,i.mode)]);n.setAttribute("fence","true"),t.unshift(n)}if(i.right!=="."){var r=new le.MathNode("mo",[Pn(i.right,i.mode)]);r.setAttribute("fence","true"),i.rightColor&&r.setAttribute("mathcolor",i.rightColor),t.push(r)}return Y0(t)}});ye({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=Cs(e[0],i);if(!i.parser.leftrightDepth)throw new ce("\\middle without preceding \\left",t);return{type:"middle",mode:i.parser.mode,delim:t.text}},htmlBuilder:(i,e)=>{var t;if(i.delim===".")t=ea(e,[]);else{t=ui.sizedDelim(i.delim,1,e,i.mode,[]);var n={delim:i.delim,options:e};t.isMiddle=n}return t},mathmlBuilder:(i,e)=>{var t=i.delim==="\\vert"||i.delim==="|"?Pn("|","text"):Pn(i.delim,i.mode),n=new le.MathNode("mo",[t]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var J0=(i,e)=>{var t=W.wrapFragment(ct(i.body,e),e),n=i.label.slice(1),r=e.sizeMultiplier,a,s=0,o=ft.isCharacterBox(i.body);if(n==="sout")a=W.makeSpan(["stretchy","sout"]),a.height=e.fontMetrics().defaultRuleThickness/r,s=-.5*e.fontMetrics().xHeight;else if(n==="phase"){var l=Lt({number:.6,unit:"pt"},e),c=Lt({number:.35,unit:"ex"},e),h=e.havingBaseSizing();r=r/h.sizeMultiplier;var u=t.height+t.depth+l+c;t.style.paddingLeft=pe(u/2+l);var f=Math.floor(1e3*u*r),m=jd(f),v=new fi([new Ui("phase",m)],{width:"400em",height:pe(f/1e3),viewBox:"0 0 400000 "+f,preserveAspectRatio:"xMinYMin slice"});a=W.makeSvgSpan(["hide-tail"],[v],e),a.style.height=pe(u),s=t.depth+l+c}else{/cancel/.test(n)?o||t.classes.push("cancel-pad"):n==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var _=0,g=0,p=0;/box/.test(n)?(p=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),_=e.fontMetrics().fboxsep+(n==="colorbox"?0:p),g=_):n==="angl"?(p=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),_=4*p,g=Math.max(0,.25-t.depth)):(_=o?.2:0,g=_),a=mi.encloseSpan(t,n,_,g,e),/fbox|boxed|fcolorbox/.test(n)?(a.style.borderStyle="solid",a.style.borderWidth=pe(p)):n==="angl"&&p!==.049&&(a.style.borderTopWidth=pe(p),a.style.borderRightWidth=pe(p)),s=t.depth+g,i.backgroundColor&&(a.style.backgroundColor=i.backgroundColor,i.borderColor&&(a.style.borderColor=i.borderColor))}var M;if(i.backgroundColor)M=W.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:s},{type:"elem",elem:t,shift:0}]},e);else{var A=/cancel|phase/.test(n)?["svg-align"]:[];M=W.makeVList({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:a,shift:s,wrapperClasses:A}]},e)}return/cancel/.test(n)&&(M.height=t.height,M.depth=t.depth),/cancel/.test(n)&&!o?W.makeSpan(["mord","cancel-lap"],[M],e):W.makeSpan(["mord"],[M],e)},Q0=(i,e)=>{var t=0,n=new le.MathNode(i.label.indexOf("colorbox")>-1?"mpadded":"menclose",[wt(i.body,e)]);switch(i.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*t+"pt"),n.setAttribute("height","+"+2*t+"pt"),n.setAttribute("lspace",t+"pt"),n.setAttribute("voffset",t+"pt"),i.label==="\\fcolorbox"){var r=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);n.setAttribute("style","border: "+r+"em solid "+String(i.borderColor))}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return i.backgroundColor&&n.setAttribute("mathbackground",i.backgroundColor),n};ye({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(i,e,t){var{parser:n,funcName:r}=i,a=Qe(e[0],"color-token").color,s=e[1];return{type:"enclose",mode:n.mode,label:r,backgroundColor:a,body:s}},htmlBuilder:J0,mathmlBuilder:Q0});ye({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(i,e,t){var{parser:n,funcName:r}=i,a=Qe(e[0],"color-token").color,s=Qe(e[1],"color-token").color,o=e[2];return{type:"enclose",mode:n.mode,label:r,backgroundColor:s,borderColor:a,body:o}},htmlBuilder:J0,mathmlBuilder:Q0});ye({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});ye({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"enclose",mode:t.mode,label:n,body:r}},htmlBuilder:J0,mathmlBuilder:Q0});ye({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var gh={};function Yn(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:a,mathmlBuilder:s}=i,o={type:e,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:r},l=0;l<t.length;++l)gh[t[l]]=o;a&&(ds[e]=a),s&&(fs[e]=s)}var vh={};function S(i,e){vh[i]=e}function Kl(i){var e=[];i.consumeSpaces();var t=i.fetch().text;for(t==="\\relax"&&(i.consume(),i.consumeSpaces(),t=i.fetch().text);t==="\\hline"||t==="\\hdashline";)i.consume(),e.push(t==="\\hdashline"),i.consumeSpaces(),t=i.fetch().text;return e}var Rs=i=>{var e=i.parser.settings;if(!e.displayMode)throw new ce("{"+i.envName+"} can be used only in display mode.")};function el(i){if(i.indexOf("ed")===-1)return i.indexOf("*")===-1}function Oi(i,e,t){var{hskipBeforeAndAfter:n,addJot:r,cols:a,arraystretch:s,colSeparationType:o,autoTag:l,singleRow:c,emptySingleRow:h,maxNumCols:u,leqno:f}=e;if(i.gullet.beginGroup(),c||i.gullet.macros.set("\\cr","\\\\\\relax"),!s){var m=i.gullet.expandMacroAsText("\\arraystretch");if(m==null)s=1;else if(s=parseFloat(m),!s||s<0)throw new ce("Invalid \\arraystretch: "+m)}i.gullet.beginGroup();var v=[],_=[v],g=[],p=[],M=l!=null?[]:void 0;function A(){l&&i.gullet.macros.set("\\@eqnsw","1",!0)}function R(){M&&(i.gullet.macros.get("\\df@tag")?(M.push(i.subparse([new bn("\\df@tag")])),i.gullet.macros.set("\\df@tag",void 0,!0)):M.push(!!l&&i.gullet.macros.get("\\@eqnsw")==="1"))}for(A(),p.push(Kl(i));;){var L=i.parseExpression(!1,c?"\\end":"\\\\");i.gullet.endGroup(),i.gullet.beginGroup(),L={type:"ordgroup",mode:i.mode,body:L},t&&(L={type:"styling",mode:i.mode,style:t,body:[L]}),v.push(L);var C=i.fetch().text;if(C==="&"){if(u&&v.length===u){if(c||o)throw new ce("Too many tab characters: &",i.nextToken);i.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}i.consume()}else if(C==="\\end"){R(),v.length===1&&L.type==="styling"&&L.body[0].body.length===0&&(_.length>1||!h)&&_.pop(),p.length<_.length+1&&p.push([]);break}else if(C==="\\\\"){i.consume();var N=void 0;i.gullet.future().text!==" "&&(N=i.parseSizeGroup(!0)),g.push(N?N.value:null),R(),p.push(Kl(i)),v=[],_.push(v),A()}else throw new ce("Expected & or \\\\ or \\cr or \\end",i.nextToken)}return i.gullet.endGroup(),i.gullet.endGroup(),{type:"array",mode:i.mode,addJot:r,arraystretch:s,body:_,cols:a,rowGaps:g,hskipBeforeAndAfter:n,hLinesBeforeRow:p,colSeparationType:o,tags:M,leqno:f}}function tl(i){return i.slice(0,1)==="d"?"display":"text"}var $n=function(e,t){var n,r,a=e.body.length,s=e.hLinesBeforeRow,o=0,l=new Array(a),c=[],h=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),u=1/t.fontMetrics().ptPerEm,f=5*u;if(e.colSeparationType&&e.colSeparationType==="small"){var m=t.havingStyle(Oe.SCRIPT).sizeMultiplier;f=.2778*(m/t.sizeMultiplier)}var v=e.colSeparationType==="CD"?Lt({number:3,unit:"ex"},t):12*u,_=3*u,g=e.arraystretch*v,p=.7*g,M=.3*g,A=0;function R(pt){for(var Ae=0;Ae<pt.length;++Ae)Ae>0&&(A+=.25),c.push({pos:A,isDashed:pt[Ae]})}for(R(s[0]),n=0;n<e.body.length;++n){var L=e.body[n],C=p,N=M;o<L.length&&(o=L.length);var z=new Array(L.length);for(r=0;r<L.length;++r){var w=ct(L[r],t);N<w.depth&&(N=w.depth),C<w.height&&(C=w.height),z[r]=w}var E=e.rowGaps[n],U=0;E&&(U=Lt(E,t),U>0&&(U+=M,N<U&&(N=U),U=0)),e.addJot&&(N+=_),z.height=C,z.depth=N,A+=C,z.pos=A,A+=N+U,l[n]=z,R(s[n+1])}var B=A/2+t.fontMetrics().axisHeight,X=e.cols||[],K=[],Z,Q,se=[];if(e.tags&&e.tags.some(pt=>pt))for(n=0;n<a;++n){var J=l[n],de=J.pos-B,he=e.tags[n],Pe=void 0;he===!0?Pe=W.makeSpan(["eqn-num"],[],t):he===!1?Pe=W.makeSpan([],[],t):Pe=W.makeSpan([],Xt(he,t,!0),t),Pe.depth=J.depth,Pe.height=J.height,se.push({type:"elem",elem:Pe,shift:de})}for(r=0,Q=0;r<o||Q<X.length;++r,++Q){for(var qe=X[Q]||{},ot=!0;qe.type==="separator";){if(ot||(Z=W.makeSpan(["arraycolsep"],[]),Z.style.width=pe(t.fontMetrics().doubleRuleSep),K.push(Z)),qe.separator==="|"||qe.separator===":"){var mt=qe.separator==="|"?"solid":"dashed",lt=W.makeSpan(["vertical-separator"],[],t);lt.style.height=pe(A),lt.style.borderRightWidth=pe(h),lt.style.borderRightStyle=mt,lt.style.margin="0 "+pe(-h/2);var ee=A-B;ee&&(lt.style.verticalAlign=pe(-ee)),K.push(lt)}else throw new ce("Invalid separator type: "+qe.separator);Q++,qe=X[Q]||{},ot=!1}if(!(r>=o)){var ie=void 0;(r>0||e.hskipBeforeAndAfter)&&(ie=ft.deflt(qe.pregap,f),ie!==0&&(Z=W.makeSpan(["arraycolsep"],[]),Z.style.width=pe(ie),K.push(Z)));var Se=[];for(n=0;n<a;++n){var Xe=l[n],Le=Xe[r];if(Le){var rt=Xe.pos-B;Le.depth=Xe.depth,Le.height=Xe.height,Se.push({type:"elem",elem:Le,shift:rt})}}Se=W.makeVList({positionType:"individualShift",children:Se},t),Se=W.makeSpan(["col-align-"+(qe.align||"c")],[Se]),K.push(Se),(r<o-1||e.hskipBeforeAndAfter)&&(ie=ft.deflt(qe.postgap,f),ie!==0&&(Z=W.makeSpan(["arraycolsep"],[]),Z.style.width=pe(ie),K.push(Z)))}}if(l=W.makeSpan(["mtable"],K),c.length>0){for(var Wt=W.makeLineSpan("hline",t,h),nt=W.makeLineSpan("hdashline",t,h),gt=[{type:"elem",elem:l,shift:0}];c.length>0;){var F=c.pop(),it=F.pos-B;F.isDashed?gt.push({type:"elem",elem:nt,shift:it}):gt.push({type:"elem",elem:Wt,shift:it})}l=W.makeVList({positionType:"individualShift",children:gt},t)}if(se.length===0)return W.makeSpan(["mord"],[l],t);var et=W.makeVList({positionType:"individualShift",children:se},t);return et=W.makeSpan(["tag"],[et],t),W.makeFragment([l,et])},op={c:"center ",l:"left ",r:"right "},Kn=function(e,t){for(var n=[],r=new le.MathNode("mtd",[],["mtr-glue"]),a=new le.MathNode("mtd",[],["mml-eqn-num"]),s=0;s<e.body.length;s++){for(var o=e.body[s],l=[],c=0;c<o.length;c++)l.push(new le.MathNode("mtd",[wt(o[c],t)]));e.tags&&e.tags[s]&&(l.unshift(r),l.push(r),e.leqno?l.unshift(a):l.push(a)),n.push(new le.MathNode("mtr",l))}var h=new le.MathNode("mtable",n),u=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);h.setAttribute("rowspacing",pe(u));var f="",m="";if(e.cols&&e.cols.length>0){var v=e.cols,_="",g=!1,p=0,M=v.length;v[0].type==="separator"&&(f+="top ",p=1),v[v.length-1].type==="separator"&&(f+="bottom ",M-=1);for(var A=p;A<M;A++)v[A].type==="align"?(m+=op[v[A].align],g&&(_+="none "),g=!0):v[A].type==="separator"&&g&&(_+=v[A].separator==="|"?"solid ":"dashed ",g=!1);h.setAttribute("columnalign",m.trim()),/[sd]/.test(_)&&h.setAttribute("columnlines",_.trim())}if(e.colSeparationType==="align"){for(var R=e.cols||[],L="",C=1;C<R.length;C++)L+=C%2?"0em ":"1em ";h.setAttribute("columnspacing",L.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var N="",z=e.hLinesBeforeRow;f+=z[0].length>0?"left ":"",f+=z[z.length-1].length>0?"right ":"";for(var w=1;w<z.length-1;w++)N+=z[w].length===0?"none ":z[w][0]?"dashed ":"solid ";return/[sd]/.test(N)&&h.setAttribute("rowlines",N.trim()),f!==""&&(h=new le.MathNode("menclose",[h]),h.setAttribute("notation",f.trim())),e.arraystretch&&e.arraystretch<1&&(h=new le.MathNode("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},_h=function(e,t){e.envName.indexOf("ed")===-1&&Rs(e);var n=[],r=e.envName.indexOf("at")>-1?"alignat":"align",a=e.envName==="split",s=Oi(e.parser,{cols:n,addJot:!0,autoTag:a?void 0:el(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:a?2:void 0,leqno:e.parser.settings.leqno},"display"),o,l=0,c={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var h="",u=0;u<t[0].body.length;u++){var f=Qe(t[0].body[u],"textord");h+=f.text}o=Number(h),l=o*2}var m=!l;s.body.forEach(function(p){for(var M=1;M<p.length;M+=2){var A=Qe(p[M],"styling"),R=Qe(A.body[0],"ordgroup");R.body.unshift(c)}if(m)l<p.length&&(l=p.length);else{var L=p.length/2;if(o<L)throw new ce("Too many math in a row: "+("expected "+o+", but got "+L),p[0])}});for(var v=0;v<l;++v){var _="r",g=0;v%2===1?_="l":v>0&&m&&(g=1),n[v]={type:"align",align:_,pregap:g,postgap:0}}return s.colSeparationType=m?"align":"alignat",s};Yn({type:"array",names:["array","darray"],props:{numArgs:1},handler(i,e){var t=Es(e[0]),n=t?[e[0]]:Qe(e[0],"ordgroup").body,r=n.map(function(s){var o=K0(s),l=o.text;if("lcr".indexOf(l)!==-1)return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new ce("Unknown column alignment: "+l,s)}),a={cols:r,hskipBeforeAndAfter:!0,maxNumCols:r.length};return Oi(i.parser,a,tl(i.envName))},htmlBuilder:$n,mathmlBuilder:Kn});Yn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(i){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[i.envName.replace("*","")],t="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(i.envName.charAt(i.envName.length-1)==="*"){var r=i.parser;if(r.consumeSpaces(),r.fetch().text==="["){if(r.consume(),r.consumeSpaces(),t=r.fetch().text,"lcr".indexOf(t)===-1)throw new ce("Expected l or c or r",r.nextToken);r.consume(),r.consumeSpaces(),r.expect("]"),r.consume(),n.cols=[{type:"align",align:t}]}}var a=Oi(i.parser,n,tl(i.envName)),s=Math.max(0,...a.body.map(o=>o.length));return a.cols=new Array(s).fill({type:"align",align:t}),e?{type:"leftright",mode:i.mode,body:[a],left:e[0],right:e[1],rightColor:void 0}:a},htmlBuilder:$n,mathmlBuilder:Kn});Yn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(i){var e={arraystretch:.5},t=Oi(i.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:$n,mathmlBuilder:Kn});Yn({type:"array",names:["subarray"],props:{numArgs:1},handler(i,e){var t=Es(e[0]),n=t?[e[0]]:Qe(e[0],"ordgroup").body,r=n.map(function(s){var o=K0(s),l=o.text;if("lc".indexOf(l)!==-1)return{type:"align",align:l};throw new ce("Unknown column alignment: "+l,s)});if(r.length>1)throw new ce("{subarray} can contain only one column");var a={cols:r,hskipBeforeAndAfter:!1,arraystretch:.5};if(a=Oi(i.parser,a,"script"),a.body.length>0&&a.body[0].length>1)throw new ce("{subarray} can contain only one column");return a},htmlBuilder:$n,mathmlBuilder:Kn});Yn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(i){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=Oi(i.parser,e,tl(i.envName));return{type:"leftright",mode:i.mode,body:[t],left:i.envName.indexOf("r")>-1?".":"\\{",right:i.envName.indexOf("r")>-1?"\\}":".",rightColor:void 0}},htmlBuilder:$n,mathmlBuilder:Kn});Yn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:_h,htmlBuilder:$n,mathmlBuilder:Kn});Yn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(i){["gather","gather*"].includes(i.envName)&&Rs(i);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:el(i.envName),emptySingleRow:!0,leqno:i.parser.settings.leqno};return Oi(i.parser,e,"display")},htmlBuilder:$n,mathmlBuilder:Kn});Yn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:_h,htmlBuilder:$n,mathmlBuilder:Kn});Yn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(i){Rs(i);var e={autoTag:el(i.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:i.parser.settings.leqno};return Oi(i.parser,e,"display")},htmlBuilder:$n,mathmlBuilder:Kn});Yn({type:"array",names:["CD"],props:{numArgs:0},handler(i){return Rs(i),Yf(i.parser)},htmlBuilder:$n,mathmlBuilder:Kn});S("\\nonumber","\\gdef\\@eqnsw{0}");S("\\notag","\\nonumber");ye({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(i,e){throw new ce(i.funcName+" valid only within array environment")}});var Zl=gh;ye({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];if(r.type!=="ordgroup")throw new ce("Invalid environment name",r);for(var a="",s=0;s<r.body.length;++s)a+=Qe(r.body[s],"textord").text;if(n==="\\begin"){if(!Zl.hasOwnProperty(a))throw new ce("No such environment: "+a,r);var o=Zl[a],{args:l,optArgs:c}=t.parseArguments("\\begin{"+a+"}",o),h={mode:t.mode,envName:a,parser:t},u=o.handler(h,l,c);t.expect("\\end",!1);var f=t.nextToken,m=Qe(t.parseFunction(),"environment");if(m.name!==a)throw new ce("Mismatch: \\begin{"+a+"} matched by \\end{"+m.name+"}",f);return u}return{type:"environment",mode:t.mode,name:a,nameGroup:r}}});var bh=(i,e)=>{var t=i.font,n=e.withFont(t);return ct(i.body,n)},yh=(i,e)=>{var t=i.font,n=e.withFont(t);return wt(i.body,n)},jl={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};ye({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=ps(e[0]),a=n;return a in jl&&(a=jl[a]),{type:"font",mode:t.mode,font:a.slice(1),body:r}},htmlBuilder:bh,mathmlBuilder:yh});ye({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(i,e)=>{var{parser:t}=i,n=e[0],r=ft.isCharacterBox(n);return{type:"mclass",mode:t.mode,mclass:As(n),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:n}],isCharacterBox:r}}});ye({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,breakOnTokenText:r}=i,{mode:a}=t,s=t.parseExpression(!0,r),o="math"+n.slice(1);return{type:"font",mode:a,font:o,body:{type:"ordgroup",mode:t.mode,body:s}}},htmlBuilder:bh,mathmlBuilder:yh});var Sh=(i,e)=>{var t=e;return i==="display"?t=t.id>=Oe.SCRIPT.id?t.text():Oe.DISPLAY:i==="text"&&t.size===Oe.DISPLAY.size?t=Oe.TEXT:i==="script"?t=Oe.SCRIPT:i==="scriptscript"&&(t=Oe.SCRIPTSCRIPT),t},nl=(i,e)=>{var t=Sh(i.size,e.style),n=t.fracNum(),r=t.fracDen(),a;a=e.havingStyle(n);var s=ct(i.numer,a,e);if(i.continued){var o=8.5/e.fontMetrics().ptPerEm,l=3.5/e.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}a=e.havingStyle(r);var c=ct(i.denom,a,e),h,u,f;i.hasBarLine?(i.barSize?(u=Lt(i.barSize,e),h=W.makeLineSpan("frac-line",e,u)):h=W.makeLineSpan("frac-line",e),u=h.height,f=h.height):(h=null,u=0,f=e.fontMetrics().defaultRuleThickness);var m,v,_;t.size===Oe.DISPLAY.size||i.size==="display"?(m=e.fontMetrics().num1,u>0?v=3*f:v=7*f,_=e.fontMetrics().denom1):(u>0?(m=e.fontMetrics().num2,v=f):(m=e.fontMetrics().num3,v=3*f),_=e.fontMetrics().denom2);var g;if(h){var M=e.fontMetrics().axisHeight;m-s.depth-(M+.5*u)<v&&(m+=v-(m-s.depth-(M+.5*u))),M-.5*u-(c.height-_)<v&&(_+=v-(M-.5*u-(c.height-_)));var A=-(M-.5*u);g=W.makeVList({positionType:"individualShift",children:[{type:"elem",elem:c,shift:_},{type:"elem",elem:h,shift:A},{type:"elem",elem:s,shift:-m}]},e)}else{var p=m-s.depth-(c.height-_);p<v&&(m+=.5*(v-p),_+=.5*(v-p)),g=W.makeVList({positionType:"individualShift",children:[{type:"elem",elem:c,shift:_},{type:"elem",elem:s,shift:-m}]},e)}a=e.havingStyle(t),g.height*=a.sizeMultiplier/e.sizeMultiplier,g.depth*=a.sizeMultiplier/e.sizeMultiplier;var R;t.size===Oe.DISPLAY.size?R=e.fontMetrics().delim1:t.size===Oe.SCRIPTSCRIPT.size?R=e.havingStyle(Oe.SCRIPT).fontMetrics().delim2:R=e.fontMetrics().delim2;var L,C;return i.leftDelim==null?L=ea(e,["mopen"]):L=ui.customSizedDelim(i.leftDelim,R,!0,e.havingStyle(t),i.mode,["mopen"]),i.continued?C=W.makeSpan([]):i.rightDelim==null?C=ea(e,["mclose"]):C=ui.customSizedDelim(i.rightDelim,R,!0,e.havingStyle(t),i.mode,["mclose"]),W.makeSpan(["mord"].concat(a.sizingClasses(e)),[L,W.makeSpan(["mfrac"],[g]),C],e)},il=(i,e)=>{var t=new le.MathNode("mfrac",[wt(i.numer,e),wt(i.denom,e)]);if(!i.hasBarLine)t.setAttribute("linethickness","0px");else if(i.barSize){var n=Lt(i.barSize,e);t.setAttribute("linethickness",pe(n))}var r=Sh(i.size,e.style);if(r.size!==e.style.size){t=new le.MathNode("mstyle",[t]);var a=r.size===Oe.DISPLAY.size?"true":"false";t.setAttribute("displaystyle",a),t.setAttribute("scriptlevel","0")}if(i.leftDelim!=null||i.rightDelim!=null){var s=[];if(i.leftDelim!=null){var o=new le.MathNode("mo",[new le.TextNode(i.leftDelim.replace("\\",""))]);o.setAttribute("fence","true"),s.push(o)}if(s.push(t),i.rightDelim!=null){var l=new le.MathNode("mo",[new le.TextNode(i.rightDelim.replace("\\",""))]);l.setAttribute("fence","true"),s.push(l)}return Y0(s)}return t};ye({type:"genfrac",names:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],a=e[1],s,o=null,l=null,c="auto";switch(n){case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,o="(",l=")";break;case"\\\\bracefrac":s=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":s=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}switch(n){case"\\dfrac":case"\\dbinom":c="display";break;case"\\tfrac":case"\\tbinom":c="text";break}return{type:"genfrac",mode:t.mode,continued:!1,numer:r,denom:a,hasBarLine:s,leftDelim:o,rightDelim:l,size:c,barSize:null}},htmlBuilder:nl,mathmlBuilder:il});ye({type:"genfrac",names:["\\cfrac"],props:{numArgs:2},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],a=e[1];return{type:"genfrac",mode:t.mode,continued:!0,numer:r,denom:a,hasBarLine:!0,leftDelim:null,rightDelim:null,size:"display",barSize:null}}});ye({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(i){var{parser:e,funcName:t,token:n}=i,r;switch(t){case"\\over":r="\\frac";break;case"\\choose":r="\\binom";break;case"\\atop":r="\\\\atopfrac";break;case"\\brace":r="\\\\bracefrac";break;case"\\brack":r="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:r,token:n}}});var Jl=["display","text","script","scriptscript"],Ql=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};ye({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(i,e){var{parser:t}=i,n=e[4],r=e[5],a=ps(e[0]),s=a.type==="atom"&&a.family==="open"?Ql(a.text):null,o=ps(e[1]),l=o.type==="atom"&&o.family==="close"?Ql(o.text):null,c=Qe(e[2],"size"),h,u=null;c.isBlank?h=!0:(u=c.value,h=u.number>0);var f="auto",m=e[3];if(m.type==="ordgroup"){if(m.body.length>0){var v=Qe(m.body[0],"textord");f=Jl[Number(v.text)]}}else m=Qe(m,"textord"),f=Jl[Number(m.text)];return{type:"genfrac",mode:t.mode,numer:n,denom:r,continued:!1,hasBarLine:h,barSize:u,leftDelim:s,rightDelim:l,size:f}},htmlBuilder:nl,mathmlBuilder:il});ye({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(i,e){var{parser:t,funcName:n,token:r}=i;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:Qe(e[0],"size").value,token:r}}});ye({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],a=Fd(Qe(e[1],"infix").size),s=e[2],o=a.number>0;return{type:"genfrac",mode:t.mode,numer:r,denom:s,continued:!1,hasBarLine:o,barSize:a,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:nl,mathmlBuilder:il});var Mh=(i,e)=>{var t=e.style,n,r;i.type==="supsub"?(n=i.sup?ct(i.sup,e.havingStyle(t.sup()),e):ct(i.sub,e.havingStyle(t.sub()),e),r=Qe(i.base,"horizBrace")):r=Qe(i,"horizBrace");var a=ct(r.base,e.havingBaseStyle(Oe.DISPLAY)),s=mi.svgSpan(r,e),o;if(r.isOver?(o=W.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:s}]},e),o.children[0].children[0].children[1].classes.push("svg-align")):(o=W.makeVList({positionType:"bottom",positionData:a.depth+.1+s.height,children:[{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:a}]},e),o.children[0].children[0].children[0].classes.push("svg-align")),n){var l=W.makeSpan(["mord",r.isOver?"mover":"munder"],[o],e);r.isOver?o=W.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]},e):o=W.makeVList({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]},e)}return W.makeSpan(["mord",r.isOver?"mover":"munder"],[o],e)},lp=(i,e)=>{var t=mi.mathMLnode(i.label);return new le.MathNode(i.isOver?"mover":"munder",[wt(i.base,e),t])};ye({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"horizBrace",mode:t.mode,label:n,isOver:/^\\over/.test(n),base:e[0]}},htmlBuilder:Mh,mathmlBuilder:lp});ye({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[1],r=Qe(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:r})?{type:"href",mode:t.mode,href:r,body:Bt(n)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(i,e)=>{var t=Xt(i.body,e,!1);return W.makeAnchor(i.href,[],t,e)},mathmlBuilder:(i,e)=>{var t=Fi(i.body,e);return t instanceof _n||(t=new _n("mrow",[t])),t.setAttribute("href",i.href),t}});ye({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=Qe(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:n}))return t.formatUnsupportedCmd("\\url");for(var r=[],a=0;a<n.length;a++){var s=n[a];s==="~"&&(s="\\textasciitilde"),r.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:t.mode,font:"\\texttt",body:r};return{type:"href",mode:t.mode,href:n,body:Bt(o)}}});ye({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(i,e){var{parser:t}=i;return{type:"hbox",mode:t.mode,body:Bt(e[0])}},htmlBuilder(i,e){var t=Xt(i.body,e,!1);return W.makeFragment(t)},mathmlBuilder(i,e){return new le.MathNode("mrow",pn(i.body,e))}});ye({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,token:r}=i,a=Qe(e[0],"raw").string,s=e[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(n){case"\\htmlClass":l.class=a,o={command:"\\htmlClass",class:a};break;case"\\htmlId":l.id=a,o={command:"\\htmlId",id:a};break;case"\\htmlStyle":l.style=a,o={command:"\\htmlStyle",style:a};break;case"\\htmlData":{for(var c=a.split(","),h=0;h<c.length;h++){var u=c[h].split("=");if(u.length!==2)throw new ce("Error parsing key-value for \\htmlData");l["data-"+u[0].trim()]=u[1].trim()}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(o)?{type:"html",mode:t.mode,attributes:l,body:Bt(s)}:t.formatUnsupportedCmd(n)},htmlBuilder:(i,e)=>{var t=Xt(i.body,e,!1),n=["enclosing"];i.attributes.class&&n.push(...i.attributes.class.trim().split(/\s+/));var r=W.makeSpan(n,t,e);for(var a in i.attributes)a!=="class"&&i.attributes.hasOwnProperty(a)&&r.setAttribute(a,i.attributes[a]);return r},mathmlBuilder:(i,e)=>Fi(i.body,e)});ye({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"htmlmathml",mode:t.mode,html:Bt(e[0]),mathml:Bt(e[1])}},htmlBuilder:(i,e)=>{var t=Xt(i.html,e,!1);return W.makeFragment(t)},mathmlBuilder:(i,e)=>Fi(i.mathml,e)});var js=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new ce("Invalid size: '"+e+"' in \\includegraphics");var n={number:+(t[1]+t[2]),unit:t[3]};if(!Vu(n))throw new ce("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};ye({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(i,e,t)=>{var{parser:n}=i,r={number:0,unit:"em"},a={number:.9,unit:"em"},s={number:0,unit:"em"},o="";if(t[0])for(var l=Qe(t[0],"raw").string,c=l.split(","),h=0;h<c.length;h++){var u=c[h].split("=");if(u.length===2){var f=u[1].trim();switch(u[0].trim()){case"alt":o=f;break;case"width":r=js(f);break;case"height":a=js(f);break;case"totalheight":s=js(f);break;default:throw new ce("Invalid key: '"+u[0]+"' in \\includegraphics.")}}}var m=Qe(e[0],"url").url;return o===""&&(o=m,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:m})?{type:"includegraphics",mode:n.mode,alt:o,width:r,height:a,totalheight:s,src:m}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(i,e)=>{var t=Lt(i.height,e),n=0;i.totalheight.number>0&&(n=Lt(i.totalheight,e)-t);var r=0;i.width.number>0&&(r=Lt(i.width,e));var a={height:pe(t+n)};r>0&&(a.width=pe(r)),n>0&&(a.verticalAlign=pe(-n));var s=new lf(i.src,i.alt,a);return s.height=t,s.depth=n,s},mathmlBuilder:(i,e)=>{var t=new le.MathNode("mglyph",[]);t.setAttribute("alt",i.alt);var n=Lt(i.height,e),r=0;if(i.totalheight.number>0&&(r=Lt(i.totalheight,e)-n,t.setAttribute("valign",pe(-r))),t.setAttribute("height",pe(n+r)),i.width.number>0){var a=Lt(i.width,e);t.setAttribute("width",pe(a))}return t.setAttribute("src",i.src),t}});ye({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=Qe(e[0],"size");if(t.settings.strict){var a=n[1]==="m",s=r.value.unit==="mu";a?(s||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+r.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):s&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:r.value}},htmlBuilder(i,e){return W.makeGlue(i.dimension,e)},mathmlBuilder(i,e){var t=Lt(i.dimension,e);return new le.SpaceNode(t)}});ye({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"lap",mode:t.mode,alignment:n.slice(5),body:r}},htmlBuilder:(i,e)=>{var t;i.alignment==="clap"?(t=W.makeSpan([],[ct(i.body,e)]),t=W.makeSpan(["inner"],[t],e)):t=W.makeSpan(["inner"],[ct(i.body,e)]);var n=W.makeSpan(["fix"],[]),r=W.makeSpan([i.alignment],[t,n],e),a=W.makeSpan(["strut"]);return a.style.height=pe(r.height+r.depth),r.depth&&(a.style.verticalAlign=pe(-r.depth)),r.children.unshift(a),r=W.makeSpan(["thinbox"],[r],e),W.makeSpan(["mord","vbox"],[r],e)},mathmlBuilder:(i,e)=>{var t=new le.MathNode("mpadded",[wt(i.body,e)]);if(i.alignment!=="rlap"){var n=i.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",n+"width")}return t.setAttribute("width","0px"),t}});ye({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){var{funcName:t,parser:n}=i,r=n.mode;n.switchMode("math");var a=t==="\\("?"\\)":"$",s=n.parseExpression(!1,a);return n.expect(a),n.switchMode(r),{type:"styling",mode:n.mode,style:"text",body:s}}});ye({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){throw new ce("Mismatched "+i.funcName)}});var ec=(i,e)=>{switch(e.style.size){case Oe.DISPLAY.size:return i.display;case Oe.TEXT.size:return i.text;case Oe.SCRIPT.size:return i.script;case Oe.SCRIPTSCRIPT.size:return i.scriptscript;default:return i.text}};ye({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"mathchoice",mode:t.mode,display:Bt(e[0]),text:Bt(e[1]),script:Bt(e[2]),scriptscript:Bt(e[3])}},htmlBuilder:(i,e)=>{var t=ec(i,e),n=Xt(t,e,!1);return W.makeFragment(n)},mathmlBuilder:(i,e)=>{var t=ec(i,e);return Fi(t,e)}});var wh=(i,e,t,n,r,a,s)=>{i=W.makeSpan([],[i]);var o=t&&ft.isCharacterBox(t),l,c;if(e){var h=ct(e,n.havingStyle(r.sup()),n);c={elem:h,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-h.depth)}}if(t){var u=ct(t,n.havingStyle(r.sub()),n);l={elem:u,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-u.height)}}var f;if(c&&l){var m=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+i.depth+s;f=W.makeVList({positionType:"bottom",positionData:m,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:pe(-a)},{type:"kern",size:l.kern},{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:pe(a)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]},n)}else if(l){var v=i.height-s;f=W.makeVList({positionType:"top",positionData:v,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:pe(-a)},{type:"kern",size:l.kern},{type:"elem",elem:i}]},n)}else if(c){var _=i.depth+s;f=W.makeVList({positionType:"bottom",positionData:_,children:[{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:pe(a)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]},n)}else return i;var g=[f];if(l&&a!==0&&!o){var p=W.makeSpan(["mspace"],[],n);p.style.marginRight=pe(a),g.unshift(p)}return W.makeSpan(["mop","op-limits"],g,n)},Th=["\\smallint"],Fr=(i,e)=>{var t,n,r=!1,a;i.type==="supsub"?(t=i.sup,n=i.sub,a=Qe(i.base,"op"),r=!0):a=Qe(i,"op");var s=e.style,o=!1;s.size===Oe.DISPLAY.size&&a.symbol&&!Th.includes(a.name)&&(o=!0);var l;if(a.symbol){var c=o?"Size2-Regular":"Size1-Regular",h="";if((a.name==="\\oiint"||a.name==="\\oiiint")&&(h=a.name.slice(1),a.name=h==="oiint"?"\\iint":"\\iiint"),l=W.makeSymbol(a.name,c,"math",e,["mop","op-symbol",o?"large-op":"small-op"]),h.length>0){var u=l.italic,f=W.staticSvg(h+"Size"+(o?"2":"1"),e);l=W.makeVList({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:f,shift:o?.08:0}]},e),a.name="\\"+h,l.classes.unshift("mop"),l.italic=u}}else if(a.body){var m=Xt(a.body,e,!0);m.length===1&&m[0]instanceof Dn?(l=m[0],l.classes[0]="mop"):l=W.makeSpan(["mop"],m,e)}else{for(var v=[],_=1;_<a.name.length;_++)v.push(W.mathsym(a.name[_],a.mode,e));l=W.makeSpan(["mop"],v,e)}var g=0,p=0;return(l instanceof Dn||a.name==="\\oiint"||a.name==="\\oiiint")&&!a.suppressBaseShift&&(g=(l.height-l.depth)/2-e.fontMetrics().axisHeight,p=l.italic),r?wh(l,t,n,e,s,p,g):(g&&(l.style.position="relative",l.style.top=pe(g)),l)},ca=(i,e)=>{var t;if(i.symbol)t=new _n("mo",[Pn(i.name,i.mode)]),Th.includes(i.name)&&t.setAttribute("largeop","false");else if(i.body)t=new _n("mo",pn(i.body,e));else{t=new _n("mi",[new Wn(i.name.slice(1))]);var n=new _n("mo",[Pn("⁡","text")]);i.parentIsSupSub?t=new _n("mrow",[t,n]):t=Qu([t,n])}return t},cp={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ye({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=n;return r.length===1&&(r=cp[r]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Fr,mathmlBuilder:ca});ye({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Bt(n)}},htmlBuilder:Fr,mathmlBuilder:ca});var up={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ye({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Fr,mathmlBuilder:ca});ye({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Fr,mathmlBuilder:ca});ye({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i,n=t;return n.length===1&&(n=up[n]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:Fr,mathmlBuilder:ca});var Eh=(i,e)=>{var t,n,r=!1,a;i.type==="supsub"?(t=i.sup,n=i.sub,a=Qe(i.base,"operatorname"),r=!0):a=Qe(i,"operatorname");var s;if(a.body.length>0){for(var o=a.body.map(u=>{var f=u.text;return typeof f=="string"?{type:"textord",mode:u.mode,text:f}:u}),l=Xt(o,e.withFont("mathrm"),!0),c=0;c<l.length;c++){var h=l[c];h instanceof Dn&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=W.makeSpan(["mop"],l,e)}else s=W.makeSpan(["mop"],[],e);return r?wh(s,t,n,e,e.style,0,0):s},hp=(i,e)=>{for(var t=pn(i.body,e.withFont("mathrm")),n=!0,r=0;r<t.length;r++){var a=t[r];if(!(a instanceof le.SpaceNode))if(a instanceof le.MathNode)switch(a.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var s=a.children[0];a.children.length===1&&s instanceof le.TextNode?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var o=t.map(h=>h.toText()).join("");t=[new le.TextNode(o)]}var l=new le.MathNode("mi",t);l.setAttribute("mathvariant","normal");var c=new le.MathNode("mo",[Pn("⁡","text")]);return i.parentIsSupSub?new le.MathNode("mrow",[l,c]):le.newDocumentFragment([l,c])};ye({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"operatorname",mode:t.mode,body:Bt(r),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Eh,mathmlBuilder:hp});S("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");nr({type:"ordgroup",htmlBuilder(i,e){return i.semisimple?W.makeFragment(Xt(i.body,e,!1)):W.makeSpan(["mord"],Xt(i.body,e,!0),e)},mathmlBuilder(i,e){return Fi(i.body,e,!0)}});ye({type:"overline",names:["\\overline"],props:{numArgs:1},handler(i,e){var{parser:t}=i,n=e[0];return{type:"overline",mode:t.mode,body:n}},htmlBuilder(i,e){var t=ct(i.body,e.havingCrampedStyle()),n=W.makeLineSpan("overline-line",e),r=e.fontMetrics().defaultRuleThickness,a=W.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*r},{type:"elem",elem:n},{type:"kern",size:r}]},e);return W.makeSpan(["mord","overline"],[a],e)},mathmlBuilder(i,e){var t=new le.MathNode("mo",[new le.TextNode("‾")]);t.setAttribute("stretchy","true");var n=new le.MathNode("mover",[wt(i.body,e),t]);return n.setAttribute("accent","true"),n}});ye({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"phantom",mode:t.mode,body:Bt(n)}},htmlBuilder:(i,e)=>{var t=Xt(i.body,e.withPhantom(),!1);return W.makeFragment(t)},mathmlBuilder:(i,e)=>{var t=pn(i.body,e);return new le.MathNode("mphantom",t)}});ye({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"hphantom",mode:t.mode,body:n}},htmlBuilder:(i,e)=>{var t=W.makeSpan([],[ct(i.body,e.withPhantom())]);if(t.height=0,t.depth=0,t.children)for(var n=0;n<t.children.length;n++)t.children[n].height=0,t.children[n].depth=0;return t=W.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t}]},e),W.makeSpan(["mord"],[t],e)},mathmlBuilder:(i,e)=>{var t=pn(Bt(i.body),e),n=new le.MathNode("mphantom",t),r=new le.MathNode("mpadded",[n]);return r.setAttribute("height","0px"),r.setAttribute("depth","0px"),r}});ye({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"vphantom",mode:t.mode,body:n}},htmlBuilder:(i,e)=>{var t=W.makeSpan(["inner"],[ct(i.body,e.withPhantom())]),n=W.makeSpan(["fix"],[]);return W.makeSpan(["mord","rlap"],[t,n],e)},mathmlBuilder:(i,e)=>{var t=pn(Bt(i.body),e),n=new le.MathNode("mphantom",t),r=new le.MathNode("mpadded",[n]);return r.setAttribute("width","0px"),r}});ye({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i,n=Qe(e[0],"size").value,r=e[1];return{type:"raisebox",mode:t.mode,dy:n,body:r}},htmlBuilder(i,e){var t=ct(i.body,e),n=Lt(i.dy,e);return W.makeVList({positionType:"shift",positionData:-n,children:[{type:"elem",elem:t}]},e)},mathmlBuilder(i,e){var t=new le.MathNode("mpadded",[wt(i.body,e)]),n=i.dy.number+i.dy.unit;return t.setAttribute("voffset",n),t}});ye({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(i){var{parser:e}=i;return{type:"internal",mode:e.mode}}});ye({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(i,e,t){var{parser:n}=i,r=t[0],a=Qe(e[0],"size"),s=Qe(e[1],"size");return{type:"rule",mode:n.mode,shift:r&&Qe(r,"size").value,width:a.value,height:s.value}},htmlBuilder(i,e){var t=W.makeSpan(["mord","rule"],[],e),n=Lt(i.width,e),r=Lt(i.height,e),a=i.shift?Lt(i.shift,e):0;return t.style.borderRightWidth=pe(n),t.style.borderTopWidth=pe(r),t.style.bottom=pe(a),t.width=n,t.height=r+a,t.depth=-a,t.maxFontSize=r*1.125*e.sizeMultiplier,t},mathmlBuilder(i,e){var t=Lt(i.width,e),n=Lt(i.height,e),r=i.shift?Lt(i.shift,e):0,a=e.color&&e.getColor()||"black",s=new le.MathNode("mspace");s.setAttribute("mathbackground",a),s.setAttribute("width",pe(t)),s.setAttribute("height",pe(n));var o=new le.MathNode("mpadded",[s]);return r>=0?o.setAttribute("height",pe(r)):(o.setAttribute("height",pe(r)),o.setAttribute("depth",pe(-r))),o.setAttribute("voffset",pe(r)),o}});function Ah(i,e,t){for(var n=Xt(i,e,!1),r=e.sizeMultiplier/t.sizeMultiplier,a=0;a<n.length;a++){var s=n[a].classes.indexOf("sizing");s<0?Array.prototype.push.apply(n[a].classes,e.sizingClasses(t)):n[a].classes[s+1]==="reset-size"+e.size&&(n[a].classes[s+1]="reset-size"+t.size),n[a].height*=r,n[a].depth*=r}return W.makeFragment(n)}var tc=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],dp=(i,e)=>{var t=e.havingSize(i.size);return Ah(i.body,t,e)};ye({type:"sizing",names:tc,props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{breakOnTokenText:t,funcName:n,parser:r}=i,a=r.parseExpression(!1,t);return{type:"sizing",mode:r.mode,size:tc.indexOf(n)+1,body:a}},htmlBuilder:dp,mathmlBuilder:(i,e)=>{var t=e.havingSize(i.size),n=pn(i.body,t),r=new le.MathNode("mstyle",n);return r.setAttribute("mathsize",pe(t.sizeMultiplier)),r}});ye({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(i,e,t)=>{var{parser:n}=i,r=!1,a=!1,s=t[0]&&Qe(t[0],"ordgroup");if(s)for(var o="",l=0;l<s.body.length;++l){var c=s.body[l];if(o=c.text,o==="t")r=!0;else if(o==="b")a=!0;else{r=!1,a=!1;break}}else r=!0,a=!0;var h=e[0];return{type:"smash",mode:n.mode,body:h,smashHeight:r,smashDepth:a}},htmlBuilder:(i,e)=>{var t=W.makeSpan([],[ct(i.body,e)]);if(!i.smashHeight&&!i.smashDepth)return t;if(i.smashHeight&&(t.height=0,t.children))for(var n=0;n<t.children.length;n++)t.children[n].height=0;if(i.smashDepth&&(t.depth=0,t.children))for(var r=0;r<t.children.length;r++)t.children[r].depth=0;var a=W.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t}]},e);return W.makeSpan(["mord"],[a],e)},mathmlBuilder:(i,e)=>{var t=new le.MathNode("mpadded",[wt(i.body,e)]);return i.smashHeight&&t.setAttribute("height","0px"),i.smashDepth&&t.setAttribute("depth","0px"),t}});ye({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n}=i,r=t[0],a=e[0];return{type:"sqrt",mode:n.mode,body:a,index:r}},htmlBuilder(i,e){var t=ct(i.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=W.wrapFragment(t,e);var n=e.fontMetrics(),r=n.defaultRuleThickness,a=r;e.style.id<Oe.TEXT.id&&(a=e.fontMetrics().xHeight);var s=r+a/4,o=t.height+t.depth+s+r,{span:l,ruleWidth:c,advanceWidth:h}=ui.sqrtImage(o,e),u=l.height-c;u>t.height+t.depth+s&&(s=(s+u-t.height-t.depth)/2);var f=l.height-t.height-s-c;t.style.paddingLeft=pe(h);var m=W.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+f)},{type:"elem",elem:l},{type:"kern",size:c}]},e);if(i.index){var v=e.havingStyle(Oe.SCRIPTSCRIPT),_=ct(i.index,v,e),g=.6*(m.height-m.depth),p=W.makeVList({positionType:"shift",positionData:-g,children:[{type:"elem",elem:_}]},e),M=W.makeSpan(["root"],[p]);return W.makeSpan(["mord","sqrt"],[M,m],e)}else return W.makeSpan(["mord","sqrt"],[m],e)},mathmlBuilder(i,e){var{body:t,index:n}=i;return n?new le.MathNode("mroot",[wt(t,e),wt(n,e)]):new le.MathNode("msqrt",[wt(t,e)])}});var nc={display:Oe.DISPLAY,text:Oe.TEXT,script:Oe.SCRIPT,scriptscript:Oe.SCRIPTSCRIPT};ye({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i,e){var{breakOnTokenText:t,funcName:n,parser:r}=i,a=r.parseExpression(!0,t),s=n.slice(1,n.length-5);return{type:"styling",mode:r.mode,style:s,body:a}},htmlBuilder(i,e){var t=nc[i.style],n=e.havingStyle(t).withFont("");return Ah(i.body,n,e)},mathmlBuilder(i,e){var t=nc[i.style],n=e.havingStyle(t),r=pn(i.body,n),a=new le.MathNode("mstyle",r),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=s[i.style];return a.setAttribute("scriptlevel",o[0]),a.setAttribute("displaystyle",o[1]),a}});var fp=function(e,t){var n=e.base;if(n)if(n.type==="op"){var r=n.limits&&(t.style.size===Oe.DISPLAY.size||n.alwaysHandleSupSub);return r?Fr:null}else if(n.type==="operatorname"){var a=n.alwaysHandleSupSub&&(t.style.size===Oe.DISPLAY.size||n.limits);return a?Eh:null}else{if(n.type==="accent")return ft.isCharacterBox(n.base)?Z0:null;if(n.type==="horizBrace"){var s=!e.sub;return s===n.isOver?Mh:null}else return null}else return null};nr({type:"supsub",htmlBuilder(i,e){var t=fp(i,e);if(t)return t(i,e);var{base:n,sup:r,sub:a}=i,s=ct(n,e),o,l,c=e.fontMetrics(),h=0,u=0,f=n&&ft.isCharacterBox(n);if(r){var m=e.havingStyle(e.style.sup());o=ct(r,m,e),f||(h=s.height-m.fontMetrics().supDrop*m.sizeMultiplier/e.sizeMultiplier)}if(a){var v=e.havingStyle(e.style.sub());l=ct(a,v,e),f||(u=s.depth+v.fontMetrics().subDrop*v.sizeMultiplier/e.sizeMultiplier)}var _;e.style===Oe.DISPLAY?_=c.sup1:e.style.cramped?_=c.sup3:_=c.sup2;var g=e.sizeMultiplier,p=pe(.5/c.ptPerEm/g),M=null;if(l){var A=i.base&&i.base.type==="op"&&i.base.name&&(i.base.name==="\\oiint"||i.base.name==="\\oiiint");(s instanceof Dn||A)&&(M=pe(-s.italic))}var R;if(o&&l){h=Math.max(h,_,o.depth+.25*c.xHeight),u=Math.max(u,c.sub2);var L=c.defaultRuleThickness,C=4*L;if(h-o.depth-(l.height-u)<C){u=C-(h-o.depth)+l.height;var N=.8*c.xHeight-(h-o.depth);N>0&&(h+=N,u-=N)}var z=[{type:"elem",elem:l,shift:u,marginRight:p,marginLeft:M},{type:"elem",elem:o,shift:-h,marginRight:p}];R=W.makeVList({positionType:"individualShift",children:z},e)}else if(l){u=Math.max(u,c.sub1,l.height-.8*c.xHeight);var w=[{type:"elem",elem:l,marginLeft:M,marginRight:p}];R=W.makeVList({positionType:"shift",positionData:u,children:w},e)}else if(o)h=Math.max(h,_,o.depth+.25*c.xHeight),R=W.makeVList({positionType:"shift",positionData:-h,children:[{type:"elem",elem:o,marginRight:p}]},e);else throw new Error("supsub must have either sup or sub.");var E=Vo(s,"right")||"mord";return W.makeSpan([E],[s,W.makeSpan(["msupsub"],[R])],e)},mathmlBuilder(i,e){var t=!1,n,r;i.base&&i.base.type==="horizBrace"&&(r=!!i.sup,r===i.base.isOver&&(t=!0,n=i.base.isOver)),i.base&&(i.base.type==="op"||i.base.type==="operatorname")&&(i.base.parentIsSupSub=!0);var a=[wt(i.base,e)];i.sub&&a.push(wt(i.sub,e)),i.sup&&a.push(wt(i.sup,e));var s;if(t)s=n?"mover":"munder";else if(i.sub)if(i.sup){var c=i.base;c&&c.type==="op"&&c.limits&&e.style===Oe.DISPLAY||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(e.style===Oe.DISPLAY||c.limits)?s="munderover":s="msubsup"}else{var l=i.base;l&&l.type==="op"&&l.limits&&(e.style===Oe.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===Oe.DISPLAY)?s="munder":s="msub"}else{var o=i.base;o&&o.type==="op"&&o.limits&&(e.style===Oe.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||e.style===Oe.DISPLAY)?s="mover":s="msup"}return new le.MathNode(s,a)}});nr({type:"atom",htmlBuilder(i,e){return W.mathsym(i.text,i.mode,e,["m"+i.family])},mathmlBuilder(i,e){var t=new le.MathNode("mo",[Pn(i.text,i.mode)]);if(i.family==="bin"){var n=$0(i,e);n==="bold-italic"&&t.setAttribute("mathvariant",n)}else i.family==="punct"?t.setAttribute("separator","true"):(i.family==="open"||i.family==="close")&&t.setAttribute("stretchy","false");return t}});var Ch={mi:"italic",mn:"normal",mtext:"normal"};nr({type:"mathord",htmlBuilder(i,e){return W.makeOrd(i,e,"mathord")},mathmlBuilder(i,e){var t=new le.MathNode("mi",[Pn(i.text,i.mode,e)]),n=$0(i,e)||"italic";return n!==Ch[t.type]&&t.setAttribute("mathvariant",n),t}});nr({type:"textord",htmlBuilder(i,e){return W.makeOrd(i,e,"textord")},mathmlBuilder(i,e){var t=Pn(i.text,i.mode,e),n=$0(i,e)||"normal",r;return i.mode==="text"?r=new le.MathNode("mtext",[t]):/[0-9]/.test(i.text)?r=new le.MathNode("mn",[t]):i.text==="\\prime"?r=new le.MathNode("mo",[t]):r=new le.MathNode("mi",[t]),n!==Ch[r.type]&&r.setAttribute("mathvariant",n),r}});var Js={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Qs={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};nr({type:"spacing",htmlBuilder(i,e){if(Qs.hasOwnProperty(i.text)){var t=Qs[i.text].className||"";if(i.mode==="text"){var n=W.makeOrd(i,e,"textord");return n.classes.push(t),n}else return W.makeSpan(["mspace",t],[W.mathsym(i.text,i.mode,e)],e)}else{if(Js.hasOwnProperty(i.text))return W.makeSpan(["mspace",Js[i.text]],[],e);throw new ce('Unknown type of space "'+i.text+'"')}},mathmlBuilder(i,e){var t;if(Qs.hasOwnProperty(i.text))t=new le.MathNode("mtext",[new le.TextNode(" ")]);else{if(Js.hasOwnProperty(i.text))return new le.MathNode("mspace");throw new ce('Unknown type of space "'+i.text+'"')}return t}});var ic=()=>{var i=new le.MathNode("mtd",[]);return i.setAttribute("width","50%"),i};nr({type:"tag",mathmlBuilder(i,e){var t=new le.MathNode("mtable",[new le.MathNode("mtr",[ic(),new le.MathNode("mtd",[Fi(i.body,e)]),ic(),new le.MathNode("mtd",[Fi(i.tag,e)])])]);return t.setAttribute("width","100%"),t}});var rc={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},ac={"\\textbf":"textbf","\\textmd":"textmd"},pp={"\\textit":"textit","\\textup":"textup"},sc=(i,e)=>{var t=i.font;if(t){if(rc[t])return e.withTextFontFamily(rc[t]);if(ac[t])return e.withTextFontWeight(ac[t]);if(t==="\\emph")return e.fontShape==="textit"?e.withTextFontShape("textup"):e.withTextFontShape("textit")}else return e;return e.withTextFontShape(pp[t])};ye({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"text",mode:t.mode,body:Bt(r),font:n}},htmlBuilder(i,e){var t=sc(i,e),n=Xt(i.body,t,!0);return W.makeSpan(["mord","text"],n,t)},mathmlBuilder(i,e){var t=sc(i,e);return Fi(i.body,t)}});ye({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=ct(i.body,e),n=W.makeLineSpan("underline-line",e),r=e.fontMetrics().defaultRuleThickness,a=W.makeVList({positionType:"top",positionData:t.height,children:[{type:"kern",size:r},{type:"elem",elem:n},{type:"kern",size:3*r},{type:"elem",elem:t}]},e);return W.makeSpan(["mord","underline"],[a],e)},mathmlBuilder(i,e){var t=new le.MathNode("mo",[new le.TextNode("‾")]);t.setAttribute("stretchy","true");var n=new le.MathNode("munder",[wt(i.body,e),t]);return n.setAttribute("accentunder","true"),n}});ye({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=ct(i.body,e),n=e.fontMetrics().axisHeight,r=.5*(t.height-n-(t.depth+n));return W.makeVList({positionType:"shift",positionData:r,children:[{type:"elem",elem:t}]},e)},mathmlBuilder(i,e){return new le.MathNode("mpadded",[wt(i.body,e)],["vcenter"])}});ye({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(i,e,t){throw new ce("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(i,e){for(var t=oc(i),n=[],r=e.havingStyle(e.style.text()),a=0;a<t.length;a++){var s=t[a];s==="~"&&(s="\\textasciitilde"),n.push(W.makeSymbol(s,"Typewriter-Regular",i.mode,r,["mord","texttt"]))}return W.makeSpan(["mord","text"].concat(r.sizingClasses(e)),W.tryCombineChars(n),r)},mathmlBuilder(i,e){var t=new le.TextNode(oc(i)),n=new le.MathNode("mtext",[t]);return n.setAttribute("mathvariant","monospace"),n}});var oc=i=>i.body.replace(/ /g,i.star?"␣":" "),Pi=ju,Rh=`[ \r
	]`,mp="\\\\[a-zA-Z@]+",xp="\\\\[^\uD800-\uDFFF]",gp="("+mp+")"+Rh+"*",vp=`\\\\(
|[ \r	]+
?)[ \r	]*`,Xo="[̀-ͯ]",_p=new RegExp(Xo+"+$"),bp="("+Rh+"+)|"+(vp+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Xo+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Xo+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+gp)+("|"+xp+")");class lc{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(bp,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new bn("EOF",new dn(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new ce("Unexpected character: '"+e[t]+"'",new bn(e[t],new dn(this,t,t+1)));var r=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[r]===14){var a=e.indexOf(`
`,this.tokenRegex.lastIndex);return a===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=a+1,this.lex()}return new bn(r,new dn(this,t,this.tokenRegex.lastIndex))}}class yp{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ce("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var a=this.undefStack[this.undefStack.length-1];a&&!a.hasOwnProperty(e)&&(a[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}}var Sp=vh;S("\\noexpand",function(i){var e=i.popToken();return i.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});S("\\expandafter",function(i){var e=i.popToken();return i.expandOnce(!0),{tokens:[e],numArgs:0}});S("\\@firstoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[0],numArgs:0}});S("\\@secondoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[1],numArgs:0}});S("\\@ifnextchar",function(i){var e=i.consumeArgs(3);i.consumeSpaces();var t=i.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});S("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");S("\\TextOrMath",function(i){var e=i.consumeArgs(2);return i.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var cc={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};S("\\char",function(i){var e=i.popToken(),t,n="";if(e.text==="'")t=8,e=i.popToken();else if(e.text==='"')t=16,e=i.popToken();else if(e.text==="`")if(e=i.popToken(),e.text[0]==="\\")n=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new ce("\\char` missing argument");n=e.text.charCodeAt(0)}else t=10;if(t){if(n=cc[e.text],n==null||n>=t)throw new ce("Invalid base-"+t+" digit "+e.text);for(var r;(r=cc[i.future().text])!=null&&r<t;)n*=t,n+=r,i.popToken()}return"\\@char{"+n+"}"});var rl=(i,e,t,n)=>{var r=i.consumeArg().tokens;if(r.length!==1)throw new ce("\\newcommand's first argument must be a macro name");var a=r[0].text,s=i.isDefined(a);if(s&&!e)throw new ce("\\newcommand{"+a+"} attempting to redefine "+(a+"; use \\renewcommand"));if(!s&&!t)throw new ce("\\renewcommand{"+a+"} when command "+a+" does not yet exist; use \\newcommand");var o=0;if(r=i.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var l="",c=i.expandNextToken();c.text!=="]"&&c.text!=="EOF";)l+=c.text,c=i.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new ce("Invalid number of arguments: "+l);o=parseInt(l),r=i.consumeArg().tokens}return s&&n||i.macros.set(a,{tokens:r,numArgs:o}),""};S("\\newcommand",i=>rl(i,!1,!0,!1));S("\\renewcommand",i=>rl(i,!0,!1,!1));S("\\providecommand",i=>rl(i,!0,!0,!0));S("\\message",i=>{var e=i.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});S("\\errmessage",i=>{var e=i.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});S("\\show",i=>{var e=i.popToken(),t=e.text;return console.log(e,i.macros.get(t),Pi[t],Tt.math[t],Tt.text[t]),""});S("\\bgroup","{");S("\\egroup","}");S("~","\\nobreakspace");S("\\lq","`");S("\\rq","'");S("\\aa","\\r a");S("\\AA","\\r A");S("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");S("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");S("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");S("ℬ","\\mathscr{B}");S("ℰ","\\mathscr{E}");S("ℱ","\\mathscr{F}");S("ℋ","\\mathscr{H}");S("ℐ","\\mathscr{I}");S("ℒ","\\mathscr{L}");S("ℳ","\\mathscr{M}");S("ℛ","\\mathscr{R}");S("ℭ","\\mathfrak{C}");S("ℌ","\\mathfrak{H}");S("ℨ","\\mathfrak{Z}");S("\\Bbbk","\\Bbb{k}");S("·","\\cdotp");S("\\llap","\\mathllap{\\textrm{#1}}");S("\\rlap","\\mathrlap{\\textrm{#1}}");S("\\clap","\\mathclap{\\textrm{#1}}");S("\\mathstrut","\\vphantom{(}");S("\\underbar","\\underline{\\text{#1}}");S("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');S("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");S("\\ne","\\neq");S("≠","\\neq");S("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");S("∉","\\notin");S("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");S("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");S("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");S("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");S("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");S("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");S("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");S("⟂","\\perp");S("‼","\\mathclose{!\\mkern-0.8mu!}");S("∌","\\notni");S("⌜","\\ulcorner");S("⌝","\\urcorner");S("⌞","\\llcorner");S("⌟","\\lrcorner");S("©","\\copyright");S("®","\\textregistered");S("️","\\textregistered");S("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');S("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');S("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');S("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');S("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");S("⋮","\\vdots");S("\\varGamma","\\mathit{\\Gamma}");S("\\varDelta","\\mathit{\\Delta}");S("\\varTheta","\\mathit{\\Theta}");S("\\varLambda","\\mathit{\\Lambda}");S("\\varXi","\\mathit{\\Xi}");S("\\varPi","\\mathit{\\Pi}");S("\\varSigma","\\mathit{\\Sigma}");S("\\varUpsilon","\\mathit{\\Upsilon}");S("\\varPhi","\\mathit{\\Phi}");S("\\varPsi","\\mathit{\\Psi}");S("\\varOmega","\\mathit{\\Omega}");S("\\substack","\\begin{subarray}{c}#1\\end{subarray}");S("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");S("\\boxed","\\fbox{$\\displaystyle{#1}$}");S("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");S("\\implies","\\DOTSB\\;\\Longrightarrow\\;");S("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");S("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");S("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var uc={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};S("\\dots",function(i){var e="\\dotso",t=i.expandAfterFuture().text;return t in uc?e=uc[t]:(t.slice(0,4)==="\\not"||t in Tt.math&&["bin","rel"].includes(Tt.math[t].group))&&(e="\\dotsb"),e});var al={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};S("\\dotso",function(i){var e=i.future().text;return e in al?"\\ldots\\,":"\\ldots"});S("\\dotsc",function(i){var e=i.future().text;return e in al&&e!==","?"\\ldots\\,":"\\ldots"});S("\\cdots",function(i){var e=i.future().text;return e in al?"\\@cdots\\,":"\\@cdots"});S("\\dotsb","\\cdots");S("\\dotsm","\\cdots");S("\\dotsi","\\!\\cdots");S("\\dotsx","\\ldots\\,");S("\\DOTSI","\\relax");S("\\DOTSB","\\relax");S("\\DOTSX","\\relax");S("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");S("\\,","\\tmspace+{3mu}{.1667em}");S("\\thinspace","\\,");S("\\>","\\mskip{4mu}");S("\\:","\\tmspace+{4mu}{.2222em}");S("\\medspace","\\:");S("\\;","\\tmspace+{5mu}{.2777em}");S("\\thickspace","\\;");S("\\!","\\tmspace-{3mu}{.1667em}");S("\\negthinspace","\\!");S("\\negmedspace","\\tmspace-{4mu}{.2222em}");S("\\negthickspace","\\tmspace-{5mu}{.277em}");S("\\enspace","\\kern.5em ");S("\\enskip","\\hskip.5em\\relax");S("\\quad","\\hskip1em\\relax");S("\\qquad","\\hskip2em\\relax");S("\\tag","\\@ifstar\\tag@literal\\tag@paren");S("\\tag@paren","\\tag@literal{({#1})}");S("\\tag@literal",i=>{if(i.macros.get("\\df@tag"))throw new ce("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});S("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");S("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");S("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");S("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");S("\\newline","\\\\\\relax");S("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Dh=pe(Gn["Main-Regular"][84][1]-.7*Gn["Main-Regular"][65][1]);S("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Dh+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");S("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Dh+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");S("\\hspace","\\@ifstar\\@hspacer\\@hspace");S("\\@hspace","\\hskip #1\\relax");S("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");S("\\ordinarycolon",":");S("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");S("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');S("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');S("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');S("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');S("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');S("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');S("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');S("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');S("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');S("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');S("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');S("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');S("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');S("∷","\\dblcolon");S("∹","\\eqcolon");S("≔","\\coloneqq");S("≕","\\eqqcolon");S("⩴","\\Coloneqq");S("\\ratio","\\vcentcolon");S("\\coloncolon","\\dblcolon");S("\\colonequals","\\coloneqq");S("\\coloncolonequals","\\Coloneqq");S("\\equalscolon","\\eqqcolon");S("\\equalscoloncolon","\\Eqqcolon");S("\\colonminus","\\coloneq");S("\\coloncolonminus","\\Coloneq");S("\\minuscolon","\\eqcolon");S("\\minuscoloncolon","\\Eqcolon");S("\\coloncolonapprox","\\Colonapprox");S("\\coloncolonsim","\\Colonsim");S("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");S("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");S("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");S("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");S("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");S("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");S("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");S("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");S("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");S("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");S("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");S("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");S("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");S("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");S("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");S("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");S("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");S("\\nleqq","\\html@mathml{\\@nleqq}{≰}");S("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");S("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");S("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");S("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");S("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");S("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");S("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");S("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");S("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");S("\\imath","\\html@mathml{\\@imath}{ı}");S("\\jmath","\\html@mathml{\\@jmath}{ȷ}");S("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");S("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");S("⟦","\\llbracket");S("⟧","\\rrbracket");S("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");S("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");S("⦃","\\lBrace");S("⦄","\\rBrace");S("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");S("⦵","\\minuso");S("\\darr","\\downarrow");S("\\dArr","\\Downarrow");S("\\Darr","\\Downarrow");S("\\lang","\\langle");S("\\rang","\\rangle");S("\\uarr","\\uparrow");S("\\uArr","\\Uparrow");S("\\Uarr","\\Uparrow");S("\\N","\\mathbb{N}");S("\\R","\\mathbb{R}");S("\\Z","\\mathbb{Z}");S("\\alef","\\aleph");S("\\alefsym","\\aleph");S("\\Alpha","\\mathrm{A}");S("\\Beta","\\mathrm{B}");S("\\bull","\\bullet");S("\\Chi","\\mathrm{X}");S("\\clubs","\\clubsuit");S("\\cnums","\\mathbb{C}");S("\\Complex","\\mathbb{C}");S("\\Dagger","\\ddagger");S("\\diamonds","\\diamondsuit");S("\\empty","\\emptyset");S("\\Epsilon","\\mathrm{E}");S("\\Eta","\\mathrm{H}");S("\\exist","\\exists");S("\\harr","\\leftrightarrow");S("\\hArr","\\Leftrightarrow");S("\\Harr","\\Leftrightarrow");S("\\hearts","\\heartsuit");S("\\image","\\Im");S("\\infin","\\infty");S("\\Iota","\\mathrm{I}");S("\\isin","\\in");S("\\Kappa","\\mathrm{K}");S("\\larr","\\leftarrow");S("\\lArr","\\Leftarrow");S("\\Larr","\\Leftarrow");S("\\lrarr","\\leftrightarrow");S("\\lrArr","\\Leftrightarrow");S("\\Lrarr","\\Leftrightarrow");S("\\Mu","\\mathrm{M}");S("\\natnums","\\mathbb{N}");S("\\Nu","\\mathrm{N}");S("\\Omicron","\\mathrm{O}");S("\\plusmn","\\pm");S("\\rarr","\\rightarrow");S("\\rArr","\\Rightarrow");S("\\Rarr","\\Rightarrow");S("\\real","\\Re");S("\\reals","\\mathbb{R}");S("\\Reals","\\mathbb{R}");S("\\Rho","\\mathrm{P}");S("\\sdot","\\cdot");S("\\sect","\\S");S("\\spades","\\spadesuit");S("\\sub","\\subset");S("\\sube","\\subseteq");S("\\supe","\\supseteq");S("\\Tau","\\mathrm{T}");S("\\thetasym","\\vartheta");S("\\weierp","\\wp");S("\\Zeta","\\mathrm{Z}");S("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");S("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");S("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");S("\\bra","\\mathinner{\\langle{#1}|}");S("\\ket","\\mathinner{|{#1}\\rangle}");S("\\braket","\\mathinner{\\langle{#1}\\rangle}");S("\\Bra","\\left\\langle#1\\right|");S("\\Ket","\\left|#1\\right\\rangle");var Ph=i=>e=>{var t=e.consumeArg().tokens,n=e.consumeArg().tokens,r=e.consumeArg().tokens,a=e.consumeArg().tokens,s=e.macros.get("|"),o=e.macros.get("\\|");e.macros.beginGroup();var l=u=>f=>{i&&(f.macros.set("|",s),r.length&&f.macros.set("\\|",o));var m=u;if(!u&&r.length){var v=f.future();v.text==="|"&&(f.popToken(),m=!0)}return{tokens:m?r:n,numArgs:0}};e.macros.set("|",l(!1)),r.length&&e.macros.set("\\|",l(!0));var c=e.consumeArg().tokens,h=e.expandTokens([...a,...c,...t]);return e.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};S("\\bra@ket",Ph(!1));S("\\bra@set",Ph(!0));S("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");S("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");S("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");S("\\angln","{\\angl n}");S("\\blue","\\textcolor{##6495ed}{#1}");S("\\orange","\\textcolor{##ffa500}{#1}");S("\\pink","\\textcolor{##ff00af}{#1}");S("\\red","\\textcolor{##df0030}{#1}");S("\\green","\\textcolor{##28ae7b}{#1}");S("\\gray","\\textcolor{gray}{#1}");S("\\purple","\\textcolor{##9d38bd}{#1}");S("\\blueA","\\textcolor{##ccfaff}{#1}");S("\\blueB","\\textcolor{##80f6ff}{#1}");S("\\blueC","\\textcolor{##63d9ea}{#1}");S("\\blueD","\\textcolor{##11accd}{#1}");S("\\blueE","\\textcolor{##0c7f99}{#1}");S("\\tealA","\\textcolor{##94fff5}{#1}");S("\\tealB","\\textcolor{##26edd5}{#1}");S("\\tealC","\\textcolor{##01d1c1}{#1}");S("\\tealD","\\textcolor{##01a995}{#1}");S("\\tealE","\\textcolor{##208170}{#1}");S("\\greenA","\\textcolor{##b6ffb0}{#1}");S("\\greenB","\\textcolor{##8af281}{#1}");S("\\greenC","\\textcolor{##74cf70}{#1}");S("\\greenD","\\textcolor{##1fab54}{#1}");S("\\greenE","\\textcolor{##0d923f}{#1}");S("\\goldA","\\textcolor{##ffd0a9}{#1}");S("\\goldB","\\textcolor{##ffbb71}{#1}");S("\\goldC","\\textcolor{##ff9c39}{#1}");S("\\goldD","\\textcolor{##e07d10}{#1}");S("\\goldE","\\textcolor{##a75a05}{#1}");S("\\redA","\\textcolor{##fca9a9}{#1}");S("\\redB","\\textcolor{##ff8482}{#1}");S("\\redC","\\textcolor{##f9685d}{#1}");S("\\redD","\\textcolor{##e84d39}{#1}");S("\\redE","\\textcolor{##bc2612}{#1}");S("\\maroonA","\\textcolor{##ffbde0}{#1}");S("\\maroonB","\\textcolor{##ff92c6}{#1}");S("\\maroonC","\\textcolor{##ed5fa6}{#1}");S("\\maroonD","\\textcolor{##ca337c}{#1}");S("\\maroonE","\\textcolor{##9e034e}{#1}");S("\\purpleA","\\textcolor{##ddd7ff}{#1}");S("\\purpleB","\\textcolor{##c6b9fc}{#1}");S("\\purpleC","\\textcolor{##aa87ff}{#1}");S("\\purpleD","\\textcolor{##7854ab}{#1}");S("\\purpleE","\\textcolor{##543b78}{#1}");S("\\mintA","\\textcolor{##f5f9e8}{#1}");S("\\mintB","\\textcolor{##edf2df}{#1}");S("\\mintC","\\textcolor{##e0e5cc}{#1}");S("\\grayA","\\textcolor{##f6f7f7}{#1}");S("\\grayB","\\textcolor{##f0f1f2}{#1}");S("\\grayC","\\textcolor{##e3e5e6}{#1}");S("\\grayD","\\textcolor{##d6d8da}{#1}");S("\\grayE","\\textcolor{##babec2}{#1}");S("\\grayF","\\textcolor{##888d93}{#1}");S("\\grayG","\\textcolor{##626569}{#1}");S("\\grayH","\\textcolor{##3b3e40}{#1}");S("\\grayI","\\textcolor{##21242c}{#1}");S("\\kaBlue","\\textcolor{##314453}{#1}");S("\\kaGreen","\\textcolor{##71B307}{#1}");var Lh={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class Mp{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new yp(Sp,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new lc(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg(["]"])}else({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new bn("EOF",n.loc)),this.pushTokens(r),new bn("",dn.range(t,n))}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),a,s=0,o=0;do{if(a=this.popToken(),t.push(a),a.text==="{")++s;else if(a.text==="}"){if(--s,s===-1)throw new ce("Extra }",a)}else if(a.text==="EOF")throw new ce("Unexpected end of input in a macro argument, expected '"+(e&&n?e[o]:"}")+"'",a);if(e&&n)if((s===0||s===1&&e[o]==="{")&&a.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(s!==0||n);return r.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:a}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new ce("The length of delimiters doesn't match the number of args!");for(var n=t[0],r=0;r<n.length;r++){var a=this.popToken();if(n[r]!==a.text)throw new ce("Use of the macro doesn't match its definition",a)}}for(var s=[],o=0;o<e;o++)s.push(this.consumeArg(t&&t[o+1]).tokens);return s}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new ce("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]==="\\"&&!this.isDefined(n))throw new ce("Undefined control sequence: "+n);return this.pushToken(t),!1}this.countExpansion(1);var a=r.tokens,s=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){a=a.slice();for(var o=a.length-1;o>=0;--o){var l=a[o];if(l.text==="#"){if(o===0)throw new ce("Incomplete placeholder at end of macro body",l);if(l=a[--o],l.text==="#")a.splice(o+1,1);else if(/^[1-9]$/.test(l.text))a.splice(o,2,...s[+l.text-1]);else throw new ce("Not a valid argument number",l)}}}return this.pushTokens(a),a.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}throw new Error}expandMacro(e){return this.macros.has(e)?this.expandTokens([new bn(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&(r.noexpand=!1,r.treatAsRelax=!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(n=>n.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t=="function"?t(this):t;if(typeof r=="string"){var a=0;if(r.indexOf("#")!==-1)for(var s=r.replace(/##/g,"");s.indexOf("#"+(a+1))!==-1;)++a;for(var o=new lc(r,this.settings),l=[],c=o.lex();c.text!=="EOF";)l.push(c),c=o.lex();l.reverse();var h={tokens:l,numArgs:a};return h}return r}isDefined(e){return this.macros.has(e)||Pi.hasOwnProperty(e)||Tt.math.hasOwnProperty(e)||Tt.text.hasOwnProperty(e)||Lh.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:Pi.hasOwnProperty(e)&&!Pi[e].primitive}}var hc=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Ta=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),eo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},dc={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Ds{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new Mp(e,t,this.mode),this.settings=t,this.leftrightDepth=0}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new ce("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new bn("}")),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,n}parseExpression(e,t){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var r=this.fetch();if(Ds.endOfExpression.indexOf(r.text)!==-1||t&&r.text===t||e&&Pi[r.text]&&Pi[r.text].infix)break;var a=this.parseAtom(t);if(a){if(a.type==="internal")continue}else break;n.push(a)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++)if(e[r].type==="infix"){if(t!==-1)throw new ce("only one infix operator per group",e[r].token);t=r,n=e[r].replaceWith}if(t!==-1&&n){var a,s,o=e.slice(0,t),l=e.slice(t+1);o.length===1&&o[0].type==="ordgroup"?a=o[0]:a={type:"ordgroup",mode:this.mode,body:o},l.length===1&&l[0].type==="ordgroup"?s=l[0]:s={type:"ordgroup",mode:this.mode,body:l};var c;return n==="\\\\abovefrac"?c=this.callFunction(n,[a,e[t],s],[]):c=this.callFunction(n,[a,s],[]),[c]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do{var a;r=this.parseGroup(e)}while(((a=r)==null?void 0:a.type)==="internal");if(!r)throw new ce("Expected group after '"+n+"'",t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:"textord",mode:"text",text:e[n]});var r={type:"text",mode:this.mode,body:t},a={type:"color",mode:this.mode,color:this.settings.errorColor,body:[r]};return a}parseAtom(e){var t=this.parseGroup("atom",e);if(t?.type==="internal"||this.mode==="text")return t;for(var n,r;;){this.consumeSpaces();var a=this.fetch();if(a.text==="\\limits"||a.text==="\\nolimits"){if(t&&t.type==="op"){var s=a.text==="\\limits";t.limits=s,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=a.text==="\\limits");else throw new ce("Limit controls must follow a math operator",a);this.consume()}else if(a.text==="^"){if(n)throw new ce("Double superscript",a);n=this.handleSupSubscript("superscript")}else if(a.text==="_"){if(r)throw new ce("Double subscript",a);r=this.handleSupSubscript("subscript")}else if(a.text==="'"){if(n)throw new ce("Double superscript",a);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:l}}else if(Ta[a.text]){var c=hc.test(a.text),h=[];for(h.push(new bn(Ta[a.text])),this.consume();;){var u=this.fetch().text;if(!Ta[u]||hc.test(u)!==c)break;h.unshift(new bn(Ta[u])),this.consume()}var f=this.subparse(h);c?r={type:"ordgroup",mode:"math",body:f}:n={type:"ordgroup",mode:"math",body:f}}else break}return n||r?{type:"supsub",mode:this.mode,base:t,sup:n,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,a=Pi[r];if(!a)return null;if(this.consume(),t&&t!=="atom"&&!a.allowedInArgument)throw new ce("Got function '"+r+"' with no arguments"+(t?" as "+t:""),n);if(this.mode==="text"&&!a.allowedInText)throw new ce("Can't use function '"+r+"' in text mode",n);if(this.mode==="math"&&a.allowedInMath===!1)throw new ce("Can't use function '"+r+"' in math mode",n);var{args:s,optArgs:o}=this.parseArguments(r,a);return this.callFunction(r,s,o,n,e)}callFunction(e,t,n,r,a){var s={funcName:e,parser:this,token:r,breakOnTokenText:a},o=Pi[e];if(o&&o.handler)return o.handler(s,t,n);throw new ce("No function handler for "+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var r=[],a=[],s=0;s<n;s++){var o=t.argTypes&&t.argTypes[s],l=s<t.numOptionalArgs;(t.primitive&&o==null||t.type==="sqrt"&&s===1&&a[0]==null)&&(o="primitive");var c=this.parseGroupOfType("argument to '"+e+"'",o,l);if(l)a.push(c);else if(c!=null)r.push(c);else throw new ce("Null argument, please report this as a bug")}return{args:r,optArgs:a}}parseGroupOfType(e,t,n){switch(t){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,t);case"hbox":{var r=this.parseArgumentGroup(n,"text");return r!=null?{type:"styling",mode:r.mode,body:[r],style:"text"}:null}case"raw":{var a=this.parseStringGroup("raw",n);return a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(n)throw new ce("A primitive argument cannot be optional");var s=this.parseGroup(e);if(s==null)throw new ce("Expected group as "+e,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new ce("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var r="",a;(a=this.fetch()).text!=="EOF";)r+=a.text,this.consume();return this.consume(),n.text=r,n}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,a="",s;(s=this.fetch()).text!=="EOF"&&e.test(a+s.text);)r=s,a+=r.text,this.consume();if(a==="")throw new ce("Invalid "+t+": '"+n.text+"'",n);return n.range(r,a)}parseColorGroup(e){var t=this.parseStringGroup("color",e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new ce("Invalid color: '"+t.text+"'",t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r="#"+r),{type:"color-token",mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new ce("Invalid size: '"+t.text+"'",t);var a={number:+(r[1]+r[2]),unit:r[3]};if(!Vu(a))throw new ce("Invalid unit: '"+a.unit+"'",t);return{type:"size",mode:this.mode,value:a,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var a=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:n.loc,body:a};return t&&this.switchMode(r),s}parseGroup(e,t){var n=this.fetch(),r=n.text,a;if(r==="{"||r==="\\begingroup"){this.consume();var s=r==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,s),l=this.fetch();this.expect(s),this.gullet.endGroup(),a={type:"ordgroup",mode:this.mode,loc:dn.range(n,l),body:o,semisimple:r==="\\begingroup"||void 0}}else if(a=this.parseFunction(t,e)||this.parseSymbol(),a==null&&r[0]==="\\"&&!Lh.hasOwnProperty(r)){if(this.settings.throwOnError)throw new ce("Undefined control sequence: "+r,n);a=this.formatUnsupportedCmd(r),this.consume()}return a}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n],a=r.text;a==="-"&&e[n+1].text==="-"&&(n+1<t&&e[n+2].text==="-"?(e.splice(n,3,{type:"textord",mode:"text",loc:dn.range(r,e[n+2]),text:"---"}),t-=2):(e.splice(n,2,{type:"textord",mode:"text",loc:dn.range(r,e[n+1]),text:"--"}),t-=1)),(a==="'"||a==="`")&&e[n+1].text===a&&(e.splice(n,2,{type:"textord",mode:"text",loc:dn.range(r,e[n+1]),text:a+a}),t-=1)}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)==="*";if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new ce(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:r}}dc.hasOwnProperty(t[0])&&!Tt[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=dc[t[0]]+t.slice(1));var a=_p.exec(t);a&&(t=t.substring(0,a.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var s;if(Tt[this.mode][t]){this.settings.strict&&this.mode==="math"&&Ho.indexOf(t)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var o=Tt[this.mode][t].group,l=dn.range(e),c;if(hf.hasOwnProperty(o)){var h=o;c={type:"atom",mode:this.mode,family:h,loc:l,text:t}}else c={type:o,mode:this.mode,loc:l,text:t};s=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(Hu(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),e)),s={type:"textord",mode:"text",loc:dn.range(e),text:t};else return null;if(this.consume(),a)for(var u=0;u<a[0].length;u++){var f=a[0][u];if(!eo[f])throw new ce("Unknown accent ' "+f+"'",e);var m=eo[f][this.mode]||eo[f].text;if(!m)throw new ce("Accent "+f+" unsupported in "+this.mode+" mode",e);s={type:"accent",mode:this.mode,loc:dn.range(e),label:m,isStretchy:!1,isShifty:!0,base:s}}return s}}Ds.endOfExpression=["}","\\endgroup","\\end","\\right","&"];var sl=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new Ds(e,t);delete n.gullet.macros.current["\\df@tag"];var r=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new ce("\\tag works only in display equations");r=[{type:"tag",mode:"text",body:r,tag:n.subparse([new bn("\\df@tag")])}]}return r},Ih=function(e,t,n){t.textContent="";var r=ol(e,n).toNode();t.appendChild(r)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Ih=function(){throw new ce("KaTeX doesn't work in quirks mode.")});var wr=function(e,t){var n=ol(e,t).toMarkup();return n},wp=function(e,t){var n=new V0(t);return sl(e,n)},Nh=function(e,t,n){if(n.throwOnError||!(e instanceof ce))throw e;var r=W.makeSpan(["katex-error"],[new Dn(t)]);return r.setAttribute("title",e.toString()),r.setAttribute("style","color:"+n.errorColor),r},ol=function(e,t){var n=new V0(t);try{var r=sl(e,n);return Nf(r,e,n)}catch(a){return Nh(a,e,n)}},Tp=function(e,t){var n=new V0(t);try{var r=sl(e,n);return Uf(r,e,n)}catch(a){return Nh(a,e,n)}},Ep="0.16.25",Ap={Span:la,Anchor:q0,SymbolNode:Dn,SvgNode:fi,PathNode:Ui,LineNode:Bo},Cp={version:Ep,render:Ih,renderToString:wr,ParseError:ce,SETTINGS_SCHEMA:es,__parse:wp,__renderToDomTree:ol,__renderToHTMLTree:Tp,__setFontMetrics:nf,__defineSymbol:d,__defineFunction:ye,__defineMacro:S,__domTree:Ap};function Br({latex:i,onClick:e}){const t=wr(i,{throwOnError:!1});return ht("div",{class:"LatexButton",children:ht("button",{type:"button",onClick:e,children:ht("span",{dangerouslySetInnerHTML:{__html:t}})})})}var ta,kt,to,fc,ms=0,Uh=[],Vt=Mt,pc=Vt.__b,mc=Vt.__r,xc=Vt.diffed,gc=Vt.__c,vc=Vt.unmount,_c=Vt.__;function ll(i,e){Vt.__h&&Vt.__h(kt,i,ms||e),ms=0;var t=kt.__H||(kt.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({}),t.__[i]}function ns(i){return ms=1,Rp(kh,i)}function Rp(i,e,t){var n=ll(ta++,2);if(n.t=i,!n.__c&&(n.__=[kh(void 0,e),function(o){var l=n.__N?n.__N[0]:n.__[0],c=n.t(l,o);l!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=kt,!kt.__f)){var r=function(o,l,c){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(f){return!!f.__c});if(h.every(function(f){return!f.__N}))return!a||a.call(this,o,l,c);var u=n.__c.props!==o;return h.forEach(function(f){if(f.__N){var m=f.__[0];f.__=f.__N,f.__N=void 0,m!==f.__[0]&&(u=!0)}}),a&&a.call(this,o,l,c)||u};kt.__f=!0;var a=kt.shouldComponentUpdate,s=kt.componentWillUpdate;kt.componentWillUpdate=function(o,l,c){if(this.__e){var h=a;a=void 0,r(o,l,c),a=h}s&&s.call(this,o,l,c)},kt.shouldComponentUpdate=r}return n.__N||n.__}function Dp(i,e){var t=ll(ta++,3);!Vt.__s&&Fh(t.__H,e)&&(t.__=i,t.u=e,kt.__H.__h.push(t))}function bc(i){return ms=5,Yo(function(){return{current:i}},[])}function Yo(i,e){var t=ll(ta++,7);return Fh(t.__H,e)&&(t.__=i(),t.__H=e,t.__h=i),t.__}function Pp(){for(var i;i=Uh.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(is),i.__H.__h.forEach($o),i.__H.__h=[]}catch(e){i.__H.__h=[],Vt.__e(e,i.__v)}}Vt.__b=function(i){kt=null,pc&&pc(i)},Vt.__=function(i,e){i&&e.__k&&e.__k.__m&&(i.__m=e.__k.__m),_c&&_c(i,e)},Vt.__r=function(i){mc&&mc(i),ta=0;var e=(kt=i.__c).__H;e&&(to===kt?(e.__h=[],kt.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(is),e.__h.forEach($o),e.__h=[],ta=0)),to=kt},Vt.diffed=function(i){xc&&xc(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(Uh.push(e)!==1&&fc===Vt.requestAnimationFrame||((fc=Vt.requestAnimationFrame)||Lp)(Pp)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),to=kt=null},Vt.__c=function(i,e){e.some(function(t){try{t.__h.forEach(is),t.__h=t.__h.filter(function(n){return!n.__||$o(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],Vt.__e(n,t.__v)}}),gc&&gc(i,e)},Vt.unmount=function(i){vc&&vc(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{is(n)}catch(r){e=r}}),t.__H=void 0,e&&Vt.__e(e,t.__v))};var yc=typeof requestAnimationFrame=="function";function Lp(i){var e,t=function(){clearTimeout(n),yc&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,35);yc&&(e=requestAnimationFrame(t))}function is(i){var e=kt,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),kt=e}function $o(i){var e=kt;i.__c=i.__(),kt=e}function Fh(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function kh(i,e){return typeof e=="function"?e(i):e}function Sc(i){return ht("div",{class:"LatexSlider",children:[ht("div",{dangerouslySetInnerHTML:{__html:Cp.renderToString(i.latex,{throwOnError:!1})}}),ht("input",{type:"range",min:i.min,max:i.max,step:"0.01",value:i.value,onInput:e=>i.onInput(parseFloat(e.target.value))})]})}function Ip({qubit:i,onUpdate:e}){const[t,n]=ns(Math.PI/4),[r,a]=ns(0),[s,o]=ns(0),l=Yo(()=>wr(i.makeLatex(),{throwOnError:!1}),[i]),c=Yo(()=>wr(`\\phi = ${(t/Math.PI).toFixed(2)}\\pi`,{throwOnError:!1}),[t]),h=(m,v)=>{i.applyGate(m,v),e()},u=()=>{i.reset(),e()},f=()=>{i.setState(r,s),e()};return ht("div",{class:"Controls",children:[ht("h1",{children:"Bloch Sphere Simulator"}),ht("div",{class:"QubitLabel",dangerouslySetInnerHTML:{__html:l}}),ht("div",{class:"QubitState",children:[ht(Sc,{latex:`\\theta = ${(r/Math.PI).toFixed(2)}\\pi`,min:0,max:Math.PI,value:r,onInput:a}),ht(Sc,{latex:`\\varphi = ${(s/Math.PI).toFixed(2)}\\pi`,min:0,max:2*Math.PI,value:s,onInput:o}),ht("button",{type:"button",onClick:f,children:"Set State"}),ht("button",{type:"button",onClick:u,children:ht("span",{children:["Reset qubit to initial state (",ht("span",{dangerouslySetInnerHTML:{__html:wr("\\ket{0}",{displayMode:!1})}}),")"]})})]}),ht("div",{class:"Gates",children:[ht(Br,{latex:"X = \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}",onClick:()=>h("X")}),ht(Br,{latex:"Y = \\begin{bmatrix} 0 & -i \\\\ i & 0 \\end{bmatrix}",onClick:()=>h("Y")}),ht(Br,{latex:"Z = \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}",onClick:()=>h("Z")}),ht(Br,{latex:"H = \\frac{1}{\\sqrt{2}}\\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \\end{bmatrix}",onClick:()=>h("H")}),ht("div",{children:[ht(Br,{latex:"P(\\phi) = \\begin{bmatrix} 1 & 0 \\\\ 0 & e^{i\\phi} \\end{bmatrix}",onClick:()=>h("P",t)}),ht("div",{style:{marginTop:"0.5rem"},children:[ht("div",{dangerouslySetInnerHTML:{__html:c},style:{marginBottom:"0.25rem"}}),ht("input",{type:"range",min:"0",max:2*Math.PI,step:"0.01",value:t,onInput:m=>n(parseFloat(m.target.value)),style:{width:"100%"}})]})]})]})]})}const cl="181",Tr={ROTATE:0,DOLLY:1,PAN:2},Sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Np=0,Mc=1,Up=2,Oh=1,Fp=2,ii=3,ki=0,fn=1,ai=2,hi=0,Er=1,wc=2,Tc=3,Ec=4,kp=5,Zi=100,Op=101,zp=102,Bp=103,Hp=104,Vp=200,Gp=201,Wp=202,qp=203,Ko=204,Zo=205,Xp=206,Yp=207,$p=208,Kp=209,Zp=210,jp=211,Jp=212,Qp=213,em=214,jo=0,Jo=1,Qo=2,Dr=3,e0=4,t0=5,n0=6,i0=7,zh=0,tm=1,nm=2,Ii=0,im=1,rm=2,am=3,sm=4,om=5,lm=6,cm=7,Bh=300,Pr=301,Lr=302,r0=303,a0=304,Ps=306,s0=1e3,oi=1001,o0=1002,yn=1003,um=1004,Ea=1005,Rn=1006,no=1007,Ji=1008,xi=1009,Hh=1010,Vh=1011,na=1012,ul=1013,er=1014,li=1015,kr=1016,hl=1017,dl=1018,ia=1020,Gh=35902,Wh=35899,qh=1021,Xh=1022,On=1023,ra=1026,aa=1027,Yh=1028,fl=1029,pl=1030,ml=1031,xl=1033,rs=33776,as=33777,ss=33778,os=33779,l0=35840,c0=35841,u0=35842,h0=35843,d0=36196,f0=37492,p0=37496,m0=37808,x0=37809,g0=37810,v0=37811,_0=37812,b0=37813,y0=37814,S0=37815,M0=37816,w0=37817,T0=37818,E0=37819,A0=37820,C0=37821,R0=36492,D0=36494,P0=36495,L0=36283,I0=36284,N0=36285,U0=36286,hm=3200,dm=3201,fm=0,pm=1,Di="",Tn="srgb",Ir="srgb-linear",xs="linear",bt="srgb",sr=7680,Ac=519,mm=512,xm=513,gm=514,$h=515,vm=516,_m=517,bm=518,ym=519,Cc=35044,Rc="300 es",qn=2e3,gs=2001;function Kh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sm(){const i=vs("canvas");return i.style.display="block",i}const Dc={};function Pc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ke(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ot(...i){const e="THREE."+i.shift();console.error(e,...i)}function sa(...i){const e=i.join(" ");e in Dc||(Dc[e]=!0,Ke(...i))}function Mm(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jr=Math.PI/180,F0=180/Math.PI;function ua(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function wm(i,e){return(i%e+e)%e}function io(i,e,t){return(1-t)*i+t*e}function Hr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Tm={DEG2RAD:jr};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=a[s+0],m=a[s+1],v=a[s+2],_=a[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(u!==_||l!==f||c!==m||h!==v){let g=l*f+c*m+h*v+u*_;g<0&&(f=-f,m=-m,v=-v,_=-_,g=-g);let p=1-o;if(g<.9995){const M=Math.acos(g),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,l=l*p+f*o,c=c*p+m*o,h=h*p+v*o,u=u*p+_*o}else{l=l*p+f*o,c=c*p+m*o,h=h*p+v*o,u=u*p+_*o;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=a[s],f=a[s+1],m=a[s+2],v=a[s+3];return e[t]=o*v+h*u+l*m-c*f,e[t+1]=l*v+h*f+c*u-o*m,e[t+2]=c*v+h*m+o*f-l*u,e[t+3]=h*v-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(a/2),f=l(n/2),m=l(r/2),v=l(a/2);switch(s){case"XYZ":this._x=f*h*u+c*m*v,this._y=c*m*u-f*h*v,this._z=c*h*v+f*m*u,this._w=c*h*u-f*m*v;break;case"YXZ":this._x=f*h*u+c*m*v,this._y=c*m*u-f*h*v,this._z=c*h*v-f*m*u,this._w=c*h*u+f*m*v;break;case"ZXY":this._x=f*h*u-c*m*v,this._y=c*m*u+f*h*v,this._z=c*h*v+f*m*u,this._w=c*h*u-f*m*v;break;case"ZYX":this._x=f*h*u-c*m*v,this._y=c*m*u+f*h*v,this._z=c*h*v-f*m*u,this._w=c*h*u+f*m*v;break;case"YZX":this._x=f*h*u+c*m*v,this._y=c*m*u+f*h*v,this._z=c*h*v-f*m*u,this._w=c*h*u-f*m*v;break;case"XZY":this._x=f*h*u-c*m*v,this._y=c*m*u-f*h*v,this._z=c*h*v+f*m*u,this._w=c*h*u+f*m*v;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-n*c,this._z=a*h+s*c+n*l-r*o,this._w=s*h-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),h=2*(o*t-a*r),u=2*(a*n-s*t);return this.x=t+l*c+s*u-o*h,this.y=n+l*h+o*c-a*u,this.z=r+l*u+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new G,Lc=new gi;class Je{constructor(e,t,n,r,a,s,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],v=n[8],_=r[0],g=r[3],p=r[6],M=r[1],A=r[4],R=r[7],L=r[2],C=r[5],N=r[8];return a[0]=s*_+o*M+l*L,a[3]=s*g+o*A+l*C,a[6]=s*p+o*R+l*N,a[1]=c*_+h*M+u*L,a[4]=c*g+h*A+u*C,a[7]=c*p+h*R+u*N,a[2]=f*_+m*M+v*L,a[5]=f*g+m*A+v*C,a[8]=f*p+m*R+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-n*a*h+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,f=o*l-h*a,m=c*a-s*l,v=t*u+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(o*n-r*s)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*a-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new Je,Ic=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Em(){const i={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===bt&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===bt&&(r.r=Ar(r.r),r.g=Ar(r.g),r.b=Ar(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Di?xs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return sa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return sa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ir]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:Ic,fromXYZ:Nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Ic,fromXYZ:Nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),i}const dt=Em();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let or;class Am{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{or===void 0&&(or=vs("canvas")),or.width=e.width,or.height=e.height;const r=or.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=di(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cm=0;class gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(so(r[s].image)):a.push(so(r[s]))}else a=so(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Am.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let Rm=0;const oo=new G;class rn extends ir{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=oi,r=oi,a=Rn,s=Ji,o=On,l=xi,c=rn.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ua(),this.name="",this.source=new gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oo).x}get height(){return this.source.getSize(oo).y}get depth(){return this.source.getSize(oo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case s0:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case o0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case s0:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case o0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Bh;rn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],v=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,R=(m+1)/2,L=(p+1)/2,C=(h+f)/4,N=(u+_)/4,z=(v+g)/4;return A>R&&A>L?A<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(A),r=C/n,a=N/n):R>L?R<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(R),n=C/r,a=z/r):L<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(L),n=N/a,r=z/a),this.set(n,r,a,t),this}let M=Math.sqrt((g-v)*(g-v)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-v)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dm extends ir{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new rn(r);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new gl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends Dm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zh extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ha{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Nn):Nn.fromBufferAttribute(a,s),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Ca.subVectors(this.max,Vr),lr.subVectors(e.a,Vr),cr.subVectors(e.b,Vr),ur.subVectors(e.c,Vr),Mi.subVectors(cr,lr),wi.subVectors(ur,cr),Gi.subVectors(lr,ur);let t=[0,-Mi.z,Mi.y,0,-wi.z,wi.y,0,-Gi.z,Gi.y,Mi.z,0,-Mi.x,wi.z,0,-wi.x,Gi.z,0,-Gi.x,-Mi.y,Mi.x,0,-wi.y,wi.x,0,-Gi.y,Gi.x,0];return!lo(t,lr,cr,ur,Ca)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,lr,cr,ur,Ca))?!1:(Ra.crossVectors(Mi,wi),t=[Ra.x,Ra.y,Ra.z],lo(t,lr,cr,ur,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new G,new G,new G,new G,new G,new G,new G,new G],Nn=new G,Aa=new ha,lr=new G,cr=new G,ur=new G,Mi=new G,wi=new G,Gi=new G,Vr=new G,Ca=new G,Ra=new G,Wi=new G;function lo(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Wi.fromArray(i,a);const o=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lm=new ha,Gr=new G,co=new G;let Ls=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lm.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(co)),this.expandByPoint(Gr.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const Jn=new G,uo=new G,Da=new G,Ti=new G,ho=new G,Pa=new G,fo=new G;class vl{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){uo.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(uo);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Da),o=Ti.dot(this.direction),l=-Ti.dot(Da),c=Ti.lengthSq(),h=Math.abs(1-s*s);let u,f,m,v;if(h>0)if(u=s*l-o,f=s*o-l,v=a*h,u>=0)if(f>=-v)if(f<=v){const _=1/h;u*=_,f*=_,m=u*(u+s*f+2*o)+f*(s*u+f+2*l)+c}else f=a,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*l)+c;else f=-a,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-s*a+o)),f=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(u=Math.max(0,-(s*a+o)),f=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+f*(f+2*l)+c);else f=s>0?-a:a,u=Math.max(0,-(s*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(uo).addScaledVector(Da,f),m}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),r=Jn.dot(Jn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,r,a){ho.subVectors(t,e),Pa.subVectors(n,e),fo.crossVectors(ho,Pa);let s=this.direction.dot(fo),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ti.subVectors(this.origin,e);const l=o*this.direction.dot(Pa.crossVectors(Ti,Pa));if(l<0)return null;const c=o*this.direction.dot(ho.cross(Ti));if(c<0||l+c>s)return null;const h=-o*Ti.dot(fo);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,n,r,a,s,o,l,c,h,u,f,m,v,_,g){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,h,u,f,m,v,_,g)}set(e,t,n,r,a,s,o,l,c,h,u,f,m,v,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=v,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/hr.setFromMatrixColumn(e,0).length(),a=1/hr.setFromMatrixColumn(e,1).length(),s=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const f=s*h,m=s*u,v=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+v*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,v=c*h,_=c*u;t[0]=f+_*o,t[4]=v*o-m,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=m*o-v,t[6]=_+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,v=c*h,_=c*u;t[0]=f-_*o,t[4]=-s*u,t[8]=v+m*o,t[1]=m+v*o,t[5]=s*h,t[9]=_-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*h,m=s*u,v=o*h,_=o*u;t[0]=l*h,t[4]=v*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=v*u+m,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+v,t[10]=f-_*u}else if(e.order==="XZY"){const f=s*l,m=s*c,v=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=s*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Im,e,Nm)}lookAt(e,t,n){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ei.crossVectors(n,gn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ei.crossVectors(n,gn)),Ei.normalize(),La.crossVectors(gn,Ei),r[0]=Ei.x,r[4]=La.x,r[8]=gn.x,r[1]=Ei.y,r[5]=La.y,r[9]=gn.y,r[2]=Ei.z,r[6]=La.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],v=n[2],_=n[6],g=n[10],p=n[14],M=n[3],A=n[7],R=n[11],L=n[15],C=r[0],N=r[4],z=r[8],w=r[12],E=r[1],U=r[5],B=r[9],X=r[13],K=r[2],Z=r[6],Q=r[10],se=r[14],J=r[3],de=r[7],he=r[11],Pe=r[15];return a[0]=s*C+o*E+l*K+c*J,a[4]=s*N+o*U+l*Z+c*de,a[8]=s*z+o*B+l*Q+c*he,a[12]=s*w+o*X+l*se+c*Pe,a[1]=h*C+u*E+f*K+m*J,a[5]=h*N+u*U+f*Z+m*de,a[9]=h*z+u*B+f*Q+m*he,a[13]=h*w+u*X+f*se+m*Pe,a[2]=v*C+_*E+g*K+p*J,a[6]=v*N+_*U+g*Z+p*de,a[10]=v*z+_*B+g*Q+p*he,a[14]=v*w+_*X+g*se+p*Pe,a[3]=M*C+A*E+R*K+L*J,a[7]=M*N+A*U+R*Z+L*de,a[11]=M*z+A*B+R*Q+L*he,a[15]=M*w+A*X+R*se+L*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],v=e[3],_=e[7],g=e[11],p=e[15];return v*(+a*l*u-r*c*u-a*o*f+n*c*f+r*o*m-n*l*m)+_*(+t*l*m-t*c*f+a*s*f-r*s*m+r*c*h-a*l*h)+g*(+t*c*u-t*o*m-a*s*u+n*s*m+a*o*h-n*c*h)+p*(-r*o*h-t*l*u+t*o*f+r*s*u-n*s*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],v=e[12],_=e[13],g=e[14],p=e[15],M=u*g*c-_*f*c+_*l*m-o*g*m-u*l*p+o*f*p,A=v*f*c-h*g*c-v*l*m+s*g*m+h*l*p-s*f*p,R=h*_*c-v*u*c+v*o*m-s*_*m-h*o*p+s*u*p,L=v*u*l-h*_*l-v*o*f+s*_*f+h*o*g-s*u*g,C=t*M+n*A+r*R+a*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=M*N,e[1]=(_*f*a-u*g*a-_*r*m+n*g*m+u*r*p-n*f*p)*N,e[2]=(o*g*a-_*l*a+_*r*c-n*g*c-o*r*p+n*l*p)*N,e[3]=(u*l*a-o*f*a-u*r*c+n*f*c+o*r*m-n*l*m)*N,e[4]=A*N,e[5]=(h*g*a-v*f*a+v*r*m-t*g*m-h*r*p+t*f*p)*N,e[6]=(v*l*a-s*g*a-v*r*c+t*g*c+s*r*p-t*l*p)*N,e[7]=(s*f*a-h*l*a+h*r*c-t*f*c-s*r*m+t*l*m)*N,e[8]=R*N,e[9]=(v*u*a-h*_*a-v*n*m+t*_*m+h*n*p-t*u*p)*N,e[10]=(s*_*a-v*o*a+v*n*c-t*_*c-s*n*p+t*o*p)*N,e[11]=(h*o*a-s*u*a-h*n*c+t*u*c+s*n*m-t*o*m)*N,e[12]=L*N,e[13]=(h*_*r-v*u*r+v*n*f-t*_*f-h*n*g+t*u*g)*N,e[14]=(v*o*r-s*_*r-v*n*l+t*_*l+s*n*g-t*o*g)*N,e[15]=(s*u*r-h*o*r+h*n*l-t*u*l-s*n*f+t*o*f)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,f=a*c,m=a*h,v=a*u,_=s*h,g=s*u,p=o*u,M=l*c,A=l*h,R=l*u,L=n.x,C=n.y,N=n.z;return r[0]=(1-(_+p))*L,r[1]=(m+R)*L,r[2]=(v-A)*L,r[3]=0,r[4]=(m-R)*C,r[5]=(1-(f+p))*C,r[6]=(g+M)*C,r[7]=0,r[8]=(v+A)*N,r[9]=(g-M)*N,r[10]=(1-(f+_))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=hr.set(r[0],r[1],r[2]).length();const s=hr.set(r[4],r[5],r[6]).length(),o=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/a,h=1/s,u=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=qn,l=!1){const c=this.elements,h=2*a/(t-e),u=2*a/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let v,_;if(l)v=a/(s-a),_=s*a/(s-a);else if(o===qn)v=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===gs)v=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=qn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r);let v,_;if(l)v=1/(s-a),_=s/(s-a);else if(o===qn)v=-2/(s-a),_=-(s+a)/(s-a);else if(o===gs)v=-1/(s-a),_=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hr=new G,Un=new Ft,Im=new G(0,0,0),Nm=new G(1,1,1),Ei=new G,La=new G,gn=new G,Uc=new Ft,Fc=new gi;class vi{constructor(e=0,t=0,n=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Um=0;const kc=new G,dr=new gi,Qn=new Ft,Ia=new G,Wr=new G,Fm=new G,km=new gi,Oc=new G(1,0,0),zc=new G(0,1,0),Bc=new G(0,0,1),Hc={type:"added"},Om={type:"removed"},fr={type:"childadded",child:null},po={type:"childremoved",child:null};class an extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new G,t=new vi,n=new gi,r=new G(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Je}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(zc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(zc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ia.copy(e):Ia.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Wr,Ia,this.up):Qn.lookAt(Ia,Wr,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),dr.setFromRotationMatrix(Qn),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hc),fr.child=e,this.dispatchEvent(fr),fr.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hc),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}an.DEFAULT_UP=new G(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new G,ei=new G,mo=new G,ti=new G,pr=new G,mr=new G,Vc=new G,xo=new G,go=new G,vo=new G,_o=new zt,bo=new zt,yo=new zt;class An{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Fn.subVectors(r,t),ei.subVectors(n,t),mo.subVectors(e,t);const s=Fn.dot(Fn),o=Fn.dot(ei),l=Fn.dot(mo),c=ei.dot(ei),h=ei.dot(mo),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,v=(s*h-o*l)*f;return a.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ti.x),l.addScaledVector(s,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return _o.setScalar(0),bo.setScalar(0),yo.setScalar(0),_o.fromBufferAttribute(e,t),bo.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(_o,a.x),s.addScaledVector(bo,a.y),s.addScaledVector(yo,a.z),s}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),ei.subVectors(e,t),Fn.cross(ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Fn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return An.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;pr.subVectors(r,n),mr.subVectors(a,n),xo.subVectors(e,n);const l=pr.dot(xo),c=mr.dot(xo);if(l<=0&&c<=0)return t.copy(n);go.subVectors(e,r);const h=pr.dot(go),u=mr.dot(go);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(pr,s);vo.subVectors(e,a);const m=pr.dot(vo),v=mr.dot(vo);if(v>=0&&m<=v)return t.copy(a);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(mr,o);const g=h*v-m*u;if(g<=0&&u-h>=0&&m-v>=0)return Vc.subVectors(a,r),o=(u-h)/(u-h+(m-v)),t.copy(r).addScaledVector(Vc,o);const p=1/(g+_+f);return s=_*p,o=f*p,t.copy(n).addScaledVector(pr,s).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Na={h:0,s:0,l:0};function So(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=wm(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=So(s,a,e+1/3),this.g=So(s,a,e),this.b=So(s,a,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Tn){function n(a){a!==void 0&&parseFloat(a)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=Jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return dt.workingToColorSpace(jt.copy(this),e),Math.round(at(jt.r*255,0,255))*65536+Math.round(at(jt.g*255,0,255))*256+Math.round(at(jt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(jt.copy(this),t);const n=jt.r,r=jt.g,a=jt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case n:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-n)/u+2;break;case a:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Tn){dt.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,r=jt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Na);const n=io(Ai.h,Na.h,t),r=io(Ai.s,Na.s,t),a=io(Ai.l,Na.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new xt;xt.NAMES=Jh;let zm=0;class da extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=Er,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Zo,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Is extends da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new G,Ua=new Ee;let Bm=0;class Xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),r=cn(r,this.array),a=cn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}}class Qh extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ed extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hm=0;const wn=new Ft,Mo=new an,xr=new G,vn=new ha,qr=new ha,Kt=new G;class Ln extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kh(e)?ed:Qh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];vn.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(vn.min,qr.min),vn.expandByPoint(Kt),Kt.addVectors(vn.max,qr.max),vn.expandByPoint(Kt)):(vn.expandByPoint(qr.min),vn.expandByPoint(qr.max))}vn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Kt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(e,c),Kt.add(xr)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new G,l[z]=new G;const c=new G,h=new G,u=new G,f=new Ee,m=new Ee,v=new Ee,_=new G,g=new G;function p(z,w,E){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,E),f.fromBufferAttribute(a,z),m.fromBufferAttribute(a,w),v.fromBufferAttribute(a,E),h.sub(c),u.sub(c),m.sub(f),v.sub(f);const U=1/(m.x*v.y-v.x*m.y);isFinite(U)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(U),g.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(U),o[z].add(_),o[w].add(_),o[E].add(_),l[z].add(g),l[w].add(g),l[E].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let z=0,w=M.length;z<w;++z){const E=M[z],U=E.start,B=E.count;for(let X=U,K=U+B;X<K;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const A=new G,R=new G,L=new G,C=new G;function N(z){L.fromBufferAttribute(r,z),C.copy(L);const w=o[z];A.copy(w),A.sub(L.multiplyScalar(L.dot(w))).normalize(),R.crossVectors(C,w);const U=R.dot(l[z])<0?-1:1;s.setXYZW(z,A.x,A.y,A.z,U)}for(let z=0,w=M.length;z<w;++z){const E=M[z],U=E.start,B=E.count;for(let X=U,K=U+B;X<K;X+=3)N(e.getX(X+0)),N(e.getX(X+1)),N(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new G,a=new G,s=new G,o=new G,l=new G,c=new G,h=new G,u=new G;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let p=0;p<h;p++)f[v++]=c[m++]}return new Xn(f,h,u)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gc=new Ft,qi=new vl,Fa=new Ls,Wc=new G,ka=new G,Oa=new G,za=new G,wo=new G,Ba=new G,qc=new G,Ha=new G;class zn extends an{constructor(e=new Ln,t=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ba.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(wo.fromBufferAttribute(u,e),s?Ba.addScaledVector(wo,h):Ba.addScaledVector(wo.sub(t),h))}t.add(Ba)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(a),qi.copy(e.ray).recast(e.near),!(Fa.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Fa,Wc)===null||qi.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(Gc.copy(a).invert(),qi.copy(e.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,_=f.length;v<_;v++){const g=f[v],p=s[g.materialIndex],M=Math.max(g.start,m.start),A=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let R=M,L=A;R<L;R+=3){const C=o.getX(R),N=o.getX(R+1),z=o.getX(R+2);r=Va(this,p,e,n,c,h,u,C,N,z),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=v,p=_;g<p;g+=3){const M=o.getX(g),A=o.getX(g+1),R=o.getX(g+2);r=Va(this,s,e,n,c,h,u,M,A,R),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,_=f.length;v<_;v++){const g=f[v],p=s[g.materialIndex],M=Math.max(g.start,m.start),A=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let R=M,L=A;R<L;R+=3){const C=R,N=R+1,z=R+2;r=Va(this,p,e,n,c,h,u,C,N,z),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=v,p=_;g<p;g+=3){const M=g,A=g+1,R=g+2;r=Va(this,s,e,n,c,h,u,M,A,R),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Vm(i,e,t,n,r,a,s,o){let l;if(e.side===fn?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===ki,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:i}}function Va(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,ka),i.getVertexPosition(l,Oa),i.getVertexPosition(c,za);const h=Vm(i,e,t,n,ka,Oa,za,qc);if(h){const u=new G;An.getBarycoord(qc,ka,Oa,za,u),r&&(h.uv=An.getInterpolatedAttribute(r,o,l,c,u,new Ee)),a&&(h.uv1=An.getInterpolatedAttribute(a,o,l,c,u,new Ee)),s&&(h.normal=An.getInterpolatedAttribute(s,o,l,c,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};An.getNormal(ka,Oa,za,f.normal),h.face=f,h.barycoord=u}return h}class fa extends Ln{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],u=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,a,0),v("z","y","x",1,-1,n,t,-e,s,a,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,a,4),v("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function v(_,g,p,M,A,R,L,C,N,z,w){const E=R/N,U=L/z,B=R/2,X=L/2,K=C/2,Z=N+1,Q=z+1;let se=0,J=0;const de=new G;for(let he=0;he<Q;he++){const Pe=he*U-X;for(let qe=0;qe<Z;qe++){const ot=qe*E-B;de[_]=ot*M,de[g]=Pe*A,de[p]=K,c.push(de.x,de.y,de.z),de[_]=0,de[g]=0,de[p]=C>0?1:-1,h.push(de.x,de.y,de.z),u.push(qe/N),u.push(1-he/z),se+=1}}for(let he=0;he<z;he++)for(let Pe=0;Pe<N;Pe++){const qe=f+Pe+Z*he,ot=f+Pe+Z*(he+1),mt=f+(Pe+1)+Z*(he+1),lt=f+(Pe+1)+Z*he;l.push(qe,ot,lt),l.push(ot,mt,lt),J+=6}o.addGroup(m,J,w),m+=J,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=Nr(i[t]);for(const r in n)e[r]=n[r]}return e}function Gm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function td(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Wm={clone:Nr,merge:tn};var qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=Gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nd extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new G,Xc=new Ee,Yc=new Ee;class En extends nd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=F0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return F0*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,Yc),t.subVectors(Yc,Xc)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,vr=1;class Ym extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(gr,vr,e,t);r.layers=this.layers,this.add(r);const a=new En(gr,vr,e,t);a.layers=this.layers,this.add(a);const s=new En(gr,vr,e,t);s.layers=this.layers,this.add(s);const o=new En(gr,vr,e,t);o.layers=this.layers,this.add(o);const l=new En(gr,vr,e,t);l.layers=this.layers,this.add(l);const c=new En(gr,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class id extends rn{constructor(e=[],t=Pr,n,r,a,s,o,l,c,h){super(e,t,n,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $m extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new id(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fa(5,5,5),a=new _i({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:hi});a.uniforms.tEquirect.value=t;const s=new zn(r,a),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Rn),new Ym(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}class Qi extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Km={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zm extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jm extends rn{constructor(e=null,t=1,n=1,r,a,s,o,l,c=yn,h=yn,u,f){super(null,s,o,l,c,h,r,a,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eo=new G,Jm=new G,Qm=new Je;class Ri{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Eo.subVectors(n,t).cross(Jm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Eo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qm.getNormalMatrix(e),r=this.coplanarPoint(Eo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Ls,e1=new Ee(.5,.5),Ga=new G;class rd{constructor(e=new Ri,t=new Ri,n=new Ri,r=new Ri,a=new Ri,s=new Ri){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],h=a[4],u=a[5],f=a[6],m=a[7],v=a[8],_=a[9],g=a[10],p=a[11],M=a[12],A=a[13],R=a[14],L=a[15];if(r[0].setComponents(c-s,m-h,p-v,L-M).normalize(),r[1].setComponents(c+s,m+h,p+v,L+M).normalize(),r[2].setComponents(c+o,m+u,p+_,L+A).normalize(),r[3].setComponents(c-o,m-u,p-_,L-A).normalize(),n)r[4].setComponents(l,f,g,R).normalize(),r[5].setComponents(c-l,m-f,p-g,L-R).normalize();else if(r[4].setComponents(c-l,m-f,p-g,L-R).normalize(),t===qn)r[5].setComponents(c+l,m+f,p+g,L+R).normalize();else if(t===gs)r[5].setComponents(l,f,g,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const t=e1.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ad extends da{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _s=new G,bs=new G,$c=new Ft,Xr=new vl,Wa=new Ls,Ao=new G,Kc=new G;class t1 extends an{constructor(e=new Ln,t=new ad){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)_s.fromBufferAttribute(t,r-1),bs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=_s.distanceTo(bs);e.setAttribute("lineDistance",new Jt(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=a,e.ray.intersectsSphere(Wa)===!1)return;$c.copy(r).invert(),Xr.copy(e.ray).applyMatrix4($c);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,s.start),v=Math.min(h.count,s.start+s.count);for(let _=m,g=v-1;_<g;_+=c){const p=h.getX(_),M=h.getX(_+1),A=qa(this,e,Xr,l,p,M,_);A&&t.push(A)}if(this.isLineLoop){const _=h.getX(v-1),g=h.getX(m),p=qa(this,e,Xr,l,_,g,v-1);p&&t.push(p)}}else{const m=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let _=m,g=v-1;_<g;_+=c){const p=qa(this,e,Xr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=qa(this,e,Xr,l,v-1,m,v-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function qa(i,e,t,n,r,a,s){const o=i.geometry.attributes.position;if(_s.fromBufferAttribute(o,r),bs.fromBufferAttribute(o,a),t.distanceSqToSegment(_s,bs,Ao,Kc)>n)return;Ao.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ao);if(!(c<e.near||c>e.far))return{distance:c,point:Kc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Zc=new G,jc=new G;class n1 extends t1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Zc.fromBufferAttribute(t,r),jc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Zc.distanceTo(jc);e.setAttribute("lineDistance",new Jt(n,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends rn{constructor(e,t,n=er,r,a,s,o=yn,l=yn,c,h=ra,u=1){if(h!==ra&&h!==aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,a,s,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class od extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ns extends Ln{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const h=[],u=[],f=[],m=[];let v=0;const _=[],g=n/2;let p=0;M(),s===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(m,2));function M(){const R=new G,L=new G;let C=0;const N=(t-e)/n;for(let z=0;z<=a;z++){const w=[],E=z/a,U=E*(t-e)+e;for(let B=0;B<=r;B++){const X=B/r,K=X*l+o,Z=Math.sin(K),Q=Math.cos(K);L.x=U*Z,L.y=-E*n+g,L.z=U*Q,u.push(L.x,L.y,L.z),R.set(Z,N,Q).normalize(),f.push(R.x,R.y,R.z),m.push(X,1-E),w.push(v++)}_.push(w)}for(let z=0;z<r;z++)for(let w=0;w<a;w++){const E=_[w][z],U=_[w+1][z],B=_[w+1][z+1],X=_[w][z+1];(e>0||w!==0)&&(h.push(E,U,X),C+=3),(t>0||w!==a-1)&&(h.push(U,B,X),C+=3)}c.addGroup(p,C,0),p+=C}function A(R){const L=v,C=new Ee,N=new G;let z=0;const w=R===!0?e:t,E=R===!0?1:-1;for(let B=1;B<=r;B++)u.push(0,g*E,0),f.push(0,E,0),m.push(.5,.5),v++;const U=v;for(let B=0;B<=r;B++){const K=B/r*l+o,Z=Math.cos(K),Q=Math.sin(K);N.x=w*Q,N.y=g*E,N.z=w*Z,u.push(N.x,N.y,N.z),f.push(0,E,0),C.x=Z*.5+.5,C.y=Q*.5*E+.5,m.push(C.x,C.y),v++}for(let B=0;B<r;B++){const X=L+B,K=U+B;R===!0?h.push(K,K+1,X):h.push(K+1,K,X),z+=3}c.addGroup(p,z,R===!0?1:2),p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _l extends Ns{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new _l(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Xa=new G,Ya=new G,Co=new G,$a=new An;class i1 extends Ln{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(jr*t),s=e.getIndex(),o=e.getAttribute("position"),l=s?s.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},m=[];for(let v=0;v<l;v+=3){s?(c[0]=s.getX(v),c[1]=s.getX(v+1),c[2]=s.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:g,c:p}=$a;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),$a.getNormal(Co),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const A=(M+1)%3,R=u[M],L=u[A],C=$a[h[M]],N=$a[h[A]],z=`${R}_${L}`,w=`${L}_${R}`;w in f&&f[w]?(Co.dot(f[w].normal)<=a&&(m.push(C.x,C.y,C.z),m.push(N.x,N.y,N.z)),f[w]=null):z in f||(f[z]={index0:c[M],index1:c[A],normal:Co.clone()})}}for(const v in f)if(f[v]){const{index0:_,index1:g}=f[v];Xa.fromBufferAttribute(o,_),Ya.fromBufferAttribute(o,g),m.push(Xa.x,Xa.y,Xa.z),m.push(Ya.x,Ya.y,Ya.z)}this.setAttribute("position",new Jt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Us extends Ln{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,m=[],v=[],_=[],g=[];for(let p=0;p<h;p++){const M=p*f-s;for(let A=0;A<c;A++){const R=A*u-a;v.push(R,-M,0),_.push(0,0,1),g.push(A/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const A=M+c*p,R=M+c*(p+1),L=M+1+c*(p+1),C=M+1+c*p;m.push(A,R,C),m.push(R,L,C)}this.setIndex(m),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}class bl extends Ln{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const h=[],u=new G,f=new G,m=[],v=[],_=[],g=[];for(let p=0;p<=n;p++){const M=[],A=p/n;let R=0;p===0&&s===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let L=0;L<=t;L++){const C=L/t;u.x=-e*Math.cos(r+C*a)*Math.sin(s+A*o),u.y=e*Math.cos(s+A*o),u.z=e*Math.sin(r+C*a)*Math.sin(s+A*o),v.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(C+R,1-A),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const A=h[p][M+1],R=h[p][M],L=h[p+1][M],C=h[p+1][M+1];(p!==0||s>0)&&m.push(A,R,C),(p!==n-1||l<Math.PI)&&m.push(R,L,C)}this.setIndex(m),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class r1 extends da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a1 extends da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class s1 extends nd{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class o1 extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Jc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class l1 extends ir{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ke("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Qc(i,e,t,n){const r=c1(n);switch(t){case qh:return i*e;case Yh:return i*e/r.components*r.byteLength;case fl:return i*e/r.components*r.byteLength;case pl:return i*e*2/r.components*r.byteLength;case ml:return i*e*2/r.components*r.byteLength;case Xh:return i*e*3/r.components*r.byteLength;case On:return i*e*4/r.components*r.byteLength;case xl:return i*e*4/r.components*r.byteLength;case rs:case as:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ss:case os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case c0:case h0:return Math.max(i,16)*Math.max(e,8)/4;case l0:case u0:return Math.max(i,8)*Math.max(e,8)/2;case d0:case f0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case p0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case m0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case x0:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case g0:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case v0:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _0:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case b0:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case y0:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case S0:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case M0:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case w0:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case T0:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case E0:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case A0:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case C0:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case R0:case D0:case P0:return Math.ceil(i/4)*Math.ceil(e/4)*16;case L0:case I0:return Math.ceil(i/4)*Math.ceil(e/4)*8;case N0:case U0:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c1(i){switch(i){case xi:case Hh:return{byteLength:1,components:1};case na:case Vh:case kr:return{byteLength:2,components:1};case hl:case dl:return{byteLength:2,components:4};case er:case ul:case li:return{byteLength:4,components:1};case Gh:case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);function ld(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function u1(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<u.length;m++){const v=u[f],_=u[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,v=u.length;m<v;m++){const _=u[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var h1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
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
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
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
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_1=`#ifdef USE_BATCHING
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
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w1=`#ifdef USE_IRIDESCENCE
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
#endif`,T1=`#ifdef USE_BUMPMAP
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
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N1=`#define PI 3.141592653589793
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
} // validated`,U1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F1=`vec3 transformedNormal = objectNormal;
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
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J1=`#ifdef USE_GRADIENTMAP
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
}`,Q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n3=`uniform bool receiveShadow;
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
#endif`,i3=`#ifdef USE_ENVMAP
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
#endif`,r3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l3=`PhysicalMaterial material;
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
#endif`,c3=`uniform sampler2D dfgLUT;
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
}`,u3=`
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
#endif`,h3=`#if defined( RE_IndirectDiffuse )
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
#endif`,d3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b3=`#if defined( USE_POINTS_UV )
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
#endif`,y3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E3=`#ifdef USE_MORPHTARGETS
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
#endif`,A3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I3=`#ifdef USE_NORMALMAP
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
#endif`,N3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K3=`float getShadowMask() {
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
}`,Z3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j3=`#ifdef USE_SKINNING
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
#endif`,J3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q3=`#ifdef USE_SKINNING
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
#endif`,e2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r2=`#ifdef USE_TRANSMISSION
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
#endif`,a2=`#ifdef USE_TRANSMISSION
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
#endif`,s2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h2=`uniform sampler2D t2D;
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
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x2=`#include <common>
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
}`,g2=`#if DEPTH_PACKING == 3200
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
}`,v2=`#define DISTANCE
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
}`,_2=`#define DISTANCE
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
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`uniform float scale;
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
}`,M2=`uniform vec3 diffuse;
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
}`,w2=`#include <common>
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
}`,T2=`uniform vec3 diffuse;
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
}`,E2=`#define LAMBERT
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
}`,A2=`#define LAMBERT
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
}`,C2=`#define MATCAP
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
}`,R2=`#define MATCAP
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
}`,D2=`#define NORMAL
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
}`,P2=`#define NORMAL
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
}`,L2=`#define PHONG
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
}`,I2=`#define PHONG
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
}`,N2=`#define STANDARD
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
}`,U2=`#define STANDARD
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
}`,F2=`#define TOON
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
}`,k2=`#define TOON
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
}`,O2=`uniform float size;
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
}`,z2=`uniform vec3 diffuse;
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
}`,B2=`#include <common>
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
}`,H2=`uniform vec3 color;
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
}`,V2=`uniform float rotation;
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
}`,G2=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:h1,alphahash_pars_fragment:d1,alphamap_fragment:f1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:x1,aomap_fragment:g1,aomap_pars_fragment:v1,batching_pars_vertex:_1,batching_vertex:b1,begin_vertex:y1,beginnormal_vertex:S1,bsdfs:M1,iridescence_fragment:w1,bumpmap_pars_fragment:T1,clipping_planes_fragment:E1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:C1,clipping_planes_vertex:R1,color_fragment:D1,color_pars_fragment:P1,color_pars_vertex:L1,color_vertex:I1,common:N1,cube_uv_reflection_fragment:U1,defaultnormal_vertex:F1,displacementmap_pars_vertex:k1,displacementmap_vertex:O1,emissivemap_fragment:z1,emissivemap_pars_fragment:B1,colorspace_fragment:H1,colorspace_pars_fragment:V1,envmap_fragment:G1,envmap_common_pars_fragment:W1,envmap_pars_fragment:q1,envmap_pars_vertex:X1,envmap_physical_pars_fragment:i3,envmap_vertex:Y1,fog_vertex:$1,fog_pars_vertex:K1,fog_fragment:Z1,fog_pars_fragment:j1,gradientmap_pars_fragment:J1,lightmap_pars_fragment:Q1,lights_lambert_fragment:e3,lights_lambert_pars_fragment:t3,lights_pars_begin:n3,lights_toon_fragment:r3,lights_toon_pars_fragment:a3,lights_phong_fragment:s3,lights_phong_pars_fragment:o3,lights_physical_fragment:l3,lights_physical_pars_fragment:c3,lights_fragment_begin:u3,lights_fragment_maps:h3,lights_fragment_end:d3,logdepthbuf_fragment:f3,logdepthbuf_pars_fragment:p3,logdepthbuf_pars_vertex:m3,logdepthbuf_vertex:x3,map_fragment:g3,map_pars_fragment:v3,map_particle_fragment:_3,map_particle_pars_fragment:b3,metalnessmap_fragment:y3,metalnessmap_pars_fragment:S3,morphinstance_vertex:M3,morphcolor_vertex:w3,morphnormal_vertex:T3,morphtarget_pars_vertex:E3,morphtarget_vertex:A3,normal_fragment_begin:C3,normal_fragment_maps:R3,normal_pars_fragment:D3,normal_pars_vertex:P3,normal_vertex:L3,normalmap_pars_fragment:I3,clearcoat_normal_fragment_begin:N3,clearcoat_normal_fragment_maps:U3,clearcoat_pars_fragment:F3,iridescence_pars_fragment:k3,opaque_fragment:O3,packing:z3,premultiplied_alpha_fragment:B3,project_vertex:H3,dithering_fragment:V3,dithering_pars_fragment:G3,roughnessmap_fragment:W3,roughnessmap_pars_fragment:q3,shadowmap_pars_fragment:X3,shadowmap_pars_vertex:Y3,shadowmap_vertex:$3,shadowmask_pars_fragment:K3,skinbase_vertex:Z3,skinning_pars_vertex:j3,skinning_vertex:J3,skinnormal_vertex:Q3,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:r2,transmission_pars_fragment:a2,uv_pars_fragment:s2,uv_pars_vertex:o2,uv_vertex:l2,worldpos_vertex:c2,background_vert:u2,background_frag:h2,backgroundCube_vert:d2,backgroundCube_frag:f2,cube_vert:p2,cube_frag:m2,depth_vert:x2,depth_frag:g2,distanceRGBA_vert:v2,distanceRGBA_frag:_2,equirect_vert:b2,equirect_frag:y2,linedashed_vert:S2,linedashed_frag:M2,meshbasic_vert:w2,meshbasic_frag:T2,meshlambert_vert:E2,meshlambert_frag:A2,meshmatcap_vert:C2,meshmatcap_frag:R2,meshnormal_vert:D2,meshnormal_frag:P2,meshphong_vert:L2,meshphong_frag:I2,meshphysical_vert:N2,meshphysical_frag:U2,meshtoon_vert:F2,meshtoon_frag:k2,points_vert:O2,points_frag:z2,shadow_vert:B2,shadow_frag:H2,sprite_vert:V2,sprite_frag:G2},ve={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Vn={basic:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new xt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:tn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:tn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new xt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:tn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:tn([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:tn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:tn([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:tn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:tn([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:tn([ve.common,ve.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:tn([ve.lights,ve.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Vn.physical={uniforms:tn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ka={r:0,b:0,g:0},Yi=new vi,W2=new Ft;function q2(i,e,t,n,r,a,s){const o=new xt(0);let l=a===!0?0:1,c,h,u=null,f=0,m=null;function v(A){let R=A.isScene===!0?A.background:null;return R&&R.isTexture&&(R=(A.backgroundBlurriness>0?t:e).get(R)),R}function _(A){let R=!1;const L=v(A);L===null?p(o,l):L&&L.isColor&&(p(L,1),R=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(A,R){const L=v(R);L&&(L.isCubeTexture||L.mapping===Ps)?(h===void 0&&(h=new zn(new fa(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Nr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Yi.copy(R.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler(Yi)),h.material.toneMapped=dt.getTransfer(L.colorSpace)!==bt,(u!==L||f!==L.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=L,f=L.version,m=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new zn(new Us(2,2),new _i({name:"BackgroundMaterial",uniforms:Nr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=dt.getTransfer(L.colorSpace)!==bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||f!==L.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=L,f=L.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,R){A.getRGB(Ka,td(i)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,R,s)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,R=1){o.set(A),l=R,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(o,l)},render:_,addToRenderList:g,dispose:M}}function X2(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,s=!1;function o(E,U,B,X,K){let Z=!1;const Q=u(X,B,U);a!==Q&&(a=Q,c(a.object)),Z=m(E,X,B,K),Z&&v(E,X,B,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,R(E,U,B,X),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,U,B){const X=B.wireframe===!0;let K=n[E.id];K===void 0&&(K={},n[E.id]=K);let Z=K[U.id];Z===void 0&&(Z={},K[U.id]=Z);let Q=Z[X];return Q===void 0&&(Q=f(l()),Z[X]=Q),Q}function f(E){const U=[],B=[],X=[];for(let K=0;K<t;K++)U[K]=0,B[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:X,object:E,attributes:{},index:null}}function m(E,U,B,X){const K=a.attributes,Z=U.attributes;let Q=0;const se=B.getAttributes();for(const J in se)if(se[J].location>=0){const he=K[J];let Pe=Z[J];if(Pe===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(Pe=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(Pe=E.instanceColor)),he===void 0||he.attribute!==Pe||Pe&&he.data!==Pe.data)return!0;Q++}return a.attributesNum!==Q||a.index!==X}function v(E,U,B,X){const K={},Z=U.attributes;let Q=0;const se=B.getAttributes();for(const J in se)if(se[J].location>=0){let he=Z[J];he===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(he=E.instanceColor));const Pe={};Pe.attribute=he,he&&he.data&&(Pe.data=he.data),K[J]=Pe,Q++}a.attributes=K,a.attributesNum=Q,a.index=X}function _(){const E=a.newAttributes;for(let U=0,B=E.length;U<B;U++)E[U]=0}function g(E){p(E,0)}function p(E,U){const B=a.newAttributes,X=a.enabledAttributes,K=a.attributeDivisors;B[E]=1,X[E]===0&&(i.enableVertexAttribArray(E),X[E]=1),K[E]!==U&&(i.vertexAttribDivisor(E,U),K[E]=U)}function M(){const E=a.newAttributes,U=a.enabledAttributes;for(let B=0,X=U.length;B<X;B++)U[B]!==E[B]&&(i.disableVertexAttribArray(B),U[B]=0)}function A(E,U,B,X,K,Z,Q){Q===!0?i.vertexAttribIPointer(E,U,B,K,Z):i.vertexAttribPointer(E,U,B,X,K,Z)}function R(E,U,B,X){_();const K=X.attributes,Z=B.getAttributes(),Q=U.defaultAttributeValues;for(const se in Z){const J=Z[se];if(J.location>=0){let de=K[se];if(de===void 0&&(se==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),se==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const he=de.normalized,Pe=de.itemSize,qe=e.get(de);if(qe===void 0)continue;const ot=qe.buffer,mt=qe.type,lt=qe.bytesPerElement,ee=mt===i.INT||mt===i.UNSIGNED_INT||de.gpuType===ul;if(de.isInterleavedBufferAttribute){const ie=de.data,Se=ie.stride,Xe=de.offset;if(ie.isInstancedInterleavedBuffer){for(let Le=0;Le<J.locationSize;Le++)p(J.location+Le,ie.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Le=0;Le<J.locationSize;Le++)g(J.location+Le);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Le=0;Le<J.locationSize;Le++)A(J.location+Le,Pe/J.locationSize,mt,he,Se*lt,(Xe+Pe/J.locationSize*Le)*lt,ee)}else{if(de.isInstancedBufferAttribute){for(let ie=0;ie<J.locationSize;ie++)p(J.location+ie,de.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ie=0;ie<J.locationSize;ie++)g(J.location+ie);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ie=0;ie<J.locationSize;ie++)A(J.location+ie,Pe/J.locationSize,mt,he,Pe*lt,Pe/J.locationSize*ie*lt,ee)}}else if(Q!==void 0){const he=Q[se];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(J.location,he);break;case 3:i.vertexAttrib3fv(J.location,he);break;case 4:i.vertexAttrib4fv(J.location,he);break;default:i.vertexAttrib1fv(J.location,he)}}}}M()}function L(){z();for(const E in n){const U=n[E];for(const B in U){const X=U[B];for(const K in X)h(X[K].object),delete X[K];delete U[B]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;const U=n[E.id];for(const B in U){const X=U[B];for(const K in X)h(X[K].object),delete X[K];delete U[B]}delete n[E.id]}function N(E){for(const U in n){const B=n[U];if(B[E.id]===void 0)continue;const X=B[E.id];for(const K in X)h(X[K].object),delete X[K];delete B[E.id]}}function z(){w(),s=!0,a!==r&&(a=r,c(a.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Y2(i,e,t){let n;function r(c){n=c}function a(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function s(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];t.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],h[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let _=0;_<u;_++)v+=h[_]*f[_];t.update(v,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $2(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(N){return!(N!==On&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const z=N===kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==xi&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==li&&!z)}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:R,vertexTextures:L,maxSamples:C}}function K2(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Ri,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const v=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!r||v===null||v.length===0||a&&!g)a?h(null):c();else{const M=a?0:n,A=M*4;let R=p.clippingState||null;l.value=R,R=h(v,f,A,m);for(let L=0;L!==A;++L)R[L]=t[L];p.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,v){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const p=m+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,R=m;A!==_;++A,R+=4)s.copy(u[A]).applyMatrix4(M,o),s.normal.toArray(g,R),g[R+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Z2(i){let e=new WeakMap;function t(s,o){return o===r0?s.mapping=Pr:o===a0&&(s.mapping=Lr),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===r0||o===a0)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new $m(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Li=4,eu=[.125,.215,.35,.446,.526,.582],ji=20,j2=256,Yr=new s1,tu=new xt;let Ro=null,Do=0,Po=0,Lo=!1;const J2=new G;class nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=J2}=a;Ro=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro,Do,Po),this._renderer.xr.enabled=Lo,e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:kr,format:On,colorSpace:Ir,depthBuffer:!1},r=iu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Q2(a)),this._blurMaterial=tx(a,e,t)}return r}_compileMaterial(e){const t=new zn(new Ln,e);this._renderer.compile(t,Yr)}_sceneToCubeUV(e,t,n,r,a){const l=new En(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(tu),u.toneMapping=Ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zn(new fa,new Is({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(tu),p=!0);for(let A=0;A<6;A++){const R=A%3;R===0?(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[A],a.y,a.z)):R===1?(l.up.set(0,0,c[A]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[A],a.z)):(l.up.set(0,c[A],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[A]));const L=this._cubeSize;_r(r,R*L,A>2?L:0,L,L),u.setRenderTarget(r),p&&u.render(_,l),u.render(e,l)}u.toneMapping=m,u.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pr||e.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;_r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget;if(this._ggxMaterial===null){const M=3*Math.max(this._cubeSize,16),A=4*this._cubeSize;this._ggxMaterial=ex(this._lodMax,M,A)}const s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const l=s.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=.05+c*.95,m=u*f,{_lodMax:v}=this,_=this._sizeLods[n],g=3*_*(n>v-Li?n-v+Li:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,_r(a,g,p,3*_,2*_),r.setRenderTarget(a),r.render(o,Yr),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-n,_r(e,g,p,3*_,2*_),r.setRenderTarget(e),r.render(o,Yr)}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[r];u.material=c;const f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*ji-1),_=a/v,g=isFinite(a)?1+Math.floor(h*_):ji;g>ji&&Ke(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ji}`);const p=[];let M=0;for(let N=0;N<ji;++N){const z=N/_,w=Math.exp(-z*z/2);p.push(w),N===0?M+=w:N<g&&(M+=2*w)}for(let N=0;N<p.length;N++)p[N]=p[N]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=v,f.mipInt.value=A-n;const R=this._sizeLods[r],L=3*R*(r>A-Li?r-A+Li:0),C=4*(this._cubeSize-R);_r(t,L,C,3*R,2*R),l.setRenderTarget(t),l.render(u,Yr)}}function Q2(i){const e=[],t=[],n=[];let r=i;const a=i-Li+1+eu.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>i-Li?l=eu[s-i+Li-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,_=3,g=2,p=1,M=new Float32Array(_*v*m),A=new Float32Array(g*v*m),R=new Float32Array(p*v*m);for(let C=0;C<m;C++){const N=C%3*2/3-1,z=C>2?0:-1,w=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];M.set(w,_*v*C),A.set(f,g*v*C);const E=[C,C,C,C,C,C];R.set(E,p*v*C)}const L=new Ln;L.setAttribute("position",new Xn(M,_)),L.setAttribute("uv",new Xn(A,g)),L.setAttribute("faceIndex",new Xn(R,p)),n.push(new zn(L,null)),r>Li&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function iu(i,e,t){const n=new tr(i,e,t);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ex(i,e,t){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fs(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function tx(i,e,t){const n=new Float32Array(ji),r=new G(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fs(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ru(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fs(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function au(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Fs(){return`

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
	`}function nx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===r0||l===a0,h=l===Pr||l===Lr;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new nu(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new nu(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function ix(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&sa("WebGLRenderer: "+n+" extension not supported."),r}}}function rx(i,e,t,n){const r={},a=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(u){const f=[],m=u.index,v=u.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let A=0,R=M.length;A<R;A+=3){const L=M[A+0],C=M[A+1],N=M[A+2];f.push(L,C,C,N,N,L)}}else if(v!==void 0){const M=v.array;_=v.version;for(let A=0,R=M.length/3-1;A<R;A+=3){const L=A+0,C=A+1,N=A+2;f.push(L,C,C,N,N,L)}}else return;const g=new(Kh(f)?ed:Qh)(f,1);g.version=_;const p=a.get(u);p&&e.remove(p),a.set(u,g)}function h(u){const f=a.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ax(i,e,t){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(n,m,a,f*s),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,a,f*s,v),t.update(m,n,v))}function h(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,f,0,v);let g=0;for(let p=0;p<v;p++)g+=m[p];t.update(g,n,1)}function u(f,m,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,_,0,v);let p=0;for(let M=0;M<v;M++)p+=m[M]*_[M];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:Ot("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ox(i,e,t){const n=new WeakMap,r=new zt;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let E=function(){z.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var m=E;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let R=0;v===!0&&(R=1),_===!0&&(R=2),g===!0&&(R=3);let L=o.attributes.position.count*R,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const N=new Float32Array(L*C*4*u),z=new Zh(N,L,C,u);z.type=li,z.needsUpdate=!0;const w=R*4;for(let U=0;U<u;U++){const B=p[U],X=M[U],K=A[U],Z=L*C*4*U;for(let Q=0;Q<B.count;Q++){const se=Q*w;v===!0&&(r.fromBufferAttribute(B,Q),N[Z+se+0]=r.x,N[Z+se+1]=r.y,N[Z+se+2]=r.z,N[Z+se+3]=0),_===!0&&(r.fromBufferAttribute(X,Q),N[Z+se+4]=r.x,N[Z+se+5]=r.y,N[Z+se+6]=r.z,N[Z+se+7]=0),g===!0&&(r.fromBufferAttribute(K,Q),N[Z+se+8]=r.x,N[Z+se+9]=r.y,N[Z+se+10]=r.z,N[Z+se+11]=K.itemSize===4?r.w:1)}}f={count:u,texture:z,size:new Ee(L,C)},n.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function lx(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const cd=new rn,su=new sd(1,1),ud=new Zh,hd=new Pm,dd=new id,ou=[],lu=[],cu=new Float32Array(16),uu=new Float32Array(9),hu=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=ou[r];if(a===void 0&&(a=new Float32Array(r),ou[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ks(i,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function fx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;hu.set(n),i.uniformMatrix2fv(this.addr,!1,hu),$t(t,n)}}function px(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;uu.set(n),i.uniformMatrix3fv(this.addr,!1,uu),$t(t,n)}}function mx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;cu.set(n),i.uniformMatrix4fv(this.addr,!1,cu),$t(t,n)}}function xx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function _x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function bx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Mx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function wx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(su.compareFunction=$h,a=su):a=cd,t.setTexture2D(e||a,r)}function Tx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hd,r)}function Ex(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||dd,r)}function Ax(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ud,r)}function Cx(i){switch(i){case 5126:return cx;case 35664:return ux;case 35665:return hx;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return xx;case 35667:case 35671:return gx;case 35668:case 35672:return vx;case 35669:case 35673:return _x;case 5125:return bx;case 36294:return yx;case 36295:return Sx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Ax}}function Rx(i,e){i.uniform1fv(this.addr,e)}function Dx(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function Px(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function Lx(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function Ix(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nx(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ux(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fx(i,e){i.uniform1iv(this.addr,e)}function kx(i,e){i.uniform2iv(this.addr,e)}function Ox(i,e){i.uniform3iv(this.addr,e)}function zx(i,e){i.uniform4iv(this.addr,e)}function Bx(i,e){i.uniform1uiv(this.addr,e)}function Hx(i,e){i.uniform2uiv(this.addr,e)}function Vx(i,e){i.uniform3uiv(this.addr,e)}function Gx(i,e){i.uniform4uiv(this.addr,e)}function Wx(i,e,t){const n=this.cache,r=e.length,a=ks(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||cd,a[s])}function qx(i,e,t){const n=this.cache,r=e.length,a=ks(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||hd,a[s])}function Xx(i,e,t){const n=this.cache,r=e.length,a=ks(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||dd,a[s])}function Yx(i,e,t){const n=this.cache,r=e.length,a=ks(t,r);Yt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||ud,a[s])}function $x(i){switch(i){case 5126:return Rx;case 35664:return Dx;case 35665:return Px;case 35666:return Lx;case 35674:return Ix;case 35675:return Nx;case 35676:return Ux;case 5124:case 35670:return Fx;case 35667:case 35671:return kx;case 35668:case 35672:return Ox;case 35669:case 35673:return zx;case 5125:return Bx;case 36294:return Hx;case 36295:return Vx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return Yx}}class Kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cx(t.type)}}class Zx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$x(t.type)}}class jx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function du(i,e){i.seq.push(e),i.map[e.id]=e}function Jx(i,e,t){const n=i.name,r=n.length;for(Io.lastIndex=0;;){const a=Io.exec(n),s=Io.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){du(t,c===void 0?new Kx(o,i,e):new Zx(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new jx(o),du(t,u)),t=u}}}class ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Jx(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function fu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Qx=37297;let e4=0;function t4(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const pu=new Je;function n4(i){dt._getMatrix(pu,dt.workingColorSpace,i);const e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+t4(i.getShaderSource(e),o)}else return a}function i4(i,e){const t=n4(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r4(i,e){let t;switch(e){case im:t="Linear";break;case rm:t="Reinhard";break;case am:t="Cineon";break;case sm:t="ACESFilmic";break;case lm:t="AgX";break;case cm:t="Neutral";break;case om:t="Custom";break;default:Ke("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new G;function a4(){dt.getLuminanceCoefficients(Za);const i=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s4(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function o4(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l4(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Kr(i){return i!==""}function xu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c4=/^[ \t]*#include +<([\w\d./]+)>/gm;function k0(i){return i.replace(c4,h4)}const u4=new Map;function h4(i,e){let t=tt[e];if(t===void 0){const n=u4.get(e);if(n!==void 0)t=tt[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return k0(t)}const d4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(i){return i.replace(d4,f4)}function f4(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function _u(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p4(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function m4(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pr:case Lr:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function x4(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function g4(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case tm:e="ENVMAP_BLENDING_MIX";break;case nm:e="ENVMAP_BLENDING_ADD";break}return e}function v4(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _4(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=p4(t),c=m4(t),h=x4(t),u=g4(t),f=v4(t),m=s4(t),v=o4(a),_=r.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Kr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(g=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?r4("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,i4("linearToOutputTexel",t.outputColorSpace),a4(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),s=k0(s),s=xu(s,t),s=gu(s,t),o=k0(o),o=xu(o,t),o=gu(o,t),s=vu(s),o=vu(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=M+g+s,R=M+p+o,L=fu(r,r.VERTEX_SHADER,A),C=fu(r,r.FRAGMENT_SHADER,R);r.attachShader(_,L),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function N(U){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",X=r.getShaderInfoLog(L)||"",K=r.getShaderInfoLog(C)||"",Z=B.trim(),Q=X.trim(),se=K.trim();let J=!0,de=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,C);else{const he=mu(r,L,"vertex"),Pe=mu(r,C,"fragment");Ot("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Z+`
`+he+`
`+Pe)}else Z!==""?Ke("WebGLProgram: Program Info Log:",Z):(Q===""||se==="")&&(de=!1);de&&(U.diagnostics={runnable:J,programLog:Z,vertexShader:{log:Q,prefix:g},fragmentShader:{log:se,prefix:p}})}r.deleteShader(L),r.deleteShader(C),z=new ls(r,_),w=l4(r,_)}let z;this.getUniforms=function(){return z===void 0&&N(this),z};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,Qx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e4++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let b4=0;class y4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new S4(e),t.set(e,n)),n}}class S4{constructor(e){this.id=b4++,this.code=e,this.usedTimes=0}}function M4(i,e,t,n,r,a,s){const o=new jh,l=new y4,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,E,U,B,X){const K=B.fog,Z=X.geometry,Q=w.isMeshStandardMaterial?B.environment:null,se=(w.isMeshStandardMaterial?t:e).get(w.envMap||Q),J=se&&se.mapping===Ps?se.image.height:null,de=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&Ke("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pe=he!==void 0?he.length:0;let qe=0;Z.morphAttributes.position!==void 0&&(qe=1),Z.morphAttributes.normal!==void 0&&(qe=2),Z.morphAttributes.color!==void 0&&(qe=3);let ot,mt,lt,ee;if(de){const vt=Vn[de];ot=vt.vertexShader,mt=vt.fragmentShader}else ot=w.vertexShader,mt=w.fragmentShader,l.update(w),lt=l.getVertexShaderID(w),ee=l.getFragmentShaderID(w);const ie=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Xe=X.isInstancedMesh===!0,Le=X.isBatchedMesh===!0,rt=!!w.map,Wt=!!w.matcap,nt=!!se,gt=!!w.aoMap,F=!!w.lightMap,it=!!w.bumpMap,et=!!w.normalMap,pt=!!w.displacementMap,Ae=!!w.emissiveMap,Ct=!!w.metalnessMap,Fe=!!w.roughnessMap,je=w.anisotropy>0,D=w.clearcoat>0,y=w.dispersion>0,q=w.iridescence>0,te=w.sheen>0,ae=w.transmission>0,j=je&&!!w.anisotropyMap,Ne=D&&!!w.clearcoatMap,_e=D&&!!w.clearcoatNormalMap,ze=D&&!!w.clearcoatRoughnessMap,Ie=q&&!!w.iridescenceMap,oe=q&&!!w.iridescenceThicknessMap,me=te&&!!w.sheenColorMap,Ge=te&&!!w.sheenRoughnessMap,He=!!w.specularMap,Te=!!w.specularColorMap,$e=!!w.specularIntensityMap,k=ae&&!!w.transmissionMap,be=ae&&!!w.thicknessMap,xe=!!w.gradientMap,ge=!!w.alphaMap,ue=w.alphaTest>0,ne=!!w.alphaHash,Re=!!w.extensions;let Ze=Ii;w.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const Et={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:ot,fragmentShader:mt,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Le,batchingColor:Le&&X._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&X.instanceColor!==null,instancingMorph:Xe&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ir,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:Wt,envMap:nt,envMapMode:nt&&se.mapping,envMapCubeUVHeight:J,aoMap:gt,lightMap:F,bumpMap:it,normalMap:et,displacementMap:f&&pt,emissiveMap:Ae,normalMapObjectSpace:et&&w.normalMapType===pm,normalMapTangentSpace:et&&w.normalMapType===fm,metalnessMap:Ct,roughnessMap:Fe,anisotropy:je,anisotropyMap:j,clearcoat:D,clearcoatMap:Ne,clearcoatNormalMap:_e,clearcoatRoughnessMap:ze,dispersion:y,iridescence:q,iridescenceMap:Ie,iridescenceThicknessMap:oe,sheen:te,sheenColorMap:me,sheenRoughnessMap:Ge,specularMap:He,specularColorMap:Te,specularIntensityMap:$e,transmission:ae,transmissionMap:k,thicknessMap:be,gradientMap:xe,opaque:w.transparent===!1&&w.blending===Er&&w.alphaToCoverage===!1,alphaMap:ge,alphaTest:ue,alphaHash:ne,combine:w.combine,mapUv:rt&&_(w.map.channel),aoMapUv:gt&&_(w.aoMap.channel),lightMapUv:F&&_(w.lightMap.channel),bumpMapUv:it&&_(w.bumpMap.channel),normalMapUv:et&&_(w.normalMap.channel),displacementMapUv:pt&&_(w.displacementMap.channel),emissiveMapUv:Ae&&_(w.emissiveMap.channel),metalnessMapUv:Ct&&_(w.metalnessMap.channel),roughnessMapUv:Fe&&_(w.roughnessMap.channel),anisotropyMapUv:j&&_(w.anisotropyMap.channel),clearcoatMapUv:Ne&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(w.sheenRoughnessMap.channel),specularMapUv:He&&_(w.specularMap.channel),specularColorMapUv:Te&&_(w.specularColorMap.channel),specularIntensityMapUv:$e&&_(w.specularIntensityMap.channel),transmissionMapUv:k&&_(w.transmissionMap.channel),thicknessMapUv:be&&_(w.thicknessMap.channel),alphaMapUv:ge&&_(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(et||je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Z.attributes.uv&&(rt||ge),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:X.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:qe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&dt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:Ae&&w.emissiveMap.isVideoTexture===!0&&dt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ai,flipSided:w.side===fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)E.push(U),E.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(M(E,w),A(E,w),E.push(i.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function M(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function A(w,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),w.push(o.mask)}function R(w){const E=v[w.type];let U;if(E){const B=Vn[E];U=Wm.clone(B.uniforms)}else U=w.uniforms;return U}function L(w,E){let U;for(let B=0,X=h.length;B<X;B++){const K=h[B];if(K.cacheKey===E){U=K,++U.usedTimes;break}}return U===void 0&&(U=new _4(i,E,w,a),h.push(U)),U}function C(w){if(--w.usedTimes===0){const E=h.indexOf(w);h[E]=h[h.length-1],h.pop(),w.destroy()}}function N(w){l.remove(w)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:R,acquireProgram:L,releaseProgram:C,releaseShaderCache:N,programs:h,dispose:z}}function w4(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function T4(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yu(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(u,f,m,v,_,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:v,renderOrder:u.renderOrder,z:_,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function o(u,f,m,v,_,g){const p=s(u,f,m,v,_,g);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(u,f,m,v,_,g){const p=s(u,f,m,v,_,g);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||T4),n.length>1&&n.sort(f||bu),r.length>1&&r.sort(f||bu)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function E4(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new yu,i.set(n,[s])):r>=a.length?(s=new yu,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function A4(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new xt};break;case"SpotLight":t={position:new G,direction:new G,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function C4(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let R4=0;function D4(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function P4(i){const e=new A4,t=C4(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,a=new Ft,s=new Ft;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,v=0,_=0,g=0,p=0,M=0,A=0,R=0,L=0,C=0,N=0;c.sort(D4);for(let w=0,E=c.length;w<E;w++){const U=c[w],B=U.color,X=U.intensity,K=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=B.r*X,u+=B.g*X,f+=B.b*X;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],X);N++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const se=U.shadow,J=t.get(U);J.shadowIntensity=se.intensity,J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=U.shadow.matrix,M++}n.directional[m]=Q,m++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(B).multiplyScalar(X),Q.distance=K,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[_]=Q;const se=U.shadow;if(U.map&&(n.spotLightMap[L]=U.map,L++,se.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[_]=se.matrix,U.castShadow){const J=t.get(U);J.shadowIntensity=se.intensity,J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=Z,R++}_++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(B).multiplyScalar(X),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=Q,g++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const se=U.shadow,J=t.get(U);J.shadowIntensity=se.intensity,J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,J.shadowCameraNear=se.camera.near,J.shadowCameraFar=se.camera.far,n.pointShadow[v]=J,n.pointShadowMap[v]=Z,n.pointShadowMatrix[v]=U.shadow.matrix,A++}n.point[v]=Q,v++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(X),Q.groundColor.copy(U.groundColor).multiplyScalar(X),n.hemi[p]=Q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const z=n.hash;(z.directionalLength!==m||z.pointLength!==v||z.spotLength!==_||z.rectAreaLength!==g||z.hemiLength!==p||z.numDirectionalShadows!==M||z.numPointShadows!==A||z.numSpotShadows!==R||z.numSpotMaps!==L||z.numLightProbes!==N)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=g,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=R+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=N,z.directionalLength=m,z.pointLength=v,z.spotLength=_,z.rectAreaLength=g,z.hemiLength=p,z.numDirectionalShadows=M,z.numPointShadows=A,z.numSpotShadows=R,z.numSpotMaps=L,z.numLightProbes=N,n.version=R4++)}function l(c,h){let u=0,f=0,m=0,v=0,_=0;const g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const A=c[p];if(A.isDirectionalLight){const R=n.directional[u];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),u++}else if(A.isSpotLight){const R=n.spot[m];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const R=n.rectArea[v];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),s.identity(),a.copy(A.matrixWorld),a.premultiply(g),s.extractRotation(a),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(s),R.halfHeight.applyMatrix4(s),v++}else if(A.isPointLight){const R=n.point[f];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),f++}else if(A.isHemisphereLight){const R=n.hemi[_];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Su(i){const e=new P4(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function s(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function L4(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Su(i),e.set(r,[o])):a>=s.length?(o=new Su(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const I4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N4=`uniform sampler2D shadow_pass;
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
}`;function U4(i,e,t){let n=new rd;const r=new Ee,a=new Ee,s=new zt,o=new r1({depthPacking:dm}),l=new a1,c={},h=t.maxTextureSize,u={[ki]:fn,[fn]:ki,[ai]:ai},f=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:I4,fragmentShader:N4}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ln;v.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh;let p=this.type;this.render=function(C,N,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),E=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(hi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=p!==ii&&this.type===ii,K=p===ii&&this.type!==ii;for(let Z=0,Q=C.length;Z<Q;Z++){const se=C[Z],J=se.shadow;if(J===void 0){Ke("WebGLShadowMap:",se,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const de=J.getFrameExtents();if(r.multiply(de),a.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/de.x),r.x=a.x*de.x,J.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/de.y),r.y=a.y*de.y,J.mapSize.y=a.y)),J.map===null||X===!0||K===!0){const Pe=this.type!==ii?{minFilter:yn,magFilter:yn}:{};J.map!==null&&J.map.dispose(),J.map=new tr(r.x,r.y,Pe),J.map.texture.name=se.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const he=J.getViewportCount();for(let Pe=0;Pe<he;Pe++){const qe=J.getViewport(Pe);s.set(a.x*qe.x,a.y*qe.y,a.x*qe.z,a.y*qe.w),B.viewport(s),J.updateMatrices(se,Pe),n=J.getFrustum(),R(N,z,J.camera,se,this.type)}J.isPointLightShadow!==!0&&this.type===ii&&M(J,z),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,E,U)};function M(C,N){const z=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new tr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(N,null,z,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(N,null,z,m,_,null)}function A(C,N,z,w){let E=null;const U=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)E=U;else if(E=z.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const B=E.uuid,X=N.uuid;let K=c[B];K===void 0&&(K={},c[B]=K);let Z=K[X];Z===void 0&&(Z=E.clone(),K[X]=Z,N.addEventListener("dispose",L)),E=Z}if(E.visible=N.visible,E.wireframe=N.wireframe,w===ii?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:u[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=i.properties.get(E);B.light=z}return E}function R(C,N,z,w,E){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===ii)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const X=e.update(C),K=C.material;if(Array.isArray(K)){const Z=X.groups;for(let Q=0,se=Z.length;Q<se;Q++){const J=Z[Q],de=K[J.materialIndex];if(de&&de.visible){const he=A(C,de,w,E);C.onBeforeShadow(i,C,N,z,X,he,J),i.renderBufferDirect(z,null,X,he,C,J),C.onAfterShadow(i,C,N,z,X,he,J)}}}else if(K.visible){const Z=A(C,K,w,E);C.onBeforeShadow(i,C,N,z,X,Z,null),i.renderBufferDirect(z,null,X,Z,C,null),C.onAfterShadow(i,C,N,z,X,Z,null)}}const B=C.children;for(let X=0,K=B.length;X<K;X++)R(B[X],N,z,w,E)}function L(C){C.target.removeEventListener("dispose",L);for(const z in c){const w=c[z],E=C.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const F4={[jo]:Jo,[Qo]:n0,[e0]:i0,[Dr]:t0,[Jo]:jo,[n0]:Qo,[i0]:e0,[t0]:Dr};function k4(i,e){function t(){let k=!1;const be=new zt;let xe=null;const ge=new zt(0,0,0,0);return{setMask:function(ue){xe!==ue&&!k&&(i.colorMask(ue,ue,ue,ue),xe=ue)},setLocked:function(ue){k=ue},setClear:function(ue,ne,Re,Ze,Et){Et===!0&&(ue*=Ze,ne*=Ze,Re*=Ze),be.set(ue,ne,Re,Ze),ge.equals(be)===!1&&(i.clearColor(ue,ne,Re,Ze),ge.copy(be))},reset:function(){k=!1,xe=null,ge.set(-1,0,0,0)}}}function n(){let k=!1,be=!1,xe=null,ge=null,ue=null;return{setReversed:function(ne){if(be!==ne){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),be=ne;const Ze=ue;ue=null,this.setClear(Ze)}},getReversed:function(){return be},setTest:function(ne){ne?ie(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(ne){xe!==ne&&!k&&(i.depthMask(ne),xe=ne)},setFunc:function(ne){if(be&&(ne=F4[ne]),ge!==ne){switch(ne){case jo:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case e0:i.depthFunc(i.EQUAL);break;case t0:i.depthFunc(i.GEQUAL);break;case n0:i.depthFunc(i.GREATER);break;case i0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=ne}},setLocked:function(ne){k=ne},setClear:function(ne){ue!==ne&&(be&&(ne=1-ne),i.clearDepth(ne),ue=ne)},reset:function(){k=!1,xe=null,ge=null,ue=null,be=!1}}}function r(){let k=!1,be=null,xe=null,ge=null,ue=null,ne=null,Re=null,Ze=null,Et=null;return{setTest:function(vt){k||(vt?ie(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(vt){be!==vt&&!k&&(i.stencilMask(vt),be=vt)},setFunc:function(vt,Bn,In){(xe!==vt||ge!==Bn||ue!==In)&&(i.stencilFunc(vt,Bn,In),xe=vt,ge=Bn,ue=In)},setOp:function(vt,Bn,In){(ne!==vt||Re!==Bn||Ze!==In)&&(i.stencilOp(vt,Bn,In),ne=vt,Re=Bn,Ze=In)},setLocked:function(vt){k=vt},setClear:function(vt){Et!==vt&&(i.clearStencil(vt),Et=vt)},reset:function(){k=!1,be=null,xe=null,ge=null,ue=null,ne=null,Re=null,Ze=null,Et=null}}}const a=new t,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],v=null,_=!1,g=null,p=null,M=null,A=null,R=null,L=null,C=null,N=new xt(0,0,0),z=0,w=!1,E=null,U=null,B=null,X=null,K=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,se=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(J)[1]),Q=se>=1):J.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Q=se>=2);let de=null,he={};const Pe=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),ot=new zt().fromArray(Pe),mt=new zt().fromArray(qe);function lt(k,be,xe,ge){const ue=new Uint8Array(4),ne=i.createTexture();i.bindTexture(k,ne),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<xe;Re++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(be+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ne}const ee={};ee[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),s.setFunc(Dr),it(!1),et(Mc),ie(i.CULL_FACE),gt(hi);function ie(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Se(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Xe(k,be){return u[k]!==be?(i.bindFramebuffer(k,be),u[k]=be,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=be),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=be),!0):!1}function Le(k,be){let xe=m,ge=!1;if(k){xe=f.get(be),xe===void 0&&(xe=[],f.set(be,xe));const ue=k.textures;if(xe.length!==ue.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Re=ue.length;ne<Re;ne++)xe[ne]=i.COLOR_ATTACHMENT0+ne;xe.length=ue.length,ge=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,ge=!0);ge&&i.drawBuffers(xe)}function rt(k){return v!==k?(i.useProgram(k),v=k,!0):!1}const Wt={[Zi]:i.FUNC_ADD,[Op]:i.FUNC_SUBTRACT,[zp]:i.FUNC_REVERSE_SUBTRACT};Wt[Bp]=i.MIN,Wt[Hp]=i.MAX;const nt={[Vp]:i.ZERO,[Gp]:i.ONE,[Wp]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[Zp]:i.SRC_ALPHA_SATURATE,[$p]:i.DST_COLOR,[Xp]:i.DST_ALPHA,[qp]:i.ONE_MINUS_SRC_COLOR,[Zo]:i.ONE_MINUS_SRC_ALPHA,[Kp]:i.ONE_MINUS_DST_COLOR,[Yp]:i.ONE_MINUS_DST_ALPHA,[jp]:i.CONSTANT_COLOR,[Jp]:i.ONE_MINUS_CONSTANT_COLOR,[Qp]:i.CONSTANT_ALPHA,[em]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(k,be,xe,ge,ue,ne,Re,Ze,Et,vt){if(k===hi){_===!0&&(Se(i.BLEND),_=!1);return}if(_===!1&&(ie(i.BLEND),_=!0),k!==kp){if(k!==g||vt!==w){if((p!==Zi||R!==Zi)&&(i.blendEquation(i.FUNC_ADD),p=Zi,R=Zi),vt)switch(k){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",k);break}else switch(k){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tc:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",k);break}M=null,A=null,L=null,C=null,N.set(0,0,0),z=0,g=k,w=vt}return}ue=ue||be,ne=ne||xe,Re=Re||ge,(be!==p||ue!==R)&&(i.blendEquationSeparate(Wt[be],Wt[ue]),p=be,R=ue),(xe!==M||ge!==A||ne!==L||Re!==C)&&(i.blendFuncSeparate(nt[xe],nt[ge],nt[ne],nt[Re]),M=xe,A=ge,L=ne,C=Re),(Ze.equals(N)===!1||Et!==z)&&(i.blendColor(Ze.r,Ze.g,Ze.b,Et),N.copy(Ze),z=Et),g=k,w=!1}function F(k,be){k.side===ai?Se(i.CULL_FACE):ie(i.CULL_FACE);let xe=k.side===fn;be&&(xe=!xe),it(xe),k.blending===Er&&k.transparent===!1?gt(hi):gt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),a.setMask(k.colorWrite);const ge=k.stencilWrite;o.setTest(ge),ge&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ae(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(k){E!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),E=k)}function et(k){k!==Np?(ie(i.CULL_FACE),k!==U&&(k===Mc?i.cullFace(i.BACK):k===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),U=k}function pt(k){k!==B&&(Q&&i.lineWidth(k),B=k)}function Ae(k,be,xe){k?(ie(i.POLYGON_OFFSET_FILL),(X!==be||K!==xe)&&(i.polygonOffset(be,xe),X=be,K=xe)):Se(i.POLYGON_OFFSET_FILL)}function Ct(k){k?ie(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Fe(k){k===void 0&&(k=i.TEXTURE0+Z-1),de!==k&&(i.activeTexture(k),de=k)}function je(k,be,xe){xe===void 0&&(de===null?xe=i.TEXTURE0+Z-1:xe=de);let ge=he[xe];ge===void 0&&(ge={type:void 0,texture:void 0},he[xe]=ge),(ge.type!==k||ge.texture!==be)&&(de!==xe&&(i.activeTexture(xe),de=xe),i.bindTexture(k,be||ee[k]),ge.type=k,ge.texture=be)}function D(){const k=he[de];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function te(){try{i.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ae(){try{i.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function _e(){try{i.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ze(){try{i.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ie(){try{i.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function oe(){try{i.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function me(k){ot.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ot.copy(k))}function Ge(k){mt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),mt.copy(k))}function He(k,be){let xe=c.get(be);xe===void 0&&(xe=new WeakMap,c.set(be,xe));let ge=xe.get(k);ge===void 0&&(ge=i.getUniformBlockIndex(be,k.name),xe.set(k,ge))}function Te(k,be){const ge=c.get(be).get(k);l.get(be)!==ge&&(i.uniformBlockBinding(be,ge,k.__bindingPointIndex),l.set(be,ge))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},de=null,he={},u={},f=new WeakMap,m=[],v=null,_=!1,g=null,p=null,M=null,A=null,R=null,L=null,C=null,N=new xt(0,0,0),z=0,w=!1,E=null,U=null,B=null,X=null,K=null,ot.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ie,disable:Se,bindFramebuffer:Xe,drawBuffers:Le,useProgram:rt,setBlending:gt,setMaterial:F,setFlipSided:it,setCullFace:et,setLineWidth:pt,setPolygonOffset:Ae,setScissorTest:Ct,activeTexture:Fe,bindTexture:je,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:Ie,texImage3D:oe,updateUBOMapping:He,uniformBlockBinding:Te,texStorage2D:_e,texStorage3D:ze,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:j,compressedTexSubImage3D:Ne,scissor:me,viewport:Ge,reset:$e}}function O4(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,y){return m?new OffscreenCanvas(D,y):vs("canvas")}function _(D,y,q){let te=1;const ae=je(D);if((ae.width>q||ae.height>q)&&(te=q/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const j=Math.floor(te*ae.width),Ne=Math.floor(te*ae.height);u===void 0&&(u=v(j,Ne));const _e=y?v(j,Ne):u;return _e.width=j,_e.height=Ne,_e.getContext("2d").drawImage(D,0,0,j,Ne),Ke("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+j+"x"+Ne+")."),_e}else return"data"in D&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(D,y,q,te,ae=!1){if(D!==null){if(i[D]!==void 0)return i[D];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=y;if(y===i.RED&&(q===i.FLOAT&&(j=i.R32F),q===i.HALF_FLOAT&&(j=i.R16F),q===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.R8UI),q===i.UNSIGNED_SHORT&&(j=i.R16UI),q===i.UNSIGNED_INT&&(j=i.R32UI),q===i.BYTE&&(j=i.R8I),q===i.SHORT&&(j=i.R16I),q===i.INT&&(j=i.R32I)),y===i.RG&&(q===i.FLOAT&&(j=i.RG32F),q===i.HALF_FLOAT&&(j=i.RG16F),q===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RG8UI),q===i.UNSIGNED_SHORT&&(j=i.RG16UI),q===i.UNSIGNED_INT&&(j=i.RG32UI),q===i.BYTE&&(j=i.RG8I),q===i.SHORT&&(j=i.RG16I),q===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RGB8UI),q===i.UNSIGNED_SHORT&&(j=i.RGB16UI),q===i.UNSIGNED_INT&&(j=i.RGB32UI),q===i.BYTE&&(j=i.RGB8I),q===i.SHORT&&(j=i.RGB16I),q===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),q===i.UNSIGNED_INT&&(j=i.RGBA32UI),q===i.BYTE&&(j=i.RGBA8I),q===i.SHORT&&(j=i.RGBA16I),q===i.INT&&(j=i.RGBA32I)),y===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),y===i.RGBA){const Ne=ae?xs:dt.getTransfer(te);q===i.FLOAT&&(j=i.RGBA32F),q===i.HALF_FLOAT&&(j=i.RGBA16F),q===i.UNSIGNED_BYTE&&(j=Ne===bt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function R(D,y){let q;return D?y===null||y===er||y===ia?q=i.DEPTH24_STENCIL8:y===li?q=i.DEPTH32F_STENCIL8:y===na&&(q=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===er||y===ia?q=i.DEPTH_COMPONENT24:y===li?q=i.DEPTH_COMPONENT32F:y===na&&(q=i.DEPTH_COMPONENT16),q}function L(D,y){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function C(D){const y=D.target;y.removeEventListener("dispose",C),z(y),y.isVideoTexture&&h.delete(y)}function N(D){const y=D.target;y.removeEventListener("dispose",N),E(y)}function z(D){const y=n.get(D);if(y.__webglInit===void 0)return;const q=D.source,te=f.get(q);if(te){const ae=te[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(D),Object.keys(te).length===0&&f.delete(q)}n.remove(D)}function w(D){const y=n.get(D);i.deleteTexture(y.__webglTexture);const q=D.source,te=f.get(q);delete te[y.__cacheKey],s.memory.textures--}function E(D){const y=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let ae=0;ae<y.__webglFramebuffer[te].length;ae++)i.deleteFramebuffer(y.__webglFramebuffer[te][ae]);else i.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)i.deleteFramebuffer(y.__webglFramebuffer[te]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=D.textures;for(let te=0,ae=q.length;te<ae;te++){const j=n.get(q[te]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),s.memory.textures--),n.remove(q[te])}n.remove(D)}let U=0;function B(){U=0}function X(){const D=U;return D>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),U+=1,D}function K(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function Z(D,y){const q=n.get(D);if(D.isVideoTexture&&Ct(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const te=D.image;if(te===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(q,D,y);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function Q(D,y){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){ee(q,D,y);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function se(D,y){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){ee(q,D,y);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function J(D,y){const q=n.get(D);if(D.version>0&&q.__version!==D.version){ie(q,D,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}const de={[s0]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[o0]:i.MIRRORED_REPEAT},he={[yn]:i.NEAREST,[um]:i.NEAREST_MIPMAP_NEAREST,[Ea]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},Pe={[mm]:i.NEVER,[ym]:i.ALWAYS,[xm]:i.LESS,[$h]:i.LEQUAL,[gm]:i.EQUAL,[bm]:i.GEQUAL,[vm]:i.GREATER,[_m]:i.NOTEQUAL};function qe(D,y){if(y.type===li&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===no||y.magFilter===Ea||y.magFilter===Ji||y.minFilter===Rn||y.minFilter===no||y.minFilter===Ea||y.minFilter===Ji)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,de[y.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,de[y.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,de[y.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,he[y.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===yn||y.minFilter!==Ea&&y.minFilter!==Ji||y.type===li&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ot(D,y){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",C));const te=y.source;let ae=f.get(te);ae===void 0&&(ae={},f.set(te,ae));const j=K(y);if(j!==D.__cacheKey){ae[j]===void 0&&(ae[j]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,q=!0),ae[j].usedTimes++;const Ne=ae[D.__cacheKey];Ne!==void 0&&(ae[D.__cacheKey].usedTimes--,Ne.usedTimes===0&&w(y)),D.__cacheKey=j,D.__webglTexture=ae[j].texture}return q}function mt(D,y,q){return Math.floor(Math.floor(D/q)/y)}function lt(D,y,q,te){const j=D.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,q,te,y.data);else{j.sort((oe,me)=>oe.start-me.start);let Ne=0;for(let oe=1;oe<j.length;oe++){const me=j[Ne],Ge=j[oe],He=me.start+me.count,Te=mt(Ge.start,y.width,4),$e=mt(me.start,y.width,4);Ge.start<=He+1&&Te===$e&&mt(Ge.start+Ge.count-1,y.width,4)===Te?me.count=Math.max(me.count,Ge.start+Ge.count-me.start):(++Ne,j[Ne]=Ge)}j.length=Ne+1;const _e=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let oe=0,me=j.length;oe<me;oe++){const Ge=j[oe],He=Math.floor(Ge.start/4),Te=Math.ceil(Ge.count/4),$e=He%y.width,k=Math.floor(He/y.width),be=Te,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,$e,k,be,xe,q,te,y.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function ee(D,y,q){let te=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=i.TEXTURE_3D);const ae=ot(D,y),j=y.source;t.bindTexture(te,D.__webglTexture,i.TEXTURE0+q);const Ne=n.get(j);if(j.version!==Ne.__version||ae===!0){t.activeTexture(i.TEXTURE0+q);const _e=dt.getPrimaries(dt.workingColorSpace),ze=y.colorSpace===Di?null:dt.getPrimaries(y.colorSpace),Ie=y.colorSpace===Di||_e===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let oe=_(y.image,!1,r.maxTextureSize);oe=Fe(y,oe);const me=a.convert(y.format,y.colorSpace),Ge=a.convert(y.type);let He=A(y.internalFormat,me,Ge,y.colorSpace,y.isVideoTexture);qe(te,y);let Te;const $e=y.mipmaps,k=y.isVideoTexture!==!0,be=Ne.__version===void 0||ae===!0,xe=j.dataReady,ge=L(y,oe);if(y.isDepthTexture)He=R(y.format===aa,y.type),be&&(k?t.texStorage2D(i.TEXTURE_2D,1,He,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,He,oe.width,oe.height,0,me,Ge,null));else if(y.isDataTexture)if($e.length>0){k&&be&&t.texStorage2D(i.TEXTURE_2D,ge,He,$e[0].width,$e[0].height);for(let ue=0,ne=$e.length;ue<ne;ue++)Te=$e[ue],k?xe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Te.width,Te.height,me,Ge,Te.data):t.texImage2D(i.TEXTURE_2D,ue,He,Te.width,Te.height,0,me,Ge,Te.data);y.generateMipmaps=!1}else k?(be&&t.texStorage2D(i.TEXTURE_2D,ge,He,oe.width,oe.height),xe&&lt(y,oe,me,Ge)):t.texImage2D(i.TEXTURE_2D,0,He,oe.width,oe.height,0,me,Ge,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,He,$e[0].width,$e[0].height,oe.depth);for(let ue=0,ne=$e.length;ue<ne;ue++)if(Te=$e[ue],y.format!==On)if(me!==null)if(k){if(xe)if(y.layerUpdates.size>0){const Re=Qc(Te.width,Te.height,y.format,y.type);for(const Ze of y.layerUpdates){const Et=Te.data.subarray(Ze*Re/Te.data.BYTES_PER_ELEMENT,(Ze+1)*Re/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Ze,Te.width,Te.height,1,me,Et)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,oe.depth,me,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,He,Te.width,Te.height,oe.depth,0,Te.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,oe.depth,me,Ge,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,He,Te.width,Te.height,oe.depth,0,me,Ge,Te.data)}else{k&&be&&t.texStorage2D(i.TEXTURE_2D,ge,He,$e[0].width,$e[0].height);for(let ue=0,ne=$e.length;ue<ne;ue++)Te=$e[ue],y.format!==On?me!==null?k?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Te.width,Te.height,me,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,He,Te.width,Te.height,0,Te.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?xe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Te.width,Te.height,me,Ge,Te.data):t.texImage2D(i.TEXTURE_2D,ue,He,Te.width,Te.height,0,me,Ge,Te.data)}else if(y.isDataArrayTexture)if(k){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,He,oe.width,oe.height,oe.depth),xe)if(y.layerUpdates.size>0){const ue=Qc(oe.width,oe.height,y.format,y.type);for(const ne of y.layerUpdates){const Re=oe.data.subarray(ne*ue/oe.data.BYTES_PER_ELEMENT,(ne+1)*ue/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,me,Ge,Re)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Ge,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,oe.width,oe.height,oe.depth,0,me,Ge,oe.data);else if(y.isData3DTexture)k?(be&&t.texStorage3D(i.TEXTURE_3D,ge,He,oe.width,oe.height,oe.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Ge,oe.data)):t.texImage3D(i.TEXTURE_3D,0,He,oe.width,oe.height,oe.depth,0,me,Ge,oe.data);else if(y.isFramebufferTexture){if(be)if(k)t.texStorage2D(i.TEXTURE_2D,ge,He,oe.width,oe.height);else{let ue=oe.width,ne=oe.height;for(let Re=0;Re<ge;Re++)t.texImage2D(i.TEXTURE_2D,Re,He,ue,ne,0,me,Ge,null),ue>>=1,ne>>=1}}else if($e.length>0){if(k&&be){const ue=je($e[0]);t.texStorage2D(i.TEXTURE_2D,ge,He,ue.width,ue.height)}for(let ue=0,ne=$e.length;ue<ne;ue++)Te=$e[ue],k?xe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,me,Ge,Te):t.texImage2D(i.TEXTURE_2D,ue,He,me,Ge,Te);y.generateMipmaps=!1}else if(k){if(be){const ue=je(oe);t.texStorage2D(i.TEXTURE_2D,ge,He,ue.width,ue.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ge,oe)}else t.texImage2D(i.TEXTURE_2D,0,He,me,Ge,oe);g(y)&&p(te),Ne.__version=j.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ie(D,y,q){if(y.image.length!==6)return;const te=ot(D,y),ae=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const j=n.get(ae);if(ae.version!==j.__version||te===!0){t.activeTexture(i.TEXTURE0+q);const Ne=dt.getPrimaries(dt.workingColorSpace),_e=y.colorSpace===Di?null:dt.getPrimaries(y.colorSpace),ze=y.colorSpace===Di||Ne===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!Ie&&!oe?me[ne]=_(y.image[ne],!0,r.maxCubemapSize):me[ne]=oe?y.image[ne].image:y.image[ne],me[ne]=Fe(y,me[ne]);const Ge=me[0],He=a.convert(y.format,y.colorSpace),Te=a.convert(y.type),$e=A(y.internalFormat,He,Te,y.colorSpace),k=y.isVideoTexture!==!0,be=j.__version===void 0||te===!0,xe=ae.dataReady;let ge=L(y,Ge);qe(i.TEXTURE_CUBE_MAP,y);let ue;if(Ie){k&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,$e,Ge.width,Ge.height);for(let ne=0;ne<6;ne++){ue=me[ne].mipmaps;for(let Re=0;Re<ue.length;Re++){const Ze=ue[Re];y.format!==On?He!==null?k?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Ze.width,Ze.height,He,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,$e,Ze.width,Ze.height,0,Ze.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Ze.width,Ze.height,He,Te,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,$e,Ze.width,Ze.height,0,He,Te,Ze.data)}}}else{if(ue=y.mipmaps,k&&be){ue.length>0&&ge++;const ne=je(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,$e,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,He,Te,me[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,me[ne].width,me[ne].height,0,He,Te,me[ne].data);for(let Re=0;Re<ue.length;Re++){const Et=ue[Re].image[ne].image;k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Et.width,Et.height,He,Te,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,$e,Et.width,Et.height,0,He,Te,Et.data)}}else{k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,He,Te,me[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,He,Te,me[ne]);for(let Re=0;Re<ue.length;Re++){const Ze=ue[Re];k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,He,Te,Ze.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,$e,He,Te,Ze.image[ne])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),j.__version=ae.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function Se(D,y,q,te,ae,j){const Ne=a.convert(q.format,q.colorSpace),_e=a.convert(q.type),ze=A(q.internalFormat,Ne,_e,q.colorSpace),Ie=n.get(y),oe=n.get(q);if(oe.__renderTarget=y,!Ie.__hasExternalTextures){const me=Math.max(1,y.width>>j),Ge=Math.max(1,y.height>>j);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,j,ze,me,Ge,y.depth,0,Ne,_e,null):t.texImage2D(ae,j,ze,me,Ge,0,Ne,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Ae(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ae,oe.__webglTexture,0,pt(y)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ae,oe.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(D,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),y.depthBuffer){const te=y.depthTexture,ae=te&&te.isDepthTexture?te.type:null,j=R(y.stencilBuffer,ae),Ne=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=pt(y);Ae(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,j,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,D)}else{const te=y.textures;for(let ae=0;ae<te.length;ae++){const j=te[ae],Ne=a.convert(j.format,j.colorSpace),_e=a.convert(j.type),ze=A(j.internalFormat,Ne,_e,j.colorSpace),Ie=pt(y);q&&Ae(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ze,y.width,y.height):Ae(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,ze,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ze,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(D,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(y.depthTexture);te.__renderTarget=y,(!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const ae=te.__webglTexture,j=pt(y);if(y.depthTexture.format===ra)Ae(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(y.depthTexture.format===aa)Ae(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function rt(D){const y=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const te=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){const ae=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),y.__depthDisposeCallback=ae}y.__boundDepthTexture=te}if(D.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const te=D.texture.mipmaps;te&&te.length>0?Le(y.__webglFramebuffer[0],D):Le(y.__webglFramebuffer,D)}else if(q){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=i.createRenderbuffer(),Xe(y.__webglDepthbuffer[te],D,!1);else{const ae=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,j)}}else{const te=D.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Xe(y.__webglDepthbuffer,D,!1);else{const ae=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(D,y,q){const te=n.get(D);y!==void 0&&Se(te.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&rt(D)}function nt(D){const y=D.texture,q=n.get(D),te=n.get(y);D.addEventListener("dispose",N);const ae=D.textures,j=D.isWebGLCubeRenderTarget===!0,Ne=ae.length>1;if(Ne||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=y.version,s.memory.textures++),j){q.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[_e]=[];for(let ze=0;ze<y.mipmaps.length;ze++)q.__webglFramebuffer[_e][ze]=i.createFramebuffer()}else q.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let _e=0;_e<y.mipmaps.length;_e++)q.__webglFramebuffer[_e]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let _e=0,ze=ae.length;_e<ze;_e++){const Ie=n.get(ae[_e]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),s.memory.textures++)}if(D.samples>0&&Ae(D)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let _e=0;_e<ae.length;_e++){const ze=ae[_e];q.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[_e]);const Ie=a.convert(ze.format,ze.colorSpace),oe=a.convert(ze.type),me=A(ze.internalFormat,Ie,oe,ze.colorSpace,D.isXRRenderTarget===!0),Ge=pt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,me,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,q.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),qe(i.TEXTURE_CUBE_MAP,y);for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0)for(let ze=0;ze<y.mipmaps.length;ze++)Se(q.__webglFramebuffer[_e][ze],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze);else Se(q.__webglFramebuffer[_e],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let _e=0,ze=ae.length;_e<ze;_e++){const Ie=ae[_e],oe=n.get(Ie);let me=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),qe(me,Ie),Se(q.__webglFramebuffer,D,Ie,i.COLOR_ATTACHMENT0+_e,me,0),g(Ie)&&p(me)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,te.__webglTexture),qe(_e,y),y.mipmaps&&y.mipmaps.length>0)for(let ze=0;ze<y.mipmaps.length;ze++)Se(q.__webglFramebuffer[ze],D,y,i.COLOR_ATTACHMENT0,_e,ze);else Se(q.__webglFramebuffer,D,y,i.COLOR_ATTACHMENT0,_e,0);g(y)&&p(_e),t.unbindTexture()}D.depthBuffer&&rt(D)}function gt(D){const y=D.textures;for(let q=0,te=y.length;q<te;q++){const ae=y[q];if(g(ae)){const j=M(D),Ne=n.get(ae).__webglTexture;t.bindTexture(j,Ne),p(j),t.unbindTexture()}}}const F=[],it=[];function et(D){if(D.samples>0){if(Ae(D)===!1){const y=D.textures,q=D.width,te=D.height;let ae=i.COLOR_BUFFER_BIT;const j=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(D),_e=y.length>1;if(_e)for(let Ie=0;Ie<y.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const ze=D.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ie=0;Ie<y.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const oe=n.get(y[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,q,te,0,0,q,te,ae,i.NEAREST),l===!0&&(F.length=0,it.length=0,F.push(i.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(F.push(j),it.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,it)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ie=0;Ie<y.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const oe=n.get(y[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function pt(D){return Math.min(r.maxSamples,D.samples)}function Ae(D){const y=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ct(D){const y=s.render.frame;h.get(D)!==y&&(h.set(D,y),D.update())}function Fe(D,y){const q=D.colorSpace,te=D.format,ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Ir&&q!==Di&&(dt.getTransfer(q)===bt?(te!==On||ae!==xi)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",q)),y}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=se,this.setTextureCube=J,this.rebindTextures=Wt,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ae}function z4(i,e){function t(n,r=Di){let a;const s=dt.getTransfer(r);if(n===xi)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hh)return i.BYTE;if(n===Vh)return i.SHORT;if(n===na)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===er)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===kr)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Xh)return i.RGB;if(n===On)return i.RGBA;if(n===ra)return i.DEPTH_COMPONENT;if(n===aa)return i.DEPTH_STENCIL;if(n===Yh)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===pl)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===rs||n===as||n===ss||n===os)if(s===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===rs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===as)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===rs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===as)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ss)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===os)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===l0||n===c0||n===u0||n===h0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===l0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===c0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===u0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===h0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===d0||n===f0||n===p0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===d0||n===f0)return s===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===p0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===m0||n===x0||n===g0||n===v0||n===_0||n===b0||n===y0||n===S0||n===M0||n===w0||n===T0||n===E0||n===A0||n===C0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===m0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===x0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===g0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===v0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===b0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===y0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===S0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===M0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===w0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===T0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===E0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===A0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===C0)return s===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===R0||n===D0||n===P0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===R0)return s===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===D0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===P0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===L0||n===I0||n===N0||n===U0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===L0)return a.COMPRESSED_RED_RGTC1_EXT;if(n===I0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===N0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===U0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const B4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H4=`
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

}`;class V4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new od(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:B4,fragmentShader:H4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zn(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G4 extends ir{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,v=null;const _=typeof XRWebGLBinding<"u",g=new V4,p={},M=t.getContextAttributes();let A=null,R=null;const L=[],C=[],N=new Ee;let z=null;const w=new En;w.viewport=new zt;const E=new En;E.viewport=new zt;const U=[w,E],B=new o1;let X=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ie=L[ee];return ie===void 0&&(ie=new To,L[ee]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(ee){let ie=L[ee];return ie===void 0&&(ie=new To,L[ee]=ie),ie.getGripSpace()},this.getHand=function(ee){let ie=L[ee];return ie===void 0&&(ie=new To,L[ee]=ie),ie.getHandSpace()};function Z(ee){const ie=C.indexOf(ee.inputSource);if(ie===-1)return;const Se=L[ie];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,c||s),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Q(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",se);for(let ee=0;ee<L.length;ee++){const ie=C[ee];ie!==null&&(C[ee]=null,L[ee].disconnect(ie))}X=null,K=null,g.reset();for(const ee in p)delete p[ee];e.setRenderTarget(A),m=null,f=null,u=null,r=null,R=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",se),M.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(N),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Xe=null,Le=null;M.depth&&(Le=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?aa:ra,Xe=M.stencil?ia:er);const rt={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};u=this.getBinding(),f=u.createProjectionLayer(rt),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new tr(f.textureWidth,f.textureHeight,{format:On,type:xi,depthTexture:new sd(f.textureWidth,f.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new tr(m.framebufferWidth,m.framebufferHeight,{format:On,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),lt.setContext(r),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(ee){for(let ie=0;ie<ee.removed.length;ie++){const Se=ee.removed[ie],Xe=C.indexOf(Se);Xe>=0&&(C[Xe]=null,L[Xe].disconnect(Se))}for(let ie=0;ie<ee.added.length;ie++){const Se=ee.added[ie];let Xe=C.indexOf(Se);if(Xe===-1){for(let rt=0;rt<L.length;rt++)if(rt>=C.length){C.push(Se),Xe=rt;break}else if(C[rt]===null){C[rt]=Se,Xe=rt;break}if(Xe===-1)break}const Le=L[Xe];Le&&Le.connect(Se)}}const J=new G,de=new G;function he(ee,ie,Se){J.setFromMatrixPosition(ie.matrixWorld),de.setFromMatrixPosition(Se.matrixWorld);const Xe=J.distanceTo(de),Le=ie.projectionMatrix.elements,rt=Se.projectionMatrix.elements,Wt=Le[14]/(Le[10]-1),nt=Le[14]/(Le[10]+1),gt=(Le[9]+1)/Le[5],F=(Le[9]-1)/Le[5],it=(Le[8]-1)/Le[0],et=(rt[8]+1)/rt[0],pt=Wt*it,Ae=Wt*et,Ct=Xe/(-it+et),Fe=Ct*-it;if(ie.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Fe),ee.translateZ(Ct),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Le[10]===-1)ee.projectionMatrix.copy(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const je=Wt+Ct,D=nt+Ct,y=pt-Fe,q=Ae+(Xe-Fe),te=gt*nt/D*je,ae=F*nt/D*je;ee.projectionMatrix.makePerspective(y,q,te,ae,je,D),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Pe(ee,ie){ie===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ie.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ie=ee.near,Se=ee.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),B.near=E.near=w.near=ie,B.far=E.far=w.far=Se,(X!==B.near||K!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,K=B.far),B.layers.mask=ee.layers.mask|6,w.layers.mask=B.layers.mask&3,E.layers.mask=B.layers.mask&5;const Xe=ee.parent,Le=B.cameras;Pe(B,Xe);for(let rt=0;rt<Le.length;rt++)Pe(Le[rt],Xe);Le.length===2?he(B,w,E):B.projectionMatrix.copy(w.projectionMatrix),qe(ee,B,Xe)};function qe(ee,ie,Se){Se===null?ee.matrix.copy(ie.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ie.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ie.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=F0*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(ee){return p[ee]};let ot=null;function mt(ee,ie){if(h=ie.getViewerPose(c||s),v=ie,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let Xe=!1;Se.length!==B.cameras.length&&(B.cameras.length=0,Xe=!0);for(let nt=0;nt<Se.length;nt++){const gt=Se[nt];let F=null;if(m!==null)F=m.getViewport(gt);else{const et=u.getViewSubImage(f,gt);F=et.viewport,nt===0&&(e.setRenderTargetTextures(R,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(R))}let it=U[nt];it===void 0&&(it=new En,it.layers.enable(nt),it.viewport=new zt,U[nt]=it),it.matrix.fromArray(gt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(gt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(F.x,F.y,F.width,F.height),nt===0&&(B.matrix.copy(it.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Xe===!0&&B.cameras.push(it)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const nt=u.getDepthInformation(Se[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,r.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let nt=0;nt<Se.length;nt++){const gt=Se[nt].camera;if(gt){let F=p[gt];F||(F=new od,p[gt]=F);const it=u.getCameraImage(gt);F.sourceTexture=it}}}}for(let Se=0;Se<L.length;Se++){const Xe=C[Se],Le=L[Se];Xe!==null&&Le!==void 0&&Le.update(Xe,ie,c||s)}ot&&ot(ee,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),v=null}const lt=new ld;lt.setAnimationLoop(mt),this.setAnimationLoop=function(ee){ot=ee},this.dispose=function(){}}}const $i=new vi,W4=new Ft;function q4(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,td(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,M,A,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(g,p):p.isMeshToonMaterial?(a(g,p),u(g,p)):p.isMeshPhongMaterial?(a(g,p),h(g,p)):p.isMeshStandardMaterial?(a(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,R)):p.isMeshMatcapMaterial?(a(g,p),v(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),_(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),A=M.envMap,R=M.envMapRotation;A&&(g.envMap.value=A,$i.copy(R),$i.x*=-1,$i.y*=-1,$i.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),g.envMapRotation.value.setFromMatrix4(W4.makeRotationFromEuler($i)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=A*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function X4(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const R=A.program;n.uniformBlockBinding(M,R)}function c(M,A){let R=r[M.id];R===void 0&&(v(M),R=h(M),r[M.id]=R,M.addEventListener("dispose",g));const L=A.program;n.updateUBOMapping(M,L);const C=e.render.frame;a[M.id]!==C&&(f(M),a[M.id]=C)}function h(M){const A=u();M.__bindingPointIndex=A;const R=i.createBuffer(),L=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,R),R}function u(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const A=r[M.id],R=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,N=R.length;C<N;C++){const z=Array.isArray(R[C])?R[C]:[R[C]];for(let w=0,E=z.length;w<E;w++){const U=z[w];if(m(U,C,w,L)===!0){const B=U.__offset,X=Array.isArray(U.value)?U.value:[U.value];let K=0;for(let Z=0;Z<X.length;Z++){const Q=X[Z],se=_(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,B+K,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,K),K+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,A,R,L){const C=M.value,N=A+"_"+R;if(L[N]===void 0)return typeof C=="number"||typeof C=="boolean"?L[N]=C:L[N]=C.clone(),!0;{const z=L[N];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return L[N]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function v(M){const A=M.uniforms;let R=0;const L=16;for(let N=0,z=A.length;N<z;N++){const w=Array.isArray(A[N])?A[N]:[A[N]];for(let E=0,U=w.length;E<U;E++){const B=w[E],X=Array.isArray(B.value)?B.value:[B.value];for(let K=0,Z=X.length;K<Z;K++){const Q=X[K],se=_(Q),J=R%L,de=J%se.boundary,he=J+de;R+=de,he!==0&&L-he<se.storage&&(R+=L-he),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=R,R+=se.storage}}}const C=R%L;return C>0&&(R+=L-C),M.__size=R,M.__cache={},this}function _(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ke("WebGLRenderer: Unsupported uniform value type.",M),A}function g(M){const A=M.target;A.removeEventListener("dispose",g);const R=s.indexOf(A.__bindingPointIndex);s.splice(R,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);s=[],r={},a={}}return{bind:l,update:c,dispose:p}}const Y4=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ni=null;function $4(){return ni===null&&(ni=new jm(Y4,32,32,pl,kr),ni.minFilter=Rn,ni.magFilter=Rn,ni.wrapS=oi,ni.wrapT=oi,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class K4{constructor(e={}){const{canvas:t=Sm(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const v=new Set([xl,ml,fl]),_=new Set([xi,er,na,ia,hl,dl]),g=new Uint32Array(4),p=new Int32Array(4);let M=null,A=null;const R=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1;this._outputColorSpace=Tn;let z=0,w=0,E=null,U=-1,B=null;const X=new zt,K=new zt;let Z=null;const Q=new xt(0);let se=0,J=t.width,de=t.height,he=1,Pe=null,qe=null;const ot=new zt(0,0,J,de),mt=new zt(0,0,J,de);let lt=!1;const ee=new rd;let ie=!1,Se=!1;const Xe=new Ft,Le=new G,rt=new zt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function gt(){return E===null?he:1}let F=n;function it(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",Re,!1),F===null){const H="webgl2";if(F=it(H,T),F===null)throw it(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let et,pt,Ae,Ct,Fe,je,D,y,q,te,ae,j,Ne,_e,ze,Ie,oe,me,Ge,He,Te,$e,k,be;function xe(){et=new ix(F),et.init(),$e=new z4(F,et),pt=new $2(F,et,e,$e),Ae=new k4(F,et),pt.reversedDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),Ct=new sx(F),Fe=new w4,je=new O4(F,et,Ae,Fe,pt,$e,Ct),D=new Z2(C),y=new nx(C),q=new u1(F),k=new X2(F,q),te=new rx(F,q,Ct,k),ae=new lx(F,te,q,Ct),Ge=new ox(F,pt,je),Ie=new K2(Fe),j=new M4(C,D,y,et,pt,k,Ie),Ne=new q4(C,Fe),_e=new E4,ze=new L4(et),me=new q2(C,D,y,Ae,ae,m,l),oe=new U4(C,ae,pt),be=new X4(F,Ct,pt,Ae),He=new Y2(F,et,Ct),Te=new ax(F,et,Ct),Ct.programs=j.programs,C.capabilities=pt,C.extensions=et,C.properties=Fe,C.renderLists=_e,C.shadowMap=oe,C.state=Ae,C.info=Ct}xe();const ge=new G4(C,F);this.xr=ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(J,de,!1))},this.getSize=function(T){return T.set(J,de)},this.setSize=function(T,H,Y=!0){if(ge.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,de=H,t.width=Math.floor(T*he),t.height=Math.floor(H*he),Y===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(J*he,de*he).floor()},this.setDrawingBufferSize=function(T,H,Y){J=T,de=H,he=Y,t.width=Math.floor(T*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(X)},this.getViewport=function(T){return T.copy(ot)},this.setViewport=function(T,H,Y,$){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,H,Y,$),Ae.viewport(X.copy(ot).multiplyScalar(he).round())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,H,Y,$){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,H,Y,$),Ae.scissor(K.copy(mt).multiplyScalar(he).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(T){Ae.setScissorTest(lt=T)},this.setOpaqueSort=function(T){Pe=T},this.setTransparentSort=function(T){qe=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,Y=!0){let $=0;if(T){let V=!1;if(E!==null){const fe=E.texture.format;V=v.has(fe)}if(V){const fe=E.texture.type,Me=_.has(fe),De=me.getClearColor(),Ce=me.getClearAlpha(),Ve=De.r,Ye=De.g,Ue=De.b;Me?(g[0]=Ve,g[1]=Ye,g[2]=Ue,g[3]=Ce,F.clearBufferuiv(F.COLOR,0,g)):(p[0]=Ve,p[1]=Ye,p[2]=Ue,p[3]=Ce,F.clearBufferiv(F.COLOR,0,p))}else $|=F.COLOR_BUFFER_BIT}H&&($|=F.DEPTH_BUFFER_BIT),Y&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),me.dispose(),_e.dispose(),ze.dispose(),Fe.dispose(),D.dispose(),y.dispose(),ae.dispose(),k.dispose(),be.dispose(),j.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Sl),ge.removeEventListener("sessionend",Ml),zi.stop()};function ue(T){T.preventDefault(),Pc("WebGLRenderer: Context Lost."),N=!0}function ne(){Pc("WebGLRenderer: Context Restored."),N=!1;const T=Ct.autoReset,H=oe.enabled,Y=oe.autoUpdate,$=oe.needsUpdate,V=oe.type;xe(),Ct.autoReset=T,oe.enabled=H,oe.autoUpdate=Y,oe.needsUpdate=$,oe.type=V}function Re(T){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ze(T){const H=T.target;H.removeEventListener("dispose",Ze),Et(H)}function Et(T){vt(T),Fe.remove(T)}function vt(T){const H=Fe.get(T).programs;H!==void 0&&(H.forEach(function(Y){j.releaseProgram(Y)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Y,$,V,fe){H===null&&(H=Wt);const Me=V.isMesh&&V.matrixWorld.determinant()<0,De=md(T,H,Y,$,V);Ae.setMaterial($,Me);let Ce=Y.index,Ve=1;if($.wireframe===!0){if(Ce=te.getWireframeAttribute(Y),Ce===void 0)return;Ve=2}const Ye=Y.drawRange,Ue=Y.attributes.position;let st=Ye.start*Ve,_t=(Ye.start+Ye.count)*Ve;fe!==null&&(st=Math.max(st,fe.start*Ve),_t=Math.min(_t,(fe.start+fe.count)*Ve)),Ce!==null?(st=Math.max(st,0),_t=Math.min(_t,Ce.count)):Ue!=null&&(st=Math.max(st,0),_t=Math.min(_t,Ue.count));const It=_t-st;if(It<0||It===1/0)return;k.setup(V,$,De,Y,Ce);let Nt,St=He;if(Ce!==null&&(Nt=q.get(Ce),St=Te,St.setIndex(Nt)),V.isMesh)$.wireframe===!0?(Ae.setLineWidth($.wireframeLinewidth*gt()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(V.isLine){let Be=$.linewidth;Be===void 0&&(Be=1),Ae.setLineWidth(Be*gt()),V.isLineSegments?St.setMode(F.LINES):V.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else V.isPoints?St.setMode(F.POINTS):V.isSprite&&St.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)sa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))St.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Be=V._multiDrawStarts,Rt=V._multiDrawCounts,ut=V._multiDrawCount,mn=Ce?q.get(Ce).bytesPerElement:1,rr=Fe.get($).currentProgram.getUniforms();for(let xn=0;xn<ut;xn++)rr.setValue(F,"_gl_DrawID",xn),St.render(Be[xn]/mn,Rt[xn])}else if(V.isInstancedMesh)St.renderInstances(st,It,V.count);else if(Y.isInstancedBufferGeometry){const Be=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Rt=Math.min(Y.instanceCount,Be);St.renderInstances(st,It,Rt)}else St.render(st,It)};function Bn(T,H,Y){T.transparent===!0&&T.side===ai&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,ma(T,H,Y),T.side=ki,T.needsUpdate=!0,ma(T,H,Y),T.side=ai):ma(T,H,Y)}this.compile=function(T,H,Y=null){Y===null&&(Y=T),A=ze.get(Y),A.init(H),L.push(A),Y.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),T!==Y&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const $=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const De=fe[Me];Bn(De,Y,V),$.add(De)}else Bn(fe,Y,V),$.add(fe)}),A=L.pop(),$},this.compileAsync=function(T,H,Y=null){const $=this.compile(T,H,Y);return new Promise(V=>{function fe(){if($.forEach(function(Me){Fe.get(Me).currentProgram.isReady()&&$.delete(Me)}),$.size===0){V(T);return}setTimeout(fe,10)}et.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let In=null;function pd(T){In&&In(T)}function Sl(){zi.stop()}function Ml(){zi.start()}const zi=new ld;zi.setAnimationLoop(pd),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(T){In=T,ge.setAnimationLoop(T),T===null?zi.stop():zi.start()},ge.addEventListener("sessionstart",Sl),ge.addEventListener("sessionend",Ml),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(H),H=ge.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,H,E),A=ze.get(T,L.length),A.init(H),L.push(A),Xe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ee.setFromProjectionMatrix(Xe,qn,H.reversedDepth),Se=this.localClippingEnabled,ie=Ie.init(this.clippingPlanes,Se),M=_e.get(T,R.length),M.init(),R.push(M),ge.enabled===!0&&ge.isPresenting===!0){const fe=C.xr.getDepthSensingMesh();fe!==null&&Os(fe,H,-1/0,C.sortObjects)}Os(T,H,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(Pe,qe),nt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,nt&&me.addToRenderList(M,T),this.info.render.frame++,ie===!0&&Ie.beginShadows();const Y=A.state.shadowsArray;oe.render(Y,T,H),ie===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=M.opaque,V=M.transmissive;if(A.setupLights(),H.isArrayCamera){const fe=H.cameras;if(V.length>0)for(let Me=0,De=fe.length;Me<De;Me++){const Ce=fe[Me];Tl($,V,T,Ce)}nt&&me.render(T);for(let Me=0,De=fe.length;Me<De;Me++){const Ce=fe[Me];wl(M,T,Ce,Ce.viewport)}}else V.length>0&&Tl($,V,T,H),nt&&me.render(T),wl(M,T,H);E!==null&&w===0&&(je.updateMultisampleRenderTarget(E),je.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(C,T,H),k.resetDefaultState(),U=-1,B=null,L.pop(),L.length>0?(A=L[L.length-1],ie===!0&&Ie.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function Os(T,H,Y,$){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){$&&rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Xe);const Me=ae.update(T),De=T.material;De.visible&&M.push(T,Me,De,Y,rt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const Me=ae.update(T),De=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),rt.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),rt.copy(Me.boundingSphere.center)),rt.applyMatrix4(T.matrixWorld).applyMatrix4(Xe)),Array.isArray(De)){const Ce=Me.groups;for(let Ve=0,Ye=Ce.length;Ve<Ye;Ve++){const Ue=Ce[Ve],st=De[Ue.materialIndex];st&&st.visible&&M.push(T,Me,st,Y,rt.z,Ue)}}else De.visible&&M.push(T,Me,De,Y,rt.z,null)}}const fe=T.children;for(let Me=0,De=fe.length;Me<De;Me++)Os(fe[Me],H,Y,$)}function wl(T,H,Y,$){const{opaque:V,transmissive:fe,transparent:Me}=T;A.setupLightsView(Y),ie===!0&&Ie.setGlobalState(C.clippingPlanes,Y),$&&Ae.viewport(X.copy($)),V.length>0&&pa(V,H,Y),fe.length>0&&pa(fe,H,Y),Me.length>0&&pa(Me,H,Y),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Tl(T,H,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[$.id]===void 0&&(A.state.transmissionRenderTarget[$.id]=new tr(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?kr:xi,minFilter:Ji,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const fe=A.state.transmissionRenderTarget[$.id],Me=$.viewport||X;fe.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);const De=C.getRenderTarget(),Ce=C.getActiveCubeFace(),Ve=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(Q),se=C.getClearAlpha(),se<1&&C.setClearColor(16777215,.5),C.clear(),nt&&me.render(Y);const Ye=C.toneMapping;C.toneMapping=Ii;const Ue=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),ie===!0&&Ie.setGlobalState(C.clippingPlanes,$),pa(T,Y,$),je.updateMultisampleRenderTarget(fe),je.updateRenderTargetMipmap(fe),et.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let _t=0,It=H.length;_t<It;_t++){const Nt=H[_t],{object:St,geometry:Be,material:Rt,group:ut}=Nt;if(Rt.side===ai&&St.layers.test($.layers)){const mn=Rt.side;Rt.side=fn,Rt.needsUpdate=!0,El(St,Y,$,Be,Rt,ut),Rt.side=mn,Rt.needsUpdate=!0,st=!0}}st===!0&&(je.updateMultisampleRenderTarget(fe),je.updateRenderTargetMipmap(fe))}C.setRenderTarget(De,Ce,Ve),C.setClearColor(Q,se),Ue!==void 0&&($.viewport=Ue),C.toneMapping=Ye}function pa(T,H,Y){const $=H.isScene===!0?H.overrideMaterial:null;for(let V=0,fe=T.length;V<fe;V++){const Me=T[V],{object:De,geometry:Ce,group:Ve}=Me;let Ye=Me.material;Ye.allowOverride===!0&&$!==null&&(Ye=$),De.layers.test(Y.layers)&&El(De,H,Y,Ce,Ye,Ve)}}function El(T,H,Y,$,V,fe){T.onBeforeRender(C,H,Y,$,V,fe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(C,H,Y,$,T,fe),V.transparent===!0&&V.side===ai&&V.forceSinglePass===!1?(V.side=fn,V.needsUpdate=!0,C.renderBufferDirect(Y,H,$,V,T,fe),V.side=ki,V.needsUpdate=!0,C.renderBufferDirect(Y,H,$,V,T,fe),V.side=ai):C.renderBufferDirect(Y,H,$,V,T,fe),T.onAfterRender(C,H,Y,$,V,fe)}function ma(T,H,Y){H.isScene!==!0&&(H=Wt);const $=Fe.get(T),V=A.state.lights,fe=A.state.shadowsArray,Me=V.state.version,De=j.getParameters(T,V.state,fe,H,Y),Ce=j.getProgramCacheKey(De);let Ve=$.programs;$.environment=T.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(T.isMeshStandardMaterial?y:D).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",Ze),Ve=new Map,$.programs=Ve);let Ye=Ve.get(Ce);if(Ye!==void 0){if($.currentProgram===Ye&&$.lightsStateVersion===Me)return Cl(T,De),Ye}else De.uniforms=j.getUniforms(T),T.onBeforeCompile(De,C),Ye=j.acquireProgram(De,Ce),Ve.set(Ce,Ye),$.uniforms=De.uniforms;const Ue=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=Ie.uniform),Cl(T,De),$.needsLights=gd(T),$.lightsStateVersion=Me,$.needsLights&&(Ue.ambientLightColor.value=V.state.ambient,Ue.lightProbe.value=V.state.probe,Ue.directionalLights.value=V.state.directional,Ue.directionalLightShadows.value=V.state.directionalShadow,Ue.spotLights.value=V.state.spot,Ue.spotLightShadows.value=V.state.spotShadow,Ue.rectAreaLights.value=V.state.rectArea,Ue.ltc_1.value=V.state.rectAreaLTC1,Ue.ltc_2.value=V.state.rectAreaLTC2,Ue.pointLights.value=V.state.point,Ue.pointLightShadows.value=V.state.pointShadow,Ue.hemisphereLights.value=V.state.hemi,Ue.directionalShadowMap.value=V.state.directionalShadowMap,Ue.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ue.spotShadowMap.value=V.state.spotShadowMap,Ue.spotLightMatrix.value=V.state.spotLightMatrix,Ue.spotLightMap.value=V.state.spotLightMap,Ue.pointShadowMap.value=V.state.pointShadowMap,Ue.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Ye,$.uniformsList=null,Ye}function Al(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=ls.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Cl(T,H){const Y=Fe.get(T);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function md(T,H,Y,$,V){H.isScene!==!0&&(H=Wt),je.resetTextureUnits();const fe=H.fog,Me=$.isMeshStandardMaterial?H.environment:null,De=E===null?C.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ir,Ce=($.isMeshStandardMaterial?y:D).get($.envMap||Me),Ve=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ue=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,_t=!!Y.morphAttributes.color;let It=Ii;$.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(It=C.toneMapping);const Nt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=Nt!==void 0?Nt.length:0,Be=Fe.get($),Rt=A.state.lights;if(ie===!0&&(Se===!0||T!==B)){const Qt=T===B&&$.id===U;Ie.setState($,T,Qt)}let ut=!1;$.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Rt.state.version||Be.outputColorSpace!==De||V.isBatchedMesh&&Be.batching===!1||!V.isBatchedMesh&&Be.batching===!0||V.isBatchedMesh&&Be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Be.instancing===!1||!V.isInstancedMesh&&Be.instancing===!0||V.isSkinnedMesh&&Be.skinning===!1||!V.isSkinnedMesh&&Be.skinning===!0||V.isInstancedMesh&&Be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Be.instancingMorph===!1&&V.morphTexture!==null||Be.envMap!==Ce||$.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ie.numPlanes||Be.numIntersection!==Ie.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==Ye||Be.morphTargets!==Ue||Be.morphNormals!==st||Be.morphColors!==_t||Be.toneMapping!==It||Be.morphTargetsCount!==St)&&(ut=!0):(ut=!0,Be.__version=$.version);let mn=Be.currentProgram;ut===!0&&(mn=ma($,H,V));let rr=!1,xn=!1,zr=!1;const Dt=mn.getUniforms(),on=Be.uniforms;if(Ae.useProgram(mn.program)&&(rr=!0,xn=!0,zr=!0),$.id!==U&&(U=$.id,xn=!0),rr||B!==T){Ae.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Dt.setValue(F,"projectionMatrix",T.projectionMatrix),Dt.setValue(F,"viewMatrix",T.matrixWorldInverse);const ln=Dt.map.cameraPosition;ln!==void 0&&ln.setValue(F,Le.setFromMatrixPosition(T.matrixWorld)),pt.logarithmicDepthBuffer&&Dt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Dt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,xn=!0,zr=!0)}if(V.isSkinnedMesh){Dt.setOptional(F,V,"bindMatrix"),Dt.setOptional(F,V,"bindMatrixInverse");const Qt=V.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Dt.setValue(F,"boneTexture",Qt.boneTexture,je))}V.isBatchedMesh&&(Dt.setOptional(F,V,"batchingTexture"),Dt.setValue(F,"batchingTexture",V._matricesTexture,je),Dt.setOptional(F,V,"batchingIdTexture"),Dt.setValue(F,"batchingIdTexture",V._indirectTexture,je),Dt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&Dt.setValue(F,"batchingColorTexture",V._colorsTexture,je));const Mn=Y.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Ge.update(V,Y,mn),(xn||Be.receiveShadow!==V.receiveShadow)&&(Be.receiveShadow=V.receiveShadow,Dt.setValue(F,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(on.envMap.value=Ce,on.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(on.envMapIntensity.value=H.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=$4()),xn&&(Dt.setValue(F,"toneMappingExposure",C.toneMappingExposure),Be.needsLights&&xd(on,zr),fe&&$.fog===!0&&Ne.refreshFogUniforms(on,fe),Ne.refreshMaterialUniforms(on,$,he,de,A.state.transmissionRenderTarget[T.id]),ls.upload(F,Al(Be),on,je)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ls.upload(F,Al(Be),on,je),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Dt.setValue(F,"center",V.center),Dt.setValue(F,"modelViewMatrix",V.modelViewMatrix),Dt.setValue(F,"normalMatrix",V.normalMatrix),Dt.setValue(F,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Qt=$.uniformsGroups;for(let ln=0,zs=Qt.length;ln<zs;ln++){const Bi=Qt[ln];be.update(Bi,mn),be.bind(Bi,mn)}}return mn}function xd(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function gd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,H,Y){const $=Fe.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Fe.get(T.texture).__webglTexture=H,Fe.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const Y=Fe.get(T);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const vd=F.createFramebuffer();this.setRenderTarget=function(T,H=0,Y=0){E=T,z=H,w=Y;let $=!0,V=null,fe=!1,Me=!1;if(T){const Ce=Fe.get(T);if(Ce.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Ce.__webglFramebuffer===void 0)je.setupRenderTarget(T);else if(Ce.__hasExternalTextures)je.rebindTextures(T,Fe.get(T.texture).__webglTexture,Fe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(Ce.__boundDepthTexture!==Ue){if(Ue!==null&&Fe.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Me=!0);const Ye=Fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[H])?V=Ye[H][Y]:V=Ye[H],fe=!0):T.samples>0&&je.useMultisampledRTT(T)===!1?V=Fe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?V=Ye[Y]:V=Ye,X.copy(T.viewport),K.copy(T.scissor),Z=T.scissorTest}else X.copy(ot).multiplyScalar(he).floor(),K.copy(mt).multiplyScalar(he).floor(),Z=lt;if(Y!==0&&(V=vd),Ae.bindFramebuffer(F.FRAMEBUFFER,V)&&$&&Ae.drawBuffers(T,V),Ae.viewport(X),Ae.scissor(K),Ae.setScissorTest(Z),fe){const Ce=Fe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,Y)}else if(Me){const Ce=H;for(let Ve=0;Ve<T.textures.length;Ve++){const Ye=Fe.get(T.textures[Ve]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ve,Ye.__webglTexture,Y,Ce)}}else if(T!==null&&Y!==0){const Ce=Fe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ce.__webglTexture,Y)}U=-1},this.readRenderTargetPixels=function(T,H,Y,$,V,fe,Me,De=0){if(!(T&&T.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){Ae.bindFramebuffer(F.FRAMEBUFFER,Ce);try{const Ve=T.textures[De],Ye=Ve.format,Ue=Ve.type;if(!pt.textureFormatReadable(Ye)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Ue)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-$&&Y>=0&&Y<=T.height-V&&(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+De),F.readPixels(H,Y,$,V,$e.convert(Ye),$e.convert(Ue),fe))}finally{const Ve=E!==null?Fe.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,H,Y,$,V,fe,Me,De=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce)if(H>=0&&H<=T.width-$&&Y>=0&&Y<=T.height-V){Ae.bindFramebuffer(F.FRAMEBUFFER,Ce);const Ve=T.textures[De],Ye=Ve.format,Ue=Ve.type;if(!pt.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,st),F.bufferData(F.PIXEL_PACK_BUFFER,fe.byteLength,F.STREAM_READ),T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+De),F.readPixels(H,Y,$,V,$e.convert(Ye),$e.convert(Ue),0);const _t=E!==null?Fe.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,_t);const It=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Mm(F,It,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,st),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,fe),F.deleteBuffer(st),F.deleteSync(It),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,Y=0){const $=Math.pow(2,-Y),V=Math.floor(T.image.width*$),fe=Math.floor(T.image.height*$),Me=H!==null?H.x:0,De=H!==null?H.y:0;je.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Me,De,V,fe),Ae.unbindTexture()};const _d=F.createFramebuffer(),bd=F.createFramebuffer();this.copyTextureToTexture=function(T,H,Y=null,$=null,V=0,fe=null){fe===null&&(V!==0?(sa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=V,V=0):fe=0);let Me,De,Ce,Ve,Ye,Ue,st,_t,It;const Nt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(Y!==null)Me=Y.max.x-Y.min.x,De=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Ve=Y.min.x,Ye=Y.min.y,Ue=Y.isBox3?Y.min.z:0;else{const Mn=Math.pow(2,-V);Me=Math.floor(Nt.width*Mn),De=Math.floor(Nt.height*Mn),T.isDataArrayTexture?Ce=Nt.depth:T.isData3DTexture?Ce=Math.floor(Nt.depth*Mn):Ce=1,Ve=0,Ye=0,Ue=0}$!==null?(st=$.x,_t=$.y,It=$.z):(st=0,_t=0,It=0);const St=$e.convert(H.format),Be=$e.convert(H.type);let Rt;H.isData3DTexture?(je.setTexture3D(H,0),Rt=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(je.setTexture2DArray(H,0),Rt=F.TEXTURE_2D_ARRAY):(je.setTexture2D(H,0),Rt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const ut=F.getParameter(F.UNPACK_ROW_LENGTH),mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),rr=F.getParameter(F.UNPACK_SKIP_PIXELS),xn=F.getParameter(F.UNPACK_SKIP_ROWS),zr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ve),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ue);const Dt=T.isDataArrayTexture||T.isData3DTexture,on=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const Mn=Fe.get(T),Qt=Fe.get(H),ln=Fe.get(Mn.__renderTarget),zs=Fe.get(Qt.__renderTarget);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,ln.__webglFramebuffer),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let Bi=0;Bi<Ce;Bi++)Dt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.get(T).__webglTexture,V,Ue+Bi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.get(H).__webglTexture,fe,It+Bi)),F.blitFramebuffer(Ve,Ye,Me,De,st,_t,Me,De,F.DEPTH_BUFFER_BIT,F.NEAREST);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||Fe.has(T)){const Mn=Fe.get(T),Qt=Fe.get(H);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,_d),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,bd);for(let ln=0;ln<Ce;ln++)Dt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mn.__webglTexture,V,Ue+ln):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mn.__webglTexture,V),on?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Qt.__webglTexture,fe,It+ln):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Qt.__webglTexture,fe),V!==0?F.blitFramebuffer(Ve,Ye,Me,De,st,_t,Me,De,F.COLOR_BUFFER_BIT,F.NEAREST):on?F.copyTexSubImage3D(Rt,fe,st,_t,It+ln,Ve,Ye,Me,De):F.copyTexSubImage2D(Rt,fe,st,_t,Ve,Ye,Me,De);Ae.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else on?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Rt,fe,st,_t,It,Me,De,Ce,St,Be,Nt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(Rt,fe,st,_t,It,Me,De,Ce,St,Nt.data):F.texSubImage3D(Rt,fe,st,_t,It,Me,De,Ce,St,Be,Nt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,fe,st,_t,Me,De,St,Be,Nt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,fe,st,_t,Nt.width,Nt.height,St,Nt.data):F.texSubImage2D(F.TEXTURE_2D,fe,st,_t,Me,De,St,Be,Nt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ut),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rr),F.pixelStorei(F.UNPACK_SKIP_ROWS,xn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,zr),fe===0&&H.generateMipmaps&&F.generateMipmap(Rt),Ae.unbindTexture()},this.initRenderTarget=function(T){Fe.get(T).__webglFramebuffer===void 0&&je.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?je.setTextureCube(T,0):T.isData3DTexture?je.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?je.setTexture2DArray(T,0):je.setTexture2D(T,0),Ae.unbindTexture()},this.resetState=function(){z=0,w=0,E=null,Ae.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const Mu={type:"change"},yl={type:"start"},fd={type:"end"},ja=new vl,wu=new Ri,Z4=Math.cos(70*Tm.DEG2RAD),qt=new G,un=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},No=1e-6;class j4 extends l1{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Sr.ROTATE,TWO:Sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new gi,this._lastTargetPosition=new G,this._quat=new gi().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jc,this._sphericalDelta=new Jc,this._scale=1,this._panOffset=new G,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new G,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Q4.bind(this),this._onPointerDown=J4.bind(this),this._onPointerUp=eg.bind(this),this._onContextMenu=og.bind(this),this._onMouseWheel=ig.bind(this),this._onKeyDown=rg.bind(this),this._onTouchStart=ag.bind(this),this._onTouchMove=sg.bind(this),this._onMouseDown=tg.bind(this),this._onMouseMove=ng.bind(this),this._interceptControlDown=lg.bind(this),this._interceptControlUp=cg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mu),this.update(),this.state=yt.NONE}update(e=null){const t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),r<-Math.PI?r+=un:r>Math.PI&&(r-=un),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=qt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(ja.origin.copy(this.object.position),ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ja.direction))<Z4?this.object.lookAt(this.target):(wu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ja.intersectPlane(wu,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>No||8*(1-this._lastQuaternion.dot(this.object.quaternion))>No||this._lastTargetPosition.distanceToSquared(this.target)>No?(this.dispatchEvent(Mu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;qt.copy(r).sub(this.target);let a=qt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,s=n.width,o=n.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function J4(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Q4(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function eg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fd),this.state=yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=yt.DOLLY;break;case Tr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=yt.ROTATE}break;case Tr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(yl)}function ng(i){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ig(i){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(i.preventDefault(),this.dispatchEvent(yl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fd))}function rg(i){this.enabled!==!1&&this._handleKeyDown(i)}function ag(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Sr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=yt.TOUCH_ROTATE;break;case Sr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case Sr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=yt.TOUCH_DOLLY_PAN;break;case Sr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(yl)}function sg(i){switch(this._trackPointer(i),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=yt.NONE}}function og(i){this.enabled!==!1&&i.preventDefault()}function lg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ug extends an{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ee(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const br=new G,Tu=new Ft,Eu=new Ft,Au=new G,Cu=new G;class hg{constructor(e={}){const t=this;let n,r,a,s;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(v,_){v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Tu.copy(_.matrixWorldInverse),Eu.multiplyMatrices(_.projectionMatrix,Tu),h(v,v,_),this.sortObjects&&m(v)},this.setSize=function(v,_){n=v,r=_,a=n/2,s=r/2,l.style.width=v+"px",l.style.height=_+"px"};function c(v){v.isCSS2DObject&&(v.element.style.display="none");for(let _=0,g=v.children.length;_<g;_++)c(v.children[_])}function h(v,_,g){if(v.visible===!1){c(v);return}if(v.isCSS2DObject){br.setFromMatrixPosition(v.matrixWorld),br.applyMatrix4(Eu);const p=br.z>=-1&&br.z<=1&&v.layers.test(g.layers)===!0,M=v.element;M.style.display=p===!0?"":"none",p===!0&&(v.onBeforeRender(t,_,g),M.style.transform="translate("+-100*v.center.x+"%,"+-100*v.center.y+"%)translate("+(br.x*a+a)+"px,"+(-br.y*s+s)+"px)",M.parentNode!==l&&l.appendChild(M),v.onAfterRender(t,_,g));const A={distanceToCameraSquared:u(g,v)};o.objects.set(v,A)}for(let p=0,M=v.children.length;p<M;p++)h(v.children[p],_,g)}function u(v,_){return Au.setFromMatrixPosition(v.matrixWorld),Cu.setFromMatrixPosition(_.matrixWorld),Au.distanceToSquared(Cu)}function f(v){const _=[];return v.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function m(v){const _=f(v).sort(function(p,M){if(p.renderOrder!==M.renderOrder)return M.renderOrder-p.renderOrder;const A=o.objects.get(p).distanceToCameraSquared,R=o.objects.get(M).distanceToCameraSquared;return A-R}),g=_.length;for(let p=0,M=_.length;p<M;p++)_[p].element.style.zIndex=g-p}}}function dg(i){const e=new hg;return e.domElement.style.position="absolute",e.domElement.style.top="0",e.domElement.style.pointerEvents="none",i.parentElement?.appendChild(e.domElement),e}function yr(i,e=20,t="#ffffff"){const n=document.createElement("div");n.style.color=t,n.style.fontSize=`${e}px`,n.style.lineHeight="1",n.style.whiteSpace="nowrap",n.style.pointerEvents="none";const r={"\\ket":"\\lvert#1\\rangle"};try{n.innerHTML=wr(i,{throwOnError:!1,macros:r})}catch{n.textContent=i}return new ug(n)}class fg{constructor(e=new G(1,0,0),t=.5,n=16711680,r=.02,a=.1,s=.05){this.group=null,this.direction=e.clone().normalize(),this.length=t,this.color=n,this.shaftRadius=r,this.headLength=a,this.headRadius=s}create(){const e=this.direction,t=this.length,n=Math.min(this.headLength,t*.5),r=Math.max(0,t-n),a=new Is({color:this.color}),s=new Ns(this.shaftRadius,this.shaftRadius,r,8),o=new zn(s,a);o.rotation.z=Math.PI/2,o.position.x=r/2;const l=new _l(this.headRadius,n,8),c=new zn(l,a);c.rotation.z=-Math.PI/2,c.position.x=r+n/2;const h=new Qi;h.add(o,c);const u=new gi;return u.setFromUnitVectors(new G(1,0,0),e),h.setRotationFromQuaternion(u),this.group=h,h}applyQuaternion(e){this.group&&this.group.quaternion.premultiply(e)}setDirection(e){if(!this.group)return;const t=new gi().setFromUnitVectors(new G(1,0,0),e.clone().normalize());this.group.setRotationFromQuaternion(t)}}class pg{constructor(e=.5,t=8){this.radius=e,this.segments=t,this.group=new Qi}create(){const e=new bl(this.radius,this.segments,this.segments),t=new i1(e),n=new Is({color:170,transparent:!0,opacity:.15}),r=new ad({color:0}),a=new zn(e,n),s=new n1(t,r);return this.group.add(a,s,this.addLabels(.1)),this.group}addLabels(e){const t=new Qi,n=yr("\\ket{0}",20,"#000000");n.position.set(0,this.radius+e,0);const r=yr("\\ket{1}",20,"#000000");r.position.set(0,-this.radius-e,0);const a=yr("\\ket{i}",20,"#000000");a.position.set(this.radius+e,0,0);const s=yr("\\ket{-i}",20,"#000000");s.position.set(-this.radius-e,0,0);const o=yr("\\ket{+}",20,"#000000");o.position.set(0,0,this.radius+e);const l=yr("\\ket{-}",20,"#000000");return l.position.set(0,0,-this.radius-e),t.add(n,r,a,s,o,l),t}}function mg(i,e){if(!i)return null;const t=new K4({canvas:i,antialias:!0});t.setPixelRatio(window.devicePixelRatio||1);const n=75,r=2,a=.1,s=5,o=new En(n,r,a,s);o.position.z=2;const l=new Zm;l.background=new xt(16777215);const c=new j4(o,i);c.update();const h=dg(i),u=new pg(.5,8),f=new fg(new G(0,1,0)),m=f.create();l.add(m,u.create()),e.setArrow(f);function v(M){const A=M.domElement,R=A.clientWidth,L=A.clientHeight,C=A.width!==Math.floor(R*window.devicePixelRatio)||A.height!==Math.floor(L*window.devicePixelRatio);return C&&(M.setSize(R,L,!1),h.setSize(R,L)),C}let _=0;function g(){if(v(t)){const M=t.domElement;o.aspect=M.clientWidth/M.clientHeight,o.updateProjectionMatrix()}c.update(),t.render(l,o),h.render(l,o),_=requestAnimationFrame(g)}return _=requestAnimationFrame(g),{dispose(){cancelAnimationFrame(_),h.domElement&&h.domElement.parentElement&&h.domElement.parentElement.removeChild(h.domElement),t.dispose()}}}class xg{constructor(e,t){this.arrow=null,this.alpha=e||new Ee(1,0),this.beta=t||new Ee(0,0),this.initialAlpha=this.alpha.clone(),this.initialBeta=this.beta.clone()}setArrow(e){this.arrow=e}makeLatex(){const e=this.alpha.x.toFixed(2),t=this.alpha.y.toFixed(2),n=this.beta.x.toFixed(2),r=this.beta.y.toFixed(2);return`\\ket{\\psi} = (${e} + ${t}i)\\ket{0} + (${n} + ${r}i)\\ket{1}`}getSphericalCoordinates(){const e=2*(this.alpha.x*this.beta.x+this.alpha.y*this.beta.y),t=2*(this.alpha.y*this.beta.x-this.alpha.x*this.beta.y),n=this.alpha.lengthSq()-this.beta.lengthSq();return new G(e,n,-t).normalize()}multiplyComplex(e,t){return new Ee(e.x*t.x-e.y*t.y,e.x*t.y+e.y*t.x)}applyMatrix(e,t,n,r){const a=new Ee(this.multiplyComplex(e,this.alpha).x+this.multiplyComplex(t,this.beta).x,this.multiplyComplex(e,this.alpha).y+this.multiplyComplex(t,this.beta).y),s=new Ee(this.multiplyComplex(n,this.alpha).x+this.multiplyComplex(r,this.beta).x,this.multiplyComplex(n,this.alpha).y+this.multiplyComplex(r,this.beta).y);this.alpha=a,this.beta=s,this.updateArrow()}updateArrow(){if(this.arrow){const e=this.getSphericalCoordinates();this.arrow.setDirection(e)}}applyGate(e,t){switch(e){case"X":this.applyMatrix(new Ee(0,0),new Ee(1,0),new Ee(1,0),new Ee(0,0));break;case"Y":this.applyMatrix(new Ee(0,0),new Ee(0,-1),new Ee(0,1),new Ee(0,0));break;case"Z":this.applyMatrix(new Ee(1,0),new Ee(0,0),new Ee(0,0),new Ee(-1,0));break;case"H":const n=1/Math.sqrt(2);this.applyMatrix(new Ee(n,0),new Ee(n,0),new Ee(n,0),new Ee(-n,0));break;case"P":const r=t!==void 0?t:Math.PI/4;this.applyMatrix(new Ee(1,0),new Ee(0,0),new Ee(0,0),new Ee(Math.cos(r),Math.sin(r)));break}}setState(e,t){const n=e/2;this.alpha=new Ee(Math.cos(n),0),this.beta=new Ee(Math.cos(t)*Math.sin(n),Math.sin(t)*Math.sin(n)),this.updateArrow()}reset(){this.alpha=this.initialAlpha.clone(),this.beta=this.initialBeta.clone(),this.updateArrow()}}function gg(){const i=bc(null),e=bc(new xg),[,t]=ns({});Dp(()=>{const r=document.getElementById("three-scene");if(!r)return;const a=mg(r,e.current);return i.current=a,()=>a?.dispose()},[]);const n=()=>{t({})};return ht("div",{class:"Main",children:[ht("canvas",{id:"three-scene",style:{width:"100%",height:"100%"}}),ht(Ip,{qubit:e.current,onUpdate:n})]})}function vg(){return ht("div",{children:ht(gg,{})})}Ad(ht(vg,{}),document.getElementById("app"));
