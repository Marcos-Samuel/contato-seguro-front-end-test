import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: {
      purple: {
        100: '#E0D7FF',
        200: '#B59FFF',
        300: '#8B66FF',
        400: '#6233FF',
        500: '#3A00FF',
      },
    },
    secondary: {
      yellow: {
        100: '#FFF7D7',
        200: '#FFE7A3',
        300: '#FFD770',
        400: '#FFC63D',
        500: '#FFB600',
      },
    },
    system: {
      black: {
        50: '#F5F5F5',
        100: '#E0E0E0',
        200: '#BDBDBD',
        300: '#9E9E9E',
        400: '#757575',
        500: '#424242',
      },
      error: {
        100: '#FFE6E6',
        200: '#FFB3B3',
        300: '#FF8080',
        400: '#FF4D4D',
        500: '#FF1A1A',
      },
      success: {
        100: '#E6FFEA',
        200: '#B3FFD1',
        300: '#80FFB8',
        400: '#4DFF9F',
        500: '#1AFF86',
      },
    },
  },
} as const;
