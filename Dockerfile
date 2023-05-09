# define a imagem base
FROM node:14.17-alpine

# define o diretório de trabalho
WORKDIR /app

# copia o package.json e package-lock.json para a imagem
COPY package*.json ./

# instala as dependências
RUN npm install

# copia os arquivos da aplicação para a imagem
COPY . .

# compila a aplicação para produção
RUN npm run build

# define a porta a ser exposta
EXPOSE 3000

# inicia o aplicativo
CMD ["npm", "start"]