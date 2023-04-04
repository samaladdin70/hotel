function tNavHandle() {
    if (screen.width >= topNavHandle.medium) {
        if (window.innerWidth >= topNavHandle.medium) {
            topNavHandle.md();
        } else if (window.innerWidth < topNavHandle.medium) {
            topNavHandle.sm();
        }
    } else {
        topNavHandle.sm();
    }

}

let topNavHandle = {
    small: '576',
    medium: '768',
    large: '992',
    xlarage: '1200',
    md: function tNavMdHandle() {
        if (document.documentElement.scrollTop > 0) {
            document.querySelector('.navbar').classList.remove('position-absolute');

            document.querySelector('.navbar').classList.remove('sticky-top');
            document.querySelector('.navbar').classList.add('sticky-top');

            document.querySelector('.navbar').classList.remove('bg-light');
            document.querySelector('.navbar').classList.add('bg-light');
            document.querySelector('.navbar').classList.remove('shadow');
            document.querySelector('.navbar').classList.add('shadow');

            document.querySelectorAll('.nav-link').forEach(element => {
                element.classList.remove('text-secondary');
                element.classList.add('text-secondary');
            });

        } else {
            document.querySelector('.navbar').classList.remove('sticky-top');

            document.querySelector('.navbar').classList.remove('position-absolute');
            document.querySelector('.navbar').classList.add('position-absolute');

            document.querySelector('.navbar').classList.remove('bg-light')
            document.querySelector('.navbar').classList.remove('shadow');

            document.querySelectorAll('.nav-link').forEach(element => {
                element.classList.remove('text-secondary');

            });
        }
    },

    sm: function tNavSmHandle() {
        document.querySelector('.navbar').classList.remove('position-absolute');

        document.querySelector('.navbar').classList.remove('sticky-top');
        document.querySelector('.navbar').classList.add('sticky-top');

        document.querySelector('.navbar').classList.remove('bg-light');
        document.querySelector('.navbar').classList.add('bg-light');
        document.querySelector('.navbar').classList.remove('shadow');
        document.querySelector('.navbar').classList.add('shadow');
        document.querySelectorAll('.nav-link').forEach(element => {
            element.classList.remove('text-secondary');
            element.classList.add('text-secondary');
        });
    }


}

