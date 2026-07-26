import React from 'react';
import Home from '@/pages/Home';
import { BookingModalProvider } from '@/context/BookingModalContext';

export default function App() {
  return (
    <BookingModalProvider>
      <Home />
    </BookingModalProvider>
  );
}
