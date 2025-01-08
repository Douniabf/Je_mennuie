# React App: **Je m'ennuie**

Welcome to the **Je m'ennuie** app! This React application allows users to:  
1. **Laugh and have fun**: Discover random memes from the Humor API.  
2. **Get inspired**: Read inspirational poetry from the Poetry DB API.  
3. **Learn something new**: Get interesting fact using the Wikipedia API.

---

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)

---

## Features
- **Section 1: Je veux m'amuser**
  - Fetch random memes using the [Humor API](https://humorapi.com/docs/#Random-Meme).
- **Section 2: Je veux m'inspirer**
  - Fetch inspirational poetry using the [Poetry DB API](https://poetrydb.org/).
- **Section 3: Je veux apprendre**
  - Fetch interesting random fact using the Wikipedia API.

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm 
- An API key for the [Humor API](https://humorapi.com/docs/#Random-Meme)

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/](https://github.com/Douniabf/Je_mennuie.git)
   ```

2. Navigate into the project directory:
   ```bash
   cd Je_mennuie
   cd my-react-app
   ```
  
3. Install dependencies:

  ```bash
  npm install
  ```
4. Configure your API keys :

  Rename .env.sample to .env.
  Add your Humor API key to the .env file:
    ```
  REACT_APP_HUMOR_API_KEY=your_api_key_here
  REACT_APP_API_BASE_URL=https://api.humorapi.com
    ```

### Run the application
  ```bash
    npm run dev
```

The app will run on http://localhost:5173

### Technologies Used
* React: Front-end library for building user interfaces.
* Axios: For making HTTP requests to APIs.
* Dotenv: To manage environment variables securely.
