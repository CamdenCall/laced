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
    console.log(payload[0])
    return (
      <div className="tooltip">
        <p className="label">{`${payload[0].payload.name}: ${payload[0].value}`}</p>
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
          width={100}
          height={250}
          data={data}
          margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="25%" stopColor="#6763FF" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#8AE4FF" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />}/>
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8AE4FF"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
