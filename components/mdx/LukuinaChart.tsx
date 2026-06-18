"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styles from "./LukuinaChart.module.scss";
import data from "../../posts/2025-vuosikertomus/lukuina.json";

const MESSAGES_COLOR = "#6CE5FF";
const MEMBERS_COLOR = "#8BBAFF";

const MONTH_NAMES = [
  "tammi", "helmi", "maalis", "huhti", "touko", "kesä",
  "heinä", "elo", "syys", "loka", "marras", "joulu",
];

const nf = new Intl.NumberFormat("fi-FI");

type DailyPoint = { date: string; messages: number; members: number };
type MonthlyPoint = { month: string; messages: number; members: number };

function formatDailyTick(date: string) {
  const [, m, d] = date.split("-").map(Number);
  return `${d}.${m}.`;
}

function formatDailyLabel(date: string) {
  const [, m, d] = date.split("-").map(Number);
  return `${d}. ${MONTH_NAMES[m - 1]}kuuta 2025`;
}

function formatMonthTick(month: string) {
  const m = Number(month.split("-")[1]);
  return MONTH_NAMES[m - 1];
}

function formatMonthLabel(month: string) {
  const m = Number(month.split("-")[1]);
  return `${MONTH_NAMES[m - 1]}kuu 2025`;
}

const TooltipContent = ({ active, payload, granularity }: any) => {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  const label =
    granularity === "daily"
      ? formatDailyLabel(point.date)
      : formatMonthLabel(point.month);
  const messagesLabel = granularity === "daily" ? "Viestejä" : "Viestejä / kk";
  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipLabel}>{label}</p>
      <div className={styles.tooltipRow}>
        <span className={styles.tooltipDot} style={{ background: MESSAGES_COLOR }} />
        <span>{messagesLabel}</span>
        <span className={styles.tooltipValue}>{nf.format(point.messages)}</span>
      </div>
      <div className={styles.tooltipRow}>
        <span className={styles.tooltipDot} style={{ background: MEMBERS_COLOR }} />
        <span>Yhdistyksen jäsenmäärä</span>
        <span className={styles.tooltipValue}>{nf.format(point.members)}</span>
      </div>
    </div>
  );
};

export const LukuinaChart = () => {
  const [granularity, setGranularity] = useState<"daily" | "monthly">("monthly");

  const daily = data.daily as DailyPoint[];
  const monthly = data.monthly as MonthlyPoint[];
  const isDaily = granularity === "daily";
  const chartData: any[] = isDaily ? daily : monthly;
  const xKey = isDaily ? "date" : "month";

  // Month-start ticks for the daily view so the axis stays readable.
  const dailyTicks = daily.filter((d) => d.date.endsWith("-01")).map((d) => d.date);

  const views: { id: "monthly" | "daily"; label: string }[] = [
    { id: "monthly", label: "Kuukausittain" },
    { id: "daily", label: "Päivittäin" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div className={styles.toggle}>
          {views.map((v) => {
            const activeView = granularity === v.id;
            return (
              <button
                key={v.id}
                type="button"
                className={`${styles.toggleLink} ${activeView ? styles.toggleLinkActive : ""}`}
                onClick={() => setGranularity(v.id)}
                aria-current={activeView}
              >
                {v.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
            <defs>
              <linearGradient id="lukuinaMessages" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={MESSAGES_COLOR} stopOpacity={0.45} />
                <stop offset="100%" stopColor={MESSAGES_COLOR} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis
              dataKey={xKey}
              ticks={isDaily ? dailyTicks : undefined}
              tickFormatter={isDaily ? formatDailyTick : formatMonthTick}
              stroke="rgba(255,255,255,0.25)"
              tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
              interval={isDaily ? 0 : "preserveStartEnd"}
              minTickGap={8}
            />
            <YAxis
              yAxisId="messages"
              stroke="rgba(255,255,255,0.25)"
              tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={48}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : `${v}`)}
            />
            <YAxis
              yAxisId="members"
              orientation="right"
              stroke="rgba(255,255,255,0.25)"
              tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={36}
              allowDecimals={false}
              domain={[
                (min: number) => Math.max(0, Math.floor((min - 15) / 10) * 10),
                (max: number) => Math.ceil((max + 5) / 10) * 10,
              ]}
            />
            <Tooltip
              content={<TooltipContent granularity={granularity} />}
              cursor={{ stroke: "rgba(255,255,255,0.15)", strokeWidth: 1 }}
            />
            {isDaily ? (
              <Area
                yAxisId="messages"
                type="monotone"
                dataKey="messages"
                stroke={MESSAGES_COLOR}
                strokeWidth={2}
                fill="url(#lukuinaMessages)"
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0 }}
                isAnimationActive={false}
              />
            ) : (
              <Bar
                yAxisId="messages"
                dataKey="messages"
                fill={MESSAGES_COLOR}
                fillOpacity={0.5}
                radius={[6, 6, 6, 6]}
                maxBarSize={36}
                isAnimationActive={false}
              />
            )}
            <Line
              yAxisId="members"
              type="monotone"
              dataKey="members"
              stroke={MEMBERS_COLOR}
              strokeWidth={2.5}
              dot={isDaily ? false : { r: 3, fill: MEMBERS_COLOR, strokeWidth: 0 }}
              activeDot={{ r: 5, strokeWidth: 0 }}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.legendSwatch} style={{ background: MESSAGES_COLOR }} />
          Viestit Discord-yhteisössä
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendSwatch} style={{ background: MEMBERS_COLOR }} />
          Yhdistyksen jäsenmäärä
        </span>
      </div>
    </div>
  );
};
