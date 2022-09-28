# Template - Starter Container (NodeJS)

Quick starter template for a NodeJS container.

## Usage

```bash
docker run -d \
  --restart unless-stopped \
  --publish 3000:3000 \
  --env-file .env \
  --name template-starter-container template-starter-container:latest
```
