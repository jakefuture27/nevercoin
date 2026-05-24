document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');
    const caText = document.getElementById('ca-text').innerText;

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(caText);
            
            // Success feedback
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'COPIED!';
            copyBtn.style.backgroundColor = '#39FF14'; // Hacker green flash
            
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.backgroundColor = '#FFF200'; // Back to yellow
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            copyBtn.innerText = 'ERROR';
            setTimeout(() => {
                copyBtn.innerText = 'COPY';
            }, 2000);
        }
    });
});
