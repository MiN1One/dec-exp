(this["webpackJsonpdec-exp"]=this["webpackJsonpdec-exp"]||[]).push([[0],{20:function(e,n,a){},27:function(e,n,a){},28:function(e,n,a){},29:function(e,n,a){},30:function(e,n,a){},31:function(e,n,a){},32:function(e,n,a){},33:function(e,n,a){"use strict";a.r(n);var t=a(0),c=a(1),i=a.n(c),s=a(9),o=a.n(s),r=(a(20),a(2)),l=a(3),_=a(5),h=a(4),j=a(7),d=(a(27),function(e){Object(_.a)(a,e);var n=Object(h.a)(a);function a(){return Object(r.a)(this,a),n.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(t.jsx)("div",{className:"Dropdown ".concat(this.props.class&&this.props.class),children:this.props.children})}}]),a}(c.Component)),u={CHANGE_LOCATION:"CHANGE_LOCATION",CHANGE_LANG:"CHANGE_LANG",CHANGE_SEARCH_LOC:"CHANGE_SEARCH_LOC"},b=(a(28),function(e){return Object(t.jsx)("div",{className:"Logo ".concat(e.class),children:Object(t.jsx)("h5",{className:"heading heading__5 Logo__heading",children:"Logo"})})}),p=(a(29),a.p+"static/media/sprite.c20d2056.svg"),N=function(e){return'<use xlink:href="'.concat(p,"#").concat(e,'"></use>')},m=function(e){Object(_.a)(a,e);var n=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={locations:["Andijan","Bukhara","Jizzakh","Kashkadarya","Navoi","Namangan","Samarkand","Surkhandarya","Sirdarya","Tashkent region","Fergana","Khorezm","Karakalpakistan","Tashkent"],langs:["O'zbekcha","English","\u0420\u0443\u0441\u0441\u043a\u0438\u0439"],showCats:!1},e.showCats=function(){return e.setState((function(e){return{showCats:!e}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,n=this.state.langs.map((function(n,a){return Object(t.jsx)("li",{className:"Dropdown__link",onClick:function(){return e.props.onChangeLanguage(n)},children:n},a)})),a=this.state.locations.map((function(n,a){return Object(t.jsx)("li",{className:"Dropdown__link",onClick:function(){return e.props.onChangeLocation(n)},children:n},a)}));return Object(t.jsx)("header",{className:"Navigation",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)("nav",{role:"navigation",className:"Navigation__wrapper",children:[Object(t.jsxs)("div",{className:"Navigation__list",children:[Object(t.jsx)(b,{class:"Navigation__item"}),Object(t.jsxs)("div",{className:"Navigation__item Navigation__item--loc",children:[Object(t.jsx)("svg",{className:"Navigation__icon",dangerouslySetInnerHTML:{__html:N("globe")}}),Object(t.jsx)("span",{className:"Navigation__title",children:this.props.lang}),Object(t.jsx)("svg",{className:"Navigation__icon Navigation__icon--arrow",dangerouslySetInnerHTML:{__html:N("chevron-down")}}),Object(t.jsxs)(d,{class:"Dropdown--left-fix",children:[Object(t.jsx)("p",{className:"Dropdown__title Dropdown__title",children:"Language:"}),n]})]}),Object(t.jsxs)("div",{className:"Navigation__item Navigation__item--loc",children:[Object(t.jsx)("svg",{className:"Navigation__icon",dangerouslySetInnerHTML:{__html:N("map-pin")}}),Object(t.jsx)("span",{className:"Navigation__title",children:this.props.location}),Object(t.jsx)("svg",{className:"Navigation__icon Navigation__icon--arrow",dangerouslySetInnerHTML:{__html:N("chevron-down")}}),Object(t.jsx)(d,{class:"Dropdown--small Dropdown--left-fix",children:Object(t.jsxs)("div",{className:"Dropdown__wrapper",children:[Object(t.jsx)("p",{className:"Dropdown__title",children:"Location:"}),a]})})]})]}),Object(t.jsxs)("div",{className:"Navigation__list",children:[Object(t.jsx)("div",{className:"Navigation__item",children:Object(t.jsxs)("a",{href:"#profile",className:"Navigation__link",children:[Object(t.jsx)("svg",{className:"Navigation__icon Navigation__icon--arrow",dangerouslySetInnerHTML:{__html:N("chevron-down")}}),Object(t.jsx)("span",{className:"Navigation__title  Navigation__title--user",children:"My profile"}),Object(t.jsx)("div",{className:"Navigation__iconbox",children:Object(t.jsx)("svg",{className:"Navigation__icon Navigation__icon--white",dangerouslySetInnerHTML:{__html:N("user")}})}),Object(t.jsxs)(d,{children:[Object(t.jsx)("p",{className:"Dropdown__title",children:"Profile:"}),Object(t.jsxs)("ul",{className:"Dropdown__list",children:[Object(t.jsx)("li",{className:"Dropdown__item",children:Object(t.jsx)("a",{href:"#",className:"Dropdown__link",children:"Ads"})}),Object(t.jsx)("li",{className:"Dropdown__item",children:Object(t.jsx)("a",{href:"#",className:"Dropdown__link",children:"Messages"})}),Object(t.jsx)("li",{className:"Dropdown__item",children:Object(t.jsx)("a",{href:"#settings",className:"Dropdown__link",children:"Settings"})}),Object(t.jsx)("li",{className:"Dropdown__item",children:Object(t.jsx)("a",{href:"#",className:"Dropdown__link",children:"Payments"})})]}),Object(t.jsx)("p",{className:"Dropdown__title",children:"Favourites:"}),Object(t.jsxs)("ul",{className:"Dropdown__list",children:[Object(t.jsx)("li",{className:"Dropdown__item",children:Object(t.jsx)("a",{href:"#",className:"Dropdown__link",children:"Ads"})}),Object(t.jsx)("li",{className:"Dropdown__item",children:Object(t.jsx)("a",{href:"#",className:"Dropdown__link",children:"Searches"})})]}),Object(t.jsx)("button",{className:"Dropdown__btn Dropdown__btn--grey",children:"Log out"})]})]})}),Object(t.jsxs)("button",{className:"btn btn__primary Navigation__btn",children:[Object(t.jsx)("span",{className:"Navigation__title Navigation__title--white",children:"Advert"}),Object(t.jsx)("svg",{className:"Navigation__icon Navigation__icon--white Navigation__icon--menu",dangerouslySetInnerHTML:{__html:N("plus")}})]}),Object(t.jsxs)("button",{className:"btn btn__primary btn__primary--yellow Navigation__btn",onClick:function(){return e.showCats()},children:[Object(t.jsx)("span",{className:"Navigation__title Navigation__title--white",children:"Categories"}),Object(t.jsx)("svg",{className:"Navigation__icon Navigation__icon--white Navigation__icon--menu",dangerouslySetInnerHTML:{__html:N("menu")}})]})]})]})})})}}]),a}(c.Component),O=Object(j.b)((function(e){return{lang:e.localization.lang,location:e.localization.location}}),(function(e){return{onChangeLanguage:function(n){return e(function(e){return{type:u.CHANGE_LANG,lang:e}}(n))},onChangeLocation:function(n){return e({type:u.CHANGE_LOCATION,location:n})}}}))(m),g=(a(30),a(31),function(e){return'<use xlink:href="'.concat(p,"#").concat(e,'"></use>')}),v=function(e){Object(_.a)(a,e);var n=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={locations:["Andijan","Bukhara","Jizzakh","Kashkadarya","Navoi","Namangan","Samarkand","Surkhandarya","Sirdarya","Tashkent region","Fergana","Khorezm","Karakalpakistan","Tashkent"],showDrop:!1},e.onHover=function(){return e.setState({showDrop:!0})},e.onMouseOut=function(){return e.setState({showDrop:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,n=["Dropdown--small Dropdown--right--fix Dropdown--full Dropdown--big"];this.state.showDrop&&n.push("Dropdown--show");var a=this.state.locations.map((function(n,a){return Object(t.jsx)("div",{className:"Dropdown__link",onClick:function(){return e.props.onChangeSearchLoc(n)},children:n},a)}));return Object(t.jsxs)("form",{className:"Searchbar",children:[Object(t.jsx)("input",{className:"Searchbar__input",type:"text",placeholder:"Search"}),Object(t.jsxs)("div",{className:"Searchbar__btn Searchbar__btn--map",onMouseEnter:function(){return e.onHover()},onMouseLeave:function(){return e.onMouseOut()},children:[Object(t.jsx)("svg",{className:"Searchbar__icon Searchbar__icon--map",dangerouslySetInnerHTML:{__html:g("map-pin")}}),Object(t.jsx)("span",{className:"Searchbar__title",children:this.props.searchLocation})]}),Object(t.jsx)("button",{className:"Searchbar__btn",type:"submit",children:Object(t.jsx)("svg",{className:"Searchbar__icon",dangerouslySetInnerHTML:{__html:g("search")}})}),Object(t.jsx)(d,{class:n.join(" "),children:Object(t.jsxs)("div",{className:"Dropdown__wrapper",children:[Object(t.jsx)("p",{className:"Dropdown__title",children:"Search in:"}),a]})})]})}}]),a}(c.Component),x=Object(j.b)((function(e){return{searchLocation:e.localization.searchLocation}}),(function(e){return{onChangeSearchLoc:function(n){return e({type:u.CHANGE_SEARCH_LOC,location:n})}}}))(v),f=(a(32),function(e){Object(_.a)(a,e);var n=Object(h.a)(a);function a(){return Object(r.a)(this,a),n.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(t.jsx)("header",{className:"Header",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"Header__wrapper",children:Object(t.jsx)("div",{className:"Header__hero",children:Object(t.jsx)(x,{})})})})})}}]),a}(c.Component));var w=function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(O,{}),Object(t.jsx)(f,{})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(n){var a=n.getCLS,t=n.getFID,c=n.getFCP,i=n.getLCP,s=n.getTTFB;a(e),t(e),c(e),i(e),s(e)}))},k=a(8),L=a(6),D={lang:"English",location:"Tashkent",searchLocation:"Tashkent"},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.CHANGE_LOCATION:return Object(L.a)(Object(L.a)({},e),{},{location:n.location});case u.CHANGE_LANG:return Object(L.a)(Object(L.a)({},e),{},{lang:n.lang});case u.CHANGE_SEARCH_LOC:return Object(L.a)(Object(L.a)({},e),{},{searchLocation:n.location});default:return e}},S=Object(k.b)({localization:y}),A=Object(k.c)(S);o.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(j.a,{store:A,children:Object(t.jsx)(w,{})})}),document.getElementById("root")),C()}},[[33,1,2]]]);
//# sourceMappingURL=main.ddc52dbb.chunk.js.map