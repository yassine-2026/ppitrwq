import React from 'react';

interface AdBannerProps {
  adKey: string;
  width: number;
  height: number;
  format?: string;
  className?: string;
}

export function AdBanner({ adKey, width, height, format = 'iframe', className = '' }: AdBannerProps) {
  const srcDoc = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { 
    margin: 0; 
    padding: 0; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    background: transparent; 
    overflow: hidden; 
  }
</style>
</head>
<body>
<script>
  atOptions = {
    'key' : '${adKey}',
    'format' : '${format}',
    'height' : ${height},
    'width' : ${width},
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
</body>
</html>
  `;

  return (
    <div className={`flex justify-center items-center overflow-hidden ${className}`} style={{ width, height, minWidth: width, minHeight: height }}>
      <iframe
        title={`ad-${adKey}`}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
        srcDoc={srcDoc}
        style={{ display: 'block', border: 'none' }}
      />
    </div>
  );
}
