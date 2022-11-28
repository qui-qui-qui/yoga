function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы скоро с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');
    
    form.addEventListener('submit', function(elem) {
        elem.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');

                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                    request.addEventListener('readystatechange', function() {
                                if (request.readyState < 4) {
                                    resolve()
                                } else if (request.readyState == 4 && request.status == 200) {
                                    resolve()
                                } else {
                                    reject()
                                }
                            });

                    request.send(data);
                })
            } //End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                            input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
    });
}

module.exports = form;