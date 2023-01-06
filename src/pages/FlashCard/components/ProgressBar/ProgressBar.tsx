import React from "react";
import { ProgressIndicator, ProgressView } from "./styles";

interface IProgressBar {
  percent: number;
}

export default function ProgressBar({ percent }: IProgressBar) {
  return (
    <ProgressView>
      <ProgressIndicator progress={percent} />
    </ProgressView>
  );
}
