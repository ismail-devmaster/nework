(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{7355:(e,s,a)=>{Promise.resolve().then(a.bind(a,6092))},6092:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>Z});var t=a(7437),r=a(2265),l=a(495),d=a(6013),i=a(3102),n=a(7135),o=a(5273),c=a(3146),m=a(4421),x=a(1647),h=a(6294),f=a(4756),u=a(4867),g=a(7440);let p=f.fC,N=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(f.ck,{ref:s,className:(0,g.cn)("border-b",a),...r})});N.displayName="AccordionItem";let w=r.forwardRef((e,s)=>{let{className:a,children:r,...l}=e;return(0,t.jsx)(f.h4,{className:"flex",children:(0,t.jsxs)(f.xz,{ref:s,className:(0,g.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",a),...l,children:[r,(0,t.jsx)(u.v4q,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})})});w.displayName=f.xz.displayName;let b=r.forwardRef((e,s)=>{let{className:a,children:r,...l}=e;return(0,t.jsx)(f.VY,{ref:s,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...l,children:(0,t.jsx)("div",{className:(0,g.cn)("pb-4 pt-0",a),children:r})})});b.displayName=f.VY.displayName;var j=a(2022),y=a(9913),v=a(6600),k=a(9832),R=a(4086),_=a(4241),C=a(500),P=a(1764);function Z(){let[e,s]=(0,r.useState)({firstName:"John",lastName:"Doe",email:"johndoe@example.com",phone:"+1 (555) 123-4567",dob:"1988-01-15",address:"123 Main St, Anytown, USA 12345",medicalHistory:"Allergies: Penicillin, Peanuts\nChronic Conditions: Hypertension (2015), Type 2 Diabetes (2018)\nPast Surgeries: Appendectomy (2010)"}),[a,f]=(0,r.useState)(!1);(0,r.useEffect)(()=>{a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[a]);let u=e=>{let{id:a,value:t}=e.target;s(e=>({...e,[a]:t}))};return(0,t.jsxs)("div",{className:"w-full max-w-6xl mx-auto p-4 transition-colors duration-200 dark:bg-gray-900",children:[(0,t.jsx)("h1",{className:"text-4xl font-extrabold text-gray-900 mb-8 text-center dark:text-white",children:"My profile"}),(0,t.jsxs)(o.mQ,{defaultValue:"view",className:"w-full",children:[(0,t.jsxs)(o.dr,{className:"grid w-full grid-cols-3 mb-12 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg",children:[(0,t.jsxs)(o.SP,{value:"view",className:"rounded-full py-3 transition-all duration-300 ease-in-out",children:[(0,t.jsx)(j.Z,{className:"w-5 h-5 mr-2"}),"View Profile"]}),(0,t.jsxs)(o.SP,{value:"edit",className:"rounded-full py-3 transition-all duration-300 ease-in-out",children:[(0,t.jsx)(y.Z,{className:"w-5 h-5 mr-2"}),"Edit Profile"]}),(0,t.jsxs)(o.SP,{value:"notifications",className:"rounded-full py-3 transition-all duration-300 ease-in-out",children:[(0,t.jsx)(v.Z,{className:"w-5 h-5 mr-2"}),"Notifications"]})]}),(0,t.jsxs)(o.nU,{value:"view",children:[(0,t.jsxs)(d.Zb,{className:"bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-none shadow-xl",children:[(0,t.jsx)(d.Ol,{children:(0,t.jsx)(d.ll,{className:"text-3xl font-bold text-gray-800 dark:text-white",children:"Personal Information"})}),(0,t.jsxs)(d.aY,{className:"space-y-8",children:[(0,t.jsxs)("div",{className:"flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8",children:[(0,t.jsxs)(x.qE,{className:"h-32 w-32 border-4 border-white dark:border-gray-700 shadow-lg",children:[(0,t.jsx)(x.F$,{src:"/placeholder.svg?height=128&width=128",alt:"Profile Picture"}),(0,t.jsxs)(x.Q5,{className:"text-3xl",children:[e.firstName[0],e.lastName[0]]})]}),(0,t.jsxs)("div",{className:"text-center md:text-left",children:[(0,t.jsxs)("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white",children:[e.firstName," ",e.lastName]}),(0,t.jsx)("p",{className:"text-gray-500 dark:text-gray-400 text-lg",children:"Patient ID: 123456"})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl",children:[(0,t.jsx)(j.Z,{className:"h-6 w-6 text-blue-500"}),(0,t.jsxs)("span",{className:"text-lg dark:text-white",children:[new Date().getFullYear()-new Date(e.dob).getFullYear()," ","years old"]})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl",children:[(0,t.jsx)(k.Z,{className:"h-6 w-6 text-green-500"}),(0,t.jsx)("span",{className:"text-lg dark:text-white",children:e.phone})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl",children:[(0,t.jsx)(R.Z,{className:"h-6 w-6 text-purple-500"}),(0,t.jsx)("span",{className:"text-lg dark:text-white",children:e.email})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl",children:[(0,t.jsx)(_.Z,{className:"h-6 w-6 text-red-500"}),(0,t.jsxs)("span",{className:"text-lg dark:text-white",children:["Born on ",new Date(e.dob).toLocaleDateString()]})]})]})]})]}),(0,t.jsxs)(d.Zb,{className:"mt-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-none shadow-xl",children:[(0,t.jsx)(d.Ol,{children:(0,t.jsx)(d.ll,{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Medical History Summary"})}),(0,t.jsx)(d.aY,{children:(0,t.jsx)(p,{type:"single",collapsible:!0,className:"w-full",children:(0,t.jsxs)(N,{value:"medical-history",children:[(0,t.jsx)(w,{className:"text-lg font-semibold dark:text-white",children:"Medical History"}),(0,t.jsx)(b,{children:(0,t.jsx)("p",{className:"text-gray-700 dark:text-gray-300 whitespace-pre-line",children:e.medicalHistory})})]})})})]}),(0,t.jsxs)(d.Zb,{className:"mt-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-none shadow-xl",children:[(0,t.jsx)(d.Ol,{children:(0,t.jsx)(d.ll,{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Insurance Information"})}),(0,t.jsx)(d.aY,{children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md",children:[(0,t.jsx)(C.Z,{className:"h-6 w-6 text-indigo-500"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold dark:text-white",children:"Provider:"}),(0,t.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"HealthGuard Insurance"})]})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md",children:[(0,t.jsx)(P.Z,{className:"h-6 w-6 text-yellow-500"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold dark:text-white",children:"Policy Number:"}),(0,t.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"HGI-987654321"})]})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md",children:[(0,t.jsx)(j.Z,{className:"h-6 w-6 text-teal-500"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold dark:text-white",children:"Group Number:"}),(0,t.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"HG-GROUP-001"})]})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md",children:[(0,t.jsx)(_.Z,{className:"h-6 w-6 text-pink-500"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold dark:text-white",children:"Coverage Period:"}),(0,t.jsx)("p",{className:"text-gray-700 dark:text-gray-300",children:"Jan 1, 2023 - Dec 31, 2023"})]})]})]})})]})]}),(0,t.jsx)(o.nU,{value:"edit",children:(0,t.jsxs)(d.Zb,{className:"bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-none shadow-xl",children:[(0,t.jsx)(d.Ol,{children:(0,t.jsx)(d.ll,{className:"text-3xl font-bold text-gray-800 dark:text-white",children:"Edit Personal Information"})}),(0,t.jsx)(d.aY,{children:(0,t.jsxs)("form",{className:"space-y-8",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n._,{htmlFor:"firstName",className:"text-lg font-medium dark:text-white",children:"First Name"}),(0,t.jsx)(i.I,{id:"firstName",value:e.firstName,onChange:u,className:"text-lg p-3 dark:bg-gray-700 dark:text-white"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n._,{htmlFor:"lastName",className:"text-lg font-medium dark:text-white",children:"Last Name"}),(0,t.jsx)(i.I,{id:"lastName",value:e.lastName,onChange:u,className:"text-lg p-3 dark:bg-gray-700 dark:text-white"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n._,{htmlFor:"email",className:"text-lg font-medium dark:text-white",children:"Email"}),(0,t.jsx)(i.I,{id:"email",type:"email",value:e.email,onChange:u,className:"text-lg p-3 dark:bg-gray-700 dark:text-white"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n._,{htmlFor:"phone",className:"text-lg font-medium dark:text-white",children:"Phone"}),(0,t.jsx)(i.I,{id:"phone",type:"tel",value:e.phone,onChange:u,className:"text-lg p-3 dark:bg-gray-700 dark:text-white"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n._,{htmlFor:"dob",className:"text-lg font-medium dark:text-white",children:"Date of Birth"}),(0,t.jsx)(i.I,{id:"dob",type:"date",value:e.dob,onChange:u,className:"text-lg p-3 dark:bg-gray-700 dark:text-white"})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n._,{htmlFor:"address",className:"text-lg font-medium dark:text-white",children:"Address"}),(0,t.jsx)(c.g,{id:"address",value:e.address,onChange:u,className:"text-lg p-3 dark:bg-gray-700 dark:text-white"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n._,{htmlFor:"medicalHistory",className:"text-lg font-medium dark:text-white",children:"Medical History"}),(0,t.jsx)(c.g,{id:"medicalHistory",rows:6,value:e.medicalHistory,onChange:u,className:"text-lg p-3 dark:bg-gray-700 dark:text-white"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n._,{htmlFor:"current-password",className:"text-lg font-medium dark:text-white",children:"Current Password"}),(0,t.jsx)(i.I,{id:"current-password",type:"password",className:"text-lg p-3 dark:bg-gray-700 dark:text-white"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n._,{htmlFor:"new-password",className:"text-lg font-medium dark:text-white",children:"New Password"}),(0,t.jsx)(i.I,{id:"new-password",type:"password",className:"text-lg p-3 dark:bg-gray-700 dark:text-white"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(n._,{htmlFor:"confirm-password",className:"text-lg font-medium dark:text-white",children:"Confirm New Password"}),(0,t.jsx)(i.I,{id:"confirm-password",type:"password",className:"text-lg p-3 dark:bg-gray-700 dark:text-white"})]})]})}),(0,t.jsx)(d.eW,{children:(0,t.jsx)(l.z,{onClick:()=>{console.log("Saving changes:",e)},className:"w-full text-lg py-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300",children:"Save Changes"})})]})}),(0,t.jsx)(o.nU,{value:"notifications",children:(0,t.jsxs)(d.Zb,{className:"bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-none shadow-xl",children:[(0,t.jsxs)(d.Ol,{children:[(0,t.jsx)(d.ll,{className:"text-3xl font-bold text-gray-800 dark:text-white",children:"Notification Preferences"}),(0,t.jsx)(d.SZ,{className:"text-lg text-gray-600 dark:text-gray-400",children:"Manage how you receive notifications"})]}),(0,t.jsxs)(d.aY,{className:"space-y-8",children:[(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsx)("h3",{className:"text-2xl font-semibold text-gray-800 dark:text-white",children:"Appointment Reminders"}),(0,t.jsxs)("div",{className:"flex items-center justify-between bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md",children:[(0,t.jsx)(n._,{htmlFor:"email-reminders",className:"text-lg dark:text-white",children:"Email Reminders"}),(0,t.jsx)(m.r,{id:"email-reminders"})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md",children:[(0,t.jsx)(n._,{htmlFor:"sms-reminders",className:"text-lg dark:text-white",children:"SMS Reminders"}),(0,t.jsx)(m.r,{id:"sms-reminders"})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md",children:[(0,t.jsx)(n._,{htmlFor:"push-reminders",className:"text-lg dark:text-white",children:"Push Notifications"}),(0,t.jsx)(m.r,{id:"push-reminders"})]})]}),(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsx)("h3",{className:"text-2xl font-semibold text-gray-800 dark:text-white",children:"Test Results Notifications"}),(0,t.jsxs)("div",{className:"space-y-2 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md",children:[(0,t.jsx)(n._,{htmlFor:"test-results-method",className:"text-lg dark:text-white",children:"Preferred Notification Method"}),(0,t.jsxs)(h.Ph,{children:[(0,t.jsx)(h.i4,{id:"test-results-method",className:"text-lg p-3 dark:bg-gray-600 dark:text-white",children:(0,t.jsx)(h.ki,{placeholder:"Select method"})}),(0,t.jsxs)(h.Bw,{children:[(0,t.jsx)(h.Ql,{value:"email",children:"Email"}),(0,t.jsx)(h.Ql,{value:"sms",children:"SMS"}),(0,t.jsx)(h.Ql,{value:"push",children:"Push Notification"})]})]})]})]}),(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsx)("h3",{className:"text-2xl font-semibold text-gray-800 dark:text-white",children:"General Announcements"}),(0,t.jsxs)("div",{className:"flex items-center justify-between bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md",children:[(0,t.jsx)(n._,{htmlFor:"general-announcements",className:"text-lg dark:text-white",children:"Receive General Announcements"}),(0,t.jsx)(m.r,{id:"general-announcements"})]})]})]}),(0,t.jsx)(d.eW,{children:(0,t.jsx)(l.z,{className:"w-full text-lg py-6 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition-all duration-300",children:"Save Notification Preferences"})})]})})]})]})}},1647:(e,s,a)=>{"use strict";a.d(s,{F$:()=>n,Q5:()=>o,qE:()=>i});var t=a(7437),r=a(2265),l=a(4458),d=a(7440);let i=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(l.fC,{ref:s,className:(0,d.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...r})});i.displayName=l.fC.displayName;let n=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(l.Ee,{ref:s,className:(0,d.cn)("aspect-square h-full w-full",a),...r})});n.displayName=l.Ee.displayName;let o=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(l.NY,{ref:s,className:(0,d.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...r})});o.displayName=l.NY.displayName},495:(e,s,a)=>{"use strict";a.d(s,{d:()=>n,z:()=>o});var t=a(7437),r=a(2265),l=a(1538),d=a(2218),i=a(7440);let n=(0,d.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=r.forwardRef((e,s)=>{let{className:a,variant:r,size:d,asChild:o=!1,...c}=e,m=o?l.g7:"button";return(0,t.jsx)(m,{className:(0,i.cn)(n({variant:r,size:d,className:a})),ref:s,...c})});o.displayName="Button"},6013:(e,s,a)=>{"use strict";a.d(s,{Ol:()=>i,SZ:()=>o,Zb:()=>d,aY:()=>c,eW:()=>m,ll:()=>n});var t=a(7437),r=a(2265),l=a(7440);let d=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("div",{ref:s,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...r})});d.displayName="Card";let i=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("div",{ref:s,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",a),...r})});i.displayName="CardHeader";let n=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("h3",{ref:s,className:(0,l.cn)("font-semibold leading-none tracking-tight",a),...r})});n.displayName="CardTitle";let o=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("p",{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",a),...r})});o.displayName="CardDescription";let c=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("div",{ref:s,className:(0,l.cn)("p-6 pt-0",a),...r})});c.displayName="CardContent";let m=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("div",{ref:s,className:(0,l.cn)("flex items-center p-6 pt-0",a),...r})});m.displayName="CardFooter"},3102:(e,s,a)=>{"use strict";a.d(s,{I:()=>d});var t=a(7437),r=a(2265),l=a(7440);let d=r.forwardRef((e,s)=>{let{className:a,type:r,...d}=e;return(0,t.jsx)("input",{type:r,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",a),ref:s,...d})});d.displayName="Input"},7135:(e,s,a)=>{"use strict";a.d(s,{_:()=>o});var t=a(7437),r=a(2265),l=a(8364),d=a(2218),i=a(7440);let n=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(l.f,{ref:s,className:(0,i.cn)(n(),a),...r})});o.displayName=l.f.displayName},6294:(e,s,a)=>{"use strict";a.d(s,{Bw:()=>h,Ph:()=>n,Ql:()=>f,i4:()=>c,ki:()=>o});var t=a(7437),r=a(2265),l=a(4867),d=a(7549),i=a(7440);let n=d.fC;d.ZA;let o=d.B4,c=r.forwardRef((e,s)=>{let{className:a,children:r,...n}=e;return(0,t.jsxs)(d.xz,{ref:s,className:(0,i.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...n,children:[r,(0,t.jsx)(d.JO,{asChild:!0,children:(0,t.jsx)(l.jnn,{className:"h-4 w-4 opacity-50"})})]})});c.displayName=d.xz.displayName;let m=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(d.u_,{ref:s,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,t.jsx)(l.g8U,{})})});m.displayName=d.u_.displayName;let x=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(d.$G,{ref:s,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,t.jsx)(l.v4q,{})})});x.displayName=d.$G.displayName;let h=r.forwardRef((e,s)=>{let{className:a,children:r,position:l="popper",...n}=e;return(0,t.jsx)(d.h_,{children:(0,t.jsxs)(d.VY,{ref:s,className:(0,i.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:l,...n,children:[(0,t.jsx)(m,{}),(0,t.jsx)(d.l_,{className:(0,i.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,t.jsx)(x,{})]})})});h.displayName=d.VY.displayName,r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(d.__,{ref:s,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",a),...r})}).displayName=d.__.displayName;let f=r.forwardRef((e,s)=>{let{className:a,children:r,...n}=e;return(0,t.jsxs)(d.ck,{ref:s,className:(0,i.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n,children:[(0,t.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,t.jsx)(d.wU,{children:(0,t.jsx)(l.nQG,{className:"h-4 w-4"})})}),(0,t.jsx)(d.eT,{children:r})]})});f.displayName=d.ck.displayName,r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(d.Z0,{ref:s,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",a),...r})}).displayName=d.Z0.displayName},4421:(e,s,a)=>{"use strict";a.d(s,{r:()=>i});var t=a(7437),r=a(2265),l=a(9646),d=a(7440);let i=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(l.fC,{className:(0,d.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a),...r,ref:s,children:(0,t.jsx)(l.bU,{className:(0,d.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});i.displayName=l.fC.displayName},5273:(e,s,a)=>{"use strict";a.d(s,{SP:()=>o,dr:()=>n,mQ:()=>i,nU:()=>c});var t=a(7437),r=a(2265),l=a(2447),d=a(7440);let i=l.fC,n=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(l.aV,{ref:s,className:(0,d.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",a),...r})});n.displayName=l.aV.displayName;let o=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(l.xz,{ref:s,className:(0,d.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",a),...r})});o.displayName=l.xz.displayName;let c=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)(l.VY,{ref:s,className:(0,d.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...r})});c.displayName=l.VY.displayName},3146:(e,s,a)=>{"use strict";a.d(s,{g:()=>d});var t=a(7437),r=a(2265),l=a(7440);let d=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,t.jsx)("textarea",{className:(0,l.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",a),ref:s,...r})});d.displayName="Textarea"},7440:(e,s,a)=>{"use strict";a.d(s,{cn:()=>l});var t=a(4839),r=a(6164);function l(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,r.m6)((0,t.W)(s))}}},e=>{var s=s=>e(e.s=s);e.O(0,[310,963,533,829,974,168,277,621,130,215,744],()=>s(7355)),_N_E=e.O()}]);