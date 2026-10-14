"use strict";
/* مسارات الصور: عدّل الملفات داخل مجلد images أو غيّر المسارات هنا */
var IMG={
  mother:"images/mother.jpg", teacher:"images/teacher.jpg", shelf:"images/shelf.jpg", worry:"images/worry.jpg",
  faceHappy:"images/face-happy.jpg", faceShelf:"images/face-shelf.jpg", faceWorry:"images/face-worry.jpg"
};
var $=function(s,r){return (r||document).querySelector(s)};
function h(tag,attrs,kids){var e=document.createElement(tag);attrs=attrs||{};
  for(var k in attrs){var v=attrs[k];if(v==null||v===false)continue;
    if(k==="html")e.innerHTML=v;else if(k==="text")e.textContent=v;else if(k.slice(0,2)==="on")e.addEventListener(k.slice(2),v);else e.setAttribute(k,v===true?"":v)}
  (kids||[]).forEach(function(c){if(c)e.appendChild(typeof c==="string"?document.createTextNode(c):c)});return e}

/* ---------- icons (inline SVG) ---------- */
var QURAN='<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="6" width="42" height="52" rx="5" fill="#1F5C38"/><rect x="8" y="8" width="42" height="52" rx="5" fill="#2E7D4F" stroke="#174a2c" stroke-width="2"/><rect x="14" y="14" width="30" height="40" rx="3" fill="none" stroke="#F4C23D" stroke-width="2"/><path d="M29 22l6 8-6 12-6-12z" fill="#F4C23D"/><circle cx="29" cy="32" r="3" fill="#2E7D4F"/></svg>';
var NOTE='<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="8" width="44" height="50" rx="5" fill="#fff" stroke="#3C8CD8" stroke-width="3"/><rect x="10" y="8" width="10" height="50" rx="4" fill="#3C8CD8"/><path d="M27 22h20M27 31h20M27 40h14" stroke="#9BBFE6" stroke-width="3" stroke-linecap="round"/></svg>';
var PENCILS='<svg viewBox="0 0 64 64" aria-hidden="true"><g stroke="#5E3B17" stroke-width="1.5"><path d="M14 52L12 12h8z" fill="#F4C23D"/><path d="M12 12l4-6 4 6z" fill="#F1D3A3"/><path d="M28 52L26 10h8z" fill="#E8434F"/><path d="M26 10l4-6 4 6z" fill="#F1D3A3"/><path d="M42 52L40 14h8z" fill="#3C8CD8"/><path d="M40 14l4-6 4 6z" fill="#F1D3A3"/></g></svg>';
var TOY='<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="20" cy="18" r="8" fill="#B07A45"/><circle cx="44" cy="18" r="8" fill="#B07A45"/><circle cx="32" cy="34" r="20" fill="#C98A4B" stroke="#5E3B17" stroke-width="2"/><circle cx="32" cy="42" r="9" fill="#F1D3A3"/><circle cx="25" cy="30" r="2.6" fill="#3A2A1A"/><circle cx="39" cy="30" r="2.6" fill="#3A2A1A"/><ellipse cx="32" cy="39" rx="3.4" ry="2.4" fill="#3A2A1A"/></svg>';
var ZSHELF='<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="14" y="62" width="132" height="10" rx="3" fill="#B98350" stroke="#8A5A2B" stroke-width="2"/><path d="M34 72l-12 22M126 72l12 22" stroke="#8A5A2B" stroke-width="6" stroke-linecap="round"/><path d="M30 72v10h8M130 72v10h-8" stroke="#8A5A2B" stroke-width="3" fill="none"/><path d="M104 62v-12a6 6 0 0 1 12 0v12z" fill="#E07A3F"/><circle cx="110" cy="38" r="10" fill="#4FB649"/><circle cx="44" cy="30" r="10" fill="#FFE08A" opacity=".8"/></svg>';
var ZDESK='<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="12" y="52" width="136" height="12" rx="4" fill="#C98A4B" stroke="#8A5A2B" stroke-width="2"/><path d="M26 64v40M134 64v40" stroke="#8A5A2B" stroke-width="8" stroke-linecap="round"/><rect x="104" y="30" width="22" height="22" rx="4" fill="#fff" stroke="#3C8CD8" stroke-width="3"/><path d="M110 30l-2-12M116 30v-14M122 30l3-11" stroke="#E8434F" stroke-width="3" stroke-linecap="round"/><rect x="34" y="40" width="42" height="12" rx="2" fill="#fff" stroke="#3C8CD8" stroke-width="2"/></svg>';
var ZBAG='<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M60 24a20 20 0 0 1 40 0" fill="none" stroke="#2467AB" stroke-width="6"/><rect x="38" y="22" width="84" height="82" rx="26" fill="#3C8CD8" stroke="#2467AB" stroke-width="3"/><rect x="52" y="62" width="56" height="30" rx="10" fill="#2F7CC8" stroke="#2467AB" stroke-width="2"/><rect x="62" y="38" width="36" height="14" rx="4" fill="#fff"/><path d="M80 62v10" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>';
var ZTOY='<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M22 48h116l-10 52H32z" fill="#E8A34A" stroke="#8A5A2B" stroke-width="3"/><rect x="16" y="38" width="128" height="14" rx="4" fill="#F1BF6F" stroke="#8A5A2B" stroke-width="3"/><rect x="40" y="14" width="22" height="22" rx="3" fill="#E8434F" transform="rotate(-8 51 25)"/><circle cx="92" cy="26" r="12" fill="#3C8CD8"/><path d="M112 36l10-22 10 22z" fill="#2E7D4F"/></svg>';
var HEART='<svg viewBox="0 0 48 44" aria-hidden="true"><path class="hl" d="M24 41C4 28 0 18 0 12 0 5 5 1 11 1c5 0 10 3 13 8l-4 8 6 7-5 7z"/><path class="hr" d="M24 41l-3-10 5-7-6-7 4-8c3-5 8-8 13-8 6 0 11 4 11 11 0 6-4 16-24 29z"/><path class="gl" d="M9 11c1.5-3 5-4 8-2"/></svg>';
var OPT={
 ear:'<svg viewBox="0 0 48 48"><path d="M16 28c0-10 4-18 13-18s11 7 11 13c0 8-8 8-8 14 0 4-3 6-7 6-5 0-9-4-9-15z" fill="#F1D3A3" stroke="#8A5A2B" stroke-width="2.5"/><path d="M24 22c0-4 3-6 6-5M24 30c3 0 5-2 4-6" fill="none" stroke="#8A5A2B" stroke-width="2.5" stroke-linecap="round"/></svg>',
 noise:'<svg viewBox="0 0 48 48"><path d="M6 19h8l10-9v28l-10-9H6z" fill="#E8434F"/><path d="M30 17c4 4 4 10 0 14M35 12c7 7 7 17 0 24" fill="none" stroke="#E8434F" stroke-width="3" stroke-linecap="round"/></svg>',
 shelf:'<svg viewBox="0 0 48 48"><rect x="6" y="32" width="36" height="5" rx="2" fill="#B98350"/><rect x="16" y="10" width="14" height="22" rx="2" fill="#2E7D4F"/><path d="M23 16l3 4-3 6-3-6z" fill="#F4C23D"/><path d="M12 37l-3 6M36 37l3 6" stroke="#8A5A2B" stroke-width="3"/></svg>',
 floor:'<svg viewBox="0 0 48 48"><rect x="4" y="38" width="40" height="6" rx="2" fill="#B98350"/><rect x="14" y="26" width="20" height="12" rx="2" fill="#9BA79F"/><path d="M24 6v14M17 14l7 8 7-8" fill="none" stroke="#E8434F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 care:'<svg viewBox="0 0 48 48"><rect x="12" y="14" width="24" height="26" rx="3" fill="#2E7D4F"/><path d="M24 20l4 5-4 8-4-8z" fill="#F4C23D"/><path d="M6 36c4-6 8-4 12 0M42 36c-4-6-8-4-12 0" fill="none" stroke="#F1A86A" stroke-width="5" stroke-linecap="round"/><path d="M36 6l1.6 3.4 3.6.5-2.6 2.6.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.6 3.6-.5z" fill="#F4C23D"/></svg>',
 careless:'<svg viewBox="0 0 48 48"><rect x="10" y="16" width="24" height="26" rx="3" fill="#2E7D4F" transform="rotate(-24 22 29)"/><circle cx="38" cy="36" r="8" fill="#E8434F"/><path d="M33 36h10" stroke="#fff" stroke-width="2.5"/></svg>',
 light:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="10" fill="#F4C23D"/><g stroke="#F4C23D" stroke-width="4" stroke-linecap="round"><path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4"/></g></svg>',
 dark:'<svg viewBox="0 0 48 48"><path d="M30 6a18 18 0 1 0 12 28A14 14 0 0 1 30 6z" fill="#8F99A3"/></svg>',
 love:'<svg viewBox="0 0 48 48"><path d="M24 42C8 31 5 23 5 17c0-6 4-9 9-9 4 0 8 2 10 6 2-4 6-6 10-6 5 0 9 3 9 9 0 6-3 14-19 25z" fill="#E8434F"/></svg>',
 story:'<svg viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="3" fill="#fff" stroke="#8F99A3" stroke-width="3"/><path d="M16 17h16M16 24h16M16 31h9" stroke="#8F99A3" stroke-width="3" stroke-linecap="round"/></svg>',
 away:'<svg viewBox="0 0 48 48"><rect x="8" y="22" width="24" height="18" rx="3" fill="#8F99A3"/><path d="M34 14l8 8-8 8" fill="none" stroke="#8F99A3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 speak:'<svg viewBox="0 0 48 48"><path d="M8 10h32a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H22l-9 8v-8H8a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3z" fill="#DCEBFA" stroke="#3C8CD8" stroke-width="3"/><circle cx="16" cy="22" r="2.5" fill="#3C8CD8"/><circle cx="24" cy="22" r="2.5" fill="#3C8CD8"/><circle cx="32" cy="22" r="2.5" fill="#3C8CD8"/></svg>',
 ignore:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="17" fill="none" stroke="#8F99A3" stroke-width="4"/><path d="M12 36L36 12" stroke="#8F99A3" stroke-width="4"/></svg>',
 recite:'<svg viewBox="0 0 48 48"><rect x="7" y="12" width="34" height="26" rx="3" fill="#fff" stroke="#2E7D4F" stroke-width="3"/><path d="M24 12v26M12 20h8M12 27h8M28 20h8M28 27h8" stroke="#2E7D4F" stroke-width="2.5" stroke-linecap="round"/></svg>'
};

