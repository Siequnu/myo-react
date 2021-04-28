import React, { Suspense } from 'react';
import './SplashScreen.css';

export default function SplashScreen() {
  return (
    <div className="SplashScreen">
      <div className="SplashScreenWrapper">
        <Suspense>
          <img src="/assets/myo-text-icon.png" alt="Myo icon" />
          <p>Spark wonder</p>
        </Suspense>
      </div>
    </div>
  )
}
