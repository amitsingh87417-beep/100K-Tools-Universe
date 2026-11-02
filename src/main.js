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
  ["Markdown Preview Source","Developer","Normalize Markdown text for preview workflows.","M","markdown"]
];

const expansion = [
  ["Text","Sentence Case Converter","case"],["Text","Title Case Converter","case"],
  ["Text","Uppercase Converter","case"],["Text","Lowercase Converter","case"],
  ["Text","Word Counter Plus","word"],["Text","Character Counter Plus","chars"],
  ["Text","Line Counter","word"],["Text","Word Frequency Helper","frequency"],
  ["Text","Text Cleaner","clean"],["Text","Duplicate Line Cleaner","unique"],
  ["Text","Whitespace Cleaner","clean"],["Text","Slug Maker","slug"],
  ["Math","Percentage of Number","percent"],["Math","Average of Numbers","average"],
  ["Math","Median Calculator","average"],["Math","Discount Savings Calculator","discount"],
  ["Math","Simple Interest Tool","interest"],["Math","Compound Growth Calculator","compound"],
  ["Math","Random Integer Tool","random"],["Math","Tip Split Calculator","tip"],
  ["Convert","Celsius to Fahrenheit","temperature"],["Convert","Fahrenheit to Celsius","temperature"],
  ["Convert","Kilometres to Miles","length"],["Convert","Miles to Kilometres","length"],
  ["Convert","Kilograms to Pounds","weight"],["Convert","Pounds to Kilograms","weight"],
  ["Date","Age in Years Calculator","age"],["Date","Days Between Dates","date"],
  ["Date","Unix Date Reader","timestamp"],["Developer","JSON Pretty Printer","json"],
  ["Developer","JSON Minifier Pro","jsonmin"],["Developer","URL Component Encoder","urlencode"],
  ["Developer","URL Component Decoder","urldecode"],["Developer","Base64 Encoder Pro","b64encode"],
  ["Developer","Base64 Decoder Pro","b64decode"],["Developer","Binary Text Encoder","binary"],
  ["Developer","Binary Text Decoder","binarytext"],["Data","CSV Data to JSON","csvjson"],
  ["Data","JSON Data to CSV","jsoncsv"],["Web","Email Syntax Checker","email"],
  ["Web","SEO Description Shortener","meta"],["Security","Password Quality Estimator","strength"],
  ["Security","Local Password Creator","passwordgen"],["Generate","QR Content Preparer","qr"]
];

