// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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