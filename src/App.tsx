/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

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
      className="min-h-screen w-full flex items-center justify-center bg-slate-50 text-slate-900 font-sans p-6"
    >
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
  );
}
