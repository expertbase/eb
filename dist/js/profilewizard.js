
// dropzone 6
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function s(e,i){return!i||"object"!=((n=i)&&n.constructor===Symbol?"symbol":typeof n)&&"function"!=typeof i?t(e):i;var n}var u;function c(e){return Array.isArray(e)||"[object Object]"=={}.toString.call(e)}function d(e){return!e||"object"!=typeof e&&"function"!=typeof e}u=function e(){var t=[].slice.call(arguments),i=!1;"boolean"==typeof t[0]&&(i=t.shift());var n=t[0];if(d(n))throw new Error("extendee must be an object");for(var r=t.slice(1),a=r.length,o=0;o<a;o++){var l=r[o];for(var s in l)if(Object.prototype.hasOwnProperty.call(l,s)){var u=l[s];if(i&&c(u)){var h=Array.isArray(u)?[]:{};n[s]=e(!0,Object.prototype.hasOwnProperty.call(n,s)&&!d(n[s])?n[s]:h,u)}else n[s]=u}}return n};var h=function(){"use strict";function e(){i(this,e)}return r(e,[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];this._callbacks=this._callbacks||{};var r=this._callbacks[e],a=!0,o=!1,l=void 0;if(r)try{for(var s,u=r[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var c=s.value;c.apply(this,i)}}catch(e){o=!0,l=e}finally{try{a||null==u.return||u.return()}finally{if(o)throw l}}return this.element&&this.element.dispatchEvent(this.makeEvent("dropzone:"+e,{args:i})),this}},{key:"makeEvent",value:function(e,t){var i={bubbles:!0,cancelable:!0,detail:t};if("function"==typeof window.CustomEvent)return new CustomEvent(e,i);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,i.bubbles,i.cancelable,i.detail),n}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var i=this._callbacks[e];if(!i)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(var n=0;n<i.length;n++){var r=i[n];if(r===t){i.splice(n,1);break}}return this}}]),e}();var p={url:null,method:"post",withCredentials:!1,timeout:null,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,disablePreviews:!1,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(e,t,i){if(i)return{dzuuid:i.file.upload.uuid,dzchunkindex:i.index,dztotalfilesize:i.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:i.file.upload.totalChunkCount,dzchunkbyteoffset:i.index*this.options.chunkSize}},accept:function(e,t){return t()},chunksUploaded:function(e,t){t()},fallback:function(){var e;this.element.className="".concat(this.element.className," dz-browser-not-supported");var t=!0,i=!1,n=void 0;try{for(var r,a=this.element.getElementsByTagName("div")[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var o=r.value;if(/(^| )dz-message($| )/.test(o.className)){e=o,o.className="dz-message";break}}}catch(e){i=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(i)throw n}}e||(e=f.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e));var l=e.getElementsByTagName("span")[0];return l&&(null!=l.textContent?l.textContent=this.options.dictFallbackMessage:null!=l.innerText&&(l.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,i,n){var r={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},a=e.width/e.height;null==t&&null==i?(t=r.srcWidth,i=r.srcHeight):null==t?t=i*a:null==i&&(i=t/a);var o=(t=Math.min(t,r.srcWidth))/(i=Math.min(i,r.srcHeight));if(r.srcWidth>t||r.srcHeight>i)if("crop"===n)a>o?(r.srcHeight=e.height,r.srcWidth=r.srcHeight*o):(r.srcWidth=e.width,r.srcHeight=r.srcWidth/o);else{if("contain"!==n)throw new Error("Unknown resizeMethod '".concat(n,"'"));a>o?i=t/a:t=i*a}return r.srcX=(e.width-r.srcWidth)/2,r.srcY=(e.height-r.srcHeight)/2,r.trgWidth=t,r.trgHeight=i,r},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:e('<div class="dz-file-preview dz-preview"> <div class="dz-image"><img data-dz-thumbnail=""></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size=""></span></div> <div class="dz-filename"><span data-dz-name=""></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress=""></span> </div> <div class="dz-error-message"><span data-dz-errormessage=""></span></div> <div class="dz-success-mark"> <svg width="54" height="54" fill="#fff"><path d="m10.207 29.793 4.086-4.086a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 0 1.414 0l15.586-15.586a1 1 0 0 1 1.414 0l4.086 4.086a1 1 0 0 1 0 1.414L22.707 42.293a1 1 0 0 1-1.414 0L10.207 31.207a1 1 0 0 1 0-1.414Z"/></svg> </div> <div class="dz-error-mark"> <svg width="54" height="54" fill="#fff"><path d="m26.293 20.293-7.086-7.086a1 1 0 0 0-1.414 0l-4.586 4.586a1 1 0 0 0 0 1.414l7.086 7.086a1 1 0 0 1 0 1.414l-7.086 7.086a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l7.086-7.086a1 1 0 0 1 1.414 0l7.086 7.086a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7.086-7.086a1 1 0 0 1 0-1.414l7.086-7.086a1 1 0 0 0 0-1.414l-4.586-4.586a1 1 0 0 0-1.414 0l-7.086 7.086a1 1 0 0 1-1.414 0Z"/></svg> </div> </div>'),drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:function(e){},dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:function(e){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer&&!this.options.disablePreviews){var t=this;e.previewElement=f.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement);var i=!0,n=!1,r=void 0;try{for(var a,o=e.previewElement.querySelectorAll("[data-dz-name]")[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var l=a.value;l.textContent=e.name}}catch(e){n=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(n)throw r}}var s=!0,u=!1,c=void 0;try{for(var d,h=e.previewElement.querySelectorAll("[data-dz-size]")[Symbol.iterator]();!(s=(d=h.next()).done);s=!0)(l=d.value).innerHTML=this.filesize(e.size)}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}this.options.addRemoveLinks&&(e._removeLink=f.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile,"</a>")),e.previewElement.appendChild(e._removeLink));var p=function(i){var n=t;if(i.preventDefault(),i.stopPropagation(),e.status===f.UPLOADING)return f.confirm(t.options.dictCancelUploadConfirmation,(function(){return n.removeFile(e)}));var r=t;return t.options.dictRemoveFileConfirmation?f.confirm(t.options.dictRemoveFileConfirmation,(function(){return r.removeFile(e)})):t.removeFile(e)},m=!0,v=!1,y=void 0;try{for(var g,b=e.previewElement.querySelectorAll("[data-dz-remove]")[Symbol.iterator]();!(m=(g=b.next()).done);m=!0){g.value.addEventListener("click",p)}}catch(e){v=!0,y=e}finally{try{m||null==b.return||b.return()}finally{if(v)throw y}}}},removedfile:function(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");var i=!0,n=!1,r=void 0;try{for(var a,o=e.previewElement.querySelectorAll("[data-dz-thumbnail]")[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var l=a.value;l.alt=e.name,l.src=t}}catch(e){n=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(n)throw r}}return setTimeout((function(){return e.previewElement.classList.add("dz-image-preview")}),1)}},error:function(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"string"!=typeof t&&t.error&&(t=t.error);var i=!0,n=!1,r=void 0;try{for(var a,o=e.previewElement.querySelectorAll("[data-dz-errormessage]")[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){a.value.textContent=t}}catch(e){n=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(n)throw r}}}},errormultiple:function(){},processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(e,t,i){var n=!0,r=!1,a=void 0;if(e.previewElement)try{for(var o,l=e.previewElement.querySelectorAll("[data-dz-uploadprogress]")[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;"PROGRESS"===s.nodeName?s.value=t:s.style.width="".concat(t,"%")}}catch(e){r=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(e){return this.emit("error",e,this.options.dictUploadCanceled)},canceledmultiple:function(){},complete:function(e){if(e._removeLink&&(e._removeLink.innerHTML=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}},f=function(n){"use strict";function o(n,r){var l,c,d,h;if(i(this,o),(l=s(this,(c=o,a(c)).call(this))).element=n,l.clickableElements=[],l.listeners=[],l.files=[],"string"==typeof l.element&&(l.element=document.querySelector(l.element)),!l.element||null==l.element.nodeType)throw new Error("Invalid dropzone element.");if(l.element.dropzone)throw new Error("Dropzone already attached.");o.instances.push(t(l)),l.element.dropzone=t(l);var f=null!=(h=o.optionsForElement(l.element))?h:{};if(l.options=e(u)(!0,{},p,f,null!=r?r:{}),l.options.previewTemplate=l.options.previewTemplate.replace(/\n*/g,""),l.options.forceFallback||!o.isBrowserSupported())return s(l,l.options.fallback.call(t(l)));if(null==l.options.url&&(l.options.url=l.element.getAttribute("action")),!l.options.url)throw new Error("No URL provided.");if(l.options.acceptedFiles&&l.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(l.options.uploadMultiple&&l.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");return l.options.acceptedMimeTypes&&(l.options.acceptedFiles=l.options.acceptedMimeTypes,delete l.options.acceptedMimeTypes),null!=l.options.renameFilename&&(l.options.renameFile=function(e){return l.options.renameFilename.call(t(l),e.name,e)}),"string"==typeof l.options.method&&(l.options.method=l.options.method.toUpperCase()),(d=l.getExistingFallback())&&d.parentNode&&d.parentNode.removeChild(d),!1!==l.options.previewsContainer&&(l.options.previewsContainer?l.previewsContainer=o.getElement(l.options.previewsContainer,"previewsContainer"):l.previewsContainer=l.element),l.options.clickable&&(!0===l.options.clickable?l.clickableElements=[l.element]:l.clickableElements=o.getElements(l.options.clickable,"clickable")),l.init(),l}return l(o,n),r(o,[{key:"getAcceptedFiles",value:function(){return this.files.filter((function(e){return e.accepted})).map((function(e){return e}))}},{key:"getRejectedFiles",value:function(){return this.files.filter((function(e){return!e.accepted})).map((function(e){return e}))}},{key:"getFilesWithStatus",value:function(e){return this.files.filter((function(t){return t.status===e})).map((function(e){return e}))}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(o.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(o.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(o.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter((function(e){return e.status===o.UPLOADING||e.status===o.QUEUED})).map((function(e){return e}))}},{key:"init",value:function(){var e=this,t=this,i=this,n=this,r=this,a=this,l=this,s=this,u=this,c=this,d=this;if("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(o.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage,"</button></div>"))),this.clickableElements.length){var h=this,p=function(){var e=h;h.hiddenFileInput&&h.hiddenFileInput.parentNode.removeChild(h.hiddenFileInput),h.hiddenFileInput=document.createElement("input"),h.hiddenFileInput.setAttribute("type","file"),(null===h.options.maxFiles||h.options.maxFiles>1)&&h.hiddenFileInput.setAttribute("multiple","multiple"),h.hiddenFileInput.className="dz-hidden-input",null!==h.options.acceptedFiles&&h.hiddenFileInput.setAttribute("accept",h.options.acceptedFiles),null!==h.options.capture&&h.hiddenFileInput.setAttribute("capture",h.options.capture),h.hiddenFileInput.setAttribute("tabindex","-1"),h.hiddenFileInput.style.visibility="hidden",h.hiddenFileInput.style.position="absolute",h.hiddenFileInput.style.top="0",h.hiddenFileInput.style.left="0",h.hiddenFileInput.style.height="0",h.hiddenFileInput.style.width="0",o.getElement(h.options.hiddenInputContainer,"hiddenInputContainer").appendChild(h.hiddenFileInput),h.hiddenFileInput.addEventListener("change",(function(){var t=e.hiddenFileInput.files,i=!0,n=!1,r=void 0;if(t.length)try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var l=a.value;e.addFile(l)}}catch(e){n=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(n)throw r}}e.emit("addedfiles",t),p()}))};p()}this.URL=null!==window.URL?window.URL:window.webkitURL;var f=!0,m=!1,v=void 0;try{for(var y,g=this.events[Symbol.iterator]();!(f=(y=g.next()).done);f=!0){var b=y.value;this.on(b,this.options[b])}}catch(e){m=!0,v=e}finally{try{f||null==g.return||g.return()}finally{if(m)throw v}}this.on("uploadprogress",(function(){return e.updateTotalUploadProgress()})),this.on("removedfile",(function(){return t.updateTotalUploadProgress()})),this.on("canceled",(function(e){return i.emit("complete",e)})),this.on("complete",(function(e){var t=n;if(0===n.getAddedFiles().length&&0===n.getUploadingFiles().length&&0===n.getQueuedFiles().length)return setTimeout((function(){return t.emit("queuecomplete")}),0)}));var k=function(e){if(function(e){if(e.dataTransfer.types)for(var t=0;t<e.dataTransfer.types.length;t++)if("Files"===e.dataTransfer.types[t])return!0;return!1}(e))return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:function(e){return r.emit("dragstart",e)},dragenter:function(e){return k(e),a.emit("dragenter",e)},dragover:function(e){var t;try{t=e.dataTransfer.effectAllowed}catch(e){}return e.dataTransfer.dropEffect="move"===t||"linkMove"===t?"move":"copy",k(e),l.emit("dragover",e)},dragleave:function(e){return s.emit("dragleave",e)},drop:function(e){return k(e),u.drop(e)},dragend:function(e){return c.emit("dragend",e)}}}],this.clickableElements.forEach((function(e){var t=d;return d.listeners.push({element:e,events:{click:function(i){return(e!==t.element||i.target===t.element||o.elementInside(i.target,t.element.querySelector(".dz-message")))&&t.hiddenFileInput.click(),!0}}})})),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),(null!=this.hiddenFileInput?this.hiddenFileInput.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,o.instances.splice(o.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var e,t=0,i=0;if(this.getActiveFiles().length){var n=!0,r=!1,a=void 0;try{for(var o,l=this.getActiveFiles()[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;t+=s.upload.bytesSent,i+=s.upload.total}}catch(e){r=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}e=100*t/i}else e=100;return this.emit("totaluploadprogress",e,i,t)}},{key:"_getParamName",value:function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):"".concat(this.options.paramName).concat(this.options.uploadMultiple?"[".concat(e,"]"):"")}},{key:"_renameFile",value:function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}},{key:"getFallbackForm",value:function(){var e,t;if(e=this.getExistingFallback())return e;var i='<div class="dz-fallback">';this.options.dictFallbackText&&(i+="<p>".concat(this.options.dictFallbackText,"</p>")),i+='<input type="file" name="'.concat(this._getParamName(0),'" ').concat(this.options.uploadMultiple?'multiple="multiple"':void 0,' /><input type="submit" value="Upload!"></div>');var n=o.createElement(i);return"FORM"!==this.element.tagName?(t=o.createElement('<form action="'.concat(this.options.url,'" enctype="multipart/form-data" method="').concat(this.options.method,'"></form>'))).appendChild(n):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=t?t:n}},{key:"getExistingFallback",value:function(){var e=function(e){var t=!0,i=!1,n=void 0;try{for(var r,a=e[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var o=r.value;if(/(^| )fallback($| )/.test(o.className))return o}}catch(e){i=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(i)throw n}}},t=!0,i=!1,n=void 0;try{for(var r,a=["div","form"][Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var o,l=r.value;if(o=e(this.element.getElementsByTagName(l)))return o}}catch(e){i=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(i)throw n}}}},{key:"setupEventListeners",value:function(){return this.listeners.map((function(e){return function(){var t=[];for(var i in e.events){var n=e.events[i];t.push(e.element.addEventListener(i,n,!1))}return t}()}))}},{key:"removeEventListeners",value:function(){return this.listeners.map((function(e){return function(){var t=[];for(var i in e.events){var n=e.events[i];t.push(e.element.removeEventListener(i,n,!1))}return t}()}))}},{key:"disable",value:function(){var e=this;return this.clickableElements.forEach((function(e){return e.classList.remove("dz-clickable")})),this.removeEventListeners(),this.disabled=!0,this.files.map((function(t){return e.cancelUpload(t)}))}},{key:"enable",value:function(){return delete this.disabled,this.clickableElements.forEach((function(e){return e.classList.add("dz-clickable")})),this.setupEventListeners()}},{key:"filesize",value:function(e){var t=0,i="b";if(e>0){for(var n=["tb","gb","mb","kb","b"],r=0;r<n.length;r++){var a=n[r];if(e>=Math.pow(this.options.filesizeBase,4-r)/10){t=e/Math.pow(this.options.filesizeBase,4-r),i=a;break}}t=Math.round(10*t)/10}return"<strong>".concat(t,"</strong> ").concat(this.options.dictFileSizeUnits[i])}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(e){if(e.dataTransfer){this.emit("drop",e);for(var t=[],i=0;i<e.dataTransfer.files.length;i++)t[i]=e.dataTransfer.files[i];if(t.length){var n=e.dataTransfer.items;n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)}this.emit("addedfiles",t)}}},{key:"paste",value:function(e){if(null!=(t=null!=e?e.clipboardData:void 0,i=function(e){return e.items},null!=t?i(t):void 0)){var t,i;this.emit("paste",e);var n=e.clipboardData.items;return n.length?this._addFilesFromItems(n):void 0}}},{key:"handleFiles",value:function(e){var t=!0,i=!1,n=void 0;try{for(var r,a=e[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var o=r.value;this.addFile(o)}}catch(e){i=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(i)throw n}}}},{key:"_addFilesFromItems",value:function(e){var t=this;return function(){var i=[],n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s,u=o.value;null!=u.webkitGetAsEntry&&(s=u.webkitGetAsEntry())?s.isFile?i.push(t.addFile(u.getAsFile())):s.isDirectory?i.push(t._addFilesFromDirectory(s,s.name)):i.push(void 0):null!=u.getAsFile&&(null==u.kind||"file"===u.kind)?i.push(t.addFile(u.getAsFile())):i.push(void 0)}}catch(e){r=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return i}()}},{key:"_addFilesFromDirectory",value:function(e,t){var i=this,n=e.createReader(),r=function(e){return t=console,i="log",n=function(t){return t.log(e)},null!=t&&"function"==typeof t[i]?n(t,i):void 0;var t,i,n},a=function(){var e=i;return n.readEntries((function(i){if(i.length>0){var n=!0,r=!1,o=void 0;try{for(var l,s=i[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var u=l.value,c=e;u.isFile?u.file((function(e){if(!c.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath="".concat(t,"/").concat(e.name),c.addFile(e)})):u.isDirectory&&e._addFilesFromDirectory(u,"".concat(t,"/").concat(u.name))}}catch(e){r=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}a()}return null}),r)};return a()}},{key:"accept",value:function(e,t){this.options.maxFilesize&&e.size>1048576*this.options.maxFilesize?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):o.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}},{key:"addFile",value:function(e){var t=this;e.upload={uuid:o.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e)},this.files.push(e),e.status=o.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,(function(i){i?(e.accepted=!1,t._errorProcessing([e],i)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}))}},{key:"enqueueFiles",value:function(e){var t=!0,i=!1,n=void 0;try{for(var r,a=e[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var o=r.value;this.enqueueFile(o)}}catch(e){i=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(i)throw n}}return null}},{key:"enqueueFile",value:function(e){if(e.status!==o.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");var t=this;if(e.status=o.QUEUED,this.options.autoProcessQueue)return setTimeout((function(){return t.processQueue()}),0)}},{key:"_enqueueThumbnail",value:function(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1048576*this.options.maxThumbnailFilesize){var t=this;return this._thumbnailQueue.push(e),setTimeout((function(){return t._processThumbnailQueue()}),0)}}},{key:"_processThumbnailQueue",value:function(){var e=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0;var t=this._thumbnailQueue.shift();return this.createThumbnail(t,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,(function(i){return e.emit("thumbnail",t,i),e._processingThumbnail=!1,e._processThumbnailQueue()}))}}},{key:"removeFile",value:function(e){if(e.status===o.UPLOADING&&this.cancelUpload(e),this.files=m(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(e){null==e&&(e=!1);var t=!0,i=!1,n=void 0;try{for(var r,a=this.files.slice()[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var l=r.value;(l.status!==o.UPLOADING||e)&&this.removeFile(l)}}catch(e){i=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(i)throw n}}return null}},{key:"resizeImage",value:function(e,t,i,n,r){var a=this;return this.createThumbnail(e,t,i,n,!0,(function(t,i){if(null==i)return r(e);var n=a.options.resizeMimeType;null==n&&(n=e.type);var l=i.toDataURL(n,a.options.resizeQuality);return"image/jpeg"!==n&&"image/jpg"!==n||(l=g.restore(e.dataURL,l)),r(o.dataURItoBlob(l))}))}},{key:"createThumbnail",value:function(e,t,i,n,r,a){var o=this,l=new FileReader;l.onload=function(){e.dataURL=l.result,"image/svg+xml"!==e.type?o.createThumbnailFromUrl(e,t,i,n,r,a):null!=a&&a(l.result)},l.readAsDataURL(e)}},{key:"displayExistingFile",value:function(e,t,i,n,r){var a=void 0===r||r;if(this.emit("addedfile",e),this.emit("complete",e),a){var o=this;e.dataURL=t,this.createThumbnailFromUrl(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,this.options.fixOrientation,(function(t){o.emit("thumbnail",e,t),i&&i()}),n)}else this.emit("thumbnail",e,t),i&&i()}},{key:"createThumbnailFromUrl",value:function(e,t,i,n,r,a,o){var l=this,s=document.createElement("img");return o&&(s.crossOrigin=o),r="from-image"!=getComputedStyle(document.body).imageOrientation&&r,s.onload=function(){var o=l,u=function(e){return e(1)};return"undefined"!=typeof EXIF&&null!==EXIF&&r&&(u=function(e){return EXIF.getData(s,(function(){return e(EXIF.getTag(this,"Orientation"))}))}),u((function(r){e.width=s.width,e.height=s.height;var l=o.options.resize.call(o,e,t,i,n),u=document.createElement("canvas"),c=u.getContext("2d");switch(u.width=l.trgWidth,u.height=l.trgHeight,r>4&&(u.width=l.trgHeight,u.height=l.trgWidth),r){case 2:c.translate(u.width,0),c.scale(-1,1);break;case 3:c.translate(u.width,u.height),c.rotate(Math.PI);break;case 4:c.translate(0,u.height),c.scale(1,-1);break;case 5:c.rotate(.5*Math.PI),c.scale(1,-1);break;case 6:c.rotate(.5*Math.PI),c.translate(0,-u.width);break;case 7:c.rotate(.5*Math.PI),c.translate(u.height,-u.width),c.scale(-1,1);break;case 8:c.rotate(-.5*Math.PI),c.translate(-u.height,0)}y(c,s,null!=l.srcX?l.srcX:0,null!=l.srcY?l.srcY:0,l.srcWidth,l.srcHeight,null!=l.trgX?l.trgX:0,null!=l.trgY?l.trgY:0,l.trgWidth,l.trgHeight);var d=u.toDataURL("image/png");if(null!=a)return a(d,u)}))},null!=a&&(s.onerror=a),s.src=e.dataURL}},{key:"processQueue",value:function(){var e=this.options.parallelUploads,t=this.getUploadingFiles().length,i=t;if(!(t>=e)){var n=this.getQueuedFiles();if(n.length>0){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,e-t));for(;i<e;){if(!n.length)return;this.processFile(n.shift()),i++}}}}},{key:"processFile",value:function(e){return this.processFiles([e])}},{key:"processFiles",value:function(e){var t=!0,i=!1,n=void 0;try{for(var r,a=e[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var l=r.value;l.processing=!0,l.status=o.UPLOADING,this.emit("processing",l)}}catch(e){i=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(i)throw n}}return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}},{key:"_getFilesWithXhr",value:function(e){return this.files.filter((function(t){return t.xhr===e})).map((function(e){return e}))}},{key:"cancelUpload",value:function(e){if(e.status===o.UPLOADING){var t=this._getFilesWithXhr(e.xhr),i=!0,n=!1,r=void 0;try{for(var a,l=t[Symbol.iterator]();!(i=(a=l.next()).done);i=!0){(p=a.value).status=o.CANCELED}}catch(e){n=!0,r=e}finally{try{i||null==l.return||l.return()}finally{if(n)throw r}}void 0!==e.xhr&&e.xhr.abort();var s=!0,u=!1,c=void 0;try{for(var d,h=t[Symbol.iterator]();!(s=(d=h.next()).done);s=!0){var p=d.value;this.emit("canceled",p)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}this.options.uploadMultiple&&this.emit("canceledmultiple",t)}else e.status!==o.ADDED&&e.status!==o.QUEUED||(e.status=o.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return"function"==typeof e?e.apply(this,i):e}},{key:"uploadFile",value:function(e){return this.uploadFiles([e])}},{key:"uploadFiles",value:function(e){var t=this;this._transformFiles(e,(function(i){if(t.options.chunking){var n=i[0];e[0].upload.chunked=t.options.chunking&&(t.options.forceChunking||n.size>t.options.chunkSize),e[0].upload.totalChunkCount=Math.ceil(n.size/t.options.chunkSize)}if(e[0].upload.chunked){var r=t,a=t,l=e[0];n=i[0];l.upload.chunks=[];var s=function(){for(var t=0;void 0!==l.upload.chunks[t];)t++;if(!(t>=l.upload.totalChunkCount)){0;var i=t*r.options.chunkSize,a=Math.min(i+r.options.chunkSize,n.size),s={name:r._getParamName(0),data:n.webkitSlice?n.webkitSlice(i,a):n.slice(i,a),filename:l.upload.filename,chunkIndex:t};l.upload.chunks[t]={file:l,index:t,dataBlock:s,status:o.UPLOADING,progress:0,retries:0},r._uploadData(e,[s])}};if(l.upload.finishedChunkUpload=function(t,i){var n=a,r=!0;t.status=o.SUCCESS,t.dataBlock=null,t.xhr=null;for(var u=0;u<l.upload.totalChunkCount;u++){if(void 0===l.upload.chunks[u])return s();l.upload.chunks[u].status!==o.SUCCESS&&(r=!1)}r&&a.options.chunksUploaded(l,(function(){n._finished(e,i,null)}))},t.options.parallelChunkUploads)for(var u=0;u<l.upload.totalChunkCount;u++)s();else s()}else{var c=[];for(u=0;u<e.length;u++)c[u]={name:t._getParamName(u),data:i[u],filename:e[u].upload.filename};t._uploadData(e,c)}}))}},{key:"_getChunk",value:function(e,t){for(var i=0;i<e.upload.totalChunkCount;i++)if(void 0!==e.upload.chunks[i]&&e.upload.chunks[i].xhr===t)return e.upload.chunks[i]}},{key:"_uploadData",value:function(t,i){var n=this,r=this,a=this,o=this,l=new XMLHttpRequest,s=!0,c=!1,d=void 0;try{for(var h,p=t[Symbol.iterator]();!(s=(h=p.next()).done);s=!0){(_=h.value).xhr=l}}catch(e){c=!0,d=e}finally{try{s||null==p.return||p.return()}finally{if(c)throw d}}t[0].upload.chunked&&(t[0].upload.chunks[i[0].chunkIndex].xhr=l);var f=this.resolveOption(this.options.method,t),m=this.resolveOption(this.options.url,t);l.open(f,m,!0),this.resolveOption(this.options.timeout,t)&&(l.timeout=this.resolveOption(this.options.timeout,t)),l.withCredentials=!!this.options.withCredentials,l.onload=function(e){n._finishedUploading(t,l,e)},l.ontimeout=function(){r._handleUploadError(t,l,"Request timedout after ".concat(r.options.timeout/1e3," seconds"))},l.onerror=function(){a._handleUploadError(t,l)},(null!=l.upload?l.upload:l).onprogress=function(e){return o._updateFilesUploadProgress(t,l,e)};var v={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};for(var y in this.options.headers&&e(u)(v,this.options.headers),v){var g=v[y];g&&l.setRequestHeader(y,g)}var b=new FormData;if(this.options.params){var k=this.options.params;for(var w in"function"==typeof k&&(k=k.call(this,t,l,t[0].upload.chunked?this._getChunk(t[0],l):null)),k){var F=k[w];if(Array.isArray(F))for(var E=0;E<F.length;E++)b.append(w,F[E]);else b.append(w,F)}}var x=!0,z=!1,C=void 0;try{for(var S,A=t[Symbol.iterator]();!(x=(S=A.next()).done);x=!0){var _=S.value;this.emit("sending",_,l,b)}}catch(e){z=!0,C=e}finally{try{x||null==A.return||A.return()}finally{if(z)throw C}}this.options.uploadMultiple&&this.emit("sendingmultiple",t,l,b),this._addFormElementData(b);for(E=0;E<i.length;E++){var T=i[E];b.append(T.name,T.data,T.filename)}this.submitRequest(l,b,t)}},{key:"_transformFiles",value:function(e,t){for(var i=this,n=function(n){i.options.transformFile.call(i,e[n],(function(i){r[n]=i,++a===e.length&&t(r)}))},r=[],a=0,o=0;o<e.length;o++)n(o)}},{key:"_addFormElementData",value:function(e){var t=!0,i=!1,n=void 0;if("FORM"===this.element.tagName)try{for(var r=this.element.querySelectorAll("input, textarea, select, button")[Symbol.iterator]();!(t=(s=r.next()).done);t=!0){var a=s.value,o=a.getAttribute("name"),l=a.getAttribute("type");if(l&&(l=l.toLowerCase()),null!=o)if("SELECT"===a.tagName&&a.hasAttribute("multiple")){t=!0,i=!1,n=void 0;try{var s;for(r=a.options[Symbol.iterator]();!(t=(s=r.next()).done);t=!0){var u=s.value;u.selected&&e.append(o,u.value)}}catch(e){i=!0,n=e}finally{try{t||null==r.return||r.return()}finally{if(i)throw n}}}else(!l||"checkbox"!==l&&"radio"!==l||a.checked)&&e.append(o,a.value)}}catch(e){i=!0,n=e}finally{try{t||null==r.return||r.return()}finally{if(i)throw n}}}},{key:"_updateFilesUploadProgress",value:function(e,t,i){var n=!0,r=!1,a=void 0;if(e[0].upload.chunked){c=e[0];var o=this._getChunk(c,t);i?(o.progress=100*i.loaded/i.total,o.total=i.total,o.bytesSent=i.loaded):(o.progress=100,o.bytesSent=o.total),c.upload.progress=0,c.upload.total=0,c.upload.bytesSent=0;for(var l=0;l<c.upload.totalChunkCount;l++)c.upload.chunks[l]&&void 0!==c.upload.chunks[l].progress&&(c.upload.progress+=c.upload.chunks[l].progress,c.upload.total+=c.upload.chunks[l].total,c.upload.bytesSent+=c.upload.chunks[l].bytesSent);c.upload.progress=c.upload.progress/c.upload.totalChunkCount,this.emit("uploadprogress",c,c.upload.progress,c.upload.bytesSent)}else try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var c;(c=s.value).upload.total&&c.upload.bytesSent&&c.upload.bytesSent==c.upload.total||(i?(c.upload.progress=100*i.loaded/i.total,c.upload.total=i.total,c.upload.bytesSent=i.loaded):(c.upload.progress=100,c.upload.bytesSent=c.upload.total),this.emit("uploadprogress",c,c.upload.progress,c.upload.bytesSent))}}catch(e){r=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw a}}}},{key:"_finishedUploading",value:function(e,t,i){var n;if(e[0].status!==o.CANCELED&&4===t.readyState){if("arraybuffer"!==t.responseType&&"blob"!==t.responseType&&(n=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{n=JSON.parse(n)}catch(e){i=e,n="Invalid JSON response from server."}this._updateFilesUploadProgress(e,t),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t),n):this._finished(e,n,i):this._handleUploadError(e,t,n)}}},{key:"_handleUploadError",value:function(e,t,i){if(e[0].status!==o.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){var n=this._getChunk(e[0],t);if(n.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[n.dataBlock]);console.warn("Retried this chunk too often. Giving up.")}this._errorProcessing(e,i||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}},{key:"submitRequest",value:function(e,t,i){1==e.readyState?e.send(t):console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.")}},{key:"_finished",value:function(e,t,i){var n=!0,r=!1,a=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var u=l.value;u.status=o.SUCCESS,this.emit("success",u,t,i),this.emit("complete",u)}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(e,t,i){var n=!0,r=!1,a=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var u=l.value;u.status=o.ERROR,this.emit("error",u,t,i),this.emit("complete",u)}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"initClass",value:function(){this.prototype.Emitter=h,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}}]),o}(h);f.initClass(),f.options={},f.optionsForElement=function(e){return e.getAttribute("id")?f.options[v(e.getAttribute("id"))]:void 0},f.instances=[],f.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},f.discover=function(){var e;if(document.querySelectorAll)e=document.querySelectorAll(".dropzone");else{e=[];var t=function(t){return function(){var i=[],n=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;/(^| )dropzone($| )/.test(s.className)?i.push(e.push(s)):i.push(void 0)}}catch(e){r=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return i}()};t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))}return function(){var t=[],i=!0,n=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var l=a.value;!1!==f.optionsForElement(l)?t.push(new f(l)):t.push(void 0)}}catch(e){n=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(n)throw r}}return t}()},f.blockedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],f.isBrowserSupported=function(){var e=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a")){void 0!==f.blacklistedBrowsers&&(f.blockedBrowsers=f.blacklistedBrowsers);var t=!0,i=!1,n=void 0;try{for(var r,a=f.blockedBrowsers[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){r.value.test(navigator.userAgent)&&(e=!1)}}catch(e){i=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(i)throw n}}}else e=!1;else e=!1;return e},f.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),r=new Uint8Array(n),a=0,o=t.length,l=0<=o;l?a<=o:a>=o;l?a++:a--)r[a]=t.charCodeAt(a);return new Blob([n],{type:i})};var m=function(e,t){return e.filter((function(e){return e!==t})).map((function(e){return e}))},v=function(e){return e.replace(/[\-_](\w)/g,(function(e){return e.charAt(1).toUpperCase()}))};f.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},f.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},f.getElement=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `".concat(t,"` option provided. Please provide a CSS selector or a plain HTML element."));return i},f.getElements=function(e,t){var i,n;if(e instanceof Array){n=[];try{var r=!0,a=!1,o=void 0;try{for(var l=e[Symbol.iterator]();!(r=(s=l.next()).done);r=!0)i=s.value,n.push(this.getElement(i,t))}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}}catch(e){n=null}}else if("string"==typeof e){n=[];r=!0,a=!1,o=void 0;try{var s;for(l=document.querySelectorAll(e)[Symbol.iterator]();!(r=(s=l.next()).done);r=!0)i=s.value,n.push(i)}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}}else null!=e.nodeType&&(n=[e]);if(null==n||!n.length)throw new Error("Invalid `".concat(t,"` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));return n},f.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},f.isValidFile=function(e,t){if(!t)return!0;t=t.split(",");var i=e.type,n=i.replace(/\/.*$/,""),r=!0,a=!1,o=void 0;try{for(var l,s=t[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var u=l.value;if("."===(u=u.trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(u.toLowerCase(),e.name.length-u.length))return!0}else if(/\/\*$/.test(u)){if(n===u.replace(/\/.*$/,""))return!0}else if(i===u)return!0}}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each((function(){return new f(this,e)}))}),f.ADDED="added",f.QUEUED="queued",f.ACCEPTED=f.QUEUED,f.UPLOADING="uploading",f.PROCESSING=f.UPLOADING,f.CANCELED="canceled",f.ERROR="error",f.SUCCESS="success";var y=function(e,t,i,n,r,a,o,l,s,u){var c=function(e){e.naturalWidth;var t=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=t;var n=i.getContext("2d");n.drawImage(e,0,0);for(var r=n.getImageData(1,0,1,t).data,a=0,o=t,l=t;l>a;)0===r[4*(l-1)+3]?o=l:a=l,l=o+a>>1;var s=l/t;return 0===s?1:s}(t);return e.drawImage(t,i,n,r,a,o,l,s,u/c)},g=function(){"use strict";function e(){i(this,e)}return r(e,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(e){for(var t="",i=void 0,n=void 0,r="",a=void 0,o=void 0,l=void 0,s="",u=0;a=(i=e[u++])>>2,o=(3&i)<<4|(n=e[u++])>>4,l=(15&n)<<2|(r=e[u++])>>6,s=63&r,isNaN(n)?l=s=64:isNaN(r)&&(s=64),t=t+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(l)+this.KEY_STR.charAt(s),i=n=r="",a=o=l=s="",u<e.length;);return t}},{key:"restore",value:function(e,t){if(!e.match("data:image/jpeg;base64,"))return t;var i=this.decode64(e.replace("data:image/jpeg;base64,","")),n=this.slice2Segments(i),r=this.exifManipulation(t,n);return"data:image/jpeg;base64,".concat(this.encode64(r))}},{key:"exifManipulation",value:function(e,t){var i=this.getExifArray(t),n=this.insertExif(e,i);return new Uint8Array(n)}},{key:"getExifArray",value:function(e){for(var t=void 0,i=0;i<e.length;){if(255===(t=e[i])[0]&225===t[1])return t;i++}return[]}},{key:"insertExif",value:function(e,t){var i=e.replace("data:image/jpeg;base64,",""),n=this.decode64(i),r=n.indexOf(255,3),a=n.slice(0,r),o=n.slice(r),l=a;return l=(l=l.concat(t)).concat(o)}},{key:"slice2Segments",value:function(e){for(var t=0,i=[];;){if(255===e[t]&218===e[t+1])break;if(255===e[t]&216===e[t+1])t+=2;else{var n=t+(256*e[t+2]+e[t+3])+2,r=e.slice(t,n);i.push(r),t=n}if(t>e.length)break}return i}},{key:"decode64",value:function(e){var t=void 0,i=void 0,n="",r=void 0,a=void 0,o="",l=0,s=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");t=this.KEY_STR.indexOf(e.charAt(l++))<<2|(r=this.KEY_STR.indexOf(e.charAt(l++)))>>4,i=(15&r)<<4|(a=this.KEY_STR.indexOf(e.charAt(l++)))>>2,n=(3&a)<<6|(o=this.KEY_STR.indexOf(e.charAt(l++))),s.push(t),64!==a&&s.push(i),64!==o&&s.push(n),t=i=n="",r=a=o="",l<e.length;);return s}}]),e}();g.initClass();window.Dropzone=f}();




// selectize and formtowizard compiled


(function(c,e){"function"===typeof define&&define.amd?define("sifter",e):"object"===typeof exports?module.exports=e():c.Sifter=e()})(this,function(){var c=function(c,f){this.items=c;this.settings=f||{diacritics:!0}};c.prototype.tokenize=function(c){c=(String(c||"").toLowerCase()+"").replace(/^\s+|\s+$|/g,"");if(!c||!c.length)return[];var f,e,n=[],k=c.split(/ +/);c=0;for(f=k.length;c<f;c++){var l=(k[c]+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");if(this.settings.diacritics)for(e in m)m.hasOwnProperty(e)&&
(l=l.replace(new RegExp(e,"g"),m[e]));n.push({string:k[c],regex:new RegExp(l,"i")})}return n};c.prototype.iterator=function(c,f){(p(c)?Array.prototype.forEach||function(c){for(var f=0,e=this.length;f<e;f++)c(this[f],f,this)}:function(c){for(var f in this)this.hasOwnProperty(f)&&c(this[f],f,this)}).apply(c,[f])};c.prototype.getScoreFunction=function(c,f){c=this.prepareSearch(c,f);var e=c.tokens;var n=c.options.fields;var k=e.length;var l=c.options.nesting;var u=function(c,f){if(!c)return 0;c=String(c||
"");var e=c.search(f.regex);if(-1===e)return 0;var l=f.string.length/c.length;0===e&&(l+=.5);return l},m=function(){var c=n.length;return c?1===c?function(c,f){return u(y(f,n[0],l),c)}:function(f,e){for(var k=0,w=0;k<c;k++)w+=u(y(e,n[k],l),f);return w/c}:function(){return 0}}();return k?1===k?function(c){return m(e[0],c)}:"and"===c.options.conjunction?function(c){for(var f,l=0,n=0;l<k;l++){f=m(e[l],c);if(0>=f)return 0;n+=f}return n/k}:function(c){for(var f=0,l=0;f<k;f++)l+=m(e[f],c);return l/k}:function(){return 0}};
c.prototype.getSortFunction=function(c,f){var n,u;var k=this;c=k.prepareSearch(c,f);var l=!c.query&&f.sort_empty||f.sort;var m=function(c,e){return"$score"===c?e.score:y(k.items[e.id],c,f.nesting)};var v=[];if(l){var t=0;for(n=l.length;t<n;t++)(c.query||"$score"!==l[t].field)&&v.push(l[t])}if(c.query){l=!0;t=0;for(n=v.length;t<n;t++)if("$score"===v[t].field){l=!1;break}l&&v.unshift({field:"$score",direction:"desc"})}else for(t=0,n=v.length;t<n;t++)if("$score"===v[t].field){v.splice(t,1);break}var p=
[];t=0;for(n=v.length;t<n;t++)p.push("desc"===v[t].direction?-1:1);if(u=v.length){if(1===u){var x=v[0].field;var E=p[0];return function(c,f){return E*e(m(x,c),m(x,f))}}return function(c,f){var a;for(a=0;a<u;a++){var b=v[a].field;if(b=p[a]*e(m(b,c),m(b,f)))return b}return 0}}return null};c.prototype.prepareSearch=function(c,f){if("object"===typeof c)return c;f=u({},f);var e=f.fields,n=f.sort,k=f.sort_empty;e&&!p(e)&&(f.fields=[e]);n&&!p(n)&&(f.sort=[n]);k&&!p(k)&&(f.sort_empty=[k]);return{options:f,
query:String(c||"").toLowerCase(),tokens:this.tokenize(c),total:0,items:[]}};c.prototype.search=function(c,f){var e,n;var k=this.prepareSearch(c,f);f=k.options;c=k.query;var l=f.score||this.getScoreFunction(k);c.length?this.iterator(this.items,function(c,n){e=l(c);(!1===f.filter||0<e)&&k.items.push({score:e,id:n})}):this.iterator(this.items,function(c,f){k.items.push({score:1,id:f})});(n=this.getSortFunction(k,f))&&k.items.sort(n);k.total=k.items.length;"number"===typeof f.limit&&(k.items=k.items.slice(0,
f.limit));return k};var e=function(c,f){if("number"===typeof c&&"number"===typeof f)return c>f?1:c<f?-1:0;c=x(String(c||""));f=x(String(f||""));return c>f?1:f>c?-1:0},u=function(c,f){var e,n,k;var l=1;for(e=arguments.length;l<e;l++)if(k=arguments[l])for(n in k)k.hasOwnProperty(n)&&(c[n]=k[n]);return c},y=function(c,f,e){if(c&&f){if(!e)return c[f];for(f=f.split(".");f.length&&(c=c[f.shift()]););return c}},p=Array.isArray||"undefined"!==typeof $&&$.isArray||function(c){return"[object Array]"===Object.prototype.toString.call(c)},
m={a:"[a\u1e00\u1e01\u0102\u0103\u00c2\u00e2\u01cd\u01ce\u023a\u2c65\u0226\u0227\u1ea0\u1ea1\u00c4\u00e4\u00c0\u00e0\u00c1\u00e1\u0100\u0101\u00c3\u00e3\u00c5\u00e5\u0105\u0104\u00c3\u0105\u0104]",b:"[b\u2422\u03b2\u0392B\u0e3f\ud800\udf01\u16d2]",c:"[c\u0106\u0107\u0108\u0109\u010c\u010d\u010a\u010bC\u0304c\u0304\u00c7\u00e7\u1e08\u1e09\u023b\u023c\u0187\u0188\u0255\u1d04\uff23\uff43]",d:"[d\u010e\u010f\u1e0a\u1e0b\u1e10\u1e11\u1e0c\u1e0d\u1e12\u1e13\u1e0e\u1e0f\u0110\u0111D\u0326d\u0326\u0189\u0256\u018a\u0257\u018b\u018c\u1d6d\u1d81\u1d91\u0221\u1d05\uff24\uff44\u00f0]",
e:"[e\u00c9\u00e9\u00c8\u00e8\u00ca\u00ea\u1e18\u1e19\u011a\u011b\u0114\u0115\u1ebc\u1ebd\u1e1a\u1e1b\u1eba\u1ebb\u0116\u0117\u00cb\u00eb\u0112\u0113\u0228\u0229\u0118\u0119\u1d92\u0246\u0247\u0204\u0205\u1ebe\u1ebf\u1ec0\u1ec1\u1ec4\u1ec5\u1ec2\u1ec3\u1e1c\u1e1d\u1e16\u1e17\u1e14\u1e15\u0206\u0207\u1eb8\u1eb9\u1ec6\u1ec7\u2c78\u1d07\uff25\uff45\u0258\u01dd\u018f\u0190\u03b5]",f:"[f\u0191\u0192\u1e1e\u1e1f]",g:"[g\u0262\u20b2\u01e4\u01e5\u011c\u011d\u011e\u011f\u0122\u0123\u0193\u0260\u0120\u0121]",
h:"[h\u0124\u0125\u0126\u0127\u1e28\u1e29\u1e96\u1e96\u1e24\u1e25\u1e22\u1e23\u0266\u02b0\u01f6\u0195]",i:"[i\u00cd\u00ed\u00cc\u00ec\u012c\u012d\u00ce\u00ee\u01cf\u01d0\u00cf\u00ef\u1e2e\u1e2f\u0128\u0129\u012e\u012f\u012a\u012b\u1ec8\u1ec9\u0208\u0209\u020a\u020b\u1eca\u1ecb\u1e2c\u1e2d\u0197\u0268\u0268\u0306\u1d7b\u1d96\u0130iI\u0131\u026a\uff29\uff49]",j:"[j\u0237\u0134\u0135\u0248\u0249\u029d\u025f\u02b2]",k:"[k\u0198\u0199\ua740\ua741\u1e30\u1e31\u01e8\u01e9\u1e32\u1e33\u1e34\u1e35\u03ba\u03f0\u20ad]",
l:"[l\u0141\u0142\u013d\u013e\u013b\u013c\u0139\u013a\u1e36\u1e37\u1e38\u1e39\u1e3c\u1e3d\u1e3a\u1e3b\u013f\u0140\u023d\u019a\u2c60\u2c61\u2c62\u026b\u026c\u1d85\u026d\u0234\u029f\uff2c\uff4c]",n:"[n\u0143\u0144\u01f8\u01f9\u0147\u0148\u00d1\u00f1\u1e44\u1e45\u0145\u0146\u1e46\u1e47\u1e4a\u1e4b\u1e48\u1e49N\u0308n\u0308\u019d\u0272\u0220\u019e\u1d70\u1d87\u0273\u0235\u0274\uff2e\uff4e\u014a\u014b]",o:"[o\u00d8\u00f8\u00d6\u00f6\u00d3\u00f3\u00d2\u00f2\u00d4\u00f4\u01d1\u01d2\u0150\u0151\u014e\u014f\u022e\u022f\u1ecc\u1ecd\u019f\u0275\u01a0\u01a1\u1ece\u1ecf\u014c\u014d\u00d5\u00f5\u01ea\u01eb\u020c\u020d\u0555\u0585]",
p:"[p\u1e54\u1e55\u1e56\u1e57\u2c63\u1d7d\u01a4\u01a5\u1d71]",q:"[q\ua756\ua757\u02a0\u024a\u024b\ua758\ua759q\u0303]",r:"[r\u0154\u0155\u024c\u024d\u0158\u0159\u0156\u0157\u1e58\u1e59\u0210\u0211\u0212\u0213\u1e5a\u1e5b\u2c64\u027d]",s:"[s\u015a\u015b\u1e60\u1e61\u1e62\u1e63\ua7a8\ua7a9\u015c\u015d\u0160\u0161\u015e\u015f\u0218\u0219S\u0308s\u0308]",t:"[t\u0164\u0165\u1e6a\u1e6b\u0162\u0163\u1e6c\u1e6d\u01ae\u0288\u021a\u021b\u1e70\u1e71\u1e6e\u1e6f\u01ac\u01ad]",u:"[u\u016c\u016d\u0244\u0289\u1ee4\u1ee5\u00dc\u00fc\u00da\u00fa\u00d9\u00f9\u00db\u00fb\u01d3\u01d4\u0170\u0171\u016c\u016d\u01af\u01b0\u1ee6\u1ee7\u016a\u016b\u0168\u0169\u0172\u0173\u0214\u0215\u222a]",
v:"[v\u1e7c\u1e7d\u1e7e\u1e7f\u01b2\u028b\ua75e\ua75f\u2c71\u028b]",w:"[w\u1e82\u1e83\u1e80\u1e81\u0174\u0175\u1e84\u1e85\u1e86\u1e87\u1e88\u1e89]",x:"[x\u1e8c\u1e8d\u1e8a\u1e8b\u03c7]",y:"[y\u00dd\u00fd\u1ef2\u1ef3\u0176\u0177\u0178\u00ff\u1ef8\u1ef9\u1e8e\u1e8f\u1ef4\u1ef5\u024e\u024f\u01b3\u01b4]",z:"[z\u0179\u017a\u1e90\u1e91\u017d\u017e\u017b\u017c\u1e92\u1e93\u1e94\u1e95\u01b5\u01b6]"},x=function(){var c,f,e="",u={};for(f in m)if(m.hasOwnProperty(f)){var k=m[f].substring(2,m[f].length-1);e+=
k;var l=0;for(c=k.length;l<c;l++)u[k.charAt(l)]=f}var p=new RegExp("["+e+"]","g");return function(c){return c.replace(p,function(c){return u[c]}).toLowerCase()}}();return c});
(function(c,e){"function"===typeof define&&define.amd?define("microplugin",e):"object"===typeof exports?module.exports=e():c.MicroPlugin=e()})(this,function(){var c={isArray:Array.isArray||function(c){return"[object Array]"===Object.prototype.toString.call(c)}};return{mixin:function(e){e.plugins={};e.prototype.initializePlugins=function(e){var u,p=[];this.plugins={names:[],settings:{},requested:{},loaded:{}};if(c.isArray(e)){var m=0;for(u=e.length;m<u;m++)"string"===typeof e[m]?p.push(e[m]):(this.plugins.settings[e[m].name]=
e[m].options,p.push(e[m].name))}else if(e)for(m in e)e.hasOwnProperty(m)&&(this.plugins.settings[m]=e[m],p.push(m));for(;p.length;)this.require(p.shift())};e.prototype.loadPlugin=function(c){var u=this.plugins,p=e.plugins[c];if(!e.plugins.hasOwnProperty(c))throw Error('Unable to find "'+c+'" plugin');u.requested[c]=!0;u.loaded[c]=p.fn.apply(this,[this.plugins.settings[c]||{}]);u.names.push(c)};e.prototype.require=function(c){var e=this.plugins;if(!this.plugins.loaded.hasOwnProperty(c)){if(e.requested[c])throw Error('Plugin has circular dependency ("'+
c+'")');this.loadPlugin(c)}return e.loaded[c]};e.define=function(c,y){e.plugins[c]={name:c,fn:y}}}}});
(function(c,e){"function"===typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],e):"object"===typeof exports?module.exports=e(require("jquery"),require("sifter"),require("microplugin")):c.Selectize=e(c.jQuery,c.Sifter,c.MicroPlugin)})(this,function(c,e,u){var y=function(a,b){if("string"!==typeof b||b.length){var d="string"===typeof b?new RegExp(b,"i"):b,c=function(a){var b=0;if(3===a.nodeType){var g=a.data.search(d);if(0<=g&&0<a.data.length){var h=a.data.match(d);b=document.createElement("span");
b.className="highlight";a=a.splitText(g);a.splitText(h[0].length);g=a.cloneNode(!0);b.appendChild(g);a.parentNode.replaceChild(b,a);b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName)&&("highlight"!==a.className||"SPAN"!==a.tagName))for(g=0;g<a.childNodes.length;++g)g+=c(a.childNodes[g]);return b};return a.each(function(){c(this)})}};c.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var a=this.parentNode;
a.replaceChild(this.firstChild,this);a.normalize()}).end()};var p=function(){};p.prototype={on:function(a,b){this._events=this._events||{};this._events[a]=this._events[a]||[];this._events[a].push(b)},off:function(a,b){var d=arguments.length;if(0===d)return delete this._events;if(1===d)return delete this._events[a];this._events=this._events||{};!1!==a in this._events&&this._events[a].splice(this._events[a].indexOf(b),1)},trigger:function(a){this._events=this._events||{};if(!1!==a in this._events)for(var b=
0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}};p.mixin=function(a){for(var b=["on","off","trigger"],d=0;d<b.length;d++)a.prototype[b[d]]=p.prototype[b[d]]};var m=/Mac/.test(navigator.userAgent),x=m?91:17,n=m?18:17,f=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity,w=function(a){return"undefined"===typeof a||null===a?null:"boolean"===typeof a?a?"1":"0":a+""},A=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,
"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},k={before:function(a,b,d){var c=a[b];a[b]=function(){d.apply(a,arguments);return c.apply(a,arguments)}},after:function(a,b,d){var c=a[b];a[b]=function(){var b=c.apply(a,arguments);d.apply(a,arguments);return b}}},l=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},H=function(a,b){var d;return function(){var c=this,h=arguments;window.clearTimeout(d);d=window.setTimeout(function(){a.apply(c,h)},b)}},v=function(a,b,d){var c,
h=a.trigger,C={};a.trigger=function(){var d=arguments[0];if(-1!==b.indexOf(d))C[d]=arguments;else return h.apply(a,arguments)};d.apply(a,[]);a.trigger=h;for(c in C)C.hasOwnProperty(c)&&h.apply(a,C[c])},t=function(a,b,d,c){a.on(b,d,function(b){for(var d=b.target;d&&d.parentNode!==a[0];)d=d.parentNode;b.currentTarget=d;return c.apply(this,[b])})},D=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var d=document.selection.createRange(),
c=document.selection.createRange().text.length;d.moveStart("character",-a.value.length);b.start=d.text.length-c;b.length=c}return b},G=function(a){var b=null,d=function(d,h){d=d||window.event||{};h=h||{};if(!d.metaKey&&!d.altKey&&(h.force||!1!==a.data("grow"))){var g=a.val();if(d.type&&"keydown"===d.type.toLowerCase()){var e=d.keyCode;var f=48<=e&&57>=e||65<=e&&90>=e||96<=e&&111>=e||186<=e&&222>=e||32===e;46===e||8===e?(f=D(a[0]),f.length?g=g.substring(0,f.start)+g.substring(f.start+f.length):8===
e&&f.start?g=g.substring(0,f.start-1)+g.substring(f.start+1):46===e&&"undefined"!==typeof f.start&&(g=g.substring(0,f.start)+g.substring(f.start+1))):f&&(e=d.shiftKey,f=String.fromCharCode(d.keyCode),f=e?f.toUpperCase():f.toLowerCase(),g+=f)}e=a.attr("placeholder");!g&&e&&(g=e);if(g){q.$testInput||(q.$testInput=c("<span />").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).appendTo("body"));q.$testInput.text(g);g=q.$testInput;e=["letterSpacing","fontSize",
"fontFamily","fontWeight","textTransform"];var l,k={};if(e)for(f=0,l=e.length;f<l;f++)k[e[f]]=a.css(e[f]);else k=a.css();g.css(k);g=q.$testInput.width()}else g=0;g+=4;g!==b&&(b=g,a.width(g),a.triggerHandler("resize"))}};a.on("keydown keyup update blur",d);d()},E=function(a){var b=document.createElement("div");b.appendChild(a.cloneNode(!0));return b.innerHTML},I=function(a,b){b||(b={});console.error("Selectize: "+a);b.explanation&&(console.group&&console.group(),console.error(b.explanation),console.group&&
console.groupEnd())},q=function(a,b){var d=a[0];d.selectize=this;var g=(g=(g=window.getComputedStyle&&window.getComputedStyle(d,null))?g.getPropertyValue("direction"):d.currentStyle&&d.currentStyle.direction)||a.parents("[dir]:first").attr("dir")||"";c.extend(this,{order:0,settings:b,$input:a,tabIndex:a.attr("tabindex")||"",tagType:"select"===d.tagName.toLowerCase()?1:2,rtl:/rtl/i.test(g),eventNS:".selectize"+ ++q.count,highlightedValue:null,isBlurring:!1,isOpen:!1,isDisabled:!1,isRequired:a.is("[required]"),
isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===b.loadThrottle?this.onSearchChange:H(this.onSearchChange,b.loadThrottle)});this.sifter=new e(this.options,{diacritics:b.diacritics});if(this.settings.options){d=
0;for(g=this.settings.options.length;d<g;d++)this.registerOption(this.settings.options[d]);delete this.settings.options}if(this.settings.optgroups){d=0;for(g=this.settings.optgroups.length;d<g;d++)this.registerOptionGroup(this.settings.optgroups[d]);delete this.settings.optgroups}this.settings.mode=this.settings.mode||(1===this.settings.maxItems?"single":"multi");"boolean"!==typeof this.settings.hideSelected&&(this.settings.hideSelected="multi"===this.settings.mode);this.initializePlugins(this.settings.plugins);
this.setupCallbacks();this.setupTemplates();this.setup()};p.mixin(q);"undefined"!==typeof u?u.mixin(q):I("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'});c.extend(q.prototype,{setup:function(){var a=this,b=a.settings,d=a.eventNS,g=c(window),h=c(document),e=a.$input,l;var k=a.settings.mode;var B=e.attr("class")||"";var p=c("<div>").addClass(b.wrapperClass).addClass(B).addClass(k);
var q=c("<div>").addClass(b.inputClass).addClass("items").appendTo(p);var z=c('<input type="text" autocomplete="off" />').appendTo(q).attr("tabindex",e.is(":disabled")?"-1":a.tabIndex);var r=c(b.dropdownParent||p);r=c("<div>").addClass(b.dropdownClass).addClass(k).hide().appendTo(r);k=c("<div>").addClass(b.dropdownContentClass).appendTo(r);if(l=e.attr("id"))z.attr("id",l+"-selectized"),c("label[for='"+l+"']").attr("for",l+"-selectized");a.settings.copyClassesToDropdown&&r.addClass(B);p.css({width:e[0].style.width});
a.plugins.names.length&&(B="plugin-"+a.plugins.names.join(" plugin-"),p.addClass(B),r.addClass(B));(null===b.maxItems||1<b.maxItems)&&1===a.tagType&&e.attr("multiple","multiple");a.settings.placeholder&&z.attr("placeholder",b.placeholder);!a.settings.splitOn&&a.settings.delimiter&&(B=a.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),a.settings.splitOn=new RegExp("\\s*"+B+"+\\s*"));e.attr("autocorrect")&&z.attr("autocorrect",e.attr("autocorrect"));e.attr("autocapitalize")&&z.attr("autocapitalize",
e.attr("autocapitalize"));z[0].type=e[0].type;a.$wrapper=p;a.$control=q;a.$control_input=z;a.$dropdown=r;a.$dropdown_content=k;r.on("mouseenter mousedown click","[data-disabled]>[data-selectable]",function(a){a.stopImmediatePropagation()});r.on("mouseenter","[data-selectable]",function(){return a.onOptionHover.apply(a,arguments)});r.on("mousedown click","[data-selectable]",function(){return a.onOptionSelect.apply(a,arguments)});t(q,"mousedown","*:not(input)",function(){return a.onItemSelect.apply(a,
arguments)});G(z);q.on({mousedown:function(){return a.onMouseDown.apply(a,arguments)},click:function(){return a.onClick.apply(a,arguments)}});z.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return a.onKeyDown.apply(a,arguments)},keyup:function(){return a.onKeyUp.apply(a,arguments)},keypress:function(){return a.onKeyPress.apply(a,arguments)},resize:function(){a.positionDropdown.apply(a,[])},blur:function(){return a.onBlur.apply(a,arguments)},focus:function(){a.ignoreBlur=!1;return a.onFocus.apply(a,
arguments)},paste:function(){return a.onPaste.apply(a,arguments)}});h.on("keydown"+d,function(b){a.isCmdDown=b[m?"metaKey":"ctrlKey"];a.isCtrlDown=b[m?"altKey":"ctrlKey"];a.isShiftDown=b.shiftKey});h.on("keyup"+d,function(b){b.keyCode===n&&(a.isCtrlDown=!1);16===b.keyCode&&(a.isShiftDown=!1);b.keyCode===x&&(a.isCmdDown=!1)});h.on("mousedown"+d,function(b){if(a.isFocused){if(b.target===a.$dropdown[0]||b.target.parentNode===a.$dropdown[0])return!1;a.$control.has(b.target).length||b.target===a.$control[0]||
a.blur(b.target)}});g.on(["scroll"+d,"resize"+d].join(" "),function(){a.isOpen&&a.positionDropdown.apply(a,arguments)});g.on("mousemove"+d,function(){a.ignoreHover=!1});this.revertSettings={$children:e.children().detach(),tabindex:e.attr("tabindex")};e.attr("tabindex",-1).hide().after(a.$wrapper);c.isArray(b.items)&&(a.setValue(b.items),delete b.items);if(f)e.on("invalid"+d,function(b){b.preventDefault();a.isInvalid=!0;a.refreshState()});a.updateOriginalInput();a.refreshItems();a.refreshState();a.updatePlaceholder();
a.isSetup=!0;e.is(":disabled")&&a.disable();a.on("change",this.onChange);e.data("selectize",a);e.addClass("selectized");a.trigger("initialize");if(!0===b.preload)a.onSearchChange("")},setupTemplates:function(){var a=this.settings.labelField,b=this.settings.optgroupLabelField;this.settings.render=c.extend({},{optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,c){return'<div class="optgroup-header">'+c(a[b])+"</div>"},option:function(b,c){return'<div class="option">'+
c(b[a])+"</div>"},item:function(b,c){return'<div class="item">'+c(b[a])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}},this.settings.render)},setupCallbacks:function(){var a,b,d={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",
optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(a in d)if(d.hasOwnProperty(a)&&(b=this.settings[d[a]]))this.on(a,b)},onClick:function(a){this.isFocused&&this.isOpen||(this.focus(),a.preventDefault())},onMouseDown:function(a){var b=this,d=a.isDefaultPrevented();c(a.target);if(b.isFocused){if(a.target!==b.$control_input[0])return"single"===b.settings.mode?b.isOpen?b.close():b.open():d||
b.setActiveItem(null),!1}else d||window.setTimeout(function(){b.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(a){var b=this;b.isFull()||b.isInputHidden||b.isLocked?a.preventDefault():b.settings.splitOn&&setTimeout(function(){var a=b.$control_input.val();if(a.match(b.settings.splitOn)){a=c.trim(a).split(b.settings.splitOn);for(var g=0,h=a.length;g<h;g++)b.createItem(a[g])}},0)},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||
a.which);if(this.settings.create&&"multi"===this.settings.mode&&b===this.settings.delimiter)return this.open(),a.preventDefault(),!1},onKeyDown:function(a){if(this.isLocked)9!==a.keyCode&&a.preventDefault();else{switch(a.keyCode){case 65:if(this.isCmdDown){this.selectAll();return}break;case 27:this.isOpen&&(a.preventDefault(),a.stopPropagation());return;case 78:if(!a.ctrlKey||a.altKey)break;case 40:if(!this.isOpen&&this.hasOptions)this.open();else if(this.$activeOption){this.ignoreHover=!0;var b=
this.getAdjacentOption(this.$activeOption,1);b.length&&this.setActiveOption(b,!0,!0)}a.preventDefault();return;case 80:if(!a.ctrlKey||a.altKey)break;case 38:this.$activeOption&&(this.ignoreHover=!0,b=this.getAdjacentOption(this.$activeOption,-1),b.length&&this.setActiveOption(b,!0,!0));a.preventDefault();return;case 13:this.isOpen&&this.$activeOption&&(this.onOptionSelect({currentTarget:this.$activeOption}),a.preventDefault());return;case 37:this.advanceSelection(-1,a);return;case 39:this.advanceSelection(1,
a);return;case 9:this.settings.selectOnTab&&this.isOpen&&this.$activeOption&&(this.onOptionSelect({currentTarget:this.$activeOption}),this.isFull()||a.preventDefault());this.settings.create&&this.createItem()&&a.preventDefault();return;case 8:case 46:this.deleteSelection(a);return}!this.isFull()&&!this.isInputHidden||(m?a.metaKey:a.ctrlKey)||a.preventDefault()}},onKeyUp:function(a){if(this.isLocked)return a&&a.preventDefault();a=this.$control_input.val()||"";this.lastValue!==a&&(this.lastValue=a,
this.onSearchChange(a),this.refreshOptions(),this.trigger("type",a))},onSearchChange:function(a){var b=this,d=b.settings.load;d&&!b.loadedSearches.hasOwnProperty(a)&&(b.loadedSearches[a]=!0,b.load(function(c){d.apply(b,[a,c])}))},onFocus:function(a){var b=this.isFocused;if(this.isDisabled)return this.blur(),a&&a.preventDefault(),!1;if(!this.ignoreFocus){this.isFocused=!0;if("focus"===this.settings.preload)this.onSearchChange("");b||this.trigger("focus");this.$activeItems.length||(this.showInput(),
this.setActiveItem(null),this.refreshOptions(!!this.settings.openOnFocus));this.refreshState()}},onBlur:function(a,b){var d=this;if(d.isFocused&&(d.isFocused=!1,!d.ignoreFocus))if(d.ignoreBlur||document.activeElement!==d.$dropdown_content[0]){var c=function(){d.close();d.setTextboxValue("");d.setActiveItem(null);d.setActiveOption(null);d.setCaret(d.items.length);d.refreshState();b&&b.focus&&b.focus();d.isBlurring=!1;d.ignoreFocus=!1;d.trigger("blur")};d.isBlurring=!0;d.ignoreFocus=!0;d.settings.create&&
d.settings.createOnBlur?d.createItem(null,!1,c):c()}else d.ignoreBlur=!0,d.onFocus(a)},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(a){var b=this;a.preventDefault&&(a.preventDefault(),a.stopPropagation());var d=c(a.currentTarget);d.hasClass("create")?b.createItem(null,function(){b.settings.closeAfterSelect&&b.close()}):(d=d.attr("data-value"),"undefined"!==typeof d&&(b.lastQuery=null,b.setTextboxValue(""),b.addItem(d),b.settings.closeAfterSelect?
b.close():!b.settings.hideSelected&&a.type&&/mouse/.test(a.type)&&b.setActiveOption(b.getOption(d))))},onItemSelect:function(a){this.isLocked||"multi"!==this.settings.mode||(a.preventDefault(),this.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass(b.settings.loadingClass);b.loading++;a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0);a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden));b.loading||c.removeClass(b.settings.loadingClass);
b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input;b.val()!==a&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return 1===this.tagType&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a,b){v(this,b?[]:["change"],function(){this.clear(b);this.addItems(a,b)})},setActiveItem:function(a,b){if("single"!==this.settings.mode)if(a=c(a),a.length){var d=b&&b.type.toLowerCase();if("mousedown"===d&&this.isShiftDown&&
this.$activeItems.length){d=this.$control.children(".active:last");var g=Array.prototype.indexOf.apply(this.$control[0].childNodes,[d[0]]);d=Array.prototype.indexOf.apply(this.$control[0].childNodes,[a[0]]);if(g>d){var h=g;g=d;d=h}for(;g<=d;g++)h=this.$control[0].childNodes[g],-1===this.$activeItems.indexOf(h)&&(c(h).addClass("active"),this.$activeItems.push(h));b.preventDefault()}else"mousedown"===d&&this.isCtrlDown||"keydown"===d&&this.isShiftDown?a.hasClass("active")?(d=this.$activeItems.indexOf(a[0]),
this.$activeItems.splice(d,1),a.removeClass("active")):this.$activeItems.push(a.addClass("active")[0]):(c(this.$activeItems).removeClass("active"),this.$activeItems=[a.addClass("active")[0]]);this.hideInput();this.isFocused||this.focus()}else c(this.$activeItems).removeClass("active"),this.$activeItems=[],this.isFocused&&this.showInput()},setActiveOption:function(a,b,d){this.$activeOption&&this.$activeOption.removeClass("active");this.$activeOption=null;a=c(a);if(a.length&&(this.$activeOption=a.addClass("active"),
b||"undefined"===typeof b)){a=this.$dropdown_content.height();var g=this.$activeOption.outerHeight(!0);b=this.$dropdown_content.scrollTop()||0;var h=this.$activeOption.offset().top-this.$dropdown_content.offset().top+b;var e=h-a+g;h+g>a+b?this.$dropdown_content.stop().animate({scrollTop:e},d?this.settings.scrollDuration:0):h<b&&this.$dropdown_content.stop().animate({scrollTop:h},d?this.settings.scrollDuration:0)}},selectAll:function(){"single"!==this.settings.mode&&(this.$activeItems=Array.prototype.slice.apply(this.$control.children(":not(input)").addClass("active")),
this.$activeItems.length&&(this.hideInput(),this.close()),this.focus())},hideInput:function(){this.setTextboxValue("");this.$control_input.css({opacity:0,position:"absolute",left:this.rtl?1E4:-1E4});this.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0});this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1;a.onFocus()},0))},blur:function(a){this.$control_input[0].blur();
this.onBlur(null,a)},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;"string"===typeof b&&(b=[{field:b}]);return{fields:a.searchField,conjunction:a.searchConjunction,sort:b,nesting:a.nesting}},search:function(a){var b=this.settings;var d=this.getSearchOptions();if(b.score){var g=this.settings.score.apply(this,[a]);if("function"!==typeof g)throw Error('Selectize "score" setting must be a function that returns a function');
}a!==this.lastQuery?(this.lastQuery=a,this.currentResults=a=this.sifter.search(a,c.extend(d,{score:g}))):a=c.extend(!0,{},this.currentResults);if(b.hideSelected)for(b=a.items.length-1;0<=b;b--)-1!==this.items.indexOf(w(a.items[b].id))&&a.items.splice(b,1);return a},refreshOptions:function(a){var b,d,g;"undefined"===typeof a&&(a=!0);var h=this;var e=c.trim(h.$control_input.val());var f=h.search(e),l=h.$dropdown_content,k=h.$activeOption&&w(h.$activeOption.attr("data-value"));var n=f.items.length;"number"===
typeof h.settings.maxOptions&&(n=Math.min(n,h.settings.maxOptions));var m={};var p=[];for(b=0;b<n;b++){var r=h.options[f.items[b].id];var q=h.render("option",r);r=r[h.settings.optgroupField]||"";var u=c.isArray(r)?r:[r];var t=0;for(d=u&&u.length;t<d;t++)r=u[t],h.optgroups.hasOwnProperty(r)||(r=""),m.hasOwnProperty(r)||(m[r]=document.createDocumentFragment(),p.push(r)),m[r].appendChild(q)}this.settings.lockOptgroupOrder&&p.sort(function(a,b){return(h.optgroups[a].$order||0)-(h.optgroups[b].$order||
0)});q=document.createDocumentFragment();b=0;for(n=p.length;b<n;b++)r=p[b],h.optgroups.hasOwnProperty(r)&&m[r].childNodes.length?(t=document.createDocumentFragment(),t.appendChild(h.render("optgroup_header",h.optgroups[r])),t.appendChild(m[r]),q.appendChild(h.render("optgroup",c.extend({},h.optgroups[r],{html:E(t),dom:t})))):q.appendChild(m[r]);l.html(q);if(h.settings.highlight&&(l.removeHighlight(),f.query.length&&f.tokens.length))for(b=0,n=f.tokens.length;b<n;b++)y(l,f.tokens[b].regex);if(!h.settings.hideSelected)for(b=
0,n=h.items.length;b<n;b++)h.getOption(h.items[b]).addClass("selected");if(b=h.canCreate(e)){l.prepend(h.render("option_create",{input:e}));var v=c(l[0].childNodes[0])}h.hasOptions=0<f.items.length||b;h.hasOptions?(0<f.items.length?((e=k&&h.getOption(k))&&e.length?g=e:"single"===h.settings.mode&&h.items.length&&(g=h.getOption(h.items[0])),g&&g.length||(g=v&&!h.settings.addPrecedence?h.getAdjacentOption(v,1):l.find("[data-selectable]:first"))):g=v,h.setActiveOption(g),a&&!h.isOpen&&h.open()):(h.setActiveOption(null),
a&&h.isOpen&&h.close())},addOption:function(a){var b;if(c.isArray(a)){var d=0;for(b=a.length;d<b;d++)this.addOption(a[d])}else if(d=this.registerOption(a))this.userOptions[d]=!0,this.lastQuery=null,this.trigger("option_add",d,a)},registerOption:function(a){var b=w(a[this.settings.valueField]);if("undefined"===typeof b||null===b||this.options.hasOwnProperty(b))return!1;a.$order=a.$order||++this.order;this.options[b]=a;return b},registerOptionGroup:function(a){var b=w(a[this.settings.optgroupValueField]);
if(!b)return!1;a.$order=a.$order||++this.order;this.optgroups[b]=a;return b},addOptionGroup:function(a,b){b[this.settings.optgroupValueField]=a;(a=this.registerOptionGroup(b))&&this.trigger("optgroup_add",a,b)},removeOptionGroup:function(a){this.optgroups.hasOwnProperty(a)&&(delete this.optgroups[a],this.renderCache={},this.trigger("optgroup_remove",a))},clearOptionGroups:function(){this.optgroups={};this.renderCache={};this.trigger("optgroup_clear")},updateOption:function(a,b){a=w(a);var d=w(b[this.settings.valueField]);
if(null!==a&&this.options.hasOwnProperty(a)){if("string"!==typeof d)throw Error("Value must be set in option data");var g=this.options[a].$order;if(d!==a){delete this.options[a];var h=this.items.indexOf(a);-1!==h&&this.items.splice(h,1,d)}b.$order=b.$order||g;this.options[d]=b;h=this.renderCache.item;g=this.renderCache.option;h&&(delete h[a],delete h[d]);g&&(delete g[a],delete g[d]);-1!==this.items.indexOf(d)&&(d=this.getItem(a),h=c(this.render("item",b)),d.hasClass("active")&&h.addClass("active"),
d.replaceWith(h));this.lastQuery=null;this.isOpen&&this.refreshOptions(!1)}},removeOption:function(a,b){a=w(a);var c=this.renderCache.item,g=this.renderCache.option;c&&delete c[a];g&&delete g[a];delete this.userOptions[a];delete this.options[a];this.lastQuery=null;this.trigger("option_remove",a);this.removeItem(a,b)},clearOptions:function(){var a=this;a.loadedSearches={};a.userOptions={};a.renderCache={};var b=a.options;c.each(a.options,function(c,g){-1==a.items.indexOf(c)&&delete b[c]});a.options=
a.sifter.items=b;a.lastQuery=null;a.trigger("option_clear")},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(a,b){var d=this.$dropdown.find("[data-selectable]"),g=d.index(a)+b;return 0<=g&&g<d.length?d.eq(g):c()},getElementWithValue:function(a,b){a=w(a);if("undefined"!==typeof a&&null!==a)for(var d=0,g=b.length;d<g;d++)if(b[d].getAttribute("data-value")===a)return c(b[d]);return c()},getItem:function(a){return this.getElementWithValue(a,
this.$control.children())},addItems:function(a,b){this.buffer=document.createDocumentFragment();for(var d=this.$control[0].childNodes,g=0;g<d.length;g++)this.buffer.appendChild(d[g]);d=c.isArray(a)?a:[a];g=0;for(var h=d.length;g<h;g++)this.isPending=g<h-1,this.addItem(d[g],b);g=this.$control[0];g.insertBefore(this.buffer,g.firstChild);this.buffer=null},addItem:function(a,b){v(this,b?[]:["change"],function(){var d=this.settings.mode;a=w(a);if(-1!==this.items.indexOf(a))"single"===d&&this.close();else if(this.options.hasOwnProperty(a)&&
("single"===d&&this.clear(b),"multi"!==d||!this.isFull())){var g=c(this.render("item",this.options[a]));var h=this.isFull();this.items.splice(this.caretPos,0,a);this.insertAtCaret(g);(!this.isPending||!h&&this.isFull())&&this.refreshState();if(this.isSetup){h=this.$dropdown_content.find("[data-selectable]");if(!this.isPending){var e=this.getOption(a);e=this.getAdjacentOption(e,1).attr("data-value");this.refreshOptions(this.isFocused&&"single"!==d);e&&this.setActiveOption(this.getOption(e))}!h.length||
this.isFull()?this.close():this.isPending||this.positionDropdown();this.updatePlaceholder();this.trigger("item_add",a,g);this.isPending||this.updateOriginalInput({silent:b})}}})},removeItem:function(a,b){var d=a instanceof c?a:this.getItem(a);a=w(d.attr("data-value"));var g=this.items.indexOf(a);if(-1!==g){d.remove();if(d.hasClass("active")){var e=this.$activeItems.indexOf(d[0]);this.$activeItems.splice(e,1)}this.items.splice(g,1);this.lastQuery=null;!this.settings.persist&&this.userOptions.hasOwnProperty(a)&&
this.removeOption(a,b);g<this.caretPos&&this.setCaret(this.caretPos-1);this.refreshState();this.updatePlaceholder();this.updateOriginalInput({silent:b});this.positionDropdown();this.trigger("item_remove",a,d)}},createItem:function(a,b){var d=this,g=d.caretPos;a=a||c.trim(d.$control_input.val()||"");var e=arguments[arguments.length-1];"function"!==typeof e&&(e=function(){});"boolean"!==typeof b&&(b=!0);if(!d.canCreate(a))return e(),!1;d.lock();var f="function"===typeof d.settings.create?this.settings.create:
function(a){var b={};b[d.settings.labelField]=a;b[d.settings.valueField]=a;return b},k=l(function(a){d.unlock();if(!a||"object"!==typeof a)return e();var c=w(a[d.settings.valueField]);if("string"!==typeof c)return e();d.setTextboxValue("");d.addOption(a);d.setCaret(g);d.addItem(c);d.refreshOptions(b&&"single"!==d.settings.mode);e(a)});f=f.apply(this,[a,k]);"undefined"!==typeof f&&k(f);return!0},refreshItems:function(){this.lastQuery=null;this.isSetup&&this.addItem(this.items);this.refreshState();
this.updateOriginalInput()},refreshState:function(){this.refreshValidityState();this.refreshClasses()},refreshValidityState:function(){if(!this.isRequired)return!1;var a=!this.items.length;this.isInvalid=a;this.$control_input.prop("required",a);this.$input.prop("required",!a)},refreshClasses:function(){var a=this.isFull(),b=this.isLocked;this.$wrapper.toggleClass("rtl",this.rtl);this.$control.toggleClass("focus",this.isFocused).toggleClass("disabled",this.isDisabled).toggleClass("required",this.isRequired).toggleClass("invalid",
this.isInvalid).toggleClass("locked",b).toggleClass("full",a).toggleClass("not-full",!a).toggleClass("input-active",this.isFocused&&!this.isInputHidden).toggleClass("dropdown-active",this.isOpen).toggleClass("has-options",!c.isEmptyObject(this.options)).toggleClass("has-items",0<this.items.length);this.$control_input.data("grow",!a&&!b)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(a){var b;a=a||{};if(1===this.tagType){var c=
[];var g=0;for(b=this.items.length;g<b;g++){var e=this.options[this.items[g]][this.settings.labelField]||"";c.push('<option value="'+A(this.items[g])+'" selected="selected">'+A(e)+"</option>")}c.length||this.$input.attr("multiple")||c.push('<option value="" selected="selected"></option>');this.$input.html(c.join(""))}else this.$input.val(this.getValue()),this.$input.attr("value",this.$input.val());this.isSetup&&(a.silent||this.trigger("change",this.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var a=
this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder);a.triggerHandler("update",{force:!0})}},open:function(){this.isLocked||this.isOpen||"multi"===this.settings.mode&&this.isFull()||(this.focus(),this.isOpen=!0,this.refreshState(),this.$dropdown.css({visibility:"hidden",display:"block"}),this.positionDropdown(),this.$dropdown.css({visibility:"visible"}),this.trigger("dropdown_open",this.$dropdown))},close:function(){var a=this.isOpen;"single"===
this.settings.mode&&this.items.length&&(this.hideInput(),this.isBlurring||this.$control_input.blur());this.isOpen=!1;this.$dropdown.hide();this.setActiveOption(null);this.refreshState();a&&this.trigger("dropdown_close",this.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0);this.$dropdown.css({width:a[0].getBoundingClientRect().width,top:b.top,left:b.left})},clear:function(a){this.items.length&&(this.$control.children(":not(input)").remove(),
this.items=[],this.lastQuery=null,this.setCaret(0),this.setActiveItem(null),this.updatePlaceholder(),this.updateOriginalInput({silent:a}),this.refreshState(),this.showInput(),this.trigger("clear"))},insertAtCaret:function(a){var b=Math.min(this.caretPos,this.items.length);a=a[0];var c=this.buffer||this.$control[0];0===b?c.insertBefore(a,c.firstChild):c.insertBefore(a,c.childNodes[b]);this.setCaret(b+1)},deleteSelection:function(a){var b;var d=a&&8===a.keyCode?-1:1;var g=D(this.$control_input[0]);
this.$activeOption&&!this.settings.hideSelected&&(b=this.getAdjacentOption(this.$activeOption,-1).attr("data-value"));var e=[];if(this.$activeItems.length){var f=this.$control.children(".active:"+(0<d?"last":"first"));f=this.$control.children(":not(input)").index(f);0<d&&f++;d=0;for(g=this.$activeItems.length;d<g;d++)e.push(c(this.$activeItems[d]).attr("data-value"));a&&(a.preventDefault(),a.stopPropagation())}else(this.isFocused||"single"===this.settings.mode)&&this.items.length&&(0>d&&0===g.start&&
0===g.length?e.push(this.items[this.caretPos-1]):0<d&&g.start===this.$control_input.val().length&&e.push(this.items[this.caretPos]));if(!e.length||"function"===typeof this.settings.onDelete&&!1===this.settings.onDelete.apply(this,[e]))return!1;for("undefined"!==typeof f&&this.setCaret(f);e.length;)this.removeItem(e.pop());this.showInput();this.positionDropdown();this.refreshOptions(!0);b&&(a=this.getOption(b),a.length&&this.setActiveOption(a));return!0},advanceSelection:function(a,b){if(0!==a){this.rtl&&
(a*=-1);var c=0<a?"last":"first";var g=D(this.$control_input[0]);this.isFocused&&!this.isInputHidden?(c=this.$control_input.val().length,(g=0>a?0===g.start&&0===g.length:g.start===c)&&!c&&this.advanceCaret(a,b)):(g=this.$control.children(".active:"+c),g.length&&(g=this.$control.children(":not(input)").index(g),this.setActiveItem(null),this.setCaret(0<a?g+1:g)))}},advanceCaret:function(a,b){if(0!==a){var c=0<a?"next":"prev";this.isShiftDown?(c=this.$control_input[c](),c.length&&(this.hideInput(),this.setActiveItem(c),
b&&b.preventDefault())):this.setCaret(this.caretPos+a)}},setCaret:function(a){a="single"===this.settings.mode?this.items.length:Math.max(0,Math.min(this.items.length,a));if(!this.isPending){var b;var d=this.$control.children(":not(input)");var g=0;for(b=d.length;g<b;g++){var e=c(d[g]).detach();g<a?this.$control_input.before(e):this.$control.append(e)}}this.caretPos=a},lock:function(){this.close();this.isLocked=!0;this.refreshState()},unlock:function(){this.isLocked=!1;this.refreshState()},disable:function(){this.$input.prop("disabled",
!0);this.$control_input.prop("disabled",!0).prop("tabindex",-1);this.isDisabled=!0;this.lock()},enable:function(){this.$input.prop("disabled",!1);this.$control_input.prop("disabled",!1).prop("tabindex",this.tabIndex);this.isDisabled=!1;this.unlock()},destroy:function(){var a=this.eventNS,b=this.revertSettings;this.trigger("destroy");this.off();this.$wrapper.remove();this.$dropdown.remove();this.$input.html("").append(b.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:b.tabindex}).show();
this.$control_input.removeData("grow");this.$input.removeData("selectize");0==--q.count&&q.$testInput&&(q.$testInput.remove(),q.$testInput=void 0);c(window).off(a);c(document).off(a);c(document.body).off(a);delete this.$input[0].selectize},render:function(a,b){var d=!1;if("option"===a||"item"===a){var e=w(b[this.settings.valueField]);d=!!e}if(d&&("undefined"===typeof this.renderCache[a]&&(this.renderCache[a]={}),this.renderCache[a].hasOwnProperty(e)))return this.renderCache[a][e];var h=c(this.settings.render[a].apply(this,
[b,A]));if("option"===a||"option_create"===a)b[this.settings.disabledField]||h.attr("data-selectable","");else if("optgroup"===a){var f=b[this.settings.optgroupValueField]||"";h.attr("data-group",f);b[this.settings.disabledField]&&h.attr("data-disabled","")}"option"!==a&&"item"!==a||h.attr("data-value",e||"");d&&(this.renderCache[a][e]=h[0]);return h[0]},clearCache:function(a){"undefined"===typeof a?this.renderCache={}:delete this.renderCache[a]},canCreate:function(a){if(!this.settings.create)return!1;
var b=this.settings.createFilter;return a.length&&("function"!==typeof b||b.apply(this,[a]))&&("string"!==typeof b||(new RegExp(b)).test(a))&&(!(b instanceof RegExp)||b.test(a))}});q.count=0;q.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1E3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,
loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}};c.fn.selectize=
function(a){var b=c.fn.selectize.defaults,d=c.extend({},b,a),e=d.dataAttr,f=d.labelField,l=d.valueField,k=d.disabledField,n=d.optgroupField,m=d.optgroupLabelField,p=d.optgroupValueField,t=function(a,b){var g,h=b.options,r={},q=function(a){a=e&&a.attr(e);return"string"===typeof a&&a.length?JSON.parse(a):null},F=function(a,e){a=c(a);var g=w(a.val());if(g||d.allowEmptyOption)if(r.hasOwnProperty(g)){if(e){var m=r[g][n];m?c.isArray(m)?m.push(e):r[g][n]=[m,e]:r[g][n]=e}}else m=q(a)||{},m[f]=m[f]||a.text(),
m[l]=m[l]||g,m[k]=m[k]||a.prop("disabled"),m[n]=m[n]||e,r[g]=m,h.push(m),a.is(":selected")&&b.items.push(g)},C=function(a){var d;a=c(a);if(d=a.attr("label")){var e=q(a)||{};e[m]=d;e[p]=d;e[k]=a.prop("disabled");b.optgroups.push(e)}var g=c("option",a);a=0;for(e=g.length;a<e;a++)F(g[a],d)};b.maxItems=a.attr("multiple")?null:1;var t=a.children();var u=0;for(g=t.length;u<g;u++){var v=t[u].tagName.toLowerCase();"optgroup"===v?C(t[u]):"option"===v&&F(t[u])}};return this.each(function(){if(!this.selectize){var g=
c(this),h=this.tagName.toLowerCase(),k=g.attr("placeholder")||g.attr("data-placeholder");k||d.allowEmptyOption||(k=g.children('option[value=""]').text());k={placeholder:k,options:[],optgroups:[],items:[]};if("select"===h)t(g,k);else{var m;if(h=g.attr(e))for(k.options=JSON.parse(h),h=0,m=k.options.length;h<m;h++)k.items.push(k.options[h][l]);else if(h=c.trim(g.val()||""),d.allowEmptyOption||h.length){var n=h.split(d.delimiter);h=0;for(m=n.length;h<m;h++){var p={};p[f]=n[h];p[l]=n[h];k.options.push(p)}k.items=
n}}new q(g,c.extend(!0,{},b,k,a))}})};c.fn.selectize.defaults=q.defaults;c.fn.selectize.support={validity:f};q.define("drag_drop",function(a){if(!c.fn.sortable)throw Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var b=this;b.lock=function(){var a=b.lock;return function(){var c=b.$control.data("sortable");c&&c.disable();return a.apply(b,arguments)}}();b.unlock=function(){var a=b.unlock;return function(){var c=b.$control.data("sortable");c&&c.enable();
return a.apply(b,arguments)}}();b.setup=function(){var a=b.setup;return function(){a.apply(this,arguments);var d=b.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:b.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width"));d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var a=b.$activeItems?b.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(c(this).attr("data-value"))});b.setValue(e);b.setActiveItem(a)}})}}()}});
q.define("dropdown_header",function(a){var b=this;a=c.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},a);b.setup=function(){var d=
b.setup;return function(){d.apply(b,arguments);b.$dropdown_header=c(a.html(a));b.$dropdown.prepend(b.$dropdown_header)}}()});q.define("optgroup_columns",function(a){var b=this;a=c.extend({equalizeWidth:!0,equalizeHeight:!0},a);this.getAdjacentOption=function(a,b){var d=a.closest("[data-group]").find("[data-selectable]"),e=d.index(a)+b;return 0<=e&&e<d.length?d.eq(e):c()};this.onKeyDown=function(){var a=b.onKeyDown;return function(c){if(!this.isOpen||37!==c.keyCode&&39!==c.keyCode)return a.apply(this,
arguments);b.ignoreHover=!0;var d=this.$activeOption.closest("[data-group]");var e=d.find("[data-selectable]").index(this.$activeOption);d=37===c.keyCode?d.prev("[data-group]"):d.next("[data-group]");d=d.find("[data-selectable]");e=d.eq(Math.min(d.length-1,e));e.length&&this.setActiveOption(e)}}();var d=function(){var a=d.width,b=document;if("undefined"===typeof a){var c=b.createElement("div");c.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
c=c.firstChild;b.body.appendChild(c);a=d.width=c.offsetWidth-c.clientWidth;b.body.removeChild(c)}return a},e=function(){var e,g,f;var l=c("[data-group]",b.$dropdown_content);if((g=l.length)&&b.$dropdown_content.width()){if(a.equalizeHeight){for(e=f=0;e<g;e++)f=Math.max(f,l.eq(e).height());l.css({height:f})}a.equalizeWidth&&(f=b.$dropdown_content.innerWidth()-d(),e=Math.round(f/g),l.css({width:e}),1<g&&(e=f-e*(g-1),l.eq(g-1).css({width:e})))}};if(a.equalizeHeight||a.equalizeWidth)k.after(this,"positionDropdown",
e),k.after(this,"refreshOptions",e)});q.define("remove_button",function(a){a=c.extend({label:"&times;",title:"Remove",className:"remove",append:!0},a);var b=function(a,b){b.className="remove-single";var d='<a href="javascript:void(0)" class="'+b.className+'" tabindex="-1" title="'+A(b.title)+'">'+b.label+"</a>";a.setup=function(){var e=a.setup;return function(){if(b.append){var g=c(a.$input.context).attr("id");c("#"+g);var f=a.settings.render.item;a.settings.render.item=function(b){var e=f.apply(a,
arguments);return c("<span>").append(e).append(d)}}e.apply(a,arguments);a.$control.on("click","."+b.className,function(b){b.preventDefault();a.isLocked||a.clear()})}}()},d=function(a,b){var d='<a href="javascript:void(0)" class="'+b.className+'" tabindex="-1" title="'+A(b.title)+'">'+b.label+"</a>";a.setup=function(){var e=a.setup;return function(){if(b.append){var g=a.settings.render.item;a.settings.render.item=function(b){var c=g.apply(a,arguments),e=c.search(/(<\/[^>]+>\s*)$/);return c.substring(0,
e)+d+c.substring(e)}}e.apply(a,arguments);a.$control.on("click","."+b.className,function(b){b.preventDefault();a.isLocked||(b=c(b.currentTarget).parent(),a.setActiveItem(b),a.deleteSelection()&&a.setCaret(a.items.length))})}}()};"single"===this.settings.mode?b(this,a):d(this,a)});q.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]};this.onKeyDown=function(){var c=b.onKeyDown;return function(b){if(8===b.keyCode&&""===this.$control_input.val()&&
!this.$activeItems.length){var d=this.caretPos-1;if(0<=d&&d<this.items.length){d=this.options[this.items[d]];this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[d])),this.refreshOptions(!0));b.preventDefault();return}}return c.apply(this,arguments)}}()});return q});

