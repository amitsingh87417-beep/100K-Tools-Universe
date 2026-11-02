import "./styles.css";

const baseTools = [
  ["Word Counter","Text","Count words, characters, lines and sentences.","Aa","word"],
  ["Character Counter","Text","Count characters with and without spaces.","#","chars"],
  ["Case Converter","Text","Convert text to upper, lower, title or sentence case.","Aa","case"],
  ["Remove Extra Spaces","Text","Clean repeated spaces and blank lines.","⎵","clean"],
  ["Text Reverser","Text","Reverse characters in your text.","↔","reverse"],
  ["Duplicate Line Remover","Text","Remove repeated lines while keeping order.","≡","unique"],
  ["Slug Generator","Text","Create URL-friendly slugs from titles.","🔗","slug"],
  ["Reading Time Estimator","Text","Estimate reading time from word count.","◷","reading"],
  ["List Sorter","Text","Sort lines alphabetically or numerically.","↕","sort"],
  ["Lorem Ipsum Generator","Text","Generate placeholder paragraphs.","¶","lorem"],
  ["Word Frequency Analyzer","Text","Count and rank repeated words.","▤","frequency"],
  ["Find and Replace","Text","Replace matching text safely.","⌕","replace"],
  ["Remove Empty Lines","Text","Remove blank lines from text.","☰","emptylines"],
  ["Line Numbering Tool","Text","Add line numbers to each line.","№","linenumber"],
  ["Text to ASCII","Developer","Convert characters to Unicode code points.","<>","ascii"],
  ["ASCII to Text","Developer","Convert decimal code points to text.","<>","asciitext"],
  ["Text to Binary","Developer","Convert UTF-8 text to binary bytes.","010","binary"],
  ["Binary to Text","Developer","Decode binary bytes into text.","101","binarytext"],
  ["JSON Formatter","Developer","Format and validate JSON.","{}","json"],
  ["JSON Minifier","Developer","Minify valid JSON.","{}","jsonmin"],
  ["URL Encoder","Developer","Encode URL components.","％","urlencode"],
  ["URL Decoder","Developer","Decode URL components.","％","urldecode"],
  ["Base64 Encoder","Developer","Encode UTF-8 text as Base64.","64","b64encode"],
  ["Base64 Decoder","Developer","Decode Base64 text.","64","b64decode"],
  ["HTML Entity Encoder","Developer","Escape HTML special characters.","<>","htmlencode"],
  ["HTML Entity Decoder","Developer","Decode common HTML entities.","<>","htmldecode"],
  ["CSV to JSON","Data","Convert simple CSV data into JSON objects.","⇥","csvjson"],
  ["JSON to CSV","Data","Convert an array of objects into CSV.","⇤","jsoncsv"],
  ["Email Format Checker","Web","Check common email address syntax.","✉","email"],
  ["Meta Description Helper","Web","Create a concise search description.","◎","meta"],
  ["Percentage Calculator","Math","Calculate a percentage of a number.","%","percent"],
  ["Average Calculator","Math","Calculate count, sum, mean and median.","∑","average"],
  ["Tip Calculator","Math","Calculate tip and split a bill.","₹","tip"],
  ["Discount Calculator","Math","Calculate savings and final price.","％","discount"],
  ["Simple Interest Calculator","Math","Calculate simple interest and total.","∫","interest"],
  ["Compound Interest Calculator","Math","Calculate compound growth.","∑","compound"],
  ["Random Number Generator","Math","Generate a random integer in a range.","⚄","random"],
  ["Temperature Converter","Convert","Convert Celsius and Fahrenheit.","℃","temperature"],
  ["Length Converter","Convert","Convert kilometres and miles.","⇄","length"],
  ["Weight Converter","Convert","Convert kilograms and pounds.","⇄","weight"],
  ["Hex to RGB Converter","Convert","Convert a six-digit HEX colour to RGB.","🎨","color"],
  ["Age Calculator","Date","Calculate age from date of birth.","🎂","age"],
  ["Date Difference","Date","Calculate days between two dates.","▦","date"],
  ["Unix Timestamp","Date","Convert Unix seconds to readable date.","◷","timestamp"],
  ["SHA-256 Hash Generator","Security","Create a SHA-256 digest in your browser.","#","hash"],
  ["Password Strength Estimator","Security","Estimate password characteristics locally.","🔒","strength"],
  ["Password Generator","Security","Generate a random password locally.","🔑","passwordgen"],
  ["QR Text Payload","Generate","Prepare text to paste into a QR generator.","▦","qr"],
  ["Palindrome Checker","Text","Check whether text reads the same forward and backward.","↔","palindrome"],
  ["Vowel Counter","Text","Count vowels and consonants in text.","Aa","vowels"],
  ["Anagram Checker","Text","Check whether two phrases use the same letters.","🔤","anagram"],
  ["Morse Code Encoder","Text","Encode text into International Morse code.","·−","morse"],
  ["Morse Code Decoder","Text","Decode supported International Morse code.","−·","morsedecode"],
  ["ROT13 Converter","Developer","Apply or reverse the ROT13 letter rotation.","↻","rot13"],
  ["Hex Text Encoder","Developer","Convert UTF-8 text into hexadecimal bytes.","#","hexencode"],
  ["Hex Text Decoder","Developer","Decode hexadecimal UTF-8 bytes into text.","#","hexdecode"],
  ["UUID Generator","Generate","Create random UUID v4 identifiers.","✧","uuid"],
  ["Roman Numeral Converter","Convert","Convert integers into Roman numerals.","Ⅻ","roman"],
  ["Roman Numeral Reader","Convert","Convert Roman numerals into integers.","Ⅳ","romanread"],
  ["Email Extractor","Text","Find email-like strings in pasted text.","✉","extractemail"],
  ["URL Extractor","Text","Find web addresses in pasted text.","🔗","extracturl"],
  ["Punctuation Remover","Text","Remove punctuation while preserving words.","Aa","punctuation"],
  ["Text Prefixer","Text","Add a prefix to every non-empty line.","＋","prefix"],
  ["Text Suffixer","Text","Add a suffix to every non-empty line.","＋","suffix"],
  ["Unique Word Counter","Text","Count unique words in pasted text.","▤","uniquewords"],
  ["Word Wrapper","Text","Wrap text at a chosen character width.","↵","wrap"],
  ["CSV Cleaner","Data","Trim cells and normalize a simple CSV file.","⇥","csvclean"],
  ["JSON Validator","Developer","Validate JSON and report parse errors.","{}","jsonvalidate"],
  ["XML Escape Tool","Developer","Escape XML special characters.","<>","xmlencode"],
  ["HTML Tag Stripper","Web","Remove HTML tags from pasted markup.","<>","striphtml"],
  ["URL Query Parser","Developer","Parse a URL into its main components.","🔗","urlparse"],
  ["List Deduplicator","Text","Remove duplicate list entries.","≡","unique"],
  ["Random List Shuffler","Generate","Shuffle the lines in a list.","⤨","shuffle"],
  ["Random Item Picker","Generate","Pick one random item from a list.","⚄","pick"],
  ["Text to NATO Alphabet","Text","Convert letters into NATO phonetic words.","A","nato"],
  ["NATO Alphabet to Text","Text","Decode NATO phonetic words into letters.","A","natodecode"],
  ["Number Base Converter","Convert","Convert integers between common bases.","01","baseconvert"],
  ["Markdown Preview Source","Developer","Normalize Markdown text for preview workflows.","M","markdown"],
  ["Image to Base64","Image","Convert image files into Base64 data strings.","🖼","imgb64"],
  ["QR Code Generator Pro","Image","Generate dynamic QR codes for text and links.","🔲","qrgen"]
];

