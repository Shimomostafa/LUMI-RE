function filtergallery(category, button) {
    var images = document.querySelectorAll('.image-g');
    var buttons = document.querySelectorAll('.filter-btn-gallery');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    if (button) {
        button.classList.add('active');
    }
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if (category == 'all' || image.classList.contains(category)) {
            image.style.setProperty('display', 'block', 'important');
        } else {
            image.style.display = 'none';
        }
    }
}

function filterartists(category, button) {
    var cards = document.querySelectorAll('#artists .card');
    var buttons = document.querySelectorAll('.filter-btn-artists');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    if (button) {
        button.classList.add('active');
    }
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if (category == 'all' || card.classList.contains(category)) {
            card.style.setProperty('display', 'flex', 'important');
        } else {
            card.style.setProperty('display', 'none', 'important');
        }
    }
}


function filtertimeline(category, button) {
    var sections = document.querySelectorAll('.sec');
    var buttons = document.querySelectorAll('.filter-btn-timeline');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    if (button) {
        button.classList.add('active');
    }
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        if (category == 'all' || section.classList.contains(category)) {
            section.style.setProperty('display', 'flex', 'important');
        } else {
            section.style.setProperty('display', 'none', 'important');
        }
    }
}

