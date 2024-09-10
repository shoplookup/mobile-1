'use client';

import React from 'react'
import Script from "next/script";

const ChatBot = () => {
  return (
    <div>
      <Script
          id="tars-widget"
          strategy="lazyOnload"
          src="https://tars-file-upload.s3.amazonaws.com/bulb/js/widget.js"
          onLoad={() => {
            window.tarsSettings = { convid: "04jZvk", href: "https://chatbot.hellotars.com/conv/04jZvk" };
          }}
        />
    </div>
  )
}

export default ChatBot
