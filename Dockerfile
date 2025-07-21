FROM denoland/deno:latest AS builder

WORKDIR /app
COPY . .

RUN deno task icons:refresh
RUN deno task build

FROM denoland/deno:latest
WORKDIR /app
COPY --from=builder /app .

EXPOSE 8000
CMD ["deno", "task", "serve"]