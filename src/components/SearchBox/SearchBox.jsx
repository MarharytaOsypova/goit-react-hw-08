import { useDispatch, useSelector } from 'react-redux';
 
import styles from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={styles.searchContainer}>
      <label>Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={styles.searchBox}
      />
    </div>
  );
};

export default SearchBox;