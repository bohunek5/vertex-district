(() => {
  'use strict';
  const translations={
    pl:{pageTitle:'Dostęp do prezentacji',presentation:'Prezentacja indywidualna',eyebrow:"Zaprojektuj swoją przestrzeń",title:'Zobacz, co możemy stworzyć.',description:"Odkryj projekt i interaktywne możliwości konfiguracji. Wprowadź hasło, aby otworzyć prezentację.",password:'Hasło dostępu',remember:'Zapamiętaj dostęp w tej karcie',submit:'Otwórz prezentację',opening:'Otwieranie prezentacji…',footnote:"Pomysł · forma · Twoja przestrzeń",footer:'Materiały do prezentacji projektu',language:'Język prezentacji',showPassword:'Pokaż hasło',hidePassword:'Ukryj hasło',required:'Wprowadź hasło dostępu.',crypto:'Otwórz stronę przez HTTPS w aktualnej przeglądarce.',download:'Nie udało się pobrać prezentacji. Sprawdź połączenie i spróbuj ponownie.',expired:'Prezentacja została zaktualizowana. Wprowadź hasło ponownie.',incorrect:'Nieprawidłowe hasło. Spróbuj ponownie.',failed:'Nie udało się otworzyć prezentacji. Odśwież stronę i spróbuj ponownie.'},
    en:{pageTitle:'Presentation access',presentation:'Private presentation',eyebrow:"Design your space",title:'See what we can create.',description:"Explore the project and its interactive configuration possibilities. Enter the password to open the presentation.",password:'Access password',remember:'Remember access in this tab',submit:'Open presentation',opening:'Opening presentation…',footnote:"Idea · form · Your space",footer:'Project presentation materials',language:'Presentation language',showPassword:'Show password',hidePassword:'Hide password',required:'Enter the access password.',crypto:'Open this page over HTTPS in an up-to-date browser.',download:'The presentation could not be downloaded. Check your connection and try again.',expired:'The presentation has been updated. Enter the password again.',incorrect:'Incorrect password. Please try again.',failed:'The presentation could not be opened. Refresh the page and try again.'},
    de:{pageTitle:'Zugang zur Präsentation',presentation:'Persönliche Präsentation',eyebrow:"Gestalten Sie Ihren Raum",title:'Sehen Sie, was wir gestalten können.',description:"Entdecken Sie das Projekt und seine interaktiven Konfigurationsmöglichkeiten. Geben Sie das Passwort ein, um die Präsentation zu öffnen.",password:'Zugangspasswort',remember:'Zugang in diesem Tab merken',submit:'Präsentation öffnen',opening:'Präsentation wird geöffnet…',footnote:"Idee · Form · Ihr Raum",footer:'Unterlagen zur Projektpräsentation',language:'Sprache der Präsentation',showPassword:'Passwort anzeigen',hidePassword:'Passwort verbergen',required:'Geben Sie das Zugangspasswort ein.',crypto:'Öffnen Sie diese Seite über HTTPS in einem aktuellen Browser.',download:'Die Präsentation konnte nicht heruntergeladen werden. Prüfen Sie die Verbindung und versuchen Sie es erneut.',expired:'Die Präsentation wurde aktualisiert. Geben Sie das Passwort erneut ein.',incorrect:'Falsches Passwort. Versuchen Sie es erneut.',failed:'Die Präsentation konnte nicht geöffnet werden. Laden Sie die Seite neu und versuchen Sie es erneut.'},
    lt:{pageTitle:'Prieiga prie pristatymo',presentation:'Individualus pristatymas',eyebrow:"Kurkite savo erdvę",title:'Pažiūrėkite, ką galime sukurti.',description:"Atraskite projektą ir interaktyvias konfigūravimo galimybes. Įveskite slaptažodį, kad atidarytumėte pristatymą.",password:'Prieigos slaptažodis',remember:'Prisiminti prieigą šiame skirtuke',submit:'Atidaryti pristatymą',opening:'Atidaromas pristatymas…',footnote:"Idėja · forma · Jūsų erdvė",footer:'Projekto pristatymo medžiaga',language:'Pristatymo kalba',showPassword:'Rodyti slaptažodį',hidePassword:'Slėpti slaptažodį',required:'Įveskite prieigos slaptažodį.',crypto:'Atidarykite šį puslapį per HTTPS naudodami atnaujintą naršyklę.',download:'Nepavyko atsisiųsti pristatymo. Patikrinkite ryšį ir bandykite dar kartą.',expired:'Pristatymas atnaujintas. Įveskite slaptažodį dar kartą.',incorrect:'Neteisingas slaptažodis. Bandykite dar kartą.',failed:'Nepavyko atidaryti pristatymo. Atnaujinkite puslapį ir bandykite dar kartą.'},
    hu:{pageTitle:'Hozzáférés a bemutatóhoz',presentation:'Személyes bemutató',eyebrow:"Tervezze meg saját terét",title:'Nézze meg, mit alkothatunk.',description:"Fedezze fel a projektet és az interaktív konfiguráció lehetőségeit. A bemutató megnyitásához adja meg a jelszót.",password:'Hozzáférési jelszó',remember:'Hozzáférés megjegyzése ezen a lapon',submit:'Bemutató megnyitása',opening:'Bemutató megnyitása…',footnote:"Ötlet · forma · Az Ön tere",footer:'A projekt bemutatóanyagai',language:'A bemutató nyelve',showPassword:'Jelszó megjelenítése',hidePassword:'Jelszó elrejtése',required:'Adja meg a hozzáférési jelszót.',crypto:'Nyissa meg az oldalt HTTPS-en keresztül, naprakész böngészőben.',download:'A bemutatót nem sikerült letölteni. Ellenőrizze a kapcsolatot, és próbálja újra.',expired:'A bemutató frissült. Adja meg újra a jelszót.',incorrect:'Helytelen jelszó. Próbálja újra.',failed:'A bemutatót nem sikerült megnyitni. Frissítse az oldalt, és próbálja újra.'},
    cs:{pageTitle:'Přístup k prezentaci',presentation:'Osobní prezentace',eyebrow:"Navrhněte svůj prostor",title:'Podívejte se, co můžeme vytvořit.',description:"Objevte projekt a možnosti interaktivní konfigurace. Pro otevření prezentace zadejte heslo.",password:'Přístupové heslo',remember:'Zapamatovat přístup v této kartě',submit:'Otevřít prezentaci',opening:'Otevírání prezentace…',footnote:"Nápad · forma · Váš prostor",footer:'Materiály k prezentaci projektu',language:'Jazyk prezentace',showPassword:'Zobrazit heslo',hidePassword:'Skrýt heslo',required:'Zadejte přístupové heslo.',crypto:'Otevřete tuto stránku přes HTTPS v aktuálním prohlížeči.',download:'Prezentaci se nepodařilo stáhnout. Zkontrolujte připojení a zkuste to znovu.',expired:'Prezentace byla aktualizována. Zadejte heslo znovu.',incorrect:'Nesprávné heslo. Zkuste to znovu.',failed:'Prezentaci se nepodařilo otevřít. Obnovte stránku a zkuste to znovu.'}
  };
  const FORMAT='nova-pages-v1',encoder=new TextEncoder();
  const base=new URL('./',document.currentScript.src);
  const projectName=document.documentElement.dataset.previewName||'VERTEX District';
  const projectId=document.documentElement.dataset.previewId||'vertex-district';
  const storageKey=`nova-demo-access:${projectId}:${base.pathname}`;
  const form=document.getElementById('gate-form'),input=document.getElementById('gate-password'),remember=document.getElementById('gate-remember'),submit=document.getElementById('gate-submit'),label=document.getElementById('gate-submit-label'),message=document.getElementById('gate-message');
  const languageSelect=document.getElementById('gate-language'),reveal=document.getElementById('gate-reveal');
  const queryLanguage=()=>{const code=new URLSearchParams(location.search).get('lang');return Object.hasOwn(translations,code)?code:'pl';};
  let language=queryLanguage(),messageKey='';
  const copy=()=>translations[language];
  const from64=value=>Uint8Array.from(atob(value),char=>char.charCodeAt(0));
  const to64=value=>btoa(String.fromCharCode(...new Uint8Array(value)));
  let busy=false,pendingEnvelope;
  function clearAccess(){try{sessionStorage.removeItem(storageKey);}catch{}}
  function setMessage(key){messageKey=key;message.textContent=key?copy()[key]:'';}
  function translate(){
    document.documentElement.lang=language;
    document.title=`${projectName} — ${copy().pageTitle}`;
    document.querySelectorAll('[data-gate-i18n]').forEach(element=>{element.textContent=copy()[element.dataset.gateI18n];});
    languageSelect.value=language;
    reveal.setAttribute('aria-label',copy()[input.type==='password'?'showPassword':'hidePassword']);
    input.setCustomValidity(input.value?'':copy().required);
    label.textContent=copy()[busy?'opening':'submit'];
    setMessage(messageKey);
  }
  function setBusy(value){busy=value;input.disabled=value;submit.disabled=value;form.setAttribute('aria-busy',String(value));label.textContent=copy()[value?'opening':'submit'];}
  async function envelope(){
    if(!pendingEnvelope)pendingEnvelope=(async()=>{
      const response=await fetch(new URL('app.encrypted.json',base),{cache:'no-cache',credentials:'same-origin'});
      if(!response.ok)throw new Error('download');
      const data=await response.json();
      if(data.format!==FORMAT||data.kdf!=='PBKDF2'||data.hash!=='SHA-256'||data.iterations!==600000||from64(data.salt).length!==32||from64(data.iv).length!==12||typeof data.ciphertext!=='string'||data.ciphertext.length>12000000)throw new Error('package');
      return data;
    })();
    try{return await pendingEnvelope;}catch(error){pendingEnvelope=undefined;throw error;}
  }
  async function derive(password,data){
    const material=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveKey']);
    return crypto.subtle.deriveKey({name:'PBKDF2',salt:from64(data.salt),iterations:600000,hash:'SHA-256'},material,{name:'AES-GCM',length:256},true,['decrypt']);
  }
  function filenameOf(value,applicationBase){
    const url=new URL(value,applicationBase);
    if(url.origin!==base.origin||!url.pathname.startsWith(base.pathname))return null;
    return decodeURIComponent(url.pathname.slice(base.pathname.length));
  }
  function absoluteStylesheet(css,filename,files,ancestors=[]){
    if(ancestors.includes(filename))throw new Error('Circular stylesheet import');
    const fileBase=new URL(filename,base);
    css=css.replace(/@import\s+(?:url\(\s*(['"]?)([^'"\s)]+)\1\s*\)|(['"])([^'"]+)\3)\s*([^;]*);/gi,(match,quote,url,otherQuote,otherUrl,media)=>{
      const target=new URL(url||otherUrl,fileBase),privateFile=filenameOf(target.href,base);
      if(privateFile&&Object.hasOwn(files,privateFile)){
        const imported=absoluteStylesheet(files[privateFile],privateFile,files,[...ancestors,filename]);
        if(/\b(?:layer|supports)\s*\(/.test(media))throw new Error('Unsupported stylesheet import condition');
        return media.trim()?`@media ${media}{${imported}}`:imported;
      }
      return `@import url("${target.href}")${media?' '+media:''};`;
    });
    return css.replace(/url\(\s*(['"]?)([^'"\s)]+)\1\s*\)/gi,(match,quote,value)=>/^(?:data:|blob:|#)/i.test(value)?match:`url("${new URL(value,fileBase).href}")`);
  }
  function openApplication(app){
    if(app.format!==FORMAT||app.deployment?.base!==base.pathname||app.deployment?.projectId!==projectId||!app.files?.['index.html']||!app.files?.['js/main.js'])throw new Error('package');
    const htmlFile='index.html',applicationBase=base;
    const parsed=new DOMParser().parseFromString(app.files[htmlFile],'text/html');
    const mappings={'nova-public/':base.href},urls=new Map();
    for(const script of parsed.querySelectorAll('script[type="importmap"]')){
      const prior=JSON.parse(script.textContent);
      if(prior.scopes)throw new Error('Unsupported scoped imports');
      for(const[specifier,target]of Object.entries(prior.imports||{}))if(!specifier.startsWith('nova-private/'))mappings[specifier]=new URL(target,applicationBase).href;
      script.remove();
    }
    for(const[filename,contents]of Object.entries(app.files)){
      if(!/\.m?js$/.test(filename))continue;
      const url=URL.createObjectURL(new Blob([contents],{type:'text/javascript'}));
      urls.set(filename,url);mappings[`nova-private/${filename}`]=url;
    }
    for(const link of parsed.querySelectorAll('link[rel="stylesheet"][href]')){
      const filename=filenameOf(link.getAttribute('href'),applicationBase);
      if(filename&&Object.hasOwn(app.files,filename)){
        const style=parsed.createElement('style');style.textContent=absoluteStylesheet(app.files[filename],filename,app.files);link.replaceWith(style);
      }else link.href=new URL(link.getAttribute('href'),applicationBase).href;
    }
    for(const script of parsed.querySelectorAll('script[type="module"][src]')){
      const filename=filenameOf(script.getAttribute('src'),applicationBase);
      if(!urls.has(filename))throw new Error('Missing private entry module');
      script.src=urls.get(filename);
    }
    // Resolve HTML resources against the application root, not the requested deep route.
    for(const element of parsed.querySelectorAll('[src],[poster],link[href]')){
      for(const attribute of ['src','poster',...(element.tagName==='LINK'?['href']:[])]){
        const value=element.getAttribute(attribute);if(value&&!/^(?:blob:|data:|#)/i.test(value))element.setAttribute(attribute,new URL(value,applicationBase).href);
      }
    }
    parsed.querySelectorAll('base').forEach(element=>element.remove());
    const deployment=parsed.createElement('script');deployment.textContent=`globalThis.__NOVA_DEPLOYMENT__=${JSON.stringify(app.deployment).replaceAll('<','\\u003c')};`;
    const importmap=parsed.createElement('script');importmap.type='importmap';importmap.textContent=JSON.stringify({imports:mappings});
    parsed.head.prepend(deployment,importmap);
    input.value='';
    // Module blob URLs remain valid while this document is open, including lazy imports.
    document.open();document.write('<!doctype html>\n'+parsed.documentElement.outerHTML);document.close();
  }
  async function unlock(password,cached=null){
    if(busy)return;setMessage('');setBusy(true);
    try{
      if(!globalThis.crypto?.subtle)throw new Error('crypto');
      const data=await envelope();let key;
      if(cached){if(cached.salt!==data.salt)throw new Error('expired');key=await crypto.subtle.importKey('raw',from64(cached.key),'AES-GCM',false,['decrypt']);}
      else key=await derive(password,data);
      password='';
      const cleartext=await crypto.subtle.decrypt({name:'AES-GCM',iv:from64(data.iv),additionalData:encoder.encode(FORMAT),tagLength:128},key,from64(data.ciphertext));
      const app=JSON.parse(new TextDecoder().decode(cleartext));
      if(!cached){clearAccess();if(remember.checked){const raw=await crypto.subtle.exportKey('raw',key);try{sessionStorage.setItem(storageKey,JSON.stringify({salt:data.salt,key:to64(raw)}));}catch{}}}
      openApplication(app);
    }catch(error){
      if(cached)clearAccess();
      setMessage(error.message==='crypto'?'crypto':error.message==='download'||error instanceof TypeError?'download':error.message==='expired'?'expired':error.name==='OperationError'?'incorrect':'failed');
      setBusy(false);input.focus();input.select();
    }
  }
  languageSelect.addEventListener('change',()=>{language=Object.hasOwn(translations,languageSelect.value)?languageSelect.value:'pl';const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(history.state,'',url);translate();});
  window.addEventListener('popstate',()=>{language=queryLanguage();translate();});
  input.addEventListener('input',()=>input.setCustomValidity(input.value?'':copy().required));
  input.addEventListener('invalid',()=>input.setCustomValidity(input.value?'':copy().required));
  form.addEventListener('submit',event=>{event.preventDefault();if(form.reportValidity())unlock(input.value);});
  reveal.addEventListener('click',event=>{const show=input.type==='password';input.type=show?'text':'password';event.currentTarget.setAttribute('aria-pressed',String(show));event.currentTarget.setAttribute('aria-label',copy()[show?'hidePassword':'showPassword']);input.focus();});
  translate();
  try{const cached=JSON.parse(sessionStorage.getItem(storageKey)||'null');if(cached?.key&&cached?.salt)unlock('',cached);}catch{clearAccess();}
})();