// form2wizard

(function(c){c.fn.formToWizard=function(e,u){function y(){e=c(n).data("options");k={GotoStep:function(e){var f="step"+--e;if(void 0===c("#"+f)[0])throw"Step No "+e+" not found!";"none"===c("#"+f).css("display")&&(c(n).find(".stepDetails").slideUp(),c("#"+f).slideDown("slow"),x(e))},NextStep:function(){c(".stepDetails:visible").find("a.next").click()},PreviousStep:function(){c(".stepDetails:visible").find("a.prev").click()}}}function p(f){var l="step"+f;c("#"+l+"commands").append("<"+e.buttonTag+' href="#" class="'+
l+'Prev pref">'+e.prevBtnName+"</"+e.buttonTag+">");c("."+l+"Prev").on("click",function(e){c("#"+l).slideUp();c("#step"+(f-1)).slideDown("slow");x(f-1);return!1})}
function m(f){var l="step"+f;c("#"+l+"commands").append("<"+e.buttonTag+' tabindex="0" href="#" class="'+l+'Next next">'+e.nextBtnName+"</"+e.buttonTag+">");c("."+l+"Next").on("click",function(k){!0===e.validateBeforeNext(n,c("#"+l))&&(c("#"+l).slideUp(),c("#step"+(f+1)).slideDown("slow"),x(f+1));return!1})}
function x(f){"function"===typeof e.progress?e.progress(f,w):e.showProgress&&(c("#steps li").removeClass("current"),c("#stepDesc"+f).addClass("current"));e.select&&e.select(n,c("#step"+f))}
if(0==this.length)return this;"string"!==typeof e&&(e=c.extend({submitButton:"SaveProject",showProgress:!0,showStepNo:!0,validateBeforeNext:!0,select:null,progress:!0,nextBtnName:"Next <svg class='vanxt'><use href='s.svg#arr_r'></use></svg>",prevBtnName:"<svg><use href='s.svg#arr_l'></use></svg>Back",buttonTag:"a",nextBtnClass:"btn next",prevBtnClass:"btn prev",GotoStep:"2"},e));var n=this,f=c(n).find("fieldset"),w=f.length,A="#"+e.submitButton,k=null;c(".wizcount").text(w-1);if("string"!==typeof e)c(n).data("options",e),"function"!==typeof e.validateBeforeNext&&(e.validateBeforeNext=function(){return!0}),e.showProgress&&"function"!==typeof e.progress&&(e.showStepNo?c(n).before("<ul id='steps' class='steps'></ul>"):c(n).before("<ul id='steps' class='steps breadcrumb'></ul>")),f.each(function(f){c(this).wrap('<div id="step'+f+'" class="stepDetails"></div>');c(this).append('<p id="step'+f+'commands" class="commands"></p>');e.showProgress&&"function"!==typeof e.progress&&(e.showStepNo?c("#steps").append("<li id='stepDesc"+f+"'>Step "+(f+1)+"<span>"+c(this).find("legend").html()+"</span></li>"):c("#steps").append("<li id='stepDesc"+f+"'>"+c(this).find("legend").html()+"</li>"));0==f?(m(f),x(f)):f==w-1?(c("#step"+f).hide(),p(f),c(A).addClass("next").detach().appendTo("#step"+f+"commands")):(c("#step"+f).hide(),p(f),m(f))});else if("string"===typeof e)if(f=e,y(),"function"===typeof k[f])k[f](u);else throw f+" is invalid command!";return this}})(jQuery);
// Ends selectize and formtowizard compiled




