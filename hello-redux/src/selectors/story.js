function isNotArchived(archivedIds) {
    return function (story) {
        return archivedIds.indexOf(story.objectID) === -1;
    };
}

function getReadableStories(state) {
    return state.storyState.filter(isNotArchived(state.archiveState));
}

export { getReadableStories };