# 1. Imagem base
FROM node:20-alpine

# 2. Cria diretório da app
WORKDIR /app

# 3. Copia package.json e package-lock.json
COPY package*.json ./

# 4. Instala dependências
RUN npm install

# 5. Copia todo o código da app
COPY . .

# 6. Build da app Nuxt
RUN npm run build

# 7. Expose da porta
EXPOSE 3000

# 8. Comando para rodar a app
CMD ["npm", "run", "preview"]
