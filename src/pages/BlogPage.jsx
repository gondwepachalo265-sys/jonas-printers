// src/pages/BlogPage.jsx
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
import usePageTitle from '../hooks/usePageTitle';

const BlogPage = () => {
  usePageTitle('Blog - Tips, Guides & News');

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button - FIXED: Goes to blog section on homepage */}
        <Link 
          to="/#blog" 
          className="inline-flex items-center gap-2 text-[#1A3A8A] hover:text-[#FFD700] transition-colors mb-8 font-bold group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-[#1A3A8A] mb-4">
            All <span className="text-[#FFD700]">Blog</span> Posts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and news from our experts
          </p>
        </div>

        {/* All Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.slug}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 group"
            >
              <div className="p-8">
                <span className="inline-block bg-[#FFD700] text-[#1A3A8A] text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold text-[#1A3A8A] mb-3 group-hover:text-[#FFD700] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <span className="text-[#FFD700] font-bold text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;