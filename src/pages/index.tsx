import React from "react";
import { useRouteData } from "react-static";
import { LexicalData, LexicalChartData } from "../../types/index";
import Chart from "../components/Chart";

export default () => {
  const {
    subredditData,
    literatureData,
  }: {
    subredditData: LexicalData;
    literatureData: LexicalData;
  } = useRouteData();
  // transform data shape for chart
  function transformDataToChart(Ld: LexicalData): LexicalChartData[] {
    const output = [];
    for (const [name, data] of Object.entries(Ld)) {
      output.push({
        name,
        mtld: data.mtld,
        averageSentenceLength: data.avg_sentence_length,
      });
    }
    return output;
  }
  const subredditChartData = transformDataToChart(subredditData);
  const literatureChartData = transformDataToChart(literatureData);

  return (
    <>
      <h1>Welcome to Reddit Lexical Analysis</h1>
      <h2>What is this about?</h2>
      <p>
        I wanted to analyze the vocabulary of redditors on different subreddits
        and I also wanted to get started on learning python. So I wrote a python
        script that measures the lexical diversity of different subreddit
        comment sections. MTLD is used to measure how diverse the vocabulary is
        in a given text. Basically, a higher MTLD number suggests a more diverse
        vocabulary. If you are interested and want to see how MTLD is
        calculated, you can read about it
        <a href="https://core.ac.uk/download/pdf/82620241.pdf"> here.</a>
      </p>
      <p>You are here for the data, so here it is!</p>
      <br />
      <div className="chart-container">
        <Chart
          subredditChartData={subredditChartData}
          literatureChartData={literatureChartData}
        />
      </div>
      <div className="description">
        <h2>So what does this graph mean?</h2>
        <p>
          I analyzed some literature texts and popular subreddits' comment
          sections. Out of the ones I looked at, r/news, r/askhistorians and
          r/funny had the highest lexical diversity. It was really surprising to
          me that r/funny had such a high MTLD. I am not sure why.
        </p>
        <p>
          r/philosophy and r/askhistorians have the highest average sentence
          length, which makes sense to me due to the nature of those topics.
        </p>
        <p>
          Compared to subreddits, classic literature pieces such as Pride and
          Prejudice and Little Women have a fairly high MTLD score and much
          higher average sentence length than the subreddits analyzed. To better
          understand what MTLD means, I also looked at The Cat in the Hat. It
          has the lowest MTLD and second lowest sentence length out of all text measured.
        </p>
        <h2>What is the sample size of the subreddit comment sections?</h2>
        <p>
          Roughly, 20000 words (it is actually tokens) are taken from yearly top
          posts of individual subreddits and analyzed.
        </p>
      </div>
    </>
  );
};
