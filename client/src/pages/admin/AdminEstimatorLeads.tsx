import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  Camera,
  ChevronUp,
  ChevronDown,
  ArrowUpDown,
  Eye,
  ExternalLink,
} from "lucide-react";
import { Link } from "wouter";

type SortField = "createdAt" | "priceLow" | "name" | "projectLabel";
type SortDir = "asc" | "desc";
type StatusFilter = "all" | "new" | "contacted" | "quoted" | "won" | "lost";

interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  zip: string;
  contactMethod: string;
  timeline: string | null;
  description: string | null;
  projectType: string;
  projectLabel: string;
  billableHoursLow: number;
  billableHoursHigh: number;
  priceLow: number;
  priceHigh: number;
  materialLow: number;
  materialHigh: number;
  photoUrls: string | null;
  createdAt: Date;
  status?: string;
}

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  quoted: "bg-purple-100 text-purple-800",
  won: "bg-green-100 text-green-800",
  lost: "bg-gray-100 text-gray-600",
};

export default function AdminEstimatorLeads() {
  const { user, isAuthenticated } = useAuth();
  const [sortField, setSortField] = useState<SortField>("createdAt");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [serviceFilter, setServiceFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const { data: leadsData, isLoading, refetch } = trpc.estimator.getLeads.useQuery();
  const updateStatusMutation = trpc.estimator.updateLeadStatus.useMutation({
    onSuccess: () => refetch(),
  });

  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <p className="text-gray-600 mb-4">Admin access required.</p>
            <Link href="/admin/login">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white">Log In</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const leads: Lead[] = leadsData ?? [];

  // ── Unique service categories for filter ──────────────────────────────────
  const serviceCategories = Array.from(
    new Set(leads.map((l) => l.projectLabel.split(" — ")[0] ?? l.projectLabel))
  ).sort();

  // ── Filter ────────────────────────────────────────────────────────────────
  const filtered = leads.filter((lead) => {
    if (statusFilter !== "all" && (lead.status ?? "new") !== statusFilter) return false;
    if (serviceFilter !== "all" && !lead.projectLabel.startsWith(serviceFilter)) return false;
    if (dateFilter !== "all") {
      const days = dateFilter === "today" ? 0 : dateFilter === "week" ? 7 : 30;
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);
      if (new Date(lead.createdAt) < cutoff) return false;
    }
    return true;
  });

  // ── Sort ──────────────────────────────────────────────────────────────────
  const sorted = [...filtered].sort((a, b) => {
    let av: string | number, bv: string | number;
    if (sortField === "createdAt") {
      av = new Date(a.createdAt).getTime();
      bv = new Date(b.createdAt).getTime();
    } else if (sortField === "priceLow") {
      av = a.priceLow;
      bv = b.priceLow;
    } else if (sortField === "name") {
      av = a.name.toLowerCase();
      bv = b.name.toLowerCase();
    } else {
      av = a.projectLabel.toLowerCase();
      bv = b.projectLabel.toLowerCase();
    }
    if (av < bv) return sortDir === "asc" ? -1 : 1;
    if (av > bv) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  function toggleSort(field: SortField) {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("desc");
    }
  }

  function SortIcon({ field }: { field: SortField }) {
    if (sortField !== field) return <ArrowUpDown className="h-3.5 w-3.5 text-gray-400" />;
    return sortDir === "asc"
      ? <ChevronUp className="h-3.5 w-3.5 text-teal-700" />
      : <ChevronDown className="h-3.5 w-3.5 text-teal-700" />;
  }

  // ── CSV Export ────────────────────────────────────────────────────────────
  function exportCSV() {
    const headers = [
      "ID", "Name", "Phone", "Email", "ZIP", "Contact Method",
      "Project", "Est. Low", "Est. High", "Material Low", "Material High",
      "Hours Low", "Hours High", "Timeline", "Description", "Status", "Date",
    ];
    const rows = sorted.map((l) => [
      l.id, l.name, l.phone, l.email, l.zip, l.contactMethod,
      l.projectLabel, l.priceLow, l.priceHigh, l.materialLow, l.materialHigh,
      l.billableHoursLow, l.billableHoursHigh, l.timeline ?? "",
      (l.description ?? "").replace(/"/g, "'"), l.status ?? "new",
      new Date(l.createdAt).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((c) => `"${c}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `estimator-leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // ── Stats ─────────────────────────────────────────────────────────────────
  const totalValue = sorted.reduce((sum, l) => sum + l.priceLow, 0);
  const avgValue = sorted.length ? Math.round(totalValue / sorted.length) : 0;
  const newCount = sorted.filter((l) => (l.status ?? "new") === "new").length;
  const wonCount = sorted.filter((l) => l.status === "won").length;

  // ── Photo helper ──────────────────────────────────────────────────────────
  function getPhotos(lead: Lead): string[] {
    if (!lead.photoUrls) return [];
    try {
      return JSON.parse(lead.photoUrls) as string[];
    } catch {
      return [];
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Estimator Leads</h1>
          <p className="text-sm text-gray-500">Project cost estimate submissions</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={exportCSV} className="gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Link href="/admin/leads">
            <Button variant="ghost" size="sm">← Admin Home</Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={async () => {
              await fetch('/api/admin/logout', { method: 'POST' });
              window.location.href = '/admin/login';
            }}
          >
            Log Out
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Leads", value: sorted.length, icon: <Eye className="h-5 w-5 text-teal-600" /> },
            { label: "New / Uncontacted", value: newCount, icon: <Mail className="h-5 w-5 text-blue-600" /> },
            { label: "Won Jobs", value: wonCount, icon: <DollarSign className="h-5 w-5 text-green-600" /> },
            { label: "Avg. Est. Value", value: `$${avgValue.toLocaleString()}`, icon: <DollarSign className="h-5 w-5 text-purple-600" /> },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="pt-4 pb-4 flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">{s.icon}</div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-wrap gap-3">
              <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)}>
                <SelectTrigger className="w-36 h-9 text-sm">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="quoted">Quoted</SelectItem>
                  <SelectItem value="won">Won</SelectItem>
                  <SelectItem value="lost">Lost</SelectItem>
                </SelectContent>
              </Select>

              <Select value={serviceFilter} onValueChange={setServiceFilter}>
                <SelectTrigger className="w-48 h-9 text-sm">
                  <SelectValue placeholder="Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  {serviceCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-36 h-9 text-sm">
                  <SelectValue placeholder="Date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Last 7 Days</SelectItem>
                  <SelectItem value="month">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>

              {(statusFilter !== "all" || serviceFilter !== "all" || dateFilter !== "all") && (
                <Button variant="ghost" size="sm" className="h-9 text-sm text-gray-500"
                  onClick={() => { setStatusFilter("all"); setServiceFilter("all"); setDateFilter("all"); }}>
                  Clear filters
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-gray-700">
              {sorted.length} lead{sorted.length !== 1 ? "s" : ""}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="py-16 text-center text-gray-400">Loading leads…</div>
            ) : sorted.length === 0 ? (
              <div className="py-16 text-center text-gray-400">
                No leads match the current filters.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="w-8 text-xs">#</TableHead>
                      <TableHead
                        className="cursor-pointer text-xs select-none"
                        onClick={() => toggleSort("name")}
                      >
                        <span className="flex items-center gap-1">Name <SortIcon field="name" /></span>
                      </TableHead>
                      <TableHead className="text-xs">Contact</TableHead>
                      <TableHead
                        className="cursor-pointer text-xs select-none"
                        onClick={() => toggleSort("projectLabel")}
                      >
                        <span className="flex items-center gap-1">Project <SortIcon field="projectLabel" /></span>
                      </TableHead>
                      <TableHead
                        className="cursor-pointer text-xs select-none"
                        onClick={() => toggleSort("priceLow")}
                      >
                        <span className="flex items-center gap-1">Estimate <SortIcon field="priceLow" /></span>
                      </TableHead>
                      <TableHead className="text-xs">Status</TableHead>
                      <TableHead
                        className="cursor-pointer text-xs select-none"
                        onClick={() => toggleSort("createdAt")}
                      >
                        <span className="flex items-center gap-1">Date <SortIcon field="createdAt" /></span>
                      </TableHead>
                      <TableHead className="text-xs w-16">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sorted.map((lead) => {
                      const photos = getPhotos(lead);
                      const status = lead.status ?? "new";
                      return (
                        <TableRow key={lead.id} className="hover:bg-gray-50 cursor-pointer"
                          onClick={() => { setSelectedLead(lead); setPhotoIndex(0); }}>
                          <TableCell className="text-xs text-gray-400">{lead.id}</TableCell>
                          <TableCell>
                            <p className="font-medium text-sm text-gray-900">{lead.name}</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <MapPin className="h-3 w-3" />{lead.zip}
                            </p>
                          </TableCell>
                          <TableCell>
                            <a href={`tel:${lead.phone}`} onClick={(e) => e.stopPropagation()}
                              className="text-xs text-teal-700 hover:underline flex items-center gap-1">
                              <Phone className="h-3 w-3" />{lead.phone}
                            </a>
                            <a href={`mailto:${lead.email}`} onClick={(e) => e.stopPropagation()}
                              className="text-xs text-gray-500 hover:underline flex items-center gap-1 mt-0.5">
                              <Mail className="h-3 w-3" />{lead.email}
                            </a>
                          </TableCell>
                          <TableCell>
                            <p className="text-sm font-medium text-gray-900 max-w-[180px] truncate">{lead.projectLabel}</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="h-3 w-3" />{lead.billableHoursLow}–{lead.billableHoursHigh} hrs
                              {photos.length > 0 && (
                                <span className="ml-1 flex items-center gap-0.5 text-teal-600">
                                  <Camera className="h-3 w-3" />{photos.length}
                                </span>
                              )}
                            </p>
                          </TableCell>
                          <TableCell>
                            <p className="text-sm font-semibold text-gray-900">
                              ${lead.priceLow.toLocaleString()} – ${lead.priceHigh.toLocaleString()}
                            </p>
                            {(lead.materialLow > 0 || lead.materialHigh > 0) && (
                              <p className="text-xs text-gray-500">
                                + ${lead.materialLow}–${lead.materialHigh} materials
                              </p>
                            )}
                          </TableCell>
                          <TableCell onClick={(e) => e.stopPropagation()}>
                            <Select
                              value={status}
                              onValueChange={(v) =>
                                updateStatusMutation.mutate({ id: lead.id, status: v as "new" | "contacted" | "quoted" | "won" | "lost" })
                              }
                            >
                              <SelectTrigger className={`h-7 text-xs w-28 border-0 ${STATUS_COLORS[status] ?? ""}`}>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="quoted">Quoted</SelectItem>
                                <SelectItem value="won">Won</SelectItem>
                                <SelectItem value="lost">Lost</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell className="text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(lead.createdAt).toLocaleDateString()}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" className="h-7 w-7 p-0"
                              onClick={(e) => { e.stopPropagation(); setSelectedLead(lead); setPhotoIndex(0); }}>
                              <Eye className="h-4 w-4 text-gray-500" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Lead Detail Dialog */}
      <Dialog open={!!selectedLead} onOpenChange={(o) => !o && setSelectedLead(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedLead && (() => {
            const photos = getPhotos(selectedLead);
            const status = selectedLead.status ?? "new";
            return (
              <>
                <DialogHeader>
                  <DialogTitle className="text-lg font-bold">
                    Lead #{selectedLead.id} — {selectedLead.name}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-5 pt-2">
                  {/* Status */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Status:</span>
                    <Select
                      value={status}
                      onValueChange={(v) => {
                        updateStatusMutation.mutate({ id: selectedLead.id, status: v as "new" | "contacted" | "quoted" | "won" | "lost" });
                        setSelectedLead({ ...selectedLead, status: v });
                      }}
                    >
                      <SelectTrigger className={`h-8 text-sm w-36 ${STATUS_COLORS[status] ?? ""}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="quoted">Quoted</SelectItem>
                        <SelectItem value="won">Won</SelectItem>
                        <SelectItem value="lost">Lost</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Contact info */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Contact</p>
                      <p className="font-medium">{selectedLead.name}</p>
                      <a href={`tel:${selectedLead.phone}`} className="text-teal-700 hover:underline flex items-center gap-1 mt-0.5">
                        <Phone className="h-3.5 w-3.5" />{selectedLead.phone}
                      </a>
                      <a href={`mailto:${selectedLead.email}`} className="text-gray-600 hover:underline flex items-center gap-1 mt-0.5">
                        <Mail className="h-3.5 w-3.5" />{selectedLead.email}
                      </a>
                      <p className="text-gray-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3.5 w-3.5" />ZIP: {selectedLead.zip}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Preferences</p>
                      <p>Contact via: <span className="font-medium capitalize">{selectedLead.contactMethod}</span></p>
                      {selectedLead.timeline && (
                        <p>Timeline: <span className="font-medium">{selectedLead.timeline}</span></p>
                      )}
                      <p className="text-gray-500 flex items-center gap-1 mt-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(selectedLead.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Project</p>
                    <p className="font-semibold text-gray-900 text-base">{selectedLead.projectLabel}</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="bg-white rounded p-2 border border-gray-200">
                        <p className="text-xs text-gray-500">Estimate Range</p>
                        <p className="font-bold text-teal-700">
                          ${selectedLead.priceLow.toLocaleString()} – ${selectedLead.priceHigh.toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-white rounded p-2 border border-gray-200">
                        <p className="text-xs text-gray-500">Billable Hours</p>
                        <p className="font-bold text-gray-800">
                          {selectedLead.billableHoursLow}–{selectedLead.billableHoursHigh} hrs
                        </p>
                      </div>
                      {(selectedLead.materialLow > 0 || selectedLead.materialHigh > 0) && (
                        <div className="bg-white rounded p-2 border border-gray-200 col-span-2">
                          <p className="text-xs text-gray-500">Material Allowance</p>
                          <p className="font-medium text-gray-700">
                            ${selectedLead.materialLow} – ${selectedLead.materialHigh}
                          </p>
                        </div>
                      )}
                    </div>
                    {selectedLead.description && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Customer Notes</p>
                        <p className="text-gray-700 bg-white rounded p-2 border border-gray-200 whitespace-pre-wrap">
                          {selectedLead.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Photos */}
                  {photos.length > 0 && (
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                        Photos ({photos.length})
                      </p>
                      <div className="relative">
                        <img
                          src={photos[photoIndex]}
                          alt={`Project photo ${photoIndex + 1}`}
                          className="w-full rounded-lg object-cover max-h-64 bg-gray-100"
                        />
                        <a
                          href={photos[photoIndex]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow"
                        >
                          <ExternalLink className="h-4 w-4 text-gray-700" />
                        </a>
                        {photos.length > 1 && (
                          <div className="flex justify-center gap-2 mt-2">
                            {photos.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setPhotoIndex(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  i === photoIndex ? "bg-teal-700" : "bg-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                        {photos.length > 1 && (
                          <div className="flex gap-2 mt-2">
                            {photos.map((url, i) => (
                              <img
                                key={i}
                                src={url}
                                alt={`Thumb ${i + 1}`}
                                onClick={() => setPhotoIndex(i)}
                                className={`w-14 h-14 object-cover rounded cursor-pointer border-2 transition-colors ${
                                  i === photoIndex ? "border-teal-600" : "border-transparent"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Quick actions */}
                  <div className="flex gap-2 pt-2 border-t border-gray-100">
                    <a href={`tel:${selectedLead.phone}`}>
                      <Button size="sm" className="bg-teal-700 hover:bg-teal-800 text-white gap-2">
                        <Phone className="h-4 w-4" /> Call
                      </Button>
                    </a>
                    <a href={`mailto:${selectedLead.email}?subject=Your Hero Handyman Pro Estimate&body=Hi ${selectedLead.name},%0A%0AThank you for using our online estimator! Based on your ${selectedLead.projectLabel} project, your estimated range is $${selectedLead.priceLow.toLocaleString()}–$${selectedLead.priceHigh.toLocaleString()}.%0A%0AWe'd love to schedule a free on-site visit to give you a formal quote. When works best for you?%0A%0ABest,%0AHero Handyman Pro%0A800-741-6056`}>
                      <Button size="sm" variant="outline" className="gap-2">
                        <Mail className="h-4 w-4" /> Email
                      </Button>
                    </a>
                  </div>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
