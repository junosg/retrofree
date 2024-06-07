import{d as v,z as b,p as g,x as k,s as C,o as h,c as U,a as r,w as c,i as f,b as s,y as p,k as _,n as A,r as B,h as D,A as S,l as w,T as M,B as P,g as V,e as y,C as E}from"./app-0iQL9H34.js";import{a as j,A as O}from"./AppButton-DmM89Ujo.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T=v({__name:"Modal",props:{show:{type:Boolean,required:!1,default:!1},maxWidth:{type:String,required:!1,default:"2xl"},closeable:{type:Boolean,required:!1,default:!0}},emits:["close"],setup(i,{expose:t,emit:o}){t();const e=i,a=o;b(()=>e.show,()=>{e.show?document.body.style.overflow="hidden":document.body.style.overflow="visible"});const d=()=>{e.closeable&&a("close")},l=n=>{n.key==="Escape"&&e.show&&d()};g(()=>document.addEventListener("keydown",l)),k(()=>{document.removeEventListener("keydown",l),document.body.style.overflow="visible"});const u=C(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[e.maxWidth]),m={props:e,emit:a,close:d,closeOnEscape:l,maxWidthClass:u};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),F={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},N=s("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),W=[N];function q(i,t,o,e,a,d){return h(),U(S,{to:"body"},[r(p,{"leave-active-class":"duration-200",persisted:""},{default:c(()=>[f(s("div",F,[r(p,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0",persisted:""},{default:c(()=>[f(s("div",{class:"fixed inset-0 transform transition-all",onClick:e.close},[...W],512),[[_,o.show]])]),_:1}),r(p,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",persisted:""},{default:c(()=>[f(s("div",{class:A(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",e.maxWidthClass])},[o.show?B(i.$slots,"default",{key:0}):D("v-if",!0)],2),[[_,o.show]])]),_:3})],512),[[_,o.show]])]),_:3})])}const z=x(T,[["render",q],["__file","/var/www/html/resources/js/Components/Modal.vue"]]),I=v({__name:"DeleteUserForm",setup(i,{expose:t}){t();const o=w(!1),e=w(null),a=M({password:""}),d=()=>{o.value=!0,P(()=>{var n;return(n=e.value)==null?void 0:n.focus()})},l=()=>{a.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>u(),onError:()=>{var n;return(n=e.value)==null?void 0:n.focus()},onFinish:()=>{a.reset()}})},u=()=>{o.value=!1,a.reset()},m={confirmingUserDeletion:o,passwordInput:e,form:a,confirmUserDeletion:d,deleteUser:l,closeModal:u,AppButton:j,AppInput:O,Modal:z};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}}),K={class:"space-y-6"},L=s("header",null,[s("h2",{class:"text-lg font-medium"},"Delete Account"),s("p",{class:"mt-1 text-sm"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),G={class:"p-6"},H=s("h2",{class:"text-lg font-medium"}," Are you sure you want to delete your account? ",-1),J=s("p",{class:"mt-1 text-sm"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),Q={class:"mt-6"},R={class:"flex justify-end gap-2 mt-6"};function X(i,t,o,e,a,d){return h(),V("section",K,[L,r(e.AppButton,{color:"danger",onClick:e.confirmUserDeletion},{default:c(()=>[y("Delete Account")]),_:1}),r(e.Modal,{show:e.confirmingUserDeletion,onClose:e.closeModal},{default:c(()=>[s("div",G,[H,J,s("div",Q,[r(e.AppInput,{label:"Password",modelValue:e.form.password,"onUpdate:modelValue":t[0]||(t[0]=l=>e.form.password=l),error:e.form.errors.password,"onUpdate:error":t[1]||(t[1]=l=>e.form.errors.password=l),placeholder:"password",type:"password",onKeyup:E(e.deleteUser,["enter"])},null,8,["modelValue","error"])]),s("div",R,[r(e.AppButton,{color:"default",onClick:e.closeModal},{default:c(()=>[y(" Cancel ")]),_:1}),r(e.AppButton,{color:"danger",disabled:e.form.processing,onClick:e.deleteUser},{default:c(()=>[y(" Delete Account ")]),_:1},8,["disabled"])])])]),_:1},8,["show"])])}const ee=x(I,[["render",X],["__file","/var/www/html/resources/js/Pages/Profile/Partials/DeleteUserForm.vue"]]);export{ee as default};
