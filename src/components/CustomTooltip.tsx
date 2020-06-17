import React from "react";
import { LexicalChartData } from "../../types/index";
export default (props: {
  active?: boolean;
  payload?:
    | {
        dataKey: string;
        name: string;
        payload: object;
        type: any;
        value: number;
      }[]
    | [];
}) => {
  const { active } = props;
  const { payload } = props;
  if (active && payload.length > 0) {
    const item = payload[0];
    const pointAttr: LexicalChartData = item?.payload || {};
    const name: string = pointAttr.name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    const mtld: any = (Math.round(pointAttr.mtld * 100) / 100).toFixed(2);
    const averageSentenceLength: any = (
      Math.round(pointAttr.averageSentenceLength * 100) / 100
    ).toFixed(2);
    return (
      <div className="tooltip">
        <p>{name}</p>
        <p>{`MTLD: ${mtld.toString()}`}</p>
        <p>{`Average Sentence Length: ${averageSentenceLength.toString()}`}</p>
      </div>
    );
  }
  return null;
};
