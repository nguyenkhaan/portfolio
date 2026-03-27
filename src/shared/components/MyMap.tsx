const MyMap = () => {
    return (
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0708409363915!2d106.77992637532036!3d10.882216557232907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d89aad780e49%3A0x54542761d4c22175!2zVHJ1bmcgdMOibSBRdeG6o24gbMO9IEvDvSB0w7pjIHjDoSB2w6AgS2h1IMSRw7QgdGjhu4sgxJBIUUctSENN!5e0!3m2!1svi!2s!4v1774587285275!5m2!1svi!2s" // Dùng link chính thức từ Google Maps
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};
export default MyMap;
