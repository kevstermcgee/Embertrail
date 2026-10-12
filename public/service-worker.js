/* A complete, hash-checked version activates atomically. Saves are never stored in asset caches. */
const PREFIX='be2:'+self.registration.scope+':';
const ID='15e48df5eb17ff5adb6ff12d3f84e5775ea1ab60c176785989331addbd9be5d2',CACHE=PREFIX+ID;
const HASHES={"app.webmanifest": "a4d4175a48cbf14ef2fc439d526da6be363618ae59ad3e1429ad521774dc0d9b", "assets/audio/trail/bank.json": "c1d172a6384d6fbfb0b9bf491cc5bd81dae52513a6327be4076aecda8317b178", "assets/audio/trail/music-bass.wav": "4fed85735e16e6fba712e813c04d8d1d8a9b2f0b5946dc4a3fa44eb587ac40aa", "assets/audio/trail/music-glimmer.wav": "79b76cb5c8b00d280f918329526be3938746a361633bdd62089d439dcd58927d", "assets/audio/trail/music-melody.wav": "62c5d2fc110a1cc567b796c917f0015eea17c6daa4a788694cf5745714efe535", "build.json": "0d27a2952ed81ad4c2aafa2acebef0dae4817d9a6318c88818d8333e98fbfdcb", "game.wasm": "8ead6a445ff0c671869ed15127b85dc40a119cad8acb9657680c887a36de9c76", "index.html": "8e5848737a200dac8384a2155fe58ba6ec324bebbfbd0202044aa21a6be7e894", "loader.js": "99a6b756e7eb2851e47bdf8d0cbc16a85c0acc14d9ecf9f740f5e1b2a9614261", "mobile.js": "6085597c317f1aea7ece3ca2947b1e03f4be4a8d2ade652b1929bd8b6d1248ae", "platform.js": "a98569b537a863ed1f5d6b12a3b1b3580a4ab11654c91add17462b63f7539ed4", "thumbnail.png": "d30e5e1de8e5dd153374f148e3958911960291462f83672ddc1f50eaa2802a07"};
const FILES=[...Object.keys(HASHES),'service-worker.js','manifest.json'];
const sha=async bytes=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),b=>b.toString(16).padStart(2,'0')).join('');
self.addEventListener('install',event=>event.waitUntil((async()=>{
  try {
    const response=await fetch(new URL('manifest.json',self.registration.scope),{cache:'no-store'});
    if(!response.ok)throw new Error('Update manifest unavailable');
    const manifest=await response.clone().json();
    if(manifest.package_id!==ID)throw new Error('Incomplete deployment: manifest/worker version mismatch');
    for(const [name,digest] of Object.entries(HASHES))if(manifest.file_sha256[name]!==digest)throw new Error('Update manifest hash mismatch: '+name);
    const cache=await caches.open(CACHE);
    // No activate/claim/cache replacement until every file has passed its declared hash.
    for(const name of FILES){
      const asset=name==='manifest.json'?response:await fetch(new URL(name,self.registration.scope),{cache:'no-store'});
      if(!asset.ok)throw new Error('Incomplete update: '+name);
      if(name!=='manifest.json'&&await sha(await asset.clone().arrayBuffer())!==manifest.file_sha256[name])throw new Error('Corrupt update: '+name);
      await cache.put(name,asset);
    }
    await self.skipWaiting();
  } catch(error) {
    await caches.delete(CACHE); // failed candidate; the active version survives
    throw error;
  }
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  for(const name of FILES)if(!await cache.match(name))throw new Error('Candidate cache is incomplete');
  await Promise.all((await caches.keys()).filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);if(url.origin!==location.origin||!url.href.startsWith(self.registration.scope))return;
  const relative=decodeURIComponent(url.pathname.slice(new URL(self.registration.scope).pathname.length));
  if(relative&&!FILES.includes(relative))return;
  const name=relative||'index.html';
  event.respondWith(caches.open(CACHE).then(async cache=>{
    const cached=await cache.match(name);if(cached)return cached;
    return fetch(event.request); // recover online if the browser evicts cached assets
  }));
});
