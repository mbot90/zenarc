customElements.get("product-form")||customElements.define("product-form",class extends HTMLElement{constructor(){super(),this.form=this.querySelector("form"),this.variantIdInput.disabled=!1,this.form.addEventListener("submit",this.onSubmitHandler.bind(this)),this.cart=document.querySelector("cart-notification")||document.querySelector("cart-drawer"),this.submitButton=this.querySelector('[type="submit"]'),this.submitButtonText=this.submitButton.querySelector("span"),document.querySelector("cart-drawer")&&this.submitButton.setAttribute("aria-haspopup","dialog"),this.hideErrors=this.dataset.hideErrors==="true"}onSubmitHandler(evt){if(evt.preventDefault(),this.submitButton.getAttribute("aria-disabled")==="true")return;this.handleErrorMessage(),this.submitButton.setAttribute("aria-disabled",!0),this.submitButton.classList.add("loading"),this.querySelector(".loading__spinner").classList.remove("hidden");var config="";const formData=new FormData(this.form);if(this.cart&&(formData.append("sections",this.cart.getSectionsToRender().map(section=>section.id)),formData.append("sections_url",window.location.pathname),this.cart.setActiveElement(document.activeElement)),formData.get("id")!=46994527486189&&formData.get("id")!=46994499436781&&formData.get("id")!=46994527518957)config=fetchConfig("javascript"),config.headers["X-Requested-With"]="XMLHttpRequest",delete config.headers["Content-Type"],config.body=formData;else{const items=[{id:formData.get("id"),quantity:1},{id:"47362767585517",quantity:1}];config={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({items,sections:this.cart.getSectionsToRender().map(section=>section.id)})}}document.body.id;{const select_custom_model=document.querySelector("#select_custom_model");if(select_custom_model&&select_custom_model.value=="-1"){const this__=this;setTimeout(function(){this__.submitButton.classList.remove("loading"),this__.cart&&this__.cart.classList.contains("is-empty")&&this__.cart.classList.remove("is-empty"),this__.error||this__.submitButton.removeAttribute("aria-disabled"),this__.querySelector(".loading__spinner").classList.add("hidden")},1e3),this.handleErrorMessage("Please select model name");return}}fetch(`${routes.cart_add_url}${formData.get("id")!=46994527486189&&formData.get("id")!=46994499436781&&formData.get("id")!=46994527518957?"":".js"}`,config).then(response=>response.json()).then(response=>{if(response.status){publish(PUB_SUB_EVENTS.cartError,{source:"product-form",productVariantId:formData.get("id"),errors:response.errors||response.description,message:response.message}),this.handleErrorMessage(response.description);const soldOutMessage=this.submitButton.querySelector(".sold-out-message");if(!soldOutMessage)return;this.submitButton.setAttribute("aria-disabled",!0),this.submitButtonText.classList.add("hidden"),soldOutMessage.classList.remove("hidden"),this.error=!0;return}else if(!this.cart){window.location=window.routes.cart_url;return}this.error||publish(PUB_SUB_EVENTS.cartUpdate,{source:"product-form",productVariantId:formData.get("id"),cartData:response}),this.error=!1;const quickAddModal=this.closest("quick-add-modal");quickAddModal?(document.body.addEventListener("modalClosed",()=>{setTimeout(()=>{this.cart.renderContents(response)})},{once:!0}),quickAddModal.hide(!0)):this.cart.renderContents(response)}).catch(e=>{console.error(e)}).finally(()=>{this.submitButton.classList.remove("loading"),this.cart&&this.cart.classList.contains("is-empty")&&this.cart.classList.remove("is-empty"),this.error||this.submitButton.removeAttribute("aria-disabled"),this.querySelector(".loading__spinner").classList.add("hidden")})}handleErrorMessage(errorMessage=!1){this.hideErrors||(this.errorMessageWrapper=this.errorMessageWrapper||this.querySelector(".product-form__error-message-wrapper"),this.errorMessageWrapper&&(this.errorMessage=this.errorMessage||this.errorMessageWrapper.querySelector(".product-form__error-message"),this.errorMessageWrapper.toggleAttribute("hidden",!errorMessage),errorMessage&&(this.errorMessage.textContent=errorMessage)))}toggleSubmitButton(disable=!0,text,variant=0){disable?(this.submitButton.setAttribute("disabled","disabled"),text&&(this.submitButtonText.textContent=text)):this.submitButton.removeAttribute("disabled")}get variantIdInput(){return this.form.querySelector("[name=id]")}});
//# sourceMappingURL=/cdn/shop/t/154/assets/product-form.js.map?v=42578536828706475921733488261
