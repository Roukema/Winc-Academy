var map;
function initMap() {
  const WincHQ = { lat: 52.37836, lng: 4.85471 };
  const IJmuiden = { lat: 52.46077, lng: 4.62511 };
  const Amsterdam = { lat: 52.373169, lng: 4.89066 };
  const Utrecht = { lat: 52.091259, lng: 5.12275 };
  const Haarlem = { lat: 52.37949, lng: 4.63772 };
  const DenHaag = { lat: 52.080189, lng: 4.31013 };
  const Rotterdam = { lat: 51.922909, lng: 4.47059 };
  const Tilburg = { lat: 51.555119, lng: 5.09049 };

  var icons = {
    WincLogo: {
      icon:
        "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb1f479f5-69f7-4427-9c42-bc7d2af82a26%2Fwinc-round.png?table=block&id=dfa6a795-a488-464d-b716-a7a3a596472f&width=3200&cache=v2"
    }
  };

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.090736, lng: 5.12142 },
    zoom: 9
  });
  const createMarker = placeLatitude => {
    const Marker = new google.maps.Marker({
      position: placeLatitude,
      icon: icons.WincLogo.icon,
      map: map
    });
    return Marker;
  };

  const places = [
    WincHQ,
    IJmuiden,
    Amsterdam,
    Utrecht,
    Haarlem,
    DenHaag,
    Rotterdam,
    Tilburg
  ];

  places.forEach(place => createMarker(place));
}

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
  // doSomethingWithData();
});
