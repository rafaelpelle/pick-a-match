import createHistory from 'history/createBrowserHistory'

export const history = createHistory({
	basename: '',
	forceRefresh: false,
})
export const location = history.location