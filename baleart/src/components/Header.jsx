import Navbar from './Navbar'
export default function Header() {
    return(
        <>
            {/* Banner Image */}
            <div
                className="w-full h-32 bg-cover bg-center"
                style={{ backgroundImage: 'url("path/to/your/banner-image.jpg")' }}
            >
                {/* Optional content inside the banner */}
                <div className="flex justify-center items-center h-full bg-gray-500">
                    <h1 className="text-white text-3xl font-bold">BaleART</h1>
                </div>
            </div>
            {/* Navbar */}
            <Navbar />
        </>
    )
}