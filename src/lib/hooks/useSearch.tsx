import { useRouter } from 'next/router';
import { useState } from 'react';

// Store search hook
const useSearch = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    router.push(`/store/spells/search/${searchQuery}`);
    setSearchQuery('');
  };

  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
  };
};

export default useSearch;
