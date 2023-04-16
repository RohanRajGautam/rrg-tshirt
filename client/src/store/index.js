import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: '#000000',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './rrg-circle.png',
	fullDecal: './rrg-circle.png',
})

export default state