// ************************************************************************
// init jquery validation : additional plugins - rangeWords & notEqualTo

$.validator.addMethod( "rangeWords", function( value, element, params ) {
	var valueStripped = stripHtml( value ),
		regex = /\b\w+\b/g;
	return this.optional( element ) || valueStripped.match( regex ).length >= params[ 0 ] && valueStripped.match( regex ).length <= params[ 1 ];
});

$.validator.addMethod("notEqualTo",
function(value, element, param) {
    var notEqual = true; var i=0;
    value = $.trim(value);
    for (i = 0; i < param.length; i++) {
        if (value == $.trim($(param[i]).val())) { notEqual = false; }
    }
    return this.optional(element) || notEqual;
},"You've already selected this Speciality");   

// ************************************************************************





// Wordcount textarea

function wordCount( val ){
    var wom = val.match(/\b\w+\b/g);
    return {
        characters         : val.length,
        words              : wom ? wom.length : 0,
        lines              : val.split(/\r*\n/).length
    };
}

// universal wordcount - data-allowed (homemmade)
$(".word_count").on("keypress focus keyup paste", function(){ 
	  var a	= $(this).data("allow");
	  var v = wordCount( this.value );
  $(this).siblings('.allowed').html ("<span class='s13muted pull-right'>Lines: "+ v.lines + " | Chars: "+ v.characters + " | <span class=\"text-info bold\">Words: "+ v.words + " / "+a+"</span></span>");
});


