#!/bin/bash

echo "Dove vuoi creare il progetto Node.js?"
echo "1) Allenamento"
echo "2) Mini-progetti"
echo "3) Progetti-seri"
read -p "Scelta [1-3]: " choice

read -p "Nome progetto: " projectname

case $choice in
    1)
        target=~/workspace/allenamento
        ;;
    2)
        target=~/workspace/mini-progetti
        ;;
    3)
        target=~/workspace/progetti-seri
        ;;
    *)
        echo "Scelta non valida."
        exit 1
        ;;
esac

mkdir -p "$target/$projectname"
cd "$target/$projectname"

echo "✅ Creazione progetto Node.js: $target/$projectname"

# Inizializza Node.js project
npm init -y

# Crea file base
touch index.js

# Crea gitignore
echo "node_modules/" >> .gitignore

# Messaggio finale
echo "✅ Progetto Node.js pronto!"
code .
