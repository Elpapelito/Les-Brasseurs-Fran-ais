
    // variable


    // function

function initMap() {
    // Styles a map in night mode.







    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.416642, lng: 1.015979 },
        zoom: 16,
        mapId: '42a2fe80b994c7c0',
        disableDefaultUI: true,


    });


    function addMarkers(map) {
        const locations = {
            LBF: { lat: 47.416642, lng: 1.015979 }
        }
        const markers = [];
        for (const location in locations) {
            const markerOptions = {
                map: map,
                position: locations[location],
                icon: 'Ressources/Images/logo-gravue3.png'
            }
            const marker = new google.maps.Marker(markerOptions);
            markers.push(marker);
        }
        return markers;
    }

    
    loader.then(() => {
        console.log('Maps JS API loaded');
        const map = displayMap();
        const markers = addMarkers(map);
    })
    




}





window.initMap = initMap;