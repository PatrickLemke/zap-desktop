(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(178),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(36);n.d(t,"waitForRouteChange",function(){return s.c});var l=n(243),p=n.n(l);n.d(t,"PageRenderer",function(){return p.a});var d=n(53);n.d(t,"parsePath",function(){return d.a});var h=r.a.createContext({}),m=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},185:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(177),o=n(0),c=n(273),u=(n(274),n(57),n(91),n(196),n(236)),s=n(456),l=n(455),p=n(41),d=Object(u.b)(function(e){return{visible:e.isSidebarVisible}})(function(e){var t=e.items,n=e.pathname,a=e.Link,r=e.visible,i=function(e){return e.exact?n===e.path:n.startsWith(e.path)},c=t.find(function(e){return i(e)})||{};return o.createElement(s.a,{as:l.a,animation:"slide along",width:"thin",visible:r,icon:"labeled",vertical:!0,inverted:c.inverted},t.map(function(e){var t=i(e);return o.createElement(l.a.Item,{as:a,to:e.path,active:t,key:e.path},o.createElement(p.a,{name:e.icon}),e.name)}))}),h=n(458),m=(n(436),n(438),n(440),n(443),n(38),n(238)),f=n(445),b=Object(m.createStore)(function(e,t){switch(t.type){case"TOGGLE_SIDEBAR":return Object.assign({},e,{isSidebarVisible:!e.isSidebarVisible});default:return e}},{isSidebarVisible:!1},Object(f.devToolsEnhancer)({}));n.d(t,"a",function(){return v}),n.d(t,"b",function(){return g});var v=[{name:"Home",path:"/",exact:!0,icon:"home",inverted:!0},{name:"Documentation",path:"https://github.com/LN-Zap/zap-desktop",exact:!0},{name:"Tutorials",path:"https://ln-zap.github.io/zap-tutorials",exact:!0},{name:"Developer Resources",path:"/storybook",exact:!1}],y=function(e){var t=e.location.pathname,n="/"===t;return o.createElement(u.a,{store:b},o.createElement(s.a.Pushable,{as:h.a},o.createElement(d,{Link:i.Link,pathname:t,items:v,visible:!1}),o.createElement(s.a.Pusher,{style:{minHeight:"100vh"}},n?null:o.createElement(c.a,{Link:i.Link,pathname:t,items:v}),o.createElement("div",{style:{paddingBottom:60}},e.children))))},g=function(e){return function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return o.createElement(y,{location:this.props.location},o.createElement(e,this.props))},n}(o.Component)}},243:function(e,t,n){var a;e.exports=(a=n(286))&&a.default||a},273:function(e,t,n){"use strict";n(274),n(196),n(57);var a=n(0),r=n(236),i=n(452),o=n(455);t.a=Object(r.b)()(function(e){var t=e.items,n=e.pathname,r=e.Link,c=e.inverted;e.dispatch;return a.createElement(i.a,null,a.createElement(o.a,{size:"large",pointing:!0,secondary:!0,inverted:c},t.map(function(e){var t=e.exact?n===e.path:n.startsWith(e.path);return a.createElement(o.a.Item,{as:r,className:"mobile hidden",name:e.name,to:e.path,key:e.path,active:t})})))})},286:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(77),u=n(1),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},436:function(e,t,n){},438:function(e,t,n){},440:function(e,t,n){}}]);
//# sourceMappingURL=1-8bca2e5f959deb480d30.js.map