import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'
import { Cell } from '../Cell'
import { Colors } from '../Color'
import { Figure, FigureNames } from './Figure'

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.KING
	}

	canMove(target: Cell): boolean {
		const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
		// нужно доделать ход Короля
		if (
			(target.y === this.cell.y + direction ||
				(this.cell.x && target.y === this.cell.y)) &&
			target.x === this.cell.x &&
			this.cell.board.getCell(target.x, target.y).isEmpty()
		) {
			return true
		}
		if (
			target.y === this.cell.y + direction &&
			(target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
			this.cell.isEnemy(target)
		) {
			return true
		}
		return false
	}

	moveFigure(target: Cell) {
		super.moveFigure(target)
	}
}
