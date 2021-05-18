import React, { Suspense } from 'react';
import './SplashScreen.css';

import 'animate.css'

export default function SplashScreen() {
  return (
    <div className="SplashScreen">
      <div className="SplashScreenWrapper">
        <Suspense>
          <img src="/assets/myo-text-icon.png" alt="Myo icon" />
          <p className="animate__animated animate__bounceIn">Spark wonder</p>
        </Suspense>
      </div>
    </div>
  )
}
