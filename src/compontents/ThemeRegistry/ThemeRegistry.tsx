'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { lightTheme, darkTheme } from './theme';
import ThemeChange from '@/compontents/ThemeChange.tsx';
import { useEffect, useState } from 'react';

function getActiveTheme(themeMode: 'light' | 'dark') {
  return themeMode === 'light' ? lightTheme : darkTheme;
}
export default function ThemeRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('');

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', desiredTheme);
    console.log(
      '🚀 ~ file: ThemeRegistry.tsx:23 ~ selectedTheme:',
      selectedTheme
    );
    console.log(
      '🚀 ~ file: ThemeRegistry.tsx:23 ~ desiredTheme:',
      desiredTheme
    );
    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setSelectedTheme(theme);
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={activeTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <ThemeChange toggleTheme={toggleTheme}></ThemeChange>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