// letter count textboxes
$('.countable').on("keypress focus keyup paste", function(){
	var allow= $(this).attr('maxlength');
    if(this.value.length > allow){
        return false;
	}
$(this).siblings('.tiny_hint').html("<span class='pull-right'>"+(this.value.length)+" / "+allow)+"</span>";
});

	
// ************************************************************************

// premium vs free maxItems definitions	!


if($('#c').length) 
{
	var free_premium_limits 	= 200;
	var keys_clients_workedin	= 200;
}
else
{
	var free_premium_limits 	= 5;
	var keys_clients_workedin	= 25;
}



// ************************************************************************





	
// get expertises
$.ajax({
  url: 'get_competencies',
  type: 'GET',
  dataType: 'json',

  success: function(options) {
	$('#pickcompetencies').selectize({
	    valueField: 'id',
	    labelField: 'competencies',
	    searchField:'competencies',
		options: options,
		preload: true,
		maxItems: 3
    });
    }
});


$('#sectors').selectize({
    valueField: 'sector',
    labelField: 'sector',
    searchField:'sector',
    plugins: ['remove_button'],
	persist: false,
    maxItems: free_premium_limits,
    create: true,
	openOnFocus: false,
	preload:true,
	createOnBlur: true,

	createFilter: function(input) { return input.length >= 3; },
    load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
            url: 'get_sectors',
            type: 'GET',
            dataType: 'json',
            data: { name: query, },
            error: function() { callback(); },
            success: function(res) { callback(res); }
        		});
        		
       }
});



