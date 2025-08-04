'use client';

import useTheme from '@/hooks/useTheme';
import { Button } from './button';

export default function ThemeButton() {
  const { mount, theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      type="button"
      className="flex flex-row gap-1.5 py-2 px-4 dark:border-gray-600 border-gray-300 text-design-gray text-sm font-medium"
      onClick={() => toggleTheme(theme, true)}
    >
      {mount && (theme === 'dark' ? '🔆' : '🌜')}
    </Button>
  );
}
