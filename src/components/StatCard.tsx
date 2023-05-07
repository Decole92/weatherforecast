"use client";
import { Card, Color, Metric, Text } from "@tremor/react";
import React from "react";

type Props = {
  color?: Color;
  title: string;
  metric: string;
};
function StatCard({ title, metric, color }: Props) {
  return (
    <Card decoration="top" decorationColor={color}>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}

export default StatCard;
