import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "FETAL_MOVEMENT_SESSIONS";

export const loadSessions = async () => {
  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    if (!storedData) return [];

    const sessions = JSON.parse(storedData);
    console.log("From loadSessions function", sessions);
    return sessions.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } catch (error) {
    console.error("Failed to load sessions ", error);
    return [];
  }
};

export const saveSession = async (newSession) => {
  console.log("From saveSession function", newSession);
  try {
    const existingSessions = await loadSessions();
    const updatedSessions = [newSession, ...existingSessions];

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSessions));
  } catch (error) {
    console.error("Failed to save session ", error);
  }
};
