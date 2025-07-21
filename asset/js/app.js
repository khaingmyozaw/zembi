function copyEmail(element, data) {
    let text = data.trim();
    
    $(element).empty().text('copied');
    
    navigator.clipboard.writeText(text);
    setTimeout(() => {
        $(element).empty().text(text);
    }, 1000);
}