
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  change?: number;
  timePeriod?: string;
  isPercentage?: boolean;
}

const MetricsCard = ({ 
  title, 
  value, 
  icon, 
  change = 0, 
  timePeriod = "vs. last week", 
  isPercentage = false 
}: MetricsCardProps) => {
  
  // Format value based on whether it should be a percentage
  const formattedValue = isPercentage ? `${value}%` : value.toLocaleString();
  
  // Determine if change is positive, negative, or neutral
  const isPositiveChange = change > 0;
  const isNegativeChange = change < 0;
  const changeAbs = Math.abs(change);
  
  // Format change value
  const formattedChange = isPercentage 
    ? `${changeAbs}%` 
    : changeAbs.toLocaleString();
  
  // Determine change indicator
  const ChangeIcon = isPositiveChange 
    ? ChevronUp 
    : isNegativeChange 
      ? ChevronDown 
      : Minus;
  
  // Determine trend icon
  const TrendIcon = isPositiveChange 
    ? TrendingUp 
    : isNegativeChange 
      ? TrendingDown 
      : Minus;
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 pb-0 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className="p-1.5 rounded-full bg-gray-50">{icon}</div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="text-2xl font-semibold mb-1">{formattedValue}</div>
        <div className="flex items-center text-xs">
          <span 
            className={cn(
              "flex items-center",
              isPositiveChange ? "text-green-600" : 
              isNegativeChange ? "text-red-600" : 
              "text-gray-400"
            )}
          >
            <ChangeIcon className="h-3 w-3 mr-1" />
            {formattedChange}
          </span>
          <span className="text-gray-500 ml-1.5">{timePeriod}</span>
          <div className="ml-auto">
            <TrendIcon 
              className={cn(
                "h-4 w-4", 
                isPositiveChange ? "text-green-500" : 
                isNegativeChange ? "text-red-500" : 
                "text-gray-300"
              )} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
