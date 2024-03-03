FROM denoland/deno:1.41.1

WORKDIR /app

COPY . .

CMD ["deno", "task", "start"]
