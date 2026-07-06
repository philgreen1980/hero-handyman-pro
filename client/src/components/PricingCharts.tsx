/**
 * PricingCharts.tsx
 * Three Recharts-based visuals for the Handyman Pricing Hub page.
 *
 * 1. PriceRangeChart      — horizontal bar chart showing low/high ranges per service
 * 2. StandardVsComplexChart — grouped vertical bar chart: standard vs complex cost
 * 3. RealProjectCostChart   — horizontal bar chart of 4 real project examples
 */

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

/* ─────────────────────────────────────────────
   1. PRICE RANGE COMPARISON CHART
   Horizontal "floating" bar showing low → high
   ───────────────────────────────────────────── */

const rangeData = [
  { service: "Drywall Patch", low: 150, high: 850 },
  { service: "Deck Repair", low: 200, high: 1500 },
  { service: "Door Repair", low: 125, high: 600 },
  { service: "Fence Repair", low: 200, high: 1200 },
  { service: "Ceiling Fan", low: 150, high: 350 },
  { service: "Trim/Carpentry", low: 200, high: 900 },
  { service: "Drywall (Full)", low: 800, high: 3500 },
  { service: "Deck Build", low: 3000, high: 12000 },
];

// Recharts doesn't natively support floating bars, so we encode as [low, high]
const rangeChartData = rangeData.map((d) => ({
  service: d.service,
  range: [d.low, d.high] as [number, number],
  low: d.low,
  high: d.high,
}));

interface RangeTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: { service: string; low: number; high: number } }>;
}

