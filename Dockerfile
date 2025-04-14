FROM node:18-alpine 

WORKDIR /user/src/app


COPY package.json package-lock.json* ./ 


RUN npm install

COPY . . 

RUN npm run build


EXPOSE 5173 4173

CMD ["npm","run","preview"]