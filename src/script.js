import sunLight from './images/sun-dark.png'
import sunDark from './images/sun.png'

import moonLight from './images/moon-dark.png'
import moonDark from './images/moon.png'

import githubLight from './images/github.png'
import githubDark from './images/github-purple.png'

import facebookLight from './images/facebook.png'
import facebookDark from './images/facebook-purple.png'

import twitterLight from './images/twitter.png'
import twitterDark from './images/twitter-purple.png'

import instagramLight from './images/instagram.png'
import instagramDark from './images/instagram-purple.png'

import linkedinLight from './images/linkedin.png'
import linkedinDark from './images/linkedin-purple.png'

import whatsappLight from './images/whatsapp.png'
import whatsappDark from './images/whatsapp-purple.png'

import emailLight from './images/email.png'
import emailDark from './images/email-purple.png'

import phoneLight from './images/phone.png'
import phoneDark from './images/phone-purple.png'

import mapLight from './images/map.png'
import mapDark from './images/map-purple.png'

const imagePaths = {
    github: {
        light: githubLight,
        dark: githubDark
    },

    facebook: {
        light: facebookLight,
        dark: facebookDark
    },

    twitter: {
        light: twitterLight,
        dark: twitterDark
    },

    instagram: {
        light: instagramLight,
        dark: instagramDark
    },

    linkedin: {
        light: linkedinLight,
        dark: linkedinDark
    },

    whatsapp: {
        light: whatsappLight,
        dark: whatsappDark
    },

    email: {
        light: emailLight,
        dark: emailDark
    },

    phone: {
        light: phoneLight,
        dark: phoneDark
    },

    map: {
        light: mapLight,
        dark: mapDark
    },

    sun: {
        light: sunLight,
        dark: sunDark
    },

    moon: {
        light: moonLight,
        dark: moonDark
    }
};

const toggleBtn = document.getElementById('theme-toggle');

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// toggle icons (sun + moon)
const toggleIcons = document.querySelectorAll("#theme-toggle img");

// SOCIAL + CONTACT ICONS
const standaloneIcons = document.querySelectorAll("img[data-light]:not(.nav-link img)");

// -----------------------------
// UPDATE NAV ICONS
// -----------------------------
function updateNavIcons() {
    const isDark = document.body.classList.contains("dark");

    navLinks.forEach(link => {
        const icon = link.querySelector("img");
        if (!icon) return;

        if (link.classList.contains("active")) {
            icon.src = icon.dataset.active; // active icon = white
        } else {
            icon.src = isDark ? icon.dataset.dark : icon.dataset.light;
        }
    });
}

// -----------------------------
// UPDATE SOCIAL + CONTACT ICONS
// -----------------------------
function updateStandaloneIcons() {
    const isDark = document.body.classList.contains("dark");

    standaloneIcons.forEach(icon => {
        const iconName = icon.dataset.icon;
        const paths = imagePaths[iconName];

        if (!paths) return;

        icon.src = isDark ? paths.dark : paths.light;
    });
}

// -----------------------------
// UPDATE TOGGLE ICONS (SUN + MOON)
// -----------------------------
function updateToggleIcons() {
    const isDark = document.body.classList.contains("dark");

    toggleIcons.forEach(icon => {
        const iconName = icon.dataset.icon;
        const paths = imagePaths[iconName];

        if (!paths) return;

        icon.src = isDark ? paths.dark : paths.light;
    });
}

// -----------------------------
// THEME TOGGLE
// -----------------------------
toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    updateNavIcons();
    updateStandaloneIcons();
    updateToggleIcons();

});

// -----------------------------
// NAV ACTIVE SECTION OBSERVER
// -----------------------------
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");

        navLinks.forEach(link => {

            if (link.getAttribute("href") === "#" + id) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }

        });

        updateNavIcons();

    });

}, { threshold: 0.6 });

// Observe sections
sections.forEach(section => {
    if (section.id) observer.observe(section);
});

// -----------------------------
// INITIAL PAGE LOAD
// -----------------------------
updateNavIcons();
updateStandaloneIcons();
updateToggleIcons();


// -----------------------------
// SCROLL REVEAL ANIMATION
// -----------------------------

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


const unavailableLinks = document.querySelectorAll(
    '.project-live, .project-code'
);

unavailableLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        alert('This project is currently not available.');
    });
});

const sendMessageButton = document.querySelector('#send-message');

sendMessageButton.addEventListener('click', () => {
    alert('The contact form is currently not available.');
});