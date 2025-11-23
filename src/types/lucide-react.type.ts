import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent } from "react";

export type LucideReactIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;
