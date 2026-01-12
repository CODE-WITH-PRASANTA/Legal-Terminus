import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import {
  FaUpload,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaCheckCircle,
  FaRegCircle,
  FaPlus,
  FaBuilding,
  FaChartLine,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

/* ================= API ================= */
const API_URL = "http://localhost:5000/api/clients";

/* ================= TYPES ================= */
type Status = "active" | "inactive";

interface Client {
  id: string;
  name: string;
  logo: string;
  status: Status;
  createdAt?: string;
}

interface ClientForm {
  name: string;
  logo: string;
  status: Status;
}

/* ================= COMPONENT ================= */
const ClientPost: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<Status | "all">("all");
  const [sortBy, setSortBy] = useState<"name" | "status" | "date">("name");

  const [form, setForm] = useState<ClientForm>({
    name: "",
    logo: "",
    status: "active",
  });

  /* ================= FETCH ================= */
  const fetchClients = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setClients(
        res.data.map((c: any) => ({
          id: c._id,
          name: c.name,
          logo: c.logo,
          status: c.status,
          createdAt: c.createdAt,
        }))
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  /* ================= FILTER & SORT ================= */
  const filteredAndSortedClients = React.useMemo(() => {
    let result = [...clients];

    // Filter by search term
    if (searchTerm) {
      result = result.filter((client) =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus !== "all") {
      result = result.filter((client) => client.status === filterStatus);
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "status") {
        return a.status.localeCompare(b.status);
      } else {
        return new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime();
      }
    });

    return result;
  }, [clients, searchTerm, filterStatus, sortBy]);

  /* ================= STATS ================= */
  const stats = React.useMemo(() => {
    const activeClients = clients.filter((c) => c.status === "active").length;
    const totalClients = clients.length;
    const inactiveClients = totalClients - activeClients;

    return {
      total: totalClients,
      active: activeClients,
      inactive: inactiveClients,
      activePercentage: totalClients > 0 ? Math.round((activeClients / totalClients) * 100) : 0,
    };
  }, [clients]);

  /* ================= HANDLERS ================= */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("Image size should be less than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        logo: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  const resetForm = (): void => {
    setForm({ name: "", logo: "", status: "active" });
    setEditingId(null);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!form.name || !form.logo) {
      alert("Client name and logo are required");
      return;
    }

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, form);
      } else {
        await axios.post(API_URL, form);
      }
      await fetchClients();
      resetForm();
    } catch (error) {
      alert("Error saving client. Please try again.");
    }
  };

  /* ================= ACTIONS ================= */
  const handleEdit = (client: Client): void => {
    setEditingId(client.id);
    setForm({
      name: client.name,
      logo: client.logo,
      status: client.status,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string): Promise<void> => {
    if (!window.confirm("Are you sure you want to delete this client?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchClients();
    } catch (error) {
      alert("Error deleting client. Please try again.");
    }
  };

  const toggleStatus = async (id: string): Promise<void> => {
    try {
      await axios.patch(`${API_URL}/${id}/status`);
      fetchClients();
    } catch (error) {
      alert("Error updating status. Please try again.");
    }
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/20 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-indigo-700 bg-clip-text text-transparent">
                Client Portfolio
              </h1>
              <p className="text-gray-500 mt-2">
                Manage your brand partnerships with premium care
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all w-full md:w-64"
                />
              </div>
            </div>
          </div>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Clients</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
                </div>
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <FaBuilding className="text-indigo-600 text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Active</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.active}</p>
                </div>
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <FaChartLine className="text-emerald-600 text-xl" />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${stats.activePercentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{stats.activePercentage}% active rate</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Inactive</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.inactive}</p>
                </div>
                <div className="p-3 bg-gray-100 rounded-xl">
                  <FaEyeSlash className="text-gray-600 text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Editing</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {editingId ? "1" : "0"}
                  </p>
                </div>
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <FaEdit className="text-indigo-600 text-xl" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                {editingId ? "Currently editing a client" : "Ready to add new"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= FORM CARD ================= */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* FORM HEADER */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">
                      {editingId ? "Edit Client" : "Add New Client"}
                    </h2>
                    <div className="p-2 bg-white/20 rounded-lg">
                      <FaPlus className="text-white" />
                    </div>
                  </div>
                  <p className="text-indigo-100 text-sm mt-2">
                    {editingId
                      ? "Update client details below"
                      : "Fill in the details to add a new client"}
                  </p>
                </div>

                {/* FORM BODY */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  {/* NAME FIELD */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter company name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition"
                      required
                    />
                  </div>

                  {/* LOGO UPLOAD */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Logo
                    </label>
                    <div className="relative group">
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition-all duration-300 group-hover:shadow-sm">
                        <div className="p-4 bg-indigo-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                          <FaUpload className="text-indigo-600 text-xl" />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">
                          Click to upload logo
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          PNG, JPG up to 2MB
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={handleLogoUpload}
                        />
                      </label>
                    </div>
                  </div>

                  {/* LOGO PREVIEW */}
                  {form.logo && (
                    <div className="animate-fadeIn">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Logo Preview
                      </label>
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 flex justify-center items-center h-32">
                        <img
                          src={form.logo}
                          alt="Logo preview"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* STATUS FIELD */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <div className="relative">
                      <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 appearance-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition bg-white"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <FaSortAmountDown className="text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* FORM ACTIONS */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <FaSave />
                      {editingId ? "Update Client" : "Save Client"}
                    </button>

                    {editingId && (
                      <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300"
                      >
                        <FaTimes />
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* ================= CLIENTS LIST ================= */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* LIST HEADER */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Client Portfolio</h2>
                    <p className="text-gray-500 text-sm mt-1">
                      {filteredAndSortedClients.length} of {clients.length} clients displayed
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {/* FILTER BY STATUS */}
                    <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2">
                      <FaFilter className="text-gray-500" />
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value as Status | "all")}
                        className="bg-transparent outline-none text-sm font-medium"
                      >
                        <option value="all">All Status</option>
                        <option value="active">Active Only</option>
                        <option value="inactive">Inactive Only</option>
                      </select>
                    </div>

                    {/* SORT BY */}
                    <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2">
                      <FaSortAmountDown className="text-gray-500" />
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "name" | "status" | "date")}
                        className="bg-transparent outline-none text-sm font-medium"
                      >
                        <option value="name">Sort by Name</option>
                        <option value="status">Sort by Status</option>
                        <option value="date">Sort by Date</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* CLIENTS GRID */}
              <div className="p-6">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
                    <p className="text-gray-500">Loading client portfolio...</p>
                  </div>
                ) : filteredAndSortedClients.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="mx-auto w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6">
                      <FaBuilding className="text-gray-400 text-3xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      No clients found
                    </h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      {searchTerm || filterStatus !== "all"
                        ? "Try adjusting your search or filter criteria"
                        : "Get started by adding your first client using the form"}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredAndSortedClients.map((client) => (
                      <div
                        key={client.id}
                        className={`group relative rounded-xl border transition-all duration-300 hover:shadow-lg overflow-hidden ${
                          client.status === "active"
                            ? "border-emerald-100 hover:border-emerald-200 bg-gradient-to-br from-white to-emerald-50/30"
                            : "border-gray-100 hover:border-gray-200 bg-gradient-to-br from-white to-gray-50/30"
                        }`}
                      >
                        {/* STATUS BADGE */}
                        <div
                          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                            client.status === "active"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {client.status === "active" ? (
                            <span className="flex items-center gap-1">
                              <FaCheckCircle /> Active
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <FaRegCircle /> Inactive
                            </span>
                          )}
                        </div>

                        <div className="p-5">
                          <div className="flex items-start gap-4">
                            {/* LOGO CONTAINER */}
                            <div className="flex-shrink-0">
                              <div
                                className={`w-16 h-16 rounded-xl flex items-center justify-center p-3 ${
                                  client.status === "active"
                                    ? "bg-gradient-to-br from-emerald-50 to-white border border-emerald-100"
                                    : "bg-gradient-to-br from-gray-50 to-white border border-gray-200"
                                }`}
                              >
                                <img
                                  src={client.logo}
                                  alt={client.name}
                                  className="max-w-full max-h-full object-contain"
                                />
                              </div>
                            </div>

                            {/* CLIENT INFO */}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 text-lg truncate">
                                {client.name}
                              </h3>
                              <p className="text-gray-500 text-sm mt-1">
                                {client.status === "active"
                                  ? "Currently active partnership"
                                  : "Partnership on hold"}
                              </p>
                              <div className="flex items-center gap-2 mt-3">
                                <span
                                  className={`inline-block w-2 h-2 rounded-full ${
                                    client.status === "active"
                                      ? "bg-emerald-500 animate-pulse"
                                      : "bg-gray-400"
                                  }`}
                                ></span>
                                <span className="text-xs text-gray-500">
                                  ID: {client.id.slice(-8)}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* ACTION BUTTONS */}
                          <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-gray-100">
                            <button
                              onClick={() => handleEdit(client)}
                              className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                              title="Edit client"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => toggleStatus(client.id)}
                              className={`p-2 rounded-lg transition-colors ${
                                client.status === "active"
                                  ? "text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
                                  : "text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                              }`}
                              title={client.status === "active" ? "Deactivate" : "Activate"}
                            >
                              {client.status === "active" ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <button
                              onClick={() => handleDelete(client.id)}
                              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete client"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPost;