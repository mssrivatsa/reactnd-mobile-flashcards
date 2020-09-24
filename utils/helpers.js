import { AsyncStorage } from "react-native";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";

const NOTIFICATION_KEY = "reactnd-mobile-flashcards:notifications";

export function clearNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "Mobile Flashcards Reminder",
    body: "👋 I'm reminding you. Don't forget to study for today!",
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
    ios: {
      sound: true,
    },
  };
}

function getReminderDateTime() {
  const reminderDateTime = new Date();
  reminderDateTime.setDate(reminderDateTime.getDate() + 1);
  reminderDateTime.setHours(17);
  reminderDateTime.setMinutes(0);
  return reminderDateTime;
}

export function setNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: getReminderDateTime(),
              repeat: "day",
            });
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
