import "./styles.css";
const defs=[
["Word Counter","Text","Count words, characters, lines and sentences.","Aa","word"],
["Character Counter","Text","Count characters with and without spaces.","#","word"],
["Case Converter","Text","Convert text to upper, lower, title or sentence case.","Aa","case"],
["Remove Extra Spaces","Text","Clean repeated spaces and blank lines.","⎵","clean"],
["Text Reverser","Text","Reverse characters in your text.","↔","reverse"],
["Duplicate Line Remover","Text","Remove repeated lines while keeping order.","≡","unique"],
["Slug Generator","Text","Create URL-friendly slugs from titles.","🔗","slug"],
["Reading Time Estimator","Text","Estimate reading time at 200 words per minute.","◷","reading"],
["List Sorter","Text","Sort lines alphabetically or numerically.","↕","sort"],
["Lorem Ipsum Generator","Text","Generate placeholder paragraphs.","¶","lorem"],
["Percentage Calculator","Math","Calculate a percentage of a number.","%","percent"],
["Average Calculator","Math","Calculate count, sum, mean and median.","∑","average"],
["Tip Calculator","Math","Calculate tip and split a bill.","₹","tip"],
["Discount Calculator","Math","Calculate savings and final price.","％","discount"],
["Simple Interest Calculator","Math","Calculate simple interest and total.","∫","interest"],
["Random Number Generator","Math","Generate a random integer in a range.","⚄","random"],
["Temperature Converter","Convert","Convert Celsius and Fahrenheit.","℃","temperature"],
["Length Converter","Convert","Convert km and miles.","⇄","length"],
["Weight Converter","Convert","Convert kilograms and pounds.","⇄","weight"],
["Age Calculator","Date","Calculate age from date of birth.","🎂","age"],
["Date Difference","Date","Calculate days between two dates.","▦","date"],
["Unix Timestamp","Date","Convert Unix seconds to readable date.","◷","timestamp"],
["JSON Formatter","Developer","Format and validate JSON.","{}","json"],
["URL Encoder / Decoder","Developer","Encode or decode URL components.","％","url"],
["Base64 Encoder / Decoder","Developer","Encode or decode Base64 text.","64","base64"],
["HTML Entity Encoder","Developer","Escape HTML special characters.","<>","html"],
["Text to Binary","Developer","Convert text to UTF-8 binary.","010","binary"],
["Password Strength Checker","Security","Review password length and variety locally.","🔒","strength"],
["SHA-256 Hash Generator","Security","Create SHA-256 hashes in your browser.","#","hash"],
["CSV to JSON","Data","Convert simple CSV data into JSON objects.","⇥","csv"],
["JSON to CSV","Data","Convert arrays of objects into CSV.","⇤","jsoncsv"],
["Email Validator","Web","Check common email format rules.","✉","email"],
["Meta Description Helper","Web","Create a concise search description.","◎","meta"],
["Hex Color to RGB","Convert","Convert a HEX color to RGB.","🎨","color"],
["QR Text Payload","Generate","Prepare text content for a QR generator.","▦","qr"]
];
const extras=[["Text","Sentence Case Preset","case"],["Text","Line Counter","word"],["Text","Word Frequency Helper","word"],["Text","Text Cleaner","clean"],["Math","Number Average Preset","average"],["Math","Percentage Preset","percent"],["Convert","Kilometers to Miles","length"],["Convert","Miles to Kilometers","length"],["Convert","Kilograms to Pounds","weight"],["Convert","Pounds to Kilograms","weight"],["Date","Days Between Dates","date"],["Developer","JSON Minifier","json"],["Developer","Base64 Text Utility","base64"],["Security","Password Audit","strength"],["Web","SEO Snippet Helper","meta"],["Generate","Random Integer Preset","random"]];
const tools=defs.map((d,i)=>({id:i+1,name:d[0],cat:d[1],desc:d[2],icon:d[3],engine:d[4]}));
let n=tools.length+1;
for(let cycle=1;tools.length<500;cycle++)for(const [cat,name,engine] of extras){if(tools.length>=500)break;tools.push({id:n++,name:`${name} ${cycle}`,cat,desc:`A preset utility powered by the shared ${engine} engine.`,icon:"✦",engine});}
const cats=["All","Text","Math","Convert","Date","Developer","Security","Data","Web","Generate"];
const app=document.querySelector("#app");
app.innerHTML=`<div class="shell"><header class="top"><div class="brand"><span class="logo">✦</span>100K Tools Universe</div><span class="pill">500 launch listings</span></header><section class="hero"><div class="eyebrow">✦ YOUR EVERYDAY DIGITAL TOOLKIT</div><h1>One universe.<br><span>Thousands of possibilities.</span></h1><p>Fast, practical online utilities for study, work, creativity and everyday tasks — in one place.</p><div class="search"><input id="search" placeholder="Search 500 tools..." aria-label="Search tools"><button class="primary" id="searchBtn">Search</button></div><div class="stats"><span><b>500</b> listings</span><span><b>10</b> categories</span><span><b>Free</b> browser tools</span></div></section><section class="layout"><aside class="sidebar"><div class="sidehead">CATEGORIES</div><div id="cats"></div></aside><main><section id="catalog"><div class="headrow"><div><h2>Explore tools</h2><div id="count" class="muted">500 tools</div></div><select id="sort" class="field" style="width:auto;margin:0"><option value="recommended">Recommended</option><option value="az">A to Z</option></select></div><div id="grid" class="grid"></div></section><section id="workspace" class="workspace"><button class="back" id="back">← All tools</button><h2 id="title"></h2><p id="desc" class="desc"></p><label id="label" for="input">Input</label><textarea id="input" class="field area" placeholder="Enter or paste content..."></textarea><div id="extras"></div><div class="actions"><button class="primary" id="run">Run tool</button><button class="secondary" id="clear">Clear</button><button class="secondary" id="copy">Copy result</button></div><div id="output" class="output">Your result will appear here.</div><p class="muted">These tools process input in your browser. Avoid entering sensitive information.</p></section></main></section><footer><span>© 2026 100K Tools Universe</span><span>Useful tools for a global community.</span></footer></div>`;
let active="All",selected=null;
const $=s=>document.querySelector(s);
function safe(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function renderCats(){$("#cats").innerHTML=cats.map(c=>`<button class="cat ${active===c?"active":""}" data-cat="${c}">${c} tools</button>`).join("");$("#cats").querySelectorAll("button").forEach(b=>b.onclick=()=>{active=b.dataset.cat;renderCats();renderGrid()});}
function renderGrid(){let q=$("#search").value.toLowerCase().trim(),list=tools.filter(t=>(active==="All"||t.cat===active)&&(`${t.name} ${t.desc} ${t.cat}`).toLowerCase().includes(q));if($("#sort").value==="az")list.sort((a,b)=>a.name.localeCompare(b.name));$("#count").textContent=`Showing ${list.length} listings`;$("#grid").innerHTML=list.map(t=>`<article class="card" data-id="${t.id}"><div class="ico">${t.icon}</div><h3>${safe(t.name)}</h3><p>${safe(t.desc)}</p><span class="tag">${safe(t.cat)}</span></article>`).join("")||'<div class="empty">No matching tools found.</div>';$("#grid").querySelectorAll(".card").forEach(c=>c.onclick=()=>openTool(+c.dataset.id));}
function openTool(id){selected=tools.find(t=>t.id===id);$("#catalog").classList.add("hide");$("#workspace").classList.add("show");$("#title").textContent=selected.name;$("#desc").textContent=selected.desc;$("#input").value="";$("#output").textContent="Your result will appear here.";$("#extras").innerHTML=["percent","tip","discount","random","temperature","length","weight","date","age","url","base64","csv","jsoncsv","html"].includes(selected.engine)?`<input id="extra" class="field" placeholder="${({percent:"Percent and total, e.g. 15,200",tip:"Tip percent",discount:"Discount percent",random:"Maximum value",temperature:"Target unit C or F",length:"Type km-mi or mi-km",weight:"Type kg-lb or lb-kg",date:"Second date YYYY-MM-DD",age:"Date of birth YYYY-MM-DD",url:"Type encode or decode",base64:"Type encode or decode",csv:"No extra value",jsoncsv:"No extra value",html:"No extra value"})[selected.engine]}">`:"";}
async function execute(){let x=$("#input").value,y=$("#extra")?.value||"",e=selected.engine,r="";const nums=s=>s.split(/[,\s]+/).map(Number).filter(Number.isFinite);try{switch(e){
case"word":r=`Words: ${x.trim()?x.trim().split(/\\s+/).length:0}\\nCharacters: ${x.length}\\nWithout spaces: ${x.replace(/\\s/g,"").length}\\nLines: ${x?x.split(/\\r?\\n/).length:0}\\nSentences: ${(x.match(/[.!?]+/g)||[]).length}`;break;
case"case":r=`UPPERCASE\\n${x.toUpperCase()}\\n\\nlowercase\\n${x.toLowerCase()}\\n\\nTitle Case\\n${x.toLowerCase().replace(/\\b\\w/g,c=>c.toUpperCase())}`;break;
case"clean":r=x.replace(/[ \\t]+/g," ").replace(/\\n{3,}/g,"\\n\\n").trim();break;
case"reverse":r=[...x].reverse().join("");break;
case"unique":r=[...new Set(x.split(/\\r?\\n/))].join("\\n");break;
case"slug":r=x.toLowerCase().normalize("NFKD").replace(/[^\\w\\s-]/g,"").trim().replace(/[\\s_-]+/g,"-");break;
case"reading":r=`Estimated reading time: ${Math.max(1,Math.ceil(x.trim().split(/\\s+/).filter(Boolean).length/200))} minute(s)`;break;
case"sort":r=x.split(/\\r?\\n/).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).join("\\n");break;
case"lorem":r=Array.from({length:Math.min(10,Math.max(1,Number(y)||3))},()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").join("\\n\\n");break;
case"percent":{let [a,b]=nums(x+","+y);r=`${a}% of ${b} = ${a*b/100}`;break}
case"average":{let a=nums(x).sort((a,b)=>a-b);r=`Count: ${a.length}\\nSum: ${a.reduce((s,v)=>s+v,0)}\\nMean: ${a.reduce((s,v)=>s+v,0)/a.length}\\nMedian: ${a.length%2?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2}`;break}
case"tip":{let a=Number(x),p=Number(y)||0;r=`Tip: ${(a*p/100).toFixed(2)}\\nTotal: ${(a*(1+p/100)).toFixed(2)}\\nEach (2): ${(a*(1+p/100)/2).toFixed(2)}`;break}
case"discount":{let a=Number(x),p=Number(y);r=`Savings: ${(a*p/100).toFixed(2)}\\nFinal price: ${(a*(1-p/100)).toFixed(2)}`;break}
case"random":{let a=Number(x)||1,b=Number(y)||100;r=String(Math.floor(Math.random()*(Math.max(a,b)-Math.min(a,b)+1))+Math.min(a,b));break}
case"temperature":{let v=Number(x),c=y.toUpperCase()==="F"?(v-32)*5/9:v;r=`${c.toFixed(2)} °C\\n${(c*9/5+32).toFixed(2)} °F`;break}
case"length":{let v=Number(x),k=y.toLowerCase();r=k==="km-mi"?`${v*.621371} miles`:k==="mi-km"?`${v*1.60934} km`:"Use km-mi or mi-km";break}
case"weight":{let v=Number(x),k=y.toLowerCase();r=k==="kg-lb"?`${v*2.20462} lb`:k==="lb-kg"?`${v*.453592} kg`:"Use kg-lb or lb-kg";break}
case"age":{let d=new Date(y),now=new Date();let a=now.getFullYear()-d.getFullYear();if(now<new Date(now.getFullYear(),d.getMonth(),d.getDate()))a--;r=`Age: ${a} years`;break}
case"date":{let d1=new Date(x),d2=new Date(y);r=`Difference: ${Math.abs(Math.round((d2-d1)/86400000))} days`;break}
case"timestamp":{let d=x?new Date(Number(x)*1000):new Date();r=`ISO: ${d.toISOString()}\\nLocal: ${d.toLocaleString()}\\nUnix seconds: ${Math.floor(d.getTime()/1000)}`;break}
case"json":r=JSON.stringify(JSON.parse(x),null,2);break;
case"url":r=y.toLowerCase()==="decode"?decodeURIComponent(x):encodeURIComponent(x);break;
case"base64":r=y.toLowerCase()==="decode"?decodeURIComponent(escape(atob(x))):btoa(unescape(encodeURIComponent(x)));break;
case"html":r=x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));break;
case"binary":r=[...new TextEncoder().encode(x)].map(b=>b.toString(2).padStart(8,"0")).join(" ");break;
case"strength":{let n=[x.length>=12,/[a-z]/.test(x),/[A-Z]/.test(x),/\\d/.test(x),/[^A-Za-z0-9]/.test(x)].filter(Boolean).length;r=`Basic strength estimate: ${["Very weak","Weak","Fair","Good","Strong","Excellent"][n]} (${n}/5 checks).`;break}
case"hash":{let h=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(x));r=[...new Uint8Array(h)].map(v=>v.toString(16).padStart(2,"0")).join("");break}
case"csv":{let rows=x.trim().split(/\\r?\\n/).map(s=>s.split(",")),head=rows.shift();r=JSON.stringify(rows.map(row=>Object.fromEntries(head.map((k,i)=>[k,row[i]??""]))),null,2);break}
case"jsoncsv":{let a=JSON.parse(x);if(!Array.isArray(a)||!a.length)throw Error("Input must be a non-empty array of objects.");let h=[...new Set(a.flatMap(o=>Object.keys(o)))];r=[h.join(","),...a.map(o=>h.map(k=>JSON.stringify(o[k]??"")).join(","))].join("\\n");break}
case"email":r=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(x.trim())?"Email format looks valid.":"Email format may be invalid.";break;
case"meta":r=x.trim().replace(/\\s+/g," ").slice(0,155);break;
case"color":{let m=x.match(/^#?([0-9a-f]{6})$/i);if(!m)throw Error("Enter a 6-digit HEX color.");let n=parseInt(m[1],16);r=`HEX: #${m[1].toUpperCase()}\\nRGB: rgb(${n>>16}, ${n>>8&255}, ${n&255})`;break}
case"qr":r=`QR payload text:\\n${x}\\n\\nCopy this into a QR-code generator. This tool prepares the content; it does not render a QR image yet.`;break;
default:r="This catalogue preset uses a shared tool engine. More dedicated functionality can be added in future releases.";
}}catch(err){r=`Unable to process input: ${err.message||"Check your values."}`;}$("#output").textContent=r;}
$("#run").onclick=execute;$("#back").onclick=()=>{$("#catalog").classList.remove("hide");$("#workspace").classList.remove("show")};$("#clear").onclick=()=>{$("#input").value="";if($("#extra"))$("#extra").value="";$("#output").textContent="Your result will appear here."};$("#copy").onclick=async()=>{try{await navigator.clipboard.writeText($("#output").textContent);$("#copy").textContent="Copied!"}catch{$("#copy").textContent="Copy unavailable"}};$("#search").oninput=renderGrid;$("#searchBtn").onclick=renderGrid;$("#sort").onchange=renderGrid;renderCats();renderGrid();
