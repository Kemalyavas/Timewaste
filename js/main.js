class TimeWaster {
  constructor() {
    this.seconds = 0;
    this.counterElement = document.getElementById('seconds');
    this.messageElement = document.getElementById('message');
    this.audioContext = null;
    this.messages = [

      this.currentOverlay = null, // Yeni özellik ekledik

      "bug report: npc stuck in infinite loop",
      "Bu zamanı daha iyi değerlendirebilirdin mal",
      "Biraz daha beklersen seni bi ödül bekliyor 😝",
      "Jeff Bezos bu sürede 47.283$ kazandı",
      "Bu sürede bir junior developer chatgpt'ye mini bi proje yaptırdı",
      "bro deadass waiting for something to happen fr",
      "bro really said: let me waste my time fr",
      "Şu an instagramda reels kaydırıyor olabilirdin",
      "least parasız turkish genci simulation",
      "average turkish grindset: boş site izle",
      "komplo teorisi: bu siteyi akp gençlik kolları yaptı",
      "bazı kelimeler sihirli olabilir, kim bilir 🤷",
      "Naber?",
      "Sıkıldın mı? Aklını kullan!",
      "Bu siteyi yaptığım günün sonrası 3 vizem vardı",
      "Say my name",
      "Siteyi yapan kişinin lolde en sevdiği şampiyon gragas 🤡",
    ];

    // Gizli kodlar
    this.secretCodes = {
      'NABER': this.playSecret,
      'PARA': this.makeItRain,
      'MATRIX': this.activateMatrix,
      'HEISENBERG': () => this.showVideo('heisenberg'),
      'ALIEN': () => this.showVideo('alien'),
      'GRAGAS': () => this.showVideo('gragas'),
      'GYM': () => this.showVideo('gym'),
      'FART': () => this.showVideo('fart'),
      'TRUMP': () => this.showVideo('trump'),
      'CHINA': () => this.showVideo('china'),
      'OSAS': () => this.showVideo('osas'),
      'ALIKEMAL': () => this.showVideo('alikemal'),
      '3131': () => this.showVideo('3131'),
      'NUMAN': () => this.showVideo('numan'),
      'GANG': () => this.showVideo('gang'),
      'MAMAN': () => this.showVideo('maman'),
      'NIGGA': () => this.showVideo('nigga'),

    };

    // Konami Code setup
    this.konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'k', 'y'];
    this.konamiIndex = 0;

    // Event listeners
    document.addEventListener('keydown', this.handleKeydown.bind(this));
    document.addEventListener('keypress', this.handleKeypress.bind(this));

    this.init();
  }

  init() {
    this.startCounter();
    this.showRandomMessages();
  }

  handleKeydown(e) {
    if (e.key === this.konamiCode[this.konamiIndex]) {
      this.konamiIndex++;
      if (this.konamiIndex === this.konamiCode.length) {
        this.activateEasterEgg();
        this.konamiIndex = 0;
      }
    } else {
      this.konamiIndex = 0;
    }

    if (this.konamiIndex === 1) {
      document.querySelector('.hint-text').style.opacity = '0.05';
      setTimeout(() => {
        document.querySelector('.hint-text').style.opacity = '0.03';
      }, 1000);
    }
  }

  handleKeypress(e) {
    this.currentInput += e.key.toUpperCase();
    Object.keys(this.secretCodes).forEach(code => {
      if (this.currentInput.includes(code)) {
        this.secretCodes[code].call(this);
        this.currentInput = '';
      }
    });

    if (this.currentInput.length > 10) {
      this.currentInput = '';
    }
  }

  startCounter() {
    setInterval(() => {
      this.seconds++;
      this.counterElement.textContent = this.seconds;
      this.checkMilestones();
    }, 1000);
  }

  showRandomMessages() {
    setInterval(() => {
      const randomMessage = this.messages[Math.floor(Math.random() * this.messages.length)];
      this.showMessage(randomMessage);
    }, 10000);
  }

  showMessage(text) {
    this.messageElement.textContent = text;
    this.messageElement.classList.add('show');
    setTimeout(() => {
      this.messageElement.classList.remove('show');
    }, 3000);
  }

  checkMilestones() {
    const milestones = {
      30: "Lol ekle HiqProteinTozu#TRyar ",
      60: "1 dakika oldu bizden başını kazandınız! 🎉",
      300: "5 dakika beklediysen mk senin",
      600: "600 saniyede 600 kere istiğfar getirmiştin",
      1800: "HALF HOUR ACHIEVEMENT UNLOCKED: Ultimate Time Waster 🏆"
    };

    if (milestones[this.seconds]) {
      this.showMessage(milestones[this.seconds]);
    }
  }

  playSecret() {
    this.showMessage("Tebrikler! Hiçbir şey olmadı! 🎉");
  }

  makeItRain() {
    for (let i = 0; i < 20; i++) {
      const money = document.createElement('div');
      money.innerHTML = '💸';
      money.className = 'money';
      money.style.left = `${Math.random() * 100}vw`;
      document.body.appendChild(money);
      setTimeout(() => money.remove(), 3000);
    }
  }

  activateMatrix() {
    document.body.classList.add('matrix-mode');
    this.showMessage("Matrix mode activated! 👾");
    setTimeout(() => {
      document.body.classList.remove('matrix-mode');
    }, 5000);
  }
  showVideo(videoName) {
    // Eğer hali hazırda oynatılan bir video varsa onu kapat
    if (this.currentOverlay) {
      document.body.removeChild(this.currentOverlay);
    }

    const overlay = document.createElement('div');
    overlay.className = 'video-overlay';

    const video = document.createElement('video');
    video.src = `./videos/${videoName}.mp4`;
    video.autoplay = true;

    video.onended = () => {
      document.body.removeChild(overlay);
      this.currentOverlay = null; // Video bittiğinde referansı temizle
    };

    overlay.appendChild(video);
    document.body.appendChild(overlay);

    this.currentOverlay = overlay; // Yeni videoyu kaydet
  }
  // Adding a "Reels Scoreboard" that updates every 15 seconds
  init() {
    this.startCounter();
    this.showRandomMessages();
    this.startReelsScoreboard(); // New feature
  }

  // New method: shows how many short videos (e.g., reels) could've been watched
  startReelsScoreboard() {
    const scoreboard = document.createElement('div');
    scoreboard.style.cssText = `
    position: fixed; 
    top: 1rem; 
    left: 1rem; 
    background: rgba(255,255,255,0.1); 
    padding: 0.5rem 1rem; 
    border-radius: 5px; 
    font-size: 0.8em; 
    color: #fff;
  `;
    scoreboard.id = 'reels-scoreboard';
    scoreboard.textContent = 'Bu sürede 0 reels kaydırabilirdin';
    document.body.appendChild(scoreboard);

    setInterval(() => {
      // Assume each reel is ~10s
      const reelsCount = Math.floor(this.seconds / 10);
      scoreboard.textContent = `Bu sürede ${reelsCount} reels kaydırabilirdin`;
    }, 10000);
  }

  activateEasterEgg() {
    console.log('Easter egg activated! 🎮');
    document.body.style.background = '#000';
    this.seconds = -this.seconds;
    this.showMessage("🚨 PARADOX DETECTED: TIME FLOWING BACKWARDS 🚨");

    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const characters = "アカサタナハマヤャラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユュルグズブヅプエケセテネヘメレヱゲゼデベペオコソトノホモヨョロヲゴゾドボポヴッン0123456789";
    const columns = canvas.width / 20;
    const drops = Array(Math.floor(columns)).fill(0);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(draw, 33);

  }
  init() {
    this.startCounter();
    this.showRandomMessages();
    this.startReelsScoreboard(); // Previous feature

    // Step-by-step ephemeral triggers
    this.ephemeralTriggers = {
      30: 'gragas',  // Flickers at 30s
      60: 'alien',   // Flickers at 60s
      90: 'gym',     // Flickers at 90s
    };
  }

  // Overwrite or modify checkMilestones to include ephemeral triggers
  checkMilestones() {
    // Existing milestone messages
    const milestones = {
      30: "Lol ekle HiqProteinTozu#TRyar ",
      60: "1 dakika oldu bizden başını kazandınız! 🎉",
      300: "5 dakika beklediysen mk senin",
      600: "600 saniyede 600 kere istiğfar getirmiştin",
      1800: "HALF HOUR ACHIEVEMENT UNLOCKED: Ultimate Time Waster 🏆"
    };
    if (milestones[this.seconds]) {
      this.showMessage(milestones[this.seconds]);
    }
    // Every 30 seconds (but not at 0)
  if (this.seconds > 0 && this.seconds % 30 === 0) {
    this.ephemeralPhotoGlitch();
  }

  // Still keep ephemeral triggers for videos if needed
  if (this.ephemeralTriggers && this.ephemeralTriggers[this.seconds]) {
    this.ephemeralGlitch(this.ephemeralTriggers[this.seconds]);
  }
}

