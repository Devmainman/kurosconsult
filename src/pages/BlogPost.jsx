// pages/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import axios from '../api/axios.config';

export const BlogPostPage = ({ slug, setPage }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("→ Fetching single post with ID:", slug);

      const res = await axios.get(`/blog/${slug}`);   // ← CHANGED (no /slug/)

      console.log("→ Single post SUCCESS →", res.data);
      setPost(res.data.data || res.data);   // works for both response shapes
    } catch (err) {
      console.error("→ Single post failed:", err.response?.status, err);
      setError(err.response?.data?.error || 'Failed to load post');
    } finally {
      setLoading(false);
      console.log("→ Single post fetch finished");
    }
  };

  if (slug) fetchPost();
}, [slug]);

  if (loading) return (
    <div className="pt-32 min-h-screen flex justify-center">
      <div className="animate-spin h-10 w-10 border-4 border-[#135E73] border-t-transparent rounded-full"></div>
    </div>
  );

  if (error || !post) return (
    <div className="pt-32 min-h-screen text-center text-red-500">
      <p>{error || 'Post not found'}</p>
      <button onClick={() => setPage('blog')} className="text-[#135E73] underline mt-4">
        Back to Blog
      </button>
    </div>
  );

  return (
    <div className="pt-32 pb-20 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => setPage('blog')}
          className="flex items-center gap-2 text-[#135E73] mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} /> Back to Blog
        </button>

        {post.featuredImage?.url && (
          <img
            src={post.featuredImage.url}
            alt={post.featuredImage.alt || post.title}
            className="w-full h-96 object-cover rounded-3xl mb-8"
          />
        )}

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={16} />
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long', day: 'numeric', year: 'numeric'
            })}
          </span>
          {post.author && (
            <span className="flex items-center gap-1">
              <User size={16} />
              {post.author.name}
            </span>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#135E73] mb-6">{post.title}</h1>

        <div className="prose prose-lg max-w-none text-gray-600 font-light">
          {post.content}
        </div>
      </div>
    </div>
  );
};