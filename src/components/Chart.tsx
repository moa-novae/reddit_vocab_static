import React from "react";
import {
  ScatterChart,
  Scatter,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { LexicalChartData } from "../../types/index";

type ChartProps = {
  subredditChartData: LexicalChartData[];
  literatureChartData: LexicalChartData[];
};

export default ({ subredditChartData, literatureChartData }: ChartProps) => {
  return (
    <ScatterChart width={700} height={300}>
      <XAxis
        dataKey="averageSentenceLength"
        name="Average Sentence Length"
        type="number"
        domain={["0.6 * dataMin", "auto"]}
      >
        <Label
          value="Average Sentence Length (words/sentence)"
          position="insideBottom"
          offset={-10}
          style={{ fill: "rgb(242,242,242)" }}
        />
      </XAxis>
      <YAxis dataKey="mtld" name="MTLD" domain={["dataMin - 10", "auto"]}>
        <Label
          value="MTLD"
          position="insideLeft"
          style={{ fill: "rgb(242,242,242)" }}
          angle={-90}
        />
      </YAxis>
      <Tooltip content={<CustomTooltip />} />
      <Scatter name="Subreddits" data={subredditChartData} fill="#fff" />
      <Scatter name="Literature" data={literatureChartData} fill="#7289DA" />
      <Legend wrapperStyle={{ top: -10 }} />
    </ScatterChart>
  );
};
