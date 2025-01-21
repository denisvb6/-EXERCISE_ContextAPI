import { useState } from 'react';
import { Button } from '../../../button/button';
import styles from './sorting.module.css';

import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const Sorting = () => {
	const [isEnabled, setIsEnabled] = useState(false);

	const {setIsAlphabetSorting} = useContext(AppContext);

	const onChange = ({ target }) => {
		setIsEnabled(target.checked);
		setIsAlphabetSorting(target.checked);
	};

	return (
		<Button>
			<input
				className={styles.checkbox}
				id="sorting-button"
				type="checkbox"
				checked={isEnabled}
				onChange={onChange}
			/>
			<label className={styles.label} htmlFor="sorting-button">
				A&darr;
			</label>
		</Button>
	);
};
