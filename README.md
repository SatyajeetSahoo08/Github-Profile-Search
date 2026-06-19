# Developer Archive

<p align="center">
  <strong>An archive-inspired GitHub profile explorer built with React.</strong>
</p>

<p align="center">
  Search any GitHub developer and explore their profile through a curated editorial experience powered by the GitHub API.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?logo=tailwindcss)
![GitHub API](https://img.shields.io/badge/GitHub-REST_API-black?logo=github)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# [01] Overview

Developer Archive transforms GitHub profiles into curated archive entries.

Instead of presenting raw profile information through a conventional dashboard, the application reimagines developer profiles using an editorial archive-inspired interface featuring dynamic artwork, clean typography, responsive layouts, and thoughtfully organized metadata.

Users can search for any GitHub username and instantly view live profile information retrieved directly from the GitHub REST API.

---

# [02] Why I Built This

Most GitHub profile viewers follow a similar pattern:

```text
Search → Card → Profile Data
```

While functional, they often lack personality and visual identity.

Developer Archive was built as an exploration of:

* API-driven user interfaces
* React state management
* Component architecture
* Responsive design systems
* Editorial-inspired UI design
* Creating memorable user experiences

The goal was not simply to consume an API but to present data in a way that feels intentional, curated, and engaging.

---

# [03] Features

### Real-Time GitHub Search

Search any public GitHub user and retrieve live profile data.

### Dynamic Archive Artwork

Each successful search generates a new archive entry with randomly selected artwork.

### Live Profile Information

Displays:

* Username
* Avatar
* Bio
* Followers
* Following
* Public Repositories
* GitHub Profile
* Website
* Account Creation Date

### Responsive Experience

Optimized for:

* Desktop
* Tablet
* Mobile

### Fast Performance

Powered by:

* React
* Vite
* GitHub REST API

### Archive-Inspired Design

Features:

* Editorial layouts
* Archive aesthetics
* Dynamic artwork
* Minimal typography
* Carefully curated visual hierarchy

---

# [04] Architecture

## Application Flow

```text
User Search
      ↓
React State
      ↓
Search Handler
      ↓
GitHub API Request
      ↓
User Data State
      ↓
Props Distribution
      ↓
Profile Components
      ↓
UI Rendering
```

---

# [05] Tech Stack

| Category   | Technology      |
| ---------- | --------------- |
| Frontend   | React           |
| Language   | JavaScript      |
| Build Tool | Vite            |
| Styling    | Tailwind CSS    |
| API        | GitHub REST API |
| Deployment | Vercel          |

---

# [06] Project Structure

```bash
src/
│
├── Components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── ProfileCard.jsx
│   └── InfoCard.jsx
│
├── assets/
│   ├── artwork1.jpg
│   ├── artwork2.jpg
│   ├── artwork3.jpg
│   ├── artwork4.jpg
│   └── stamp.jpeg
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# [07] API Integration

Developer Archive uses the GitHub REST API.

### Endpoint

```http
GET https://api.github.com/users/{username}
```

### Example

```http
GET https://api.github.com/users/torvalds
```

### Retrieved Data

```json
{
  "login": "torvalds",
  "avatar_url": "...",
  "followers": 250000,
  "following": 0,
  "public_repos": 8,
  "bio": "...",
  "created_at": "..."
}
```

---

# [08] Responsive Design

Developer Archive was designed with responsiveness as a first-class concern.

| Device        | Status |
| ------------- | ------ |
| Mobile        | ✓      |
| Tablet        | ✓      |
| Desktop       | ✓      |
| Large Screens | ✓      |

Key improvements include:

* Flexible layouts
* Responsive typography
* Adaptive spacing
* Mobile-first search interactions
* Responsive artwork rendering

---

# [9] Challenges & Lessons Learned

## GitHub API Integration

Working with asynchronous API requests introduced concepts such as:

* Async/Await
* API error handling
* Rate limiting
* Response parsing

## State Management

Managing application state reinforced:

* React Hooks
* useState
* Component communication
* Data flow patterns

## Component Architecture

The project evolved from a single-file implementation into a reusable component-based architecture.

## Responsive Design

Creating a consistent experience across desktop, tablet, and mobile required multiple design iterations and layout refinements.

---

# [10] Learning Outcomes

Through this project I gained practical experience with:

* React fundamentals
* Component composition
* State management
* API integration
* Async JavaScript
* Responsive UI development
* Tailwind CSS
* Frontend deployment
* Project organization

---

# [11] Future Enhancements

Planned improvements include:

* Loading states
* Error handling
* Repository insights
* Language statistics
* Contribution visualizations
* Developer archetypes
* Repository spotlight section
* Expanded artwork collection

---

# [14] Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/Github-Profile-Search.git
```

## Navigate Into Project

```bash
cd Github-Profile-Search
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

---

# [13] Deployment

The application is deployed using Vercel.

## Production Build

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

---

# [14] Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# [15] License

This project is licensed under the MIT License.

See the LICENSE file for additional information.

---

# [16] Author

**Satyajeet Sahoo**

GitHub: https://github.com/SatyajeetSahoo08

LinkedIn: https://linkedin.com/in/satyajeetsahoo411

---

<p align="center">
Developer Archive • A curated exploration of developer identities through design and data.
</p>
