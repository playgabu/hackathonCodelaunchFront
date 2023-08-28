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
import android.widget.LinearLayout;
import android.widget.RelativeLayout;

import androidx.cardview.widget.CardView;
import com.squareup.picasso.Picasso;

public class RNGabuWidgetService extends Service implements View.OnClickListener {
    private WindowManager mWindowManager;
    private View mFloatingView;
    private View collapsedView;
    private View expandedView;
    private ImageView collapsedImageView;
    private CardView containerView;
    private CardView microphoneView;

    public RNGabuWidgetService(){

    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();
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

        //getting the collapsed and expanded view from the floating view
        containerView = (CardView) mFloatingView.findViewById(R.id.collapsed_cv_container);
        collapsedView = mFloatingView.findViewById(R.id.layoutCollapsed);

        expandedView = mFloatingView.findViewById(R.id.collapsable_cv);
        microphoneView = mFloatingView.findViewById(R.id.collapsable_microphone_cv);

        //Setting initial image
        String imageUrl = "https://th.bing.com/th/id/OIG.FWoub9nt_ygwfx8Y7p4C?pid=ImgGn";
        collapsedImageView = (ImageView) mFloatingView.findViewById(R.id.collapsed_iv);

        Picasso.get().load(imageUrl).into(collapsedImageView);

        //adding click listener to close button and expanded view
        // expandedView.setOnClickListener(this);

        //adding an touchlistener to make drag movement of the floating widget
        mFloatingView.findViewById(R.id.relativeLayoutParent).setOnTouchListener(new View.OnTouchListener() {
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
                        //when the drag is ended switching the state of the widget
                        // collapsedView.setVisibility(View.GONE);

                        RelativeLayout.LayoutParams lp = (RelativeLayout.LayoutParams) containerView.getLayoutParams();
                        lp.width = Math.round(TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP,235.0f,getResources().getDisplayMetrics()));
                        containerView.setLayoutParams(lp);
                        expandedView.setVisibility(View.VISIBLE);
                        microphoneView.setVisibility(View.VISIBLE);

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
        // switch (v.getId()) {
        //     case R.id.layoutExpanded:
        //         //switching views
        //         collapsedView.setVisibility(View.VISIBLE);
        //         expandedView.setVisibility(View.GONE);
        //         break;
        // }
    }

}