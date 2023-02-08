async function locateCity(city) {
    let response = await fetch("https://geocode.xyz/" + city + "?json=1");
    console.log("\n" + city);
    if (response.ok) {
        let json = await response.json();
        if (json.error) {
            console.log("Error: " + json.error.description);
        } else {
        //console.log(json);
        let longitude = json.longt;
        let latitude = json.latt;
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
        }

    } else {
        console.log("HTTP Error: " + response.status)

    }
}

locateCity("seattle");
locateCity("nonsense");