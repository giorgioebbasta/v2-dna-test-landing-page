/**
 * Holifya Referral Auto-Share
 * Simple script to auto-trigger share when ?action=share is in URL
 * Add this to your existing website - NO landing page needed
 */

(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        websiteUrl: 'https://test-completo-del-dna.holifya.com',
        codePrefix: 'AMICO50_'
    };
    
    // Get referral code from URL
    function getReferralCode() {
        const urlParams = new URLSearchParams(window.location.search);
        const referralName = urlParams.get('referral') || 'AMICO';
        return CONFIG.codePrefix + referralName.toUpperCase();
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
        // Remove existing notification
        const existing = document.getElementById('holifya-share-notification');
        if (existing) existing.remove();
        
        // Create notification
        const notification = document.createElement('div');
        notification.id = 'holifya-share-notification';
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
        
        // Add animation
        if (!document.getElementById('holifya-notification-style')) {
            const style = document.createElement('style');
            style.id = 'holifya-notification-style';
            style.textContent = `
                @keyframes slideDown {
                    from { transform: translateX(-50%) translateY(-100px); opacity: 0; }
                    to { transform: translateX(-50%) translateY(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Auto remove
        setTimeout(() => {
            notification.style.animation = 'slideDown 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }
    
    // Copy to clipboard (fallback for desktop)
    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            return new Promise((resolve, reject) => {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    resolve();
                } catch (err) {
                    document.body.removeChild(textArea);
                    reject(err);
                }
            });
        }
    }
    
    // Main auto-share function
    function autoShare() {
        const referralCode = getReferralCode();
        const shareMessage = getShareMessage(referralCode);
        
        // MOBILE: Try Web Share API
        if (isMobile() && navigator.share) {
            navigator.share({
                title: 'Test DNA Holifya',
                text: shareMessage
            })
            .then(() => {
                console.log('Share completed');
            })
            .catch((error) => {
                // User cancelled or error occurred
                if (error.name !== 'AbortError') {
                    console.log('Share failed:', error);
                    // Fallback to copy
                    fallbackToCopy(shareMessage);
                }
            });
        } 
        // DESKTOP: Copy to clipboard
        else {
            fallbackToCopy(shareMessage);
        }
    }
    
    // Fallback: Copy message to clipboard
    function fallbackToCopy(message) {
        copyToClipboard(message)
            .then(() => {
                showNotification('✅ Messaggio copiato!<br><small>Incollalo dove vuoi condividerlo</small>');
            })
            .catch((error) => {
                console.error('Copy failed:', error);
                showNotification('⚠️ Copia manualmente il messaggio', 5000);
            });
    }
    
    // Initialize - Check URL for action=share
    function init() {
        const urlParams = new URLSearchParams(window.location.search);
        const action = urlParams.get('action');
        
        // If action=share, auto-trigger after page loads
        if (action === 'share') {
            // Wait a moment for page to fully load
            setTimeout(() => {
                autoShare();
                
                // Clean URL (remove action parameter) without reload
                if (window.history && window.history.replaceState) {
                    const cleanUrl = window.location.pathname + '?' + 
                        Array.from(urlParams.entries())
                            .filter(([key]) => key !== 'action')
                            .map(([key, value]) => `${key}=${value}`)
                            .join('&');
                    window.history.replaceState({}, '', cleanUrl);
                }
            }, 800);
        }
    }
    
    // Run when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
