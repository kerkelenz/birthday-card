const pages = ["page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8", "page9", "page10", "page11"];
let currentPage = 0;

function pageFlip() {
    var current = document.getElementById(pages[currentPage++]);
    if (pages[currentPage]) {
        var next = document.getElementById(pages[currentPage]);
    } else {
        currentPage = 0;
        var next = document.getElementById(pages[currentPage]);
}
current.style.display = 'none';
next.style.display = 'block';
}

function pageBack() {
    var current = document.getElementById(pages[currentPage--]);
    if (pages[currentPage]) {
        var next = document.getElementById(pages[currentPage]);
    } else {
        currentPage = 0;
        var next = document.getElementById(pages[currentPage]);
}
current.style.display = 'none';
next.style.display = 'block';
}