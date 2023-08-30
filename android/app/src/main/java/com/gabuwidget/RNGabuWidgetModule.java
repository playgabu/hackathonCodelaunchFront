package com.gabumobile;

//Default Module Libraries:
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.view.View;
import android.widget.Toast;
import android.util.Log;

public class RNGabuWidgetModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    RNGabuWidgetModule(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    @Override
    public String getName() {
        return "RNGabuWidgetModule";
    }

    //Methods For The Widget:
    @ReactMethod
    public void start(){
        Log.d("RNGabuWidgetModule","Starting the Floating Widget Service");

        this.reactContext.startService(new Intent(this.reactContext.getApplicationContext(), RNGabuWidgetService.class));
        // finish();

    }

    @ReactMethod
    public void setAudio(boolean state){
        Intent intent = new Intent("SET_AUDIO_STATE", null, reactContext, RNGabuWidgetService.class);
        intent.putExtra("STATE", state);
        this.reactContext.startService(intent);
    }

    // @ReactMethod
    // public void openWidget() {
    //     Intent intent = new Intent("ACTION_OPEN_WIDGET", null, reactContext, RNGabuWidgetService.class);
    //     reactContext.startService(intent);
    // }

    // public RNFloatWidgetModule(ReactApplicationContext reactContext) {
    //     super(reactContext);
    //     this.reactContext = reactContext;
    // }

    // @Override
    // public String getName() {
    //     return "RNFloatWidget";
    // }

    // @ReactMethod
    // public void start() {
    //     Intent service = new Intent(reactContext.getApplicationContext(), FloatingWidgetShowService.class);
    //     reactContext.startService(service);
    // }

    // @ReactMethod
    // public void openWidget() {
    //     Intent intent = new Intent("ACTION_OPEN_WIDGET", null, reactContext, FloatingWidgetShowService.class);
    //     reactContext.startService(intent);
    // }

    // @ReactMethod
    // public void closeWidget() {
    //     Intent intent = new Intent("ACTION_CLOSE_WIDGET", null, reactContext, FloatingWidgetShowService.class);
    //     reactContext.startService(intent);
    // }

    // @ReactMethod
    // public void setColor(String color){
    //     Integer bgColor = Color.parseColor(String.valueOf(color));
    //     Intent intent = new Intent("ACTION_SETCOLOR_WIDGET", null, reactContext, FloatingWidgetShowService.class);
    //     intent.putExtra("COLOR", bgColor);
    //     reactContext.startService(intent);
    // }
    // @ReactMethod
    // public void setTitle(String title){

    //     Intent intent = new Intent("ACTION_SET_TITLE_WIDGET", null, reactContext, FloatingWidgetShowService.class);
    //     intent.putExtra("TITLE", title);
    //     reactContext.startService(intent);
    // }
    // @ReactMethod
    // public void setBody(String body){
    //     Intent intent = new Intent("ACTION_SET_BODY_WIDGET", null, reactContext, FloatingWidgetShowService.class);
    //     intent.putExtra("BODY", body);
    //     reactContext.startService(intent);
    // }
    // @ReactMethod
    // public void setImage(String url){
    //     Intent intent = new Intent("ACTION_SET_BODY_IMAGE", null, reactContext, FloatingWidgetShowService.class);
    //     intent.putExtra("URL", url);
    //     reactContext.startService(intent);
    // }
    // @ReactMethod
    // public void showToast(String msg){
    //    Toast.makeText(reactContext,msg, Toast.LENGTH_LONG).show();
    // }
    // @ReactMethod
    // public void createButton(){
    //     Intent intent = new Intent("ACTION_CREATE_BUTTON", null, reactContext, FloatingWidgetShowService.class);
    //     reactContext.startService(intent);
    // }
}