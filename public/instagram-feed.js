(() => {
  const profiles = Object.freeze({
    school: { username: 'miskolczikinga_makeup_school', label: 'Sminkiskola' },
    pmu: { username: 'sminktetovalas_miskolczikinga', label: 'Sminktetoválás' },
  });
  const labels = Object.freeze({ IMAGE: 'Fotó', VIDEO: 'Videó / Reels', CAROUSEL_ALBUM: 'Lapozható' });
  const dateFormat = new Intl.DateTimeFormat('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' });

  function permittedUrl(value, image = false) {
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' || url.username || url.password || url.port) return null;
      if (image) {
        if (!['cdninstagram.com', 'fbcdn.net'].some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`))) return null;
      } else if (!['instagram.com', 'www.instagram.com'].includes(url.hostname) || !/^\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?$/.test(url.pathname)) {
        return null;
      }
      return url.href;
    } catch { return null; }
  }

  function validPosts(posts) {
    if (!Array.isArray(posts)) return [];
    const seen = new Set();
    return posts.filter((post) => {
      if (!post || typeof post.id !== 'string' || seen.has(post.id) || !Object.hasOwn(labels, post.type)) return false;
      if (!permittedUrl(post.imageUrl, true) || !permittedUrl(post.permalink) || typeof post.timestamp !== 'string') return false;
      if (!Number.isFinite(Date.parse(post.timestamp.replace(/([+-]\d{2})(\d{2})$/, '$1:$2')))) return false;
      seen.add(post.id);
      return true;
    }).sort((a, b) => Date.parse(b.timestamp.replace(/([+-]\d{2})(\d{2})$/, '$1:$2')) - Date.parse(a.timestamp.replace(/([+-]\d{2})(\d{2})$/, '$1:$2'))).slice(0, 12);
  }

  function postElement(post, index) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.className = 'instagram-post';
    link.href = permittedUrl(post.permalink);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const caption = typeof post.caption === 'string' ? post.caption.trim().slice(0, 220) : '';
    link.setAttribute('aria-label', `${index + 1}. ${labels[post.type]}: ${caption || 'Kinga Instagram-tartalma'}. Megnyitás az Instagramon, új lapon.`);
    const media = document.createElement('div');
    media.className = 'instagram-image';
    const img = document.createElement('img');
    img.src = permittedUrl(post.imageUrl, true);
    img.alt = caption ? caption.slice(0, 150) : `Kinga Instagram-tartalma – ${labels[post.type].toLowerCase()}`;
    img.width = 640;
    img.height = 800;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    img.addEventListener('error', () => {
      const fallback = document.createElement('span');
      fallback.className = 'instagram-image-error';
      fallback.textContent = 'Tartalom megtekintése az Instagramon ↗';
      img.replaceWith(fallback);
    }, { once: true });
    const badge = document.createElement('span');
    badge.className = 'instagram-badge';
    badge.textContent = labels[post.type];
    media.append(img, badge);
    const text = document.createElement('p');
    text.className = 'instagram-caption';
    text.textContent = caption || 'Egy újabb részlet Kinga világából.';
    const date = new Date(post.timestamp.replace(/([+-]\d{2})(\d{2})$/, '$1:$2'));
    const time = document.createElement('time');
    time.dateTime = date.toISOString();
    time.textContent = dateFormat.format(date);
    link.append(media, text, time);
    item.append(link);
    return item;
  }

  document.querySelectorAll('[data-instagram-feed]').forEach((section) => {
    const grid = section.querySelector('[data-instagram-grid]');
    const status = section.querySelector('[data-instagram-status]');
    const profileLink = section.querySelector('[data-instagram-profile]');
    const controls = section.querySelector('[data-instagram-controls]');
    const switches = [...section.querySelectorAll('[data-instagram-switch]')];
    if (!grid || !status || !profileLink) return;
    let controller;
    let selected;

    async function load(key) {
      if (!Object.hasOwn(profiles, key)) return;
      controller?.abort();
      controller = new AbortController();
      const requestController = controller;
      selected = key;
      const profile = profiles[key];
      profileLink.href = `https://www.instagram.com/${profile.username}/`;
      profileLink.textContent = `@${profile.username} ↗`;
      switches.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.instagramSwitch === key)));
      grid.hidden = true;
      grid.replaceChildren();
      grid.setAttribute('aria-label', `${profile.label}: legutóbbi Instagram-tartalmak`);
      status.hidden = false;
      status.textContent = 'Instagram-tartalmak betöltése…';
      grid.setAttribute('aria-busy', 'true');
      const timeout = setTimeout(() => requestController.abort(), 12000);
      try {
        const response = await fetch(`/api/instagram/${key}`, { signal: requestController.signal, credentials: 'omit' });
        if (!response.ok) throw new Error('Feed unavailable');
        const data = await response.json();
        if (controller !== requestController || selected !== key) return;
        const posts = data.status === 'ok' && data.username === profile.username ? validPosts(data.posts) : [];
        if (!posts.length) throw new Error('No connected feed');
        grid.replaceChildren(...posts.map(postElement));
        grid.hidden = false;
        status.textContent = `${posts.length} legutóbbi tartalom · a bejegyzések az Instagramon nyílnak meg.`;
      } catch {
        if (controller !== requestController || selected !== key) return;
        // No stock photos or old work-gallery images are passed off as current Instagram posts.
        status.textContent = 'Friss munkákért és a legújabb bejegyzésekért látogass el az Instagram-profilomra.';
      } finally {
        clearTimeout(timeout);
        if (controller === requestController) grid.setAttribute('aria-busy', 'false');
      }
    }

    if (controls) controls.hidden = false;
    switches.forEach((button) => button.addEventListener('click', () => {
      if (button.dataset.instagramSwitch !== selected) void load(button.dataset.instagramSwitch);
    }));
    void load(section.dataset.instagramFeed);
  });
})();
