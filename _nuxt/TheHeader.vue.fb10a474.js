import{f as u,o as s,c as l,s as g,u as f,v as m,b as n,w as d,x as b,y as c,z as M,_ as z,a as i,d as _,r as y,A as D,j as S,B as C,C as $}from"./entry.390d73d9.js";import{_ as B}from"./nuxt-link.0b9736e8.js";const j=u({__name:"Avatar",props:{size:{}},setup(e){return(a,o)=>(s(),l("img",{class:g(["rounded-full",{"w-24 h-24":a.size==="large","w-10 h-10":a.size==="small"}]),src:"https://avatars.githubusercontent.com/u/45588799?v=4",alt:"Markus Kilendahl"},null,2))}}),A={key:0,role:"presentation",class:"absolute inset-x-1 w-full -bottom-[3px] h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-500/0 dark:via-teal-500/40 dark:to-teal-500/0"},N=u({__name:"NavigationItem",props:{url:{}},setup(e){const a=e,o=f(),t=m(()=>o.path===a.url);return(r,h)=>{const k=B;return s(),l("li",{class:g(["px-3 py-2 relative hover:text-teal-500",c(t)&&"text-teal-500"])},[n(k,{to:r.url},{default:d(()=>[b(r.$slots,"default")]),_:3},8,["to"]),c(t)?(s(),l("div",A)):M("",!0)],2)}}}),E={},I={class:"flex gap-3 bg-white py-0 justify-center h-10 items-center rounded-full dark:bg-zinc-800 ring-1 ring-zinc-900/5 px-3 dark:ring-white/10 dark:text-dark-text-primary text-sm shadow-md dark:shadow-none transition-shadow duration-500"};function L(e,a){const o=N;return s(),l("nav",null,[i("ul",I,[n(o,{url:"/"},{default:d(()=>[_("About")]),_:1}),n(o,{url:"/work"},{default:d(()=>[_("Work")]),_:1}),n(o,{url:"/articles"},{default:d(()=>[_("Articles")]),_:1})])])}const T=z(E,[["render",L]]),V=["aria-label"],H=i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"dark:hidden block w-6 h-6 fill-teal-50 stroke-teal-500 group-hover:stroke-teal-600"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"})],-1),Z=i("svg",{viewBox:"0 0 24 24","aria-hidden":"true",class:"hidden dark:block h-6 w-6 fill-zinc-700 stroke-zinc-500 transition group-hover:stroke-zinc-400"},[i("path",{d:"M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),F=[H,Z],K=u({__name:"ThemeToggle",props:{isDarkModeEnabled:{type:Boolean},onclick:{type:Function}},setup(e){const a=e,o=m(()=>a.isDarkModeEnabled?"Switch to light theme":"Switch to dark theme");return(t,r)=>(s(),l("button",{onClick:r[0]||(r[0]=(...h)=>t.onclick&&t.onclick(...h)),"aria-label":c(o),class:"group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"},F,8,V))}});function P(){const e=y(void 0);function a(){if(e.value===void 0){e.value=p()==="dark";return}e.value=!e.value,localStorage.setItem("theme",e.value?"dark":"light")}function o(){if(typeof localStorage<"u"){const t=localStorage.getItem("theme");t?(console.log(t),e.value=t==="dark"):(console.log("Using default"),e.value=p()==="dark"),localStorage.setItem("theme",e.value?"dark":"light"),document.documentElement.classList.toggle("dark",e.value)}}return D(o),S(e,t=>{document.documentElement.classList.toggle("dark",t)}),{isDarkMode:e,toggleDarkMode:a}}function p(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const R={class:"w-full flex justify-center h-16 absolute top-0"},U={class:"max-w-xl relative w-full justify-center items-center flex"},G=u({__name:"TheHeader",setup(e){const{isDarkMode:a,toggleDarkMode:o}=P(),t=f(),r=m(()=>t.path==="/");return(h,k)=>{const v=j,w=T,x=K;return s(),l("header",R,[i("div",U,[C(n(v,{class:"animate-fadeIn absolute left-0",size:"small"},null,512),[[$,!r.value]]),n(w),n(x,{class:"dark:text-neutral-200 text-neutral-800 absolute right-0",onclick:c(o),"is-dark-mode-enabled":c(a)},null,8,["onclick","is-dark-mode-enabled"])])])}}});export{G as _};