$.ajax({
  url: 'get_countries',
  type: 'GET',
  dataType: 'json',

  success: function(options) {
	$('#residence, #citizen, #dual').selectize({
	    valueField: 'countryname',
	    labelField: 'countryname',
	    searchField:'countryname',
		options: options,
		preload: true,
    });
    }
});


$('#keys,#clients').selectize({
	maxItems: keys_clients_workedin,
	plugins: ['remove_button'],
	delimiter: ',',
	createFilter: function(input) { return input.length <=50; },
	createOnBlur: true,
	create: true
});


$('#hobbies').selectize({
	maxItems: free_premium_limits,
	plugins: ['remove_button'],
	delimiter: ',',
	preload:true,
	createFilter: function(input) { return input.length <=50; },
	createOnBlur: true,
	create: true
});   



$('#strengths').selectize({
    valueField: 'strength',
    labelField: 'strength',
    searchField:'strength',
   	plugins: ['remove_button'],
    maxItems: free_premium_limits,
    create: true,
	    createFilter: function(input) { return input.length <=50; },
		load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
            url: 'get_strengths',
            type: 'GET',
            dataType: 'json',
            data: { name: query, },
            error: function() { callback(); },
            success: function(res) { callback(res); }
        		});
        		
       },
		createOnBlur: true,
		openOnFocus: true,
    });

