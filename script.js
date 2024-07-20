const Password=document.getElementById("Password");
function copy() {
    if (Password.value === "") {
        alert("Generate a password first!");
        return;
    }

    Password.select();
    Password.setSelectionRange(0, Password.value.length); // For mobile devices
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="/.,;'[]=-`!@#$%^&*()";

const allcharacters= uppercase + lowercase + number + symbol;
function Generate(){
    let password="";
password +=uppercase[Math.floor(Math.random() * uppercase.length)];
password += lowercase[Math.floor(Math.random() * lowercase.length)];
password +=number[Math.floor(Math.random() * number.length)];
password +=symbol[Math.floor(Math.random() * symbol.length)];

while(length > password.length){
    password +=allcharacters[Math.floor(Math.random() * allcharacters.length)];
}
Password.value =password;
}
