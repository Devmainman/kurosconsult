// pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, AlertCircle, FileText } from 'lucide-react';
import axios from '../api/axios.config';

export const BlogPage = ({ setPage, setCurrentPostSlug }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("→ Starting fetch /blog?published=true");
      const res = await axios.get('/blog?published=true');
      console.log("→ Raw response:", res);
      console.log("→ res.data:", res.data);
      console.log("→ res.data.data:", res.data?.data);
      setPosts(res.data.data || []);
    } catch (err) {
      console.error('Failed to fetch blog posts', err);
      console.log('→ Full error object:', err);
      console.log('→ Response?', err.response);
      setError(err.response?.data?.error || err.message || 'Failed to load posts');
    } finally {
      setLoading(false);
      console.log("→ Fetch finished (loading = false)");
    }
  };
  fetchPosts();
}, []);

  const openPost = (post) => {
  console.log("→ Opening post with ID:", post._id, "Title:", post.title);
  setCurrentPostSlug(post._id);     // ← CHANGED
  setPage('blog-post');
};

  if (loading) {
    return (
      <div className="pt-32 pb-20 bg-[#FAFAFA] min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-[#135E73] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-32 pb-20 bg-[#FAFAFA] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 inline-block">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-red-700 mb-2">Something went wrong</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

return (
  <div className="pt-32 pb-20 bg-[#FAFAFA] min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-light text-[#135E73] mb-6">
          Insights & <span className="font-bold">Stories</span>
        </h1>
        <p className="text-xl text-gray-500 font-light">
          Thoughts, ideas, and updates from the team at Kuros' Consult.
        </p>
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-20">
          <div className="bg-white rounded-3xl shadow-sm p-12 max-w-md mx-auto">
            <FileText className="h-16 w-16 text-[#135E73] mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold text-[#135E73] mb-2">No posts yet</h3>
            <p className="text-gray-500">Check back soon for new articles and updates.</p>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      {posts.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => openPost(post)}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer group hover:shadow-xl hover:border-[#2FA8C7]/30 transition-all"
            >
              {post.featuredImage?.url && (  // ← Changed from coverImage to match your data
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  {post.author && (
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {typeof post.author === 'string' ? post.author : post.author.name}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-[#135E73] mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm font-light mb-4 line-clamp-3">
                  {post.excerpt || post.content?.substring(0, 120) + '...'}
                </p>
                <div className="flex items-center text-[#2FA8C7] font-medium text-sm group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  </div>
);
};