/* ---------- content ---------- */
var STATIONS=[
 {name:"أين نضع المصحف؟",short:"أين نضع المصحف؟",img:"worry",alt:"سالم الحزين يضع المصحف في حقيبته بين الأوراق والدفاتر",
  intro:"سالم يريد ترتيب أغراضه، لكن المصحف اختلط بالدفاتر والأوراق في حقيبته. هيا نساعده!",
  how:"اسحب كل غرض إلى مكانه المناسب. وإن كنت تستخدم لوحة اللمس أو لوحة المفاتيح: اضغط على الغرض ثم اضغط على المكان."},
 {name:"ركن نصائح سالم",short:"ركن النصائح",img:"teacher",alt:"المعلم يقف مع سالم وزملائه في الفصل",
  intro:"في الفصل يعلّمنا المعلم كيف نتصرّف مع المصحف. هناك ثلاثة مواقف، ونحتاج إلى نصيحة سالم.",
  how:"اقرأ كل موقف، ثم اختر الإجابة التي تُظهر احترام كلام الله."},
 {name:"شجرة النور والتأمل",short:"شجرة النور",img:"shelf",alt:"سالم يضع المصحف على رفّ مرتفع نظيف",
  intro:"على شجرة النور ثلاث بطاقات مضيئة. كلما أجبتَ عن بطاقة أضاءت. ثم فكّر معنا في نعمة القرآن.",
  how:"اختر الإجابة المناسبة لكل بطاقة. ويمكنك أيضًا أن تكتب فكرتك الخاصة، وهذا اختياري."}
];
var CH=[
 /* station 1 */
 {st:0,type:"drag",obj:"note",label:"دفتر",icon:NOTE,ok:["desk","bag"],q:"أين نضع الدفتر؟",ans:"المكتب أو الحقيبة",
  right:"أحسنت! الدفاتر مكانها المكتب أو الحقيبة.",wrong:"هذا ليس المكان المناسب للدفتر. فكّر أين يضع الطالب دفاتره."},
 {st:0,type:"drag",obj:"toy",label:"لعبة",icon:TOY,ok:["toy"],q:"أين نضع اللعبة؟",ans:"صندوق الألعاب",
  right:"أحسنت! اللعبة مكانها صندوق الألعاب.",wrong:"اللعبة لها صندوقها الخاص. فكّر أين نجمع الألعاب."},
 {st:0,type:"drag",obj:"pen",label:"أقلام",icon:PENCILS,ok:["desk","bag"],q:"أين نضع الأقلام؟",ans:"المكتب (علبة الأقلام) أو الحقيبة",
  right:"أحسنت! الأقلام مكانها علبة الأقلام على المكتب أو الحقيبة.",wrong:"الأقلام من أدوات الدراسة. فكّر أين نحفظ أدواتنا."},
 {st:0,type:"drag",obj:"quran",label:"المصحف الشريف",icon:QURAN,ok:["shelf"],q:"أين نضع المصحف الشريف؟",ans:"الرف النظيف المرتفع",quran:true,
  right:"أحسنت! وضعت المصحف في مكان نظيف ومرتفع.",wrong:"المصحف كلام الله العظيم، فلنضعه في مكان نظيف ومرتفع يليق به."},
 /* station 2 */
 {st:1,type:"choice",q:"إذا كان القرآن الكريم يُتلى في المذياع، فماذا نفعل؟",
  opts:[{t:"نستمع إلى القرآن وننصت.",ic:"ear",ok:1},{t:"نرفع أصواتنا بالحديث واللعب.",ic:"noise"}],
  right:"أحسنت! نستمع إلى القرآن الكريم وننصت باهتمام.",wrong:"كيف نُظهر احترامنا لكلام الله؟",
  note:"قال الله تعالى: «وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا»."},
 {st:1,type:"choice",q:"رأيت زميلك يضع المصحف على الأرض، ماذا تقول له؟",
  opts:[{t:"اتركه على الأرض.",ic:"floor"},{t:"لنضع المصحف في مكان نظيف ومرتفع، فهو كلام الله.",ic:"shelf",ok:1}],
  right:"رائع! ننصح زميلنا بلطف ونساعده على وضع المصحف في مكان مناسب.",wrong:"ما النصيحة اللطيفة التي يمكنك أن تقدّمها لزميلك؟",
  note:"النصيحة بالرفق واللين تُقرّب القلوب."},
 {st:1,type:"choice",q:"أردت قراءة القرآن الكريم، كيف أستعد؟",
  opts:[{t:"أحرص على الطهارة، وأمسك المصحف بعناية، وأجلس بأدب.",ic:"care",ok:1},{t:"أمسك المصحف بإهمال وأنشغل باللعب أثناء القراءة.",ic:"careless"}],
  right:"أحسنت! نستعد لقراءة القرآن باهتمام وأدب.",wrong:"فكّر في كيفية الاستعداد لقراءة كتاب الله.",
  note:"النظافة والأدب مع المصحف أمر مهم. وللاطمئنان على أحكام الطهارة عند مسّ المصحف اسأل والديك أو معلمك."},
 /* station 3 */
 {st:2,type:"choice",reflect:true,q:"كيف ستكون حياتنا لو لم يكن لدينا القرآن الكريم؟",
  opts:[{t:"يفتقد الإنسان هداية القرآن ونوره.",ic:"dark",ok:1},{t:"لن نحتاج إلى أي هداية.",ic:"ignore"}],
  right:"أحسنت! القرآن يهدي المسلمين إلى الخير ويساعدهم على التمييز بين الصواب والخطأ.",wrong:"هل نستغني عن الهداية في حياتنا؟",
  note:"القرآن نور يهدينا إلى الخير ويعلّمنا الصواب من الخطأ."},
 {st:2,type:"choice",reflect:true,q:"ما الذي يجعل كلام الله مختلفًا عن كلام الناس؟",
  opts:[{t:"لأن القرآن كلام الله، وفيه هداية للناس.",ic:"light",ok:1},{t:"لأنه مجرد قصة مثل أي قصة.",ic:"story"}],
  right:"أحسنت! القرآن الكريم كلام الله، أنزله هدايةً ورحمةً للمؤمنين.",wrong:"من الذي أنزل القرآن، ولماذا؟",
  note:"القرآن كلام الله أنزله على نبيه محمد ﷺ هدايةً ورحمة."},
 {st:2,type:"choice",reflect:true,q:"كيف أُظهر حبي للقرآن الكريم كل يوم؟",
  opts:[{t:"أتلوه، وأتعلم معانيه، وأعمل بما يعلّمني.",ic:"love",ok:1},{t:"أضعه جانبًا ولا أهتم به.",ic:"away"}],
  right:"رائع! نُظهر حبنا للقرآن بتلاوته وتدبره والعمل بتعاليمه.",wrong:"كيف نعتني بمن نحب؟",
  note:"من أحبّ القرآن قرأه وفهمه وعمل به."}
];
var ZONES=[{id:"shelf",n:"الرف النظيف المرتفع",svg:ZSHELF,cls:"shelf"},{id:"desk",n:"المكتب وعلبة الأقلام",svg:ZDESK},{id:"bag",n:"حقيبة سالم",svg:ZBAG},{id:"toy",n:"صندوق الألعاب",svg:ZTOY}];

