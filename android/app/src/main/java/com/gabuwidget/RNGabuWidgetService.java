package com.gabumobile;

import android.app.Service;
import android.content.Intent;
import android.graphics.PixelFormat;
import android.os.IBinder;
import android.util.TypedValue;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;

import androidx.annotation.Nullable;
import androidx.cardview.widget.CardView;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.squareup.picasso.Picasso;

import com.facebook.react.ReactApplication;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNGabuWidgetService extends Service implements View.OnClickListener {
    ReactContext reactContext = null;

    private WindowManager mWindowManager;
    private View parentLayout;
    private View mFloatingView;
    private View collapsedView;
    private View expandedView;
    private ImageView collapsedImageView;
    private CardView containerView;
    private CardView microphoneView;
    private CardView signOutView;

    private CardView collapsed_cv_stroke;
    private boolean expanded = false;

    private TextView textCoach;
    private TextView textName;

    public RNGabuWidgetService(){

    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        final ReactInstanceManager reactInstanceManager =
                getReactNativeHost().getReactInstanceManager();
        ReactContext getReactContext = reactInstanceManager.getCurrentReactContext();
        reactContext = getReactContext;
        //getting the widget layout from xml using layout inflater
        mFloatingView = LayoutInflater.from(this).inflate(R.layout.gabu_wigdet_layout, null);

        //setting the layout parameters
        final WindowManager.LayoutParams params = new WindowManager.LayoutParams(
                WindowManager.LayoutParams.WRAP_CONTENT,
                WindowManager.LayoutParams.WRAP_CONTENT,
                WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY,
                WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,
                PixelFormat.TRANSLUCENT);


        //getting windows services and adding the floating view to it
        mWindowManager = (WindowManager) getSystemService(WINDOW_SERVICE);
        mWindowManager.addView(mFloatingView, params);

        parentLayout = mFloatingView.findViewById(R.id.relativeLayoutParent);

        //getting the collapsed and expanded view from the floating view
        containerView = (CardView) mFloatingView.findViewById(R.id.collapsed_cv_container);
        collapsed_cv_stroke = (CardView) mFloatingView.findViewById(R.id.collapsed_cv_stroke);
        collapsedView = mFloatingView.findViewById(R.id.layoutCollapsed);

        expandedView = mFloatingView.findViewById(R.id.collapsable_cv);
        microphoneView = mFloatingView.findViewById(R.id.collapsable_microphone_cv);
        signOutView = mFloatingView.findViewById(R.id.collapsable_signout_cv);

        //Setting initial image
        String imageUrl = "https://th.bing.com/th/id/OIG.FWoub9nt_ygwfx8Y7p4C?pid=ImgGn";
        collapsedImageView = (ImageView) mFloatingView.findViewById(R.id.collapsed_iv);
        textCoach = mFloatingView.findViewById(R.id.textCoach);
        textName = mFloatingView.findViewById(R.id.textName);

        Picasso.get().load(imageUrl).into(collapsedImageView);

        //adding click listener to close button and expanded view
        microphoneView.setOnClickListener(this);
        signOutView.setOnClickListener(this);

        //adding an touchlistener to make drag movement of the floating widget
        parentLayout.setOnTouchListener(new View.OnTouchListener() {
            private int initialX;
            private int initialY;
            private float initialTouchX;
            private float initialTouchY;

            @Override
            public boolean onTouch(View v, MotionEvent event) {
                switch (event.getAction()) {
                    case MotionEvent.ACTION_DOWN:
                        initialX = params.x;
                        initialY = params.y;
                        initialTouchX = event.getRawX();
                        initialTouchY = event.getRawY();
                        return true;

                    case MotionEvent.ACTION_UP:
                        return true;

                    case MotionEvent.ACTION_MOVE:
                        //this code is helping the widget to move around the screen with fingers
                        params.x = initialX + (int) (event.getRawX() - initialTouchX);
                        params.y = initialY + (int) (event.getRawY() - initialTouchY);
                        mWindowManager.updateViewLayout(mFloatingView, params);
                        return true;
                }
                return false;
            }
        });

        collapsedImageView.setOnTouchListener(new View.OnTouchListener() {
            private int initialX;
            private int initialY;
            private float initialTouchX;
            private float initialTouchY;

            @Override
            public boolean onTouch(View v, MotionEvent event) {
                switch (event.getAction()) {
                    case MotionEvent.ACTION_DOWN:
                        initialX = params.x;
                        initialY = params.y;
                        initialTouchX = event.getRawX();
                        initialTouchY = event.getRawY();
                        return true;

                    case MotionEvent.ACTION_UP:
                        if(initialX == params.x && initialY == params.y)
                        {
                            RelativeLayout.LayoutParams lp = (RelativeLayout.LayoutParams) containerView.getLayoutParams();
                            if(expanded){
                                lp.width = Math.round(TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP,70.0f,getResources().getDisplayMetrics()));
                                expandedView.setVisibility(View.GONE);
                                microphoneView.setVisibility(View.GONE);
                                microphoneView.setVisibility(View.GONE);
                                signOutView.setVisibility(View.GONE);
                                expanded = !expanded;
                            }
                            else{
                                lp.width = Math.round(TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP,295.0f,getResources().getDisplayMetrics()));
                                expandedView.setVisibility(View.VISIBLE);
                                microphoneView.setVisibility(View.VISIBLE);
                                signOutView.setVisibility(View.VISIBLE);
                                expanded = !expanded;
                            }
                            containerView.setLayoutParams(lp);
                        }
                        return true;

                    case MotionEvent.ACTION_MOVE:
                        //this code is helping the widget to move around the screen with fingers
                        params.x = initialX + (int) (event.getRawX() - initialTouchX);
                        params.y = initialY + (int) (event.getRawY() - initialTouchY);
                        mWindowManager.updateViewLayout(mFloatingView, params);
                        return true;
                }
                return false;
            }
        });
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (mFloatingView != null) mWindowManager.removeView(mFloatingView);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.collapsed_iv:

                break;
            case R.id.collapsable_microphone_cv:
                WritableMap args_microphone = new Arguments().createMap();
                sendEvent(reactContext, "microphoneTouched",args_microphone);
                break;
            case R.id.collapsable_signout_cv:
                WritableMap args_singout = new Arguments().createMap();
                sendEvent(reactContext, "signoutTouched",args_singout);
                stopSelf();
                break;
        }
    }



    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent != null && intent.getAction() != null) {
            switch (intent.getAction()) {
                case "ACTION_SET_COACH_NAME": {
                    String coachName = intent.getStringExtra("COACH_NAME");
                    textCoach.setText(coachName);
                    break;
                }
                case "ACTION_SET_KID_NAME": {
                    String kidName = intent.getStringExtra("KID_NAME");
                    textName.setText(kidName);
                    break;
                }
                case "ACTION_SET_BODY_IMAGE": {
                    String imgUrl = intent.getStringExtra("URL");
                    Picasso.get().load(imgUrl).into(collapsedImageView);
                    break;
                }
                case "SET_AUDIO_STATE": {
                    boolean state = intent.getBooleanExtra("STATE",false);
                    if(state){
                        collapsed_cv_stroke.setCardBackgroundColor(getResources().getColor(R.color.active_green));
                        microphoneView.setCardBackgroundColor(getResources().getColor(R.color.active_green));
                    }else {
                        collapsed_cv_stroke.setCardBackgroundColor(getResources().getColor(R.color.inactive_red));
                        microphoneView.setCardBackgroundColor(getResources().getColor(R.color.inactive_red));
                    }

                }
            }
        }
        return START_STICKY;
    }

    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    protected ReactNativeHost getReactNativeHost() {
        return ((ReactApplication) getApplication()).getReactNativeHost();
    }

}