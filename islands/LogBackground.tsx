/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK islands/LogBackground.tsx

import { useEffect, useState } from "preact/hooks";
import { JSX } from "$types";

type LogLine = { text: string; level: string };

function rand(s: number, e: number): number {
  return Math.floor(s + Math.random() * e);
}

function makeVerboseLogLine(): LogLine {
  const level = "DEBUG";
  const module = "Build";
  const timestamp = new Date().toISOString().split("T").join(" ").split(".")[0];

  const phrases = [
    "Compiling src/components/navbar/Sidebar.tsx",
    "Transpiling TypeScript to ESNext",
    "Optimizing assets for production",
    "Generating source maps...",
    "Minification complete",
    "Creating deployment bundle",
    "Processing environment variables from .env",
    "Injecting global styles into main.css",
    "Running postcss transformations",
    "Saving build artifacts to ./dist",
  ];

  const options = [
    "--minify", "--sourcemap", "--target=esnext", "--watch", "--clean", "--no-cache",
    "--config=build.config.ts", "--analyze"
  ];

  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  const optCount = Math.floor(Math.random() * 4) + 2;
  const selectedOptions = Array.from({ length: optCount }, () =>
    options[Math.floor(Math.random() * options.length)]
  );

  const message = `${phrase} ${selectedOptions.join(" ")}`;

  return {
    level,
    text: `[${level.padEnd(5)}] ${timestamp} [${module.padEnd(6)}] ${message}`,
  };
}

function makeHttpLogLine(): LogLine {
  const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
  const endpoints = [
    "/api/users", "/api/auth/login", "/api/posts", "/api/comments",
    "/health", "/api/profile", "/api/settings", "/api/logs"
  ];
  const statuses = [200, 201, 204, 400, 401, 403, 404, 500, 503];
  const durations = Math.floor(Math.random() * 300) + 10;

  const level = "INFO";
  const module = "HTTP";
  const timestamp = new Date().toISOString().split("T").join(" ").split(".")[0];
  const method = methods[Math.floor(Math.random() * methods.length)];
  const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
  const status = statuses[Math.floor(Math.random() * statuses.length)];

  const message = `${method} ${endpoint} → ${status} in ${durations}ms`;

  return {
    level,
    text: `[${level.padEnd(5)}] ${timestamp} [${module.padEnd(6)}] ${message}`,
  };
}

function makeJsonLogLines(): LogLine[] {
  const timestamp = new Date().toISOString().split("T").join(" ").split(".")[0];
  const module = "Logger";
  const level = "TRACE";

  const jsonObj = {
    event: "user_login",
    userId: Math.floor(Math.random() * 10000),
    ip: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
    success: Math.random() > 0.2,
    timestamp,
  };

  const jsonString = JSON.stringify(jsonObj, null, 2).split("\n");

  return jsonString.map((line, i) => ({
    level,
    text: i === 0
      ? `[${level.padEnd(5)}] ${timestamp} [${module.padEnd(6)}] ${line}`
      : `                         ${" ".repeat(module.length)}  ${line}`, // aligné
  }));
}

const ip = (): string => `${rand(1, 255)}.${rand(0, 255)}.${rand(0, 255)}.${rand(1, 254)}`;

