/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK utils/animations.ts

export default {
  animation: {
    "fade-in": "fade-in 0.3s ease-out",
    "slide-up": "slide-up 0.6s ease-out both",
    "slide-down": "slide-down 0.4s ease-out both",
    "slide-left": "slide-left 0.4s ease-out both",
    "slide-right": "slide-right 0.4s ease-out both",
    "fade-in-out": "fade-in-out 2s ease-in-out",
    "fade-in-slide": "fade-in-slide 0.4s ease-out forwards",
    'zoom-in': 'zoom-in 0.2s ease-out',
    'scroll-log': "scrollLog 100s linear infinite",
    'blink': "blink 1s step-start infinite",
  },
  keyframes: {
    "fade-in": {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    "slide-up": {
      "0%": { opacity: "0", transform: "translateY(20px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    "slide-down": {
      "0%": { opacity: "0", transform: "translateY(-20px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    "slide-left": {
      "0%": {
        opacity: "0",
        transform: "translateX(-1.5rem)", // -24px
      },
      "100%": {
        opacity: "1",
        transform: "translateX(0)",
      },
    },
    "slide-right": {
      "0%": {
        opacity: "0",
        transform: "translateX(1.5rem)", // +24px
      },
      "100%": {
        opacity: "1",
        transform: "translateX(0)",
      },
    },
    "fade-in-out": {
      "0%": { opacity: "0", transform: "translateY(10px)" },
      "10%": { opacity: "1", transform: "translateY(0px)" },
      "90%": { opacity: "1", transform: "translateY(0px)" },
      "100%": { opacity: "0", transform: "translateY(10px)" },
    },
    "fade-in-slide": {
      "0%": { opacity: "0", transform: "translateX(-10px) scale(1)" },
      "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
    },
    "zoom-in": {
      '0%': { transform: 'scale(0.95)', opacity: '0' },
      '100%': { transform: 'scale(1)', opacity: '1' },
    },
    scrollLog: {
      "0%": { transform: "translateY(0%)" },
      "100%": { transform: "translateY(-100%)" },
    },
    blink: {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0" },
    },
  },
  animationDelay: {
    0: "0ms",
    100: "100ms",
    200: "200ms",
    300: "300ms",
    400: "400ms",
    500: "500ms",
    1000: "1000ms",
  },
};
