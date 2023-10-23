const inputField = document.getElementById('input_name');

input_name.addEventListener('input', function(){
    inputField.value = inputField.value.replace(/[^а-яА-ЯёЁ ]/g,'');
})

const inputNumber = document.getElementById('inputPhone')

inputPhone.addEventListener('input', function(){
    inputNumber.value = inputNumber.value.replace(/[^0-9 ]/g,'');
    inputNumber.value = inputNumber.value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
    inputNumber.value = inputNumber.value.replace(/(\d{inputNumber.value.length})/, '$1');
})



const inputTelegram = document.getElementById('inputTg')

inputTg.addEventListener('input', function(){
    inputTelegram.value = inputTelegram.value.replace(/[^a-zA-Z@_0-9]/g,'');
    if (inputTelegram.value[0] !== '@' && inputTelegram.value !== ''){
        inputTelegram.value = '@' + inputTelegram.value
    }
})

input_name.addEventListener('input', function(){
    if (inputField.value == ''){
        output_name.innerHTML = 'Место для имени'
    }
    else {
        output_name.innerHTML = inputField.value.replace(/[^а-яА-ЯёЁ ]/g,'');
    }
})

const inputField1 = document.getElementById('input_name1');

input_name1.addEventListener('input', function(){
    if (inputField1.value == ''){
        output_name1.innerHTML = 'О себе';
    }
    else {
        output_name1.innerHTML = inputField1.value;
    }
})

const inputImage = document.getElementById('input_image');


input_image.addEventListener('input', function(){
    const [file] = inputImage.files;
    if (file) {
        blah.src = URL.createObjectURL(file);
    }
    image_title.innerHTML = '';

})

/* const input_full = document.querySelectorAll('input[type="text"]')
const buttonContinue = document.getElementById('Continue')

function button_cont(){
    let flag = true;
    for(i=0;i<input_full.length;i++){
        if (input_full[i] =='') {
            buttonContinue.classname="button_continue_disable";
            flag = false;
            buttonContinue.disabled = true;
            buttonContinue.className = "button_continue_disabled"
        }
    }
    if (flag === true) {
        buttonContinue.classname="button_continue";
        buttonContinue.disabled = false;
        buttonContinue.className = "button_continue"
    }
}
button_cont() */