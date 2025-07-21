/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK data/projects/deno-logger.tsx

import type { Project } from "$types";

const project: Project = {
  id: "deno-logger",
  name: {
    en: "Deno Logger",
    fr: "Deno Logger",
  },
  description: {
    en: "Small TypeScript module for colored and structured logs in DENO projects. Available on JSR.IO.",
    fr: "Petit module TypeScript pour des logs colorés et structurés dans des projets Deno. Disponible sur jsr.io.",
  },
  image: {
    src: "/images/deno-logger.png",
    alt: {
      "en": "Deno Logger by MNLaugh",
      "fr": "Deno Logger de MNLaugh"
    }
  },
  main_color: "blue",
  intro_section: [
    {
      id: "presentation",
      title: {
        "en": "🧭 Presentation",
        "fr": "🧭 Présentation",
      },
      content: {
        "en": (
          <p class="leading-relaxed">
            This project enables real-time monitoring of your friends’ Twitch streams. When a stream starts or ends, an AI-generated custom message is sent to a Discord channel via a configured webhook.
            <br /><br />
            OAuth authentication lets the admin log in with their Twitch account to manage the list of followed streamers. A simple admin panel provides full control over settings and connected webhooks.
          </p>
        ),
        "fr": (
          <p class="leading-relaxed">
            Ce projet permet de surveiller automatiquement les streams Twitch de tes amis en temps réel. Lorsqu’un stream démarre ou se termine, un message personnalisé est généré par une IA et envoyé dans un salon Discord via un webhook configuré.
            <br /><br />
            L’authentification OAuth permet à l’administrateur de se connecter avec son compte Twitch pour gérer la liste des streamers à suivre, tandis qu’un panneau d’administration simple offre un contrôle total sur les paramètres et les webhooks utilisés.          </p>
        ),
      },
    },
  ],
  sections: [
    {
      id: "architecture",
      title: {
        "en": "🧱 Architecture",
        "fr": "🧱 Architecture",
      },
      content: {
        "en": (
          <ul class="space-y-2 list-disc list-inside">
            <li><strong>- Twitch API</strong>: Subscribes to stream online/offline events via Webhooks or EventSub.</li>
            <li><strong>- OAuth 2.0</strong>: Admin user authentication to retrieve the required tokens.</li>
            <li><strong>- AI generator</strong>: Automatically creates personalized messages depending on the stream context.</li>
            <li><strong>- Discord Webhook</strong>: Sends the messages to configured Discord channels.</li>
            <li><strong>- Admin panel</strong>: Web interface to manage streamers, webhooks, and preferences.</li>
            <li><strong>- Lightweight server</strong>: Self-hosted app built with Deno + Fresh for simple deployment.</li>
            <li><strong>- Docker</strong> : All this in a docker container</li>
          </ul>
        ),
        "fr": (
          <ul class="space-y-2 list-disc list-inside">
            <li><strong>- API Twitch</strong> : Souscription aux événements (online/offline) via Webhooks ou EventSub.</li>
            <li><strong>- OAuth 2.0</strong> : Authentification de l’utilisateur admin pour récupérer les tokens nécessaires.</li>
            <li><strong>- Générateur IA</strong> : Création automatique de messages personnalisés selon le contexte du stream.</li>
            <li><strong>- Webhook Discord</strong> : Envoi des messages dans les salons Discord configurés.</li>
            <li><strong>- Panneau d'administration</strong> : Interface web pour gérer les streamers, les webhooks et les préférences.</li>
            <li><strong>- Serveur léger</strong> : Application auto-hébergée construite avec Deno + Fresh pour un déploiement simple.</li>
            <li><strong>- Docker</strong> : Tout ça dans un conteneur Docker</li>
          </ul>
        ),
      },
    },
  ],
};

export default project;