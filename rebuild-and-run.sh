#!/bin/bash

# Stop and remove existing container
docker compose down

# Build the image (optional if already built)
docker compose up --build -d