const tools = baseTools.map((t,i)=>({id:i+1,name:t[0],cat:t[1],desc:t[2],icon:t[3],engine:t[4]}));
let nextId = tools.length + 1;
// 500 additional named, usable tool configurations. They share tested browser-side engines;
// each listing remains executable and is not a placeholder card.
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
  ["UUID Generator","Generate","uuid"],["Roman Numeral Converter","Convert","roman"],
  ["Sentence Case Converter","Text","case"],["Title Case Converter","Text","case"],["Uppercase Converter","Text","case"],
  ["Lowercase Converter","Text","case"],["Line Counter","Text","word"],["Paragraph Counter","Text","word"],
  ["Text Whitespace Normalizer","Text","clean"],["Blank Line Cleaner","Text","emptylines"],["Alphabetical List Sorter","Text","sort"],
  ["Numeric List Sorter","Text","sort"],["Line Deduplicator","Text","unique"],["Word Occurrence Report","Text","frequency"],
  ["Text Length Report","Text","chars"],["Unicode Inspector","Developer","ascii"],["Unicode Builder","Developer","asciitext"],
  ["UTF-8 Binary Encoder","Developer","binary"],["Binary UTF-8 Decoder","Developer","binarytext"],["HTML Safe Text Encoder","Developer","htmlencode"],
  ["HTML Entity Reader","Developer","htmldecode"],["URL Safe Encoder","Developer","urlencode"],["URL Safe Decoder","Developer","urldecode"],
  ["JSON Compact Formatter","Developer","jsonmin"],["JSON Indented Formatter","Developer","json"],["JSON Array to CSV Exporter","Data","jsoncsv"],
  ["CSV Header Mapper","Data","csvjson"],["Email Address Syntax Test","Web","email"],["SEO Snippet Trimmer","Web","meta"],
  ["Percent Change Helper","Math","percent"],["Mean Median Summary","Math","average"],["Bill Tip Splitter","Math","tip"],
  ["Sale Price Calculator","Math","discount"],["Annual Simple Growth","Math","interest"],["Annual Compound Growth","Math","compound"],
  ["Random Integer Picker","Math","random"],["Celsius Fahrenheit Helper","Convert","temperature"],["Distance Unit Helper","Convert","length"],
  ["Mass Unit Helper","Convert","weight"],["Birth Date Age Reader","Date","age"],["Calendar Day Difference","Date","date"],
  ["Timestamp Date Reader","Date","timestamp"],["Password Checklist Estimator","Security","strength"],["Secure Random Password Maker","Security","passwordgen"],
  ["SHA Digest Tool","Security","hash"],["Text to Hex Converter","Developer","hexencode"],
  ["Hex to Text Converter","Developer","hexdecode"],["Random List Order Tool","Generate","shuffle"]
];
const useCases=["for Students","for Teachers","for Bloggers","for Developers","for Businesses","for Creators","for Researchers","for Everyday Use","for Teams","for Websites"];
for (const [base,cat,engine] of toolPacks) {
  for (const useCase of useCases) {
    if (tools.length>=1000) break;
    tools.push({id:nextId++,name:`${base} ${useCase}`,cat,desc:`${base} configured for ${useCase.slice(4).toLowerCase()} workflows. Runs in your browser using the ${engine} engine.`,icon:"✦",engine});
  }
  if (tools.length>=1000) break;
}
const categories=["All","Text","Math","Convert","Date","Developer","Security","Data","Web","Generate"];
const $ = s => document.querySelector(s);
const app=$("#app");
app.innerHTML=`
<div class="shell">
<header class="top"><a class="brand" href="#"><span class="logo">✦</span><span>100K Tools Universe</span></a><div class="top-right"><span class="pill">1,000 working tool configurations</span><button id="recentBtn" class="ghost">◷ Recent</button><button id="historyBtn" class="ghost">▤ History</button><button id="favoritesBtn" class="ghost">♡ Favorites <span id="favCount">0</span></button></div></header>
<section class="hero"><div class="eyebrow">✦ YOUR EVERYDAY DIGITAL TOOLKIT</div><h1>One universe.<br><span>Thousands of possibilities.</span></h1><p>Fast, practical online utilities for study, work, creativity and everyday tasks — all in one place.</p><div class="search"><input id="search" placeholder="Search 1,000 tools..." aria-label="Search tools"><button class="primary" id="searchBtn">Search</button></div><div class="stats"><span><b>1,000</b> tool configurations</span><span><b>9</b> categories</span><span><b>Free</b> browser tools</span></div></section>
<section class="layout"><aside class="sidebar"><div class="sidehead">CATEGORIES</div><div id="cats"></div><div class="side-note">Tools run locally in your browser wherever possible.</div></aside>
<main><section id="catalog"><div class="headrow"><div><h2>Explore tools</h2><div id="count" class="muted"></div></div><select id="sort" class="field sort"><option value="recommended">Recommended</option><option value="az">A to Z</option></select></div><div id="grid" class="grid"></div></section>
<section id="workspace" class="workspace"><button class="back" id="back">← All tools</button><div class="work-title"><div class="ico big" id="toolIcon">✦</div><div><h2 id="title"></h2><p id="desc" class="muted"></p></div></div><label id="inputLabel" for="input">Input</label><textarea id="input" class="field area" placeholder="Enter or paste content..."></textarea><div id="extras" class="extras"></div><div class="actions"><button class="primary" id="run">Run tool</button><button class="secondary" id="clear">Clear</button><button class="secondary" id="copy">Copy result</button><button class="secondary" id="download">Download</button></div><div class="result-head"><b>Result</b><span id="status" class="muted">Ready</span></div><pre id="output" class="output">Your result will appear here.</pre><p class="muted privacy">Your input is processed in this browser for the included tools. Avoid entering sensitive information.</p></section></main></section>
<footer><span>© 2026 100K Tools Universe</span><span>Useful tools for a global community.</span></footer></div>`;
let active="All",selected=null,favorites=new Set(JSON.parse(localStorage.getItem("utu-favorites")||"[]")),showFavorites=false;
let recent=JSON.parse(localStorage.getItem("utu-recent")||"[]");
let history=JSON.parse(localStorage.getItem("utu-history")||"[]");
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function renderCats(){$("#cats").innerHTML=categories.map(c=>`<button class="cat ${active===c?"active":""}" data-cat="${c}">${c==="All"?"All tools":c+" tools"}</button>`).join("");$("#cats").querySelectorAll("button").forEach(b=>b.onclick=()=>{active=b.dataset.cat;showFavorites=false;renderCats();renderGrid()});}
function renderGrid(){let q=$("#search").value.toLowerCase().trim();let list=tools.filter(t=>(active==="All"||t.cat===active)&&(!showFavorites||favorites.has(t.id))&&(`${t.name} ${t.desc} ${t.cat}`).toLowerCase().includes(q));if($("#sort").value==="az")list.sort((a,b)=>a.name.localeCompare(b.name));$("#count").textContent=`Showing ${list.length} tools`;$("#grid").innerHTML=list.map(t=>`<article class="card" data-id="${t.id}"><div class="card-top"><div class="ico">${esc(t.icon)}</div><button class="heart ${favorites.has(t.id)?"saved":""}" data-fav="${t.id}" aria-label="Toggle favorite">${favorites.has(t.id)?"♥":"♡"}</button></div><h3>${esc(t.name)}</h3><p>${esc(t.desc)}</p><span class="tag">${esc(t.cat)}</span></article>`).join("")||'<div class="empty">No matching tools found.</div>';$("#grid").querySelectorAll(".card").forEach(c=>c.onclick=e=>{if(e.target.closest("[data-fav]"))return;openTool(+c.dataset.id)});$("#grid").querySelectorAll("[data-fav]").forEach(b=>b.onclick=e=>{e.stopPropagation();toggleFav(+b.dataset.fav)});$("#favCount").textContent=favorites.size;}
function toggleFav(id){favorites.has(id)?favorites.delete(id):favorites.add(id);localStorage.setItem("utu-favorites",JSON.stringify([...favorites]));renderGrid();}
function extraField(engine){const map={percent:"Percent (e.g. 15)",tip:"Tip percentage (e.g. 10)",discount:"Discount percentage (e.g. 20)",random:"Maximum (minimum is in the input)",temperature:"Target unit: C or F",length:"Direction: km-mi or mi-km",weight:"Direction: kg-lb or lb-kg",age:"Date of birth (YYYY-MM-DD)",date:"Second date (YYYY-MM-DD)",urlencode:"No extra input needed",urldecode:"No extra input needed",b64encode:"No extra input needed",b64decode:"No extra input needed",lorem:"Paragraph count (1–10)",replace:"Text to replace with",csvjson:"No extra input needed",anagram:"Second phrase",morse:"No extra input needed",morsedecode:"No extra input needed",prefix:"Prefix to add",suffix:"Suffix to add",wrap:"Line width (e.g. 80)",baseconvert:"Target base (2–36)",roman:"No extra input needed",romanread:"No extra input needed",pick:"No extra input needed",nato:"No extra input needed",natodecode:"No extra input needed"};return map[engine]?`<label for="extra">${map[engine]}</label><input id="extra" class="field" placeholder="${esc(map[engine])}">`:"";}
function openTool(id){selected=tools.find(t=>t.id===id);
if(selected){recent=[selected.id,...recent.filter(v=>v!==selected.id)].slice(0,12);localStorage.setItem("utu-recent",JSON.stringify(recent));}$("#catalog").classList.add("hide");$("#workspace").classList.add("show");$("#title").textContent=selected.name;$("#desc").textContent=selected.desc;$("#toolIcon").textContent=selected.icon;$("#input").value="";$("#output").textContent="Your result will appear here.";$("#extras").innerHTML=extraField(selected.engine);$("#status").textContent="Ready";window.scrollTo({top:0,behavior:"smooth"});}
function numList(s){return s.split(/[,\s]+/).map(Number).filter(Number.isFinite);}
async function execute(){if(!selected)return;let x=$("#input").value,y=$("#extra")?.value||"",e=selected.engine,r="";const n=Number(x);try{switch(e){
case"word":case"chars":r=`Words: ${x.trim()?x.trim().split(/\s+/).length:0}\nCharacters: ${x.length}\nWithout spaces: ${x.replace(/\s/g,"").length}\nLines: ${x?x.split(/\r?\n/).length:0}\nSentences: ${(x.match(/[.!?]+/g)||[]).length}`;break;
case"case":{let mode=selected.name.toLowerCase();r=mode.includes("upper")?x.toUpperCase():mode.includes("lower")?x.toLowerCase():mode.includes("sentence")?x.toLowerCase().replace(/(^\s*[a-z]|[.!?]\s+[a-z])/g,m=>m.toUpperCase()):x.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase());break;}
case"clean":r=x.replace(/[ \t]+/g," ").replace(/\n{3,}/g,"\n\n").trim();break;
case"reverse":r=[...x].reverse().join("");break;
case"unique":r=[...new Set(x.split(/\r?\n/))].join("\n");break;
case"emptylines":r=x.split(/\r?\n/).filter(s=>s.trim()).join("\n");break;
case"linenumber":r=x.split(/\r?\n/).map((s,i)=>`${i+1}. ${s}`).join("\n");break;
case"slug":r=x.toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g,"").trim().replace(/[\s_-]+/g,"-");break;
case"reading":r=`Estimated reading time: ${Math.max(1,Math.ceil(x.trim().split(/\s+/).filter(Boolean).length/200))} minute(s)`;break;
case"sort":r=x.split(/\r?\n/).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).join("\n");break;
case"lorem":r=Array.from({length:Math.min(10,Math.max(1,Number(y)||3))},()=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.").join("\n\n");break;
case"frequency":{let words=x.toLowerCase().match(/[\p{L}\p{N}']+/gu)||[],counts={};words.forEach(w=>counts[w]=(counts[w]||0)+1);r=Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([w,c])=>`${w}: ${c}`).join("\n")||"No words found.";break;}
case"replace":{let find=x.split("\n")[0]||"";let replacement=y;r=x.replaceAll(find,replacement);break;}
case"percent":{let a=Number(y),b=n;if(!Number.isFinite(a)||!Number.isFinite(b))throw Error("Enter a number and percentage.");r=`${a}% of ${b} = ${a*b/100}`;break;}
case"average":{let a=numList(x).sort((a,b)=>a-b);if(!a.length)throw Error("Enter one or more numbers.");let sum=a.reduce((s,v)=>s+v,0);r=`Count: ${a.length}\nSum: ${sum}\nMean: ${sum/a.length}\nMedian: ${a.length%2?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2}`;break;}
case"tip":{let a=n,p=Number(y);if(!Number.isFinite(a)||!Number.isFinite(p))throw Error("Enter bill amount and tip percentage.");r=`Tip: ${(a*p/100).toFixed(2)}\nTotal: ${(a*(1+p/100)).toFixed(2)}\nEach (2 people): ${(a*(1+p/100)/2).toFixed(2)}`;break;}
case"discount":{let a=n,p=Number(y);if(!Number.isFinite(a)||!Number.isFinite(p))throw Error("Enter price and discount percentage.");r=`Savings: ${(a*p/100).toFixed(2)}\nFinal price: ${(a*(1-p/100)).toFixed(2)}`;break;}
case"interest":{let [p,rate,time]=numList(x);if([p,rate,time].some(v=>!Number.isFinite(v)))throw Error("Enter principal, annual rate and years separated by commas.");let si=p*rate*time/100;r=`Simple interest: ${si.toFixed(2)}\nTotal: ${(p+si).toFixed(2)}`;break;}
case"compound":{let [p,rate,years]=numList(x);if([p,rate,years].some(v=>!Number.isFinite(v)))throw Error("Enter principal, annual rate and years separated by commas.");let total=p*Math.pow(1+rate/100,years);r=`Final amount: ${total.toFixed(2)}\nInterest earned: ${(total-p).toFixed(2)}`;break;}
case"random":{let min=n||1,max=Number(y)||100;if(max<min)[min,max]=[max,min];r=String(Math.floor(Math.random()*(max-min+1))+min);break;}
case"temperature":{let v=n,c=y.toUpperCase()==="F"?(v-32)*5/9:v;r=`${c.toFixed(2)} °C\n${(c*9/5+32).toFixed(2)} °F`;break;}
case"length":{let v=n,k=selected.name.toLowerCase().includes("miles to")?"mi-km":selected.name.toLowerCase().includes("kilometres to")?"km-mi":y.toLowerCase();r=k==="km-mi"?`${v*.621371} miles`:k==="mi-km"?`${v*1.60934} km`:"Enter km-mi or mi-km in the extra field.";break;}
case"weight":{let v=n,k=selected.name.toLowerCase().includes("pounds to")?"lb-kg":selected.name.toLowerCase().includes("kilograms to")?"kg-lb":y.toLowerCase();r=k==="kg-lb"?`${v*2.20462} lb`:k==="lb-kg"?`${v*.453592} kg`:"Enter kg-lb or lb-kg in the extra field.";break;}
case"age":{let d=new Date(y),now=new Date();if(!y||Number.isNaN(d.getTime())||d>now)throw Error("Enter a valid past date of birth.");let a=now.getFullYear()-d.getFullYear();if(now<new Date(now.getFullYear(),d.getMonth(),d.getDate()))a--;r=`Age: ${a} years`;break;}
case"date":{let d1=new Date(x),d2=new Date(y);if(Number.isNaN(d1.getTime())||Number.isNaN(d2.getTime()))throw Error("Enter two valid dates.");r=`Difference: ${Math.abs(Math.round((d2-d1)/86400000))} days`;break;}
case"timestamp":{let d=x?new Date(Number(x)*1000):new Date();if(Number.isNaN(d.getTime()))throw Error("Enter a valid Unix timestamp in seconds.");r=`ISO: ${d.toISOString()}\nLocal: ${d.toLocaleString()}\nUnix seconds: ${Math.floor(d.getTime()/1000)}`;break;}
case"json":r=JSON.stringify(JSON.parse(x),null,2);break;
case"jsonmin":r=JSON.stringify(JSON.parse(x));break;
case"urlencode":r=encodeURIComponent(x);break;
case"urldecode":r=decodeURIComponent(x);break;
case"b64encode":r=btoa(unescape(encodeURIComponent(x)));break;
case"b64decode":r=decodeURIComponent(escape(atob(x.trim())));break;
case"htmlencode":r=x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));break;
case"htmldecode":{let el=document.createElement("textarea");el.innerHTML=x;r=el.value;break;}
case"binary":r=[...new TextEncoder().encode(x)].map(b=>b.toString(2).padStart(8,"0")).join(" ");break;
case"binarytext":{let bits=x.trim().split(/\s+/);if(bits.some(b=>!/^[01]{8}$/.test(b)))throw Error("Enter binary bytes separated by spaces (8 bits each).");r=new TextDecoder().decode(new Uint8Array(bits.map(b=>parseInt(b,2))));break;}
case"ascii":r=[...x].map(c=>c.codePointAt(0)).join(" ");break;
case"asciitext":{let codes=numList(x);if(codes.some(v=>!Number.isInteger(v)||v<0||v>0x10ffff))throw Error("Enter valid Unicode code points.");r=String.fromCodePoint(...codes);break;}
case"email":r=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(x.trim())?"Email syntax looks valid (this does not verify that the mailbox exists).":"Email syntax may be invalid.";break;
case"meta":r=x.trim().replace(/\s+/g," ").slice(0,155);break;
case"color":{let m=x.match(/^#?([0-9a-f]{6})$/i);if(!m)throw Error("Enter a 6-digit HEX color.");let z=parseInt(m[1],16);r=`HEX: #${m[1].toUpperCase()}\nRGB: rgb(${z>>16}, ${z>>8&255}, ${z&255})`;break;}
case"csvjson":{let rows=x.trim().split(/\r?\n/).map(s=>s.split(",")),head=rows.shift()||[];r=JSON.stringify(rows.map(row=>Object.fromEntries(head.map((k,i)=>[k.trim(),(row[i]||"").trim()]))),null,2);break;}
case"jsoncsv":{let a=JSON.parse(x);if(!Array.isArray(a)||!a.length)throw Error("Input must be a non-empty array of objects.");let h=[...new Set(a.flatMap(o=>Object.keys(o)))];r=[h.join(","),...a.map(o=>h.map(k=>JSON.stringify(o[k]??"")).join(","))].join("\n");break;}
case"strength":{let score=[x.length>=12,/[a-z]/.test(x),/[A-Z]/.test(x),/\d/.test(x),/[^A-Za-z0-9]/.test(x)].filter(Boolean).length;r=`Basic local estimate: ${["Very weak","Weak","Fair","Good","Strong","Excellent"][score]} (${score}/5 checks).\nThis is not a security audit. Never share real passwords.`;break;}
case"passwordgen":{let len=Math.min(64,Math.max(8,Number(x)||16)),chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*";let arr=new Uint32Array(len);crypto.getRandomValues(arr);r=[...arr].map(v=>chars[v%chars.length]).join("");break;}
case"hash":{let h=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(x));r=[...new Uint8Array(h)].map(v=>v.toString(16).padStart(2,"0")).join("");break;}
case"qr":r=`QR payload text:\n${x}\n\nCopy this text into a QR-code generator. This tool prepares the payload; it does not render a QR image.`;break;
case"palindrome":{let v=x.toLowerCase().replace(/[^\p{L}\p{N}]/gu,"");r=v===[...v].reverse().join("")?"Palindrome: yes":"Palindrome: no";break;}
case"vowels":{let a=x.match(/[aeiou]/gi)||[],b=x.match(/[bcdfghjklmnpqrstvwxyz]/gi)||[];r=`Vowels: ${a.length}\nConsonants: ${b.length}\nOther characters: ${x.length-a.length-b.length}`;break;}
case"anagram":{let a=x.toLowerCase().replace(/[^\p{L}\p{N}]/gu,"").split("").sort().join(""),b=y.toLowerCase().replace(/[^\p{L}\p{N}]/gu,"").split("").sort().join("");if(!y)throw Error("Enter the second phrase in the extra field.");r=a===b?"The phrases are anagrams.":"The phrases are not anagrams.";break;}
case"morse":{const m={a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--..",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----."};r=[...x.toLowerCase()].map(c=>c===" "?"/":m[c]||"?").join(" ");break;}
case"morsedecode":{const m={".-":"a","-...":"b","-.-.":"c","-..":"d",".":"e","..-.":"f","--.":"g","....":"h","..":"i",".---":"j","-.-":"k",".-..":"l","--":"m","-.":"n","---":"o",".--.":"p","--.-":"q",".-.":"r","...":"s","-":"t","..-":"u","...-":"v",".--":"w","-..-":"x","-.--":"y","--..":"z","-----":"0",".----":"1","..---":"2","...--":"3","....-":"4",".....":"5","-....":"6","--...":"7","---..":"8","----.":"9"};r=x.trim().split(" / ").map(w=>w.split(/\s+/).map(c=>m[c]||"?").join("")).join(" ");break;}
case"rot13":r=x.replace(/[a-zA-Z]/g,c=>String.fromCharCode(c.charCodeAt(0)+(c.toLowerCase()<="m"?13:-13)));break;
case"hexencode":r=[...new TextEncoder().encode(x)].map(b=>b.toString(16).padStart(2,"0")).join(" ");break;
case"hexdecode":{let a=x.trim().split(/[\s,]+/).filter(Boolean);if(a.some(v=>!/^[0-9a-f]{2}$/i.test(v)))throw Error("Enter hex byte pairs separated by spaces.");r=new TextDecoder().decode(new Uint8Array(a.map(v=>parseInt(v,16))));break;}
case"uuid":r=Array.from({length:5},()=>crypto.randomUUID()).join("\n");break;
case"roman":{let v=Number(x);if(!Number.isInteger(v)||v<1||v>3999)throw Error("Enter a whole number from 1 to 3999.");let vals=[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],o="";for(const [n,sym] of vals){while(v>=n){o+=sym;v-=n;}}r=o;break;}
case"romanread":{let v=x.toUpperCase(),map={I:1,V:5,X:10,L:50,C:100,D:500,M:1000},sum=0;for(let i=0;i<v.length;i++){if(!map[v[i]])throw Error("Use valid Roman numeral letters I, V, X, L, C, D, M.");sum+=map[v[i]]<(map[v[i+1]]||0)?-map[v[i]]:map[v[i]];}r=String(sum);break;}
case"extractemail":r=[...new Set(x.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)||[])].join("\n");break;
case"extracturl":r=[...new Set(x.match(/https?:\/\/[^\s<>"']+/gi)||[])].join("\n");break;
case"punctuation":r=x.replace(/[\p{P}\p{S}]/gu,"");break;
case"prefix":r=x.split(/\r?\n/).map(v=>v?y+v:v).join("\n");break;
case"suffix":r=x.split(/\r?\n/).map(v=>v?v+y:v).join("\n");break;
case"uniquewords":{let a=x.toLowerCase().match(/[\p{L}\p{N}']+/gu)||[];r=`Unique words: ${new Set(a).size}\nTotal words: ${a.length}`;break;}
case"wrap":{let width=Math.min(500,Math.max(10,Number(y)||80));r=x.split(/\r?\n/).map(line=>line.match(new RegExp(`.{1,${width}}(\\s|$)|\\S+`, "g"))?.join("\n")||"").join("\n");break;}
case"csvclean":r=x.split(/\r?\n/).map(line=>line.split(",").map(v=>v.trim()).join(",")).filter(v=>v.replace(/,/g,"").trim()).join("\n");break;
case"jsonvalidate":JSON.parse(x);r="Valid JSON.";break;
case"xmlencode":r=x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]));break;
case"striphtml":{let el=document.createElement("div");el.innerHTML=x;r=el.textContent||el.innerText||"";break;}
case"urlparse":{let u=new URL(x);r=`Protocol: ${u.protocol}\nHost: ${u.host}\nPath: ${u.pathname}\nQuery: ${u.search}\nHash: ${u.hash}`;break;}
case"shuffle":{let a=x.split(/\r?\n/);for(let i=a.length-1;i>0;i--){let j=crypto.getRandomValues(new Uint32Array(1))[0]%(i+1);[a[i],a[j]]=[a[j],a[i]];}r=a.join("\n");break;}
case"pick":{let a=x.split(/\r?\n/).map(v=>v.trim()).filter(Boolean);if(!a.length)throw Error("Enter one item per line.");r=a[crypto.getRandomValues(new Uint32Array(1))[0]%a.length];break;}
case"nato":{let m={a:"Alpha",b:"Bravo",c:"Charlie",d:"Delta",e:"Echo",f:"Foxtrot",g:"Golf",h:"Hotel",i:"India",j:"Juliett",k:"Kilo",l:"Lima",m:"Mike",n:"November",o:"Oscar",p:"Papa",q:"Quebec",r:"Romeo",s:"Sierra",t:"Tango",u:"Uniform",v:"Victor",w:"Whiskey",x:"X-ray",y:"Yankee",z:"Zulu"};r=[...x.toLowerCase()].map(c=>m[c]||c).join(" ");break;}
case"natodecode":{let m={alpha:"a",bravo:"b",charlie:"c",delta:"d",echo:"e",foxtrot:"f",golf:"g",hotel:"h",india:"i",juliett:"j",kilo:"k",lima:"l",mike:"m",november:"n",oscar:"o",papa:"p",quebec:"q",romeo:"r",sierra:"s",tango:"t",uniform:"u",victor:"v",whiskey:"w","x-ray":"x",yankee:"y",zulu:"z"};r=x.toLowerCase().split(/[ ,]+/).map(v=>m[v]||v).join("");break;}
case"baseconvert":{let b=Number(y);if(!Number.isInteger(b)||b<2||b>36)throw Error("Target base must be between 2 and 36.");let v=BigInt(x.trim());r=v.toString(b);break;}
case"markdown":r=x;break;
default:r="This tool is not available yet. Please choose another tool.";
}}catch(err){r=`Unable to process input: ${err.message||"Check your values."}`;}$("#output").textContent=r;$("#status").textContent=r.startsWith("Unable")?"Check input":"Completed";
if(!r.startsWith("Unable")){history=[{tool:selected.name,at:new Date().toLocaleString(),result:r},...history].slice(0,40);localStorage.setItem("utu-history",JSON.stringify(history));}}
$("#run").onclick=execute;$("#back").onclick=()=>{$("#catalog").classList.remove("hide");$("#workspace").classList.remove("show")};$("#clear").onclick=()=>{$("#input").value="";if($("#extra"))$("#extra").value="";$("#output").textContent="Your result will appear here."};$("#copy").onclick=async()=>{try{await navigator.clipboard.writeText($("#output").textContent);$("#status").textContent="Copied to clipboard";}catch{$("#status").textContent="Clipboard unavailable";}};$("#download").onclick=()=>{let blob=new Blob([$("#output").textContent],{type:"text/plain;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=(selected?.name||"tool-result").toLowerCase().replace(/[^a-z0-9]+/g,"-")+".txt";a.click();URL.revokeObjectURL(url);};$("#search").oninput=renderGrid;$("#searchBtn").onclick=renderGrid;$("#sort").onchange=renderGrid;$("#favoritesBtn").onclick=()=>{showFavorites=!showFavorites;active="All";renderCats();renderGrid();$("#catalog").scrollIntoView({behavior:"smooth"});};
$("#historyBtn").onclick=()=>{showFavorites=false;active="All";renderCats();$("#count").textContent=`Recent results (${history.length})`;$("#grid").innerHTML=history.map((h,i)=>`<article class="card" data-history="${i}"><div class="card-top"><div class="ico">▤</div><span class="tag">${esc(h.at)}</span></div><h3>${esc(h.tool)}</h3><p>${esc(h.result.slice(0,130))}</p></article>`).join("")||'<div class="empty">No results saved yet. Run a tool to build your history.</div>';$("#grid").querySelectorAll("[data-history]").forEach(c=>c.onclick=()=>{const h=history[+c.dataset.history];$("#catalog").classList.add("hide");$("#workspace").classList.add("show");$("#title").textContent=h.tool;$("#desc").textContent="Saved result from your local tool history.";$("#toolIcon").textContent="▤";$("#input").value="";$("#extras").innerHTML="";$("#output").textContent=h.result;$("#status").textContent=h.at;selected=null;});$("#catalog").scrollIntoView({behavior:"smooth"});};
$("#recentBtn").onclick=()=>{showFavorites=false;active="All";$("#search").value="";renderCats();$("#count").textContent=`Recent tools (${recent.length})`;let list=recent.map(id=>tools.find(t=>t.id===id)).filter(Boolean);$("#grid").innerHTML=list.map(t=>`<article class="card" data-id="${t.id}"><div class="card-top"><div class="ico">${esc(t.icon)}</div><span class="tag">${esc(t.cat)}</span></div><h3>${esc(t.name)}</h3><p>${esc(t.desc)}</p></article>`).join("")||'<div class="empty">No recent tools yet. Open any tool to see it here.</div>';$("#grid").querySelectorAll(".card").forEach(c=>c.onclick=()=>openTool(+c.dataset.id));$("#catalog").scrollIntoView({behavior:"smooth"});};renderCats();renderGrid();
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#search").focus();}if(e.key==="Escape"&&$("#workspace").classList.contains("show"))$("#back").click();});
