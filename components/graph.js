import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./graph.scss";

const data = [
  { name: "January", Total: 70 },
  { name: "February", Total: 50 },
  { name: "March", Total: 40 },
  { name: "April", Total: 55 },
  { name: "May", Total: 35 },
  { name: "June", Total: 24 },
];

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
}

const Chart = () => {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.15)" />
          <Tooltip content={<CustomTooltip />}/>
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
