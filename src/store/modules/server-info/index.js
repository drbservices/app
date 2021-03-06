import mutations from './mutations';
import * as actions from './actions';

export const initialState = {
	apiVersion: null,
	phpVersion: null,
	maxUploadSize: null,

	// This should be dynamic as soon as the API supports multiple database vendors
	databaseVendor: 'mysql'
};

export default {
	state: _.clone(initialState),
	mutations,
	actions
};
