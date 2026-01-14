import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaBriefcase,
  FaVideo,
  FaEye,
  FaEyeSlash,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
} from "react-icons/fa";

/* ================= API ================= */
const API_URL = "http://localhost:5000/api/video-testimonials";

/* ================= TYPES ================= */
type Status = "draft" | "published";

interface VideoTestimonial {
  id: string;
  name: string;
  designation: string;
  videoUrl: string;
  status: Status;
}

interface VideoForm {
  name: string;
  designation: string;
  videoUrl: string;
  status: Status;
}

/* ================= COMPONENT ================= */
const VideoTestimonialPost: React.FC = () => {
  const [videos, setVideos] = useState<VideoTestimonial[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState<VideoForm>({
    name: "",
    designation: "",
    videoUrl: "",
    status: "draft",
  });

  /* ================= FETCH ================= */
  const fetchVideos = async () => {
    const res = await axios.get(API_URL);
    setVideos(
      res.data.map((item: any) => ({
        id: item._id,
        ...item,
      }))
    );
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  /* ================= HELPERS ================= */
  const getYoutubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/);
    return match ? match[1] : null;
  };

  const thumbnail = getYoutubeId(form.videoUrl)
    ? `https://img.youtube.com/vi/${getYoutubeId(form.videoUrl)}/hqdefault.jpg`
    : null;

  /* ================= HANDLERS ================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      designation: "",
      videoUrl: "",
      status: "draft",
    });
    setEditingId(null);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.designation || !form.videoUrl) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      await axios.put(`${API_URL}/${editingId}`, form);
    } else {
      await axios.post(API_URL, form);
    }

    fetchVideos();
    resetForm();
  };

  /* ================= ACTIONS ================= */
  const handleEdit = (item: VideoTestimonial) => {
    setEditingId(item.id);
    setForm({
      name: item.name,
      designation: item.designation,
      videoUrl: item.videoUrl,
      status: item.status,
    });
  };

  const handleDelete = async (id: string) => {
    if (confirm("Delete this video testimonial?")) {
      await axios.delete(`${API_URL}/${id}`);
      fetchVideos();
    }
  };

  const toggleStatus = async (id: string) => {
    await axios.patch(`${API_URL}/${id}/status`);
    fetchVideos();
  };

  /* ================= UI ================= */
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Video Testimonial Management
          </h1>
          <p className="text-gray-600">
            Add and manage customer video testimonials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ================= FORM ================= */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border">
            <h2 className="text-xl font-bold mb-6">
              {editingId ? "✏️ Edit Video Testimonial" : "🎥 Add Video Testimonial"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Customer Name"
                  className="w-full border rounded-xl pl-10 py-3"
                />
              </div>

              <div className="relative">
                <FaBriefcase className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                  placeholder="Designation"
                  className="w-full border rounded-xl pl-10 py-3"
                />
              </div>

              <div className="relative">
                <FaVideo className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="videoUrl"
                  value={form.videoUrl}
                  onChange={handleChange}
                  placeholder="YouTube / Vimeo / MP4 URL"
                  className="w-full border rounded-xl pl-10 py-3"
                />
              </div>

              {/* THUMBNAIL */}
              {thumbnail && (
                <div className="rounded-xl overflow-hidden border">
                  <img
                    src={thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>

              <div className="flex gap-3">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                  <FaSave />
                  {editingId ? "Update" : "Save"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="border px-6 py-3 rounded-xl flex items-center gap-2"
                  >
                    <FaTimes /> Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* ================= LIST ================= */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border">
            <h2 className="text-xl font-bold mb-6">📋 Video Testimonials</h2>

            {videos.length === 0 ? (
              <p className="text-gray-500 text-center">
                No video testimonials yet
              </p>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {videos.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-xl p-4 flex justify-between"
                  >
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.designation}
                      </p>
                      <span
                        className={`text-xs px-3 py-1 rounded-full inline-flex items-center gap-1 mt-2 ${
                          item.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status === "published" ? <FaEye /> : <FaEyeSlash />}
                        {item.status}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <button onClick={() => handleEdit(item)}>
                        <FaEdit />
                      </button>
                      <button onClick={() => toggleStatus(item.id)}>
                        {item.status === "draft" ? <FaEye /> : <FaEyeSlash />}
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonialPost;