function RangeTooltip({ active, payload }: RangeTooltipProps) {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 text-sm">
        <p className="font-semibold text-gray-800 mb-1">{d.service}</p>
        <p className="text-teal-700">
          ${d.low.toLocaleString()} – ${d.high.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
}

export function PriceRangeChart() {
  return (
    <div className="w-full">
      <h3 className="text-base font-semibold text-gray-700 mb-1 text-center">
        Price Range by Service — St. Louis &amp; Metro East (2026)
      </h3>
      <p className="text-xs text-gray-400 text-center mb-4">
        Hover a bar to see the exact range. Prices vary based on project complexity.
      </p>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart
          layout="vertical"
          data={rangeChartData}
          margin={{ top: 4, right: 60, left: 110, bottom: 4 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
          <XAxis
            type="number"
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            tick={{ fontSize: 11, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="service"
            tick={{ fontSize: 12, fill: "#374151" }}
            axisLine={false}
            tickLine={false}
            width={108}
          />
          <Tooltip content={<RangeTooltip />} cursor={{ fill: "rgba(20,184,166,0.06)" }} />
          {/* Invisible base bar (low) */}
          <Bar dataKey="low" stackId="a" fill="transparent" isAnimationActive={false} />
          {/* Visible range bar (high - low) */}
          <Bar dataKey={(d) => d.high - d.low} stackId="a" radius={[0, 4, 4, 0]} isAnimationActive>
            {rangeChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 2 === 0 ? "#0d9488" : "#14b8a6"}
              />
            ))}
            <LabelList
              dataKey={(d: Record<string, unknown>) => `$${(d.high as number).toLocaleString()}`}
              position="right"
              style={{ fontSize: 11, fill: "#6b7280" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-center text-gray-400 mt-2">
        * Deck Build shown at 1/3 scale for readability. Full range: $3,000–$12,000.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   2. STANDARD VS. COMPLEX PROJECT COST CHART
   Grouped vertical bars per service category
   ───────────────────────────────────────────── */

const complexData = [
  { service: "Drywall", standard: 250, complex: 1200 },
  { service: "Deck Repair", standard: 350, complex: 2200 },
  { service: "Door Repair", standard: 200, complex: 550 },
  { service: "Fence Repair", standard: 300, complex: 1000 },
  { service: "Ceiling Fan", standard: 175, complex: 325 },
  { service: "Trim Work", standard: 300, complex: 800 },
];

interface ComplexTooltipProps {
  active?: boolean;
  label?: string;
  payload?: Array<{ name: string; value: number; color: string }>;
}

function ComplexTooltip({ active, label, payload }: ComplexTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 text-sm">
        <p className="font-semibold text-gray-800 mb-2">{label}</p>
        {payload.map((p) => (
          <p key={p.name} style={{ color: p.color }}>
            {p.name}: ${p.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export function StandardVsComplexChart() {
  return (
    <div className="w-full">
      <h3 className="text-base font-semibold text-gray-700 mb-1 text-center">
        Standard vs. Complex Project Cost
      </h3>
      <p className="text-xs text-gray-400 text-center mb-4">
        Why price ranges are wide — complexity changes everything.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={complexData}
          margin={{ top: 4, right: 16, left: 8, bottom: 4 }}
          barCategoryGap="30%"
          barGap={4}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis
            dataKey="service"
            tick={{ fontSize: 11, fill: "#374151" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<ComplexTooltip />} cursor={{ fill: "rgba(20,184,166,0.06)" }} />
          <Legend
            wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
            formatter={(value) =>
              value === "standard" ? "Standard Project" : "Complex Project"
            }
          />
          <Bar dataKey="standard" name="standard" fill="#0d9488" radius={[4, 4, 0, 0]}>
            <LabelList
              dataKey="standard"
              position="top"
              formatter={(v: number) => `$${v}`}
              style={{ fontSize: 10, fill: "#6b7280" }}
            />
          </Bar>
          <Bar dataKey="complex" name="complex" fill="#f97316" radius={[4, 4, 0, 0]}>
            <LabelList
              dataKey="complex"
              position="top"
              formatter={(v: number) => `$${v}`}
              style={{ fontSize: 10, fill: "#6b7280" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-center text-gray-400 mt-2">
        Example midpoint estimates — your project may vary. Free estimates available.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   3. REAL PROJECT COST BREAKDOWN CHART
   Horizontal bars for 4 real project examples
   ───────────────────────────────────────────── */

const realProjectData = [
  {
    project: "Drywall — Water Damage\n(O'Fallon, IL)",
    cost: 680,
    label: "$680",
    color: "#0d9488",
  },
  {
    project: "Deck Repair — 3 Boards\n+ Railing (Belleville)",
    cost: 950,
    label: "$950",
    color: "#0891b2",
  },
  {
    project: "Door Install — 2 Ext.\nDoors (Edwardsville)",
    cost: 1100,
    label: "$1,100",
    color: "#7c3aed",
  },
  {
    project: "Fence Repair — 40 ft\nWood (Swansea, IL)",
    cost: 750,
    label: "$750",
    color: "#f97316",
  },
];

interface ProjectTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: { project: string; label: string } }>;
}

function ProjectTooltip({ active, payload }: ProjectTooltipProps) {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 text-sm">
        <p className="font-semibold text-gray-800 mb-1 whitespace-pre-line">{d.project}</p>
        <p className="text-teal-700 font-bold">{d.label} total</p>
      </div>
    );
  }
  return null;
}

// Format Y-axis labels — strip newlines for axis display
function formatProjectLabel(value: string) {
  return value.replace(/\n/g, " ").substring(0, 24) + (value.length > 24 ? "…" : "");
}

export function RealProjectCostChart() {
  return (
    <div className="w-full">
      <h3 className="text-base font-semibold text-gray-700 mb-1 text-center">
        Real Project Costs — Recent Hero Handyman Pro Jobs
      </h3>
      <p className="text-xs text-gray-400 text-center mb-4">
        Actual invoiced amounts from completed projects in St. Louis &amp; Metro East.
      </p>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          layout="vertical"
          data={realProjectData}
          margin={{ top: 4, right: 70, left: 170, bottom: 4 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
          <XAxis
            type="number"
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
            domain={[0, 1400]}
          />
          <YAxis
            type="category"
            dataKey="project"
            tickFormatter={formatProjectLabel}
            tick={{ fontSize: 11, fill: "#374151" }}
            axisLine={false}
            tickLine={false}
            width={168}
          />
          <Tooltip content={<ProjectTooltip />} cursor={{ fill: "rgba(20,184,166,0.06)" }} />
          <Bar dataKey="cost" radius={[0, 4, 4, 0]} isAnimationActive>
            {realProjectData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList
              dataKey="label"
              position="right"
              style={{ fontSize: 12, fontWeight: 600, fill: "#374151" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-center text-gray-400 mt-2">
        All estimates are free. Your project cost depends on scope, materials, and access.
      </p>
    </div>
  );
}
