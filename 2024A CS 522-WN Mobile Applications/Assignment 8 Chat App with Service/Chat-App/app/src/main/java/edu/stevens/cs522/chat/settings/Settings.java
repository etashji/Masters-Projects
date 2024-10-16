package edu.stevens.cs522.chat.settings;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import androidx.preference.PreferenceManager;

public class Settings {

    private static final String TAG = Settings.class.getCanonicalName();

    public static final String SENDER_NAME_KEY = "sender-name";

    public static String getSenderName(Context context) {
        SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(context);
        return prefs.getString(SENDER_NAME_KEY, "");
    }

    public static void register(Context context, String senderName, long senderId) {
        SharedPreferences.Editor editor = PreferenceManager.getDefaultSharedPreferences(context).edit();
        editor.putString(SENDER_NAME_KEY, senderName);
        editor.apply();
    }

    public static boolean isRegistered(Context context) {
        SharedPreferences prefs = PreferenceManager.getDefaultSharedPreferences(context);
        return prefs.getString(SENDER_NAME_KEY, null) != null;
    }

}
