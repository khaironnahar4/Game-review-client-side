

function About() {
  return (
    <section className="py-10 my-24 bg-gray-100 dark:bg-gray-700 dark:text-gray-200">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">About GameVerse</h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
        Welcome to <span className="font-semibold text-blue-600">GameVerse</span> — your go-to platform for exploring and sharing game reviews. Whether you're a hardcore gamer, a casual player, or just someone curious about the latest trends in gaming, GameVerse provides a community-driven space to discover top-rated games, share opinions, and connect with like-minded enthusiasts.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Discover Top Games</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Explore reviews of the latest and most popular games, rated and curated by our vibrant gaming community.
          </p>
        </div>
        <div className="bg-white rounded-lg dark:bg-gray-800 shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Share Your Thoughts</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Become a part of the GameVerse community by sharing your own game reviews, ratings, and recommendations.
          </p>
        </div>
        <div className="bg-white rounded-lg dark:bg-gray-800 shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Personalized Features</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your personal reviews, build a watchlist, and discover games tailored to your interests.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About