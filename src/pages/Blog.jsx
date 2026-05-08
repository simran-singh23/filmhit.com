import React, { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    category: 'Review',
    tag: '★ 9.2',
    title: 'Dune: Part Two — A Cinematic Masterpiece That Rewrites Epic Filmmaking',
    excerpt: 'Denis Villeneuve delivers a breathtaking continuation of Paul Atreides\' journey across the desert planet Arrakis. Every frame feels like a painting.',
    author: 'Aryan Mehta',
    date: 'May 3, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    category: 'Top List',
    tag: 'Trending',
    title: '10 Must-Watch Sci-Fi Films of 2025 You Probably Missed',
    excerpt: 'From indie gems to overlooked blockbusters, this year had something extraordinary for every science fiction lover.',
    author: 'Priya Sharma',
    date: 'Apr 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80',
    featured: false,
  },
  {
    id: 3,
    category: 'Analysis',
    tag: 'Deep Dive',
    title: "Kubrick's 2001 Decoded: What the Final Act Really Means",
    excerpt: 'Fifty years later, the monolith still haunts us. A careful breakdown of cinema\'s most debated ending.',
    author: 'Rohan Das',
    date: 'Apr 20, 2026',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    category: 'Interview',
    tag: 'Exclusive',
    title: "Behind the Lens: A Conversation With 2025's Breakout Director",
    excerpt: 'We sat down with the visionary filmmaker whose debut film swept three international festivals this spring.',
    author: 'Sneha Kapoor',
    date: 'Apr 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    category: 'Review',
    tag: '★ 8.7',
    title: 'Succession of Stars: A Quiet Drama That Punches Far Above Its Weight',
    excerpt: 'With minimal budget and maximum heart, this film about a father-son road trip will linger long after the credits roll.',
    author: 'Aryan Mehta',
    date: 'Apr 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    featured: false,
  },
]

const categories = ['All', 'Review', 'Top List', 'Analysis', 'Interview']

const categoryColors = {
  Review: 'bg-amber-100 text-amber-800',
  'Top List': 'bg-rose-100 text-rose-800',
  Analysis: 'bg-indigo-100 text-indigo-800',
  Interview: 'bg-emerald-100 text-emerald-800',
}

const Blog = () => {
  const [active, setActive] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = blogPosts.filter((p) => {
    const matchCat = active === 'All' || p.category === active
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = filtered.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <div
      className="min-h-screen bg-neutral-950 text-white"
      style={{ fontFamily: "'Georgia', serif" }}
    >
 
      <header className="border-b border-neutral-800 px-6 py-5 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎬</span>
          <span
            className="text-xl font-bold tracking-widest text-white uppercase"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: '0.2em' }}
          >
      filmyhit
          </span>
          <span className="text-neutral-500 text-xs ml-1 uppercase tracking-widest hidden sm:block">
            — The Film Blog
          </span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-neutral-400">
          {['Blog', 'Reviews', 'Top Lists', 'About'].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200">
          Subscribe
        </button>
      </header>

    
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border-b border-neutral-800 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-2">
            Your Cinema, Your Voice
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            The Film Blog
          </h1>
          <p className="text-neutral-400 text-base max-w-xl mb-6">
            Reviews, essays, lists, and conversations from the world of cinema —
            curated for the passionate moviegoer.
          </p>
         
          <div className="flex items-center bg-neutral-800 border border-neutral-700 rounded-full px-4 py-2 max-w-sm">
            <svg
              className="w-4 h-4 text-neutral-500 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-white placeholder-neutral-500 outline-none w-full"
            />
          </div>
        </div>
      </div>

      
      <div className="border-b border-neutral-800 px-6">
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto py-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                active === cat
                  ? 'bg-amber-500 text-black'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

     
      <main className="max-w-7xl mx-auto px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-neutral-500 text-lg">
            No articles found. Try a different search or category.
          </div>
        ) : (
          <>
 
            {featured && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-0.5 bg-amber-500" />
                  <span className="text-amber-400 text-xs uppercase tracking-widest">
                    Featured
                  </span>
                </div>
                <div className="group relative rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-3/5 relative overflow-hidden">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/80 hidden md:block" />
                    </div>
                    <div className="md:w-2/5 p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            categoryColors[featured.category]
                          }`}
                        >
                          {featured.category}
                        </span>
                        <span className="text-amber-400 text-xs font-bold">
                          {featured.tag}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4 group-hover:text-amber-300 transition-colors duration-200">
                        {featured.title}
                      </h2>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-neutral-500">
                        <span className="text-neutral-300 font-medium">
                          {featured.author}
                        </span>
                        <span>·</span>
                        <span>{featured.date}</span>
                        <span>·</span>
                        <span>{featured.readTime}</span>
                      </div>
                      <button className="mt-6 self-start flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors font-medium">
                        Read article
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {rest.length > 0 && (
              <>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-0.5 bg-neutral-600" />
                  <span className="text-neutral-500 text-xs uppercase tracking-widest">
                    Latest Articles
                  </span>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  {rest.map((post) => (
                    <article
                      key={post.id}
                      className="group cursor-pointer bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 flex flex-col"
                    >
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span
                            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                              categoryColors[post.category]
                            }`}
                          >
                            {post.category}
                          </span>
                          {post.tag && (
                            <span className="text-xs font-bold text-amber-300 bg-black/60 px-2 py-0.5 rounded-full">
                              {post.tag}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-base font-bold text-white leading-snug mb-2 group-hover:text-amber-300 transition-colors duration-200 flex-1">
                          {post.title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-neutral-800">
                          <span className="text-neutral-300 font-medium">
                            {post.author}
                          </span>
                          <div className="flex items-center gap-2">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </main>

      <section className="border-t border-neutral-800 bg-neutral-900 py-14 px-6 mt-10">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-amber-400 text-xs uppercase tracking-widest mb-2">
            Newsletter
          </p>
          <h2 className="text-2xl font-bold text-white mb-2">
            Never miss a frame.
          </h2>
          <p className="text-neutral-400 text-sm mb-6">
            Weekly picks, fresh reviews, and deep dives straight to your inbox.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-2.5 rounded-full outline-none focus:border-amber-500 placeholder-neutral-500 transition-colors"
            />
            <button className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>


      <footer className="border-t border-neutral-800 px-6 py-6 text-center text-neutral-600 text-xs">
        © 2026 filmyhit — Built with ❤️ for cinema lovers
      </footer>
    </div>
  )
}

export default Blog
