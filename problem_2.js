function fiboEvenSum(n) {
	let fiboSequence = [1]
	sum = 0
	
	if (n > 1) {
		fiboSequence.push(2)
	}
	
	while (fiboSequence[fiboSequence.length - 1] < n) {
		fiboSequence.push(fiboSequence[fiboSequence.length - 2] + fiboSequence[fiboSequence.length - 1])
	}
	
	for (let num of fiboSequence) {
		if (num % 2 == 0) {
			sum += num
		}
	}
	
	return sum;
}