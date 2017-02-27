// Increment
function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// Add comment
function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// Remove comment
function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
