import React from 'react';
import Input from "@/ui/atoms/input/Input";  
import Button from "@/ui/atoms/button/Button";
import styles from './searchbar.module.scss';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: () => void;
    placeholder: string;
}

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, placeholder }: SearchBarProps) => {
    return (
        <div className={styles.searchContainer}>
            <Input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
                variant="secondary"
                onClick={handleSearch}
            >
                Search
            </Button>
        </div>
    );
};

export default SearchBar;