$.ajax({
  url: 'get_competencies',
  type: 'GET',
  dataType: 'json',

  success: function(options) {
	$('#co1, #co2, #co3').selectize({
	    valueField: 'competencies',
	    labelField: 'competencies',
	    searchField:'competencies',
		options: options,
		preload: true,
    });
    }
});
	    
$('#titles1,#titles2,#titles3').selectize({
    valueField: 'title',
    labelField: 'title',
    searchField:'title',
    plugins: ['remove_button'],
	persist: false,
    maxItems: free_premium_limits,
    create: true,
	openOnFocus: false,
	preload:true,
	createOnBlur: true,

	createFilter: function(input) { return input.length >= 3; },
    load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
            url: 'get_titles',
            type: 'GET',
            dataType: 'json',
            data: { name: query, },
            error: function() { callback(); },
            success: function(res) { callback(res); }
        		});
        		
       }
});


$('#languages').selectize({
    valueField: 'lang',
    labelField: 'lang',
    searchField:'lang',
    plugins: ['remove_button'],
    maxItems: free_premium_limits,
    create: true,
		openOnFocus: true,
		createOnBlur: true,
	    createFilter: function(input) { return input.length <=50; },
		load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
            url: 'get_languages',
            type: 'GET',
            dataType: 'json',
            data: { name: query, },
            error: function() { callback(); },
            success: function(res) { callback(res); }
        		});
       }
    });

