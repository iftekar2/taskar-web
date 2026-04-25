import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const WAITLIST_THANK_YOU_VIDEO_SRC =
  "https://content.bombbomb.com/2b290858-e95e-452b-9306-9d42816aedd1_H264Main.mp4";

function WaitlistSignupMessage({
  isOpen,
  onClose,
  firstName = "",
  videoSrc = WAITLIST_THANK_YOU_VIDEO_SRC,
}) {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const videoEl = videoRef.current;

    setVideoFailed(false);

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Ensure the clip starts at 0 and stays paused — user starts playback via controls.
    requestAnimationFrame(() => {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      videoEl?.pause();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const greeting = firstName
    ? `Thanks, ${firstName}! You're on the list.`
    : "Thanks! You're on the waitlist.";

  return createPortal(
    <Backdrop
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-thank-you-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <CloseButton type="button" onClick={onClose} aria-label="Close">
          ×
        </CloseButton>
        <Title id="waitlist-thank-you-title">{greeting}</Title>
        <Subtitle>Here's a quick Thank You from us.</Subtitle>

        {videoFailed ? (
          <FallbackMessage>
            We couldn&apos;t load the video, but your spot is saved. We&apos;ll
            be in touch soon.
          </FallbackMessage>
        ) : (
          <VideoWrap>
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              playsInline
              preload="metadata"
              onError={() => setVideoFailed(true)}
            />
            <MutedHint>
              Press play to watch. Use the player controls for sound.
            </MutedHint>
          </VideoWrap>
        )}

        <DoneButton type="button" onClick={onClose}>
          Close
        </DoneButton>
      </ModalCard>
    </Backdrop>,
    document.body,
  );
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(4px);
`;

const ModalCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 560px;
  background-color: #111111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 28px 24px 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const Title = styled.h2`
  margin: 0 40px 8px 0;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.3;
`;

const Subtitle = styled.p`
  margin: 0 0 20px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.95rem;
  line-height: 1.4;
`;

const VideoWrap = styled.div`
  width: 100%;

  video {
    display: block;
    width: 100%;
    border-radius: 12px;
    background: #000;
    max-height: min(50vh, 320px);
    object-fit: contain;
  }
`;

const MutedHint = styled.p`
  margin: 10px 0 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.4;
`;

const FallbackMessage = styled.p`
  margin: 0;
  padding: 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  line-height: 1.5;
`;

const DoneButton = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: white;
  color: black;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition:
    transform 0.2s,
    background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
    transform: translateY(-1px);
  }
`;

export default WaitlistSignupMessage;
