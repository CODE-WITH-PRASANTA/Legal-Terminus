import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaStar,
  FaEdit,
  FaTrash,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaBriefcase,
  FaQuoteLeft,
  FaSave,
  FaTimes,
} from "react-icons/fa";

/* ================= API ================= */
const API_URL = "http://localhost:5000/api/testimonials";

/* ================= TYPES ================= */
type Status = "draft" | "published";

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  rating: number;
  description: string;
  status: Status;
}

interface TestimonialForm {
  name: string;
  designation: string;
  rating: number;
  description: string;
  status: Status;
}

/* ================= COMPONENT ================= */
const TestimonialPost: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [hoverRating, setHoverRating] = useState(0);

  const [form, setForm] = useState<TestimonialForm>({
    name: "",
    designation: "",
    rating: 0,
    description: "",
    status: "draft",
  });

  /* ================= FETCH ================= */
  const fetchTestimonials = async () => {
    const res = await axios.get(API_URL);
    setTestimonials(
      res.data.map((item: any) => ({
        id: item._id,
        ...item,
      }))
    );
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  /* ================= HANDLERS ================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (value: number) => {
    setForm((prev) => ({ ...prev, rating: value }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      designation: "",
      rating: 0,
      description: "",
      status: "draft",
    });
    setEditingId(null);
    setHoverRating(0);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.designation || !form.description || !form.rating) {
      alert("Please fill all required fields!");
      return;
    }

    if (editingId) {
      await axios.put(`${API_URL}/${editingId}`, form);
    } else {
      await axios.post(API_URL, form);
    }

    fetchTestimonials();
    resetForm();
  };

  /* ================= ACTIONS ================= */
  const handleEdit = (item: Testimonial) => {
    setEditingId(item.id);
    setForm({
      name: item.name,
      designation: item.designation,
      rating: item.rating,
      description: item.description,
      status: item.status,
    });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      await axios.delete(`${API_URL}/${id}`);
      fetchTestimonials();
    }
  };

  const toggleStatus = async (id: string) => {
    await axios.patch(`${API_URL}/${id}/status`);
    fetchTestimonials();
  };

  /* ================= UI ================= */
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Testimonial Management
          </h1>
          <p className="text-gray-600">
            Create, edit, and manage customer testimonials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ================= FORM ================= */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border">
            <h2 className="text-xl font-bold mb-6">
              {editingId ? "✏️ Edit Testimonial" : "✨ Create New Testimonial"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
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

              {/* RATING */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="font-semibold mb-2">Rating</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <FaStar
                        size={26}
                        className={
                          star <= (hoverRating || form.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Testimonial description"
                className="w-full border rounded-xl p-3"
              />

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
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl flex gap-2 items-center">
                  <FaSave />
                  {editingId ? "Update" : "Save"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="border px-6 py-3 rounded-xl flex gap-2"
                  >
                    <FaTimes /> Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* ================= LIST ================= */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border">
            <h2 className="text-xl font-bold mb-6">📋 All Testimonials</h2>

            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {testimonials.map((item) => (
                <div key={item.id} className="border rounded-xl p-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.designation}</p>

                      <div className="flex gap-1 my-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            size={14}
                            className={
                              i < item.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>

                      <p className="text-gray-600">{item.description}</p>
                    </div>

                    <div className="flex flex-col gap-2">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPost;
