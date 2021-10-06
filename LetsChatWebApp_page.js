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
  room_name = localStorage.getItem("room_name");

  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }


  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
        } });  }); }
  getData();