/**
 * Holifya Referral Auto-Share - MOBILE OPTIMIZED
 * Handles both ?action=share and ?copy=true
 * Works on all mobile devices
 */

(function () {
  "use strict";

  // Configuration
  const CONFIG = {
    websiteUrl: "https://test-completo-del-dna.holifya.com",
  };

  // Get referral code from URL
  function getReferralCode() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    return code || "CONDIVIDI_DNA";
  }

  // Generate share message
  function getShareMessage(referralCode) {
    return `Ciao! Ho fatto il test del DNA Holifya e mi ha aiutato a capire cosa funziona davvero per me su alimentazione, sonno ed energia.

Con il mio codice hai €50 di sconto sul test completo.

Se ti interessa, è questo: ${referralCode}
👉 ${CONFIG.websiteUrl}`;
  }

  // Check if mobile device
  function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  // Show notification popup
  function showNotification(message, duration = 3000) {
    const existing = document.getElementById("holifya-share-notification");
    if (existing) existing.remove();

    const notification = document.createElement("div");
    notification.id = "holifya-share-notification";
    notification.innerHTML = message;
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #E8FFC9;
            color: #0B4650;
            padding: 20px 40px;
            border-radius: 16px;
            font-weight: 600;
            font-size: 16px;
            box-shadow: 0 10px 30px rgba(11, 70, 80, 0.3);
            z-index: 999999;
            animation: slideDown 0.3s ease;
            max-width: 90%;
            text-align: center;
        `;

    if (!document.getElementById("holifya-notification-style")) {
      const style = document.createElement("style");
      style.id = "holifya-notification-style";
      style.textContent = `
                @keyframes slideDown {
                    from { transform: translateX(-50%) translateY(-100px); opacity: 0; }
                    to { transform: translateX(-50%) translateY(0); opacity: 1; }
                }
            `;
      document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideDown 0.3s ease reverse";
      setTimeout(() => notification.remove(), 300);
    }, duration);
  }

  // MOBILE-OPTIMIZED Copy to clipboard
  function copyToClipboard(text) {
    // Method 1: Modern Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    // Method 2: Fallback for older browsers and mobile
    return new Promise((resolve, reject) => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      textarea.style.top = "0";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);

      // iOS Safari specific handling
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        const range = document.createRange();
        range.selectNodeContents(textarea);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textarea.setSelectionRange(0, 999999);
      } else {
        textarea.select();
        textarea.setSelectionRange(0, 999999);
      }

      try {
        const successful = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (successful) {
          resolve();
        } else {
          reject(new Error("Copy command failed"));
        }
      } catch (err) {
        document.body.removeChild(textarea);
        reject(err);
      }
    });
  }

  // Main auto-share function
  function autoShare() {
    const referralCode = getReferralCode();
    const shareMessage = getShareMessage(referralCode);

    // MOBILE: Try Web Share API (native share sheet)
    if (isMobile() && navigator.share) {
      navigator
        .share({
          title: "Test DNA Holifya",
          text: shareMessage,
        })
        .then(() => {
          console.log("Share completed");
          // Don't show notification - native UI handles it
        })
        .catch((error) => {
          // User cancelled or error occurred
          if (error.name !== "AbortError") {
            console.log("Share failed, falling back to copy:", error);
            fallbackToCopy(shareMessage);
          }
        });
    }
    // DESKTOP or no Web Share API: Copy to clipboard
    else {
      fallbackToCopy(shareMessage);
    }
  }

  // Fallback: Copy message to clipboard
  function fallbackToCopy(message) {
    copyToClipboard(message)
      .then(() => {
        showNotification("✅ Messaggio copiato!<br><small>Incollalo dove vuoi condividerlo</small>");

        // Track successful copy
        if (typeof gtag !== "undefined") {
          gtag("event", "referral_message_copied", {
            method: "clipboard",
          });
        }
      })
      .catch((error) => {
        console.error("Copy failed:", error);
        showNotification("⚠️ Copia manualmente il messaggio", 5000);
      });
  }

  // Initialize - Check URL for action=share OR copy=true
  function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get("action");
    const copy = urlParams.get("copy");

    // Trigger if action=share OR copy=true
    if (action === "share" || copy === "true") {
      // Wait for page to fully load
      setTimeout(() => {
        autoShare();

        // Clean URL (remove action/copy parameter) without reload
        if (window.history && window.history.replaceState) {
          const paramsToKeep = Array.from(urlParams.entries()).filter(([key]) => key !== "action" && key !== "copy");

          let cleanUrl = window.location.pathname;
          if (paramsToKeep.length > 0) {
            cleanUrl += "?" + paramsToKeep.map(([key, value]) => `${key}=${value}`).join("&");
          }

          window.history.replaceState({}, "", cleanUrl);
        }
      }, 800);
    }
  }

  // Run when page loads
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
