/* Learning library views for AI Creator Labs. Plain browser JavaScript. */
(() => {
  const resources = [
    { title: 'Video Tentang AI Agent', category: 'Video', desc: 'Tonton pembahasan dasar AI Agent, contoh penggunaannya, dan cara mengaturnya dalam workflow.', href: 'https://www.youtube.com/watch?v=AU4svOtansw', label: 'Tonton video', mark: '00' },
    { title: 'Panduan Prompting', category: 'Panduan', desc: 'Mulai dari struktur prompt, konteks, hingga iterasi yang lebih terarah.', href: 'https://www.aihero.dev/skills', label: 'Buka panduan', mark: '01' },
    { title: 'AI Hero Skills', category: 'Kurikulum', desc: 'Kumpulan skill AI yang disusun per topik dengan ringkasan yang mudah dipindai.', href: 'https://www.aihero.dev/skills', label: 'Lihat referensi', mark: '02' },
    { title: 'AI Hero Videos', category: 'Video', desc: 'Jelajahi pustaka video berdasarkan topik, urutan terbaru, dan durasi.', href: 'https://www.aihero.dev/videos', label: 'Lihat referensi', mark: '03' },
    { title: 'Creator Science Tags', category: 'Kreator', desc: 'Telusuri topik dan kumpulan artikel seputar proses kreator.', href: 'https://creatorscience.com/tags/', label: 'Jelajahi topik', mark: '04' },
    { title: 'Kanal AI Creator Labs', category: 'Video', desc: 'Video dan eksperimen AI dari kanal AI Creator Labs Indonesia.', href: 'https://www.youtube.com/@aicreatorlabsid', label: 'Kunjungi kanal', mark: '05' },
    { title: 'Instagram AI Creator Labs', category: 'Komunitas', desc: 'Ikuti pembaruan dan konten singkat AI Creator Labs.', href: 'https://www.instagram.com/aicreatorlabs.id/', label: 'Kunjungi Instagram', mark: '06' },
  ];

  const skills = [
    { slug:'react-best-practices', title:'React Best Practices', icon:'⚛', author:'Vercel Labs', repo:'vercel-labs/agent-skills', detail:'Panduan performa untuk proyek React dan Next.js: data fetching, ukuran bundle, dan rendering.', use:'Pakai saat membangun atau meninjau aplikasi React dan Next.js agar keputusan performa lebih terarah.', command:'npx skills add vercel-labs/agent-skills --skill react-best-practices' },
    { slug:'web-design-guidelines', title:'Web Design Guidelines', icon:'◈', author:'Vercel Labs', repo:'vercel-labs/agent-skills', detail:'Checklist untuk meninjau aksesibilitas, formulir, animasi, tipografi, dan pengalaman antarmuka.', use:'Pakai saat memeriksa kualitas UI dan menemukan perbaikan yang bisa langsung dikerjakan.', command:'npx skills add vercel-labs/agent-skills --skill web-design-guidelines' },
    { slug:'composition-patterns', title:'Composition Patterns', icon:'▣', author:'Vercel Labs', repo:'vercel-labs/agent-skills', detail:'Pola menyusun komponen React yang fleksibel ketika proyek mulai berkembang.', use:'Pakai ketika komponen penuh prop bersyarat dan struktur UI sulit dipakai ulang.', command:'npx skills add vercel-labs/agent-skills --skill composition-patterns' },
    { slug:'writing-guidelines', title:'Writing Guidelines', icon:'✎', author:'Vercel Labs', repo:'vercel-labs/agent-skills', detail:'Periksa struktur, gaya bahasa, dan contoh kode dalam dokumentasi.', use:'Pakai untuk meninjau dokumentasi proyek agar instruksinya lebih jelas dan konsisten.', command:'npx skills add vercel-labs/agent-skills --skill writing-guidelines' },
    { slug:'react-native-guidelines', title:'React Native Guidelines', icon:'◉', author:'Vercel Labs', repo:'vercel-labs/agent-skills', detail:'Panduan performa dan pola UI untuk aplikasi React Native.', use:'Pakai saat membuat atau meninjau aplikasi React Native dan Expo.', command:'npx skills add vercel-labs/agent-skills --skill react-native-guidelines' },
    { slug:'react-view-transitions', title:'React View Transitions', icon:'✦', author:'Vercel Labs', repo:'vercel-labs/agent-skills', detail:'Buat transisi halaman dan elemen React yang lebih mulus.', use:'Pakai ketika proyek React membutuhkan transisi navigasi yang jelas dan responsif.', command:'npx skills add vercel-labs/agent-skills --skill react-view-transitions' },
    { slug:'vercel-optimize', title:'Vercel Optimize', icon:'◇', author:'Vercel Labs', repo:'vercel-labs/agent-skills', detail:'Audit biaya, performa, caching, dan keandalan proyek Vercel.', use:'Pakai untuk menemukan prioritas optimasi pada proyek yang sudah berjalan di Vercel.', command:'npx skills add vercel-labs/agent-skills --skill vercel-optimize' },
    { slug:'code-review', title:'Code Review', icon:'⌘', author:'Matt Pocock', repo:'mattpocock/skills', detail:'Tinjau perubahan kode terhadap standar proyek dan tujuan tugas.', use:'Pakai setelah perubahan besar untuk menemukan masalah implementasi dan kesesuaian spesifikasi.', command:'npx skills add mattpocock/skills --skill code-review' }
  ];
  const skillCard = skill => `<a class="github-skill" href="/skills/${skill.slug}"><span class="github-skill-icon" aria-hidden="true">${skill.icon}</span><span><strong>${skill.title}</strong><small>${skill.detail}</small></span></a>`;
  function skillsView(slug='') {
    const selected=skills.find(x=>x.slug===slug)||skills[0];
    return `<section class="skills-page"><aside class="skills-sidebar"><p class="library-eyebrow">Jelajahi Skill</p>${skills.map(x=>`<a class="${x.slug===selected.slug?'is-active':''}" href="/skills/${x.slug}" ${x.slug===selected.slug?'aria-current="page"':''}>${x.title}</a>`).join('')}</aside><div class="skills-main"><p class="library-eyebrow">Skill Dari GitHub</p><h1>${selected.title}</h1><p class="skills-lead">${selected.detail}</p><div class="skill-facts"><span>Dibuat oleh <strong>${selected.author}</strong></span><a href="https://github.com/${selected.repo}" target="_blank" rel="noopener noreferrer">Lihat GitHub</a><span data-github-stars="${selected.repo}">GitHub stars: memuat…</span></div><h2>Skill Ini Berguna Untuk Apa?</h2><p>${selected.use}</p><h2>Cara Install</h2><p>Jalankan perintah ini di folder proyek. Pilih agent yang kamu gunakan saat installer meminta pilihan.</p><div class="skill-command"><code>${selected.command}</code><button type="button" data-copy-command="${selected.command}" aria-label="Salin perintah instalasi">Salin</button></div><p class="skill-compatible">Kompatibel dengan agent yang didukung installer Skills, termasuk Codex, Claude Code, dan Cursor. Periksa pilihan agent saat instalasi.</p><h2>Skill Lainnya</h2><div class="github-skill-list">${skills.filter(x=>x!==selected).map(skillCard).join('')}</div></div></section>`;
  }
  function wireSkills(container){container.querySelector('[data-copy-command]')?.addEventListener('click',async e=>{try{await navigator.clipboard.writeText(e.currentTarget.dataset.copyCommand);e.currentTarget.textContent='Tersalin';setTimeout(()=>e.currentTarget.textContent='Salin',1800)}catch{e.currentTarget.textContent='Gagal menyalin'}});const star=container.querySelector('[data-github-stars]');if(star)fetch('https://api.github.com/repos/'+star.dataset.githubStars).then(r=>{if(!r.ok)throw Error();return r.json()}).then(d=>star.textContent=new Intl.NumberFormat('id-ID').format(d.stargazers_count)+' GitHub stars').catch(()=>star.textContent='Lihat jumlah stars di GitHub');}
  window.portalSkillCards=()=>skills.map(skillCard).join('');
  const videos = [
    { title: 'Membuat Super AI Agent Untuk Mengatur AI Agent Lainnya', duration: '1 jam 43 menit', topic: 'AI Agent', id: '3vBe5s8jt-s', href: 'https://www.youtube.com/watch?v=3vBe5s8jt-s' },
    { title: 'Kenapa Kredit AI Cepat Habis? Jawabannya Di Sini (Penjelasan Lengkap Token & Context Window AI)', duration: '25 menit', topic: 'Dasar AI', id: 'j32ylCzCMZw', href: 'https://www.youtube.com/watch?v=j32ylCzCMZw' },
    { title: 'Perbedaan AI Agent Vs AI Tools Biasa (GPT, Claude, Gemini) | Apa Itu AI Agent?', duration: '24 menit', topic: 'AI Agent', id: 'AU4svOtansw', href: 'https://www.youtube.com/watch?v=AU4svOtansw' },
    { title: 'Sisi Gelap Dan Bahaya Teknologi AI', duration: '17 menit', topic: 'Dampak AI', id: 'lwUwXkbTuAc', href: 'https://www.youtube.com/watch?v=lwUwXkbTuAc' },
  ];
  const articles = [
    { title: 'Memulai Dengan AI', topic: 'Dasar AI', read: 'Pengantar', desc: 'Kenali cara memilih titik awal belajar dan membangun kebiasaan bereksperimen.', body: 'Mulai dari satu kebutuhan yang nyata. Coba satu alat, catat hasilnya, lalu ubah instruksi sedikit demi sedikit. Proses kecil yang berulang membantu Anda memahami kapan AI berguna dan kapan hasilnya perlu diperiksa.' },
    { title: 'Prompt Yang Lebih Terarah', topic: 'Prompting', read: 'Panduan', desc: 'Susun konteks, tujuan, dan format agar jawaban lebih mudah digunakan.', body: 'Jelaskan konteks yang dibutuhkan, hasil yang diinginkan, dan batasan penting. Jika format jawaban menentukan kegunaannya, sebutkan juga. Tinjau hasil pertama lalu tambahkan arahan yang spesifik.' },
    { title: 'Merangkai Workflow Dengan AI', topic: 'Workflow', read: 'Catatan', desc: 'Pecah pekerjaan berulang menjadi langkah yang bisa dibantu AI.', body: 'Pilih bagian kerja yang berulang, tentukan masukan dan keluaran yang jelas, lalu uji satu langkah terlebih dahulu. Simpan keputusan penting dan pemeriksaan akhir di tangan Anda.' },
    { title: 'Mengenal AI Agent', topic: 'AI Agent', read: 'Pengantar', desc: 'Pahami bagaimana agent menerima tujuan, menggunakan alat, dan memeriksa hasil.', body: 'AI agent menjalankan serangkaian langkah untuk mencapai tujuan. Berikan tugas yang terbatas, jelaskan alat yang boleh digunakan, dan minta hasil yang bisa diperiksa sebelum memperluas cakupannya.' },
  ];
  window.portalContentCounts = { videos: videos.length, skills: skills.length, articles: articles.length };
  videos.forEach((v,i)=>v.level=i===0?'Expert':'Beginner');
  articles.forEach((a,i)=>a.level=i===2?'Intermediate':'Beginner');
  const levelLabel = level => `<span class="level-label">${level}</span>`;
  const levelFilter = () => `<label class="level-filter">Level <select data-level-filter aria-label="Filter tingkat kesulitan"><option value="">Semua Level</option><option>Beginner</option><option>Intermediate</option><option>Expert</option></select></label>`;
  const topics = ['Semua topik', ...articles.map(a => a.topic)];
  const topicMeta = {
    'AI Income': ['income', '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'],
    'Dasar AI': ['basic', '<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8m0-12.8L5.6 18.4"/>'],
    'AI Agent': ['agent', '<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M9 12h.01M15 12h.01M9 16h6M12 3v4M2 12h2m16 0h2"/>'],
    'Workflow': ['workflow', '<path d="M6 4v5a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v5M18 4v3M6 17v3"/>'],
    'Prompting': ['prompting', '<path d="M8 9h8M8 13h5M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8l-5 3v-3H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>'],
    'Dampak AI': ['impact', '<path d="M3 12h4l3-8 4 16 3-8h4"/>']
  };
  const topicBadge = topic => { const [tone, icon] = topicMeta[topic] || ['neutral', '<circle cx="12" cy="12" r="8"/><path d="M12 8v8m-4-4h8"/>']; return `<span class="topic-badge tone-${tone}"><span class="topic-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icon}</svg></span><span>${esc(topic)}</span></span>`; };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const external = href => `href="${esc(href)}" target="_blank" rel="noopener noreferrer"`;
  const navigate = page => window.dispatchEvent(new CustomEvent('portal:navigate', { detail: { page } }));
  const pageHead = (eyebrow, title, copy) => `<header class="library-head"><p class="library-eyebrow">${eyebrow}</p><h1 id="library-title">${title === 'Knowledges' ? 'Knowledges' : title}</h1><p class="library-intro">${copy}</p></header>`;

  function resourceView() {
    return `<section class="library-page" aria-labelledby="library-title">${pageHead('RUANG BELAJAR', 'Resources', 'Pilihan panduan, video, dan referensi untuk membantu langkah belajarmu berikutnya.')}
      <div class="library-toolbar"><label class="library-search"><span class="sr-only">Cari resource</span><span aria-hidden="true">⌕</span><input type="search" data-resource-search placeholder="Cari resource…" autocomplete="off"></label><div class="library-filters" role="group" aria-label="Filter kategori">${['Semua','Panduan','Kurikulum','Video','Kreator','Komunitas'].map((x,i)=>`<button class="library-filter${i===0?' is-active':''}" type="button" data-resource-filter="${esc(x)}" aria-pressed="${i===0}">${x}</button>`).join('')}</div></div>
      <div class="resource-grid" data-resource-list>${resources.map((r,i)=>`<article class="resource-card" data-category="${esc(r.category)}" data-search="${esc((r.title+' '+r.category+' '+r.desc).toLowerCase())}"><span class="resource-index">${r.mark}</span><p class="resource-category">${r.category}</p><h2>${r.title}</h2><p class="resource-desc">${r.desc}</p><a ${external(r.href)}>${r.label}</a></article>`).join('')}</div><p class="library-empty" data-resource-empty hidden>Tidak ada resource yang cocok. Coba kata kunci atau kategori lain.</p></section>`;
  }

  function knowledgeView() {
    return `<section class="library-page" aria-labelledby="library-title">${pageHead('VIDEO LIBRARY', 'Knowledges', 'Belajar lewat video pilihan. Cari topik atau gunakan filter untuk menemukan yang relevan.')}
      <div class="library-toolbar"><label class="library-search"><span class="sr-only">Cari video</span><span aria-hidden="true">⌕</span><input type="search" data-video-search placeholder="Cari video atau topik…" autocomplete="off"></label><div class="library-filters" role="group" aria-label="Filter topik">${['Semua','AI Agent','Dasar AI','Workflow','Prompting','Dampak AI'].map((x,i)=>`<button class="library-filter${i===0?' is-active':''}" type="button" data-video-filter="${esc(x)}" aria-pressed="${i===0}">${x}</button>`).join('')}</div></div>
      ${levelFilter()}<div class="video-list" data-video-list>${videos.map(v=>`<article class="video-row" data-level="${v.level}" data-topic="${esc(v.topic)}" data-search="${esc((v.title+' '+v.topic).toLowerCase())}"><a class="video-play" style="--video-thumb:url('https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg')" ${external(v.href)} aria-label="Tonton ${esc(v.title)} di YouTube"><span aria-hidden="true">▶</span></a><div class="video-copy"><div class="content-labels">${topicBadge(v.topic)}${levelLabel(v.level)}</div><h2><a ${external(v.href)}>${esc(v.title)}</a></h2></div><span class="video-duration">${esc(v.duration)}</span></article>`).join('')}</div><p class="library-empty" data-video-empty hidden>Tidak ada video yang cocok. Coba kata kunci atau topik lain.</p><p class="library-note">Judul, durasi, dan tautan mengarah ke video di kanal AI Creator Labs.</p></section>`;
  }

  function articleList(active='Semua topik') {
    const filtered = active === 'Semua topik' ? articles : articles.filter(a=>a.topic===active);
    return `<div class="article-layout"><aside class="topic-nav" aria-label="Topik artikel"><p class="resource-category">JELAJAHI TOPIK</p>${topics.map(t=>`<button type="button" class="topic-button${t===active?' is-active':''}" data-topic-select="${esc(t)}" aria-pressed="${t===active}">${esc(t)}<span>${t==='Semua topik'?articles.length:articles.filter(a=>a.topic===t).length}</span></button>`).join('')}</aside><div class="article-list" aria-live="polite">${filtered.map(a=>`<article class="article-card" data-level="${a.level}"><div class="article-meta">${topicBadge(a.topic)}${levelLabel(a.level)}<span class="article-reading">${esc(a.read)}</span></div><h2><button type="button" data-article-open="${esc(a.title)}">${esc(a.title)}</button></h2><p>${esc(a.desc)}</p><button class="text-link" type="button" data-article-open="${esc(a.title)}">Baca catatan</button></article>`).join('')}</div></div>`;
  }
  function articlesView() {
    const requested=new URLSearchParams(location.search).get('topic');
    const active=topics.includes(requested)?requested:'Semua topik';
    return `<section class="library-page" aria-labelledby="library-title">${pageHead('CATATAN & IDE', 'Articles', 'Gagasan ringkas untuk memahami AI dan menerapkannya dalam kegiatan sehari-hari.')}${levelFilter()}${articleList(active)}<p data-article-empty class="library-empty" hidden>Tidak ada artikel untuk level ini.</p><div class="article-detail" data-article-detail hidden role="region" aria-live="polite"></div></section>`;
  }
  function showArticle(container, title) {
    const item=articles.find(a=>a.title===title); if(!item) return;
    const detail=container.querySelector('[data-article-detail]');
    detail.innerHTML=`<button type="button" class="detail-back" data-article-back>Kembali ke Articles</button><div class="article-meta">${topicBadge(item.topic)}${levelLabel(item.level)}<span class="article-reading">${esc(item.read)}</span></div><h2>${esc(item.title)}</h2><p>${esc(item.body)}</p><button type="button" class="text-link" data-topic-select="${esc(item.topic)}">Lihat topik ${esc(item.topic)}</button>`;
    container.querySelector('[data-article-empty]').hidden=true; detail.hidden=false; container.querySelector('.article-layout').hidden=true; detail.setAttribute('tabindex','-1'); detail.focus();
  }

  function wireResources(container) {
    const input=container.querySelector('[data-resource-search]');
    const params=new URLSearchParams(location.search); input.value=params.get('q')||'';
    let category=params.get('type')==='video'?'Video':(params.get('category')||'Semua');
    if(category==='Video')container.querySelectorAll('[data-resource-filter]').forEach(b=>{const on=b.dataset.resourceFilter===category;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));});
    const update=()=>{let n=0;container.querySelectorAll('.resource-card').forEach(card=>{const ok=(category==='Semua'||card.dataset.category===category)&&card.dataset.search.includes(input.value.trim().toLowerCase());card.hidden=!ok;if(ok)n++;});container.querySelector('[data-resource-empty]').hidden=n!==0;};
    input.addEventListener('input',update);
    container.querySelectorAll('[data-resource-filter]').forEach(btn=>btn.addEventListener('click',()=>{category=btn.dataset.resourceFilter;container.querySelectorAll('[data-resource-filter]').forEach(b=>{const on=b===btn;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));});update();}));
    update();
  }
  function wireVideos(container) {
    const params=new URLSearchParams(location.search); let topic=params.get('topic')||'Semua'; const input=container.querySelector('[data-video-search]');
    container.querySelectorAll('[data-video-filter]').forEach(b=>{const on=b.dataset.videoFilter===topic;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));});
    const update=()=>{let n=0;container.querySelectorAll('.video-row').forEach(row=>{const level=container.querySelector('[data-level-filter]').value;const ok=(!level||row.dataset.level===level)&&(topic==='Semua'||row.dataset.topic===topic)&&row.dataset.search.includes(input.value.trim().toLowerCase());row.hidden=!ok;if(ok)n++;});container.querySelector('[data-video-empty]').hidden=n!==0;};
    container.querySelector('[data-level-filter]').addEventListener('change',update);
    input.addEventListener('input',update);
    container.querySelectorAll('[data-video-filter]').forEach(btn=>btn.addEventListener('click',()=>{topic=btn.dataset.videoFilter;container.querySelectorAll('[data-video-filter]').forEach(b=>{const on=b===btn;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));});update();}));
    update();
  }
  function wireArticles(container) {
    const filter=container.querySelector('[data-level-filter]');
    const updateLevel=()=>{let count=0;container.querySelectorAll('.article-card').forEach(card=>{card.hidden=!!filter.value&&card.dataset.level!==filter.value;if(!card.hidden)count++;});container.querySelector('[data-article-empty]').hidden=count!==0||!container.querySelector('[data-article-detail]').hidden;};
    filter.addEventListener('change',updateLevel);

    container.addEventListener('click',e=>{
      const open=e.target.closest('[data-article-open]'); if(open){showArticle(container,open.dataset.articleOpen);return;}
      if(e.target.closest('[data-article-back]')){container.querySelector('[data-article-detail]').hidden=true;container.querySelector('.article-layout').hidden=false;container.querySelector('.article-card h2 button')?.focus();return;}
      const topicBtn=e.target.closest('[data-topic-select]'); if(topicBtn){const name=topicBtn.dataset.topicSelect; if(name==='Semua topik'||topics.includes(name)){container.querySelector('[data-article-detail]').hidden=true;const layout=container.querySelector('.article-layout');layout.hidden=false;layout.outerHTML=articleList(name);updateLevel();} }
    });
  }
  window.renderLibraryPage = page => page==='resources'?resourceView():page==='knowledges'?knowledgeView():page==='articles'?articlesView():page==='skills'?skillsView(location.pathname.split('/')[2]):'';
  window.initLibraryPage = container => {
    if(container.querySelector('[data-resource-list]')) wireResources(container);
    if(container.querySelector('[data-video-list]')) wireVideos(container);
    if(container.querySelector('.article-layout')) wireArticles(container);
    if(container.querySelector('.skills-page')) wireSkills(container);
  };
})();
