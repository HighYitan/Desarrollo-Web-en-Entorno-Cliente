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

/*import { useContext } from 'react';
import { AppContext } from '../components/Context';
import Card from '../components/Card';

export default function Spaces() {
  const { spaces } = useContext(AppContext);

  return (
    <div className="container mx-auto pt-5 pb-10 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-2">
        {spaces && spaces.map((space, index) => (
          <Card key={index} space={space} />
        ))}
      </div>
    </div>
  );
}*/