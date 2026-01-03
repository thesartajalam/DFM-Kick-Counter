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
  durationInSeconds: number,
  createdAt: string
}
