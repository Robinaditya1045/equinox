import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#120303] z-50">
      <div className="animate-spin">
        <Image
          src="/images/time_wheel.png" 
          alt="Loading..."
          width={120}
          height={120}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Loading;