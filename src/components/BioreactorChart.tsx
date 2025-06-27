
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface BioreactorChartProps {
  title: string;
  type: "temperature-ph" | "oxygen";
}

export const BioreactorChart = ({ title, type }: BioreactorChartProps) => {
  // Sample data - in a real app, this would come from your bioreactor API
  const temperaturePhData = [
    { time: "00:00", temperature: 37.0, pH: 7.1 },
    { time: "01:00", temperature: 37.1, pH: 7.12 },
    { time: "02:00", temperature: 37.2, pH: 7.08 },
    { time: "03:00", temperature: 37.0, pH: 7.15 },
    { time: "04:00", temperature: 36.9, pH: 7.18 },
    { time: "05:00", temperature: 37.1, pH: 7.16 },
    { time: "06:00", temperature: 37.2, pH: 7.15 },
  ];

  const oxygenData = [
    { time: "00:00", oxygen: 88 },
    { time: "01:00", oxygen: 87 },
    { time: "02:00", oxygen: 85 },
    { time: "03:00", oxygen: 86 },
    { time: "04:00", oxygen: 84 },
    { time: "05:00", oxygen: 83 },
    { time: "06:00", oxygen: 85 },
  ];

  const data = type === "temperature-ph" ? temperaturePhData : oxygenData;

  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          {type === "temperature-ph" ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="time" 
                className="text-sm text-gray-600"
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                yAxisId="temp"
                domain={[36, 38]}
                className="text-sm text-gray-600"
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                yAxisId="ph"
                domain={[6.8, 7.4]}
                orientation="right"
                className="text-sm text-gray-600"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                yAxisId="temp"
                type="monotone" 
                dataKey="temperature" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                name="Temperature (°C)"
              />
              <Line 
                yAxisId="ph"
                type="monotone" 
                dataKey="pH" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                name="pH Level"
              />
            </LineChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="time" 
                className="text-sm text-gray-600"
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                domain={[80, 90]}
                className="text-sm text-gray-600"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="oxygen" 
                stroke="#f59e0b" 
                strokeWidth={2}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                name="Dissolved O₂ (%)"
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
