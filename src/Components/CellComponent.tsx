import { FC } from 'react'
import { Cell } from '../Models/Cell'

interface CellPorps {
	cell: Cell
	selected: boolean
	click: (cell: Cell) => void
}

const CellComponent: FC<CellPorps> = ({ cell, selected, click }) => {
	return (
		<div
			className={['cell', cell.color, selected ? 'selected' : ' '].join(' ')}
			onClick={() => click(cell)}
			style={{ background: cell.available && cell.figure ? 'green' : '' }}
		>
			{cell.available && !cell.figure && <div className='available' />}
			{cell.figure?.logo && (
				<img src={cell.figure.logo} alt={cell.figure.name} />
			)}
		</div>
	)
}

export default CellComponent
