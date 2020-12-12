const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn'); 




const database = firebase.database();
f
const usersRef = database.ref('/users');
const contraRef = database.ref('/users/' + firstName.value);
const normalUsersRef = usersRef.child('normal_users');
const superUsersRef = usersRef.child('super_users');


addBtn.addEventListener('click', e => {
    e.preventDefault();
    usersRef.child(firstName.value).set({
      first_name: firstName.value,
      last_name: lastName.value,
      age: age.value
    });
    

    if (firstName.value == "Holi")
    {
        var stringpass = document.getElementById('passwordtxt');
        var refh = database.ref().child('users/' + firstName.value +'/last_name');
        refh.on('value',snapshot =>
            stringpass.innerText = snapshot.val());
    }
    
});
