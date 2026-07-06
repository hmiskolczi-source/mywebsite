/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ImageWatermarkProps {
  children: React.ReactNode;
  className?: string;
}

export default function ImageWatermark({ children, className = '' }: ImageWatermarkProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 pointer-events-none">
        <img
          src="https://bgumoxbjyuzc6ytp.public.blob.vercel-storage.com/shared/imagelogo.png"
          alt="Kinga Miskolczi watermark"
          className="h-6 w-auto sm:h-8 opacity-80"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
