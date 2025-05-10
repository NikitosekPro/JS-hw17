const MyButton = document.querySelector("#button-input")
const MyInput = document.querySelector("#text-input")
MyButton.textContent=MyInput.value
console.log(MyButton, MyInput);
console.log(MyButton.textContent);



const imgOfDog = document.querySelector(".dog-picture");
imgOfDog.src =
"https://fbi.cults3d.com/uploaders/31101980/illustration-file/742d4826-51ab-47cb-87b4-0779a5b574f6/tralalero.jpg";
console.log(imgOfDog.src);


const ImgOfDog = document.querySelector(".guy");
console.log(ImgOfDog);

ImgOfDog.alt = "cat";

const linkOfDog = document.querySelector(".link-a");
console.log(linkOfDog);

linkOfDog.href = "https://media.istockphoto.com/id/1716659440/photo/joyful-african-american-man-holding-plate-of-chips-and-biting-snack-on-yellow-isolated.jpg?s=612x612&w=0&k=20&c=nqAGcJczyaFdE1_uMuF7lQPubQih7VNDycH5met20Yo="
