import { characters as route } from '../../routes.js';
import { goTo } from '../../navigation.js';

const arrowLeft = 'fa-solid fa-2x fa-circle-arrow-left';
const arrowRight = 'fa-solid fa-2x fa-circle-arrow-right';

const navigationArrow = (url, classes) => {
    const link = $('<a>').css({ visibility: url ? 'visible' : 'hidden' });

    if (url) {
        const parameter = url.split('?')[1];
        link.attr({ href: `${route.hash}?${parameter}` });
    }

    return link.append($('<i>').addClass(classes));
};

const searchField = () =>
    $('<input>')
        .attr({
            type: 'search',
            placeholder: 'Search name',
            autocomplete: 'off',
            id: "searchField"
        })
        .change((event) => goTo(`${route.hash}?name=${event.target.value}`));

export function navbar(data) {
    return $('<nav>')
        .addClass('navbar')
        .append(navigationArrow(data.previous, arrowLeft))
        .append(searchField())
        .append(navigationArrow(data.next, arrowRight));
}