export const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      React: 'bg-blue-500',
      Javascript: 'bg-yellow-500',
      Python: 'bg-green-500',
      Swift: 'bg-orange-500',
      Java: 'bg-red-500'
    };
    return colors[language] || 'bg-gray-500';
  };