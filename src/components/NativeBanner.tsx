import React from 'react';

export function NativeBanner({ className = '' }: { className?: string }) {
  const srcDoc = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { 
    margin: 0; 
    padding: 0; 
    background: transparent; 
  }
</style>
</head>
<body>
<script async="async" data-cfasync="false" src="https://pl30250913.effectivecpmnetwork.com/7b58697c8bdbf0ff10777c5436d4daa2/invoke.js"></script>
<div id="container-7b58697c8bdbf0ff10777c5436d4daa2"></div>
</body>
</html>
  `;

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <iframe
        title="native-ad"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
        srcDoc={srcDoc}
        style={{ display: 'block', border: 'none', minHeight: '250px' }}
      />
    </div>
  );
}
