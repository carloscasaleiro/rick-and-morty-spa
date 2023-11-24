export function goBack(classes, content = '', href) {
    const link = $('<a>');

    if (href) {
        link.attr({ href });
    }

    return link.append($('<h1>').text(content).addClass(classes));
}