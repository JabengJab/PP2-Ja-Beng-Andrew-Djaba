# Ja Beng

Your Rock, Paper, Scissors, Lizard, Spock game.

![Screenshot of Game Page](assets/images/responsive.PNG)

- 🔗 Live Demo: [GitHub Pages Link](https://jabengjab.github.io/PP2-Ja-Beng-Andrew-Djaba/)

Ja Beng (Rock-Paper-Scissors-Lizard-Spock) is a web-based game where players can compete against the computer. This project demonstrates basic HTML, CSS, and JavaScript integration to create an interactive and visually appealing game.

## 📌 Table of Contents

- [Features](#features)
- [How to play](#how-to-play)
- [Game Rules](#game-rules)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Code Structure](#code-structure)
- [Customization](#customization)
- [Testing](#testing)
- [Deployment](#deployment)
- [Future Implementations](#future-implementations)
- [Credits](#credits)

## ✨ Features

- **5 Unique Choices:** Rock, Paper, Scissors, Lizard, Spock
- **Interactive UI:** Emoji buttons with hover effects
- **Score Tracking:** Player vs. Computer
- **Round-Based Gameplay:** 5 rounds per game
- **Game History:** Logs all moves
- **Rules Popup:** Easy access to game rules
- **Responsive Design:** Works on mobile, tablet & desktop
- **Animations:** Bounce effect on winning rounds
- **Reset Function:** Start a new game anytime

## 🎮 How to Play

- **Choose** your move (click any emoji button).

- **Computer** randomly selects its move.

- **Winner** is determined based on the rules.

- **Scores** update after each round.

- **After 5 rounds**, the game ends with a winner.

- **Click "Reset Game"** to play again.

## 📜 Game Rules

The game expands traditional Rock Paper Scissors with two new choices:

| Move         | Beats            | Loses to         |
| ------------ | ---------------- | ---------------- |
| **Rock**     | Scissors, Lizard | Paper, Spock     |
| **Paper**    | Rock, Spock      | Scissors, Lizard |
| **Scissors** | Paper, Lizard    | Rock, Spock      |
| **Lizard**   | Spock, Paper     | Rock, Scissors   |
| **Spock**    | Rock, Scissors   | Paper, Lizard    |

#### Example:

- 🖖 Spock smashes ✂️ Scissors → Spock wins!

- 🦎 Lizard poisons 🖖 Spock → Lizard wins!

## 💻 Technologies Used

- **HTML5** → Game structure

- **CSS3** → Styling & animations

- **JavaScript** → Game logic

- **Google Fonts** → Typography (Lato, Roboto Condensed)

- **Font Awesome** → Icons (if needed)

## ⚙️ Installation

1. Clone the repository:

git clone https://github.com/JabengJab/PP2-Ja-Beng-Andrew-Djaba.git

2. **Open index.html** in a web browser.

## 🧩 Code Structure

```text
├── assets/
│   ├── css/
│   │   └── styles.css         # All styling
│   ├── js/
│   │   └── scripts.js         # Game logic
│   └── images/                # Screenshots
├── index.html                 # Main HTML file
└── README.md                  # This file
```

#### 📜 index.html

- Contains buttons, score displays, and rules modal.

- Links **CSS** and **JavaScript** files.

#### 🎨 styles.css

- **Variables** (**--primary**, **--secondary**) for easy theming.

- **Flexbox** for responsive layouts.

- **Media Queries** for mobile/desktop support.

- **Animations** (e.g., bounce effect on wins).

#### 🛠️ scripts.js

- **playGame()** → Handles player vs. computer logic.

- **determineWinner()** → Checks who wins using winConditions.

- **updateScores()** → Tracks points.

- **updateHistory()** → Logs past moves.

- **resetGame()** → Restarts the game.

## 🎨 Customization

#### Change Colors

Edit CSS variables in `:root` :

```
:root {
    --primary: #2c3e50;       /* Dark blue */
    --secondary: #3498db;     /* Bright blue */
    --accent: #e74c3c;        /* Red */
}
```

#### Add New Moves

1. Update choices array in scripts.js:

```
const choices = ["rock", "paper", "scissors", "lizard", "spock", "new-move"];
```

2. Add new win conditions:

```
const winConditions = {
    // ...existing rules...
    "new-move": ["rock", "paper"]  // Example: beats rock & paper
};
```

## 🧪 Testing

#### Manual Testing

1. **Game Logic**

   - Test all win/lose/tie combinations (e.g., Rock vs. Scissors → Player wins).

   - Verify score updates correctly.

   - Check if game ends after 5 rounds.

2. **UI/UX**

   - Test responsiveness on mobile, tablet, and desktop.

   - Verify hover/click animations.

   - Check if the rules popup opens/closes properly.

3. **Edge Cases**

   - Test reset functionality mid-game.

   - Verify history log updates correctly.

   ### Validator Testing

#### Url

No errors were returned when passing through the official [W3c validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjabengjab.github.io%2FPP2-Ja-Beng-Andrew-Djaba%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![W3C no errors](assets/images/css_validation.PNG)

[Html validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjabengjab.github.io%2FPP2-Ja-Beng-Andrew-Djaba%2F)

![W3C no errors](assets/images/wc3_html.PNG)

[JSHint](https://jshint.com/)
![jsHint](assets/images/jshint.PNG)

#### Lighthouse

##### Performance

##### Mobile devices

![performance](assets/images/performance_mobile.PNG)

##### Desktops

![performancedesktop](assets/images/Lighthouse_all.PNG)

##### Accessibility

##### Mobile devices

![accessibility](assets/images/accessibility_mobile.PNG)

##### Desktops

![accessibilitydesktop](assets/images/accessibility.PNG)

##### Best practices

##### Mobile devices

![bestpracmobile](assets/images/practices_mobile.PNG)

##### Desktops

![bestpracdesktop](assets/images/practices.PNG)

##### SEO

##### Mobile devices

![SEO](assets/images/seo_mobile.PNG)

##### Desktops

![SEO](assets/images/seo.PNG)

## 🚀 Deployment

#### GitHub Pages (Free Hosting)

1. Go to your GitHub repository.

2. Click **Settings → Pages**.

3. Select **main branch** and **/root folder**.

4. Save – your site will deploy to:

```
https://jabengjab.github.io/PP2-Ja-Beng-Andrew-Djaba/
```

## Future Implementations 🚀

Here are some exciting features and improvements that could be added to the Rock Paper Scissors Lizard Spock game in future versions:

### 🎮 Gameplay Enhancements

1. Multiplayer Mode (Online)

   - Add WebSocket/PeerJS integration for real-time PvP battles

   - Room-based matchmaking system

   - Global leaderboards

2. Single-Player Challenges

   - AI difficulty levels (Easy, Medium, Hard)

   - Tournament mode (best of 5/10 matches)

   - Time-attack mode (score as many wins in 60 seconds)

3. New Game Variations

   - Add "Best 2 out of 3" option

   - Sudden death mode (first to 3 wins)

   - Customizable round limits (5/10/unlimited)

### ✨ Visual & UI Improvements

1. Animated Effects

   - Explosion effects when choices collide

   - Trail animations for button hovers

   - Victory/defeat screen animations

2. Themes & Customization

   - Dark/light mode toggle

   - Custom color schemes

   - Player avatars/profile pictures

3. Enhanced Mobile Experience

   - Swipe gestures for choices

   - Haptic feedback on mobile devices

   - Offline PWA (Progressive Web App) support

### 📊 Data & Analytics

1. Player Statistics

   - Win/loss ratios per move

   - Most frequent choices

   - Performance over time graphs

2. Achievements System

   - "Win 10 games with Spock"

   - "Achieve 5 consecutive wins"

   - "First tournament victory"

3. Local Storage

   - Save game progress between sessions

   - Remember player preferences

   - Track all-time high scores

### 🤖 Technical Improvements

1. Testing Suite

   - Add Jest/Testing Library for unit tests

   - Implement Cypress for E2E testing

   - GitHub Actions CI/CD pipeline

2. Performance Optimizations

   - Lazy load non-critical assets

   - Implement Web Workers for AI calculations

   - Add loading states

3. Accessibility

   - Full keyboard navigation support

   - Screen reader improvements

   - Color contrast checker

### 🌐 Social & Community

1. Sharing Features

   - "Share your score" buttons

   - Custom victory memes

   - Challenge links to friends

2. Twitch Integration

   - Streamer mode (hide sensitive UI)

   - Live audience voting

   - Channel point redemptions

3. Modding Support

   - Custom move creator

   - Rule template editor

   - Skin/theme marketplace

   These future implementations would transform the game from a simple browser toy into a fully-featured gaming experience with replay value and community engagement potential! Which feature would you like to see implemented first? 😊

## 👏 Credits

- **Game Concept**: Based on The Big Bang Theory's version of Rock Paper Scissors.

- **Emoji Icons**: Native browser emojis.

- **Fonts**: Google Fonts (Lato, Roboto Condensed).

- **Inspiration**: Classic Rock Paper Scissors with a geeky twist!

### Acknowlegdements

- Thanks to the Code Institutes Love Maths walkthrough project, I got the idea to of how to structure my functions in the script.js for example.

- Tutor support was also a great help to me. I was never stuck again after I communicated my problem with them.

## 🎉 Enjoy the Game!

Play now by opening **index.html** in your browser!

🔗 Live Demo: [GitHub Pages Link](https://jabengjab.github.io/PP2-Ja-Beng-Andrew-Djaba/)

Made with ❤️ by **Andrew Djaba**
