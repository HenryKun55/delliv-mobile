import { useCallback, useState } from 'react';

export const useToggle = (initialState?: boolean) => {
  const [toggle, setToggle] = useState(initialState ?? false);

  const handleToggle = useCallback(() => setToggle((state) => !state), []);
  const handleOpen = useCallback(() => setToggle(true), []);
  const handleClose = useCallback(() => setToggle(false), []);

  return { toggle, handleToggle, handleOpen, handleClose };
};
