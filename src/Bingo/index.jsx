import { useState } from "react"

const styles = {
	box: 'border border-1 w-20 h-20 dark:text-white text-center leading-[5rem] bg-transparent'
}
const array1 = [
	8,21,32,57,63,9,19,40,46,65,14,27,'free',51,67,7,25,34,53,66,13,17,36,49,61
]
const array2 = [
	10,28,38,48,72,1,20,45,59,70,2,22,'free',56,64,11,29,36,58,69,15,26,41,54,73
]

const array3 = [
	5,29,35,52,67,1,26,33,50,65,6,27,'free',55,66,3,30,32,60,74,10,21,40,47,68
]
const array4 = [
	2,17,37,50,75,11,24,34,53,71,4,16,'free',59,62,13,25,44,52,61,9,19,39,46,63
]

const arr5 = [
	15,16,35,58,75,14,21,44,50,66,13,26,'free',51,73,8,23,45,46,69,6,17,31,53,68
]
const arr6 = [
	2,22,44,52,62,12,25,33,57,61,3,27,'free',60,67,10,18,31,55,69,7,29,38,54,65
]
const arr7 = [
	13,17,41,46,63,4,28,39,57,72,14,19,'free',48,70,2,23,35,58,73,11,30,37,56,74
]

const BingoComp = () => {
	const [active, setActive] = useState(['free'])
	const [inputText, setInputText] = useState('')
	const handleClick = (data) => {
		if (active.includes(data)) {
			const newActive = active.filter((val) => val !== data)
			setActive(newActive)
		} else {
			setActive(prev => ([...prev, data]))
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault(); handleClick(Number(inputText)); setInputText('') }
  return (
    <div>
			<div className='grid grid-cols-4 bg-transparent'>
				
				{[array1, array2, array3, array4, arr5, arr6, arr7].map((array, idxx) => (
					<div key={idxx} className='grid grid-cols-5 border-2 bg-transparent'>
						{array.map((data, idx)=> {

							return (
								<div key={idx} className={styles.box} style={{ background: active.includes(data) ? '#ff3' : '#fff' }} onClick={() => { handleClick(data) }}>
									{data}
								</div>
							)
						})}

					</div>
				))}

			</div>
			<form onSubmit={handleSubmit}>
				<input onChange={(e) => setInputText(e.target.value)} value={inputText} autoFocus />
				<button type='submit' ></button>
			</form>
			<button onClick={(() => setActive(['free']))}>RESET</button>
			<pre>{JSON.stringify(active)}</pre>
		</div>
  )
}

export default BingoComp
