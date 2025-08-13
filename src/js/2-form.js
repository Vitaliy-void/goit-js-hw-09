const formData = {
    email: "",
    message: "" 
}

const input = document.querySelector('[name="email"]')
const textarea = document.querySelector('[name="message"]')
const form = document.querySelector('.feedback-form')



const feedback = localStorage.getItem("feedback-form-state")
if (feedback) {
    const parsedFeedback = JSON.parse(feedback)
    formData.email = parsedFeedback.email
    formData.message = parsedFeedback.message
    input.value = parsedFeedback.email
    textarea.value = parsedFeedback.message 
}

form.addEventListener('input', event => {
    const target = event.target
    if ((target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA') && target.name) {
        formData[target.name] = target.value
        localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    }
})

form.addEventListener('submit', event => {
     event.preventDefault();
    if (input.value.trim() === '' || textarea.value.trim() === '') {
        alert('«Fill please all fields»')
    } else {
        console.log(formData)
        localStorage.removeItem("feedback-form-state")
        input.value = ''
        textarea.value = ''
        formData.email = '';
formData.message = '';
    }
})

