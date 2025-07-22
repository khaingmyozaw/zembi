let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; // Get OS's theme

if (isDarkMode) {
    document.documentElement.classList.add('dark');
}

function copyEmail(element, data) {
    let text = data.trim();
    
    $(element).empty().text('copied');
    
    navigator.clipboard.writeText(text);
    setTimeout(() => {
        $(element).empty().text(text);
    }, 1000);
}