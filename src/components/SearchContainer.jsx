import searchIcon from "../assets/search-icon.svg"
import SearchInput from './SearchInput';

function SearchContainer() {
  return (
    <div className="flex flex-row bg-white rounded-2xl w-full py-5">
      <img className="w-7 h-7 pl-2" src={searchIcon} />
      <SearchInput />
    </div>
  )
}

export default SearchContainer