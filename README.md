# DFM Kick Counter

DFM Kick Counter is a React Native mobile application that helps users track daily fetal movements by recording the time taken to count 10 fetal kicks. The app works completely offline using local storage and is designed as part of a React Native Developer Intern assignment.

---

## Features

- Record fetal movement sessions using a timer
- Play / Pause timer functionality
- Save sessions locally on the device
- View past records with date and duration (MM:SS)
- Informational guide on how to count fetal kicks
- Data persists even after app restarts
- No backend required

---

## Screens

- **Home Screen**
  - Displays a list of previously saved fetal movement sessions
  - Shows session date and duration
  - Entry point to start a new recording

- **Counter Screen**
  - Timer starts automatically at 00:00
  - Play / Pause control
  - Save session or go back without saving
  - Information icon to view guidance

- **Info Sheet**
  - Displays step-by-step instructions to count fetal kicks
  - Opens as a modal
  - Can be accessed from multiple points in the app

---

## Tech Stack

- React Native (Expo – Managed Workflow)
- JavaScript
- React Navigation
- AsyncStorage (local data persistence)
- EAS Build (APK generation)

---

## Data Storage

All sessions are stored locally using AsyncStorage.

Each session is saved in the following format:

```js
{
  id: string,
  duration: number,
  createdAt: string,
}

````

* `duration` stores the exact recorded time in seconds which is then formatted in minutes:seconds.
* Data is serialized and persisted on the device
* Sessions are sorted by most recent first on load

---

## Assumptions

* Timer starts automatically when the Counter screen is opened
* A session is saved only when the user taps the **Save** button
* Navigating back without saving discards the session
* The article section on the Home screen is static, as mentioned in the assignment
* The app works completely offline and does not use any backend services

---

## Running the Project Locally

### Prerequisites

* Node.js
* Expo CLI

### Steps

```bash
npm install
npx expo start
```

You can run the app using Expo Go or an Android emulator.

---

## Android APK

An installable Android APK has been generated using **Expo EAS Build** .
https://expo.dev/accounts/thesartajalam/projects/dfm-kick-counter/builds/3f5e0c32-4f86-4587-9344-cb313d1198e8

---

## Screen Recording

A screen recording demonstrating the full app flow (Home → Counter → Save → Persistence) is included with the submission.

---

## Folder Structure (High-Level)

```txt
.expo/
assets/
node_modules/

src/
 ├─ components/
 ├─ navigation/
 ├─ screens/
 ├─ storage/
 └─ utils/

.gitignore
App.js
app.json
eas.json
index.js
package.json
package-lock.json

```

---

## Notes

* No external UI libraries were used
* Focus was kept on clean logic, maintainability, and correct data handling
* The project follows a simple and readable structure suitable for a small production-ready feature


## Author

***Sartaj Alam***

React Native Developer