$('#memberships,#publications,#highestacademic').selectize({
	maxItems: free_premium_limits,
	plugins: ['remove_button'],
	delimiter: ',',
	createFilter: function(input) { return input.length <=50; },
	createOnBlur: true,
	create: true
});


			
$.ajax({
  url: 'get_countries',
  type: 'GET',
  dataType: 'json',

  success: function(options) {
	$('#workedin').selectize({
	    valueField: 'countryname',
	    labelField: 'countryname',
	    searchField:'countryname',
	    plugins: ['remove_button'],
	    maxItems: keys_clients_workedin,
		options: options,
		preload: true,

    });
    }
});

// show/hide travel limitations & availabilty limitations textareas
$('input[name="g"],input[name="r"]').on('change', function() {
   	
   	// availabilty limitations
    if (($('input[name=g]:checked').val())=="no")		{	$('#g').prop('disabled', false); $('#availability').slideDown("slow"); }
	else												{   $('#g').prop('disabled', true);$('#availability').slideUp("slow");} 
   	// limitations 
    if (($('input[name=r]:checked').val())=="yes")		{	$('#r').prop('disabled', false); $('#limitations').slideDown("slow"); }
	else												{   $('#r').prop('disabled', true);$('#limitations').slideUp("slow");} 
	    
});        


// Dropzone - Profile Picture Management properties


Dropzone.autoDiscover = false;


$('.dz-preview').addClass('dz-complete');

$("div#thepics").dropzone({ 
		url: "upload/upload.php",
		paramName: "expertbaseorg", 
		maxFilesize: 5, // MB
		maxFiles:1,
		acceptedFiles: ".jpeg,.jpg,.png,.gif",
		
		init: function () 
		{
			
		var pic=$("#l").data("logo");
		var picpath="https://the-knowledge-brokers.sirv.com/expertbase/pic/";
		
			if (pic)
			{	
						var mockFile = { name: pic, size: 12345, type: 'image/jpeg' };       
						this.options.addedfile.call(this, mockFile);
						this.options.thumbnail.call(this, mockFile, picpath+pic+'?profile=150');
						mockFile.previewElement.classList.add('dz-success');
						mockFile.previewElement.classList.add('dz-complete');
						this.files.push(mockFile);
					
				
						this.on('addedfile', function(file) {
						    if (this.files.length > 1) {
						      this.removeFile(this.files[0]);
						    }
						  });		
			}		
		}
});



