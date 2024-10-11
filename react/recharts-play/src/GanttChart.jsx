import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Call 1", call: 30, idle: 20, processing: 40 },
  { name: "Call 2", call: 50, idle: 10, processing: 30 },
];

import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Stage: ${payload[0].name}`}</p>
        <p>{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

export default function GanttChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="call" fill="#82ca9d" />
        <Bar dataKey="idle" fill="#8884d8" strokeDasharray="5 5" />
        <Bar dataKey="processing" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
}
