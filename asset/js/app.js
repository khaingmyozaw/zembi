// let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; // Get OS's theme

// if (isDarkMode) {
//     document.documentElement.classList.add('dark');
// }
function toggleTheme(btn) {
    $('html').toggleClass('dark');
    if ($('html').hasClass('dark')) {
        btn.find('img').attr('src', './asset/images/svgs/moon.svg')
    }else {
        btn.find('img').attr('src', './asset/images/svgs/sun.svg')
    }
}

function copyEmail(element, data) {
    let text = data.trim();
    
    $(element).empty().text('copied');
    
    navigator.clipboard.writeText(text);
    setTimeout(() => {
        $(element).empty().text(text);
    }, 1000);
}