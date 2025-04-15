// Your Firebase config
var firebaseConfig = {
    apiKey: "AIzaSyDUIfWNqiuKmvkuyO3qrW3KGpM1xBzVSvM",
    authDomain: "gaynai.firebaseapp.com",
    databaseURL: "https://gaynai-default-rtdb.firebaseio.com",
    projectId: "gaynai",
    storageBucket: "gaynai.firebasestorage.app",
    messagingSenderId: "318965210279",
    appId: "1:318965210279:web:bf7d274634998873e98f82",
    measurementId: "G-68071VGV5K"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  // Create
  function createData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    database.ref('users/' + name).set({
      username: name,
      email: email
    });
  
    document.getElementById("output").innerText = "✅ Data Created!";
  }
  
  // Read
  function readData() {
    var name = document.getElementById('name').value;
  
    database.ref('users/' + name).once('value').then(function(snapshot) {
      if (snapshot.exists()) {
        var data = snapshot.val();
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
      } else {
        document.getElementById("output").innerText = "❌ No data found.";
      }
    });
  }
  
  // Update
  function updateData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    database.ref('users/' + name).update({
      email: email
    });
  
    document.getElementById("output").innerText = "🔄 Data Updated!";
  }
  
  // Delete
  function deleteData() {
    var name = document.getElementById('name').value;
  
    database.ref('users/' + name).remove();
    document.getElementById("output").innerText = "🗑️ Data Deleted!";
  }
  