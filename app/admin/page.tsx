"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Label } from "@/components/Label";
import { Button } from "@/components/Button";
import { Plus, Clipboard, Edit2, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

type Job = {
  _id: string; // jobId
  title: string;
  company: string;
  department: string;
  employmentType: string;
  city: string;
  state: string;
  country: string;
  salaryRange: string;
  experienceLevel: string;
  postedDate: string;
  apply: string; // email or link
  description: string;
  responsibilities: string;
  requirements: string;
};

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function AdminPage() {
  // ----- Login -----
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [view, setView] = useState<"jobs" | "contacts">("jobs");

  // ----- Jobs state (in-memory) -----
  const [jobs, setJobs] = useState<Job[]>([]);

  // New job form (single long form)
  const [newJob, setNewJob] = useState<Partial<Job>>({
    title: "",
    company: "",
    department: "",
    employmentType: "Full-time",
    city: "",
    state: "",
    country: "USA",
    salaryRange: "",
    experienceLevel: "",
    apply: "",
    description: "",
    responsibilities: "",
    requirements: "",
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchJobs();
    }
  }, [isLoggedIn]);

  async function fetchJobs() {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    setJobs(data);
  }

  // Edit state
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Job>>({});

  // Utility: generate ID (timestamp + random)
  const generateJobId = () =>
    `JOB-${new Date().toISOString().replace(/[:.]/g, "-")}-${Math.random()
      .toString(36)
      .slice(2, 7)
      .toUpperCase()}`;

  // ----- Login handler -----
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === "admin" && loginForm.password === "admin123") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true"); // ✅ persist login
      setLoginForm({ username: "", password: "" });
    } else {
      alert("Invalid credentials — try admin / admin123");
    }
  };

  // ----- Add Job -----
  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newJob.title || !newJob.company || !newJob.city || !newJob.state) {
      alert("Please fill at least Title, Company, City and State.");
      return;
    }

    const jobData = {
      ...newJob,
      postedDate: new Date(),
    };

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });

    if (res.ok) {
      const createdJob = await res.json();
      setJobs((prev) => [createdJob, ...prev]);
      setNewJob({
        title: "",
        company: "",
        department: "",
        employmentType: "Full-time",
        city: "",
        state: "",
        country: "USA",
        salaryRange: "",
        experienceLevel: "",
        apply: "",
        description: "",
      });
    } else {
      alert("Failed to create job");
    }
  };

  // ----- Delete Job -----
  const handleDelete = async (_id: string) => {
    if (!confirm("Delete this job? This action cannot be undone.")) return;
    const res = await fetch(`/api/jobs/${_id}`, { method: "DELETE" });
    if (res.ok) {
      setJobs((prev) => prev.filter((j) => j._id !== _id));
    } else {
      alert("Failed to delete job");
    }
  };

  // ----- Begin Edit -----
  const beginEdit = (job: Job) => {
    setEditingJobId(job._id);
    setEditForm({ ...job });
  };

  // ----- Cancel Edit -----
  const cancelEdit = () => {
    setEditingJobId(null);
    setEditForm({});
  };

  // ----- Save Edit -----
  const saveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingJobId) return;

    const res = await fetch(`/api/jobs/${editingJobId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });

    if (res.ok) {
      const updatedJob = await res.json();
      setJobs((prev) =>
        prev.map((j) => (j._id === editingJobId ? updatedJob : j))
      );
      setEditingJobId(null);
      setEditForm({});
    } else {
      alert("Failed to update job");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center min-h-screen"
          >
            {" "}
            <Card className="w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-gray-800">
                  🔑 Admin Login
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <Label>Username</Label>
                    <Input
                      placeholder="admin"
                      value={loginForm.username}
                      onChange={(e: any) =>
                        setLoginForm({ ...loginForm, username: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="admin123"
                      value={loginForm.password}
                      onChange={(e: any) =>
                        setLoginForm({ ...loginForm, password: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      className="flex-1 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
                    >
                      Login
                    </Button>
                    <Button
                      type="button"
                      className="flex-1 text-gray-700 bg-white border border-gray-200 rounded-lg"
                      onClick={() => {
                        // convenience fill
                        setLoginForm({
                          username: "admin",
                          password: "admin123",
                        });
                      }}
                    >
                      Fill
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500">
                    Hardcoded credentials for demo:{" "}
                    <strong>admin / admin123</strong>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto space-y-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-800">
                Admin <span className="text-orange-500">Dashboard</span>
              </h1>

              <div className="flex items-center gap-4">
                <Button
                  className="text-white bg-orange-500 rounded-lg hover:bg-[#EA580C]"
                  onClick={() => {
                    setIsLoggedIn(false);
                    localStorage.removeItem("isLoggedIn");
                  }}
                >
                  Logout
                </Button>
              </div>
            </div>
            {/* 🔀 Toggle Section */}
            <div className="flex gap-4">
              <Button
                className={`flex-1 py-2 rounded-lg border ${
                  view === "jobs"
                    ? "bg-orange-600 text-white"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
                onClick={() => setView("jobs")}
              >
                💼 Job Management
              </Button>
              <Button
                className={`flex-1 py-2 rounded-lg border ${
                  view === "contacts"
                    ? "bg-orange-600 text-white"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
                onClick={() => setView("contacts")}
              >
                ✉️ Contact Messages
              </Button>
            </div>

            {view === "jobs" ? (
              <>
                {/* New Job (Single long form) */}
                <Card className="bg-white border border-orange-100 shadow-lg rounded-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                      <Clipboard size={18} /> Post a New Job
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleAddJob} className="space-y-6">
                      {/* Basic Info */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label>Job Title</Label>
                          <Input
                            placeholder="e.g. Frontend Engineer"
                            value={newJob.title}
                            onChange={(e: any) =>
                              setNewJob({ ...newJob, title: e.target.value })
                            }
                            required
                          />
                        </div>

                        <div>
                          <Label>Company Name</Label>
                          <Input
                            placeholder="e.g. Heuristic Systems"
                            value={newJob.company}
                            onChange={(e: any) =>
                              setNewJob({ ...newJob, company: e.target.value })
                            }
                            required
                          />
                        </div>

                        <div>
                          <Label>Department</Label>
                          <Input
                            placeholder="e.g. Engineering"
                            value={newJob.department}
                            onChange={(e: any) =>
                              setNewJob({
                                ...newJob,
                                department: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div>
                          <Label>Employment Type</Label>
                          <select
                            value={newJob.employmentType}
                            onChange={(e: any) =>
                              setNewJob({
                                ...newJob,
                                employmentType: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 text-base border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          >
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Contract</option>
                            <option>Remote</option>
                          </select>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <Label>City</Label>
                          <Input
                            placeholder="e.g. New York"
                            value={newJob.city}
                            onChange={(e: any) =>
                              setNewJob({ ...newJob, city: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div>
                          <Label>State</Label>
                          <Input
                            placeholder="e.g. NY"
                            value={newJob.state}
                            onChange={(e: any) =>
                              setNewJob({ ...newJob, state: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div>
                          <Label>Country</Label>
                          <Input
                            value={newJob.country}
                            onChange={(e: any) =>
                              setNewJob({ ...newJob, country: e.target.value })
                            }
                            required
                            className="bg-gray-50"
                          />
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <Label>Salary Range</Label>
                          <Input
                            placeholder="e.g. $80,000 - $120,000"
                            value={newJob.salaryRange}
                            onChange={(e: any) =>
                              setNewJob({
                                ...newJob,
                                salaryRange: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label>Experience Level</Label>
                          <Input
                            placeholder="e.g. 2-4 years"
                            value={newJob.experienceLevel}
                            onChange={(e: any) =>
                              setNewJob({
                                ...newJob,
                                experienceLevel: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <Label>Apply Email / Link</Label>
                          <Input
                            placeholder="e.g. hr@company.com or https://apply.link"
                            value={newJob.apply}
                            onChange={(e: any) =>
                              setNewJob({ ...newJob, apply: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      {/* Description / Responsibilities / Requirements */}
                      <div>
                        <Label>Job Description</Label>
                        <ReactQuill
                          theme="snow"
                          value={newJob.description}
                          onChange={(content) =>
                            setNewJob({ ...newJob, description: content })
                          }
                          className="bg-white rounded-md"
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          type="submit"
                          className="inline-flex items-center gap-2 px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
                        >
                          <Plus size={16} />
                          Add Job
                        </Button>

                        <Button
                          type="button"
                          className="px-4 py-2 bg-white border border-gray-200 rounded-lg"
                          onClick={() =>
                            setNewJob({
                              title: "",
                              company: "",
                              department: "",
                              employmentType: "Full-time",
                              city: "",
                              state: "",
                              country: "USA",
                              salaryRange: "",
                              experienceLevel: "",
                              apply: "",
                              description: "",
                              responsibilities: "",
                              requirements: "",
                            })
                          }
                        >
                          Reset
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
                {/* Job Listings */}
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-gray-700">
                    📌 Posted Jobs
                  </h2>

                  {jobs.length === 0 ? (
                    <p className="italic text-gray-500">No jobs posted yet.</p>
                  ) : (
                    <div className="grid gap-6 md:grid-cols-2">
                      {jobs.map((job) => {
                        const isEditing = editingJobId === job._id;
                        return (
                          <Card
                            key={job._id}
                            className="transition border border-gray-200 shadow-md rounded-xl hover:shadow-xl"
                          >
                            <CardHeader>
                              <div className="flex items-start justify-between w-full gap-4">
                                <div>
                                  <CardTitle className="text-lg font-bold text-gray-800">
                                    {job.title}
                                  </CardTitle>
                                  <p className="text-sm text-gray-500">
                                    {job.company} • {job.department || "—"}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {job.city}, {job.state} • {job.country}
                                  </p>
                                </div>

                                <div className="text-right">
                                  <p className="text-sm text-gray-500">
                                    Posted: {job.postedDate}
                                  </p>
                                  <p className="mt-1 text-xs text-gray-400">
                                    ID: {job._id}
                                  </p>
                                </div>
                              </div>
                            </CardHeader>

                            <CardContent>
                              {!isEditing ? (
                                <>
                                  <div
                                    className="mb-3 text-sm prose text-gray-600 max-w-none"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        job.description ||
                                        "<p><em>No description provided.</em></p>",
                                    }}
                                  />

                                  <div className="flex items-center gap-3">
                                    <Button
                                      className="flex items-center gap-2 px-4 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                      onClick={() => beginEdit(job)}
                                    >
                                      <Edit2 size={14} />
                                      Edit
                                    </Button>

                                    <Button
                                      className="flex items-center gap-2 px-4 py-1 text-white bg-red-600 rounded-lg hover:bg-red-700"
                                      onClick={() => handleDelete(job._id)}
                                    >
                                      <Trash2 size={14} />
                                      Delete
                                    </Button>
                                  </div>
                                </>
                              ) : (
                                // Inline edit form
                                <form onSubmit={saveEdit} className="space-y-4">
                                  <div className="grid gap-3 md:grid-cols-2">
                                    <div>
                                      <Label>Job Title</Label>
                                      <Input
                                        value={editForm.title as string}
                                        onChange={(e: any) =>
                                          setEditForm({
                                            ...editForm,
                                            title: e.target.value,
                                          })
                                        }
                                        required
                                      />
                                    </div>
                                    <div>
                                      <Label>Company</Label>
                                      <Input
                                        value={editForm.company as string}
                                        onChange={(e: any) =>
                                          setEditForm({
                                            ...editForm,
                                            company: e.target.value,
                                          })
                                        }
                                      />
                                    </div>
                                    <div>
                                      <Label>City</Label>
                                      <Input
                                        value={editForm.city as string}
                                        onChange={(e: any) =>
                                          setEditForm({
                                            ...editForm,
                                            city: e.target.value,
                                          })
                                        }
                                      />
                                    </div>
                                    <div>
                                      <Label>State</Label>
                                      <Input
                                        value={editForm.state as string}
                                        onChange={(e: any) =>
                                          setEditForm({
                                            ...editForm,
                                            state: e.target.value,
                                          })
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div>
                                    <Label>Description</Label>
                                    <ReactQuill
                                      theme="snow"
                                      value={editForm.description as string}
                                      onChange={(content) =>
                                        setEditForm({
                                          ...editForm,
                                          description: content,
                                        })
                                      }
                                    />
                                  </div>

                                  <div className="flex gap-3">
                                    <Button
                                      type="submit"
                                      className="text-white bg-green-600 rounded-lg"
                                    >
                                      Save
                                    </Button>
                                    <Button
                                      type="button"
                                      className="bg-white border rounded-lg"
                                      onClick={cancelEdit}
                                    >
                                      Cancel
                                    </Button>
                                  </div>
                                </form>
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <ContactMessages />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactMessages() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (data.success) setMessages(data.data);
    } catch (err) {
      console.error("Error fetching contact messages:", err);
    } finally {
      setLoading(false);
    }
  }

  // ✅ Delete message
  const handleDeleteMessage = async (id: string) => {
    if (!confirm("Delete this message? This action cannot be undone.")) return;

    try {
      const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (data.success) {
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
      } else {
        alert(data.message || "Failed to delete message");
      }
    } catch (err) {
      console.error("Error deleting message:", err);
      alert("Failed to delete message");
    }
  };

  if (loading)
    return <p className="p-6 text-gray-500">Loading contact messages...</p>;

  return (
    <Card className="bg-white border border-orange-100 shadow-lg rounded-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-700">
          ✉️ Contact Messages ({messages.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {messages.length === 0 ? (
          <p className="text-gray-500">No contact messages found.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className="p-4 transition border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">{msg.name}</h3>
                    <p className="text-sm text-gray-500">{msg.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-400">
                      {new Date(msg.createdAt).toLocaleString()}
                    </p>
                    <Button
                      size="sm"
                      className="text-white bg-red-600 hover:bg-red-700"
                      onClick={() => handleDeleteMessage(msg._id)}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
                <p className="mt-3 text-gray-700">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
