// src/pages/BlogDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaClock, FaTag } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
import usePageTitle from '../hooks/usePageTitle';

const BlogDetail = () => {
  const { slug } = useParams();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  usePageTitle(post ? `${post.title} | Blog` : 'Blog Post Not Found');

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1A3A8A]">Blog Post Not Found</h2>
          <Link to="/blog" className="text-[#FFD700] hover:underline mt-4 inline-block">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button - Goes to Blog Page */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-[#1A3A8A] hover:text-[#FFD700] transition-colors mb-8 font-bold group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <span className="inline-block bg-[#FFD700] text-[#1A3A8A] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-black text-[#1A3A8A] mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-2">
                <FaCalendar className="text-[#FFD700]" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-[#FFD700]" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <FaTag className="text-[#FFD700]" />
                {post.category}
              </span>
            </div>

            <div 
              className="prose prose-lg max-w-none prose-headings:text-[#1A3A8A] prose-headings:font-bold prose-a:text-[#FFD700] prose-a:no-underline hover:prose-a:text-[#1A3A8A] prose-strong:text-[#1A3A8A]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm font-bold text-[#1A3A8A] mb-4">Share this article:</p>
              <div className="flex gap-3">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1DA1F2] text-white px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-all duration-300"
                >
                  Twitter
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] text-white px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-all duration-300"
                >
                  Facebook
                </a>
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#1A3A8A] mb-6">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:scale-105 group"
                >
                  <span className="inline-block bg-[#FFD700] text-[#1A3A8A] text-xs font-bold px-2 py-0.5 rounded-full mb-2">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg font-bold text-[#1A3A8A] group-hover:text-[#FFD700] transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;