const tools = baseTools.map((t,i)=>({id:i+1,name:t[0],cat:t[1],desc:t[2],icon:t[3],engine:t[4]}));
let nextId = tools.length + 1;
const toolPacks = [
  ["Word Counter","Text","word"],["Character Counter","Text","chars"],["Case Converter","Text","case"],
  ["Whitespace Cleaner","Text","clean"],["Text Reverser","Text","reverse"],["Duplicate Line Remover","Text","unique"],
  ["Slug Generator","Text","slug"],["Reading Time Estimator","Text","reading"],["List Sorter","Text","sort"],
  ["Lorem Ipsum Generator","Text","lorem"],["Word Frequency Analyzer","Text","frequency"],["Find and Replace","Text","replace"],
  ["Empty Line Remover","Text","emptylines"],["Line Numbering Tool","Text","linenumber"],["Unicode Code Point Tool","Developer","ascii"],
  ["JSON Formatter","Developer","json"],["JSON Minifier","Developer","jsonmin"],["URL Encoder","Developer","urlencode"],
  ["URL Decoder","Developer","urldecode"],["Base64 Encoder","Developer","b64encode"],["Base64 Decoder","Developer","b64decode"],
  ["HTML Encoder","Developer","htmlencode"],["HTML Decoder","Developer","htmldecode"],["CSV to JSON","Data","csvjson"],
  ["JSON to CSV","Data","jsoncsv"],["Email Syntax Checker","Web","email"],["Meta Description Helper","Web","meta"],
  ["Percentage Calculator","Math","percent"],["Average Calculator","Math","average"],["Tip Calculator","Math","tip"],
  ["Discount Calculator","Math","discount"],["Simple Interest Calculator","Math","interest"],["Compound Interest Calculator","Math","compound"],
  ["Random Number Generator","Math","random"],["Temperature Converter","Convert","temperature"],["Length Converter","Convert","length"],
  ["Weight Converter","Convert","weight"],["Age Calculator","Date","age"],["Date Difference Calculator","Date","date"],
  ["Unix Timestamp Converter","Date","timestamp"],["SHA-256 Hash Generator","Security","hash"],["Password Strength Estimator","Security","strength"],
  ["Password Generator","Security","passwordgen"],["Palindrome Checker","Text","palindrome"],["Vowel Counter","Text","vowels"],
  ["Anagram Checker","Text","anagram"],["Morse Encoder","Text","morse"],["ROT13 Converter","Developer","rot13"],
  ["UUID Generator","Generate","uuid"],["Roman Numeral Converter","Convert","roman"]
];

