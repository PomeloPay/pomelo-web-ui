import{r,h as o,H as t,g as i}from"./p-5f21a674.js";import{c as a}from"./p-280f9818.js";const e=class{constructor(o){r(this,o),this.size="md",this.status="",this.src="",this.alt="",this.initialLen=3}render(){const r=a("status",this.status),i=String(this.alt).split(" ").slice(0,this.initialLen).map((([r])=>r&&String(r).toUpperCase())).filter(Boolean).join("");return o(t,null,this.src?o("img",{src:this.src,alt:this.alt}):o("pp-text",{size:this.size,"data-alt":i},i),this.status&&o("div",{class:r}))}get $el(){return i(this)}};e.style=':host{display:block}pp-text{height:100%;width:100%;background-color:var(--pp-color-secondary);display:flex;align-items:center;justify-content:center;position:absolute;border-radius:9999px;border-width:1px;--border-opacity:1;border-color:#f5f5f5;border-color:rgba(245, 245, 245, var(--border-opacity));box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);z-index:10;--text-opacity:1;color:#fff;color:rgba(255, 255, 255, var(--text-opacity))}:host([size="sm"]){position:relative;width:2.5rem;height:2.5rem}:host([size="sm"])>img{border-radius:9999px;border-width:1px;--border-opacity:1;border-color:#f5f5f5;border-color:rgba(245, 245, 245, var(--border-opacity));box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);height:100%;width:100%}:host([size="sm"])>.status{position:absolute;top:0;right:0;height:0.5rem;width:0.5rem;margin-top:0.25rem;margin-bottom:0.25rem;border-width:2px;--border-opacity:1;border-color:#fff;border-color:rgba(255, 255, 255, var(--border-opacity));border-radius:9999px;--bg-opacity:1;background-color:#16cd88;background-color:rgba(22, 205, 136, var(--bg-opacity));z-index:10}:host([size="sm"])>.status.status-offline{--bg-opacity:1;background-color:#c8c8c8;background-color:rgba(200, 200, 200, var(--bg-opacity))}:host([size="md"]){position:relative;width:3rem;height:3rem;border-radius:9999px}:host([size="md"])>img{border-radius:9999px;border-width:1px;--border-opacity:1;border-color:#f5f5f5;border-color:rgba(245, 245, 245, var(--border-opacity));height:100%;width:100%}:host([size="md"])>.status{position:absolute;top:0;right:0;height:0.75rem;width:0.75rem;margin-top:0.25rem;margin-bottom:0.25rem;border-width:2px;--border-opacity:1;border-color:#fff;border-color:rgba(255, 255, 255, var(--border-opacity));border-radius:9999px;--bg-opacity:1;background-color:#16cd88;background-color:rgba(22, 205, 136, var(--bg-opacity));z-index:10}:host([size="md"])>.status.status-offline{--bg-opacity:1;background-color:#c8c8c8;background-color:rgba(200, 200, 200, var(--bg-opacity))}:host([size="lg"]){position:relative;width:4rem;height:4rem}:host([size="lg"])>img{border-radius:9999px;border-width:1px;--border-opacity:1;border-color:#f5f5f5;border-color:rgba(245, 245, 245, var(--border-opacity));box-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);height:100%;width:100%}:host([size="lg"])>.status{position:absolute;top:0;right:0;height:1rem;width:1rem;margin-top:0.25rem;margin-bottom:0.25rem;border-width:4px;--border-opacity:1;border-color:#fff;border-color:rgba(255, 255, 255, var(--border-opacity));border-radius:9999px;--bg-opacity:1;background-color:#16cd88;background-color:rgba(22, 205, 136, var(--bg-opacity));z-index:10}:host([size="lg"])>.status.status-offline{--bg-opacity:1;background-color:#c8c8c8;background-color:rgba(200, 200, 200, var(--bg-opacity))}';export{e as pp_avatar}