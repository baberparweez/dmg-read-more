(()=>{"use strict";var e,t={313:()=>{const e=window.wp.blocks,t=window.React,r=window.wp.i18n,o=window.wp.data,a=window.wp.element,s=window.wp.blockEditor,n=window.wp.components,l=JSON.parse('{"UU":"create-block/post-search"}');(0,e.registerBlockType)(l.UU,{edit:({attributes:e,setAttributes:l})=>{const{selectedPostId:c,selectedPostTitle:i,selectedPostPermalink:d}=e,[p,h]=(0,a.useState)(""),m=(0,o.useSelect)((e=>e("core").getEntityRecords("postType","post",{per_page:10,search:p})),[p]);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(s.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,r.__)("Post Selection","post-search")},(0,t.createElement)(n.TextControl,{label:(0,r.__)("Search Posts","post-search"),value:p,onChange:e=>h(e)}),m&&m.map((e=>(0,t.createElement)(n.Button,{key:e.id,onClick:()=>(e=>{l({selectedPostId:e.id,selectedPostTitle:e.title.rendered,selectedPostPermalink:e.link})})(e)},e.title.rendered))))),(0,t.createElement)(s.RichText,{tagName:"p",className:"post_search--read_more",value:i?`Read More: <a href="${d}">${i}</a>`:"",onChange:()=>{}}))},save:({attributes:e})=>{const{selectedPostTitle:r,selectedPostPermalink:o}=e;return(0,t.createElement)("div",{className:"post_search--container"},(0,t.createElement)(s.RichText.Content,{tagName:"p",className:"post_search--read_more",value:r?`Read More: <a href="${o}">${r}</a>`:""}))}})}},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,r,a,s)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){for(var[r,a,s]=e[d],l=!0,c=0;c<r.length;c++)(!1&s||n>=s)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(l=!1,s<n&&(n=s));if(l){e.splice(d--,1);var i=a();void 0!==i&&(t=i)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var a,s,[n,l,c]=r,i=0;if(n.some((t=>0!==e[t]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(c)var d=c(o)}for(t&&t(r);i<n.length;i++)s=n[i],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=globalThis.webpackChunkpost_search=globalThis.webpackChunkpost_search||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=o.O(void 0,[350],(()=>o(313)));a=o.O(a)})();