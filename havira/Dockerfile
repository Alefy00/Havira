# Etapa de build
FROM node:18-alpine AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código fonte para o diretório de trabalho
COPY . .

# Rodar o build do projeto
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Copiar arquivos de build do estágio anterior para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
