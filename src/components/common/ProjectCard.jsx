import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ProjectCard({ img, prjname, locname, price, bhk }) {
    const router = useRouter()

    const handleClick = () => {
        router.push({
          pathname: '/project-details',
          query: {
            img, prjname, locname, price, bhk
          },
        });
      };

  return (
    <div onClick={handleClick} className="bg-white rounded-2xl cursor-pointer shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <img  src={img}  alt={prjname} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{prjname}</h3>
        <div className="text-gray-500 text-sm flex items-center mb-2">
          <FaMapMarkerAlt className="mr-1 text-red-500" />
          {locname}
        </div>
        <div className="text-lg font-medium text-green-600 mb-1">{price}</div>
        <div className="text-sm text-gray-600">{bhk}</div>
      </div>
    </div>
  );
}