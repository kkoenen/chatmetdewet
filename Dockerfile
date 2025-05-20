FROM node:18-alpine
WORKDIR /app

# Import variables from .env
ARG REACT_APP_API_KEY
ARG REACT_APP_WORKSPACE_SLUG
ARG REACT_APP_API_URL

# Make variables available during build
ENV REACT_APP_API_KEY=$REACT_APP_API_KEY
ENV REACT_APP_WORKSPACE_SLUG=$REACT_APP_WORKSPACE_SLUG
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Installeer project afhankelijkheden
COPY package*.json ./
RUN npm install

# Kopieer de rest van de projectbestanden
COPY . .

# Bouw de React applicatie (productiebuild)
RUN npm run build

# Expose port and start server
EXPOSE 3000
CMD ["node", "server.js"]
