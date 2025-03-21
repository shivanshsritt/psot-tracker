
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  changeText?: string;
  className?: string;
}

export const StatCard = ({ 
  title, 
  value, 
  icon, 
  change, 
  changeText = 'vs. previous period',
  className 
}: StatCardProps) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  
  const ChangeIcon = isPositive 
    ? ArrowUp 
    : isNegative 
      ? ArrowDown 
      : Minus;
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-500">{title}</span>
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        <div className="text-3xl font-bold mb-2">{value}</div>
        
        {change !== undefined && (
          <div className="flex items-center text-sm">
            <span 
              className={cn(
                "flex items-center gap-1",
                isPositive ? "text-green-600" : 
                isNegative ? "text-red-600" : 
                "text-gray-500"
              )}
            >
              <ChangeIcon className="h-3 w-3" />
              <span>{Math.abs(change)}%</span>
            </span>
            <span className="text-gray-500 ml-1.5">{changeText}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
