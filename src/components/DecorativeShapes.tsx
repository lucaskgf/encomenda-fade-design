
import React from "react";
import { cn } from "@/lib/utils";

interface ShapeProps {
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animation?: "float" | "pulse" | "scale" | "none";
  variant?: "1" | "2" | "3";
  rotate?: number;
}

export const DecorativeShape: React.FC<ShapeProps> = ({
  className,
  color = "bg-jalupa-coral",
  size = "md",
  animation = "float",
  variant = "1",
  rotate = 0,
}) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-32 h-32",
    lg: "w-64 h-64",
    xl: "w-96 h-96",
  };

  const animationClasses = {
    float: "animate-float",
    pulse: "animate-pulse-slow",
    scale: "animate-scale",
    none: "",
  };

  const shapeClass = `shape-${variant}`;

  return (
    <div
      className={cn(
        color,
        sizeClasses[size],
        animationClasses[animation],
        shapeClass,
        "absolute opacity-90",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    ></div>
  );
};

export const HeroShapes: React.FC = () => {
  return (
    <>
      <DecorativeShape
        className="-top-10 -right-10"
        color="bg-jalupa-orange"
        size="lg"
        variant="1"
      />
      <DecorativeShape
        className="bottom-32 -left-20"
        color="bg-jalupa-coral"
        size="md"
        animation="pulse"
        variant="2"
        rotate={45}
      />
      <DecorativeShape
        className="top-1/2 right-1/4"
        color="bg-jalupa-teal"
        size="sm"
        animation="float"
        variant="3"
        rotate={15}
      />
    </>
  );
};

export const BackgroundShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <DecorativeShape
        className="-top-40 -left-40"
        color="bg-jalupa-orange/20"
        size="xl"
        animation="pulse"
        variant="2"
      />
      <DecorativeShape
        className="bottom-0 -right-40"
        color="bg-jalupa-coral/20"
        size="xl"
        animation="float"
        variant="1"
        rotate={180}
      />
      <DecorativeShape
        className="top-1/3 left-1/3"
        color="bg-jalupa-teal/10"
        size="lg"
        animation="float"
        variant="3"
        rotate={45}
      />
      <DecorativeShape
        className="bottom-1/4 left-1/4"
        color="bg-jalupa-cream/10"
        size="md"
        animation="pulse"
        variant="1"
      />
    </div>
  );
};
