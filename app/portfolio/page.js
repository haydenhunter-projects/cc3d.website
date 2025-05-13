import Image from 'next/image';

export default function Portfolio() {
  // This will be replaced with your actual portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Villa Exterior',
      category: 'Exterior',
      image: '/portfolio/villa-exterior.jpg',
      description: 'Contemporary villa design with emphasis on natural light and open spaces.'
    },
    {
      id: 2,
      title: 'Luxury Kitchen Interior',
      category: 'Interior',
      image: '/portfolio/kitchen-interior.jpg',
      description: 'High-end kitchen design featuring marble countertops and custom cabinetry.'
    },
    {
      id: 3,
      title: 'Commercial Building',
      category: 'Exterior',
      image: '/portfolio/commercial.jpg',
      description: 'Modern office building with sustainable design elements.'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-12 text-gray-900">
          Our Portfolio
        </h1>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-6">
                    <p className="text-white/80 text-sm mb-2">{item.category}</p>
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 