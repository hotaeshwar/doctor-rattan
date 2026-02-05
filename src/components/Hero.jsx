import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const isIPad = (
        (width === 768) || (width === 820) || (width === 834) || (width === 1024) ||
        navigator.userAgent.includes('iPad') || 
        (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)
      );
      setIsSmallScreen(width < 768 && !isIPad);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    video.preload = 'auto';
    video.poster = '';
    video.loading = 'eager';
    video.crossOrigin = 'anonymous';

    const adjustVideoFit = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const isIPad = (
        (width === 768 && height === 1024) ||
        (width === 820 && height === 1180) ||
        (width === 834 && height === 1194) ||
        (width === 1024 && height === 1366) ||
        (height === 768 && width === 1024) ||
        (height === 820 && width === 1180) ||
        (height === 834 && width === 1194) ||
        (height === 1024 && width === 1366) ||
        (navigator.userAgent.includes('iPad') || 
         (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document))
      );
      
      const screenRatio = width / height;
      const videoRatio = 16 / 9;
      
      video.style.objectFit = 'cover';
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.position = 'absolute';
      video.style.top = '0';
      video.style.left = '0';
      video.style.transform = 'translateZ(0)';
      
      if (isIPad) {
        video.style.objectPosition = 'center center';
        video.style.minWidth = '100%';
        video.style.minHeight = '100%';
      } else if (screenRatio > videoRatio) {
        video.style.objectPosition = 'center center';
      } else {
        video.style.objectPosition = 'center 40%';
      }
    };
    
    adjustVideoFit();
    
    let resizeTimeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(adjustVideoFit, 500);
    };
    
    window.addEventListener('resize', throttledResize, { passive: true });
    window.addEventListener('orientationchange', () => {
      setTimeout(adjustVideoFit, 600);
    }, { passive: true });

    const forceVideoLoad = () => {
      return new Promise((resolve) => {
        if (video.readyState === 4) {
          resolve();
          return;
        }
        
        const checkLoad = () => {
          if (video.readyState === 4) {
            resolve();
          } else {
            setTimeout(checkLoad, 50);
          }
        };
        
        video.addEventListener('canplaythrough', resolve, { once: true });
        video.addEventListener('loadeddata', checkLoad, { once: true });
        video.load();
      });
    };

    const playVideo = async () => {
      try {
        await forceVideoLoad();
        await new Promise(resolve => setTimeout(resolve, 200));
        await video.play();
      } catch (error) {
        const enableVideo = async () => {
          try {
            await forceVideoLoad();
            await video.play();
            document.removeEventListener('click', enableVideo);
            document.removeEventListener('touchstart', enableVideo);
            document.removeEventListener('scroll', enableVideo);
          } catch (err) {
            console.log('Video play failed:', err);
          }
        };
        
        document.addEventListener('click', enableVideo, { once: true });
        document.addEventListener('touchstart', enableVideo, { once: true });
        document.addEventListener('scroll', enableVideo, { once: true });
      }
    };

    setTimeout(playVideo, 1000);

    return () => {
      window.removeEventListener('resize', throttledResize);
      window.removeEventListener('orientationchange', adjustVideoFit);
      window.removeEventListener('resize', checkScreenSize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const getContainerHeight = () => {
    if (typeof window === 'undefined') return '100vh';
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const isIPad = (
      (width === 768 && height === 1024) ||
      (width === 820 && height === 1180) ||
      (width === 834 && height === 1194) ||
      (width === 1024 && height === 1366) ||
      (height === 768 && width === 1024) ||
      (height === 820 && width === 1180) ||
      (height === 834 && width === 1194) ||
      (height === 1024 && width === 1366) ||
      (navigator.userAgent.includes('iPad') || 
       (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document))
    );
    
    if (width < 768) {
      return Math.min(height * 0.6, 500);
    } else if (isIPad) {
      return Math.min(width * 0.5625, height * 0.6);
    } else if (width < 1024) {
      return Math.min(height * 0.7, 600);
    } else {
      return '100vh';
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ 
        height: getContainerHeight(),
        minHeight: isSmallScreen ? '300px' : '400px'
      }}
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full"
          src="/media/doctor.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster=""
          controls={false}
          crossOrigin="anonymous"
          loading="eager"
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="deny"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'auto',
            WebkitTransform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;