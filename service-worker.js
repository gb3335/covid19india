if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"a204ed176961962a758865bfbe45cbdb","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"fd9bd071345c83d3b928b6f42725c886","url":"helpline.html"},{"revision":"a204ed176961962a758865bfbe45cbdb","url":"index.html"},{"revision":"7a1de0bc8c22b4e7b81682df12901ae8","url":"precache-manifest.7a1de0bc8c22b4e7b81682df12901ae8.js"},{"revision":"546db5b682af321ded42a8b73a9aee9b","url":"static/css/30.93b3b32d.chunk.css"},{"revision":"e01885b024c5306f7497966617feb438","url":"static/css/App.375dd5d2.chunk.css"},{"revision":"2bbf92c5560eac789cc1e9434f2b3f2a","url":"static/js/0.00d16812.chunk.js"},{"revision":"7a57e778d6f4078ca97eb9b00c042e49","url":"static/js/1.3906feba.chunk.js"},{"revision":"472c7716f9bf65446d4f9ef2603a980e","url":"static/js/2.ab073edd.chunk.js"},{"revision":"eb70eb4f78ffaa36283390c593ad1f24","url":"static/js/28.49cdb671.chunk.js"},{"revision":"c488eccd8768549f72dafcf7d9bdc0e5","url":"static/js/29.f193d891.chunk.js"},{"revision":"2b3b20f02854b0d0f33b0aeea6faf684","url":"static/js/3.23eed3de.chunk.js"},{"revision":"3803734629143f8c4d20473bd8df0ba0","url":"static/js/30.9beac7c6.chunk.js"},{"revision":"996d84ff2a15b4ec578ff193db15e268","url":"static/js/31.5a598085.chunk.js"},{"revision":"d16a0ec9218c2a45cd6a63050cf220b4","url":"static/js/32.ef53b239.chunk.js"},{"revision":"bf552c897af3964e2fc5dc7048b74a8c","url":"static/js/33.7f1e16a1.chunk.js"},{"revision":"5d029c17dcb4dc5cdd13d301e4a23f96","url":"static/js/34.b4696406.chunk.js"},{"revision":"6054e16361b92bf91d23ec66f9713468","url":"static/js/35.3fad25f7.chunk.js"},{"revision":"ffa55f3d25dc741fdf0ffc1c2cce436c","url":"static/js/36.1203c90f.chunk.js"},{"revision":"d11e5eca84f9d385e70f71351c969f36","url":"static/js/37.b3f61928.chunk.js"},{"revision":"229d821afa8c0d1427178f20860228d8","url":"static/js/38.f5400b79.chunk.js"},{"revision":"b9c5c7eed40bb14240ef13218fbd1792","url":"static/js/39.11cbfe0c.chunk.js"},{"revision":"d743ba957a86f0f17de8a76f29fe0c1e","url":"static/js/4.7e78f9a1.chunk.js"},{"revision":"b219e08f3f284d64ba6a4954585bf524","url":"static/js/About.0ff47579.chunk.js"},{"revision":"bffc2cbd93082cd38ba3157cd2e92cb5","url":"static/js/Actions.f804ddb9.chunk.js"},{"revision":"660d2c2fafe8cd2b38c1aedb1b02bdfa","url":"static/js/App.032784e3.chunk.js"},{"revision":"e3d3fc0c040488e06545241bea475eb2","url":"static/js/Demographics.3646995e.chunk.js"},{"revision":"bec5e3b7103c101dfdb46aac5e5f72eb","url":"static/js/Essentials.243a242d.chunk.js"},{"revision":"c4ac72e22a8c68a025f55a4d8a57fb1b","url":"static/js/Footer.1b25b4a5.chunk.js"},{"revision":"92c74f8b279c24631c7dbe6c17f19f69","url":"static/js/Home.8daa518b.chunk.js"},{"revision":"675bc149e8f425537b3b2e9d11617548","url":"static/js/LanguageSwitcher.ed4dcb7f.chunk.js"},{"revision":"ba37b7455d12c11aed3c67e9667ce8cc","url":"static/js/Level.09d6be5d.chunk.js"},{"revision":"e3837d8ca13e8808ba1cff942d131f96","url":"static/js/main.77fd62e2.chunk.js"},{"revision":"4df5bef21a880d6d51e292bacc1a338c","url":"static/js/MapExplorer.fe14ad4c.chunk.js"},{"revision":"9051b61b7f83cc659ae07b649f6069ee","url":"static/js/MapVisualizer.48b08a19.chunk.js"},{"revision":"cd30b997c773438533f95b2038c95e97","url":"static/js/Minigraph.43b5cf7c.chunk.js"},{"revision":"6ac51afd4131a292d7c455de90c44b46","url":"static/js/Row.98dd315e.chunk.js"},{"revision":"9f64adec605f6c36ccdda527f8b5cffb","url":"static/js/runtime-main.acff9e74.js"},{"revision":"59cd0ac05dfce91d7a2fe954cb9bc0ab","url":"static/js/Search.d7c5a806.chunk.js"},{"revision":"3ed56d71adec01539973c0db5f5a6513","url":"static/js/Services.b3692e86.chunk.js"},{"revision":"0613e07c78fbb0c06e84714cff83fd87","url":"static/js/State.08178a65.chunk.js"},{"revision":"722030af5936a12385131669bfaddeda","url":"static/js/Table.ddfb9469.chunk.js"},{"revision":"8474cefce59b40968b7b2a82e1fc521c","url":"static/js/Timeline.5ed34d45.chunk.js"},{"revision":"24abcda3ea3628bd8cb1189cf1f0df5d","url":"static/js/TimeSeries.3ea08710.chunk.js"},{"revision":"3ad085a98134543df82b8b38717ad450","url":"static/js/TimeSeriesExplorer.5dbdfef1.chunk.js"},{"revision":"b48d462f6337349c4754f6eb84d58334","url":"static/js/Updates.8b72346a.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
