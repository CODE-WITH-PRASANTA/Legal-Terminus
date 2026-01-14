import Client from "../models/Client.model.js";

/* ================= CREATE ================= */
export const createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= GET ALL ================= */
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= UPDATE ================= */
export const updateClient = async (req, res) => {
  try {
    const updated = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= DELETE ================= */
export const deleteClient = async (req, res) => {
  try {
    const deleted = await Client.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= TOGGLE STATUS ================= */
export const toggleClientStatus = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    client.status =
      client.status === "active" ? "inactive" : "active";

    await client.save();

    res.status(200).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
