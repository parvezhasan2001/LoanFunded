document.addEventListener('DOMContentLoaded', function() {
     const donationForm = document.getElementById('donate');
 
     donationForm.addEventListener('submit', async function(event) {
         event.preventDefault();
         const formData = new FormData(donate);
         const contact_number = formData.get('contact_number');
         const amount = formData.get('amount');
         const user_id = formData.get('user_id');
         const event_id = formData.get('event_id');
 
         try {
             const response = await fetch('E:\Web Project\Frontend\Donate\donation', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({ contact_number,amount, user_id, event_id })
             });
 
             const data = await response.json();
             if (data.success) {
                 // Handle successful donation
                 console.log('Donation successful. Donation ID:', data.donationId);
             } else {
                 // Handle donation failure
                 console.error('Donation failed.');
             }
         } catch (error) {
             console.error('Error during donation:', error);
         }
     });
 });
 