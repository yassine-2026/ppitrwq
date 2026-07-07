/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { AdBanner } from './components/AdBanner';

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTimer = () => {
      setShowMessage(false);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setShowMessage(true);
      }, 5000);
    };

    // Start timer initially
    startTimer();

    // Reset timer when user leaves and comes back to the tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startTimer();
      } else {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div 
      dir="rtl" 
      className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans flex flex-col"
    >
      {/* Top Ads Container */}
      <div className="w-full flex flex-col items-center justify-center pt-4 pb-2 gap-4">
        {/* Mobile Top Ad (320x50) */}
        <AdBanner adKey="3dea781d20f8fe7d61524cef860441ad" width={320} height={50} className="block md:hidden" />
        
        {/* Tablet Top Ad (468x60) */}
        <AdBanner adKey="74404ab58f9cb207087ed9a90ee3993c" width={468} height={60} className="hidden md:flex lg:hidden" />

        {/* Desktop Top Ad (728x90) */}
        <AdBanner adKey="d1b9a08c00c9fc0c99e9ab0bb8f65388" width={728} height={90} className="hidden lg:flex" />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-row w-full max-w-[1400px] mx-auto px-4 py-8">
        
        {/* Right Sidebar Ad (160x600) */}
        <div className="hidden xl:flex flex-col gap-6 items-center justify-start w-[160px] flex-shrink-0 pt-10">
          <AdBanner adKey="5d87ba46fe4589d50003758fddc785ba" width={160} height={600} />
        </div>

        {/* Center Content */}
        <div className="flex-grow flex flex-col items-center justify-center relative px-4 gap-12">
          
          <div className="min-h-[150px] flex items-center justify-center">
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-snug md:leading-tight">
                  شكرًا لتبرعك،<br/> الله يرزقك الجنة
                </h1>
              </motion.div>
            )}
          </div>

          {/* Main Middle Ad (300x250) */}
          <div className="my-4">
            <AdBanner adKey="6b1961f50ebbd3a5149b9d25b67a1a93" width={300} height={250} />
          </div>

        </div>

        {/* Left Sidebar Ad (160x300) */}
        <div className="hidden xl:flex flex-col gap-6 items-center justify-start w-[160px] flex-shrink-0 pt-10">
          <AdBanner adKey="dafad6f7d6391e2eecb861765d9c5f79" width={160} height={300} />
        </div>

      </div>
    </div>
  );
}
