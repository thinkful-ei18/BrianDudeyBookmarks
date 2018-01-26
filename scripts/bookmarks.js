'use strict';
/*global library*/
const bookmarks = (function() {
  function generateBookmarkElement(bookmark) {
    let bookmarkTitle = `<span class="the-bookmark-title">${bookmark.title}</span>`;
    let bookmarkRating = `<span class="the-bookmark-rating">${bookmark.rating}</span>`;
    let bookmarkUrl = `<span class="the-bookmark-url">${bookmark.url}</span>`;
    let bookmarkDescription = `<span class="the-bookmark-description">${bookmark.description}</span>`;
    return `
  <li class='js-bookmark-index-element' data-bookmark-index="${bookmark.id}">
    <h3>${bookmark.title}</h3>
    <h4>Rating: ${bookmark.rating}</h2>
    <div class="expanded-view">
    <a href=${bookmarkUrl}>${bookmarkUrl}</a>
    ${bookmarkDescription}
    </div>
    <div class="bookmark-controls">
      <button class="bookmark-expand">
        <span class="expand-button">Detailed View On</span>
      </button>
      <button class="bookmark-collapse">
        <span class="collapse-button">Detailed View Off</span>
      </button>
      <button class="js-bookmark-delete">
        <span class="delete-button">DELETE BOOKMARK</span>
      </button>
    </div>
  </li>`;
  }

  function generateBookmarksString(bookmarks) {
    const bookmarkList = bookmarks.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarkList.join('');
  }

  function renderBookmarkList(list = library) {
    console.log(list);
    const bookmarksString = generateBookmarksString(list);
    $('.js-bookmark-list').html(bookmarksString);
  }

  console.log('`render` ran');
  // console.log(library);

  function addEntryToBookmarkList(bookmarkTitle, bookmarkRating, bookmarkDescription, bookmarkUrl) {
    library.push({ id: cuid(), title: bookmarkTitle, rating: bookmarkRating, description: bookmarkDescription, url: bookmarkUrl, collapsed: true,});
  }

  function handleNewBookmarkSubmit() {
    $('#js-bookmark-form').submit(function (event) {
      event.preventDefault();
      const newBookmarkTitle = $('.js-bookmark-title-entry').val();
      $('.js-bookmark-title-entry').val('');
      const newBookmarkRating = $('.js-bookmark-rating-entry').val();
      $('.js-bookmark-rating-entry').val('');
      const newBookmarkDescription = $('.js-bookmark-description-entry').val();
      $('.js-bookmark-description-entry').val('');
      const newBookmarkURL = $('.js-bookmark-url-entry').val();
      $('.js-bookmark-url-entry').val('');
      console.log('`handleNewBookmarkItem` ran');
      addEntryToBookmarkList(newBookmarkTitle, newBookmarkRating, newBookmarkDescription, newBookmarkURL);
      renderBookmarkList();
    });
  }

  function expandBookmarkView(bookmarkId) {
    const expandedItem = library.find(bookmark => bookmark.id === id);
    expandedItem.checked = !expandedItem.checked;
  }

  function collapseBookmarkView(bookmarkId) {
    const collapsedItem = library.bookmarks.find(bookmark => bookmark.id === id);
    collapsedItem.checked = !collapsedItem.checked;
  }
  function getBookmarkIndex(bookmark) {
    return $(bookmark).closest('.js-bookmark-index-element').data('bookmark-index');
  }

  function handleBookmarkExpand() {
    $('.bookmark-list').on('click', '.bookmark-expand', function (e) {
      const id = getBookmarkIndex(e.currentTarget);
      expandBookmarkView(id);
      console.log('I am trying to expand');
      renderBookmarkList();
    });
  }

  function handleBookmarkCollapse() {
    $('.bookmark-list').on('click', '.bookmark-collapse', function (e) {
      const bookmarkId = getBookmarkIndex(e.currentTarget);
      collapseBookmarkView(bookmarkId);  
      console.log('I am trying to collapse');
      renderBookmarkList();
      //$(e.currentTarget).closest('li').find('.expanded-view').hide();
    });
  }

  function deleteBookmark(id) {
    const index = library.bookmarks.find(bookmark => bookmark.id === id);
    library.bookmarks.splice(index, 1);
  }

  function handleBookmarkDelete() {
    $('.bookmark-list').on('click', '.js-bookmark-delete', function (e) {
      console.log('deleting-item');
      const id = getBookmarkIndex(e.currentTarget);
      deleteBookmark(id);
      renderBookmarkList();
    // $(this).closest('li').remove();
    });
  }

  function handleSortByTheRating() {
    $('#bookmarkRating').change('.sortByRating', function (e) {
      console.log(e.target.value);
      let targetRating = parseInt(e.target.value);
      var filteredList = library.filter(function (item) { return item.rating === targetRating; });
      renderBookmarkList(filteredList);
    }
    );
  }


  function bindEventListeners() {
    handleNewBookmarkSubmit();
    handleBookmarkExpand();
    handleBookmarkCollapse();
    handleBookmarkDelete();
    handleSortByTheRating();
  }

  return {
    renderBookmarkList: renderBookmarkList,
    bindEventListeners: bindEventListeners,
  };
}());