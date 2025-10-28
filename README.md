# GearOps.Frontend 🚀

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)
![Nuxt](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxt&logoColor=#00DC82)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=fff)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=fff)
![Sass](https://img.shields.io/badge/Sass-C69?style=for-the-badge&logo=sass&logoColor=fff)
![Tailwind](https://img.shields.io/badge/Tailwind%20-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  
![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)

---

O **GearOps.Backend** é a parte da UI da aplicação **GearOps** 🎛️, responsável por visualizar 👀 e adicionar interatividade ⚡.  
Foi desenvolvido utilizando **Nuxt 4** ⛰️ e **Vue 3** 🖖.

---

### Estilização 🎨

Para o estilo do site, inicialmente usei **Tailwind** 💨, mas depois foi migrado e refatorado completamente para **SCSS** ✨.

---

### 📜 Origem do Projeto

O projeto teve como ponto de partida um **relatório em Power BI** do meu antigo posto de trabalho.  
Por limitações da plataforma, decidi criar o **GearOps** utilizando uma abordagem mais programática 💻.

- Esta é a **versão 1.0**, focada em criar um **MVP** antes de evoluir para uma versão 2.0 mais completa 🌱.

---

### 📂 Estrutura do projeto

```
📂 GearOps.Frontend
 ┣ 📂 app
 ┃ ┣ 📂 components
 ┃ ┣ 📂 layouts
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 fragments
 ┃ ┣ 📂 providers
 ┃ ┣ 📂 services
 ┃ ┃ ┣ 📂 requests
 ┃ ┃ ┗ 📂 signalR
 ┃ ┃   ┗ 📂 events
 ┃ ┣ 📂 shared
 ┃ ┣ 📂 styles
 ┃ ┣ 📂 types
 ┃ ┣ 📂 utils
 ┃ ┗ 📝 app.vue
 ┣ 📂 public
 ┃ ┣ 📂 icons
 ┃ ┣ 📂 images
 ┃ ┗ 📄 robots.txt
 ┣ 📄 .gitignore
 ┣ 📄 dockerfile
 ┣ 📄 nuxt.config.ts
 ┣ 📄 package-lock.json
 ┣ 📄 package.json
 ┣ 📄 README.md
 ┗ 📄 tsconfig.json
```

---

### ⚡ Comunicação em Tempo Real

- Utiliza **SignalR** do servidor para receber atualização de UI quase de forma instantânea

---

### 🐳 Docker

O projeto possui um arquivo **Dockerfile** para testes em redes privadas, facilitando a execução e isolamento do ambiente:

---

### 🚀 Rodar container Docker - dockerfile

1. Clonar esse Repositório:

   ```
   git clone https://github.com/LucasLantemamLeite/GearOps.Frontend.git
   ```

2. Compilar a imagem:

   ```
   docker build -f dockerfile -t gearops-frontend .
   ```

3. Rodar o container em ip privado:

   ```
   docker run -d -p 3000:3000 --name gearops-client gearops-frontend
   ```

4. Verificar se está rodando:
   ```
   http://localhost:3000/ -> verifica se está rodando localmente (localhost)
   http://'ip-da-máquina':3000/ -> verifica se está rodando em rede privada
   ```

---

### 🚀 Rodar o container via docker-compose

1. Clonar o Repositório do Backend da aplicação

   ```
   git clone https://github.com/LucasLantemamLeite/GearOps.Backend.git
   ```

2. Criar um arquivo **docker-compose.yml** na raiz da aplicação (fora da pasta do GearOps.Frontend)

3. Aplique os seguintes serviços no arquivo do docker-compose:

   ```yml
   services:
     postgres:
       image: postgres:16-alpine
       container_name: postgres_db
       restart: always
       networks:
         - gearops_networks
       environment:
         POSTGRES_USER: postgres
         POSTGRES_PASSWORD: postgres
         POSTGRES_DB: GearOpsDb
       ports:
         - "5432:5432"
       volumes:
         - postgres_data:/var/lib/postgresql/data

     backend:
       container_name: gearops-server
       build:
         context: ./GearOps.Backend
         dockerfile: dockerfile.bd
       networks:
         - gearops_networks
       environment:
         - ConnectionStrings__DefaultConnection=Host=postgres;Database=GearOpsDb;Username=postgres;Password=postgres
       ports:
         - "8080:8080"
       depends_on:
         - postgres

     frontend:
       build: ./GearOps.frontend
       ports:
         - "3000:3000"
       depends_on:
         - backend
       networks:
         - gearops_networks

     migrations:
       build:
         context: ./GearOps.Backend
         dockerfile: dockerfile.ef
       depends_on:
         - postgres
       networks:
         - gearops_networks
       environment:
         - ConnectionStrings__DefaultConnection=Host=postgres;Database=GearOpsDb;Username=postgres;Password=postgres
       command: dotnet ef database update

   volumes:
     postgres_data:

   networks:
     gearops_networks:
       driver: bridge
   ```

4. Comando para rodar a aplicação:

   ```
   docker-compose up -> Para rodar com logs do container
   docker-compose up -d -> Para rodar em segundo plano
   ```

5. Substituir a politica de cors da aplicação (backend) para o ip da máquina (digite ipconfig no cmd) caso queria testar em rede privada

   - Arquivo: [`GearOps.Backend/GearOps.Api/Configurations/Builder/BuilderConfig.cs`](../GearOps.Backend/GearOps.Api/Configurations/Builder/BuilderConfig.cs)

6. Alterar a baseUrl do axios nos services e o HubConnectionBuilder na seção de devices

   - Arquivo baseUrl: [`GearOps.Frontend/app/services/requests/api.ts`](./app/services/requests/api.ts)
   - Arquivo signalR: [`GearOps.Frontend/app/services/signalR/connectionHub.ts`](./app/services/signalR/connectionHub.ts)
