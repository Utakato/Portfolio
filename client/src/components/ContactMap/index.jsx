import {MapContainer, TileLayer,Marker, Popup} from "react-leaflet"

const ContactMap = () => {
    const clujNapoca = [46.7712, 23.5906]

    return (
            <MapContainer 
                center={clujNapoca} 
                zoom={6} 
                style={{ width: '100%', height: '300px'}}
            >
                <TileLayer
                    url="https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=24fc68c14528438392de6dbf91ddefc0"
                />
                <Marker position={clujNapoca}>
                    <Popup>
                        Based in Cluj-Napoca, Romania
                    </Popup>
                </Marker>
            </MapContainer>
    )
}

export default ContactMap