/* ---------- state ---------- */
var S={screen:"home",idx:0,started:false,intro:{0:false,1:false,2:false},
  attempts:2,status:"idle",selected:null,order:{},done:{},firstTry:{},sound:true,name:"",notes:{},saved:{},wrongOpt:null,face:"faceHappy",carry:null,result:{},left:{},place:{}};
function freshState(){S.screen="home";S.idx=0;S.started=false;S.intro={0:false,1:false,2:false};S.attempts=2;S.status="idle";S.selected=null;S.order={};S.done={};S.firstTry={};S.notes={};S.saved={};S.wrongOpt=null;S.face="faceHappy";S.carry=null;S.name="";S.result={};S.left={};S.place={}}

/* ---------- audio ---------- */
/* ---------- الصوت ----------
   المؤثرات: نغمات ناعمة عبر Web Audio.
   التعليق الصوتي: ملفات mp3 في مجلد audio فقط (لا يوجد صوت آلي).
   أضف اسم أي ملف جديد (بدون .mp3) إلى القائمة VOICE_CLIPS ليُشغَّل. */
var VOICE_CLIPS=["c0-reveal","c0-wrong","c1-right","c1-wrong","c2-right","c2-wrong","c3-right","c3-wrong","c4-right","c4-wrong","c5-right","c5-wrong","c6-right","c6-wrong","c7-right","c7-wrong","c8-right","c8-wrong","c9-right","c9-wrong","final"];
var AC=null,CLIP=null,VT=null,VID=0;
function ctx(){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==="suspended")AC.resume();return AC}catch(e){return null}}
addEventListener("pointerdown",ctx,{passive:true});addEventListener("keydown",ctx,{passive:true});
function tone(f,d,type,delay,vol){if(!S.sound)return;var a=ctx();if(!a)return;var t=a.currentTime+(delay||0),o=a.createOscillator(),g=a.createGain();
  o.type=type||"sine";o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol||.06,t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+d);
  o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d+.05)}
