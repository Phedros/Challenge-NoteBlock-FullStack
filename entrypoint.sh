#!/bin/bash 

echo "Iniciando Backend"

cd "./ensolers-challenge/"
mvnw spring-boot:run &


echo "Iniciando Frontend"
cd "../ensolvers-challenge-frontend/"
npm run start