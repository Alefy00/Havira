# Havira

## Visão Geral

**Havira** é uma aplicação web construída usando React, Redux, Leaflet para mapas, e TailwindCSS para estilização. A aplicação permite gerenciar usuários, visualizá-los em uma lista e em um mapa, e oferece uma funcionalidade de alternância de tema (modo claro/escuro).

## Estrutura do Projeto

- `src/`: Contém todo o código-fonte da aplicação.
  - `components/`: Componentes React reutilizáveis.
  - `store/`: Configuração do Redux.
- `public/`: Arquivos públicos estáticos.
- `node_modules/`: Dependências do Node.js.
- `package.json`: Configurações do projeto e dependências.
- `tailwind.config.js`: Configuração do TailwindCSS.
- `vite.config.js`: Configuração do Vite.
- `Dockerfile`: Configuração do Docker para construir e executar a aplicação.
- `docker-compose.yml`: Configuração do Docker Compose para facilitar a execução da aplicação.


## Scripts NPM

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Cria uma versão de produção da aplicação.
- `preview`: Pré-visualiza a aplicação de produção.


## Configuração do Docker

### Dockerfile

```Dockerfile
# Etapa de build
FROM node:18 AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Construa a aplicação
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Copie os arquivos de build da etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
```
### docker-compose.yml
```
version: '3.8'

services:
  havira:
    build: .
    ports:
      - '3000:80'
    environment:
      - NODE_ENV=production

```

## Construção e Execução com Docker

### Construa a imagem Docker
```
docker-compose build
```
### Inicie o contêiner
```
docker-compose up
```
## Acesse a aplicação
- Acesse a aplicação no seu navegador em http://localhost:3000.

## Instruções de Uso
### Configuração do Ambiente de Desenvolvimento

### Clone o repositório
```
git clone https://github.com/seu-usuario/havira.git
cd havira
```
### Instale as dependências
```
npm install

```
### Inicie o servidor de desenvolvimento
```
npm run dev

```
