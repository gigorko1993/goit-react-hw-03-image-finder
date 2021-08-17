(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__SWrag","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__2SiPC"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3V-8o"}},16:function(e,t,a){e.exports={Button:"Button_Button__2vjrN"}},22:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),s=(a(22),a(13)),l=a(4),i=a(5),u=a(7),m=a(6),d=(a(23),a(10)),h=(a(24),a(14)),g=a.n(h),b=a(8),j=a.n(b),p=a(1),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.onSubmit=function(t){t.preventDefault(),""!==e.state.value.trim()&&(e.props.onClick(e.state.value),e.setState({value:""}))},e.onChange=function(t){e.setState({value:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.value;return Object(p.jsx)("header",{className:j.a.Searchbar,children:Object(p.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.onSubmit,children:[Object(p.jsx)("button",{type:"submit",className:j.a.button,children:Object(p.jsx)("span",{className:j.a.buttonLabel,children:"Search"})}),Object(p.jsx)("input",{onChange:this.onChange,className:j.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e})]})})}}]),a}(n.Component),v=a(15),y=a.n(v),O=a(12),w=a.n(O),x=function(e){var t=e.images,a=e.onImageClick;return t.map((function(e){var t=e.id,n=e.webformatURL,o=e.tags;return Object(p.jsx)("li",{className:w.a.ImageGalleryItem,onClick:function(){return a(t)},children:Object(p.jsx)("img",{className:w.a.img,src:n,alt:o})},t)}))},I=function(e){var t=e.images,a=e.onImageClick;return Object(p.jsx)("ul",{className:y.a.ImageGallery,children:Object(p.jsx)(x,{images:t,onImagClick:a})})},k=a(16),C=a.n(k),S=function e(t){var a=t.onClick;return Object(p.jsx)(e,{type:"button",className:C.a.Button,onClick:a,children:"Load more"})},_=a(9),M=a.n(_),N=a(17),G=document.querySelector("#modal-root"),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).closeModalbyEsc=function(t){"Escape"===t.code&&e.props.showModal()},e.closeModalbyClick=function(t){t.currentTarget===t.target&&e.props.showModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalbyEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalbyEsc)}},{key:"render",value:function(){var e=this.props.showModal;return Object(r.createPortal)(Object(p.jsxs)("div",{className:M.a.backdrop,onClick:this.closeModalbyClick,children:[Object(p.jsx)("button",{type:"button",onClick:function(){return e()},className:M.a.button,children:Object(p.jsx)(N.a,{className:M.a.icon})}),Object(p.jsx)("div",{className:M.a.modal,children:this.props.children})]}),G)}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={status:"idle",value:"",loader:!1,page:1,images:[],showModal:!1,modalContent:null},e.setValue=function(t){e.setState((function(e){if(e.value!==t.toLowerCase())return{value:t.toLowerCase(),page:1};d.b.dark("The same request! Try something another :)",{toastId:"customId"})}))},e.showModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.resetImages=function(){e.setState({images:[]})},e.setPage=function(){e.setState((function(e){return{page:e.page+1}}))},e.onImgClick=function(t){var a=e.state.images.find((function(e){return e.id===t}));e.setState({modalContent:a}),e.showModal()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,o=n.page,r=n.value;r===t.value&&o===t.page||(1===o&&this.resetImages(),this.setState({loader:!0}),function(e,t){return fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(e,"&key=").concat("9062055-da883187fb30391728e11f5fd","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Some server issue seems to have occured. Please try again"))}))}(o,r).then((function(e){e.hits.length<12&&d.b.warn("No more images to load",{toastId:"anotherCustomId"}),a.setState((function(t){return{images:[].concat(Object(s.a)(t.images),Object(s.a)(e.hits)),status:"resolved"}}))})).catch((function(){return a.setState({status:"rejected"})})).finally((function(){a.setState({loader:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.showModal,n=e.images,o=e.loader,r=e.modalContent;return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{onClick:this.setValue}),"idle"===t?Object(p.jsx)("h2",{children:"Use the search bar above if you are looking to get an awesome wallpaper"}):null,"resolved"===t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(I,{images:n,onImgClick:this.onImgClick}),Object(p.jsx)(S,{onClick:this.setPage})]}):null,o&&Object(p.jsx)(g.a,{className:"Loader",type:"Grid",color:"#9900cc",height:180,width:180}),"rejected"===t?Object(p.jsx)("h2",{children:"Some error occured while fetching requested images"}):null,a&&Object(p.jsx)(L,{showModal:this.showModal,children:Object(p.jsx)("img",{src:r.largeImageURL,alt:r.tags})}),Object(p.jsx)(d.a,{})]})}}]),a}(n.Component),P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root")),P()},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__TvVlD"}},9:function(e,t,a){e.exports={backdrop:"Modal_backdrop__6PbW8",modal:"Modal_modal__1gAJX",button:"Modal_button__24Wrw",icon:"Modal_icon__3bTn0"}}},[[46,1,2]]]);
//# sourceMappingURL=main.34d8e08a.chunk.js.map