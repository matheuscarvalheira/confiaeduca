import { ReactNode } from "react";

export interface AccordionProps<T> {
  items: T[];
  renderHeader: (item: T) => ReactNode;
  renderContent: (item: T) => ReactNode;
  isAnswered: (item: T) => boolean;
}