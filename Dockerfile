FROM node:alpine AS build

WORKDIR /application

COPY . .

RUN npm i --quiet --no-optional --no-fund --loglevel=error && \
    npm run build


FROM node:alpine

WORKDIR /application

COPY --from=build /application/package.json /application/
COPY --from=build /application/dist /application/dist/
COPY --from=build /application/node_modules /application/node_modules/

CMD [ "npm", "run", "start:prod" ]