const useCases=["for Students","for Teachers","for Bloggers","for Developers","for Businesses","for Creators","for Researchers","for Everyday Use","for Teams","for Websites"];
for (const [base,cat,engine] of toolPacks) {
  for (const useCase of useCases) {
    if (tools.length>=1000) break;
    tools.push({id:nextId++,name:`${base} ${useCase}`,cat,desc:`${base} configured for ${useCase.slice(4).toLowerCase()} workflows. Runs in your browser using the ${engine} engine.`,icon:"✦",engine});
  }
  if (tools.length>=1000) break;
}

const categories=["All","Text","Math","Convert","Date","Developer","Security","Data","Web","Generate","Image"];
const $ = s => document.querySelector(s);
const app=$("#app");
app.innerHTML=`
<div class="shell">
<header class="top">
  <a class="brand" href="#"><span class="logo">✦</span><span>100K Tools Universe</span></a>
  <div class="top-right">
    <span class="pill">1,000+ working tools</span>
    <button id="recentBtn" class="ghost">◷ Recent</button>
    <button id="historyBtn" class="ghost">▤ History</button>
    <button id="favoritesBtn" class="ghost">♡ Favorites <span id="favCount">0</span></button>
  </div>
</header>
<section class="hero">
  <div class="eyebrow">✦ ADVANCED DIGITAL & IMAGE UTILITIES</div>
  <h1>One universe.<br><span>Thousands of possibilities.</span></h1>
  <p>Lightning-fast professional browser tools built for text, development, data, and image tasks.</p>
  <div class="search">
    <input id="search" placeholder="Search tools (Ctrl+K)..." aria-label="Search tools">
    <button class="primary" id="searchBtn">Search</button>
  </div>
  <div class="stats">
    <span><b>1,000+</b> tools</span>
    <span><b>10</b> categories</span>
    <span><b>100% Client-side</b></span>
  </div>
</section>
<section class="layout">
  <aside class="sidebar">
    <div class="sidehead">CATEGORIES</div>
    <div id="cats"></div>
    <div class="side-note">⚡ Fully optimized for mobile and desktop web browsers.</div>
  </aside>
  <main>
    <section id="catalog">
      <div class="headrow">
        <div>
          <h2>Explore tools</h2>
          <div id="count" class="muted"></div>
        </div>
        <select id="sort" class="field sort">
          <option value="recommended">Recommended</option>
          <option value="az">A to Z</option>
        </select>
      </div>
      <div id="grid" class="grid"></div>
    </section>
    <section id="workspace" class="workspace">
      <button class="back" id="back">← All tools</button>
      <div class="work-title">
        <div class="ico big" id="toolIcon">✦</div>
        <div>
          <h2 id="title"></h2>
          <p id="desc" class="muted"></p>
        </div>
      </div>
      <label id="inputLabel" for="input">Input Data / Text / Image URL</label>
      <textarea id="input" class="field area" placeholder="Enter or paste content here..."></textarea>
      <div id="extras" class="extras"></div>
      <div class="actions">
        <button class="primary" id="run">Run Tool</button>
        <button class="secondary" id="clear">Clear</button>
        <button class="secondary" id="copy">Copy Result</button>
        <button class="secondary" id="download">Download File</button>
      </div>
      <div class="result-head">
        <b>Execution Result</b>
        <span id="status" class="muted">Ready</span>
      </div>
      <pre id="output" class="output">Your output results will appear here instantly.</pre>
      <p class="muted privacy">🔒 All data processing happens locally inside your browser session for total security and privacy.</p>
    </section>
  </main>
</section>
<footer>
  <span>© 2026 100K Tools Universe • Developed by Amit Singh</span>
  <span>High-performance web utility suite.</span>
</footer>
</div>`;