function sOk(){[523.25,659.25,783.99].forEach(function(f,i){tone(f,.5,"sine",i*.12,.06)})}
function sBad(){tone(392,.3,"sine",0,.045);tone(329.63,.4,"sine",.18,.045)}
function sTap(){tone(660,.07,"sine",0,.04)}
function hasClip(key){return VOICE_CLIPS.indexOf(key)>-1}
function sparkle(el,n){if(!el||matchMedia("(prefers-reduced-motion:reduce)").matches)return;var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  for(var i=0;i<(n||12);i++){var s=h("i",{class:"spark"}),a=Math.PI*2*i/(n||12)+Math.random()*.4,d=50+Math.random()*60;
    s.style.left=cx+"px";s.style.top=cy+"px";s.style.setProperty("--dx",Math.cos(a)*d+"px");s.style.setProperty("--dy",Math.sin(a)*d+"px");s.style.background=i%3?"#FFE27A":"#fff";
    document.body.appendChild(s);setTimeout(function(e){e.remove()},950,s)}}
function stopVoice(){VID++;clearTimeout(VT);if(CLIP){try{CLIP.pause()}catch(e){}CLIP=null}}
function speak(key,delay){if(!S.sound||!hasClip(key))return;stopVoice();var id=VID;
  VT=setTimeout(function(){if(id!==VID||!S.sound)return;try{var a=new Audio((window.AUDIO_DATA&&AUDIO_DATA[key])||"audio/"+key+".mp3");CLIP=a;var p=a.play();if(p&&p.catch)p.catch(function(){})}catch(e){}},delay==null?500:delay)}
function announce(t){var l=$("#live");l.textContent="";setTimeout(function(){l.textContent=t},30)}
function confetti(){if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;var c=["#F4C23D","#3C8CD8","#2E7D4F","#E8434F","#F1A86A"];
  for(var i=0;i<40;i++){var s=h("span",{class:"confetti"});s.style.left=Math.random()*100+"vw";s.style.background=c[i%5];s.style.animationDelay=Math.random()*.6+"s";document.body.appendChild(s);setTimeout(function(e){e.remove()},3200,s)}}

/* ---------- helpers ---------- */
function ch(){return CH[S.idx]}
function stationChallenges(st){return CH.map(function(c,i){return{c:c,i:i}}).filter(function(x){return x.c.st===st})}
function stationDone(st){return stationChallenges(st).every(function(x){return S.done[x.i]})}
function shuffled(i){if(!S.order[i]){var c=CH[i],a=c.opts?c.opts.map(function(_,k){return k}):[];
  for(var k=a.length-1;k>0;k--){var j=Math.floor(Math.random()*(k+1));var t=a[k];a[k]=a[j];a[j]=t}S.order[i]=a}return S.order[i]}
