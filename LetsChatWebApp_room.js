var firebaseConfig = {
      apiKey: "AIzaSyCaS8oHK-sgX0HUaO6QzzEBf_jVo9NuW2M",
      authDomain: "letschatwebapp-94e2c.firebaseapp.com",
      databaseURL: "https://letschatwebapp-94e2c-default-rtdb.firebaseio.com/",
      projectId: "letschatwebapp-94e2c",
      storageBucket: "letschatwebapp-94e2c.appspot.com",
      messagingSenderId: "68642080998",
      appId: "1:68642080998:web:911dd569e0fae9b58b5327"
    };

    firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function AddRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                porpuse : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "LetsChatWebApp_page.html";
    }

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name)
     {
           console.log(name);
           localStorage.setItem("room_name", name);
           window.location = "kwitter_page.html";
     }

     function logout()
     {
           localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
           window.location = "LetsChatWebApp.html"
     }