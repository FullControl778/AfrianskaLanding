window.onload = function () {
    let overflow = document.createElement('div'),
        btnFooter = document.querySelector('#btnFooter');

    //вызов фомы по клику
    btnFooter.addEventListener("click", () => {
        overflow.className = 'overflow';
        document.body.appendChild(overflow);
        overflow.innerHTML = formHTML;
        stopProp();
    });

    //удаляет оверфлоу
    overflow.onclick = function () {
        overflow.remove();
    }




    $('.btn').click(function (event) {
        event.preventDefault();
    })

    $('.form__button-btn').click(function (event) {
        console.log('click')
        sendForm('result', 'form', 'action.php');
    })
}


// вставка формы
const formHTML = `
<div class="form form__modal" id="formModal">
    <div class="form-container form-modal-container">
        <h3 class="form__name">Send us message</h3>
        <form action="" method="post" class="contactForm contactFormModal">
            <div class="form__item">
                <label for="feedback-name" class="form__item-label">Full name</label>
                <input type="text" name="name" class="form__item-input form__item-input-name" id="feedback-name" placeholder="Your name">
            </div>
            <div class="form__item">
                <label for="feedback-email" class="form__item-label">Email</label>
                <input type="email" name="email" class="form__item-input" id="feedback-email" placeholder="Your email">
            </div>
            <div class="form__item">
                <label for="feedback-message" class="form__item-label">Message</label>
                <textarea class="form__item-input form__item-message" name="message" id="feedback-message"
                                      placeholder="Your message"></textarea>
            </div>
            <div class="form__button">
                            <button type="submit" class="form__button-btn btn">Submit</button>
            </div>
        </form>
    </div>
</div>`

// снимает кликубирающий оверлэй с формы
let stopProp = () => {
    let modal = document.querySelector('.form__modal');
    modal.addEventListener("click", (e) => {
        e.stopPropagation();
    })
}

function validateForm() {


    $(".form__button-btn").click(function (e) {
        console.log(e.target.closest(".contactForm"));
    })
}


//отправка формы

function sendForm(result, form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST",
        // dataType: "html", //формат данных
        data: $("#"+form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
            result = $.parseJSON(response);
            $('#result').html('Name: '+result.name+'<br>Email: '+result.email +'<br>Message: ' + result.message);
        },
        error: function(response) { // Данные не отправлены
            $('#result').html('Ошибка. Данные не отправлены.');
        }
    });
}