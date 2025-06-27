
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  target: string;
  status: "optimal" | "warning" | "critical";
  icon: LucideIcon;
  trend: string;
}

export const MetricCard = ({ title, value, target, status, icon: Icon, trend }: MetricCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
        return "text-green-600 bg-green-50 border-green-200";
      case "warning":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "critical":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getTrendColor = (trend: string) => {
    if (trend.startsWith("+")) return "text-green-600";
    if (trend.startsWith("-")) return "text-red-600";
    return "text-gray-600";
  };

  return (
    <Card className={cn("transition-all duration-200 hover:shadow-lg", getStatusColor(status))}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Icon className="h-8 w-8 text-current opacity-70" />
          <Badge 
            variant="outline" 
            className={cn("text-xs", getStatusColor(status))}
          >
            {status.toUpperCase()}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            <span className={cn("text-sm font-medium", getTrendColor(trend))}>
              {trend !== "0" && `${trend}`}
            </span>
          </div>
          <p className="text-sm text-gray-600">Target: {target}</p>
        </div>
      </CardContent>
    </Card>
  );
};
