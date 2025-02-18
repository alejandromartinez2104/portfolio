@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");

:root {
  --primary-color: #ffffff;
  --secondary-color: #333333;
  --accent-color: #4a90e2;
  --gradient: linear-gradient(135deg, #4a90e2, #8e44ad);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  color: var(--secondary-color);
  background-color: var(--primary-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

header {
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 2rem;
}

nav ul li a {
  text-decoration: none;
  color: var(--secondary-color);
  transition: color 0.3s ease;
}

nav ul li a:hover,
nav ul li a.active {
  color: var(--accent-color);
}

.contact-btn,
.cta-btn {
  background: var(--gradient);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-btn:hover,
.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.cta-btn.secondary {
  background: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
}

.full-height {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

section {
  padding: 4rem 0;
}

h1,
h2 {
  margin-bottom: 1rem;
}

#home {
  background: var(--gradient);
  color: white;
  text-align: center;
}

#home h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cta-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.profile-image {
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

@media (min-width: 768px) {
  .gallery-item img {
    filter: grayscale(100%);
  }

  .gallery-item:hover img {
    filter: grayscale(0%);
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-item {
  text-align: center;
}

.service-item img {
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.contact-form {
  display: grid;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

footer {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  text-align: center;
  padding: 1rem;
}

.social-links {
  margin-top: 1rem;
}

.social-links a {
  color: var(--primary-color);
  margin: 0 0.5rem;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  nav ul {
    display: none;
  }

  .about-content {
    flex-direction: column;
    text-align: center;
  }
}

/* Loading Screen */
#loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-image-container {
  position: relative;
  width: 300px;
  height: 400px;
  overflow: hidden;
}

.loading-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
}

.color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: linear-gradient(to right, transparent, transparent), linear-gradient(to right, transparent, transparent);
  mix-blend-mode: overlay;
  transition: width 2s ease-in-out;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-hidden {
  opacity: 0;
  transform: translateY(20px);
}

.fade-in {
  animation: fadeIn 0.5s ease forwards;
}

