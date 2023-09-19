import Script from 'next/script';

const CloudflareTurnstile = () => {
  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></Script>
      <div className="cf-turnstile" data-sitekey="0x4AAAAAAAKTDe6f-KqwG_iW" data-theme="light" data-callback="javascriptCallback"></div>
    </>
  );
};

export default CloudflareTurnstile;
