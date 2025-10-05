"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Label } from "@/components/Label";
import { Button } from "@/components/Button";
import { Plus, Clipboard, Edit2, Trash2 } from "lucide-react";

/**
 * Admin Page - Job CRUD (in-memory)
 * Credentials: username: admin   password: admin123
 *
 * Notes:
 * - Everything is in-memory and resets on page reload.
 * - To persist across refreshes, save `jobs` to localStorage in handleAddJob / handleEdit / handleDelete.
 */

type Job = {
  id: string; // jobId
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

export default function AdminPage() {
  // ----- Login -----
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

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
      setLoginForm({ username: "", password: "" });
    } else {
      alert("Invalid credentials — try admin / admin123");
    }
  };

  // ----- Add Job -----
  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!newJob.title || !newJob.company || !newJob.city || !newJob.state) {
      alert("Please fill at least Title, Company, City and State.");
      return;
    }

    const job: Job = {
      id: generateJobId(),
      title: newJob.title!.trim(),
      company: newJob.company!.trim(),
      department: newJob.department ?? "",
      employmentType: newJob.employmentType ?? "Full-time",
      city: newJob.city!.trim(),
      state: newJob.state!.trim(),
      country: newJob.country ?? "USA",
      salaryRange: newJob.salaryRange ?? "",
      experienceLevel: newJob.experienceLevel ?? "",
      postedDate: new Date().toISOString().split("T")[0], // YYYY-MM-DD
      apply: newJob.apply ?? "",
      description: newJob.description ?? "",
      responsibilities: newJob.responsibilities ?? "",
      requirements: newJob.requirements ?? "",
    };

    setJobs((prev) => [job, ...prev]);
    // reset form
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
    });

    // If you want persistence: save to localStorage here
    // localStorage.setItem("jobs", JSON.stringify([job, ...jobs]));
  };

  // ----- Delete Job -----
  const handleDelete = (id: string) => {
    if (!confirm("Delete this job? This action cannot be undone.")) return;
    setJobs((prev) => prev.filter((j) => j.id !== id));
    // update localStorage if using
  };

  // ----- Begin Edit -----
  const beginEdit = (job: Job) => {
    setEditingJobId(job.id);
    setEditForm({ ...job });
  };

  // ----- Cancel Edit -----
  const cancelEdit = () => {
    setEditingJobId(null);
    setEditForm({});
  };

  // ----- Save Edit -----
  const saveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingJobId) return;

    setJobs((prev) =>
      prev.map((j) =>
        j.id === editingJobId ? { ...(j as Job), ...(editForm as Job) } : j
      )
    );
    setEditingJobId(null);
    setEditForm({});
    // update localStorage if using
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-gray-100">
      {!isLoggedIn ? (
        <div className="flex items-center justify-center min-h-screen">
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
                      setLoginForm({ username: "admin", password: "admin123" });
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
        </div>
      ) : (
        <div className="max-w-6xl mx-auto space-y-8">
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
                }}
              >
                Logout
              </Button>
            </div>
          </div>

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
                        setNewJob({ ...newJob, department: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label>Employment Type</Label>
                    <select
                      value={newJob.employmentType}
                      onChange={(e: any) =>
                        setNewJob({ ...newJob, employmentType: e.target.value })
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
                        setNewJob({ ...newJob, salaryRange: e.target.value })
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
                  <Textarea
                    placeholder="Write a concise summary of this role..."
                    value={newJob.description}
                    onChange={(e: any) =>
                      setNewJob({ ...newJob, description: e.target.value })
                    }
                    className="min-h-[110px]"
                  />
                </div>

                <div>
                  <Label>Responsibilities</Label>
                  <Textarea
                    placeholder="Bullet points or paragraphs of responsibilities"
                    value={newJob.responsibilities}
                    onChange={(e: any) =>
                      setNewJob({ ...newJob, responsibilities: e.target.value })
                    }
                    className="min-h-[110px]"
                  />
                </div>

                <div>
                  <Label>Requirements</Label>
                  <Textarea
                    placeholder="List the must-have qualifications"
                    value={newJob.requirements}
                    onChange={(e: any) =>
                      setNewJob({ ...newJob, requirements: e.target.value })
                    }
                    className="min-h-[110px]"
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
                  const isEditing = editingJobId === job.id;
                  return (
                    <Card
                      key={job.id}
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
                              ID: {job.id}
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        {!isEditing ? (
                          <>
                            <p className="mb-3 text-sm text-gray-600">
                              {job.description || "No description provided."}
                            </p>

                            <div className="mb-3">
                              <strong className="text-sm text-gray-700">
                                Responsibilities
                              </strong>
                              <p className="mt-1 text-sm text-gray-600">
                                {job.responsibilities || "—"}
                              </p>
                            </div>

                            <div className="mb-4">
                              <strong className="text-sm text-gray-700">
                                Requirements
                              </strong>
                              <p className="mt-1 text-sm text-gray-600">
                                {job.requirements || "—"}
                              </p>
                            </div>

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
                                onClick={() => handleDelete(job.id)}
                              >
                                <Trash2 size={14} />
                                Delete
                              </Button>

                              {job.apply && (
                                <a
                                  href={
                                    job.apply.startsWith("http")
                                      ? job.apply
                                      : `mailto:${job.apply}`
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                  className="ml-auto text-sm text-orange-600 underline"
                                >
                                  Apply Now
                                </a>
                              )}
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
                              <Textarea
                                value={editForm.description as string}
                                onChange={(e: any) =>
                                  setEditForm({
                                    ...editForm,
                                    description: e.target.value,
                                  })
                                }
                                className="min-h-[100px]"
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
        </div>
      )}
    </div>
  );
}
