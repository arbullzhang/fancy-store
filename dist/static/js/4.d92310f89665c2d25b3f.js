webpackJsonp([4],{"+lzn":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABeUlEQVRYw91X0XHCMAxlBEZgBDZINoARskH9IXH8NRuUEdgANoANygZhA7wBNYHiEJREUqzrXfN+fXqx9KQnTyb/4FvP4DMCP9w0aXjI8foKuKxnKQnKNkHAxpqgMk3RDWmr4AiKuYmesHgWOrchmD8JDk3pKrEgBE/VQw+4vKUaTokp9m2CrTWBS0uABasr9DAu81uC6jucDRNUE+yThffk4CeHny5BW8Hw02C17PC3VAnqnkjeMEE1wTEJQS7zOGn4M8sVRhCULFdQhz8NrD5RCaEeYoAb3KximY12Pdz8EiRdwShXMDL/OC561TAqSXqb37FuPWpof6sXSi70S7HeKOmOBgelGDLdYYYZpxeCi2RiJa2WWD2uvetr/lCvxzn4Ejy/QniWMl7lAAd+cqpW6RzvHLmqcEY2rQ3uOU4fHMecY1g/PZXcVP1CbTWa79JHHO33c4IB33gr+L5HYWNu+Y5lq6eXQ29iMaRuyMPPBKs0sqc//n4A/l+9VRm0FNQAAAAASUVORK5CYII="},MMdW:function(t,e,s){"use strict";var a={data:function(){return{messageShow:!1}},watch:{messageShow:function(){var t=this;this.messageShow&&setTimeout(function(){t.messageShow=!1},800)}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"bullet"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.messageShow,expression:"messageShow"}]},[e("p",[this._v("商品已在购物车")])])])},staticRenderFns:[]};var n=s("X4nt")(a,i,!1,function(t){s("ZHec")},"data-v-6fceab94",null);e.a=n.exports},ZHec:function(t,e){},jgxu:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("lRcM"),i=s("Ug5s"),n=s("MMdW"),o=s("9rMa"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},c={data:function(){return{menuList:[],categoryList:[],categoryContent:[],cartLength:0,slidename:"slide-back",mainarea:!1}},components:{Headers:a.a,Footers:i.a,Message:n.a},computed:r({},Object(o.b)(["carts","this.$store.state.tabindex","this.$store.state.comname"])),mounted:function(){this.mainarea=!0,void 0==this.$store.state.tabindex&&this.setTabindex(0),this.getMenuList(),this.getCategoryList(),"index"==this.$store.state.comname?this.slidename="slide-go":this.slidename="slide-back",this.setComname("category")},methods:r({getMenuList:function(){var t=this;this.$http.get("/api/menudata",{}).then(function(e){t.menuList=e.data.data}).catch(function(t){console.log(t)})},getCategoryList:function(){var t=this;this.$http.post("/api/categorydata",{}).then(function(e){t.categoryList=e.data.data,t.categoryContent=t.categoryList[0]}).catch(function(t){console.log(t)})},onBar:function(t){this.setTabindex(t),this.categoryContent=this.categoryList[this.$store.state.tabindex]},onAddCart:function(t){this.$store.state.carts.includes(t)?this.$refs.message.messageShow=!0:this.$refs.footer.showNum||(this.setCarts(t),this.cartLength=this.$store.state.carts.length,this.$refs.footer.showNum=!0)},onDetail:function(t){this.$router.push("/detail"),this.setGoods(t)}},Object(o.c)({setGoods:"SET_GOODS",setCarts:"SET_CARTS",setTabindex:"SET_TABINDEX",setComname:"SET_COMNAME"}))},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("message",{ref:"message"}),t._v(" "),a("headers",{attrs:{tabname:"分类"}}),t._v(" "),a("transition",{attrs:{name:t.slidename}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.mainarea,expression:"mainarea"}],staticClass:"container flex",attrs:{id:"container"}},[a("div",{staticClass:"leftbar"},t._l(t.menuList,function(e,s){return a("div",{staticClass:"barItem"},[a("p",{staticClass:"menu-text",class:{active:s===t.$store.state.tabindex},on:{click:function(e){t.onBar(s)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e.cat_name)+"\n\t\t\t\t\t")])])})),t._v(" "),a("div",{staticClass:"rightContent"},t._l(t.categoryContent.cart,function(e){return a("div",{staticClass:"rightItem",on:{click:function(s){t.onDetail(e)}}},[a("div",{staticClass:"category-item flex"},[a("div",{staticClass:"item flex detail-item"},[a("div",{staticClass:"goods-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.GoodsImage,expression:"categoryItem.GoodsImage"}]})]),t._v(" "),a("div",{staticClass:"goods-textBox"},[a("p",{staticClass:"goods-name"},[t._v(t._s(e.GoodsName))]),t._v(" "),a("p",{staticClass:"goods-coach"},[t._v("¥"+t._s(e.GoodsPrice))]),t._v(" "),a("div",{staticClass:"goods-cartBox"},[a("img",{attrs:{src:s("+lzn")},on:{click:function(s){s.stopPropagation(),t.onAddCart(e)}}})])])])])])}))])]),t._v(" "),a("footers",{ref:"footer",attrs:{urlRouter:t.$route.path,cartnum:t.cartLength}})],1)},staticRenderFns:[]};var u=s("X4nt")(c,d,!1,function(t){s("mjWg")},"data-v-3e836f46",null);e.default=u.exports},mjWg:function(t,e){}});