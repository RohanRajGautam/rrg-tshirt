import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: '#efbd48',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './rrg-circle.png',
	fullDecal: './rrg-circle.png',
})

export default state
