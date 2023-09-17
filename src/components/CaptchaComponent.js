"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CaptchaComponent = () => {
  const [captcha, setCaptcha] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_TOKEN' with your actual Cloudflare API token.
    const apiToken = 'YOUR_API_TOKEN';

    // Make a POST request to create a CAPTCHA challenge.
    axios.post('https://api.cloudflare.com/client/v4/captcha',
      {
        zone_id: 'YOUR_ZONE_ID', // Replace with your Cloudflare zone ID.
        // You can customize the CAPTCHA settings here.
        // For example, setting 'captcha_type' to 'hCaptcha' or 'reCaptcha'.
      },
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      }
    )
    .then((response) => {
      setCaptcha(response.data.result);
    })
    .catch((error) => {
      console.error('Error creating CAPTCHA challenge:', error);
    });
  }, []);

  return (
    <div>
      {captcha ? (
        <div dangerouslySetInnerHTML={{ __html: captcha.script }} />
      ) : (
        <p>Loading CAPTCHA...</p>
      )}
    </div>
  );
};

export default CaptchaComponent;