// Shows a random photo for 0.1s
ephemeralPhotoGlitch() {
  const photos = [
    'alien.jpg', 'china.jpg', 'gym.jpg', 'heisenberg.jpg',
    'nigga.jpg', 'numan.jpg', 'trump.jpg'
    // ...add any other filenames in ./photos
  ];
  const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

  const overlay = document.createElement('div');
  overlay.className = 'photo-overlay';
  overlay.style.pointerEvents = 'none';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'rgba(0,0,0,0.9)';
  overlay.style.zIndex = '99999';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  const img = document.createElement('img');
  img.src = `./photos/${randomPhoto}`;
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  overlay.appendChild(img);

  document.body.appendChild(overlay);

  // Remove overlay after 0.1 seconds
  setTimeout(() => {
    if (document.body.contains(overlay)) {
      document.body.removeChild(overlay);
    }
  }, 100);

    // Trigger ephemeral glitch if defined
    if (this.ephemeralTriggers[this.seconds]) {
      this.ephemeralGlitch(this.ephemeralTriggers[this.seconds]);
    }
  }

  // Briefly shows a video as a “glitch”
  ephemeralGlitch(videoName) {
    const overlay = document.createElement('div');
    overlay.className = 'video-overlay';
    overlay.style.pointerEvents = 'none';

    const video = document.createElement('video');
    video.src = `./videos/${videoName}.mp4`;
    video.autoplay = true;
    // Mute the flicker so it doesn't draw immediate attention
    video.muted = true;

    overlay.appendChild(video);
    document.body.appendChild(overlay);

    // Remove after 0.1s
    setTimeout(() => {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
    }, 100); // 0.1 second flicker
  }
  init() {
    this.startCounter();
    this.showRandomMessages();
    this.startReelsScoreboard();

    // Listen for input on mobile
    const mobileInput = document.getElementById('mobile-input');
    if (mobileInput) {
      mobileInput.addEventListener('input', (e) => {
        const typedValue = e.target.value.toUpperCase();
        Object.keys(this.secretCodes).forEach(code => {
          if (typedValue.includes(code)) {
            this.secretCodes[code].call(this);
            e.target.value = '';
          }
        });
      });
    }
  }

}


// Sayacı başlat
const timeWaster = new TimeWaster();
