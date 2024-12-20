import React from 'react';
import Input from "@/ui/atoms/input/Input";  
import Button from "@/ui/atoms/button/Button";
import styles from './SearchBar.module.scss';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: () => void;
}

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }: SearchBarProps) => {
    return (
        <div className={styles.searchContainer}>
            <Input
                type="text"
                placeholder="Search for a team"
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
