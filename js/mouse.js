document.querySelectorAll('.interactive-text').forEach(text => {
    text.addEventListener('mousemove', (e) => {
        const rect = text.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        text.style.setProperty('--x', `${x}px`);
        text.style.setProperty('--y', `${y}px`);
    });
});