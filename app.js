// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALgFjyRkGXHQ_yK4WDMDH9jfTn368a7nQ",
  authDomain: "aaaa-3b716.firebaseapp.com",
  databaseURL: "https://aaaa-3b716-default-rtdb.firebaseio.com",
  projectId: "aaaa-3b716",
  storageBucket: "aaaa-3b716.firebasestorage.app",
  messagingSenderId: "154281961594",
  appId: "1:154281961594:web:df176f71265c1c5d8473c3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Form submission handler
document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    try {
        // Add data to Firestore
        await db.collection('formSubmissions').add({
            name: name,
            email: email,
            phone: phone,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Show success message
        document.getElementById('successMessage').classList.remove('d-none');
        
        // Reset form
        document.getElementById('dataForm').reset();
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            document.getElementById('successMessage').classList.add('d-none');
        }, 3000);

    } catch (error) {
        console.error("Error adding document: ", error);
        alert("حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.");
    }
}); 
