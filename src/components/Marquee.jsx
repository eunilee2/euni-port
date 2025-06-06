import '../index.css';
import { useState, useEffect, useRef } from 'react';
import copyButton from '../assets/copy button.svg';
import copiedButton from '../assets/copied button.svg';
import { createPortal } from "react-dom";

export const Marquee = () => {
  const [copied, setCopied] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef();

  const email= 'eunicelee12814@gmail.com';

  // mousetracking
  useEffect(() => {
    if (!showCursor) return;

    const move = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(() => {
          setCursorPos(cursorRef.current);
          frameRef.current = null;
        });
      }
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [showCursor]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 6000);
  };

  const cursorImg = showCursor ? (
    <img
      src={copied ? copiedButton : copyButton}
      alt={copied ? "Copied" : "Copy"}
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: cursorPos.x,
        top: cursorPos.y,
        transform: "translate(-50%, -50%)",
        transition: "none", // Remove transition to avoid zoom effect
      }}
    />
  ) : null;

  return (
    <div className="marquee-text"
      onClick={handleCopy}
      style={{ cursor: 'none' }}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => {
        setShowCursor(false);
        setCopied(false);
      }}
      // onMouseEnter={() => setCopied(true)}
      // onMouseLeave={() => setCopied(false)}
    >
      {/* Custom cursor rendered in a portal */}
      {typeof window !== "undefined" &&
        createPortal(cursorImg, document.body)}
      {/* {typeof window !== "undefined" &&
        createPortal(
          <>
            {showCursor && (
              <div
                className="fixed pointer-events-none z-[9998] rounded-xl h-[30px] w-[120px]"
                style={{
                  left: cursorPos.x,
                  top: cursorPos.y,
                  borderRadius: '1.5rem', // extra rounding if you want
                  transform: 'translate(-50%, -50%)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  background: 'rgba(0,0,0,0.05)', // subtle darkening, optional
                }}
              />
            )}
            {cursorImg}
          </>,
          document.body
        )
      } */}
      <div className="marquee-text-track text-black text-4xl hover:text-primary select-none">
        <p>{email}</p>
        <p>{email}</p>
        <p>{email}</p>
        <p aria-hidden="true">{email}</p>
        <p aria-hidden="true">{email}</p>
        <p aria-hidden="true">{email}</p>
      </div>
    </div>
  );
}