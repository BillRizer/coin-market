import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Props {
  data: any;
}

export const ChartComponent = ({ data }: Props) => {
  return (
    <AreaChart width={300} height={112} data={data}>
      <CartesianGrid stroke="#F0F0F0" />
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="60%" stopColor="#F4CC8F" stopOpacity={1} />
          <stop offset="70%" stopColor="#F4CC8F" stopOpacity={0.7} />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.7} />
        </linearGradient>
      </defs>

      <Tooltip />
      <Area type="monotone" dataKey="uv" fill="url(#colorUv)" stroke={""} />
    </AreaChart>
  );
};
