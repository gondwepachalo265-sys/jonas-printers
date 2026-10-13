// src/components/Blog.jsx
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  // Get latest 3 posts for homepage
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFD700] text-[#1A3A8A] px-6 py-2 rounded-full font-bold text-sm mb-4">
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A8A] mb-6">
            Our <span className="text-[#FFD700]">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and news from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 group"
            >
              <div className="p-6">
                <span className="inline-block bg-[#FFD700] text-[#1A3A8A] text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-[#1A3A8A] mb-2 group-hover:text-[#FFD700] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[#FFD700] font-bold hover:text-[#1A3A8A] transition-colors inline-flex items-center gap-1 group"
                  >
                    Read More
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blog Posts Button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="bg-[#1A3A8A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#FFD700] hover:text-[#1A3A8A] transition-all duration-300 shadow-lg hover:scale-105 inline-block"
          >
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;