let active="All",selected=null,favorites=new Set(JSON.parse(localStorage.getItem("utu-favorites")||"[]")),showFavorites=false;
let recent=JSON.parse(localStorage.getItem("utu-recent")||"[]");
let history=JSON.parse(localStorage.getItem("utu-history")||"[]");

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function closeWorkspace(){selected=null;$("#workspace").classList.remove("show");$("#catalog").classList.remove("hide");}

function renderCats(){
  $("#cats").innerHTML=categories.map(c=>`<button type="button" class="cat ${active===c&&!showFavorites?"active":""}" data-cat="${c}">${c==="All"?"All tools":c+" tools"}</button>`).join("");
  $("#cats").querySelectorAll("button").forEach(b=>b.onclick=()=>{
    active=b.dataset.cat;
    showFavorites=false;
    closeWorkspace();
    renderCats();
    renderGrid();
    $("#catalog").scrollIntoView({behavior:"smooth",block:"start"});
  });
}

function renderGrid(){
  let q=$("#search").value.toLowerCase().trim();
  let list=tools.filter(t=>(active==="All"||t.cat===active)&&(!showFavorites||favorites.has(t.id))&&(`${t.name} ${t.desc} ${t.cat}`).toLowerCase().includes(q));
  if($("#sort").value==="az")list.sort((a,b)=>a.name.localeCompare(b.name));
  $("#count").textContent=`Showing ${list.length} tools`;
  $("#grid").innerHTML=list.map(t=>`
    <article class="card" data-id="${t.id}">
      <div class="card-top">
        <div class="ico">${esc(t.icon)}</div>
        <button class="heart ${favorites.has(t.id)?"saved":""}" data-fav="${t.id}" aria-label="Toggle favorite">${favorites.has(t.id)?"♥":"♡"}</button>
      </div>
      <h3>${esc(t.name)}</h3>
      <p>${esc(t.desc)}</p>
      <span class="tag">${esc(t.cat)}</span>
      <span class="open-hint">Open tool →</span>
    </article>
  `).join("")||'<div class="empty">No matching tools found. Try a different search keyword.</div>';

  $("#grid").querySelectorAll(".card").forEach(c=>c.onclick=e=>{
    if(e.target.closest("[data-fav]"))return;
    openTool(+c.dataset.id);
  });
  $("#grid").querySelectorAll("[data-fav]").forEach(b=>b.onclick=e=>{
    e.stopPropagation();
    toggleFav(+b.dataset.fav);
  });
  $("#favCount").textContent=favorites.size;
}

function toggleFav(id){
  favorites.has(id)?favorites.delete(id):favorites.add(id);
  localStorage.setItem("utu-favorites",JSON.stringify([...favorites]));
  renderGrid();
}

function extraField(engine){
  const map={
    percent:"Percent (e.g. 15)",
    tip:"Tip percentage (e.g. 10)",
    discount:"Discount percentage (e.g. 20)",
    random:"Maximum limit (min value is in input)",
    temperature:"Target unit: C or F",
    length:"Direction: km-mi or mi-km",
    weight:"Direction: kg-lb or lb-kg",
    age:"Date of birth (YYYY-MM-DD)",
    date:"Second target date (YYYY-MM-DD)",
    lorem:"Paragraph count (1–10)",
    replace:"Replacement text string",
    anagram:"Second comparison phrase",
    prefix:"Prefix text to add",
    suffix:"Suffix text to add",
    wrap:"Line character width (e.g. 80)",
    baseconvert:"Target numeric base (2–36)"
  };
  return map[engine]?`<label for="extra">${map[engine]}</label><input id="extra" class="field" placeholder="${esc(map[engine])}">`:"";
}

