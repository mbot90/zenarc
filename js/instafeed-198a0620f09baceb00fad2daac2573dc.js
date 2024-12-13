var instafeedApp=(function instafeedLoad(){/*!
* Copyright (c) 2023 Mintt Studio
* Unauthorized copying, modification, or distribution is prohibited.
* For inquiries, contact: business@minttstudio.com
*/const e="instafeed.nfcube.com",t="cdn.nfcube.com",i="9.0.6",s=!1;var n=function(){function s(t){this.translations={en:{SHOP_NOW:"Shop now",TAG_PRODUCTS:"Tag products",VIEW_ON_INSTAGRAM:"View on Instagram",HANG_ON:"Hang on we are processing your feed ☕",DELETE:"Delete"},"pt-PT":{SHOP_NOW:"Comprar agora",TAG_PRODUCTS:"Identificar produtos",VIEW_ON_INSTAGRAM:"Ver no Instagram",HANG_ON:"Aguarde, estamos a processar o seu feed ☕",DELETE:"Apagar"},"pt-BR":{SHOP_NOW:"Comprar agora",TAG_PRODUCTS:"Marcar produtos",VIEW_ON_INSTAGRAM:"Ver no Instagram",HANG_ON:"Aguarde, estamos processando seu feed ☕",DELETE:"Delete"},es:{SHOP_NOW:"Comprar ahora",TAG_PRODUCTS:"Etiquetar productos",VIEW_ON_INSTAGRAM:"Ver en Instagram",HANG_ON:"Espera, estamos procesando tu feed ☕",DELETE:"Eliminar"},"ja-JP":{SHOP_NOW:"今すぐ購入",TAG_PRODUCTS:"商品にタグを付ける",VIEW_ON_INSTAGRAM:"Instagramで見る",HANG_ON:"ちょっと待ってください。フィードを処理しています ☕",DELETE:"削除"},fr:{SHOP_NOW:"Acheter",TAG_PRODUCTS:"Étiqueter les produits",VIEW_ON_INSTAGRAM:"Afficher sur Instagram",HANG_ON:"Attendez, nous traitons votre flux ☕",DELETE:"Supprimer"},de:{SHOP_NOW:"Jetzt shoppen",TAG_PRODUCTS:"Produkte taggen",VIEW_ON_INSTAGRAM:"Auf Instagram ansehen",HANG_ON:"Warte, wir verarbeiten deinen Feed ☕",DELETE:"Löschen"}},this.availableLanguages=["en","es","de","fr","ja-JP","pt-PT","pt-BR"],this.options={target:"insta-feed",locale:"en",forceUpdate:!1,picturesLoaded:0,picturesNeeded:0,admin:window.location.hostname===e},"undefined"!=typeof Shopify&&Shopify.locale&&this.availableLanguages.includes(Shopify.locale)&&(this.options.locale=Shopify.locale),Object.assign(this.options,t),this.options.admin||this._loadCss();document.querySelectorAll(".instafeed-lightbox").forEach((e=>{e.parentNode.removeChild(e)}))}return s.prototype.translate=function(e){const t=this.options.locale;return this.translations[t]&&this.translations[t][e]?this.translations[t][e]:e},s.prototype.run=function(){var t=document.getElementById(this.options.target);if(0===t.clientWidth&&parseInt(this.options.autoLayout)>0)return this._checkClientWidth(this,t),!1;parseInt(this.options.autoLayout)>0?(this.options.picturesNeeded=this.options.rows*this._getAutoColumns(t.clientWidth),this._isMobileDevice()&&this._validateCharge(this.options.charge)&&(this.options.picturesNeeded=this.options.rowsMobile*this._getAutoColumns(t.clientWidth))):this._isMobileDevice()&&this._validateCharge(this.options.charge)?this.options.picturesNeeded=this.options.rowsMobile*this.options.columnsMobile:this.options.picturesNeeded=this.options.rows*this.options.columns;const i=this.options.admin?"<br/><em>"+this.translate("HANG_ON")+"</em>":"";t.innerHTML=`<img src="//${e}/assets/img/loader.gif" style="position:relative;height:11px;width:16px;" alt="loading bar" />${i}`;const s=this;return fetch(this._buildUrl()).then((e=>{if(!e.ok)throw new Error(`HTTP error: ${e.status} ${e.statusText}`);return e.json()})).then((e=>{s.parse(e)})).catch((e=>{console.log("Error:",e.message)})),!0},s.prototype.parse=function(t){var i,s,n,o,a,r,d;const l=document.getElementById(this.options.target);if(!l)return console.error("Target element not found"),!1;if("object"!=typeof t)throw new Error("Invalid JSON response");const{meta:{code:p,error_message:c}}=t,u=parseInt(p,10);if(l.innerHTML="",204===u||200!==u)return this.options.admin&&(l.innerHTML=204===u?c:`⚠️ ${c}`,"function"==typeof this.options.error&&this.options.error.call(this,t)),!1;"function"==typeof this.options.success&&this.options.success.call(this,t),r=t.data,i="",s="";var h="standard_resolution",g=parseInt(100-this.options.space),m=0,f=0;f=m=parseInt(this.options.autoLayout)>0?parseFloat(100/this._getAutoColumns(l.clientWidth)).toFixed(6):this._isMobileDevice()&&this._validateCharge(this.options.charge)?parseFloat(100/this.options.columnsMobile).toFixed(6):parseFloat(100/this.options.columns).toFixed(6),parseInt(this.options.layout)>=2&&(f=parseFloat(m*(16/9)).toFixed(6));var v,w="",y="";this._validateCharge(this.options.charge)&&parseInt(this.options.likes)>0&&4!==parseInt(this.options.apiVersion)&&(w="<div class='likes'><span style='padding-right: 5px;'><svg width='10' height='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='white'></path></svg></span>{{likes}}\x3c!--<span style='width: 10px;padding-right: 5px;padding-left: 5px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z' fill='white'></path></svg></span> {{comments}}--\x3e</div>",y="<span><span style='padding-right: 5px;'><svg width='10' height='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='grey'></path></svg> {{likes}}</span> \x3c!--<span>&#10078; {{comments}}</span>--\x3e");var b="<div class='instafeed-container' style='width:"+m+"%;padding-top:"+f+"%;'>{{containerContent}}"+("<div data-instafeed-open-id='{{id}}-"+this.options.target+"' style='width:"+g+"%;height:"+g+"%;' class='instafeed-overlay {{video}}'>"+w+"</div>")+"</div>",_="",I="";for(1===parseInt(this.options.openIg)?b="<a href='{{link}}' target='_blank' aria-label='@{{username}} on Instagram (opens in new window)' rel='noopener'>"+b+"</a>":3===parseInt(this.options.openIg)&&(this.options.admin&&(I="<div class='products-tagging'><a id='search' data-picture-id='{{fullId}}'><button class='btn primary'>"+this.translate("TAG_PRODUCTS")+"</button><</a></div><div class='tagging-message' id='tagging-{{fullId}}'></div>"),_="<div tabindex='0' class='instafeed-lightbox' data-instafeed-close-id='{{id}}-"+this.options.target+"' id='{{id}}-"+this.options.target+"'><div class='lightbox-instagram' role='dialog' aria-labelledby='{{id}}-"+this.options.target+"' aria-modal='true'><div class='instafeed-post-image'>{{imageFullHtml}}</div><div class='description'><div class='instafeed-header'><div class='instafeed-header-left-section'><div class='instafeed-header-logo'><img src='//"+e+"/assets/img/placeholder.gif' data-feed-id='"+this.options.target+"' class='profile-picture js-lazy-image' data-src='{{userPicture}}' alt='instagram profile picture' /></div><div class='instafeed-fullname'><a class='instafeed-fullname' href='https://www.instagram.com/{{username}}/' target='_blank' aria-label='@{{username}} on Instagram (opens in new window)' rel='noopener'><div class='instafeed-fullname' data-feed-id='"+this.options.target+"'>{{username}}</div></a></div></div><div class='instafeed-close-button'><a style='height:25px;width:25px;display:block!important;position:relative;background:transparent;' aria-label='close button' href='javascript:void(0)' data-instafeed-close-id='{{id}}-"+this.options.target+"' id='close-button-url'>&nbsp;</a></div></div><div class='sub-header'><div class='post-engagement'>"+y+"</div><div class='arrows'><object><img src='//"+e+"/assets/img/placeholder.gif' data-instafeed-open-id='{{minusId}}-"+this.options.target+"' alt='previous image' /></object><object><img src='//"+e+"/assets/img/placeholder.gif' alt='next image' data-instafeed-open-id='{{plusId}}-"+this.options.target+"' /></object></div></div><div class='instafeed-content-wrapper'><div class='box-content'>"+I+" {{taggedProduct}}</div><div class='instafeed-caption'>{{caption}}</div></div><div class='post-date'><span style='padding-left:8px;'>{{date}}</span> • <a href='{{link}}' target='_blank' aria-label='@{{username}} on Instagram (opens in new window)' rel='noopener' class='follow'>"+this.translate("VIEW_ON_INSTAGRAM")+"</a></div></div></div></div>"),n=0,d=r.length;n<d;n++){o=r[n];var E="",S=o.user.followers;if("object"!=typeof(a=o.images[h]))throw new Error("No image found for resolution: "+h+".");if(this.options.picturesLoaded++,o.hasOwnProperty("tagged_products")&&o.tagged_products.length>0&&this._validateCharge(this.options.charge)){var T,N,O=this.options.admin,x=this.options.shopOrigin,C=this.options.target;o.tagged_products.forEach((t=>{O?(T="<object class='product-title'><a href='https://"+x+"/"+t.handle+"' target='_blank' rel='noopener'>"+t.title+"</a><a href='#"+this.options.picturesLoaded+"-"+C+"' id='delete-product' data-picture-id='"+o.id+"' data-tagging-id='"+t.id+"'><div class='tagged-buy-button'>"+this.translate("DELETE")+"</div></a></object>",N="<object><a href='https://"+x+"/"+t.handle+"' target='_blank' rel='noopener'><img class='js-lazy-image' src='https://"+e+"/assets/img/placeholder.gif' data-src='"+t.image+"' alt='product image' /></a></object>"):(T="<object class='product-title'><a href='//"+window.location.hostname+"/"+t.handle+"'>"+t.title+"</a><a href='//"+window.location.hostname+"/"+t.handle+"'><button class='tagged-buy-button' tabindex='-1'>"+this.translate("SHOP_NOW").toUpperCase()+"</button></a></object>",N="<object><a href='//"+window.location.hostname+"/"+t.handle+"'><img class='js-lazy-image' src='https://"+e+"/assets/img/placeholder.gif' data-src='"+t.image+"' alt='product image' /></a></object>"),E+="<div class='tagged-products' id='"+o.id+"-"+t.id+"'><div class='tagged-products-image'>"+N+"</div><div class='tagged-products-buttons'>"+T+"</div></div>"}))}var L="";"video"===o.type&&o.hasOwnProperty("videos")?(L="instafeed-video",imageFullHtml='<video controls muted playsinline id="video-'+this.options.picturesLoaded+'-instafeed" preload="none" poster="'+a.url+'" src="'+o.videos.standard_resolution.url+'" style="display:block;"></video>'):imageFullHtml="<img class='js-lazy-image' src='//"+e+"/assets/img/placeholder.gif' data-src='"+o.images.standard_resolution.url+"' alt='Instagram post with the caption: "+this._escapeHtml(this._getObjectProperty(o,"caption.text").substring(0,64))+"...' />",v="video"===o.type&&1===parseInt(this.options.autoplay)?'<video loop playsinline muted class="auto-loop-videos" id="inline-video-'+this.options.picturesLoaded+'-instafeed" preload="none" poster="'+a.url+'" src="'+o.videos.standard_resolution.url+'" style="display:block;width:'+g+"%;height:"+g+'%;"></video>':"<img class='js-lazy-image' style='width:"+g+"%;height:"+g+"%;' src='//"+e+"/assets/img/placeholder.gif' data-src='"+a.url+"' alt='Instagram post with the caption: "+this._escapeHtml(this._getObjectProperty(o,"caption.text").substring(0,64))+"...' />";var M=this.options.picturesLoaded-1;1===this.options.picturesLoaded&&(M=Math.min(this.options.picturesNeeded,r.length));var A=this.options.picturesLoaded===this.options.picturesNeeded||this.options.picturesLoaded===r.length?1:this.options.picturesLoaded+1;if(i+=this._makeTemplate(b,{model:o,id:this.options.picturesLoaded,fullId:o.id,minusId:M,plusId:A,link:o.link,image:a.url,video:L,username:o.user.username,fullName:o.user.full_name,userPicture:5===this.options.apiVersion?o.user.profile_picture:"https://"+e+"/assets/img/logo-instagram-transparent.png",imageFullHtml:imageFullHtml,taggedProduct:E,containerContent:v,date:this._timeConverter(o.created_time),caption:this._escapeHtml(this._getObjectProperty(o,"caption.text")),likes:this._shortenLargeNumber(o.likes.count,1),comments:this._shortenLargeNumber(o.comments.count,1),location:this._getObjectProperty(o,"location.name")}),s+=this._makeTemplate(_,{model:o,id:this.options.picturesLoaded,fullId:o.id,minusId:M,plusId:A,link:o.link,image:a.url,video:L,username:o.user.username,fullName:o.user.full_name,userPicture:5===this.options.apiVersion?o.user.profile_picture:"https://"+e+"/assets/img/logo-instagram-transparent.png",imageFullHtml:imageFullHtml,taggedProduct:E,date:this._timeConverter(o.created_time),caption:this._escapeHtml(this._getObjectProperty(o,"caption.text")),likes:this._shortenLargeNumber(o.likes.count,1),comments:this._shortenLargeNumber(o.comments.count,1),location:this._getObjectProperty(o,"location.name")}),this.options.picturesLoaded>=this.options.picturesNeeded||t.data.length===this.options.picturesLoaded)break}if(l.innerHTML="",this._appendHtmlToParent(s),4!==parseInt(this.options.layout)&&5!==parseInt(this.options.layout)){const e=document.createDocumentFragment();this._appendHtmlToParent(i,e),l.appendChild(e)}else window.instafeedSliderNumVisibleImages=parseInt(100/m),window.instafeedSliderTotalImages=this.options.picturesLoaded,l.innerHTML+=this._generateCarouselHTML(r,this._escapeHtml),this._setNumVisibleImages(),l.addEventListener("swiped-left",(function(e){instafeedSliderMove(1)})),l.addEventListener("swiped-right",(function(e){instafeedSliderMove(-1)}));return this._setFeedHeader(S),this._changeMobileDOM(),this._enableLazyLoading(),this._observeAndPlayVideos(),!0},s.prototype._changeMobileDOM=function(){if(this._isMobileDevice(!0)){document.querySelectorAll(".instafeed-post-image").forEach((e=>{const t=e.nextElementSibling,i=t?t.querySelector(".instafeed-header"):null;i&&e.parentNode.insertBefore(i,e)}))}},s.prototype._setFeedHeader=function(e){const t=document.getElementById(this.options.target),i=this._validateCharge(this.options.charge)&&5===parseInt(this.options.apiVersion)&&parseInt(this.options.showFollowers)>0,s=i?`<h3>${this._shortenLargeNumber(e)} followers</h3>`:"",n=this.options.title.length>0;let o="";n&&(o+=`<h2 style="${i?"margin-bottom:0;":""}">${this.options.title}</h2>`),i&&(o+=s),(n||i)&&this._appendHtmlToParent(o,t,t.firstChild)},s.prototype._setNumVisibleImages=function(){const e=document.getElementById(this.options.target).offsetWidth,t=e/instafeedSliderNumVisibleImages,i=5===parseInt(this.options.layout)?parseFloat(t*(16/9)).toFixed(6):t;document.querySelectorAll(".instafeed-new-carousel-item").forEach((e=>{e.style.width=`${t}px`,e.style.height=`${i}px`}));const s=document.querySelector(".instafeed-new-carousel-container");s.style.width=`${e}px`,s.style.height=`${i}px`,window.instafeedSliderStepSize=instafeedSliderNumVisibleImages*t},s.prototype._generateCarouselHTML=function(e){let t="",i=0;for(let s of e)i++,t+=this._imageTemplate(s,i);let s="";return i>instafeedSliderNumVisibleImages&&(s='\n            <button class="instafeed-new-arrow instafeed-new-arrow-prev" onclick="instafeedSliderMove(-1)" style="margin-left:10px;padding-right:2px;">&#10094;</button>\n            <button class="instafeed-new-arrow instafeed-new-arrow-next" onclick="instafeedSliderMove(1)" style="margin-right:10px;padding-left:2px;">&#10095;</button>\n        '),`\n      <div class="instafeed-new-carousel-container">\n          <div class="instafeed-new-carousel-wrapper">\n              ${t}\n          </div>\n          ${s}\n      </div>`},s.prototype._imageTemplate=function(t,i){let s=t.images.standard_resolution,n=parseInt(100-this.options.space,10),o=this._escapeHtml(t.caption.text).substring(0,64),a="";const r=this._generateIcon(t);a="video"===t.type&&1===parseInt(this.options.autoplay,10)?`\n      <video loop playsinline muted class="auto-loop-videos" id="inline-video-${i}-instafeed" preload="none" poster="${s.url}" src="${t.videos.standard_resolution.url}" style="height:${n}%;width:${n}%;"></video>\n      <div class="instafeed-new-carousel-item-container" style="height:${n}%;width:${n}%;" data-instafeed-open-id="${i}-${this.options.target}">\n        <div class="instafeed-hover-layer" data-instafeed-open-id="${i}-${this.options.target}">\n          <span class="instafeed-hover-icon">${r}</span>\n        </div>\n      </div>`:`\n      <img style="height:${n}%;width:${n}%;" class="js-lazy-image" src="//${e}/assets/img/placeholder.gif" data-src="${s.url}" alt="Instagram post with the caption: '${o}...'">\n      <div class="instafeed-new-carousel-item-container" style="height:${n}%;width:${n}%;" data-instafeed-open-id="${i}-${this.options.target}">\n        <div class="instafeed-hover-layer" data-instafeed-open-id="${i}-${this.options.target}">      \n          <div class="instafeed-hover-icon">${r}</div>\n        </div>\n      </div>`;return`\n        <div class="instafeed-new-carousel-item">\n            ${this._generatePostUrl(a,t,i)}\n        </div>`},s.prototype._generatePostUrl=function(e,t,i){const s=parseInt(this.options.openIg,10);return 1===s?`<a href="${t.link}" target="_blank" rel="noopener">${e}</a>`:3===s?`${e}`:e},s.prototype._generateIcon=function(t){if(parseInt(this.options.likes)>0&&5===parseInt(this.options.apiVersion))return`<svg style="height:16px;width:16px;" viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='white'></path></svg>\n              <span style="margin-left:5px;padding-bottom:2px;">${this._shortenLargeNumber(t.likes.count,1)}</span>`;{const i="video"===t.type?"video-icon-v2.svg":"instagram-icon-v2.svg";return`<img src="//${e}/assets/img/${i}" style="height:20px;width:20px;">`}},s.prototype._appendHtmlToParent=function(e,t=document.body,i=null){const s=document.createElement("template");for(s.innerHTML=e;s.content.firstChild;)t.insertBefore(s.content.firstChild,i)},s.prototype._buildUrl=function(){let t,i,s="";if(i=this.options.forceUpdate?1:0,window.location.pathname.includes("/products/")){let e=window.location.pathname.substring(window.location.pathname.indexOf("/products/")+10);e.length>0&&(s="&handle="+e)}return t="https://"+e+"/feed/v"+this.options.apiVersion+"?limit="+this.options.picturesNeeded+"&account="+this.options.shopOrigin+"&fu="+i+"&fid="+this.options.feedId+"&hash="+this.options.hash+"&locale="+this.options.locale+s+"&admin="+ +this.options.admin,t},s.prototype._makeTemplate=function(e,t){return e.replace(/{{([\w[\].]+)}}/g,((e,i)=>{const s=this._getObjectProperty(t,i);return null!==s?s:""}))},s.prototype._getObjectProperty=function(e,t){const i=(t=t.replace(/\[(\w+)\]/g,".$1")).split(".");for(const t of i){if(null===e||!(t in e))return null;e=e[t]}return e},s.prototype._validateCharge=function(e){return parseInt(e)>0},s.prototype._getAutoColumns=function(e){return e<480?2:e<768?3:e<1024?4:e<=1200?5:6},s.prototype._escapeHtml=function(e){return e&&(e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")),e},s.prototype._shortenLargeNumber=function(e,t){const i=["k","M","G","T","P","E","Z","Y"];for(let s=i.length-1;s>=0;s--){const n=Math.pow(1e3,s+1);if(e<=-n||e>=n)return+(e/n).toFixed(t)+i[s]}return e},s.prototype._timeConverter=function(e){return new Date(1e3*e).toLocaleDateString(navigator.language,{month:"long",day:"numeric"})},s.prototype._isMobileDevice=function(e=!1){return!(!this.options.admin||this.options.desktopPreview||!1!==e)||(!this.options.admin||!this.options.desktopPreview||!1!==e)&&window.matchMedia("only screen and (max-width: 768px)").matches},s.prototype._checkClientWidth=function(e,t){0===t.clientWidth?setTimeout((()=>{e._checkClientWidth(e,t)}),100):e.run()},s.prototype._loadCss=function(){if(document.currentScript&&!document.currentScript.src.includes(t)&&!document.currentScript.src.includes(e))return!1;const s=document.createElement("link");s.href=`https://${e}/cdn/instafeed-${i}.css`,s.type="text/css",s.rel="stylesheet",s.media="screen,print",document.head.appendChild(s)},s.prototype._enableLazyLoading=function(){const e=document.querySelectorAll(".js-lazy-image"),t={rootMargin:"100px 0px",threshold:.01};let i,s=e.length;function n(e){const t=e.dataset.src;var i;if(t.includes("https://"))return(i=t,new Promise(((e,t)=>{const s=new Image;s.src=i,s.onload=e,s.onerror=t}))).then((()=>{!function(e,t){e.classList.add("js-lazy-image--handled"),e.src=t}(e,t)})).catch((e=>{console.log(e)}))}"IntersectionObserver"in window&&e.length?(i=new IntersectionObserver((function(e){0===s&&i.disconnect();e.forEach((e=>{e.intersectionRatio>0&&(s--,i.unobserve(e.target),n(e.target))}))}),t),e.forEach((e=>{e.classList.contains("js-lazy-image--handled")||i.observe(e)}))):function(e){e.forEach((e=>n(e)))}(e)},s.prototype._observeAndPlayVideos=function(){const e=document.querySelectorAll(".auto-loop-videos");if(!("IntersectionObserver"in window))return void console.warn("IntersectionObserver not supported. Videos will not autoplay.");const t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const i=e.target;i.play(),t.unobserve(i)}}))}),{threshold:.5});e.forEach((e=>t.observe(e)))},s}();!function(e,t){e.Instafeed=n}(this),function(){var e,t;function i(e){return`video-${String(e).split("-")[0]}-instafeed`}function n(t){const i=document.getElementById(t);i&&(i.style.setProperty("display","none","important"),document.body.style.overflowY="visible",instafeedModalOpen=null,document.removeEventListener("keydown",e,!1))}window.instafeedModalOpen=null,document.addEventListener("click",(function(o){if(!o.target||!o.target.hasAttribute("data-instafeed-open-id")&&!o.target.hasAttribute("data-instafeed-close-id"))return!1;var a=o.target.hasAttribute("data-instafeed-open-id")?o.target.getAttribute("data-instafeed-open-id"):o.target.getAttribute("data-instafeed-close-id"),r=document.getElementById(i(t)),d=document.getElementById(i(a));if(d&&(d.onplay=()=>{null===instafeedModalOpen&&d.pause()}),r&&r.pause(),o.target.hasAttribute("data-instafeed-open-id")){const t=document.getElementById(a);if(t){instafeedModalOpen&&n(instafeedModalOpen),instafeedModalOpen=a,t.style.setProperty("display","block","important"),document.body.style.overflowY="hidden",d&&d.play();const i="#close-button-url, .follow",{firstFocusableElement:o,lastFocusableElement:r}=function(e,t){const i=e.querySelectorAll(t),s=i[0],n=i[i.length-1];return{firstFocusableElement:s,lastFocusableElement:n}}(t,i);e=e=>{!function(e,t,i){s;let n="Tab"===e.key||9===e.keyCode;if(!n)return;e.shiftKey?document.activeElement===t&&(i.focus(),e.preventDefault()):document.activeElement===i&&(t.focus(),e.preventDefault())}(e,o,r)},document.addEventListener("keydown",e,!1),t.focus()}}o.target.hasAttribute("data-instafeed-close-id")&&n(a),t=a})),window.addEventListener("keydown",(e=>{"Escape"===e.key&&instafeedModalOpen&&n(instafeedModalOpen)}))}(),window.instafeedSliderCurrentTransform=0,window.instafeedSliderMinTransform=0,window.instafeedSliderMove=e=>{const t=Math.ceil(instafeedSliderTotalImages/instafeedSliderNumVisibleImages)-1,i=instafeedSliderStepSize*t;instafeedSliderCurrentTransform+=e*-instafeedSliderStepSize,instafeedSliderCurrentTransform<-i&&(instafeedSliderCurrentTransform=instafeedSliderMinTransform),instafeedSliderCurrentTransform>instafeedSliderMinTransform&&(instafeedSliderCurrentTransform=-i),document.querySelector(".instafeed-new-carousel-wrapper").style.transform=`translateX(${instafeedSliderCurrentTransform}px)`},function(e,t){"use strict";"function"!=typeof e.CustomEvent&&(e.CustomEvent=function(e,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var s=t.createEvent("CustomEvent");return s.initCustomEvent(e,i.bubbles,i.cancelable,i.detail),s},e.CustomEvent.prototype=e.Event.prototype),t.addEventListener("touchstart",(function(e){"true"!==e.target.getAttribute("data-swipe-ignore")&&(r=e.target,a=Date.now(),i=e.touches[0].clientX,s=e.touches[0].clientY,n=0,o=0)}),!1),t.addEventListener("touchmove",(function(e){if(i&&s){var t=e.touches[0].clientX,a=e.touches[0].clientY;n=i-t,o=s-a}}),!1),t.addEventListener("touchend",(function(e){if(r===e.target){var l=parseInt(d(r,"data-swipe-threshold","20"),10),p=d(r,"data-swipe-unit","px"),c=parseInt(d(r,"data-swipe-timeout","500"),10),u=Date.now()-a,h="",g=e.changedTouches||e.touches||[];if("vh"===p&&(l=Math.round(l/100*t.documentElement.clientHeight)),"vw"===p&&(l=Math.round(l/100*t.documentElement.clientWidth)),Math.abs(n)>Math.abs(o)?Math.abs(n)>l&&u<c&&(h=n>0?"swiped-left":"swiped-right"):Math.abs(o)>l&&u<c&&(h=o>0?"swiped-up":"swiped-down"),""!==h){var m={dir:h.replace(/swiped-/,""),touchType:(g[0]||{}).touchType||"direct",xStart:parseInt(i,10),xEnd:parseInt((g[0]||{}).clientX||-1,10),yStart:parseInt(s,10),yEnd:parseInt((g[0]||{}).clientY||-1,10)};r.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:m})),r.dispatchEvent(new CustomEvent(h,{bubbles:!0,cancelable:!0,detail:m}))}i=null,s=null,a=null}}),!1);var i=null,s=null,n=null,o=null,a=null,r=null;function d(e,i,s){for(;e&&e!==t.documentElement;){var n=e.getAttribute(i);if(n)return n;e=e.parentNode}return s}}(window,document);if(document.getElementById('insta-feed')!==null){var feed=new Instafeed({account:'',hash:'6b3f6422998e77d93e9430ef573eeb2c',apiVersion:4,shopOrigin:'layers-skin-shop.myshopify.com',title:'FOLLOW US ON INSTAGRAM',openIg:1,space:1,likes:1,showFollowers:0,layout:0,filter:'',public:0,columns:4,columnsMobile:4,rows:2,rowsMobile:2,autoplay:0,autoLayout:0,feedId:0,charge:'0'});feed.run();}return instafeedLoad;})();window.addEventListener('resize',((lastWidth)=>()=>window.innerWidth!==lastWidth&&(lastWidth=window.innerWidth,instafeedApp()))(window.innerWidth));document.addEventListener('shopify:section:load',()=>{instafeedApp()});