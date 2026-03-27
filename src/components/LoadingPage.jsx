import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './LoadingPage.css';

const STATUS_MESSAGES = [
  "ESTABLISHING SECURE CONNECTION TO PEAK PORTFOLIO INFRASTRUCTURE.",
  "SYNCING EDITORIAL ASSETS AND HIGH-CONTRAST SURFACE LOGIC.",
  "LOADING CREATIVE MODULES AND VISUAL COMPONENTS.",
  "INITIALIZING DESIGN SYSTEM AND TYPOGRAPHY ENGINE.",
  "COMPILING INTERACTIVE ELEMENTS AND MICRO-ANIMATIONS.",
];

const MIN_DISPLAY_TIME = 1500; // Minimum 1.5s so the animation feels intentional

const LoadingPage = ({ onLoadingComplete, browserReady, startTime }) => {
  const [progress, setProgress] = useState(0);
  const [responseTime, setResponseTime] = useState('0.00');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const browserReadyTimeRef = useRef(null);
  const hasFinishedRef = useRef(false);

  // Track when browser actually became ready
  useEffect(() => {
    if (browserReady && !browserReadyTimeRef.current) {
      browserReadyTimeRef.current = Date.now();
    }
  }, [browserReady]);

  // Main progress animation synced with browser load
  useEffect(() => {
    const animStartTime = startTime || Date.now();

    const tick = () => {
      const elapsed = Date.now() - animStartTime;
      setResponseTime((elapsed / 1000).toFixed(2));

      if (browserReady) {
        // Browser is loaded — race to 100%
        const minTimeMet = elapsed >= MIN_DISPLAY_TIME;

        if (minTimeMet) {
          setProgress((prev) => {
            const next = Math.min(prev + 4, 100); // fast fill to 100
            if (next >= 100 && !hasFinishedRef.current) {
              hasFinishedRef.current = true;
              setTimeout(() => {
                setIsExiting(true);
                setTimeout(() => onLoadingComplete?.(), 700);
              }, 300);
            }
            return next;
          });
        } else {
          // Still under min display time — climb slowly toward 85%
          setProgress(Math.min(Math.floor((elapsed / MIN_DISPLAY_TIME) * 85), 85));
        }
      } else {
        // Browser still loading — slowly climb toward 85% (never reaches 100)
        // Uses a logarithmic curve so it slows down as it approaches 85%
        const target = 85;
        const speed = 1 - Math.exp(-elapsed / 4000); // slower curve
        setProgress(Math.min(Math.floor(speed * target), target));
      }
    };

    const interval = setInterval(tick, 50);
    return () => clearInterval(interval);
  }, [browserReady, startTime, onLoadingComplete]);

  // Cycle status messages
  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 1200);
    return () => clearInterval(msgInterval);
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="loading-page"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Noise texture overlay */}
          <div className="loading-noise" />

          {/* Main content */}
          <div className="loading-content">
            {/* Status badge */}
            <motion.div
              className="loading-status-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              PEAK_PORTFOLIO / STATUS: IN_PROGRESS
            </motion.div>

            {/* LOADING title */}
            <motion.h1
              className="loading-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              LOADING
            </motion.h1>

            {/* Progress bar section */}
            <motion.div
              className="loading-progress-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* Layered 3D border progress bar */}
              <div className="loading-progress-container">
                {/* Shadow layer (back) */}
                <div className="loading-progress-shadow" />
                {/* Middle layer */}
                <div className="loading-progress-mid" />
                {/* Main progress bar */}
                <div className="loading-progress-bar">
                  <div
                    className="loading-progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                  <span className="loading-progress-text">{progress}%</span>
                </div>
              </div>

              {/* Response time badge */}
              <motion.div
                className="loading-response-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8, type: 'spring', stiffness: 200 }}
              >
                <span className="loading-response-time">{responseTime}s</span>
                <span className="loading-response-label">RESPONSE TIME</span>
              </motion.div>
            </motion.div>

            {/* Bottom section */}
            <motion.div
              className="loading-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="loading-message">
                {STATUS_MESSAGES[messageIndex]}
              </p>

              <div className="loading-icons">
                <div className="loading-icon-box">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="1" width="6" height="6" />
                    <rect x="11" y="1" width="6" height="6" />
                    <rect x="1" y="11" width="6" height="6" />
                    <rect x="11" y="11" width="6" height="6" />
                  </svg>
                </div>
                <div className="loading-icon-box">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 6h14M2 12h14" />
                    <path d="M12 3l3 3-3 3" />
                    <path d="M6 9l-3 3 3 3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="loading-footer">
            <span className="loading-footer-brand">PEAK_PORTFOLIO</span>
            <span className="loading-footer-copy">©2025 PEAK PORTFOLIO / ALL RIGHTS RESERVED</span>
            <div className="loading-footer-links">
              <span>GITHUB</span>
              <span>LINKEDIN</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;
