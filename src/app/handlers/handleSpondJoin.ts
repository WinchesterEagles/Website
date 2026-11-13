export const handleSpondJoin = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
  const isAndroid = /android/i.test(userAgent);

  if (isIOS) {
    e.preventDefault();
    // Opens App Store on iOS safely
    window.location.href = "https://apps.apple.com/app/spond/id1045763073";
  } else if (isAndroid) {
    e.preventDefault();
    // Native Android Intent scheme specifically targeting UK/en locale store as fallback
    window.location.href = 
      "intent://spond.com/#Intent;scheme=https;package=com.spond.spond;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.spond.spond%26hl%3Den_GB;end";
  }
};