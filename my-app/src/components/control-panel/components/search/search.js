import { useRef, useState } from 'react';
import { debounce } from './utils';
import styles from './search.module.css';

import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const Search = () => {
	const [value, setValue] = useState('');

	const {setSearchPhrase} = useContext(AppContext);

	const debouncedOnSearch = useRef(debounce(setSearchPhrase, 1500)).current;


	const onChange = ({ target }) => {
		setValue(target.value);
		debouncedOnSearch(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setSearchPhrase(value);
	};

	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input
				className={styles.input}
				type="text"
				value={value}
				placeholder="Поиск..."
				onChange={onChange}
			/>
		</form>
	);
};
