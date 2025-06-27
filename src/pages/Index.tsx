
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/MetricCard";
import { BioreactorChart } from "@/components/BioreactorChart";
import { DataTable } from "@/components/DataTable";
import { AlertTriangle, Activity, Thermometer, Droplets } from "lucide-react";

const Index = () => {
  // Sample data - in a real app, this would come from your bioreactor API
  const metrics = [
    {
      title: "Temperature",
      value: "37.2°C",
      target: "37.0°C",
      status: "optimal",
      icon: Thermometer,
      trend: "+0.1"
    },
    {
      title: "pH Level",
      value: "7.15",
      target: "7.0-7.4",
      status: "optimal",
      icon: Droplets,
      trend: "+0.05"
    },
    {
      title: "Dissolved O₂",
      value: "85%",
      target: ">80%",
      status: "optimal",
      icon: Activity,
      trend: "-2%"
    },
    {
      title: "Agitation",
      value: "150 RPM",
      target: "150 RPM",
      status: "optimal",
      icon: Activity,
      trend: "0"
    }
  ];

  const alerts = [
    { id: 1, message: "pH trending upward - monitor closely", severity: "warning", time: "2 min ago" },
    { id: 2, message: "System calibration due in 4 hours", severity: "info", time: "15 min ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Bioreactor Dashboard</h1>
            <p className="text-gray-600 mt-1">Real-time monitoring and control</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              System Online
            </Badge>
            <span className="text-sm text-gray-500">Last update: 30s ago</span>
          </div>
        </div>

        {/* Alerts */}
        {alerts.length > 0 && (
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-yellow-800">
                <AlertTriangle className="h-5 w-5" />
                Active Alerts ({alerts.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between py-2 px-3 bg-white rounded-md">
                  <span className="text-sm text-gray-700">{alert.message}</span>
                  <span className="text-xs text-gray-500">{alert.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BioreactorChart 
            title="Temperature & pH Trends" 
            type="temperature-ph"
          />
          <BioreactorChart 
            title="Dissolved Oxygen" 
            type="oxygen"
          />
        </div>

        {/* Data Table */}
        <DataTable />
      </div>
    </div>
  );
};

export default Index;