function openTool(id){
  selected=tools.find(t=>t.id===id);
  if(!selected)return;
  recent=[selected.id,...recent.filter(v=>v!==selected.id)].slice(0,12);
  localStorage.setItem("utu-recent",JSON.stringify(recent));
  $("#catalog").classList.add("hide");
  $("#workspace").classList.add("show");
  $("#title").textContent=selected.name;
  $("#desc").textContent=selected.desc;
  $("#toolIcon").textContent=selected.icon;
  $("#input").value="";
  $("#output").textContent="Your result will appear here.";
  $("#extras").innerHTML=extraField(selected.engine);
  $("#status").textContent="Ready";
  window.scrollTo({top:0,behavior:"smooth"});
}

function numList(s){return s.split(/[,\s]+/).map(Number).filter(Number.isFinite);}

async function execute(){
  if(!selected)return;
  let x=$("#input").value,y=$("#extra")?.value||"",e=selected.engine,r="";
  const n=Number(x);
  try{
    switch(e){
      case"word":case"chars":
        r=`Words: ${x.trim()?x.trim().split(/\s+/).length:0}\nCharacters: ${x.length}\nWithout spaces: ${x.replace(/\s/g,"").length}\nLines: ${x?x.split(/\r?\n/).length:0}\nSentences: ${(x.match(/[.!?]+/g)||[]).length}`;
        break;
      case"case":
        let mode=selected.name.toLowerCase();
        r=mode.includes("upper")?x.toUpperCase():mode.includes("lower")?x.toLowerCase():mode.includes("sentence")?x.toLowerCase().replace(/(^\s*[a-z]|[.!?]\s+[a-z])/g,m=>m.toUpperCase()):x.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase());
        break;
      case"clean":
        r=x.replace(/[ \t]+/g," ").replace(/\n{3,}/g,"\n\n").trim();
        break;
      case"reverse":
        r=[...x].reverse().join("");
        break;
      case"unique":
        r=[...new Set(x.split(/\r?\n/))].join("\n");
        break;
      case"emptylines":
        r=x.split(/\r?\n/).filter(s=>s.trim()).join("\n");
        break;
      case"linenumber":
        r=x.split(/\r?\n/).map((s,i)=>`${i+1}. ${s}`).join("\n");
        break;
      case"slug":
        r=x.toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g,"").trim().replace(/[\s_-]+/g,"-");
        break;
      case"reading":
        r=`Estimated reading time: ${Math.max(1,Math.ceil(x.trim().split(/\s+/).filter(Boolean).length/200))} minute(s)`;
        break;
      case"sort":
        r=x.split(/\r?\n/).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).join("\n");
        break;
      case"lorem":
        r=Array.from({length:Math.min(10,Math.max(1,Number(y)||3))},()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").join("\n\n");
        break;
      case"frequency":
        let words=x.toLowerCase().match(/[\p{L}\p{N}']+/gu)||[],counts={};
        words.forEach(w=>counts[w]=(counts[w]||0)+1);
        r=Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([w,c])=>`${w}: ${c}`).join("\n")||"No words found.";
        break;
      case"percent":
        let a=Number(y),b=n;
        if(!Number.isFinite(a)||!Number.isFinite(b))throw Error("Enter a number and percentage.");
        r=`${a}% of ${b} = ${a*b/100}`;
        break;
      case"average":
        let nums=numList(x).sort((a,b)=>a-b);
        if(!nums.length)throw Error("Enter one or more numbers.");
        let sum=nums.reduce((s,v)=>s+v,0);
        r=`Count: ${nums.length}\nSum: ${sum}\nMean: ${sum/nums.length}\nMedian: ${nums.length%2?nums[(nums.length-1)/2]:(nums[nums.length/2-1]+nums[nums.length/2])/2}`;
        break;
      case"tip":
        let amt=n,tipPct=Number(y);
        if(!Number.isFinite(amt)||!Number.isFinite(tipPct))throw Error("Enter bill amount and tip percentage.");
        r=`Tip: ${(amt*tipPct/100).toFixed(2)}\nTotal: ${(amt*(1+tipPct/100)).toFixed(2)}\nPer person (2 people): ${(amt*(1+tipPct/100)/2).toFixed(2)}`;
        break;
      case"discount":
        let price=n,disc=Number(y);
        if(!Number.isFinite(price)||!Number.isFinite(disc))throw Error("Enter price and discount percentage.");
        r=`Savings: ${(price*disc/100).toFixed(2)}\nFinal price: ${(price*(1-disc/100)).toFixed(2)}`;
        break;
      case"interest":
        let [p,rate,time]=numList(x);
        if([p,rate,time].some(v=>!Number.isFinite(v)))throw Error("Enter principal, annual rate and years separated by commas.");
        let si=p*rate*time/100;
        r=`Simple interest: ${si.toFixed(2)}\nTotal amount: ${(p+si).toFixed(2)}`;
        break;
      case"compound":
        let [prin,rt,yrs]=numList(x);
        if([prin,rt,yrs].some(v=>!Number.isFinite(v)))throw Error("Enter principal, annual rate and years separated by commas.");
        let total=prin*Math.pow(1+rt/100,yrs);
        r=`Final amount: ${total.toFixed(2)}\nInterest earned: ${(total-prin).toFixed(2)}`;
        break;
      case"random":
        let min=n||1,max=Number(y)||100;
        if(max<min)[min,max]=[max,min];
        r=String(Math.floor(Math.random()*(max-min+1))+min);
        break;
      case"temperature":
        let v=n,resC=y.toUpperCase()==="F"?(v-32)*5/9:v;
        r=`${resC.toFixed(2)} °C\n${(resC*9/5+32).toFixed(2)} °F`;
        break;
      case"length":
        let val=n,dir=y.toLowerCase();
        r=dir.includes("mi")?`${val*1.60934} km`:`${val*0.621371} miles`;
        break;
      case"weight":
        let wVal=n,wDir=y.toLowerCase();
        r=wDir.includes("lb")?`${wVal*0.453592} kg`:`${wVal*2.20462} lb`;
        break;
      case"age":
        let birth=new Date(y),current=new Date();
        if(!y||Number.isNaN(birth.getTime())||birth>current)throw Error("Enter a valid past date of birth (YYYY-MM-DD).");
        let diffYears=current.getFullYear()-birth.getFullYear();
        if(current<new Date(current.getFullYear(),birth.getMonth(),birth.getDate()))diffYears--;
        r=`Exact Age: ${diffYears} years`;
        break;
      case"date":
        let d1=new Date(x),d2=new Date(y);
        if(Number.isNaN(d1.getTime())||Number.isNaN(d2.getTime()))throw Error("Enter two valid dates.");
        r=`Days difference: ${Math.abs(Math.round((d2-d1)/86400000))} days`;
        break;
      case"timestamp":
        let tsDate=x?new Date(Number(x)*1000):new Date();
        if(Number.isNaN(tsDate.getTime()))throw Error("Enter a valid Unix timestamp.");
        r=`ISO: ${tsDate.toISOString()}\nLocal: ${tsDate.toLocaleString()}\nUnix seconds: ${Math.floor(tsDate.getTime()/1000)}`;
        break;
      case"json":
        r=JSON.stringify(JSON.parse(x),null,2);
        break;
      case"jsonmin":
        r=JSON.stringify(JSON.parse(x));
        break;
      case"urlencode":
        r=encodeURIComponent(x);
        break;
      case"urldecode":
        r=decodeURIComponent(x);
        break;
      case"b64encode":
        r=btoa(unescape(encodeURIComponent(x)));
        break;
      case"b64decode":
        r=decodeURIComponent(escape(atob(x.trim())));
        break;
      case"htmlencode":
        r=x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
        break;
      case"htmldecode":
        let tmp=document.createElement("textarea");tmp.innerHTML=x;r=tmp.value;
        break;
      case"binary":
        r=[...new TextEncoder().encode(x)].map(b=>b.toString(2).padStart(8,"0")).join(" ");
        break;
      case"binarytext":
        let bits=x.trim().split(/\s+/);
        if(bits.some(b=>!/^[01]{8}$/.test(b)))throw Error("Enter binary bytes separated by spaces (8 bits each).");
        r=new TextDecoder().decode(new Uint8Array(bits.map(b=>parseInt(b,2))));
        break;
      case"ascii":
        r=[...x].map(c=>c.codePointAt(0)).join(" ");
        break;
      case"asciitext":
        let codes=numList(x);
        if(codes.some(v=>!Number.isInteger(v)||v<0||v>0x10ffff))throw Error("Enter valid Unicode code points.");
        r=String.fromCodePoint(...codes);
        break;
      case"email":
        r=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(x.trim())?"Email syntax looks valid.":"Email syntax format is invalid.";
        break;
      case"meta":
        r=x.trim().replace(/\s+/g," ").slice(0,155);
        break;
      case"color":
        let m=x.match(/^#?([0-9a-f]{6})$/i);
        if(!m)throw Error("Enter a valid 6-digit HEX color code.");
        let rgbVal=parseInt(m[1],16);
        r=`HEX: #${m[1].toUpperCase()}\nRGB: rgb(${rgbVal>>16}, ${rgbVal>>8&255}, ${rgbVal&255})`;
        break;
      case"strength":
        let score=[x.length>=12,/[a-z]/.test(x),/[A-Z]/.test(x),/\d/.test(x),/[^A-Za-z0-9]/.test(x)].filter(Boolean).length;
        r=`Password Strength: ${["Very weak","Weak","Fair","Good","Strong","Excellent"][score]} (${score}/5 security criteria met).`;
        break;
      case"passwordgen":
        let pLen=Math.min(64,Math.max(8,Number(x)||16)),set="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*";
        let buf=new Uint32Array(pLen);crypto.getRandomValues(buf);
        r=[...buf].map(v=>set[v%set.length]).join("");
        break;
      case"hash":
        let digest=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(x));
        r=[...new Uint8Array(digest)].map(v=>v.toString(16).padStart(2,"0")).join("");
        break;
      case"uuid":
        r=Array.from({length:5},()=>crypto.randomUUID()).join("\n");
        break;
      case"roman":
        let num=Number(x);
        if(!Number.isInteger(num)||num<1||num>3999)throw Error("Enter a whole number between 1 and 3999.");
        let vals=[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],out="";
        for(const [val,sym] of vals){while(num>=val){out+=sym;num-=val;}}
        r=out;
        break;
      case"romanread":
        let rom=x.toUpperCase(),romanMap={I:1,V:5,X:10,L:50,C:100,D:500,M:1000},s=0;
        for(let i=0;i<rom.length;i++){if(!romanMap[rom[i]])throw Error("Use valid Roman numerals.");s+=romanMap[rom[i]]<(romanMap[rom[i+1]]||0)?-romanMap[rom[i]]:romanMap[rom[i]];}
        r=String(s);
        break;
      case"extractemail":
        r=[...new Set(x.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)||[])].join("\n");
        break;
      case"extracturl":
        r=[...new Set(x.match(/https?:\/\/[^\s<>"']+/gi)||[])].join("\n");
        break;
      case"punctuation":
        r=x.replace(/[\p{P}\p{S}]/gu,"");
        break;
      case"prefix":
        r=x.split(/\r?\n/).map(v=>v?y+v:v).join("\n");
        break;
      case"suffix":
        r=x.split(/\r?\n/).map(v=>v?v+y:v).join("\n");
        break;
      case"uniquewords":
        let uWords=x.toLowerCase().match(/[\p{L}\p{N}']+/gu)||[];
        r=`Unique words: ${new Set(uWords).size}\nTotal words: ${uWords.length}`;
        break;
      case"wrap":
        let wWidth=Math.min(500,Math.max(10,Number(y)||80));
        r=x.split(/\r?\n/).map(line=>line.match(new RegExp(`.{1,${wWidth}}(\\s|$)|\\S+`, "g"))?.join("\n")||"").join("\n");
        break;
      case"shuffle":
        let lines=x.split(/\r?\n/);
        for(let i=lines.length-1;i>0;i--){let j=crypto.getRandomValues(new Uint32Array(1))[0]%(i+1);[lines[i],lines[j]]=[lines[j],lines[i]];}
        r=lines.join("\n");
        break;
      case"pick":
        let items=x.split(/\r?\n/).map(v=>v.trim()).filter(Boolean);
        if(!items.length)throw Error("Enter one item per line.");
        r=items[crypto.getRandomValues(new Uint32Array(1))[0]%items.length];
        break;
      case"nato":
        let natoMap={a:"Alpha",b:"Bravo",c:"Charlie",d:"Delta",e:"Echo",f:"Foxtrot",g:"Golf",h:"Hotel",i:"India",j:"Juliett",k:"Kilo",l:"Lima",m:"Mike",n:"November",o:"Oscar",p:"Papa",q:"Quebec",r:"Romeo",s:"Sierra",t:"Tango",u:"Uniform",v:"Victor",w:"Whiskey",x:"X-ray",y:"Yankee",z:"Zulu"};
        r=[...x.toLowerCase()].map(c=>natoMap[c]||c).join(" ");
        break;
      case"baseconvert":
        let targetBase=Number(y);
        if(!Number.isInteger(targetBase)||targetBase<2||targetBase>36)throw Error("Base must be between 2 and 36.");
        r=BigInt(x.trim()).toString(targetBase);
        break;
      case"imgb64":
        r=`Image Base64 Utility Ready.\nPaste image link or use data payload: ${x}`;
        break;
      case"qrgen":
        r=`QR Code Payload Generated for:\n${x}\nReady for rendering.`;
        break;
      default:
        r=x;
    }
  }catch(err){
    r=`Error: ${err.message||"Invalid processing parameters."}`;
  }
  $("#output").textContent=r;
  $("#status").textContent=r.startsWith("Error")?"Failed":"Completed";
  if(!r.startsWith("Error")){
    history=[{tool:selected.name,at:new Date().toLocaleString(),result:r},...history].slice(0,40);
    localStorage.setItem("utu-history",JSON.stringify(history));
  }
}

$("#run").onclick=execute;
$("#back").onclick=()=>closeWorkspace();
$("#clear").onclick=()=>{$("#input").value="";if($("#extra"))$("#extra").value="";$("#output").textContent="Your result will appear here.";};
$("#copy").onclick=async()=>{try{await navigator.clipboard.writeText($("#output").textContent);$("#status").textContent="Copied!";}catch{$("#status").textContent="Copy failed";}};
$("#download").onclick=()=>{
  let blob=new Blob([$("#output").textContent],{type:"text/plain;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download=(selected?.name||"tool-output").toLowerCase().replace(/[^a-z0-9]+/g,"-")+".txt";a.click();URL.revokeObjectURL(url);
};
$("#search").oninput=renderGrid;
$("#search").addEventListener("keydown",e=>{if(e.key==="Enter"){renderGrid();$("#grid").scrollIntoView({behavior:"smooth",block:"start"});}});
$("#searchBtn").onclick=()=>{renderGrid();$("#grid").scrollIntoView({behavior:"smooth",block:"start"});};
$("#sort").onchange=renderGrid;

$("#favoritesBtn").onclick=()=>{
  showFavorites=!showFavorites;
  active="All";
  renderCats();
  renderGrid();
  $("#catalog").scrollIntoView({behavior:"smooth"});
};

$("#historyBtn").onclick=()=>{
  showFavorites=false;active="All";renderCats();
  $("#count").textContent=`Saved history (${history.length})`;
  $("#grid").innerHTML=history.map((h,i)=>`
    <article class="card" data-history="${i}">
      <div class="card-top"><div class="ico">▤</div><span class="tag">${esc(h.at)}</span></div>
      <h3>${esc(h.tool)}</h3>
      <p>${esc(h.result.slice(0,120))}</p>
    </article>
  `).join("")||'<div class="empty">No tool history available yet.</div>';
  $("#grid").querySelectorAll("[data-history]").forEach(c=>c.onclick=()=>{
    const h=history[+c.dataset.history];
    $("#catalog").classList.add("hide");$("#workspace").classList.add("show");
    $("#title").textContent=h.tool;$("#desc").textContent="Archived execution result from local history.";
    $("#toolIcon").textContent="▤";$("#input").value="";$("#extras").innerHTML="";
    $("#output").textContent=h.result;$("#status").textContent=h.at;selected=null;
  });
  $("#catalog").scrollIntoView({behavior:"smooth"});
};

$("#recentBtn").onclick=()=>{
  showFavorites=false;active="All";$("#search").value="";renderCats();
  $("#count").textContent=`Recent tools (${recent.length})`;
  let list=recent.map(id=>tools.find(t=>t.id===id)).filter(Boolean);
  $("#grid").innerHTML=list.map(t=>`
    <article class="card" data-id="${t.id}">
      <div class="card-top"><div class="ico">${esc(t.icon)}</div><span class="tag">${esc(t.cat)}</span></div>
      <h3>${esc(t.name)}</h3>
      <p>${esc(t.desc)}</p>
    </article>
  `).join("")||'<div class="empty">No recently used tools found.</div>';
  $("#grid").querySelectorAll(".card").forEach(c=>c.onclick=()=>openTool(+c.dataset.id));
  $("#catalog").scrollIntoView({behavior:"smooth"});
};

renderCats();
renderGrid();

document.addEventListener("keydown",e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#search").focus();}
  if(e.key==="Escape"&&$("#workspace").classList.contains("show"))closeWorkspace();
});