function setFace(k){S.face=k;var a=$(".avatar");if(a){a.src=IMG[k];a.classList.add("bump");setTimeout(function(){a.classList.remove("bump")},350)}}
function topBar(){
  var snd=h("button",{class:"tool",id:"bSnd","aria-pressed":String(S.sound),"aria-label":S.sound?"إيقاف الصوت":"تشغيل الصوت",title:"الصوت",onclick:function(){S.sound=!S.sound;if(!S.sound)stopVoice();
    this.setAttribute("aria-pressed",String(S.sound));this.setAttribute("aria-label",S.sound?"إيقاف الصوت":"تشغيل الصوت");this.innerHTML=sndIcon();sTap()},html:sndIcon()});
  var tools=h("div",{class:"tools"},[snd]);
  if(S.screen!=="home"){tools.insertBefore(h("button",{class:"tool wide",onclick:function(){S.screen="home";render()},"aria-label":"رجوع إلى الصفحة الرئيسية",html:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12l9-8 9 8M6 10v10h12V10" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span>رجوع</span>'}),snd)}
  if(S.started&&S.screen!=="play")tools.appendChild(h("button",{class:"tool wide",onclick:askRestart,"aria-label":"إعادة النشاط من البداية",html:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span>إعادة النشاط</span>'}));
  return h("header",{class:"top"},[h("div",{class:"brand",html:QURAN.replace('<svg','<svg width="34" height="34"')+"<span>رفيق الحياة</span>"}),tools])}
function sndIcon(){return S.sound?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9z" fill="currentColor"/><path d="M16 9l6 6M22 9l-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>'}
function askRestart(){$("#modal").classList.add("on");$("#mNo").focus()}
$("#mNo").onclick=function(){$("#modal").classList.remove("on")};
$("#mYes").onclick=function(){$("#modal").classList.remove("on");freshState();render()};
document.addEventListener("keydown",function(e){if(e.key==="Escape")$("#modal").classList.remove("on")});

/* ---------- render ---------- */
function render(){stopVoice();document.body.dataset.theme=S.screen==="home"?"home":(S.screen==="final"?"final":"s"+ch().st);var app=$("#app");app.innerHTML="";app.appendChild(topBar());
  var main=h("main",{id:"main"});app.appendChild(main);
  if(S.screen==="home")home(main);else if(S.screen==="intro")stIntro(main);else if(S.screen==="play")play(main);else final(main);
  window.scrollTo(0,0)}

function home(m){
  var cont=S.started;
  m.appendChild(h("section",{class:"card"},[h("div",{class:"hero"},[
    h("div",{},[h("span",{class:"badge-stage",text:"رحلة تعليمية للأطفال"}),
      h("h1",{text:"رفيق الحياة"}),
      h("p",{text:"تعلّم مع سالم كيف نُكرم المصحف الكريم، ونستمع إلى القرآن، ونُظهر حبنا لكلام الله."}),
      h("ol",{class:"how"},[
        h("li",{html:'<span class="n">١</span><span>ثلاث محطات: ساعد سالم، ثم تعلّم النصائح، ثم تأمّل.</span>'}),
        h("li",{html:'<span class="n">٢</span><span>لكل سؤال قلبان ❤️❤️. الخطأ يكسر قلبًا واحدًا، ولك محاولة أخرى.</span>'}),
        h("li",{html:'<span class="n">٣</span><span>أكمل المحطات الثلاث لتنال وسام «مُعظِّم كتاب الله».</span>'})]),
      h("div",{class:"row"},[h("button",{class:"btn gold",id:"bStart",onclick:function(){sTap();S.started=true;S.screen=S.intro[ch().st]?"play":"intro";render()},text:cont?"تابع الرحلة":"ابدأ الرحلة"})])]),
    h("figure",{class:"frame",style:"margin:0"},[h("img",{src:IMG.shelf,alt:"سالم الصغير يضع المصحف الأخضر على رفّ مرتفع نظيف في غرفته، وبجانبه حقيبته الزرقاء"})])
  ])]));
  $("#bStart").focus({preventScroll:true})}

function stIntro(m){var st=STATIONS[ch().st],n=ch().st;
  m.appendChild(progress());
  m.appendChild(h("section",{class:"card"},[h("div",{class:"hero"},[
    h("div",{},[h("span",{class:"badge-stage",text:"المحطة "+["الأولى","الثانية","الثالثة"][n]}),h("h1",{text:st.name}),h("p",{text:st.intro}),
      h("p",{html:"<b>كيف نلعب؟</b> "+st.how}),
      h("div",{class:"row"},[listenBtn("i"+n,st.intro,"استمع إلى شرح المحطة"),h("button",{class:"btn gold",id:"bGo",onclick:function(){sTap();S.intro[n]=true;S.screen="play";render()},text:"ابدأ المحطة"})])]),
    h("figure",{class:"frame",style:"margin:0"},[h("img",{src:IMG[st.img],alt:st.alt})])])]));
  $("#bGo").focus({preventScroll:true})}

function progress(){var ol=h("ol",{class:"steps","aria-label":"تقدّم المحطات"});
  STATIONS.forEach(function(s,i){var list=stationChallenges(i),d=list.filter(function(x){return S.done[x.i]}).length;
    var cls="step"+(stationDone(i)?" done":(i===ch().st&&S.screen!=="final"?" cur":""));
    ol.appendChild(h("li",{class:cls,"aria-current":(i===ch().st&&S.screen!=="final")?"step":null},[h("span",{class:"num",text:stationDone(i)?"✓":String(i+1)}),
      h("span",{class:"nm",html:s.short+"<small>"+d+" من "+list.length+"</small>"})]))});var dn=Object.keys(S.done).length;
  return h("div",{class:"journey"},[ol,h("div",{class:"gbar",role:"progressbar","aria-valuemin":"0","aria-valuemax":String(CH.length),"aria-valuenow":String(dn),"aria-label":"تقدّم الرحلة"},[h("i",{style:"width:"+Math.round(dn/CH.length*100)+"%"})])])}

function listenBtn(key,text,label){if(!hasClip(key))return null;return h("button",{class:"tool wide",type:"button","aria-label":label||"استمع",onclick:function(){if(!S.sound){S.sound=true;var b=$("#bSnd");if(b){b.setAttribute("aria-pressed","true");b.innerHTML=sndIcon()}}speak(key,0)},html:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>استمع'})}
function heartsBox(){var w=h("div",{class:"hearts",role:"img","aria-label":"المحاولات المتبقية: "+S.attempts+" من 2",id:"hearts"},[h("b",{text:"المحاولات"})]);
  for(var i=0;i<2;i++)w.appendChild(h("span",{class:"heart"+(i>=S.attempts?" broken":""),html:HEART}));return w}
function updateHearts(broke){var w=$("#hearts");if(!w)return;w.setAttribute("aria-label","المحاولات المتبقية: "+S.attempts+" من 2");
  var hs=w.querySelectorAll(".heart");hs.forEach(function(e,i){e.classList.toggle("broken",i>=S.attempts)});
  if(broke){var e=hs[S.attempts];if(e){e.classList.add("shake");setTimeout(function(){e.classList.remove("shake")},500)}}}

function sceneArt(c){var k=c.st===0?(c.quran?"shelf":"worry"):(c.st===1?"teacher":"mother");
  var alts={shelf:"سالم يضع المصحف على الرف المرتفع النظيف",worry:"سالم الصغير مع حقيبته وأغراضه في الفصل",teacher:"المعلم يتحدث مع سالم وزملائه في الفصل",mother:"سالم مع أمه عند باب غرفته وهو يحمل المصحف"};
  return h("aside",{class:"art"},[h("figure",{class:"frame"},[h("img",{src:IMG[k],alt:alts[k]})])])}
function play(m){var c=ch(),list=stationChallenges(c.st),pos=list.findIndex(function(x){return x.i===S.idx});
  m.appendChild(progress());
  var card=h("section",{class:"card"});
  card.appendChild(h("div",{class:"status"},[h("span",{class:"counter",text:STATIONS[c.st].name+" · "+(pos+1)+" من "+list.length}),heartsBox()]));
  var main=h("div",{class:"pmain"});
  main.appendChild(h("div",{class:"prompt"},[h("img",{class:"avatar",src:IMG[S.face],alt:"سالم"}),h("div",{},[h("h2",{id:"qh",text:c.q}),
    h("p",{class:"sub",text:c.type==="drag"?"اسحب الغرض إلى مكانه، أو اضغط عليه ثم اضغط على المكان.":"اختر إجابة واحدة."})]),listenBtn("c"+S.idx+"-q",c.q,"استمع إلى السؤال")]));
  if(c.st===2)main.appendChild(treeUI());
  var area=h("div",{id:"area"});main.appendChild(area);
  if(c.type==="drag")dragUI(area,c);else choiceUI(area,c);
  main.appendChild(h("div",{class:"feedback idle",id:"fb",role:"status"},[h("span",{class:"fi",text:"؟","aria-hidden":"true"}),h("div",{class:"ft",id:"ft",text:"اختر إجابتك وسأخبرك بالنتيجة."})]));
  card.appendChild(h("div",{class:"pgrid"},[sceneArt(c),main]));
  card.appendChild(actionBar());
  m.appendChild(card);syncNext();
  if(S.status==="correct"||S.status==="revealed"){if(c.type==="drag")finishDragView();else lockChoices()}
  if(S.status==="correct"||S.status==="revealed")restoreFeedback()}
var ICO_BACK='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var ICO_NEXT='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M20 12H5M11 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var ICO_REDO='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function actionBar(){
  return h("div",{class:"actions"},[
    h("button",{class:"btn alt small",id:"bBack",type:"button",onclick:back,"aria-label":"العودة إلى التحدي السابق",html:ICO_BACK+"<span>عودة</span>"}),
    h("button",{class:"btn alt small",id:"bRedo",type:"button",onclick:askRestart,"aria-label":"إعادة النشاط من البداية",html:ICO_REDO+"<span>إعادة النشاط</span>"}),
    nextButton()])}
function syncNext(){var n=$("#bNext"),b=$("#bBack");if(n)n.disabled=!(S.status==="correct"||S.status==="revealed");
  if(b)b.disabled=S.idx===0||S.status==="processing"}
/* الدخول إلى تحدٍّ: المنجز يُعرض مقفلًا بنتيجته، وغير المنجز يحتفظ بمحاولاته المتبقية (لا مجال لاستعادة القلوب) */
function enter(i){S.idx=i;S.selected=null;S.wrongOpt=null;
  if(S.done[i]){S.status=S.result[i];S.attempts=S.left[i];S.carry=S.place[i]||null;S.face=S.result[i]==="correct"?(CH[i].quran?"faceShelf":"faceHappy"):"faceWorry"}
  else{S.status="idle";S.attempts=S.left[i]!=null?S.left[i]:2;S.carry=null;S.face=S.attempts<2?"faceWorry":"faceHappy"}}
function back(){if(S.idx===0||S.status==="processing")return;sTap();enter(S.idx-1);S.screen="play";render()}


function treeUI(){var xs=[490,300,110],base=CH.findIndex(function(x){return x.st===2}),lamps="";
  xs.forEach(function(x,k){var i=base+k,done=!!S.done[i],cur=i===S.idx&&!done;
    lamps+='<g class="lamp'+(done?" done":"")+(cur?" cur":"")+'" transform="translate('+x+' '+(k===1?-58:0)+')">'
      +'<path d="M0 118Q-2 136 0 158" fill="none" stroke="#7A4E22" stroke-width="3" stroke-linecap="round"/>'
      +'<circle class="halo" cy="205" r="62" fill="url(#glow)"/>'
      +'<path class="cap" d="M-14 160h28l-5-10h-18z" fill="#C79A1C"/>'
      +'<path class="body" d="M-30 176a30 16 0 0 1 60 0v34a30 16 0 0 1-60 0z"/>'
      +'<path class="shine" d="M-20 172q0 24 4 40" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".55"/>'
      +'<path class="foot" d="M-16 232h32l-4 8h-24z" fill="#C79A1C"/>'
      +'<text class="num" y="200" text-anchor="middle" font-size="30" font-weight="800">'+(done?"✓":(k+1))+'</text></g>'});
  var leaves="";[[70,92],[150,60],[230,46],[360,44],[450,58],[530,90],[110,124],[490,124],[300,26],[190,104],[410,106]].forEach(function(p,n){leaves+='<ellipse cx="'+p[0]+'" cy="'+p[1]+'" rx="46" ry="30" fill="'+(n%2?"#5FB36A":"#4A9B57")+'" opacity=".95"/>'});
  var fruit="";[[90,80],[200,40],[300,70],[410,36],[510,84],[250,100],[350,102]].forEach(function(p){fruit+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="6" fill="#F4C23D"/><circle cx="'+(p[0]-2)+'" cy="'+(p[1]-2)+'" r="2" fill="#fff" opacity=".8"/>'});
  var fly="";[[40,40],[90,150],[170,30],[250,18],[360,24],[430,140],[520,36],[570,120],[330,210],[60,220]].forEach(function(p){fly+='<circle class="fly" cx="'+p[0]+'" cy="'+p[1]+'" r="3.4" fill="#FFE9A8"/>'});
  var svg='<svg viewBox="0 0 600 270" aria-hidden="true"><defs>'
    +'<radialGradient id="sun" cx=".5" cy=".4" r=".6"><stop offset="0" stop-color="#FFF1C0"/><stop offset="1" stop-color="#FFF7E3" stop-opacity="0"/></radialGradient>'
    +'<radialGradient id="glow"><stop offset="0" stop-color="#FFE08A" stop-opacity=".95"/><stop offset="1" stop-color="#F4C23D" stop-opacity="0"/></radialGradient>'
    +'<linearGradient id="trunk" x1="0" x2="1"><stop offset="0" stop-color="#6B4220"/><stop offset=".5" stop-color="#9A6531"/><stop offset="1" stop-color="#6B4220"/></linearGradient>'
    +'<linearGradient id="hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FD08A"/><stop offset="1" stop-color="#5FB36A"/></linearGradient></defs>'
    +'<ellipse cx="300" cy="90" rx="290" ry="120" fill="url(#sun)"/>'
    +'<path d="M-10 262Q150 226 300 240T610 232V270H-10z" fill="url(#hill)"/>'
    +'<path d="M300 262c-6-30-4-60-26-96-10-16-30-34-52-46M300 262c6-30 4-60 26-96 10-16 30-34 52-46M296 262c-2-40 0-90 4-150" fill="none" stroke="#7A4E22" stroke-width="2"/>'
    +'<path d="M262 262c10-34 14-70 6-104h64c-8 34-4 70 6 104z" fill="url(#trunk)"/>'
    +'<path d="M276 250c4-30 4-60 0-84M300 252c-2-30-2-60 2-86" fill="none" stroke="#5E3B17" stroke-width="2" opacity=".5" stroke-linecap="round"/>'
    +'<path d="M280 170Q200 150 110 118M320 170Q400 150 490 118" fill="none" stroke="#7A4E22" stroke-width="9" stroke-linecap="round"/>'
    +'<g>'+leaves+'</g><g>'+fruit+'</g>'+fly+lamps+'</svg>';
  return h("div",{class:"tree",role:"img","aria-label":"شجرة النور: ثلاث فوانيس معلّقة، المضيء منها ما أجبتَ عنه"},[h("div",{html:svg})])}

/* feedback component */
function feedback(kind,text,sub,keepAnnounce){var fb=$("#fb");if(!fb)return;
  var icon={good:"✓",retry:"!",reveal:"★",done:"★"}[kind]||"؟";
  fb.className="feedback "+kind;fb.innerHTML="";
  fb.appendChild(h("span",{class:"fi",text:icon,"aria-hidden":"true"}));
  fb.appendChild(h("div",{class:"ft",id:"ft",html:"<span></span>"+(sub?"<small></small>":"")}));
  $("#ft span").textContent=text;if(sub)$("#ft small").textContent=sub;
  syncNext();
  announce(text+(sub?" "+sub:""));fb._k=[kind,text,sub]}
function restoreFeedback(){var c=ch();if(S.status==="correct")feedback("good",c.right,c.note||"");else feedback("reveal","أحسنت المحاولة يا بطل! الإجابة الصحيحة هي: "+answerText(c)+".",c.note||"")}
function answerText(c){return c.type==="drag"?c.ans:c.opts.filter(function(o){return o.ok})[0].t.replace(/\.$/,"")}
function nextButton(){var last=S.idx===CH.length-1,endSt=!last&&CH[S.idx+1].st!==ch().st;
  return h("button",{class:"btn gold small",id:"bNext",type:"button",onclick:next,disabled:true,html:"<span>"+(last?"إنهاء الرحلة":(endSt?"المحطة التالية":"متابعة"))+"</span>"+ICO_NEXT})}
function next(){if(S.status!=="correct"&&S.status!=="revealed")return;sTap();
  if(S.idx>=CH.length-1){S.screen="final";render();confetti();sOk();return}
  var prevSt=ch().st;enter(S.idx+1);
  S.screen=(CH[S.idx].st!==prevSt&&!S.intro[CH[S.idx].st])?"intro":"play";render()}

/* shared outcome logic: exactly one place deducts hearts */
function succeed(){S.status="correct";S.done[S.idx]=true;S.result[S.idx]="correct";S.left[S.idx]=S.attempts;S.place[S.idx]=S.carry;if(S.firstTry[S.idx]==null)S.firstTry[S.idx]=(S.attempts===2);
  sOk();speak("c"+S.idx+"-right");feedback("good",ch().right,ch().note||"");sparkle($(".choice.right")||$(".zone.glow")||$("#obj"));sparkle($("#fb .fi"),8);setFace(ch().quran?"faceShelf":"faceHappy");updateProgressBar();$("#bNext").focus()}
function fail(){S.attempts=Math.max(0,S.attempts-1);S.left[S.idx]=S.attempts;updateHearts(true);sBad();setFace("faceWorry");
  if(S.attempts>0){S.status="idle";feedback("retry","محاولة أخرى يا بطل! فكّر جيدًا وحاول من جديد.",ch().wrong);speak("c"+S.idx+"-wrong");return false}
  S.status="revealed";S.done[S.idx]=true;S.result[S.idx]="revealed";if(S.firstTry[S.idx]==null)S.firstTry[S.idx]=false;
  feedback("reveal","أحسنت المحاولة يا بطل! الإجابة الصحيحة هي: "+answerText(ch())+".",ch().note||ch().wrong);speak("c"+S.idx+"-reveal");
  updateProgressBar();$("#bNext").focus();return true}
function updateProgressBar(){var p=$(".journey");if(p)p.replaceWith(progress())}

/* choice challenges */
function choiceUI(area,c){var wrap=h("div",{class:"choices",role:"group","aria-labelledby":"qh"});
  shuffled(S.idx).forEach(function(k,i){var o=c.opts[k];
    var b=h("button",{class:"choice",type:"button","data-k":k,"aria-pressed":"false",onclick:function(){pickChoice(k)}},[
      h("span",{class:"ic",html:OPT[o.ic]}),h("span",{class:"tx",text:o.t}),h("span",{class:"mark","aria-hidden":"true"})]);
    wrap.appendChild(b)});area.appendChild(wrap);
}
function lockChoices(){var c=ch();document.querySelectorAll(".choice").forEach(function(b){var o=c.opts[+b.dataset.k];b.disabled=true;
  if(o.ok){b.classList.add("right");b.setAttribute("aria-label",o.t+" — الإجابة الصحيحة")}})}
function pickChoice(k){if(S.status!=="idle")return;var c=ch(),o=c.opts[k];S.status="processing";S.selected=k;sTap();
  document.querySelectorAll(".choice").forEach(function(b){b.disabled=true;var on=+b.dataset.k===k;b.classList.toggle("sel",on);b.setAttribute("aria-pressed",String(on))});
  setTimeout(function(){
    if(o.ok){document.querySelectorAll(".choice").forEach(function(b){b.classList.remove("sel")});lockChoices();succeed();return}
    var bad=document.querySelector('.choice[data-k="'+k+'"]');bad.classList.remove("sel");bad.classList.add("wrong");
    var over=fail();
    if(over){lockChoices()}
    else{setTimeout(function(){document.querySelectorAll(".choice").forEach(function(b){b.disabled=false;b.classList.remove("wrong","sel");b.setAttribute("aria-pressed","false")});S.selected=null},650)}
  },420)}

/* drag & drop challenges */
function dragUI(area,c){var scene=h("div",{class:"scene"});
  ZONES.forEach(function(z){var b=h("button",{class:"zone "+(z.cls||""),type:"button","data-z":z.id,"aria-label":z.n,onclick:function(){zoneTap(z.id)}},[h("span",{html:z.svg}),h("span",{text:z.n})]);
    scene.appendChild(b)});
  area.appendChild(scene);
  var tray=h("div",{class:"tray"});var o=h("button",{class:"obj",type:"button",id:"obj","aria-label":c.label+" — اضغط للتحديد ثم اضغط على المكان المناسب"},[h("span",{html:c.icon}),h("span",{text:c.label})]);
  tray.appendChild(o);area.appendChild(tray);
  bindObj(o,c);
}
function finishDragView(){var c=ch(),o=$("#obj");
  if(S.status==="correct"&&S.carry){placeInto(S.carry)}
  else if(S.status==="revealed"){c.ok.forEach(function(z){var e=$('.zone[data-z="'+z+'"]');if(e)e.classList.add("answer")});if(o)o.classList.add("gone")}
  lockObj()}
function lockObj(){var o=$("#obj");if(o)o.disabled=true}
function placeInto(zid){var c=ch(),z=$('.zone[data-z="'+zid+'"]'),o=$("#obj");if(!z)return;
  if(!z.querySelector(".put"))z.appendChild(h("span",{class:"put",html:c.icon}));if(o)o.classList.add("gone");
  if(c.quran)z.classList.add("glow")}
function bindObj(o,c){var sx,sy,drag=false,id=null;
  o.addEventListener("pointerdown",function(e){if(S.status!=="idle"||e.button>0)return;id=e.pointerId;sx=e.clientX;sy=e.clientY;drag=false;try{o.setPointerCapture(id)}catch(x){}});
  o.addEventListener("pointermove",function(e){if(id==null||e.pointerId!==id)return;var dx=e.clientX-sx,dy=e.clientY-sy;
    if(!drag&&Math.hypot(dx,dy)>8){drag=true;o.classList.add("drag");setSel(false)}
    if(drag){o.style.transform="translate("+dx+"px,"+dy+"px) scale(1.06) rotate(3deg)";var z=zoneAt(e.clientX,e.clientY);document.querySelectorAll(".zone").forEach(function(q){q.classList.toggle("over",q===z)})}});
  function end(e,cancel){if(id==null||e.pointerId!==id)return;try{o.releasePointerCapture(id)}catch(x){}id=null;
    if(drag){var z=cancel?null:zoneAt(e.clientX,e.clientY);o.classList.remove("drag");o.style.transform="";document.querySelectorAll(".zone").forEach(function(q){q.classList.remove("over")});
      drag=false;o._wasDrag=true;setTimeout(function(){o._wasDrag=false},0);if(z)dropOn(z.dataset.z)}}
  o.addEventListener("pointerup",function(e){end(e,false)});
  o.addEventListener("pointercancel",function(e){end(e,true)});
  o.addEventListener("click",function(){if(o._wasDrag||S.status!=="idle")return;setSel(!o.classList.contains("sel"))})}
function zoneAt(x,y){var els=document.elementsFromPoint(x,y);for(var i=0;i<els.length;i++){var z=els[i].closest&&els[i].closest(".zone");if(z)return z}return null}
function setSel(on){var o=$("#obj");if(!o)return;o.classList.toggle("sel",on);document.querySelectorAll(".zone").forEach(function(z){z.classList.toggle("armed",on)});if(on)sTap()}
function zoneTap(id){var o=$("#obj");if(S.status!=="idle"||!o||!o.classList.contains("sel"))return;setSel(false);dropOn(id)}
function dropOn(zid){if(S.status!=="idle")return;var c=ch(),o=$("#obj");S.status="processing";setSel(false);
  if(c.ok.indexOf(zid)>-1){S.carry=zid;placeInto(zid);lockObj();succeed();return}
  o.classList.add("bad");setTimeout(function(){o.classList.remove("bad")},500);
  var over=fail();
  if(over){c.ok.forEach(function(z){var e=$('.zone[data-z="'+z+'"]');if(e)e.classList.add("answer")});o.classList.add("gone");lockObj()}}

/* ---------- final ---------- */
function final(m){speak("final",900);
  var date="";try{date=new Date().toLocaleDateString("ar",{year:"numeric",month:"long",day:"numeric"})}catch(e){}
  var medal='<svg class="medal" viewBox="0 0 240 280" role="img" aria-label="وسام مُعظِّم كتاب الله"><path d="M70 0h40l20 90H90zM170 0h-40l-20 90h40z" fill="#3C8CD8"/><path d="M92 0h20l12 60-18 30z" fill="#2467AB"/><circle cx="120" cy="170" r="92" fill="#F4C23D" stroke="#C79A1C" stroke-width="8"/><circle cx="120" cy="170" r="72" fill="#FFF1C0" stroke="#C79A1C" stroke-width="3" stroke-dasharray="6 6"/><rect x="82" y="124" width="76" height="92" rx="8" fill="#2E7D4F" stroke="#1F5C38" stroke-width="4"/><rect x="92" y="134" width="56" height="72" rx="5" fill="none" stroke="#F4C23D" stroke-width="3"/><path d="M120 148l12 16-12 24-12-24z" fill="#F4C23D"/><circle cx="120" cy="164" r="5" fill="#2E7D4F"/><path d="M66 232c20 14 88 14 108 0" fill="none" stroke="#C79A1C" stroke-width="5" stroke-linecap="round"/><path d="M120 24l4 10 10 1-8 7 3 10-9-6-9 6 3-10-8-7 10-1z" fill="#fff" opacity=".0"/></svg>';
  var card=h("section",{class:"card final"},[
    h("div",{class:"medalwrap"},[h("div",{class:"rays"}),h("div",{class:"stars",html:["8% 20%","90% 14%","4% 66%","94% 62%","24% 4%","76% 2%"].map(function(p,k){var xy=p.split(" ");return '<i style="left:'+xy[0]+';top:'+xy[1]+';animation-delay:-'+k*.3+'s"></i>'}).join("")}),h("div",{html:medal})]),
    h("h1",{text:"وسام مُعظِّم كتاب الله"}),
    h("p",{class:"msg",text:"أحسنت يا بطل! تعلّمت كيف تُكرم المصحف الكريم، وتستمع إلى القرآن، وتُظهر حبك لكلام الله."}),
    h("div",{class:"photos"},[
      h("figure",{class:"frame",style:"margin:0"},[h("img",{src:IMG.faceHappy,alt:"سالم يبتسم فرحًا وهو يحمل المصحف"})]),
      h("figure",{class:"frame",style:"margin:0"},[h("img",{src:IMG.mother,alt:"أم سالم بحجابها الأبيض تتحدث معه عند باب الغرفة وهو يحمل المصحف وحقيبته"})]),
      h("figure",{class:"frame",style:"margin:0"},[h("img",{src:IMG.teacher,alt:"المعلم مع سالم وزملائه في الفصل"})]),
      h("figure",{class:"frame",style:"margin:0"},[h("img",{src:IMG.shelf,alt:"سالم يضع المصحف على الرف المرتفع النظيف"})])]),
    h("div",{class:"namebox"},[h("label",{for:"nm",text:"اسمك على الشهادة (اختياري)"}),h("input",{id:"nm",type:"text",maxlength:"40",autocomplete:"off",placeholder:"اكتب اسمك هنا",value:S.name,
      oninput:function(){S.name=this.value;$("#cName").textContent=this.value.trim()||"          "}})]),
    h("article",{id:"cert","aria-label":"شهادة"},[
      h("img",{class:"ci",src:IMG.faceHappy,alt:"سالم مبتسمًا"}),
      h("h3",{text:"شهادة إتمام الرحلة"}),
      h("p",{text:"تُمنح هذه الشهادة إلى"}),
      h("div",{class:"cn",id:"cName",text:S.name.trim()||"          "}),
      h("p",{text:"تقديرًا لإتمام لعبة «رفيق الحياة»، ونيل"}),
      h("div",{class:"ct",text:"وسام مُعظِّم كتاب الله"}),
      date?h("p",{text:"التاريخ: "+date}):null,
      h("small",{text:"شهادة تشجيعية للعبة تعليمية، وليست شهادة رسمية."})]),
    h("div",{class:"row",style:"justify-content:center"},[
      h("button",{class:"btn gold",onclick:function(){window.print()},text:"طباعة الشهادة"}),
      h("button",{class:"btn alt",onclick:function(){freshState();S.started=false;render()},text:"إعادة النشاط"})])
  ]);m.appendChild(card);$("#nm").focus({preventScroll:true})}

render();
