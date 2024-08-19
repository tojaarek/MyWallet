import { useState, useEffect } from 'react';
import { Button, LogoutIcon } from './ButtonLogout.styled';

const ButtonLogout = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Button>
      <LogoutIcon />
      {isMobile && 'Exit'}
    </Button>
  );
};

export default ButtonLogout;
