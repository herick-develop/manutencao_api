# Manutencao API
api for manutencao APP

# Run with pnpm
pnpm build

pnpm start

# develop with pnpm
pnpm start:dev

# Build with Docker
docker build -t manutencao_api -f Dockerfile . --no-cache

# Run with Docker
docker run -p 3000:3000 --name manutencao_api --restart always -d manutencao_api:latest

# Test Routers
install Rest Client Extension

https://marketplace.visualstudio.com/items?itemName=humao.rest-client

Configure your routes and tests in rest.http