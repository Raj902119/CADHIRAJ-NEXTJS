(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1327],{8883:function(e,t,r){Promise.resolve().then(r.bind(r,8232))},8232:function(e,t,r){"use strict";var a=r(7437),n=r(2265),i=r(6267),s=r(1326),l=r(2786),o=r(511),c=r(8433),d=r(335),m=r(4990),h=r(1002),x=r(6548),u=r(5512),j=r(4434),f=r(3966),g=r(3111),b=r(6724),Z=r(1364),p=r(4269),y=r(7082),w=r(7278);t.default=()=>{let{mutateAsync:e,isLoading:t}=(0,w.$q)(),[r,v]=(0,n.useState)({firstname:"",lastname:"",email:"",phone:"",message:""}),[I,P]=(0,n.useState)(!1),[S,C]=(0,n.useState)(null),F=e=>{let{name:t,value:r}=e.target;"phone"===t?(""===r||/^[0-9\b]+$/.test(r))&&r.length<=10&&v(e=>({...e,[t]:r})):v(e=>({...e,[t]:r}))},D=async t=>{if(t.preventDefault(),C(null),!r.firstname||!r.lastname||!r.email||!r.phone||!r.message){C("All fields are required.");return}if(!/^\d{10}$/.test(r.phone)){C("Phone number must be exactly 10 digits.");return}let a={firstname:r.firstname,lastname:r.lastname,email:r.email,phone:r.phone,message:r.message};try{await e(a),v({firstname:"",lastname:"",email:"",phone:"",message:""}),P(!0)}catch(e){C("Failed to send message. Please try again.")}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{imageUrl:"/assets/carrer.jpg",breadcrumb:"Contact",headline:"Contact"}),(0,a.jsx)(s.Z,{bgcolor:"white",color:"text.primary",py:3,children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(s.Z,{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",ml:2,children:(0,a.jsx)(o.Z,{variant:"h4",color:"primary",children:"Contact"})}),(0,a.jsxs)(c.ZP,{container:!0,spacing:4,mt:2,children:[(0,a.jsx)(c.ZP,{item:!0,xs:12,lg:6,children:(0,a.jsxs)(c.ZP,{container:!0,spacing:4,children:[(0,a.jsxs)(c.ZP,{item:!0,xs:12,sm:6,children:[(0,a.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(d.Z,{href:"mailto:cadhirajostwal@gmail.com",color:"primary",children:(0,a.jsx)(u.Z,{})}),(0,a.jsxs)(s.Z,{ml:2,children:[(0,a.jsx)(o.Z,{variant:"subtitle1",children:"Email"}),(0,a.jsx)(o.Z,{variant:"body2",color:"textSecondary",children:"Contact our team via email."})," ",(0,a.jsxs)(o.Z,{variant:"body2",color:"primary",children:[" ","cadhirajostwal@gmail.com"," "]})," "]})," "]})," "]}),(0,a.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(d.Z,{href:"https://www.instagram.com/cadhirajostwal",color:"primary",target:"_blank",children:(0,a.jsx)(g.Z,{})}),(0,a.jsxs)(s.Z,{ml:2,children:[(0,a.jsx)(o.Z,{variant:"subtitle1",children:"Instagram"}),(0,a.jsx)(o.Z,{variant:"body2",color:"textSecondary",children:"Follow us on Instagram for updates."})]})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(d.Z,{href:"https://www.youtube.com/@CADhirajOstwal",color:"primary",target:"_blank",children:(0,a.jsx)(b.Z,{})}),(0,a.jsxs)(s.Z,{ml:2,children:[(0,a.jsx)(o.Z,{variant:"subtitle1",children:"YouTube"}),(0,a.jsx)(o.Z,{variant:"body2",color:"textSecondary",children:"Check out our videos on YouTube."})]})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(d.Z,{href:"https://www.linkedin.com/in/cadhirajostwal",color:"primary",target:"_blank",children:(0,a.jsx)(Z.Z,{})}),(0,a.jsxs)(s.Z,{ml:2,children:[(0,a.jsx)(o.Z,{variant:"subtitle1",children:"LinkedIn"}),(0,a.jsx)(o.Z,{variant:"body2",color:"textSecondary",children:"Connect with us on LinkedIn."})]})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(d.Z,{href:"https://x.com/cadhirajostwal",color:"primary",target:"_blank",children:(0,a.jsx)(p.Z,{})}),(0,a.jsxs)(s.Z,{ml:2,children:[(0,a.jsx)(o.Z,{variant:"subtitle1",children:"X"}),(0,a.jsx)(o.Z,{variant:"body2",color:"textSecondary",children:"Follow us on Twitter for updates."})]})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(d.Z,{href:"https://www.facebook.com/dhiraj.ostwal",color:"primary",target:"_blank",children:(0,a.jsx)(y.Z,{})}),(0,a.jsxs)(s.Z,{ml:2,children:[(0,a.jsx)(o.Z,{variant:"subtitle1",children:"Facebook"}),(0,a.jsx)(o.Z,{variant:"body2",color:"textSecondary",children:"Connect with us on Facebook."})]})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(j.Z,{color:"primary"}),(0,a.jsxs)(s.Z,{ml:2,children:[(0,a.jsx)(o.Z,{variant:"subtitle1",children:"Office"}),(0,a.jsx)(o.Z,{variant:"body2",color:"textSecondary",children:"Come say hello at our office HQ."}),(0,a.jsx)(o.Z,{variant:"body2",color:"primary",children:"2nd Floor, Shree Krishna, 7, Opp Kiosk Koffee, Shirole Road, off Fergusson College Road, Pune, Maharashtra 411004"})]})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(f.Z,{color:"primary"}),(0,a.jsxs)(s.Z,{ml:2,children:[(0,a.jsx)(o.Z,{variant:"subtitle1",children:"Phone"}),(0,a.jsx)(o.Z,{variant:"body2",color:"textSecondary",children:"Mon-Fri from 8am to 5pm."}),(0,a.jsx)(o.Z,{variant:"body2",color:"primary",children:"+91 7020045454"})]})]})})]})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,lg:6,children:(0,a.jsx)(m.Z,{elevation:3,sx:{p:4,bgcolor:"grey.100"},children:(0,a.jsx)("form",{onSubmit:D,children:(0,a.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(h.Z,{fullWidth:!0,label:"First Name",name:"firstname",placeholder:"John",variant:"outlined",value:r.firstname,onChange:F})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(h.Z,{fullWidth:!0,label:"Last Name",name:"lastname",placeholder:"Doe",variant:"outlined",value:r.lastname,onChange:F})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(h.Z,{fullWidth:!0,label:"Email Address",name:"email",placeholder:"johndoe@example.com",variant:"outlined",value:r.email,onChange:F})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(h.Z,{fullWidth:!0,label:"Phone Number",name:"phone",type:"text",placeholder:"1234567890",variant:"outlined",value:r.phone,onChange:F,error:!!S&&S.includes("Phone number"),helperText:S&&S.includes("Phone number")?"Phone number must be exactly 10 digits.":""})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,children:(0,a.jsx)(h.Z,{fullWidth:!0,label:"Message",name:"message",placeholder:"Your message",variant:"outlined",multiline:!0,rows:4,value:r.message,onChange:F})}),S&&(0,a.jsx)(c.ZP,{item:!0,xs:12,children:(0,a.jsx)(o.Z,{color:"error",children:S})}),I&&(0,a.jsx)(c.ZP,{item:!0,xs:12,children:(0,a.jsx)(o.Z,{color:"green",children:"Message sent successfully!"})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,children:(0,a.jsx)(x.Z,{fullWidth:!0,variant:"contained",color:"primary",size:"large",type:"submit",disabled:t,children:t?"Sending...":"Send message"})})]})})})})]})]})})]})}},6267:function(e,t,r){"use strict";var a=r(7437);r(2265);var n=r(1579),i=r.n(n),s=r(6648),l=r(1948);t.Z=e=>{let{imageUrl:t,breadcrumb:r,headline:n}=e;return(0,a.jsx)("div",{className:i().first,children:(0,a.jsxs)("div",{className:i().img,children:[(0,a.jsx)(s.default,{className:i().image,src:t,alt:"career image",fill:!0,style:{objectFit:"cover"}}),(0,a.jsxs)("nav",{className:i().nav11,style:{"--bs-breadcrumb-divider":">"},"aria-label":"breadcrumb",children:[(0,a.jsxs)("ol",{className:"breadcrumb",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsxs)("a",{style:{textDecoration:"none",color:"white"},href:"/",children:["Home ",(0,a.jsx)(l.default,{fontSize:"19px"})," "]})}),(0,a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",style:{color:"white"},children:r})]}),(0,a.jsx)("h3",{children:n})]})]})})}},7278:function(e,t,r){"use strict";r.d(t,{$q:function(){return u},TE:function(){return f},_5:function(){return j}});var a=r(6007),n=r(8999);let i={url:"https://cloud.appwrite.io/v1",projectId:"6673bc300024d51da27a",databaseId:"6673bd5a001a9aedfe0e",storageId:"6673beee001b627e4cfa",carerrCollectionId:"6673bd64002a2dd705ed",contactCollectionId:"6673c1ac0016e65ccee0",meetingsCollectionId:"6675547500022dad0d3c"},s=new n.KU;s.setEndpoint(i.url),s.setProject(i.projectId),new n.mR(s);let l=new n.Lg(s),o=new n.Ke(s);async function c(e){try{let t=await l.createDocument(i.databaseId,i.contactCollectionId,n.ID.unique(),{FirstName:e.firstname,LastName:e.lastname,Email:e.email,Phone:e.phone,Message:e.message,SubmitDate:new Date().toISOString(),admin:"6673dfce000cb39229e0"});if(!t)throw Error("Failed to Contact Us");return t}catch(e){throw console.error(e),e}}async function d(e){try{if(!e.file)throw Error("No file provided");let t=await m(e.file);if(!t)throw Error("File upload failed");let r=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{let t=o.getFilePreview(i.storageId,e);if(!t)throw Error("Failed to get file preview");return t}catch(e){console.error(e)}}(t.$id);if(!r)throw await h(t.$id),Error("Failed to get file preview");let a=await l.createDocument(i.databaseId,i.carerrCollectionId,n.ID.unique(),{Name:e.name,Interest:e.interest,ResumeUrl:r,ImageId:t.$id,Email:e.email,Phone:e.tel,SubmitDate:new Date().toISOString(),admin:"6673dfce000cb39229e0"});if(!a)throw await h(t.$id),Error("Failed to create document");return a}catch(e){throw console.error(e),e}}async function m(e){try{return await o.createFile(i.storageId,n.ID.unique(),e)}catch(e){console.log(e)}}async function h(e){try{return await o.deleteFile(i.storageId,e),{status:"ok"}}catch(e){console.log(e)}}async function x(e){try{let t=await l.createDocument(i.databaseId,i.meetingsCollectionId,n.ID.unique(),{WhatsAppNumber:e.whatsappNumber,Subject:e.subject,DateTime:e.datetime,SubmitDate:new Date().toISOString(),admin:"6673dfce000cb39229e0"});if(!t)throw Error("Failed to Book Meeting");return console.log(t),t}catch(e){throw console.error(e),e}}new n.OV(s);let u=()=>(0,a.D)({mutationFn:e=>c(e)}),j=()=>(0,a.D)({mutationFn:e=>d(e)}),f=()=>(0,a.D)({mutationFn:e=>x(e)})},1579:function(e){e.exports={first:"Banner_first__oPHeH",img:"Banner_img__tVGir",nav11:"Banner_nav11__gqLVr"}}},function(e){e.O(0,[7182,1986,5778,5396,1181,3770,2971,7023,1744],function(){return e(e.s=8883)}),_N_E=e.O()}]);