#!/bin/bash
#The relative file paths assumes you are executing the script from the base directory of the repository.

#If you are using an env variable to store your database url where you run this script you can delete this line
source .env
#Make sure you do not version control your database url.

#This assumes your database url is in the .env file if I remember correctly...
npx prisma migrate deploy 
psql --dbname=${DATABASE_URL} -f ./db/sql/challenges_upsert.sql