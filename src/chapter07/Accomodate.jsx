import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accomodate(props) {
	const [isFull, setIsFull] = useState(false);
	const [count, increaseCount, decreaseCount] = useCounter(0);

	useEffect(() => {
		console.log('=========');
		console.log('useEffect() is called.')
		console.log(`isFull: ${isFull}`)
	});

	useEffect(() => {
		setIsFull(count >= MAX_CAPACITY);
		console.log(`Current count value: ${count}`);
	}, [count]);

	return (
		<div style={{ padding: 16 }}>
			<p>{`총 ${count}명 수용했습니다.`}</p>
			{/* disabled 속성은 React에서 제공하는 속성으로, 이 값이 true이면 버튼이 비활성화되고, false이면 활성화됩니다. */}
			<button onClick={increaseCount} disabled={isFull}>
				입장
			</button>
			<button onClick={decreaseCount}>퇴장</button>

			{isFull && <p style={{ color: 'red'}}>정원이 가득찼습니다</p>}
		</div>
	)
}

export default Accomodate