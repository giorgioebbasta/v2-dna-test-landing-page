import { PasswordStrength } from '@/utils/passwordValidation';
import { Progress } from '@/components/ui/progress';

interface PasswordStrengthIndicatorProps {
  strength: PasswordStrength;
}

const PasswordStrengthIndicator = ({ strength }: PasswordStrengthIndicatorProps) => {
  const getColorClass = () => {
    if (strength.score <= 1) return 'text-destructive';
    if (strength.score === 2) return 'text-orange-500';
    if (strength.score === 3) return 'text-yellow-500';
    if (strength.score === 4) return 'text-blue-500';
    return 'text-green-500';
  };

  const getProgressColor = () => {
    if (strength.score <= 1) return '[&>div]:bg-destructive';
    if (strength.score === 2) return '[&>div]:bg-orange-500';
    if (strength.score === 3) return '[&>div]:bg-yellow-500';
    if (strength.score === 4) return '[&>div]:bg-blue-500';
    return '[&>div]:bg-green-500';
  };

  const progressValue = (strength.score / 5) * 100;

  return (
    <div className="space-y-2">
      <Progress value={progressValue} className={`h-2 ${getProgressColor()}`} />
      <p className={`text-sm font-medium ${getColorClass()}`}>
        {strength.feedback}
      </p>
    </div>
  );
};

export default PasswordStrengthIndicator;
