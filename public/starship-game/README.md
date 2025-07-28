# Starship Shooter

A polished, mobile and desktop-friendly arcade shooter built with p5.js. Blast asteroids and enemy ships, collect upgrades, and defeat bosses in a visually rich, audio-enhanced space adventure.

---

## 🚀 Features
- **Responsive Controls:**
  - Desktop: WASD/Arrow keys to move, Space/Enter to shoot, R to restart.
  - Mobile: On-screen joystick and shoot button.
- **Audio:**
  - Custom MP3 background music (loads on first user interaction).
  - Synthesized engine, weapon, and explosion sounds.
- **Upgrades & Pickups:**
  - Weapon upgrades (stacking, visualized, reset on hit).
  - Shield system with forcefield visual and pickups.
  - Health pickups.
- **Enemies & Bosses:**
  - Smarter enemy AI with side-to-side movement and shooting.
  - Multi-phase boss battles.
- **Visual Polish:**
  - Animated backgrounds, forcefields, fireworks, and particles.
  - Achievements and animated stats on victory.
- **Portfolio-Ready:**
  - Clean, well-commented code.
  - Professional UI and game feel.

---

## 📱 Controls

### Desktop
- **Move:** WASD or Arrow keys
- **Shoot:** Space or Enter
- **Restart:** R (from any state)

### Mobile
- **Move:** On-screen joystick
- **Shoot:** On-screen button
- **Restart:** Tap the on-screen button (no R key)

---

## 🎵 Audio
- **Music:** `music/inception-inspired-dark-melodic-techno-mix-night-trains-155050.mp3` (royalty-free, replaceable)
- **Engine, weapon, and explosion sounds** are synthesized for a sci-fi feel.

---

## 🏆 Achievements
- **Ace Pilot:** Defeat 10 enemies in under 30 seconds
- **Sharp Shooter:** Destroy 5 asteroids without missing
- **High Score:** Reach 200 points

---

## 🛠️ Setup & Running
1. Clone or download this repo **including the `music/` folder and its MP3 file**.
2. **Run a local web server in your project folder:**
   - **Python 3 (Windows, Mac, Linux):**
     - Most modern systems (Windows 10+, Mac, Linux) come with Python 3 pre-installed, which includes a simple web server.
     - Open a terminal or command prompt in your project folder and run:
       ```
       python -m http.server 8000
       ```
     - Then open [http://localhost:8000](http://localhost:8000) in your browser.
   - **Node.js (if installed):**
     - If you have Node.js, you can use the `serve` package (no setup required):
       ```
       npx serve
       ```
     - Open the link shown in the terminal (usually [http://localhost:3000](http://localhost:3000)).

> **Platform notes:**
> - **Windows 10/11:** Python 3 is usually pre-installed. If not, download it from [python.org](https://www.python.org/downloads/).
> - **Mac:** Python 3 is pre-installed on most recent versions. Use Terminal.
> - **Linux:** Python 3 is almost always available by default.
> - **Node.js:** Available on all platforms if you install it from [nodejs.org](https://nodejs.org/).

3. For best results, use a modern browser (Chrome, Edge, Firefox, Safari).

> **Note:** Opening `index.html` directly (double-clicking) may cause audio or music to fail due to browser security restrictions. Always use a local server for full functionality.

---

## 📸 Screenshots
<!-- Add screenshots here -->

---

## 🌐 Live Demo
<!-- Add your live demo link here, e.g. GitHub Pages or Netlify -->

---

## 👤 Credits & License
- **Game code:** [Your Name]
- **Music:** [Night Trains by Alex-Productions (CC BY 3.0)](https://www.youtube.com/watch?v=155050)
- **Built with:** [p5.js](https://p5js.org/)

MIT License. Free for personal and portfolio use.
