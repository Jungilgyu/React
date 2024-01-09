import React from 'react';
import Comment from './Comment';

const comments = [
	{
		name: '일규1',
		comment: '일규1입니다'
	},
	{
		name: '일규2',
		comment: '일규2입니다'
	},
	{
		name: '일규3',
		comment: '일규3입니다.'
	},
]

function CommentList(props) {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<Comment name={comment.name} comment={comment.comment}/>
				)
			})}
		</div>
	)
}

export default CommentList