function stripHtml( value ) {

	// Remove html tags and space chars
	return value.replace( /<.[^<>]*?>/g, " " ).replace( /&nbsp;|&#160;/gi, " " )

	// Remove punctuation
	.replace( /[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "" );
}







(function($){
    $.fn.extend({
        donetyping: function(callback,timeout){
            timeout = timeout || 5000; // 5 seconds default timeout
            var timeoutReference,
                doneTyping = function(el){
                    if (!timeoutReference) return;
                    timeoutReference = null;
                    callback.call(el);
                };
            return this.each(function(i,el){
                var $el = $(el);
                $el.on('keyup keypress paste change',function(e){
                    if (e.type=='keyup' && e.keyCode!=8) return;
                    if (timeoutReference) clearTimeout(timeoutReference);
                    timeoutReference = setTimeout(function(){
                        doneTyping(el);
                    }, timeout);
                }).on('blur',function(){
                    doneTyping(el);
                });
            });
        }
    });
})(jQuery);




// ************************************************************************

	// exit prematurely (exit button) handler
	$("#save_exit").on("click",function(e){
	
		$.ajax({
	  
		type 	: 'POST',
		url  	: 'profilewizard_save',
		data 	: $("#profilewizard").serialize()+"&AutoSave=1",
		success : function(data){
		
			swal({
				title		: "Really Exit Wizard?",
				text		: "Your profile will be saved as 'Draft' - but will not be live(!). Continue working on it anytime you like. Take as much time as you need to complete it.",
				icon		: "success",
				buttons		: ["Stay","Exit"],
				dangerMode	: true,
				})
				.then((willCP) => {
				if (willCP) {
					setTimeout(function(){
						window.location.replace("dashboard#profile");
					},500);
				}
				});
			}
		});
	});


	// preview handler
	$("#preview").on("click",function(e){
	
		$.ajax({
		
		type : 'POST',
		url  : 'profilewizard_save',
		data :  $("#profilewizard").serialize()+"&AutoSave=1",
		success :  function(data){window.location.href =data;}
		});
	});


	// autosave handler
	$('.save_on_update').donetyping(function(){
		
		$.ajax({
		
		type 	: 'POST',
		url  	: 'profilewizard_save',
		data 	:  $("#profilewizard").serialize()+"&AutoSave=1",
		success :  function(data){ $('#issaved').show().delay(3000).fadeOut(); 	},
		error	: function(xhr, status, error){alert("HEAD'S UP: Can't AutoSave! The connection to our Servers got interrupted. This could be something temp. If this error persists please get in touch with us!");}
		});
	});



	// Main Submit function 'Submit' clicked
	
	function submitForm()
	{
		$.ajax({
		
		type 		: 	'POST',
		url  		: 	'profilewizard_save',
		data 		: 	$("#profilewizard").serialize()+"&AutoSave=10",
		success 	: 	function(data)
			      		{
				       
						swal({
						  title		: "Super Work!",
						  text		: "Your profile is saved and now with Expertbase for Review!",
						  icon		: "success",
							})
						.then((value) => {
							  if (value) {
								setTimeout(function(){
										window.location.replace("dashboard#profile");
									},500);
							   }
							});
			      
			      		}
	  });
	  
	}

// ************************************************************************


$(function()
{


	// form2wizard validate each step
	
	var $signupForm = $('#profilewizard');

	$signupForm.formToWizard({
		buttonTag: 'button',
		progress: function(i, count) {
			 $('#progress-complete').width(''+((i/count*100)+12.5)+'%');
			 
			 $(".item").removeClass("hilite");
			 $('#step_'+i).addClass("hilite");
		},
		validateBeforeNext: function(form, step) {
	        var stepIsValid = true;
	        var validator = form.validate();
	        $(":input", step).each( function(index) {
	            var x = validator.element(this);
	            stepIsValid = stepIsValid && (typeof x == 'undefined' || x);
	            
	            
	            	var errors = validator.numberOfInvalids();
				    if (errors) {
				      var message = errors == 1
				        ? '1 field left ...'
				        : errors + ' fields need your Attention.';
				      $("#errsummary").html("<div class='text-center'><div class='lgry'><svg><use href='/s.svg#info-circle'></use></svg>"+message+" <button type='submit' class='ca'>▸ Check Again</button></div></div>");
				      $("#errsummary,.ca").show();
				    } else {
				      $("#errsummary").hide();
				    }
	            
	        });
	        return stepIsValid;
	    },
	});
	
	$(document).on('click', '.ca', function(){
		$(".ca").hide("slow");
	});	

	// jump to step & highlight clicked menu item
	$('[id^="step_"]').on("click",function() {
		$(".item").removeClass("hilite");
		var j = $(this).attr('id');
		$(this).addClass("hilite");
		j=j.replace('step_', ''); j++;
		$signupForm.formToWizard( 'GotoStep',j);
		return false;
	});			



	// hack for handling enter on inputs! wtf			
	$('body').on("keypress",'input',function(e){
		var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
		  if(key == 13) {
		    e.preventDefault();
		    
		    var inputs = $('#profilepost').find(':input:visible');
		    var nextinput = 0;
		    if (inputs.index(this) < (inputs.length-1)) {
		      nextinput = inputs.index(this)+1;
		    }
		    if (inputs.length==1) {
		      $(this).blur().focus();
		    } else {
		      inputs.eq(nextinput).focus(); 
		    }
	  }});


if($("#editor").length)
{
	var globalTimeout = null; 
	$('#editor').summernote({ 
		callbacks: {
		    onKeydown: function(e) {
				var words = $(".note-editable").text();
				var totalwords = words.length;
				$("#total-caracteres").text(totalwords);
				
				
		if (globalTimeout != null) {
    clearTimeout(globalTimeout);
  }
  globalTimeout = setTimeout(function() {
    globalTimeout = null;  

				$.ajax({
				
				type 	: 'POST',
				url  	: 'profilewizard_save',
				data 	:  $("#profilewizard").serialize()+"&AutoSave=1",
				success :  function(data){ $('#issaved').show().delay(3000).fadeOut(); 	},
				error	: function(xhr, status, error){alert("HEAD'S UP: Can't AutoSave! The connection to our Servers got interrupted. This could be something temp. If this error persists please get in touch with us!");}
				});

  }, 2000); 		
				

		    }
		},	
		height : 500,
	});
}


 
 // main validation

jQuery.validator.setDefaults({ ignore: ":hidden:not(#summernote),.note-editable.panel-body"});
 
 $("#profilewizard").validate	
 ({
 		ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
 		ignore: [],
        rules: {
	        
	        	"fname"			: "required",
	        	"lname"			: "required",
	        	"company"		: "required",
	        	"sectors[]"		: "required",
	        	"co1"	  		: "required",
	        	"agegroup" 		: "required",
   	        	"languages[]"	: "required",
	        	"residence"		: "required",
	        	"citizen"		: "required",
	        	"clients"		: "required",
	        	"workedin[]"	: "required",
	        	"keywords"		: "required",
	        	"detail1"		: "required",
	        	"year1"			: "required",
	        	"town"			: "required",
	        	"ws[]"			: "required",
	        	"type"			: "required",

	        
        	   profiletitle: {
	                 required: true,
	                 minlength: 10,
	                 maxlength: 60
		             },
		        profile: {
	                 required: true,
	                 rangeWords: [100, 750]
		        	 },
		        pitch: {
	                 required: true,
	                 rangeWords: [1, 50]
		        	 },
		        detail1: {
	                 required: true,
	                 rangeWords: [10, 100]
		        	 },
	        	co2: {
					notEqualTo: ['#co1', '#co3'],
			        required: function(element){
			            return $("#detail2").val().length > 0 || $("#year2").val() > 0;}
			        },
		        co3: {
					notEqualTo: ['#co1', '#co2'],
			        required: function(element){
			            return $("#detail3").val().length > 0 || $("#year3").val() > 0;}
			        },
		        detail2: {
		             rangeWords: [10, 100],
				     required: function(element){
				        return $("#year2").val() > 0 || $("#co2").val().length >0; }
			        },
		        detail3: {
		             rangeWords: [10, 100],
				     required: function(element){
				        return $("#year3").val() > 0 || $("#co3").val().length >0;}
			        },
		        year2: {
			        range: [1, 50],
			         required: function(element){
			            return  $("#detail2").val().length > 0 || $("#co2").val().length >0;  }
			        },
		        year3: {
			        rangelength: [1, 50],
			        required: function(element){
			            return $("#detail3").val().length > 0 || $("#co3").val().length >0;}
			        },
				dual:{
					notEqualTo: ['#citizen'],
					},
		        fees: {
	                required: true,
	                number: true
					},
				global: { 
				    required: "#bb:checked"
			        },
				limitations: { 
				    required: "#dd:checked"
			        },
               	cdomain: {
				    url: true
				    },
				editor:{
	                 required: true,
	                 minlength: 500
					 },

            },		        	 
				    

	 messages: {
	 				profiletitle: 	"10 - 60 characters allowed",
	 				profile: 		"Please enter between 100 and 750 words.",
	 				pitch: 			"Please enter between 1 and 50 words.",
	 				detail1: 		"Required. 10 - 100 words allowed",
	 				detail2: 		"Require 10 - 100 words if you select Expertise No 2",
	 				detail3: 		"Require 10 - 100 words if you select Expertise No 3",
	 				fees:	 		"Please suggest your fees. Only NUMBERS allowed",
	 				year2: 			"Required if you picked Expertise 2 and/or Details 2",
	 				year3: 			"Required if you picked Expertise 3 and/or Details 3",
	 				co2: 			"Required if you enter Details 2 or Years 2. Expertise must not be same to 1 or 3.",
	 				co3: 			"Required if you enter Details 3 or Years 3. Expertise must not be same as 1 or 2.",
	 				global:			"If you are not available globally please state exceptions. Else click 'Yes'.",
	 				limitations:	"If you have limitations please add them. Else click 'No'.",
	 				dual:			"Cannot be same as your Citizenship.",
	 				cdomain: 		"Enter or paste full URL (e.g.: https://www.expertbase.org)",
	 				editor: 		"Require minumum 500 characters.",
	 				keywords:		"Think about some keywords which best describe what you do.",
	 			},
        				
				
	errorPlacement: function(error, element) {
						   
						var v=element.attr("name").substring(0, 3);
					    
						if (v=="res"||v=="cit"||v=="dua"||v=="lan"||v=="cli"||v=="wor"||v=="sec"||v=="key"||v=="co1"||v=="co2"||v=="co3"||v=="hig"||v=="mem"||v=="pub"||v=="edi") 
						{
							$("#err_"+v).html( error );  
						}
						else 
						{
							error.insertAfter(element);
                        }
					},
				
   			   submitHandler: submitForm	
        				
	});
});


// ************************************************************************

// Pro+

// ************************************************************************


// Add a video input
$('.addvideo').on("click", function() {
    $('.block').before(
    `<div class="relat">
    	<input type="text" class="balloon videos" value="" name="videolink[]" />
    	<div class="delvid pointer">
    		<svg><use href=\"s.svg#times\"></use></svg>
    	</div>
     </div>`);
});
// Remove this video input
$(document).on('click', '.delvid', function(){
	$(this).parent(".relat").remove();
});




// Dropzone - Premium Company Logo Management properties

var logo=$("#c").data("logo");
var logopath="https://the-knowledge-brokers.sirv.com/expertbase/company_logos/";


$("div#thelogo").dropzone({ 
	url: "upload/upload_logo.php",
	paramName: "logos", 
	maxFilesize: 5, // MB
	maxFiles:1,
	thumbnailWidth: 150,
	thumbnailHeight: 150,
	autoDiscover: false,
	dictDefaultMessage: "Drop your logo here or Click to upload.",
	acceptedFiles: ".jpeg,.jpg,.png,.gif",

init: function () 
{
	if (logo)
	{
		var mockFile = { name: logo, size: 12345, type: 'image/jpeg' };       
		this.options.addedfile.call(this, mockFile);
		this.options.thumbnail.call(this, mockFile, logopath+logo);
		mockFile.previewElement.classList.add('dz-success');
		mockFile.previewElement.classList.add('dz-complete');
		this.files.push(mockFile);
	
	

		this.on('addedfile', function(file) {
		    if (this.files.length > 1) {
		      this.removeFile(this.files[0]);
		    }
		});		
	}
	
}
});




// company sector
$.ajax({
url: 'get_sectors',
type: 'GET',
dataType: 'json',

success: function(options) {
$('#cindustries').selectize({
    valueField: 'sector',
    labelField: 'sector',
    searchField:'sector',
	options: options,
	preload: true,
	});
	}
});

// company type
$.ajax({
url: 'get_companytype',
type: 'GET',
dataType: 'json',

success: function(options) {
$('#ctype').selectize({
    valueField: 'type',
    labelField: 'type',
    searchField:'type',
	options: options,
	preload: true,
	});
	}
});
	

$('#cspecialities').selectize({
    valueField: 'competencies',
    labelField: 'competencies',
    searchField:'competencies',
    plugins: ['remove_button'],
	persist: false,
    maxItems: 25,
    create: true,
		openOnFocus: false,
	preload:true,

	createFilter: function(input) { return input.length >= 3; },
    load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
            url: 'get_competencies',
            type: 'GET',
            dataType: 'json',
            data: { name: query, },
            error: function() { callback(); },
            success: function(res) { callback(res); }
        		});
        		
       }
    });	




$('.firma').text($('#company').val());
$("#company").on("paste input propertychange", function(){
    $(".firma").text(this.value);
}); 




/************************************************************
	premium work samples
*************************************************************/

!function ($) {

	"use strict";

	// Global Onyx object
	var Onyx = Onyx || {};
						


	Onyx = {

	    /*** Fire all functions */
		init: function() {
			var self = this,
				obj;

			for (obj in self) {
				if ( self.hasOwnProperty(obj)) {
					var _method =  self[obj];
					if ( _method.selector !== undefined && _method.init !== undefined ) {
						if ( $(_method.selector).length > 0 ) {
							_method.init();
						}
					}
				}
			}
		},


		/*** Files upload*/
		userFilesDropzone: {
			selector: '#worksamples',
			init: function() {
				var base = this,
					container = $(base.selector);

				base.initFileUploader(base, '#worksamples');
			},
			initFileUploader: function(base, target) {

				var previewNode = document.querySelector("#onyx-dropzone-template");
				previewNode.id = "";

				var previewTemplate = previewNode.parentNode.innerHTML;
				previewNode.parentNode.removeChild(previewNode);

				var onyxDropzone = new Dropzone(target, {
					url: "upload/file-upload.php",
	                maxFiles: 50,
					maxFilesize: 5,
					acceptedFiles: "image/*,application/pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.odt,.rtf",
					previewTemplate: previewTemplate,
					previewsContainer: "#previews",
					clickable: true,

					createImageThumbnails: true,
					dictDefaultMessage: "Drop or pick files to upload.", 
					dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
					dictFileTooBig: "File is too big ({{filesize}}MB). Max filesize: {{maxFilesize}}MB.",
					dictInvalidFileType: "You can't upload files of this type.", 
				
					init:function() {
					
					var ths=this;

						$.get('upload/get_worksamplefiles', function(data) {
	
				            $.each(JSON.parse(data), function(key,value){

				                var i 		 = { name: value.filename }; 
				                var s		 = "";
				                var m		 = i.name.slice(-3);
				                
								// PDF or so? show respective icon
				                if 		(m==="pdf")					{	s="pdf.png";  		}
					            else if (m==="doc" || m==="ocx")	{	s="word.png"; 		}
					            else if (m==="xls" || m==="lsx")    {   s="xls.png"; 		}
					            else if (m==="ppt" || m==="ptx")    {   s="ppt.png"; 		}
					            else if (m==="odt" || m==="rtf")    {   s="doc.png"; 		}

								else 								{   s=value.filename; 	}


				                 
								i.accepted = true;
				                ths.emit( "addedfile", i );
								ths.emit( "thumbnail", i, "worksamples/"+s);
								ths.files.push( i ); 
								ths.emit("complete", i);
								
				            });
				            if (JSON.parse(data).length) {$(".preview-container").css('visibility', 'visible')};
				        });

						    ths.on("complete", function (file) {
						      if (ths.getUploadingFiles().length === 0 && ths.getQueuedFiles().length === 0) {
									
									// add inputs after images are uploaded
									$('.dz-processing .ws_inp').each(function(i, obj) {
			            			$(this).html("<input type='text' placeholder='Add a Short Description' class='balloon save_on_update' name='ws[]' maxlength='255'>");
							        });
						      }
						    });
					},
					accept: function(file, done) {
						
						var s		="";
				        var m		= file.name.slice(-3);
				        
				        if 			(m==="pdf") 				{	s="pdf.png";	}
			            else if 	(m==="doc" || m==="ocx")	{	s="word.png"; 	}
			            else if 	(m==="xls" || m==="lsx")    {   s="xls.png"; 	}
			            else if 	(m==="ppt" || m==="ptx")    {   s="ppt.png"; 	}
			            else if 	(m==="odt" || m==="rtf")    {   s="doc.png"; 	}
				        
			            if (s.length){  this.emit("thumbnail", file, "worksamples/"+s); }

	            		
						
						done();
							swal({
							  title: "Upload/s Successful!",
							  text: "Now, just add some description!",
							  buttons: false,
							  icon: "success",
							  timer: 3000,
							});
				        }

				});

				Dropzone.autoDiscover = false;

				onyxDropzone.on("addedfile", function(file) { 
					$('.preview-container').css('visibility', 'visible');
				});

				onyxDropzone.on('dragenter', function () {
					$(target).addClass("hover");
				});

				onyxDropzone.on('dragleave', function () {
					$(target).removeClass("hover");			
				});

				onyxDropzone.on('drop', function () {
					$(target).removeClass("hover");	
				});

				onyxDropzone.on('removedfile', function (file) {
					$.ajax({
						type: "POST",
						url: "upload/file-upload",
						data: {
							target_file: file.name,
							delete_file: 1
						}
					});


				});

				onyxDropzone.on("success", function(file, response) {
					let parsedResponse = JSON.parse(response);
					file.upload_ticket = parsedResponse.file_link;
				});
			}
		}
	}
		Onyx.init();
}(jQuery);



// Worksamples - repopulate
var d=[];

$.get('upload/get_worksamplefiles', function(data) {

$.each(JSON.parse(data), function(key,value){
d.push(value.described); 

});

var m=0;	
$('.ws_inp').each(function() {
	
	if (d[m]!="" && typeof d[m]!= 'undefined'){var ab="value='"+d[m]+"'";}
	else {var ab="";}
	$(this).html("<input type='text' placeholder='Add a Short Description' class='balloon save_on_update' name='ws[]' maxlength='255'" + ab + ">");
	m++;
});
	
});




// autocomplete


var placeSearch, autocomplete;
var componentForm = {
  locality: 'long_name',
  country: 'long_name',
};

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')),
      {types: ['geocode']});

  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}
