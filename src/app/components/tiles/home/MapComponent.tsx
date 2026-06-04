export default function MapComponent() {
    // Enlace actualizado con las coordenadas/búsqueda de Alcampo La Villa, La Orotava
    const tenerifeEmbedUrl = "https://maps.google.com/maps?q=Alcampo%20La%20Villa,%20La%20Orotava,%20Tenerife&t=&z=14&ie=UTF8&iwloc=&output=embed";

    return (
        <div className="w-full h-full relative">
            <iframe
                title="Mapa de Tenerife"
                src={tenerifeEmbedUrl}
                className="w-full h-full border-0 filter transition duration-500 dark:[filter:grayscale(100%)_invert(92%)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            />
        </div>
    );
}