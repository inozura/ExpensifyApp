package com.expensify.chat.customairshipextender;

import android.graphics.Bitmap;
import androidx.core.app.Person;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class NotificationCache {
    public static class NotificationData {
        public Map<String, Person> people = new HashMap<>();
        public ArrayList<Message> messages = new ArrayList<>();

        public Map<String, Bitmap> bitmapIcons = new HashMap<>();
        public int prevNotificationID = -1;

        public static class Message {
            public Person person;
            public String text;
            public long time;

            Message(Person person, String text, long time) {
                this.person = person;
                this.text = text;
                this.time = time;
            }
        }
    }
}
