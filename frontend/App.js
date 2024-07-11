
document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modal");
    let btn = document.getElementById("referBtn");
    let span = document.getElementsByClassName("close")[0];
    let form = document.getElementById("referralForm");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(form);

        // Convert form data to JSON object
        var referralData = Object.fromEntries(formData);

        fetch('http://localhost:5000/api/referrals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(referralData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    });

        // Save data to localStorage
        let stringifyEl = JSON.stringify(referralData);
        localStorage.setItem('referralData',stringifyEl);

        alert("Referral submitted successfully!");
        modal.style.display = "none";
    });

   /*  // Display saved referral data
    var savedData = localStorage.getItem('referralData');
    if (savedData) {
        console.log('Saved Referral Data:', JSON.parse(savedData));
    };
 */