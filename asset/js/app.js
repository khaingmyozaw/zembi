function copyEmail(element) {
    
    let text = $(element).text().trim();
    $(element).empty().text('copied');
    
    navigator.clipboard.writeText(text);
    setTimeout(() => {
        $(element).empty().text(text);
    }, 1000);
}