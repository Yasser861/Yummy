export function validate(){
    let nameInput=$('#nameInput').val();
    let ageInput=$('#ageInput').val();
    let phoneInput=$('#phoneInput').val();
    let emailInput=$('#emailInput').val();
    let passInput=$('#passInput').val();
    let rePassInput= $('#rePassword').val();
    let nameRegex= /^[a-zA-Z0-9_ ]{3,20}$/;
    let phoneRegex=/^01[0125][0-9]{8}$/;
    let ageRegex=/^([1-7][0-9]|80)$/;
    let passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return(nameRegex.test(nameInput) && phoneRegex.test(phoneInput) && passRegex.test(passInput) && ageRegex.test(ageInput) &&emailRegex.test(emailInput) && passRegex.test(rePassInput));
}