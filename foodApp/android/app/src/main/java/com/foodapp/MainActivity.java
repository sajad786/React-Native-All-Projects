package com.foodapp;

import com.facebook.react.ReactActivity;

import android.os.Bundle;
// import com.oblador.vectoricons.VectorIconsPackage;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "foodApp";
    // new VectorIconsPackage()
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
}
