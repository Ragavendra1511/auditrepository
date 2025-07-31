javascript:!function(){let e="__wcag_floating_button",t="__wcag_overlay_tool",n=document.getElementById(e);if(n){n.remove();let i=document.getElementById(t);i&&i.remove();return}let o=document.createElement("div");o.id=e;let r=document.createElement("div");r.textContent="\uD83D\uDD0D";let l=document.createElement("div");l.textContent="WCAG",o.appendChild(r),o.appendChild(l),o.style.cssText=`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #000000, #4a4444ff);
    color: white;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    box-shadow: 0 4px 20px rgba(0, 124, 186, 0.4);
    transition: all 0.3s ease;
    user-select: none;
    line-height: 1.1;
    text-align: center;
`,o.addEventListener("mouseenter",function(){this.style.transform="scale(1.1)",this.style.boxShadow="0 6px 25px rgba(0, 124, 186, 0.6)"}),o.addEventListener("mouseleave",function(){this.style.transform="scale(1)",this.style.boxShadow="0 4px 20px rgba(0, 124, 186, 0.4)"});let s=!1,a,d,c,p;o.addEventListener("mousedown",function(e){s=!0,a=e.clientX,d=e.clientY;let t=this.getBoundingClientRect();c=window.innerWidth-t.right,p=window.innerHeight-t.bottom,this.style.cursor="grabbing"}),document.addEventListener("mousemove",function(e){if(!s)return;let t=a-e.clientX,n=e.clientY-d,i=Math.max(0,Math.min(window.innerWidth-60,c+t)),r=Math.max(0,Math.min(window.innerHeight-60,p-n));o.style.right=i+"px",o.style.bottom=r+"px"}),document.addEventListener("mouseup",function(){s&&(s=!1,o.style.cursor="pointer")}),o.addEventListener("click",function(e){if(s)return;let n=prompt("Enter WCAG SC number (e.g., 2.1.1, 1.4.3):");n&&function e(n){let i=o.children[0].textContent,r=o.children[1].textContent;o.children[0].textContent="⏳",o.children[1].textContent="Loading",fetch("https://raw.githubusercontent.com/Ragavendra1511/a11y/main/test2-1.4.3.json").then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.json()}).then(e=>{o.children[0].textContent=i,o.children[1].textContent=r;let l=Object.values(e),s=[];for(let a of l){if(!a)continue;let d=[a.Compliance_Check,a.compliance_check,a.SC,a.sc,a.success_criteria,a.Issue_Title,a.issue_title,a.title,a.number,a.id].filter(e=>e),c=d.some(e=>{let t=String(e).toLowerCase(),i=n.toLowerCase();return t.includes(i)||t===i||t.endsWith(i)||i.includes(t)});c&&s.push(a)}if(0===s.length){let p=l.slice(0,10).map((e,t)=>{let n=e.Compliance_Check||e.compliance_check||e.SC||e.sc||e.Issue_Title||e.issue_title||`Entry ${t}`;return n});alert(`No match found for "${n}"

Available entries (first 10):
${p.join("\n")}`);return}u=s,x=n,function e(n,i){let o=document.getElementById(t);o&&o.remove();let r=document.createElement("div");r.id=t,r.style.cssText=`
        position: fixed;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        border: 3px solid #007cba;
        padding: 0;
        z-index: 999999998;
        color: #333;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        max-width: 900px;
        width: 95vw;
        border-radius: 12px;
        max-height: 90vh;
        line-height: 1.5;
        transition: all 0.3s ease;
        pointer-events: auto;
    `;let l=document.createElement("div");l.style.cssText=`
        background: #007cba;
        color: white;
        padding: 10px 20px;
        border-radius: 9px 9px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: move;
        user-select: none;
    `;let s=h("h3",`WCAG ${n} - Found ${i.length} issue${i.length>1?"s":""}`,"margin: 0; font-size: 16px; flex: 1;"),a=document.createElement("div");a.style.cssText="display: flex; gap: 8px;";let d=h("button","\uD83D\uDCCB Copy","background: rgba(255,255,255,0.2); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;"),c=h("button","➖","background: rgba(255,255,255,0.2); color: white; border: none; padding: 5px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;"),p=h("button","❌","background: rgba(255,255,255,0.2); color: white; border: none; padding: 5px 8px; border-radius: 4px; cursor: pointer; font-size: 12px;");a.appendChild(d),a.appendChild(c),a.appendChild(p),l.appendChild(s),l.appendChild(a);let u=document.createElement("div");u.id="search-bar",u.style.cssText=`
        background: #f8f9fa;
        padding: 15px 20px;
        border-bottom: 1px solid #e9ecef;
        display: flex;
        align-items: center;
        gap: 10px;
    `;let x=document.createElement("input");x.type="text",x.placeholder="Search in issues... (Ctrl+F)",x.style.cssText=`
        flex: 1;
        padding: 8px 12px;
        border: 2px solid #e9ecef;
        border-radius: 6px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s ease;
    `;let g=h("button","✕",`
        background: #6c757d;
        color: white;
        border: none;
        padding: 8px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        opacity: 0.7;
        transition: opacity 0.2s ease;
    `),$=h("span",`Showing all ${i.length} issues`,"font-size: 12px; color: #6c757d; white-space: nowrap;");$.id="search-results",u.appendChild(x),u.appendChild(g),u.appendChild($);let C=document.createElement("div");C.id="content-container",C.style.cssText="padding: 25px; overflow-y: auto; max-height: calc(70vh - 120px);";let _=document.createElement("div");i.forEach((e,t)=>{let n=document.createElement("div");n.setAttribute("data-issue-index",t),n.style.cssText=`
            margin-bottom: 30px;
            padding: 20px;
            background: ${t%2==0?"#f8f9fa":"#ffffff"};
            border: 1px solid #e9ecef;
            border-radius: 8px;
            border-left: 4px solid #007cba;
        `;let i=document.createElement("div");i.style.cssText="margin-bottom: 15px;";let o=e.Issue_Title||e.issue_title||e.title||`Issue ${t+1}`,r=h("h4",`${t+1}. ${o}`,"margin: 0 0 5px 0; color: #495057; font-size: 16px; font-weight: 600;");r.setAttribute("data-field","title");let l=e.Issue_Severity||e.issue_severity||e.severity;if(l){let s=h("span",l,`
                display: inline-block;
                padding: 2px 8px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: bold;
                margin-left: 10px;
                background: ${"high"===l.toLowerCase()?"#dc3545":"medium"===l.toLowerCase()?"#ffc107":"#28a745"};
                color: white;
            `);i.appendChild(r),i.appendChild(s)}else i.appendChild(r);n.appendChild(i);let a=e.Compliance_Check||e.compliance_check||e.SC||e.sc;if(a){let d=document.createElement("div");d.style.cssText="margin-bottom: 15px; font-size: 13px;";let c=h("strong","Compliance Check: ","color: #6c757d;"),p=h("span",a,"background: #e9ecef; padding: 2px 6px; border-radius: 3px;");d.appendChild(c),d.appendChild(p),n.appendChild(d)}let u=document.createElement("div");u.style.cssText="margin-bottom: 20px;";let x=h("strong","Description: ","color: #495057;"),f=document.createElement("div");f.style.cssText="margin-top: 5px; padding: 10px; background: rgba(108, 117, 125, 0.1); border-radius: 4px;",f.setAttribute("data-field","description");let g=e.Issue_Description||e.issue_description||e.description||"No description available";f.textContent=g,u.appendChild(x),u.appendChild(f),n.appendChild(u);let b=document.createElement("div");b.style.cssText="padding: 15px; background: rgba(0, 124, 186, 0.05); border: 1px solid rgba(0, 124, 186, 0.2); border-radius: 6px;";let $=h("strong","Recommendation:","color: #007cba; display: block; margin-bottom: 10px;"),y=document.createElement("div");y.style.cssText="line-height: 1.6;",y.setAttribute("data-field","recommendation");let C=e.Recommendation||e.recommendation||e.solution,v=m(C),E=v.split("\n");if(E.forEach(e=>{if(e.trim()){let t=function e(t){let n=document.createElement("div");if(n.style.cssText="margin-bottom: 8px;",t.startsWith("**")&&t.endsWith(":**"))n.style.cssText+="font-weight: bold; color: #007cba; margin: 15px 0 8px 0;",n.textContent=t.replace(/\*\*/g,"");else if(t.match(/^\d+\./)){n.style.cssText+="margin-left: 0px; color: #495057;";let i=document.createElement("span");i.style.cssText="color: #007cba; font-weight: bold;",i.textContent=t.match(/^\d+\./)[0];let o=document.createElement("span");o.textContent=" "+t.replace(/^\d+\./,"").trim(),n.appendChild(i),n.appendChild(o)}else t.startsWith("•")&&(n.style.cssText+="margin-left: 20px; color: #6c757d;"),n.textContent=t;return n}(e);y.appendChild(t)}}),b.appendChild($),b.appendChild(y),e.Example_Fix||e.example_fix){let k=document.createElement("div");k.style.cssText="margin-top: 15px; padding: 10px; background: #f8f9fa; border-left: 3px solid #28a745; border-radius: 0 4px 4px 0;";let w=h("strong","Example Fix: ","color: #28a745;"),T=h("code",e.Example_Fix||e.example_fix,"background: #e9ecef; padding: 2px 6px; border-radius: 3px; font-family: monospace; display: block; margin-top: 5px; white-space: pre-wrap;");k.appendChild(w),k.appendChild(T),b.appendChild(k)}n.appendChild(b),_.appendChild(n)}),C.appendChild(_),r.appendChild(l),r.appendChild(u),r.appendChild(C),document.body.appendChild(r),x.addEventListener("input",function(){b(this.value)}),x.addEventListener("focus",function(){this.style.borderColor="#007cba"}),x.addEventListener("blur",function(){this.style.borderColor="#e9ecef"}),g.addEventListener("click",function(){x.value="",b(""),x.focus()}),g.addEventListener("mouseenter",function(){this.style.opacity="1"}),g.addEventListener("mouseleave",function(){this.style.opacity="0.7"}),f=function(e){(e.ctrlKey||e.metaKey)&&"f"===e.key&&(e.preventDefault(),x.focus(),x.select()),"Escape"===e.key&&(document.activeElement===x&&x.value?(x.value="",b("")):(r.remove(),f&&(document.removeEventListener("keydown",f),f=null)))},document.addEventListener("keydown",f);let v=!1;c.addEventListener("click",function(){(v=!v)?(u.style.display="none",C.style.display="none",r.style.width="400px",r.style.maxWidth="400px",c.textContent="➕",s.textContent=`WCAG ${n} - Minimized`):(u.style.display="flex",C.style.display="block",r.style.width="95vw",r.style.maxWidth="900px",c.textContent="➖",s.textContent=`WCAG ${n} - Found ${i.length} issue${i.length>1?"s":""}`)}),d.addEventListener("click",function(){let e=`WCAG ${n} - ${i.length} Recommendation${i.length>1?"s":""}

`;var t,o,r="✅ Copied!",l="\uD83D\uDCCB Copy";i.forEach((t,n)=>{let i=t.Issue_Title||t.issue_title||t.title||`Issue ${n+1}`,o=t.Issue_Description||t.issue_description||t.description,r=t.Recommendation||t.recommendation||t.solution,l=m(r);e+=`${n+1}. ${i}

`,o&&(e+=`Description: ${o}

`),e+=`Recommendation:
${l}

`,e+=`${"=".repeat(60)}

`}),t=e,o=this,navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(()=>{o.textContent=r,o.style.background="#28a745",setTimeout(()=>{o.textContent=l,o.style.background="rgba(255,255,255,0.2)"},2e3)}).catch(()=>y(t,o,r,l)):y(t,o,r,l)}),p.addEventListener("click",function(){r.remove(),f&&(document.removeEventListener("keydown",f),f=null)});let E=!1,k,w,T,L;l.addEventListener("mousedown",function(e){if("BUTTON"===e.target.tagName)return;E=!0,k=e.clientX,w=e.clientY;let t=r.getBoundingClientRect();T=t.left,L=t.top,l.style.cursor="grabbing"}),document.addEventListener("mousemove",function(e){if(!E)return;let t=e.clientX-k,n=e.clientY-w;r.style.left=T+t+"px",r.style.top=L+n+"px",r.style.transform="none"}),document.addEventListener("mouseup",function(){E&&(E=!1,l.style.cursor="move")}),setTimeout(()=>x.focus(),100)}(n,s)}).catch(e=>{o.children[0].textContent=i,o.children[1].textContent=r,console.error("WCAG Tool Error:",e),alert(`Failed to load WCAG data: ${e.message}

Please check your internet connection.`)})}(n.trim())});let u=[],x="",f=null;function m(e){if(!e)return"No recommendation available";if("string"==typeof e)return e;if("object"==typeof e){let t="";return Object.keys(e).forEach(n=>{let i=e[n];Array.isArray(i)?""===n||"recommendations"===n||"steps"===n?t+=i.map((e,t)=>`${t+1}. ${e}`).join("\n")+"\n\n":"Techniques"===n?t+=`**${n}:**
${i.map(e=>`• ${e}`).join("\n")}

`:t+=`**${n}:**
${i.map(e=>`• ${e}`).join("\n")}

`:"string"==typeof i&&("WCAG_Reference"===n?t+=`**Reference:** ${i}

`:""!==n&&(t+=`**${n}:** ${i}

`))}),t.trim()||"Recommendation structure available but content could not be parsed"}return String(e)}function h(e,t,n=""){let i=document.createElement(e);return i.textContent=t,n&&(i.style.cssText=n),i}function g(e,t){if(!t||!e)return e;let n=RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");return e.replace(n,'<mark style="background: #ffeb3b; padding: 2px 4px; border-radius: 2px;">$1</mark>')}function b(e){let t=document.querySelectorAll("[data-issue-index]"),n=0;if(!e.trim()){t.forEach(e=>{e.style.display="block";let t=e.querySelectorAll("mark");t.forEach(e=>{let t=e.parentNode;t.replaceChild(document.createTextNode(e.textContent),e),t.normalize()})}),$(t.length,t.length);return}let i=e.toLowerCase();t.forEach(t=>{let o=parseInt(t.getAttribute("data-issue-index")),r=u[o];if(!r){t.style.display="none";return}let l=(r.Issue_Title||r.issue_title||r.title||"").toLowerCase(),s=(r.Issue_Description||r.issue_description||r.description||"").toLowerCase(),a=r.Recommendation||r.recommendation||r.solution,d=m(a).toLowerCase(),c=l.includes(i)||s.includes(i)||d.includes(i);if(c){t.style.display="block",n++;let p=t.querySelector('[data-field="title"]'),x=t.querySelector('[data-field="description"]'),f=t.querySelector('[data-field="recommendation"]');if(p){let h=r.Issue_Title||r.issue_title||r.title||`Issue ${o+1}`;p.innerHTML=g(h,e)}if(x){let b=r.Issue_Description||r.issue_description||r.description||"No description available";x.innerHTML=g(b,e)}if(f){let $=m(a);f.innerHTML=g($,e)}}else t.style.display="none"}),$(n,t.length)}function $(e,t){let n=document.getElementById("search-results");n&&(n.textContent=e===t?`Showing all ${t} issues`:`Showing ${e} of ${t} issues`)}function y(e,t,n,i){let o=document.createElement("textarea");o.value=e,o.style.cssText="position: fixed; opacity: 0; pointer-events: none;",document.body.appendChild(o),o.select();try{document.execCommand("copy"),t.textContent=n,t.style.background="#28a745",setTimeout(()=>{t.textContent=i,t.style.background="rgba(255,255,255,0.2)"},2e3)}catch(r){t.textContent="❌ Copy failed",setTimeout(()=>t.textContent=i,2e3)}document.body.removeChild(o)}document.body.appendChild(o),console.log("\uD83D\uDD0D WCAG Floating Button Tool Activated!"),console.log("Click the floating button in the bottom-right corner to lookup WCAG success criteria."),console.log("\uD83D\uDCCB New Features:"),console.log("  • Search field in overlay to filter results"),console.log("  • Press Ctrl+F (or Cmd+F on Mac) to quickly focus search"),console.log("  • Search works across issue titles, descriptions, and recommendations"),console.log("  • Results are highlighted and filtered in real-time")}();
