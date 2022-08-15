import { useState } from "react";
import { SearchContainer } from "./styles";

export default function Search(props) {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContainer>
            <div>
                <input id="searchInput" type="search" placeholder="Codigo do itinerário. EX: 1K84" onKeyUp={(e) => e.key === 'Enter' ? props.search(searchValue) : setSearchValue((e.target).value) }/>
                <button onClick={() => props.search(searchValue)}>Buscar</button>
            </div>
        </SearchContainer>
    )
}