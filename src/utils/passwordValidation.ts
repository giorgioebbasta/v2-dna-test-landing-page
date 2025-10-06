export interface PasswordStrength {
  score: number; // 0-4
  feedback: string;
  isValid: boolean;
}

export const validateAdminPassword = (password: string): PasswordStrength => {
  let score = 0;
  const feedback: string[] = [];

  // Minimum length check
  if (password.length < 12) {
    return {
      score: 0,
      feedback: 'Password must be at least 12 characters long',
      isValid: false,
    };
  }
  score++;

  // Check for lowercase
  if (!/[a-z]/.test(password)) {
    feedback.push('Add lowercase letters');
  } else {
    score++;
  }

  // Check for uppercase
  if (!/[A-Z]/.test(password)) {
    feedback.push('Add uppercase letters');
  } else {
    score++;
  }

  // Check for numbers
  if (!/[0-9]/.test(password)) {
    feedback.push('Add numbers');
  } else {
    score++;
  }

  // Check for symbols
  if (!/[^A-Za-z0-9]/.test(password)) {
    feedback.push('Add symbols (!@#$%^&*)');
  } else {
    score++;
  }

  const isValid = score >= 5;
  
  let strengthText = '';
  if (score <= 1) strengthText = 'Very Weak';
  else if (score === 2) strengthText = 'Weak';
  else if (score === 3) strengthText = 'Fair';
  else if (score === 4) strengthText = 'Good';
  else strengthText = 'Strong';

  return {
    score,
    feedback: isValid ? strengthText : feedback.join(', '),
    isValid,
  };
};
