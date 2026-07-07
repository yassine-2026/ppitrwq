/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDonateClick = async () => {
    // مكان مخصص لإضافة الوظيفة المستقبلية (API)
    console.log('تم الضغط على زر التبرع. جاري تنفيذ الوظيفة...');
    
    setIsLoading(true);
    try {
      // محاكاة لعملية تحميل أو طلب API
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('تمت العملية بنجاح!');
    } catch (error) {
      console.error('حدث خطأ أثناء تنفيذ الوظيفة:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      dir="rtl" 
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 text-slate-900 font-sans selection:bg-blue-200"
    >
      <motion.button
        onClick={handleDonateClick}
        disabled={isLoading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white text-4xl md:text-5xl font-bold py-8 px-20 md:py-10 md:px-32 rounded-[2.5rem] shadow-[0_10px_40px_rgb(37,99,235,0.3)] hover:shadow-[0_15px_50px_rgb(37,99,235,0.5)] transition-shadow duration-300 disabled:opacity-80 disabled:cursor-wait flex items-center justify-center"
      >
        {/* تأثير الإضاءة المتحركة عند التمرير */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-full group-hover:animate-shine pointer-events-none" />
        
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-10 h-10 md:w-12 md:h-12 border-4 border-white/30 border-t-white rounded-full"
          />
        ) : (
          <span className="relative z-10 tracking-wide">تبرع</span>
        )}
      </motion.button>
    </div>
  );
}
