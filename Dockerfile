from node

ENV TOKEN=default

ENV ANON_CHAT_ID=123456789

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "ArchieBot.js" ]