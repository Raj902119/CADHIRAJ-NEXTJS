(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4118,6476,2896,8495,881,806,5353,1394,5870,1247,5159,3507,2936,7573,2208,5732,6431,1271,7300,4598,6621,4681,2493,9892,7109,950,2346,465,5397,9636,6981,4262,5351,8585,4888,3119,7435,6351,3732,9960],{9058:function(e,t,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,1612)),Promise.resolve().then(n.t.bind(n,5766,23))},1612:function(e,t,n){"use strict";var r=n(7437),a=n(2265),o=n(1588),i=n(5766),s=n.n(i);t.default=()=>{let[e,t]=(0,a.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:s().Ads,children:(0,r.jsxs)("div",{className:s().blogButton,children:[(0,r.jsx)("div",{className:s().whatsappButton,children:(0,r.jsxs)("button",{className:s().blogBtn,onClick:()=>window.open("https://wa.me/7020045454?text=Hi%20there,%20I'm%20interested%20in%20your%20services.","_blank","noopener noreferrer"),children:[(0,r.jsx)("img",{width:"25",height:"25",src:"https://img.icons8.com/color/48/whatsapp--v1.png",alt:"whatsapp"}),"Connect with WhatsApp"]})}),(0,r.jsx)("div",{className:s().appointmentButton,children:(0,r.jsxs)("button",{className:s().blogBtn,onClick:()=>t(!0),children:[(0,r.jsx)("img",{width:"25",height:"25",src:"https://img.icons8.com/color/48/tear-off-calendar--v1.png",alt:"appointment"}),"Book an Appointment"]})})]})}),e&&(0,r.jsx)(o.Z,{closeModal:()=>t(!1)})]})}},1588:function(e,t,n){"use strict";var r=n(7437),a=n(2265),o=n(3211),i=n.n(o),s=n(7278);t.Z=e=>{let{closeModal:t}=e,{mutateAsync:n,isLoading:o}=(0,s.TE)(),[l,c]=(0,a.useState)({whatsappNumber:"",subject:"",datetime:""}),[d,u]=(0,a.useState)(!1),[m,h]=(0,a.useState)(null),p=e=>{let{name:t,value:n}=e.target;"whatsappNumber"===t?(""===n||/^[0-9\b]+$/.test(n))&&n.length<=10&&c(e=>({...e,[t]:n})):c(e=>({...e,[t]:n}))},b=async e=>{if(e.preventDefault(),h(null),!l.whatsappNumber||!l.subject||!l.datetime){h("All fields are required.");return}if(!/^\d{10}$/.test(l.whatsappNumber)){h("WhatsApp number must be exactly 10 digits.");return}let t={whatsappNumber:l.whatsappNumber,subject:l.subject,datetime:l.datetime};try{await n(t),c({whatsappNumber:"",subject:"",datetime:""}),u(!0)}catch(e){h("Failed to send message. Please try again.")}};return(0,r.jsx)("div",{className:i().formOverlay,children:(0,r.jsxs)("div",{className:i().formContent,children:[(0,r.jsx)("button",{className:i().closeButton,onClick:t,children:"\xd7"}),(0,r.jsx)("h2",{children:"Book an Appointment"}),d&&!m&&(0,r.jsx)("div",{className:"successMessage",style:{color:"green"},children:"Meeting scheduled successfully!"}),(0,r.jsxs)("form",{onSubmit:b,className:i().appointmentForm,children:[(0,r.jsx)("label",{htmlFor:"whatsappNumber",children:"WhatsApp Number:"}),(0,r.jsx)("input",{type:"text",id:"whatsappNumber",name:"whatsappNumber",value:l.whatsappNumber,onChange:p,required:!0}),m&&m.includes("WhatsApp number")&&(0,r.jsx)("div",{className:"errorMessage",style:{color:"red"},children:"WhatsApp number must be exactly 10 digits."}),(0,r.jsx)("label",{htmlFor:"subject",children:"Subject:"}),(0,r.jsx)("input",{type:"text",id:"subject",name:"subject",value:l.subject,onChange:p,required:!0}),(0,r.jsx)("label",{htmlFor:"datetime",children:"Date and Time:"}),(0,r.jsx)("input",{type:"datetime-local",id:"datetime",name:"datetime",value:l.datetime,onChange:p,required:!0}),m&&!m.includes("WhatsApp number")&&(0,r.jsx)("div",{className:"errorMessage",style:{color:"red"},children:m}),(0,r.jsx)("button",{type:"submit",className:i().submitButton,disabled:o,children:o?"Submitting...":"Submit"})]})]})})}},7278:function(e,t,n){"use strict";n.d(t,{$q:function(){return p},TE:function(){return g},_5:function(){return b}});var r=n(6007),a=n(8999);let o={url:"https://cloud.appwrite.io/v1",projectId:"6673bc300024d51da27a",databaseId:"6673bd5a001a9aedfe0e",storageId:"6673beee001b627e4cfa",carerrCollectionId:"6673bd64002a2dd705ed",contactCollectionId:"6673c1ac0016e65ccee0",meetingsCollectionId:"6675547500022dad0d3c"},i=new a.KU;i.setEndpoint(o.url),i.setProject(o.projectId),new a.mR(i);let s=new a.Lg(i),l=new a.Ke(i);async function c(e){try{let t=await s.createDocument(o.databaseId,o.contactCollectionId,a.ID.unique(),{FirstName:e.firstname,LastName:e.lastname,Email:e.email,Phone:e.phone,Message:e.message,SubmitDate:new Date().toISOString(),admin:"6673dfce000cb39229e0"});if(!t)throw Error("Failed to Contact Us");return t}catch(e){throw console.error(e),e}}async function d(e){try{if(!e.file)throw Error("No file provided");let t=await u(e.file);if(!t)throw Error("File upload failed");let n=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{let t=l.getFilePreview(o.storageId,e);if(!t)throw Error("Failed to get file preview");return t}catch(e){console.error(e)}}(t.$id);if(!n)throw await m(t.$id),Error("Failed to get file preview");let r=await s.createDocument(o.databaseId,o.carerrCollectionId,a.ID.unique(),{Name:e.name,Interest:e.interest,ResumeUrl:n,ImageId:t.$id,Email:e.email,Phone:e.tel,SubmitDate:new Date().toISOString(),admin:"6673dfce000cb39229e0"});if(!r)throw await m(t.$id),Error("Failed to create document");return r}catch(e){throw console.error(e),e}}async function u(e){try{return await l.createFile(o.storageId,a.ID.unique(),e)}catch(e){console.log(e)}}async function m(e){try{return await l.deleteFile(o.storageId,e),{status:"ok"}}catch(e){console.log(e)}}async function h(e){try{let t=await s.createDocument(o.databaseId,o.meetingsCollectionId,a.ID.unique(),{WhatsAppNumber:e.whatsappNumber,Subject:e.subject,DateTime:e.datetime,SubmitDate:new Date().toISOString(),admin:"6673dfce000cb39229e0"});if(!t)throw Error("Failed to Book Meeting");return console.log(t),t}catch(e){throw console.error(e),e}}new a.OV(i);let p=()=>(0,r.D)({mutationFn:e=>c(e)}),b=()=>(0,r.D)({mutationFn:e=>d(e)}),g=()=>(0,r.D)({mutationFn:e=>h(e)})},3211:function(e){e.exports={formOverlay:"Enquery_formOverlay__5twKB",formContent:"Enquery_formContent__doYnO",closeButton:"Enquery_closeButton__jhvus",appointmentForm:"Enquery_appointmentForm__G0ILD",submitButton:"Enquery_submitButton__MrTGe"}},5766:function(e){e.exports={mainContainer:"Blog_mainContainer__AblE9",title:"Blog_title__NvUBN",img:"Blog_img___h8p_",body:"Blog_body__zOjIt",links:"Blog_links__loLTa",blog:"Blog_blog__uyo_1",unordered1:"Blog_unordered1__iV02f",unordered2:"Blog_unordered2__8hkFc",unordered3:"Blog_unordered3__ZiCKi",unordered4:"Blog_unordered4__bqLE4",unordered5:"Blog_unordered5__tHg66",ordered1:"Blog_ordered1__JjDLK",linksBlock:"Blog_linksBlock__rh_dI",blogButton:"Blog_blogButton__v0Gd6",blogBtn:"Blog_blogBtn__2iN7l"}}},function(e){e.O(0,[7182,1986,5778,231,2971,7023,1744],function(){return e(e.s=9058)}),_N_E=e.O()}]);