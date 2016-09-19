export const Boutiq = {
	getMyNetworkFeed() {
		return new Promise((res, rej) => {
			res(require('./fixtures/placeCard.json'));
		})
	}
}
