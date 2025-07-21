/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK data/projects/monero-stack.tsx

import CopyBlock from "$islands/CopyBlock.tsx";
import type { Project } from "$types";

const docker_compose = `
version: '3.7'
  services:
    monerod:
      image: monero:latest
      ports:
        - "18081:18081"
        - "18083:18083"
      volumes:
        - ./data/monerod:/home/monero/.bitmonero
      command: --non-interactive --restricted-rpc --rpc-bind-ip=0.0.0.0
    p2pool:
      image: p2pool/p2pool:latest
      ports:
        - "3333:3333"
      volumes:
        - ./data/p2pool:/data
      depends_on:
        - monerod
    xmrig:
      image: xmrig/xmrig:latest
      command: ["--url", "p2pool:3333", "--user", "wallet_address"]
`;

const project: Project = {
  id: "monero-stack",
  name: {
    en: "Self-hosted Monero infrastructure",
    fr: "Infrastructure Monero auto-hébergée",
  },
  description: {
    en: "Docker stack to host a Monero node, P2Pool and XMRig miner.",
    fr: "Présentation d'une stack Docker pour héberger un nœud Monero, P2Pool et XMRig.",
  },
  image: {
    src: "/images/monero-stack-portrait.png",
    alt: {
      "en": "Illustration of the Stack Monero",
      "fr": "Illustration de la stack Monero"
    }
  },
  card_image: {
    src: "/images/monero-stack.png",
    alt: {
      "en": "Illustration of the Stack Monero",
      "fr": "Illustration de la stack Monero"
    }
  },
  main_color: "orange",
  intro_section: [
    {
      id: "presentation",
      title: {
        "en": "🧭 Presentation",
        "fr": "🧭 Présentation",
      },
      content: {
        "en": (
          <p>
            This stack lets you run a full Monero node, mine via P2Pool,
            and launch an XMRig miner optimized for your CPU. Fully containerized
            with Docker for isolation and ease of deployment.
          </p>
        ),
        "fr": (
          <p>
            Cette stack Monero permet d'héberger un noeud complet, de miner via P2Pool,
            et de faire tourner XMRig optimisé pour ton CPU. Elle est contenue dans Docker 
            pour être facile à maintenir, à déployer, et à isoler du reste du système.
          </p>
        ),
      },
    },
    {
      id: "architecture",
      title: {
        "en": "🧱 Architecture",
        "fr": "🧱 Architecture",
      },
      content: {
        "en": (
          <ul class = "Space-Y-2 List-lis-Inside">
            <li> <strong> monerod </strong>: Complete monero node </li>
            <li> <strong> p2pool </strong>: solo decentralized mining </li>
            <li> <strong> xmrig </strong>: Optimized CPU minor </li>
            <li> <strong> docker </strong>: containerization of each service </li>
          </ul>
        ),
        "fr": (
          <ul class="space-y-2 list-disc list-inside">
            <li><strong>monerod</strong> : Nœud Monero complet</li>
            <li><strong>p2pool</strong> : Minage décentralisé solo</li>
            <li><strong>xmrig</strong> : Mineur CPU optimisé</li>
            <li><strong>Docker</strong> : Conteneurisation de chaque service</li>
          </ul>
        ),
      },
    },
    {
      id: "why",
      title: {
        "en": "💡 Why do it?",
        "fr": "💡 Pourquoi faire ?",
      },
      content: {
        "en": (
          <p class="leading-relaxed">
            Monero is a privacy-focused cryptocurrency where all transactions are
            encrypted by default. By hosting your own stack, you maintain full control over
            synchronization, mining, and connections—without relying on third-party services.
            <br /><br />
            Thanks to its <strong>RandomX</strong> mining algorithm, Monero remains accessible
            for CPU mining, although performance can vary significantly depending on the architecture.
            This project is therefore suited for technically inclined users who want to contribute to the network,
            secure their transactions, or simply learn how to self-host a complete system.
          </p>
        ),
        "fr": (
          <p class="leading-relaxed">
            Monero est une cryptomonnaie axée sur la confidentialité, où toutes les transactions sont
            chiffrées par défaut. En hébergeant ta propre stack, tu gardes le contrôle total sur ta
            synchronisation, ton minage et tes connexions, sans dépendre de services tiers.
            <br /><br />
            Grâce à son algorithme de minage <strong>RandomX</strong>, Monero reste accessible au
            minage sur CPU, même si les performances peuvent varier fortement selon l’architecture.
            Ce projet est donc adapté à des profils techniques souhaitant contribuer au réseau,
            sécuriser leurs transactions, ou simplement apprendre à auto-héberger un système complet.
          </p>
        ),
      },
    },
  ],
  sections: [
    {
      id: "mise-en-place",
      title: {
        "en": "⚙️ Setup",
        "fr": "⚙️ Mise en place",
      },
      intro: {
        "en": <p>Here’s how to configure each component of the stack.</p>,
        "fr": <p>Voici comment configurer chaque élément de la stack.</p>,
      },
      children: [
        {
          id: "compose",
          title: {
            "en": "docker-compose.yml",
            "fr": "docker-compose.yml",
          },
          content: {
            "en": (
              <>
                <p class="leading-relaxed">
                  Use a <code>docker-compose.yml</code> file to manage the three services: 
                  <strong>monerod</strong>, <strong>p2pool</strong>, and <strong>xmrig</strong>.
                </p>
                <p class="mt-4 mb-1 text-sm dark:text-gray-400 text-gray-600 transition-colors duration-300">Here’s a minimal example:</p>
                <CopyBlock code={docker_compose} />
              </>
            ),
            "fr": (
              <>
                <p class="leading-relaxed">
                  Utilise un fichier <code>docker-compose.yml</code> pour gérer les trois services : 
                  <strong>monerod</strong>, <strong>p2pool</strong> et <strong>xmrig</strong>.
                </p>
                <p class="mt-4 text-sm dark:text-gray-400 text-gray-600 transition-colors duration-300">Voici un exemple minimaliste :</p>
                <CopyBlock code={docker_compose} copiedText="Copié dans le presse-papiers" />
              </>
            ),
          },
        },
        {
          id: "volumes",
          title: {
            "en": "Volumes & persistence",
            "fr": "Volumes & persistance"
          },
          content: {
            "en": (
              <p class="leading-relaxed">
                Docker volumes ensure the persistence of the blockchain, wallet files, and logs.
                Store them in a versioned or backed-up folder to avoid data loss during updates or crashes.
              </p>
            ),
            "fr": (
              <p class="leading-relaxed">
                Les volumes Docker garantissent la persistance de la blockchain, des fichiers wallet et des logs.
                Place-les dans un dossier versionné ou sauvegardé pour éviter toute perte de données en cas de mise à jour ou plantage.
              </p>
            )
          }
        },
        {
          id: "ports",
          title: {
            "en": "Network configuration",
            "fr": "Configuration réseau"
          },
          content: {
            "en": (
              <>
                <p class="leading-relaxed">
                  Expose the proper ports in your <code>docker-compose.yml</code> or in Traefik:
                </p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li><code class="bg-gray-900 text-sm text-gray-200 p-1 rounded">18081</code>: monerod public RPC</li>
                  <li><code class="bg-gray-900 text-sm text-gray-200 p-1 rounded">18083</code>: Wallet RPC (optional but useful locally)</li>
                  <li><code class="bg-gray-900 text-sm text-gray-200 p-1 rounded">3333</code>: P2Pool port for XMRig</li>
                </ul>
              </>
            ),
            "fr": (
              <>
                <p class="leading-relaxed">
                  Expose les bons ports dans ton `docker-compose.yml` ou dans Traefik :
                </p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li><code class="bg-gray-900 text-sm text-gray-200 p-1 rounded">18081</code> : RPC public de monerod</li>
                  <li><code class="bg-gray-900 text-sm text-gray-200 p-1 rounded">18083</code> : RPC Wallet (optionnel mais utile en local)</li>
                  <li><code class="bg-gray-900 text-sm text-gray-200 p-1 rounded">3333</code> : Port P2Pool pour XMRig</li>
                </ul> 
              </>
            )
          }
        },
        {
          id: "xmrig",
          title: {
            "en": "XMRig optimization",
            "fr": "XMRig optimisé"
          },
          content: {
            "en": (
              <>
                <p class="leading-relaxed">
                  For better performance, compile XMRig directly on the target machine using:
                </p>
                <CopyBlock code={`cmake -DWITH_HWLOC=ON -DHWLOC_DIR=/path/to/hwloc -DCMAKE_BUILD_TYPE=Release -DXMRIG_DEPS=scripts/deps -Bbuild -H. -march=native`} />
                <p class="dark:text-gray-400 text-gray-600 mt-2 text-sm transition-colors duration-300">
                  Otherwise, use a Docker image like <code>xmrig/xmrig:latest</code>, which is less performant but quicker to deploy.
                </p>
              </>
            ),
            "fr": (
              <>
                <p class="leading-relaxed">
                  Pour de meilleures performances, compile XMRig directement sur la machine cible avec :
                </p>
                <CopyBlock code={`cmake -DWITH_HWLOC=ON -DHWLOC_DIR=/path/to/hwloc -DCMAKE_BUILD_TYPE=Release -DXMRIG_DEPS=scripts/deps -Bbuild -H. -march=native`} copiedText="Copié dans le presse-papiers" />
                <p class="dark:text-gray-400 text-gray-600 mt-2 text-sm transition-colors duration-300">
                  Sinon, utilise une image Docker comme <code>xmrig/xmrig:latest</code>, moins performante mais plus rapide à déployer.
                </p>
              </>
            )
          }
        },
        {
          id: "wallet",
          title: {
            "en": "Wallet connection",
            "fr": "Connexion wallet"
          },
          content: {
            "en": (
              <>
                <p class="leading-relaxed">
                  If your node is accessible from the outside (via Traefik and HTTPS), you can connect it to
                  <strong> Cake Wallet </strong> or <strong> Monerujo </strong> by adding a custom node:
                </p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li>Address: <code>https://monero.mysite.com</code></li>
                  <li>Port: <code>443</code> (thanks to the reverse proxy)</li>
                  <li>Type: Custom remote node</li>
                </ul>
              </>
            ),
            "fr": (
              <>
                <p class="leading-relaxed">
                  Si ton nœud est accessible depuis l’extérieur (via Traefik et HTTPS), tu peux le connecter à 
                  <strong> Cake Wallet </strong> ou <strong>Monerujo</strong> en ajoutant un nœud personnalisé :
                </p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li>Adresse : <code>https://monero.monsite.fr</code></li>
                  <li>Port : <code>443</code> (grâce au reverse proxy)</li>
                  <li>Type : Nœud distant personnalisé (custom node)</li>
                </ul>
              </>
            )
          }
        },
      ],
    },
  ],
};

export default project;