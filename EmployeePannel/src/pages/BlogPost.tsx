import React, { useEffect, useState } from "react";
import axios from "axios";

/* ================= CATEGORY TYPE ================= */
type Category = {
  _id: string;
  name: string;
};

/* ================= BLOG TYPE ================= */
type Blog = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  tags: string;
  author: string;
  shortDesc: string;
  content: string;
  status: "draft" | "published";
  metaTitle: string;
  metaDesc: string;
  metaKeywords: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
};

const BlogPost: React.FC = () => {
  /* ================= BLOG STATE ================= */
  const [blog, setBlog] = useState({
    title: "",
    slug: "",
    category: "",
    tags: "",
    author: "",
    shortDesc: "",
    content: "",
    status: "draft" as "draft" | "published",
    metaTitle: "",
    metaDesc: "",
    metaKeywords: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  /* ================= CATEGORY STATE ================= */
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [catLoading, setCatLoading] = useState(false);

  /* ================= BLOG LIST STATE ================= */
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(false);

  /* ================= FETCH CATEGORIES ================= */
  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/category/all"
      );
      setCategories(res.data);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    }
  };

  /* ================= FETCH BLOGS ================= */
  const fetchBlogs = async () => {
    try {
      setBlogsLoading(true);
      const res = await axios.get(
        "http://localhost:5000/api/admin/blog/all"
      );
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
      setError("Failed to load blogs");
    } finally {
      setBlogsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBlogs();
  }, []);

  /* ================= HANDLERS ================= */
  const handleBlogChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setBlog((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "title" && {
        slug: value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
      }),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ================= CATEGORY ACTIONS ================= */
  const addCategory = async () => {
    const name = newCategory.trim();
    if (!name) return;

    const exists = categories.some(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );
    if (exists) return;

    try {
      setCatLoading(true);
      await axios.post(
        "http://localhost:5000/api/admin/category/create",
        { name }
      );
      setNewCategory("");
      fetchCategories();
    } catch (err: any) {
      alert(err?.response?.data?.message || "Failed to add category");
    } finally {
      setCatLoading(false);
    }
  };

  const removeCategory = async (id: string, name: string) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/admin/category/delete/${id}`
      );

      if (blog.category === name) {
        setBlog((prev) => ({ ...prev, category: "" }));
      }

      fetchCategories();
    } catch {
      alert("Failed to delete category");
    }
  };

  /* ================= BLOG ACTIONS ================= */
  const resetForm = () => {
    setBlog({
      title: "",
      slug: "",
      category: "",
      tags: "",
      author: "",
      shortDesc: "",
      content: "",
      status: "draft",
      metaTitle: "",
      metaDesc: "",
      metaKeywords: "",
    });
    setImage(null);
    setPreview(null);
    setEditingId(null);
  };

  const handleEdit = async (blogId: string) => {
    try {
      setLoading(true);
      const blogToEdit = blogs.find(b => b._id === blogId);
      if (!blogToEdit) return;

      setBlog({
        title: blogToEdit.title,
        slug: blogToEdit.slug,
        category: blogToEdit.category,
        tags: blogToEdit.tags,
        author: blogToEdit.author,
        shortDesc: blogToEdit.shortDesc,
        content: blogToEdit.content,
        status: blogToEdit.status,
        metaTitle: blogToEdit.metaTitle,
        metaDesc: blogToEdit.metaDesc,
        metaKeywords: blogToEdit.metaKeywords,
      });

      if (blogToEdit.image) {
        setPreview(`http://localhost:5000/uploads/blogs/${blogToEdit.image}`);
      } else {
        setPreview(null);
      }

      setImage(null);
      setEditingId(blogId);
      setMessage(null);
      setError(null);

      // Scroll to form
      document.getElementById('blog-form')?.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      console.error("Error loading blog for edit:", err);
      setError("Failed to load blog for editing");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId: string) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      setLoading(true);
      await axios.delete(
        `http://localhost:5000/api/admin/blog/delete/${blogId}`
      );
      
      setMessage("Blog deleted successfully");
      fetchBlogs();
      resetForm();
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        "Failed to delete blog"
      );
    } finally {
      setLoading(false);
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const formData = new FormData();
      Object.entries(blog).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (image) formData.append("image", image);

      if (editingId) {
        // Update existing blog
        const res = await axios.put(
          `http://localhost:5000/api/admin/blog/update/${editingId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setMessage(res.data.message || "Blog updated successfully");
      } else {
        // Create new blog
        const res = await axios.post(
          "http://localhost:5000/api/admin/blog/create",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setMessage(res.data.message || "Blog created successfully");
      }

      resetForm();
      fetchBlogs();
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  /* ================= UI ================= */
  return (
    <div className="space-y-6">
      {/* ================= BLOG FORM SECTION ================= */}
      <div id="blog-form" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ================= LEFT : BLOG FORM ================= */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-semibold mb-6">
            {editingId ? "Edit Blog Post" : "Create Blog Post"}
          </h1>

          {message && (
            <p className="mb-4 text-green-600 font-medium">{message}</p>
          )}
          {error && (
            <p className="mb-4 text-red-600 font-medium">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium">Blog Title</label>
              <input
                type="text"
                name="title"
                value={blog.title}
                onChange={handleBlogChange}
                required
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">SEO Slug</label>
              <input
                type="text"
                value={blog.slug}
                readOnly
                className="w-full mt-1 bg-gray-50 border rounded-lg px-4 py-2 text-gray-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Category</label>
                <select
                  name="category"
                  value={blog.category}
                  onChange={handleBlogChange}
                  className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Author</label>
                <input
                  type="text"
                  name="author"
                  value={blog.author}
                  onChange={handleBlogChange}
                  className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Tags (comma-separated)</label>
              <input
                type="text"
                name="tags"
                value={blog.tags}
                onChange={handleBlogChange}
                placeholder="e.g., react, javascript, web development"
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Short Description (SEO)
              </label>
              <textarea
                name="shortDesc"
                rows={3}
                value={blog.shortDesc}
                onChange={handleBlogChange}
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Blog Content</label>
              <textarea
                name="content"
                rows={7}
                value={blog.content}
                onChange={handleBlogChange}
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Featured Image</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                className="w-full mt-1 border rounded-lg px-4 py-2"
              />
              {preview && (
                <div className="mt-3">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-64 h-48 object-cover rounded-lg border shadow-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {editingId && !image ? "Current image" : "New image preview"}
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Status</label>
              <select
                name="status"
                value={blog.status}
                onChange={handleBlogChange}
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">SEO Optimization</h3>

              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-600">Meta Title</label>
                  <input
                    type="text"
                    name="metaTitle"
                    value={blog.metaTitle}
                    onChange={handleBlogChange}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-600">Meta Description</label>
                  <textarea
                    name="metaDesc"
                    rows={2}
                    value={blog.metaDesc}
                    onChange={handleBlogChange}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-600">Meta Keywords</label>
                  <input
                    type="text"
                    name="metaKeywords"
                    value={blog.metaKeywords}
                    onChange={handleBlogChange}
                    placeholder="comma-separated keywords"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel Edit
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {editingId ? "Updating..." : "Publishing..."}
                  </span>
                ) : (
                  editingId ? "Update Blog" : "Publish Blog"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ================= RIGHT : CATEGORY PANEL ================= */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Blog Categories</h2>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addCategory()}
                placeholder="Add category"
                className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              />
              <button
                type="button"
                onClick={addCategory}
                disabled={catLoading}
                className="bg-indigo-600 text-white px-4 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {catLoading ? "..." : "Add"}
              </button>
            </div>

            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat._id}
                  className="flex justify-between items-center border rounded-lg px-3 py-2 hover:bg-gray-50 transition"
                >
                  <span className="text-sm font-medium">{cat.name}</span>
                  <button
                    onClick={() => removeCategory(cat._id, cat.name)}
                    className="text-red-500 hover:text-red-700 text-xs font-medium hover:underline transition"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BLOGS LIST SECTION ================= */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">All Blog Posts</h2>
          <button
            onClick={fetchBlogs}
            disabled={blogsLoading}
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
          >
            {blogsLoading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {blogsLoading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No blog posts yet. Create one above!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blogs.map((blogItem) => (
                  <tr key={blogItem._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {blogItem.image && (
                          <div className="flex-shrink-0 h-10 w-10 mr-3">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={`http://localhost:5000/uploads/blogs/${blogItem.image}`}
                              alt={blogItem.title}
                            />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {blogItem.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {blogItem.slug}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        {blogItem.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        blogItem.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {blogItem.status.charAt(0).toUpperCase() + blogItem.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(blogItem.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(blogItem._id)}
                          className="text-indigo-600 hover:text-indigo-900 font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(blogItem._id)}
                          className="text-red-600 hover:text-red-900 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;