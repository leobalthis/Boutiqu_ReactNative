export const Boutiq = {
	getMyNetworkFeed() {
		return new Promise((res, rej) => {
			res(require('./fixtures/placeCard.json'));
		})
	},	
	getDiscoverFeed() {
		return new Promise((res, rej) => {
			res(require('./fixtures/discover-data.json'));
		})
	}
}
