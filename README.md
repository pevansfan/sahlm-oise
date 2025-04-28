# 📱 Mon Application React Native

Bienvenue sur le dépôt de mon application mobile développée avec **React Native** et **Expo** !

## 🚀 Lancer l'application avec Expo Go

Pour tester l'application facilement sur votre appareil mobile, suivez ces étapes :

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/pevansfan/sahlm-oise.git
   cd sahlm-oise
   ```

2. **Installer les dépendances :**
   Assurez-vous d'avoir **Node.js** et **npm** ou **yarn** installés sur votre machine.

   Ensuite, installez les dépendances du projet :
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. **Installer Expo CLI (si ce n'est pas déjà fait) :**
   ```bash
   npm install -g expo-cli
   ```

4. **Démarrer le projet :**
   ```bash
   expo start
   ```
   Cela ouvrira automatiquement Expo DevTools dans votre navigateur.

5. **Lancer sur votre appareil mobile :**
   - Installez l'application **Expo Go** depuis le **Google Play Store** ou **Apple App Store**.
   - Scannez le QR code affiché dans Expo DevTools avec l'application Expo Go pour lancer l'app sur votre téléphone.

---

## 🔐 Connexion à l'application

Pour vous connecter une fois l'application lancée :

- Utilisez les identifiants fournis dans le fichier suivant :
  ```
  data/users.json
  ```
- Ce fichier contient les **informations de connexion** nécessaires (email et mot de passe) pour accéder à l'application.

---

## 📋 Prérequis

- Node.js (https://nodejs.org/)
- Expo CLI (`npm install -g expo-cli`)
- Application Expo Go sur votre téléphone

---

## 📂 Structure du projet (extrait rapide)

```
├── App.js
├── package.json
├── data/
│   └── users.json
├── components/
├── screens/
└── ...
```

---

## 🛠 Technologies utilisées

- React Native
- Expo
- JavaScript

---

## 📞 Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter !

---

## ⚠️ Problèmes Fréquents

- **Erreur « Cannot find module « expo » »** : Assurez-vous d'avoir installé les dépendances avec `npm install` ou `yarn install`.
- **Expo Go ne scanne pas le QR Code** : Vérifiez que votre ordinateur et votre smartphone sont connectés au même réseau Wi-Fi.
- **"Metro bundler" ne démarre pas** : Essayez de relancer Expo avec `expo start -c` pour nettoyer le cache.