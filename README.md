# MentisPrep Coding Assignment – Posts App

A lightweight **React 18 + Vite** web application that

1. **Lists posts** fetched from [`/posts`](https://jsonplaceholder.typicode.com/posts)  
2. **Creates a new post** via a form (mocked `POST /posts`)

> Built in response to MentisPrep’s take‑home assignment.  
> Submitted by **[Your Name]** on **YYYY‑MM‑DD**.

---

## Features

| Feature | Details |
|---------|---------|
| **Fetch posts** | `GET https://jsonplaceholder.typicode.com/posts` on load |
| **Create post** | `POST …/posts` with optimistic UI update |
| **Form handling** | [`react‑hook‑form`](https://react-hook-form.com/) for validation |
| **HTTP client** | [`axios`](https://axios-http.com/) |
| **Styling** | Pure CSS (no frameworks) with CSS variables and dark‑mode friendliness |
| **Modern toolchain** | Vite 5, React 18, ES modules, instant HMR |

---

## Quick start

```bash
git clone https://github.com/<your‑username>/mentisprep-posts.git
cd mentisprep-posts
npm install              # install dependencies
npm run dev              # start Vite dev server
