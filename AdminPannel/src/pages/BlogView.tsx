import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FiGrid,
  FiList,
  FiTrash2,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  status: "draft" | "published";
  image?: string;
  createdAt: string;
};

const BlogView: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= FETCH BLOGS ================= */
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5000/api/admin/blog/all"
      );
      setBlogs(res.data);
    } catch {
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* ================= STATUS TOGGLE ================= */
  const toggleStatus = async (id: string, status: string) => {
    try {
      await axios.put(
        `http://localhost:5000/api/admin/blog/update/${id}`,
        { status: status === "draft" ? "published" : "draft" }
      );
      fetchBlogs();
    } catch {
      alert("Failed to update status");
    }
  };

  /* ================= DELETE BLOG ================= */
  const deleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/admin/blog/delete/${id}`
      );
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch {
      alert("Failed to delete blog");
    }
  };

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  /* ================= UI ================= */
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">All Blogs</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              view === "grid"
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <FiGrid size={16} />
            Grid
          </button>

          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              view === "list"
                ? "bg-indigo-600 text-white shadow"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <FiList size={16} />
            List
          </button>
        </div>
      </div>

      {/* ================= GRID VIEW ================= */}
      {view === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {blog.image && (
                <img
                  src={`http://localhost:5000/uploads/blogs/${blog.image}`}
                  alt={blog.title}
                  className="h-40 w-full object-cover"
                />
              )}

              <div className="p-4 space-y-3">
                <h3 className="font-semibold line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {blog.category} • {blog.author}
                </p>

                <div className="flex justify-between items-center mt-3">
                  {/* STATUS */}
                  <button
                    onClick={() => toggleStatus(blog._id, blog.status)}
                    className={`flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full transition ${
                      blog.status === "published"
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                    }`}
                  >
                    {blog.status === "published" ? (
                      <FiCheckCircle size={14} />
                    ) : (
                      <FiClock size={14} />
                    )}
                    {blog.status}
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => deleteBlog(blog._id)}
                    className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
                  >
                    <FiTrash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= LIST VIEW ================= */}
      {view === "list" && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="border-t">
                  <td className="p-3">{blog.title}</td>
                  <td className="text-center">{blog.category}</td>
                  <td className="text-center">
                    <button
                      onClick={() => toggleStatus(blog._id, blog.status)}
                      className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${
                        blog.status === "published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {blog.status === "published" ? (
                        <FiCheckCircle size={14} />
                      ) : (
                        <FiClock size={14} />
                      )}
                      {blog.status}
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="inline-flex items-center gap-1 text-red-600 hover:text-red-700"
                    >
                      <FiTrash2 size={16} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BlogView;
