import { describe, expect, it } from 'bun:test'

describe('app', () => {
	it('should support string interpolation', () => {
		const name = 'Bun'
		expect(`Hello ${name}`).toBe('Hello Bun')
	})
})
