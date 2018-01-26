'use strict';
const library = [
  {id: cuid(), title: 'GitHub', rating: 4, description: 'all the code', url: 'www.github.com', collapsed: true, },
  {id: cuid(), title: 'Stack Overflow', rating: 3, description: 'all the answers', url: 'www.stackoverflow.com', collapsed: true, },
  {id: cuid(), title: 'Reddit', rating: 2, description: 'all the trolls', url: 'www.reddit.com', collapsed: true, },
  {id: cuid(), title: 'Thinkful', rating: 4, description: 'all the smarts', url: 'www.thinkful.com', collapsed: true, }
];


$(document).ready(function() {
  bookmarks.bindEventListeners();
  bookmarks.renderBookmarkList();
});