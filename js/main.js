document.addEventListener('DOMContentLoaded', function () {
    let namesArray = ['Miran', 'Amiran', 'Mikael', 'Liam', 'Kemal'];
    let cityArray = ['Kyiv', 'epvnf', 'test'];
    let alert = document.querySelector('.alert');
    let alertName = alert.querySelector('.alert__name');
    let alertCity = alert.querySelector('.alert__city');
    let alertCount = alert.querySelector('.alert__count');
    let clsAlertShow = 'alert--show';
    let alertInterval = null;
    alertInterval = setInterval(intervalHandler, getRandom(26000, 34000));

    function intervalHandler() {
        if (alert.classList.contains(clsAlertShow)) {
            clearInterval(alertInterval);
            alertInterval = setInterval(intervalHandler, getRandom(26000, 34000));
            return;
        }
        createAlertMessage();
        alertShow();
        setTimeout(function () {
            alertHidden();
        }, 10000);
    }

    function createAlertMessage() {
        let name = namesArray[getRandom(0, namesArray.length - 1)];
        let city = cityArray[getRandom(0, cityArray.length - 1)];
        let count = getRandom(2, 4);
        alertName.textContent = name;
        alertCity.textContent = city;
        alertCount.textContent = count;
    }

    function alertShow() {
        alert.classList.add(clsAlertShow);
    }

    function alertHidden() {
        alert.classList.remove(clsAlertShow);
    }

    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const scrollTopBtn = document.getElementById('scrollTop__btn');
    scrollTopBtn.style.display = 'none';

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
});