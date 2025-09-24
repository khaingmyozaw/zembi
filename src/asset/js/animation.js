$(document).ready(function () {

    const showMenu = () => {
        $('#mobile-menu').toggleClass('translate-y-16 -translate-y-1/2')
        $('#menu-btn div').toggleClass('active');
    }

    $('#menu-btn, #mobile-menu a').on('click', function () {
        showMenu();
    });

    const cons = 'console.';

    // Appending effect to the pre element
    function typeEffect(text, className, callback, wrapper = '#codeview') {
        let index = 0;
        let span = $('<span>', {
            class: className,
        }).appendTo($(wrapper));
        let cursor = $('<span>', {
            class: 'cursor'
        }).appendTo($(wrapper));

        // Typing characters one by one
        function startTyping() {
            if (index < text.length) {
                span.append(text.charAt(index));
                index++;
                // recurrsive this function according to text's length
                setTimeout(startTyping, 80);
            } else {
                if (callback) {
                    cursor.remove();
                    callback();
                }
            }
        }

        startTyping(span, text, index);

    }
    typeEffect('console.', 'text-teal-300', () => {
        typeEffect('log(', 'text-blue-400', () => {
            typeEffect('"Hello, world!"', 'text-green-400', () => {
                typeEffect(')', 'text-blue-400', () => {
                    typeEffect(';', '', () => {
                        $('#codeview').append($('<br><br>'))
                        typeEffect('const ', 'text-teal-300', () => {
                            typeEffect('name ', 'text-yellow-300', () => {
                                typeEffect('= ', '', () => {
                                    typeEffect('"Khaing Myo Zaw"', 'text-green-400', () => {
                                        typeEffect(';', '', () => {
                                            // Second Variable
                                            $('#codeview').append($('<br>'))
                                            typeEffect('let ', 'text-teal-300', () => {
                                                typeEffect('position ', 'text-yellow-300', () => {
                                                    typeEffect('= ', '', () => {
                                                        typeEffect('"Web Developer"', 'text-green-400', () => {
                                                            typeEffect(';', '');
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
})