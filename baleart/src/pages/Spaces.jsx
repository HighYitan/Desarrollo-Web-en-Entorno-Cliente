import Card from '../components/Card';
export default function Spaces() {
    return (
        <div className="container mx-auto pt-5 pb-10 px-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-2">
                {[...Array(8)].map((_, index) => (
                    <Card key={index} />
                ))}
            </div>
        </div>
    );
}