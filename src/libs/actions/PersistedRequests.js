import Onyx from 'react-native-onyx';
import _ from 'underscore';
import ONYXKEYS from '../../ONYXKEYS';

let persistedRequests = [];

Onyx.connect({
    key: ONYXKEYS.PERSISTED_REQUESTS,
    callback: (val) => (persistedRequests = val || []),
});

function clear() {
    Onyx.set(ONYXKEYS.PERSISTED_REQUESTS, []);
}

/**
 * @param {Array} requestsToPersist
 */
function save(requestsToPersist) {
    persistedRequests = persistedRequests.concat(requestsToPersist);
    Onyx.set(ONYXKEYS.PERSISTED_REQUESTS, persistedRequests);
}

/**
 * @param {Object} requestToRemove
 */
function remove(requestToRemove) {
    const index = _.findIndex(persistedRequests, (persistedRequest) => _.isEqual(persistedRequest, requestToRemove));
    if (index !== -1) {
        persistedRequests.splice(index, 1);
    }

    Onyx.set(ONYXKEYS.PERSISTED_REQUESTS, persistedRequests);
}

/**
 * @returns {Array}
 */
function getAll() {
    return persistedRequests;
}

export {clear, save, getAll, remove};
