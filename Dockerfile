FROM node:22

WORKDIR /brain-games

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npx tsc
RUN npm link

CMD ["brain-games"]
