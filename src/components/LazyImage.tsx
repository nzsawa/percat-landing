import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  absolute?: boolean;
  [key: string]: any;
}

export function LazyImage({ 
  src, 
  alt, 
  className = "", 
  skeletonClassName = "",
  absolute = false,
  ...props 
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // For absolute positioned images, don't add wrapper div
  if (absolute) {
    return (
      <>
        {/* Skeleton loading state */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-pulse ${skeletonClassName}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actual image */}
        <motion.img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${hasError ? 'opacity-50' : ''} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: isLoading ? 0 : 1, 
            scale: isLoading ? 1.05 : 1 
          }}
          transition={{ 
            opacity: { duration: 0.4, ease: "easeOut" },
            scale: { duration: 0.4, ease: "easeOut" }
          }}
          {...props}
        />

        {/* Error state */}
        {hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-white/5"
          >
            <div className="text-center text-white/40">
              <div className="text-xs">Failed to load</div>
            </div>
          </motion.div>
        )}
      </>
    );
  }

  // For non-absolute images, use wrapper div
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton loading state */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-pulse ${skeletonClassName}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${hasError ? 'opacity-50' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          scale: isLoading ? 1.05 : 1 
        }}
        transition={{ 
          opacity: { duration: 0.4, ease: "easeOut" },
          scale: { duration: 0.4, ease: "easeOut" }
        }}
        {...props}
      />

      {/* Error state */}
      {hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-white/5"
        >
          <div className="text-center text-white/40">
            <div className="text-xs">Failed to load</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
