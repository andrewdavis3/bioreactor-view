
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const DataTable = () => {
  // Sample data - in a real app, this would come from your bioreactor API
  const recentData = [
    { time: "14:30:15", temp: "37.2°C", ph: "7.15", do2: "85%", rpm: "150", status: "optimal" },
    { time: "14:29:15", temp: "37.1°C", ph: "7.16", do2: "87%", rpm: "150", status: "optimal" },
    { time: "14:28:15", temp: "37.0°C", ph: "7.18", do2: "88%", rpm: "150", status: "optimal" },
    { time: "14:27:15", temp: "36.9°C", ph: "7.15", do2: "86%", rpm: "150", status: "optimal" },
    { time: "14:26:15", temp: "37.1°C", ph: "7.12", do2: "84%", rpm: "150", status: "warning" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "optimal":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Optimal</Badge>;
      case "warning":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Warning</Badge>;
      case "critical":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Critical</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Data Points</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Time</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Temperature</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">pH</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">DO₂</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">RPM</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 text-sm font-mono text-gray-600">{row.time}</td>
                  <td className="py-3 px-2 text-sm font-semibold text-gray-900">{row.temp}</td>
                  <td className="py-3 px-2 text-sm font-semibold text-gray-900">{row.ph}</td>
                  <td className="py-3 px-2 text-sm font-semibold text-gray-900">{row.do2}</td>
                  <td className="py-3 px-2 text-sm font-semibold text-gray-900">{row.rpm}</td>
                  <td className="py-3 px-2">{getStatusBadge(row.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
