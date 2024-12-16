

function Genre() {
    const genres = [
        { name: 'Action', description: 'Fast-paced and thrilling adventures.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWuUirFgoCo4sRuM2HssfiDLpwOgzoKBiDQ&s' },
        { name: 'Adventure', description: 'Explore the unknown and solve mysteries.', image: 'https://adventuregamers.com/images/articles/18643/21489__large.jpg' },
        { name: 'RPG', description: 'Role-play as your favorite characters.', image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/the-21-hardest-rpgs-ever-made-ranked-b.jpg' },
        { name: 'Strategy', description: 'Plan and conquer your way to victory.', image: 'https://www.pockettactics.com/wp-content/sites/pockettactics/2022/07/best-mobile-strategy-games-dominations.jpg' },
    ]    
    
  return (
    <section className="py-10 mb-24 bg-gray-100 dark:bg-gray-700">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Genres</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {genres.map((genre, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            
            <img src={genre.image} alt={genre.name} className="w-full h-40 object-cover" />
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{genre.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{genre.description}</p>
              {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Explore
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Genre