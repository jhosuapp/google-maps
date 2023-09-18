//CONEX TO API
import ConectToApi from './apiMap';

function initMap() {
    //Obtenemos los datos dinamicos desde la api
    ConectToApi()
        .then((res)=>{
            res.forEach((data)=>{
                //Desestructuramos el json
                const { lat, lng, route_image, name_place, description_place } = data;
                const ubication = { lat, lng };
                // Opciones del mapa
                const optionsMap = {
                    center: ubication,
                    zoom: 10
                };

                //Icono personalizado
                const personalityIcon = {
                    url: 'https://primax.com.pe/wp-content/uploads/2023/09/image-55.svg',
                    scaledSize: new google.maps.Size(50, 50)
                }

                // Crear el mapa
                const createMap = new google.maps.Map(document.getElementById('map'), optionsMap);

                // Marcador en la ubicación
                const optionsMarker = {
                    position: ubication,
                    map: createMap,
                    title: 'Test ubication',
                    icon: personalityIcon
                };

                // Crear el marcador con la imagen personalizada
                const marker = new google.maps.Marker(optionsMarker);

                // Contenido HTML de la ventana emergente del marcador
                const contentInfoWindow = `
                    <picture class="map__image">
                        <img src='${route_image}' style="max-width: 300px;">
                    </picture>
                    <div class="map__content">
                        <p class="map__place-name">${name_place}</p>
                        <p class="map__place-description">${description_place}</p>
                    </div>
                `;

                // Crear una ventana emergente para el marcador
                const infoWindow = new google.maps.InfoWindow({
                    content: contentInfoWindow
                });

                //Evento para mostrar el popup
                marker.addListener('click', function() {
                    console.log(infoWindow);
                    infoWindow.open(map, marker);
                    setTimeout(()=>{
                        infoWindow.close(infoWindow);
                    }, 1500)
                });  

            });
            // Coordenadas de la ubicación que deseas mostrar
        }).catch(err=>{
            console.log(err)
        });
}

export default initMap;