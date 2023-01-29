function Delete({ id, deleteEvent }) {
	const handleDelete = () => {
		//delete from central store
		deleteEvent(id);
	};
	return (
		<>
			<button onClick={handleDelete}>Delete</button>
		</>
	);
}

export default Delete;
