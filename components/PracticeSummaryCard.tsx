import React from 'react';
import { PracticeSummary } from '../types/types';
import { TrendLine } from './TrendLine';

type PracticeSummaryCardProps = {
    practice: PracticeSummary;
};

export const PracticeSummaryCard: React.FC<PracticeSummaryCardProps> = ({ practice }) => {
    const {
        name,
        city,
        country,
        newPatientsThisMonth,
        appointmentRequests,
        conversionRate,
        monthlyTrend,
    } = practice;

    const statusConfig = {
        "High Performer": {
            bg: "bg-emerald-50/50",
            text: "text-emerald-700",
            border: "border-emerald-100",
            dot: "bg-emerald-500",
            glow: "shadow-emerald-200",
            chart: "#10b981"
        },
        "At Risk": {
            bg: "bg-rose-50/50",
            text: "text-rose-700",
            border: "border-rose-100",
            dot: "bg-rose-500",
            glow: "shadow-rose-200",
            chart: "#f43f5e"
        },
        "Stable": {
            bg: "bg-slate-50/50",
            text: "text-slate-700",
            border: "border-slate-100",
            dot: "bg-amber-400",
            glow: "shadow-amber-200",
            chart: "#f59e0b"
        }
    };

    let statusType: keyof typeof statusConfig = "Stable";
    if (conversionRate > 20) statusType = "High Performer";
    else if (conversionRate < 10) statusType = "At Risk";

    const config = statusConfig[statusType];

    const recommendations = conversionRate > 20
        ? ["Scale top-performing channels", "Launch referral program"]
        : conversionRate < 10
            ? ["Optimize mobile conversion path", "Audit inquiry response time"]
            : ["A/B test landing page headers", "Enhance lead nurturing sync"];

    return (
        <div className="group relative w-full h-full min-h-[440px] perspective-1000 cursor-pointer">
            <div className="relative h-full bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-out flex flex-col group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] group-hover:-translate-y-2 group-hover:border-emerald-100">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative z-10 flex justify-between items-start mb-10">
                    <div className="max-w-[70%]">
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-none mb-2 group-hover:text-emerald-950 transition-colors">
                            {name}
                        </h2>
                        <div className="flex items-center text-slate-400 font-medium text-sm">
                            <span className="inline-block w-4 h-4 mr-1.5 opacity-60">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </span>
                            {city}, {country}
                        </div>
                    </div>
                    <div className={`flex items-center px-4 py-2 rounded-2xl border ${config.border} ${config.bg} backdrop-blur-md shadow-sm transition-all duration-500`}>
                        <span className={`w-2 h-2 rounded-full ${config.dot} ${config.glow} shadow-[0_0_8px] mr-2.5 animate-pulse`} />
                        <span className={`text-[11px] font-bold uppercase tracking-widest ${config.text}`}>
                            {statusType}
                        </span>
                    </div>
                </div>
                <div className="relative mb-8 p-6 rounded-[2rem] bg-slate-50/50 border border-slate-100/50 group-hover:bg-emerald-50/30 group-hover:border-emerald-100/50 transition-all duration-500 overflow-hidden">
                    <div className="relative z-10">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Conversion Rate</div>
                        <div className="flex items-baseline gap-2">
                            <div className="text-5xl font-black text-slate-900 tracking-tighter">
                                {conversionRate}<span className="text-emerald-500 ml-0.5">%</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-20 group-hover:opacity-40 transition-opacity">
                        <TrendLine data={monthlyTrend} color={config.chart} />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-5 rounded-3xl border border-slate-50 bg-slate-50/30 group-hover:bg-white group-hover:shadow-sm transition-all duration-500">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">New Patients</div>
                        <div className="text-2xl font-bold text-slate-800 tracking-tight">{newPatientsThisMonth}</div>
                    </div>
                    <div className="p-5 rounded-3xl border border-slate-50 bg-slate-50/30 group-hover:bg-white group-hover:shadow-sm transition-all duration-500">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">Requests</div>
                        <div className="text-2xl font-bold text-slate-800 tracking-tight">{appointmentRequests}</div>
                    </div>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-50">
                    <div className="flex items-center justify-between mb-3 px-1">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Plan</div>
                    </div>
                    <ul className="space-y-3">
                        {recommendations.map((rec, idx) => (
                            <li key={idx} className="flex items-center  ">
                                <div className={`w-6 h-6 rounded-lg ${config.bg} flex items-center justify-center mr-3 border ${config.border} shadow-sm group-hover/rec:bg-emerald-500 transition-colors`}>
                                    <svg className={`w-3 h-3 ${config.text}  transition-colors`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-xs font-semibold text-slate-600 line-clamp-1 group-hover/rec:text-slate-900 transition-colors">{rec}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`absolute -bottom-2 inset-x-8 h-4 rounded-full blur-xl opacity-20 -z-10 ${config.bg}`} />
        </div>
    );
};
