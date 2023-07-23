import { useEffect } from "react"

const Gallery = () => {
    const images = [

        { id: 1, src: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: 'Academic Honor' },
        { id: 2, src: 'https://images.unsplash.com/photo-1623461487986-9400110de28e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Commencement Joy' },
        { id: 3, src: 'https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', alt: 'Graduation Elation' },
        { id: 4, src: 'https://images.unsplash.com/photo-1621376225372-c86f16f47a09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: 'Degree Triumph' },

        { id: 5, src: 'https://images.unsplash.com/photo-1658235081452-c2ded30b8d9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1114&q=80', alt: 'Diploma Proud' },
        { id: 6, src: 'https://images.unsplash.com/photo-1607013407627-6ee814329547?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', alt: 'Achievement Gala' },
        { id: 7, src: 'https://images.unsplash.com/photo-1639765766830-d829d2fe4219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: 'Success Gala' },
        { id: 8, src: 'https://images.unsplash.com/photo-1627556704314-1f7aee38ec57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', alt: 'Cap Toss' },
   
        { id: 9, src: 'https://images.unsplash.com/photo-1593985887762-955dccf2b71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: 'Certificate Glory' },
        { id: 10, src: 'https://images.unsplash.com/photo-1543949146-bc9e028e1918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', alt: 'Accomplishment Fête' },
        { id: 11, src: 'https://images.unsplash.com/photo-1589696709103-c76bf8b5fa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: 'Convocation Cheer' },
        { id: 12, src: 'https://images.unsplash.com/photo-1624727828618-ee42ef2ec5cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', alt: 'Recognition Festivity' },
      
      ];
    
      useEffect(() => {
        AOS.init(); 
      }, []);


    return (
        <div className="bg-white">
            <div className= "mx-auto max-w-screen-xl px-4 py-16 pt-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl mb-5 text-black font-bold text-center">Experience the impact of our graduate stars.</h2>
                <p className="text-center text-gray-700">Immerse yourself in a captivating gallery that celebrates the remarkable accomplishments and talents of our exceptional graduate students. Discover the brilliance and impact of our rising stars as they shape the future with their dedication and innovation.</p>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((image) => (
                    <div key={image.id} className="p-2" data-aos="zoom-in" data-aos-duration="500">
                        <div className="relative">
                        <img src={image.src} alt={image.alt} className="w-full h-auto" />
                        <div className="absolute bottom-0 left-0 right-0 bg-opacity-75 bg-gray-900 p-2 text-white">
                            <h4 className="text-lg font-bold">{image.alt}</h4>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Gallery;