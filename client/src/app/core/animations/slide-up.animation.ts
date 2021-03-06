// animations
import {
	trigger,
	transition,
	animate,
	keyframes,
	style
} from '@angular/animations';

export const slideUpAnimation =
	trigger('slideUpAnimation', [
		transition(':enter', [
			animate(400, keyframes([
				style({
					'opacity': 0,
					'transform': 'translate3d(0, 100%, 0)',
					'offset': 0
				}),
				style({
					'opacity': 1,
					'transform': 'none',
					'offset': 1
				})
			]))
		]),
		transition(':leave', [
			animate(400, keyframes([
				style({
					'opacity': 1,
					'offset': 0
				}),
				style({
					'opacity': 0,
					'transform': 'translate3d(0, 100%, 0)',
					'offset': 1
				})
			]))
		])
	])
