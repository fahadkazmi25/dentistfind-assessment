import { PracticeSummary } from '../types/types';
import { PracticeSummaryCard } from '../components/PracticeSummaryCard';

const mockPractices: PracticeSummary[] = [
  {
    id: "p1",
    name: "Smile bright",
    city: "New York",
    country: "USA",
    newPatientsThisMonth: 42,
    appointmentRequests: 65,
    conversionRate: 24.5,
    monthlyTrend: [28, 32, 35, 38, 40, 42],
  },
  {
    id: "p2",
    name: "Oakwood Family",
    city: "London",
    country: "UK",
    newPatientsThisMonth: 12,
    appointmentRequests: 28,
    conversionRate: 8.5,
    monthlyTrend: [15, 14, 12, 10, 11, 12],
  },
  {
    id: "p3",
    name: "Lakeside Denton",
    city: "Toronto",
    country: "Canada",
    newPatientsThisMonth: 28,
    appointmentRequests: 45,
    conversionRate: 15.2,
    monthlyTrend: [20, 22, 25, 24, 26, 28],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-2">
            Practice <span className="text-emerald-600">Performance</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500">
            Real-time insights into your dental group's conversion metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mockPractices.map((practice) => (
            <PracticeSummaryCard key={practice.id} practice={practice} />
          ))}
        </div>
      </div>
    </div>
  );
}
