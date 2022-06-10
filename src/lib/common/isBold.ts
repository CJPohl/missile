// If element is active, make bold
const isBold = (active: string, element: string) => {
  if (element === active) return 'bold';
  return 'normal';
};

export default isBold;
