import{r as t,c as e,h as s,H as o,g as i}from"./p-5f21a674.js";import{i as r}from"./p-6a284815.js";const a=class{constructor(s){t(this,s),this.tabChange=e(this,"tabChange",7),this.boundMeasureChange=e(this,"boundMeasureChange",7),this.$tabs=[],this.enableMenu=!0,this.menuContainerWidth=300,this.handleResize=t=>{const[e]=t;this.enableMenu&&this.computeBounds(e.contentRect)}}getChildren(){return[].slice.call(this.$el.querySelectorAll(".pp-tab"))}connectedCallback(){this.configure()}configure(){this.$tabs=this.getChildren(),this.$tabs.forEach((t=>{t.setAttribute("tab-id",t.id||((t=21)=>{let e="",s=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let o=63&s[t];e+=o<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o<63?"_":"-"}return e})())})),this.enableMenu&&this.computeBounds(this.$el.getBoundingClientRect())}componentDidLoad(){new r(this.handleResize).observe(this.$el)}computeBounds(t){const e=Math.round(t.width);let s=0,o=0;const i=this.getChildren();i.forEach((t=>{t.setAttribute("tab-overflow","false"),o+=Math.floor(t.offsetWidth)}));const r=o>e;let a=[];if(r){for(let o=0;o<i.length;o+=1){const t=i[o];if(s+=Math.floor(t.offsetWidth),t.setAttribute("tab-overflow","false"),s>e-this.menuContainerWidth){this.boundChildRef=t.getAttribute("tab-id"),this.boundChild=t;break}}const t=i.findIndex((t=>t.getAttribute("tab-id")===this.boundChildRef));a=i.slice(t+1),a.forEach((t=>{t.setAttribute("tab-overflow","true")}))}else this.boundChildRef=null,this.boundChild=null;this.collapsible=r,this.boundMeasureChange.emit({containerWidth:e,overflowWidth:s,totalChildWidth:o,boundChildRef:this.boundChildRef,boundChild:this.boundChild,overflowChildrenIds:a.map((t=>t.getAttribute("tab-id")))})}disconnectedCallback(){this.$tabs.length&&(this.$tabs=[])}render(){return s(o,null,s("slot",{name:"pp-tab"}))}get $el(){return i(this)}};a.style=":host{list-style:none;--color-selected:var(--pp-color-tab-bar-selected, currentColor);display:flex}::slotted(.pp-tab){flex:0 0 auto;box-sizing:border-box;cursor:pointer;padding-left:2rem}::slotted(.pp-tab):first-child{padding-left:0}::slotted(.pp-tab[active])::after{content:' ';display:block;width:100%;margin-top:0.75rem;height:3px;background-color:var(--color-selected)}:host([enable-menu]){overflow:hidden}:host([enable-menu]) ::slotted(.pp-tab[tab-overflow=\"true\"]){transform:scale(0)}";export{a as pp_tabs}