export function getTimeDifference(date1, date2) {
	const differenceInMin = Math.abs(date1 - date2) / 6.0e4;
	const hours = Math.floor(differenceInMin / 60);
	const minutes = Math.floor(differenceInMin % 60);
	if (minutes < 10) {
		return `${hours}:0${minutes}`;
	}
	return `${hours}:${minutes}`;
}
