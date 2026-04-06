import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2, Edit2, Lock } from "lucide-react";
import { toast } from "sonner";

// ---------------------------------------------------------------------------
// Login gate
// ---------------------------------------------------------------------------
function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const loginMutation = trpc.auth.login.useMutation({
    onSuccess: () => {
      toast.success("Logged in successfully");
      onSuccess();
    },
    onError: () => {
      toast.error("Invalid password");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    loginMutation.mutate({ password });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Lock className="h-6 w-6" />
          </div>
          <CardTitle>Admin Access</CardTitle>
          <CardDescription>Enter your admin password to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <Button
              type="submit"
              className="w-full"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Verifying…" : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Admin dashboard
// ---------------------------------------------------------------------------
function AdminDashboard() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    text: "",
    rating: 5,
    initials: "",
    isActive: 1,
  });

  const utils = trpc.useUtils();
  const { data: testimonials = [] } = trpc.testimonials.all.useQuery();

  const createMutation = trpc.testimonials.create.useMutation({
    onSuccess: () => {
      utils.testimonials.all.invalidate();
      utils.testimonials.list.invalidate();
      setFormData({ name: "", title: "", text: "", rating: 5, initials: "", isActive: 1 });
      toast.success("Testimonial created!");
    },
    onError: (error) => toast.error(error.message || "Failed to create testimonial"),
  });

  const updateMutation = trpc.testimonials.update.useMutation({
    onSuccess: () => {
      utils.testimonials.all.invalidate();
      utils.testimonials.list.invalidate();
      setEditingId(null);
      setFormData({ name: "", title: "", text: "", rating: 5, initials: "", isActive: 1 });
      toast.success("Testimonial updated!");
    },
    onError: (error) => toast.error(error.message || "Failed to update testimonial"),
  });

  const deleteMutation = trpc.testimonials.delete.useMutation({
    onSuccess: () => {
      utils.testimonials.all.invalidate();
      utils.testimonials.list.invalidate();
      toast.success("Testimonial deleted!");
    },
    onError: (error) => toast.error(error.message || "Failed to delete testimonial"),
  });

  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      utils.auth.me.invalidate();
      toast.success("Logged out");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.title || !formData.text || !formData.initials) {
      toast.error("Please fill in all fields");
      return;
    }
    if (editingId) {
      updateMutation.mutate({ id: editingId, ...formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (testimonial: any) => {
    setEditingId(testimonial.id);
    setFormData({
      name: testimonial.name,
      title: testimonial.title,
      text: testimonial.text,
      rating: testimonial.rating,
      initials: testimonial.initials,
      isActive: testimonial.isActive,
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ name: "", title: "", text: "", rating: 5, initials: "", isActive: 1 });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Manage Testimonials</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
          >
            Sign Out
          </Button>
        </div>

        {/* Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{editingId ? "Edit Testimonial" : "Add New Testimonial"}</CardTitle>
            <CardDescription>
              {editingId ? "Update the testimonial details" : "Create a new guest testimonial"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Guest Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Title/Role</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Business Traveler"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Initials (2 letters)</label>
                  <Input
                    value={formData.initials}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        initials: e.target.value.toUpperCase().slice(0, 2),
                      })
                    }
                    placeholder="JS"
                    maxLength={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Rating (1-5)</label>
                  <select
                    value={formData.rating}
                    onChange={(e) =>
                      setFormData({ ...formData, rating: parseInt(e.target.value) })
                    }
                    className="w-full px-3 py-2 border border-input rounded-md"
                  >
                    <option value={5}>5 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={2}>2 Stars</option>
                    <option value={1}>1 Star</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Review Text</label>
                <Textarea
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  placeholder="Share your experience at Hotel Lotus..."
                  rows={4}
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.isActive === 1}
                    onChange={(e) =>
                      setFormData({ ...formData, isActive: e.target.checked ? 1 : 0 })
                    }
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Active (show on website)</span>
                </label>
              </div>

              <div className="flex gap-2">
                <Button
                  type="submit"
                  disabled={createMutation.isPending || updateMutation.isPending}
                >
                  {editingId ? "Update Testimonial" : "Add Testimonial"}
                </Button>
                {editingId && (
                  <Button type="button" variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Testimonials List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            All Testimonials ({testimonials.length})
          </h2>
          <div className="space-y-4">
            {testimonials.map((testimonial: any) => (
              <Card
                key={testimonial.id}
                className={!testimonial.isActive ? "opacity-50" : ""}
              >
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-[#C9A84C] text-black flex items-center justify-center font-bold text-sm">
                          {testimonial.initials}
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < testimonial.rating ? "text-[#C9A84C]" : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-sm">{testimonial.text}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Status: {testimonial.isActive ? "Active" : "Inactive"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(testimonial)}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteMutation.mutate({ id: testimonial.id })}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Root export — shows login gate or dashboard based on session
// ---------------------------------------------------------------------------
export default function Admin() {
  const { data, refetch } = trpc.auth.me.useQuery();

  if (data?.isAdmin) {
    return <AdminDashboard />;
  }

  return <AdminLogin onSuccess={() => refetch()} />;
}