function username(): string {
  const prefixes = ["root", "admin", "user", "dev", "sys", "net", "cloud", "debug", "mnlaugh"];
  const suffixes = ["master", "hunter", "coder", "ghost", "man", "warrior", "lord"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  const number = Math.floor(Math.random() * 100);
  return `${prefix}_${suffix}${number}`;
}

const messagesByLevel: Record<string, string[]> = {
  INFO: [
    "Starting service...",
    "Job queued",
    "Task completed",
    "Listening on port 8080",
    "Reconnected successfully",
    "Cache invalidated",
    "Loaded 134 modules",
    "Environment: production",
    "Wrote 13.4MB to disk",
    "No updates available",
    "Backup completed successfully",
    "Heartbeat received",
  ],
  WARN: [
    "Retrying in 5s",
    "Deprecation warning: legacy mode",
    "Worker pool saturated, queuing job",
    "Authentication fallback triggered",
  ],
  ERROR: [
    "Connection timeout",
    "Invalid token",
    "Permission denied",
    "Background job stopped unexpectedly",
    "Token expired, requesting new one",
  ],
  DEBUG: [
    "Received payload",
    "Compiling source files...",
    "Applying migration v12.3.1",
    "New connection from 192.168.1.24",
  ],
  TRACE: [
    "TRACE log enabled",
    "Inspecting DB pool",
    "Checking cache entry...",
  ],
  NOTICE: [
    "Service registered",
    "Update available",
    "Resync started",
  ],
  FATAL: [
    "Kernel panic",
    "Fatal exception in thread",
    "Stack overflow detected",
  ],
  CRITICAL: [
    "CRITICAL system failure",
    "Filesystem read-only",
    "Database unreachable",
  ],
};


function makeLogLine(): LogLine {
  const levels = Object.keys(messagesByLevel);
  const modules = [
    "Core", "App", "DB", "Auth", "API", "Worker", "Logger", "Scheduler", "System", "Cache", "Net", "Mail", "Sync"
  ];

  const level = levels[Math.floor(Math.random() * levels.length)];
  const module = modules[Math.floor(Math.random() * modules.length)];
  const messages = messagesByLevel[level];
  const message = messages[Math.floor(Math.random() * messages.length)];
  const timestamp = new Date().toISOString().split("T").join(" ").split(".")[0];

  return {
    level,
    text: `[${level.padEnd(5)}] ${timestamp} [${module.padEnd(9)}] ${message}`,
  };
}


export default function LogBackground(): JSX.Element {
  const [logs, setLogs] = useState<LogLine[]>([]);

  useEffect((): () => void => {
    const updateLogs = (): void => {
      const lineHeight = globalThis.innerWidth >= 1024 ? 26 : 16;
      const height = globalThis.innerHeight;
      const lines = Math.floor(height / lineHeight) - 1;
      const initialLogs = Array.from({ length: lines }, makeLogLine);
      setLogs(initialLogs);
    };

    updateLogs();

    let timeoutId: number;

    const scheduleNext = (): void => {
      clearInterval(timeoutId);
      timeoutId = setTimeout((): void => {
      const chance = Math.random();

      let newLines: LogLine[] = [];

      if (chance < 0.25)      newLines = makeJsonLogLines();      // 25%
      else if (chance < 0.5)  newLines = [makeVerboseLogLine()];  // 25%
      else if (chance < 0.75) newLines = [makeHttpLogLine()];     // 25%
      else                    newLines = [makeLogLine()];         // 25%

      setLogs((prev): LogLine[] => [...prev.slice(newLines.length), ...newLines]);
        scheduleNext();
      }, rand(800, 2200));
    };

    scheduleNext();

    globalThis.addEventListener("resize", updateLogs);

    return (): void => {
      clearInterval(timeoutId);
      globalThis.removeEventListener("resize", updateLogs);
    };
  }, []);

  const levelColor = {
    INFO: "text-green-500",
    DEBUG: "text-blue-400",
    WARN: "text-yellow-400",
    ERROR: "text-red-400",
    TRACE: "text-gray-400",
    NOTICE: "text-cyan-400",
    FATAL: "text-pink-400",
    CRITICAL: "text-red-600",
  };

  return (
    <div
      aria-hidden="true"
      class="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none font-mono opacity-25 text-[13px] leading-[16px] lg:text-[23px] lg:leading-[26px]"
    >
      <div class="fixed top-0 left-1 right-0 bottom-4">
        {logs.map((log, i): JSX.Element => (
          <div key={i} class={`${levelColor[log.level as keyof typeof levelColor]}`} style={{ filter: `blur(${(logs.length - 1 - i) * 0.1}px)` }}>
            {log.text}
          </div>
        ))}
      </div>
      <div class="fixed bottom-1 left-1 text-black dark:text-white">
        <span class="text-green-500">mnlaugh@nicolas-metivier.fr</span>
        <span>:</span>
        <span class="text-blue-500">~</span>
        <span>$</span>
        <span class="animate-blink ml-1">█</span>
        <span>ssh {username()}@{ip()}</span>
      </div>
    </div>
  );
}