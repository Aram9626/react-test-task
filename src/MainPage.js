import { useState, useEffect, useMemo } from 'react';
import Navbar from './nav/Navbar';
import MovieCarousel from './MovieCarousel';

function MainPage() {
    return (
      <div>
        <Navbar/>
        <MovieCarousel/>
      </div>
    );
  }
  
  export default MainPage;