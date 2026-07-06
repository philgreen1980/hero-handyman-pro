/**
 * EstimatorTool.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Multi-step handyman project estimator widget.
 * Steps: 1) Category → 2) Project Details → 3) Estimate Result → 4) Lead Form
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronRight,
  ChevronLeft,
  Calculator,
  CheckCircle,
  AlertTriangle,
  Upload,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Wrench,
} from "lucide-react";
import { trpc } from "@/lib/trpc";
import {
  PROJECT_TYPES,
  COMPLEXITY_ADDERS,
  ESTIMATE_DISCLAIMER,
  CTA_BUTTON_TEXT,
  CONFIRMATION_MESSAGE,
  SERVICE_AREA_ZIPS,
  OUT_OF_AREA_MESSAGE,
  ProjectTypeKey,
} from "@shared/estimator-config";
import { calculateEstimate, EstimateResult } from "@shared/estimator-engine";

// ── HELPERS ───────────────────────────────────────────────────────────────────
const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function isInServiceArea(zip: string): boolean {
  return SERVICE_AREA_ZIPS.includes(zip.trim());
}

// Group project types by category for display
const CATEGORIES = Array.from(
  new Set(Object.values(PROJECT_TYPES).map((p) => p.category))
);

// ── STEP INDICATOR ────────────────────────────────────────────────────────────
function StepIndicator({ step, total }: { step: number; total: number }) {
  const labels = ["Project Type", "Details", "Your Estimate", "Get a Quote"];
  return (
    <div className="flex items-center gap-1 mb-8">
      {labels.map((label, i) => {
        const num = i + 1;
        const active = num === step;
        const done = num < step;
        return (
          <div key={num} className="flex items-center gap-1 flex-1">
            <div className="flex flex-col items-center gap-1 flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  done
                    ? "bg-teal-600 text-white"
                    : active
                    ? "bg-teal-700 text-white ring-2 ring-teal-300"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {done ? <CheckCircle className="w-4 h-4" /> : num}
              </div>
              <span
                className={`text-xs text-center hidden sm:block ${
                  active ? "text-teal-700 font-semibold" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </div>
            {i < total - 1 && (
              <div
                className={`h-0.5 flex-1 mb-4 ${done ? "bg-teal-500" : "bg-gray-200"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── STEP 1: CATEGORY + PROJECT TYPE ──────────────────────────────────────────
function Step1({
  selected,
  onSelect,
  onNext,
}: {
  selected: ProjectTypeKey | null;
  onSelect: (k: ProjectTypeKey) => void;
  onNext: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState<string>(
    selected ? PROJECT_TYPES[selected].category : CATEGORIES[0]
  );

  const categoryTypes = Object.entries(PROJECT_TYPES).filter(
    ([, v]) => v.category === activeCategory
  ) as [ProjectTypeKey, (typeof PROJECT_TYPES)[ProjectTypeKey]][];

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-1">
        What type of project do you need?
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Select a category, then choose your specific project.
      </p>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-teal-700 text-white border-teal-700"
                : "bg-white text-gray-600 border-gray-300 hover:border-teal-400 hover:text-teal-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project type cards */}
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        {categoryTypes.map(([key, config]) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`text-left p-4 rounded-xl border-2 transition-all ${
              selected === key
                ? "border-teal-600 bg-teal-50"
                : "border-gray-200 bg-white hover:border-teal-300 hover:bg-teal-50/40"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-gray-800 text-sm">{config.label}</p>
                {config.description && (
                  <p className="text-xs text-gray-500 mt-0.5">{config.description}</p>
                )}
              </div>
              {selected === key && (
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              )}
            </div>
            <p className="text-xs text-teal-700 font-medium mt-2">
              Base: {config.baseHours}h labor
            </p>
          </button>
        ))}
      </div>

      <Button
        onClick={onNext}
        disabled={!selected}
        className="w-full bg-teal-700 hover:bg-teal-800 text-white h-12 text-base font-semibold"
      >
        Continue <ChevronRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
}

// ── STEP 2: PROJECT DETAILS ───────────────────────────────────────────────────
interface DetailsState {
  complexityAdders: string[];
  companyProvidesMaterials: boolean;
  hasUnknownCondition: boolean;
  notes: string;
  // Category-specific fields
  drywallLocation?: "wall" | "ceiling";
  drywallTextureMatch?: boolean;
  drywallPainting?: boolean;
  paintWho?: "customer" | "company";
  paintScope?: "walls" | "walls_trim_ceiling";
  doorType?: "interior" | "exterior";
  doorAction?: "repair" | "replace";
  tvSize?: string;
  tvWallType?: string;
  plumbingType?: string;
}

function Step2({
  projectType,
  details,
  onChange,
  onNext,
  onBack,
}: {
  projectType: ProjectTypeKey;
  details: DetailsState;
  onChange: (d: Partial<DetailsState>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const config = PROJECT_TYPES[projectType];
  const category = config.category;

  function toggleAdder(id: string) {
    const isUnknown = id === "unknown_condition";
    if (isUnknown) {
      onChange({ hasUnknownCondition: !details.hasUnknownCondition });
      return;
    }
    const current = details.complexityAdders;
    onChange({
      complexityAdders: current.includes(id)
        ? current.filter((a) => a !== id)
        : [...current, id],
    });
  }

  const isChecked = (id: string) => {
    if (id === "unknown_condition") return details.hasUnknownCondition;
    return details.complexityAdders.includes(id);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-1">
        Tell us about your project
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        These details help us give you a more accurate estimate.
      </p>

      {/* Category-specific questions */}
      {category === "Drywall Repair" && (
        <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700">Drywall Details</h3>
          <div>
            <Label className="text-sm text-gray-600 mb-1.5 block">Wall or ceiling repair?</Label>
            <div className="flex gap-3">
              {(["wall", "ceiling"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => onChange({ drywallLocation: v })}
                  className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    details.drywallLocation === v
                      ? "bg-teal-700 text-white border-teal-700"
                      : "bg-white text-gray-600 border-gray-300 hover:border-teal-400"
                  }`}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="texture"
              checked={!!details.drywallTextureMatch}
              onCheckedChange={(c) => onChange({ drywallTextureMatch: !!c })}
            />
            <Label htmlFor="texture" className="text-sm text-gray-700 cursor-pointer">
              Texture matching needed
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="painting"
              checked={!!details.drywallPainting}
              onCheckedChange={(c) => onChange({ drywallPainting: !!c })}
            />
            <Label htmlFor="painting" className="text-sm text-gray-700 cursor-pointer">
              Painting needed after repair
            </Label>
          </div>
        </div>
      )}

      {category === "Interior Painting" && (
        <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700">Painting Details</h3>
          <div>
            <Label className="text-sm text-gray-600 mb-1.5 block">Who is providing the paint?</Label>
            <div className="flex gap-3">
              {(["customer", "company"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => onChange({ paintWho: v })}
                  className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    details.paintWho === v
                      ? "bg-teal-700 text-white border-teal-700"
                      : "bg-white text-gray-600 border-gray-300 hover:border-teal-400"
                  }`}
                >
                  {v === "customer" ? "I'll provide paint" : "Company provides"}
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label className="text-sm text-gray-600 mb-1.5 block">Scope</Label>
            <div className="flex gap-3">
              {(["walls", "walls_trim_ceiling"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => onChange({ paintScope: v })}
                  className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    details.paintScope === v
                      ? "bg-teal-700 text-white border-teal-700"
                      : "bg-white text-gray-600 border-gray-300 hover:border-teal-400"
                  }`}
                >
                  {v === "walls" ? "Walls only" : "Walls + Trim + Ceiling"}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {category === "Door Work" && (
        <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700">Door Details</h3>
          <div>
            <Label className="text-sm text-gray-600 mb-1.5 block">Interior or exterior?</Label>
            <div className="flex gap-3">
              {(["interior", "exterior"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => onChange({ doorType: v })}
                  className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    details.doorType === v
                      ? "bg-teal-700 text-white border-teal-700"
                      : "bg-white text-gray-600 border-gray-300 hover:border-teal-400"
                  }`}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label className="text-sm text-gray-600 mb-1.5 block">Repair or replacement?</Label>
            <div className="flex gap-3">
              {(["repair", "replace"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => onChange({ doorAction: v })}
                  className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    details.doorAction === v
                      ? "bg-teal-700 text-white border-teal-700"
                      : "bg-white text-gray-600 border-gray-300 hover:border-teal-400"
                  }`}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {category === "TV Mounting" && (
        <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700">TV Mounting Details</h3>
          <div>
            <Label className="text-sm text-gray-600 mb-1.5 block">TV size</Label>
            <Select value={details.tvSize} onValueChange={(v) => onChange({ tvSize: v })}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select TV size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under_55">Under 55\"</SelectItem>
                <SelectItem value="55_75">55\" – 75\"</SelectItem>
                <SelectItem value="over_75">Over 75\"</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm text-gray-600 mb-1.5 block">Wall type</Label>
            <Select value={details.tvWallType} onValueChange={(v) => onChange({ tvWallType: v })}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select wall type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="drywall">Drywall (standard)</SelectItem>
                <SelectItem value="brick">Brick or stone</SelectItem>
                <SelectItem value="concrete">Concrete or block</SelectItem>
                <SelectItem value="tile">Tile</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {category === "Plumbing Fixtures" && (
        <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700">Fixture Details</h3>
          <div>
            <Label className="text-sm text-gray-600 mb-1.5 block">Fixture type</Label>
            <Select value={details.plumbingType} onValueChange={(v) => onChange({ plumbingType: v })}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select fixture type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="faucet">Faucet</SelectItem>
                <SelectItem value="toilet">Toilet</SelectItem>
                <SelectItem value="disposal">Garbage disposal</SelectItem>
                <SelectItem value="shower_head">Shower head</SelectItem>
                <SelectItem value="vanity">Vanity</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Complexity adders */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          Any of these conditions apply? <span className="font-normal text-gray-400">(check all that apply)</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {COMPLEXITY_ADDERS.map((adder) => (
            <label
              key={adder.id}
              className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                isChecked(adder.id)
                  ? "border-teal-500 bg-teal-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <Checkbox
                id={adder.id}
                checked={isChecked(adder.id)}
                onCheckedChange={() => toggleAdder(adder.id)}
                className="mt-0.5 shrink-0"
              />
              <span className="text-sm text-gray-700">{adder.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            id="company_materials"
            checked={details.companyProvidesMaterials}
            onCheckedChange={(c) => onChange({ companyProvidesMaterials: !!c })}
            className="mt-0.5"
          />
          <div>
            <span className="text-sm font-medium text-gray-800">
              Hero Handyman Pro will provide specialty materials
            </span>
            <p className="text-xs text-gray-500 mt-0.5">
              Basic sundry materials are always included. Check this if you need us to source specialty materials.
            </p>
          </div>
        </label>
      </div>

      {/* Notes */}
      <div className="mb-6">
        <Label htmlFor="notes" className="text-sm font-medium text-gray-700 mb-1.5 block">
          Additional notes <span className="text-gray-400 font-normal">(optional)</span>
        </Label>
        <Textarea
          id="notes"
          placeholder="Describe any special conditions, access issues, or other details..."
          value={details.notes}
          onChange={(e) => onChange({ notes: e.target.value })}
          rows={3}
          className="resize-none"
        />
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1 h-12">
          <ChevronLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button
          onClick={onNext}
          className="flex-2 flex-1 bg-teal-700 hover:bg-teal-800 text-white h-12 text-base font-semibold"
        >
          Calculate Estimate <Calculator className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// ── STEP 3: ESTIMATE RESULT ───────────────────────────────────────────────────
function Step3({
  result,
  projectType,
  companyProvidesMaterials,
  onNext,
  onBack,
}: {
  result: EstimateResult;
  projectType: ProjectTypeKey;
  companyProvidesMaterials: boolean;
  onNext: () => void;
  onBack: () => void;
}) {
  const config = PROJECT_TYPES[projectType];

  return (
    <div>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-4">
          <Calculator className="w-8 h-8 text-teal-700" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">Your Ballpark Estimate</h2>
        <p className="text-sm text-gray-500">Based on your selections for: <strong>{config.label}</strong></p>
      </div>

      {/* Price range hero */}
      <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-center text-white mb-6">
        <p className="text-sm font-medium text-teal-200 uppercase tracking-wider mb-2">
          Estimated Price Range
        </p>
        <p className="text-5xl font-bold mb-2">
          {fmt(result.priceLow)} – {fmt(result.priceHigh)}
        </p>
        <p className="text-teal-200 text-sm">
          Ballpark pricing · Not a final quote
        </p>
        {result.contingencyApplied && (
          <Badge className="mt-3 bg-orange-500/20 text-orange-200 border-orange-400/30">
            Range widened for unknown site conditions
          </Badge>
        )}
      </div>

      {/* Breakdown */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 mb-5 space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Estimate Breakdown</h3>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Project type</span>
          <span className="font-medium text-gray-800">{config.label}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Estimated labor time</span>
          <span className="font-medium text-gray-800">
            {result.billableHoursLow === result.billableHoursHigh
              ? `${result.billableHoursLow} hrs`
              : `${result.billableHoursLow}–${result.billableHoursHigh} hrs`}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Includes</span>
          <span className="font-medium text-gray-800">Labor, setup & cleanup</span>
        </div>
        {companyProvidesMaterials && result.materialHigh > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Material allowance</span>
            <span className="font-medium text-gray-800">
              {fmt(result.materialLow)} – {fmt(result.materialHigh)}
            </span>
          </div>
        )}
        {!companyProvidesMaterials && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Materials</span>
            <span className="font-medium text-gray-800">Basic sundry included</span>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800">{ESTIMATE_DISCLAIMER}</p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} className="flex-1 h-12">
          <ChevronLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button
          onClick={onNext}
          className="flex-1 bg-teal-700 hover:bg-teal-800 text-white h-12 text-base font-semibold"
        >
          {CTA_BUTTON_TEXT} <ChevronRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// ── STEP 4: LEAD FORM ─────────────────────────────────────────────────────────
interface LeadFormState {
  name: string;
  phone: string;
  email: string;
  zip: string;
  contactMethod: string;
  timeline: string;
  description: string;
  consent: boolean;
  photos: File[];
}

function Step4({
  projectType,
  result,
  onBack,
  onSubmitSuccess,
}: {
  projectType: ProjectTypeKey;
  result: EstimateResult;
  onBack: () => void;
  onSubmitSuccess?: () => void;
}) {
  const [form, setForm] = useState<LeadFormState>({
    name: "",
    phone: "",
    email: "",
    zip: "",
    contactMethod: "phone",
    timeline: "",
    description: "",
    consent: false,
    photos: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [zipWarning, setZipWarning] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const submitMutation = trpc.estimator.submitLead.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      // Scroll the widget back into view so the confirmation is visible
      setTimeout(() => onSubmitSuccess?.(), 50);
    },
  });

  function handleZipBlur() {
    if (form.zip.length === 5) {
      setZipWarning(!isInServiceArea(form.zip));
    }
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    setForm((f) => ({ ...f, photos: [...f.photos, ...files].slice(0, 5) }));
  }

  function removePhoto(i: number) {
    setForm((f) => ({ ...f, photos: f.photos.filter((_, idx) => idx !== i) }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.consent) return;
    setUploading(true);

    // Upload photos to S3 via server, collect URLs
    let photoUrls: string[] = [];
    if (form.photos.length > 0) {
      try {
        const uploads = await Promise.all(
          form.photos.map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch("/api/upload-estimator-photo", {
              method: "POST",
              body: formData,
              credentials: "include",
            });
            if (res.ok) {
              const data = await res.json() as { url: string };
              return data.url;
            }
            return null;
          })
        );
        photoUrls = uploads.filter(Boolean) as string[];
      } catch {
        // Photos are optional — continue without them
      }
    }

    setUploading(false);

    submitMutation.mutate({
      name: form.name,
      phone: form.phone,
      email: form.email,
      zip: form.zip,
      contactMethod: form.contactMethod,
      timeline: form.timeline,
      description: form.description,
      projectType,
      projectLabel: result.projectLabel,
      billableHoursLow: result.billableHoursLow,
      billableHoursHigh: result.billableHoursHigh,
      priceLow: result.priceLow,
      priceHigh: result.priceHigh,
      materialLow: result.materialLow,
      materialHigh: result.materialHigh,
      photoUrls,
    });
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 mb-6">
          <CheckCircle className="w-10 h-10 text-teal-700" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Request Received!</h2>
        <p className="text-gray-600 max-w-md mx-auto">{CONFIRMATION_MESSAGE}</p>
        <div className="mt-8 p-4 bg-teal-50 rounded-xl border border-teal-200 text-sm text-teal-800 max-w-sm mx-auto">
          <p className="font-semibold mb-1">What happens next?</p>
          <p>We typically follow up within 1 business day to review your project details and provide a formal written estimate.</p>
        </div>
      </div>
    );
  }

  const isLoading = uploading || submitMutation.isPending;

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-1">Request Your Formal Quote</h2>
      <p className="text-sm text-gray-500 mb-6">
        Fill in your contact details and we'll follow up with a formal written estimate.
      </p>

      {/* Estimate recap */}
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs text-teal-600 font-medium uppercase tracking-wide">Your estimate</p>
          <p className="text-lg font-bold text-teal-800">
            {fmt(result.priceLow)} – {fmt(result.priceHigh)}
          </p>
          <p className="text-xs text-teal-600">{result.projectLabel}</p>
        </div>
        <Wrench className="w-8 h-8 text-teal-400" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="phone"
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder="618-555-0100"
                className="pl-9"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="email"
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="jane@example.com"
                className="pl-9"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="zip" className="text-sm font-medium text-gray-700 mb-1 block">
              Project ZIP Code <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="zip"
                required
                value={form.zip}
                onChange={(e) => setForm((f) => ({ ...f, zip: e.target.value }))}
                onBlur={handleZipBlur}
                placeholder="62269"
                maxLength={5}
                className="pl-9"
              />
            </div>
            {zipWarning && (
              <p className="text-xs text-amber-700 mt-1 flex items-start gap-1">
                <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" />
                {OUT_OF_AREA_MESSAGE}
              </p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1 block">
              Preferred Contact Method
            </Label>
            <Select
              value={form.contactMethod}
              onValueChange={(v) => setForm((f) => ({ ...f, contactMethod: v }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phone">Phone call</SelectItem>
                <SelectItem value="text">Text message</SelectItem>
                <SelectItem value="email">Email</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-1 block">
              Desired Timeline
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Select
                value={form.timeline}
                onValueChange={(v) => setForm((f) => ({ ...f, timeline: v }))}
              >
                <SelectTrigger className="pl-9">
                  <SelectValue placeholder="When do you need this?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">As soon as possible</SelectItem>
                  <SelectItem value="1_2_weeks">Within 1–2 weeks</SelectItem>
                  <SelectItem value="1_month">Within a month</SelectItem>
                  <SelectItem value="flexible">Flexible / just planning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="description" className="text-sm font-medium text-gray-700 mb-1 block">
            Project Description <span className="text-gray-400 font-normal">(optional)</span>
          </Label>
          <Textarea
            id="description"
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            placeholder="Describe your project, any access issues, or anything else we should know..."
            rows={3}
            className="resize-none"
          />
        </div>

        {/* Photo upload */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-1 block">
            Project Photos <span className="text-gray-400 font-normal">(optional, up to 5)</span>
          </Label>
          <div
            onClick={() => fileRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center cursor-pointer hover:border-teal-400 transition-colors"
          >
            <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
            <p className="text-sm text-gray-500">Click to upload photos</p>
            <p className="text-xs text-gray-400">JPG, PNG, HEIC up to 10MB each</p>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handlePhotoChange}
          />
          {form.photos.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {form.photos.map((file, i) => (
                <div key={i} className="relative group">
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Consent */}
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            id="consent"
            checked={form.consent}
            onCheckedChange={(c) => setForm((f) => ({ ...f, consent: !!c }))}
            className="mt-0.5"
          />
          <span className="text-sm text-gray-600">
            I agree to be contacted by Hero Handyman Pro regarding my project inquiry. I understand this is a request for a formal quote, not a binding agreement.
          </span>
        </label>

        {submitMutation.isError && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
            Something went wrong. Please try again or call us directly at 800-741-6056.
          </p>
        )}

        <div className="flex gap-3 pt-2">
          <Button type="button" variant="outline" onClick={onBack} className="flex-1 h-12">
            <ChevronLeft className="mr-2 w-4 h-4" /> Back
          </Button>
          <Button
            type="submit"
            disabled={!form.consent || isLoading}
            className="flex-1 bg-teal-700 hover:bg-teal-800 text-white h-12 text-base font-semibold"
          >
            {isLoading ? "Submitting..." : CTA_BUTTON_TEXT}
          </Button>
        </div>
      </form>
    </div>
  );
}

// ── MAIN ESTIMATOR COMPONENT ──────────────────────────────────────────────────
export default function EstimatorTool() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<ProjectTypeKey | null>(null);
  const [details, setDetails] = useState<DetailsState>({
    complexityAdders: [],
    companyProvidesMaterials: false,
    hasUnknownCondition: false,
    notes: "",
  });
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  function goToStep(n: number) {
    setStep(n);
    setTimeout(scrollToTop, 50);
  }

  function handleDetailsChange(partial: Partial<DetailsState>) {
    setDetails((d) => ({ ...d, ...partial }));
  }

  function computeComplexityHours(): { low: number; high: number } {
    let low = 0;
    let high = 0;

    // Category-specific auto-adders
    if (details.drywallLocation === "ceiling") { low += 1; high += 2; }
    if (details.drywallTextureMatch) { low += 2; high += 2; }
    if (details.drywallPainting) { low += 2; high += 4; }
    if (details.paintScope === "walls_trim_ceiling") { low += 2; high += 4; }
    if (details.paintWho === "company") { low += 1; high += 1; }
    if (details.tvWallType && details.tvWallType !== "drywall") { low += 1; high += 2; }
    if (details.tvSize === "over_75") { low += 1; high += 1; }

    // Manual complexity adders
    for (const id of details.complexityAdders) {
      const adder = COMPLEXITY_ADDERS.find((a) => a.id === id);
      if (adder) { low += adder.hoursLow; high += adder.hoursHigh; }
    }

    return { low, high };
  }

  function handleCalculate() {
    if (!projectType) return;
    const { low, high } = computeComplexityHours();

    // Material overrides for painting
    let materialLow: number | undefined;
    let materialHigh: number | undefined;
    if (projectType.startsWith("paint_") && details.paintWho === "company") {
      materialLow = 100;
      materialHigh = 400;
    }

    const result = calculateEstimate({
      projectType,
      complexityAdders: details.complexityAdders,
      complexityHoursLow: low,
      complexityHoursHigh: high,
      companyProvidesMaterials: details.companyProvidesMaterials,
      hasUnknownCondition: details.hasUnknownCondition,
      materialCostLow: materialLow,
      materialCostHigh: materialHigh,
    });
    setEstimate(result);
    goToStep(3);
  }

  return (
    <div ref={containerRef} className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8 max-w-2xl mx-auto scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-teal-100 p-2.5 rounded-xl">
          <Calculator className="w-6 h-6 text-teal-700" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900">Project Cost Estimator</h1>
          <p className="text-xs text-gray-500">Get a ballpark range in under 2 minutes</p>
        </div>
      </div>

      <StepIndicator step={step} total={4} />

      {step === 1 && (
        <Step1
          selected={projectType}
          onSelect={setProjectType}
          onNext={() => goToStep(2)}
        />
      )}
      {step === 2 && projectType && (
        <Step2
          projectType={projectType}
          details={details}
          onChange={handleDetailsChange}
          onNext={handleCalculate}
          onBack={() => goToStep(1)}
        />
      )}
      {step === 3 && estimate && projectType && (
        <Step3
          result={estimate}
          projectType={projectType}
          companyProvidesMaterials={details.companyProvidesMaterials}
          onNext={() => goToStep(4)}
          onBack={() => goToStep(2)}
        />
      )}
      {step === 4 && estimate && projectType && (
        <Step4
          projectType={projectType}
          result={estimate}
          onBack={() => goToStep(3)}
          onSubmitSuccess={scrollToTop}
        />
      )}
    </div>
  );
}
