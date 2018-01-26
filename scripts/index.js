'use strict';
const LIBRARY = [
  { title: 'GitHub', rating: 4, description: 'all the code', url: 'www.github.com', collapsed: true, },
  { title: 'Stack Overflow', rating: 3, description: 'all the answers', url: 'www.stackoverflow.com', collapsed: true, },
  { title: 'Reddit', rating: 2, description: 'all the trolls', url: 'www.reddit.com', collapsed: true, },
  { title: 'Thinkful', rating: 4, description: 'all the smarts', url: 'www.thinkful.com', collapsed: true, }
];

function generateBookmarkElement(title, rating, urlAddress, description, bookmarkIndex, template) {
  return `
  <li class='js-bookmark-index-element' data-bookmark-index="${bookmarkIndex}">
    <h3><span class="the-bookmark-title">${title.title}</span></h3>
        <div>
        <div>
          <span class="the-bookmark-rating">Rating: ${title.rating}</span>
        </div>
        <div class="expanded-view">
          <div>
          <a href=${title.url}><span class="the-bookmark-url">${title.url}</span>
          </a></div>
          <div>
          <span class="the-bookmark-description">${title.description}</span>
          </div>
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
        </div>
      </li>`;
}

function generateBookmarkString(bookmarkList) {
  console.log('generating bookmark string');
  const bookmarks = bookmarkList.map((title, rating, urlAddress, description, bookmarkIndex) => generateBookmarkElement(title, rating, urlAddress, description, bookmarkIndex));
  return bookmarks.join('');
}

function renderBookmarkList(list = LIBRARY) {
  console.log('`renderBookmarkList` ran');
  const bookmarkString = generateBookmarkString(list);
  $('.js-bookmark-list').html(bookmarkString);
}

function addEntryToBookmarkList(bookmarkTitle, bookmarkRating, bookmarkUrl, bookmarkDescription, bookmarkIndex) {
  LIBRARY.push({title: bookmarkTitle, rating: bookmarkRating, url: bookmarkUrl, description: bookmarkDescription, collapsed: true, bookmarkIndex: bookmarkIndex});
}

function handleNewBookmarkSubmit() {
  $('#js-bookmark-form').submit(function(e) {
    e.preventDefault();
    $('#js-bookmark-form').submit(function (event) {
      event.preventDefault();
      const newBookmarkTitle = $('.js-bookmark-title-entry').val();
      $('.js-bookmark-title-entry').val('');
      const newBookmarkRating = $('.js-bookmark-rating-entry').val();
      $('.js-bookmark-rating-entry').val('');
      const newBookmarkURL = $('.js-bookmark-url-entry').val();
      $('.js-bookmark-url-entry').val('');
      const newBookmarkDescription = $('.js-bookmark-description-entry').val();
      $('.js-bookmark-description-entry').val('');
      console.log('`handleNewBookmarkItem` ran'); 
      addEntryToBookmarkList(newBookmarkTitle, newBookmarkRating, newBookmarkURL, newBookmarkDescription);
      renderBookmarkList();
    });
  });
}

// function toggleExpand(bookmarkIndex) {
//   console.log('Toggling expand property for item at index' + bookmarkIndex);
//   LIBRARY[bookmarkIndex].checked = !LIBRARY[bookmarkIndex].checked;
// }

function getBookmarkIndex(title) {
  console.log(getBookmarkIndex);
  const bookmarkIndexString = $(title).closest('.js-bookmark-index-element').attr('data-bookmark-index');
  return parseInt(bookmarkIndexString, 10);
}


function handleBookmarkExpand() {
  $('.bookmark-list').on('click', '.bookmark-expand', function(e) {
    console.log('I am trying');
    $(e.currentTarget).closest('li').find('.expanded-view').show();
  });
}

function handleBookmarkCollapse() {
  $('.bookmark-list').on('click', '.bookmark-collapse', function (e) {
    console.log('I am trying');
    $(e.currentTarget).closest('li').find('.expanded-view').hide();
  });
  console.log('`handleBookmarkCollapse` ran');
}

function deleteBookmark(bookmarkIndex) {
  console.log(`Deleting ${bookmarkIndex}`);
  LIBRARY.splice(bookmarkIndex, 1);
}

function handleBookmarkDelete() {
  $('.bookmark-list').on('click', '.js-bookmark-delete', function (e) {
    console.log('deleting-item');
    const bookmarkIndex = getBookmarkIndex(e.currentTarget);
    deleteBookmark(bookmarkIndex);
    renderBookmarkList();
    // $(this).closest('li').remove();
  });
}

function returnSelectedValue() {
  $('#bookmarkRating').change('.sortByRating', function(e) {
    console.log(e.target.value);
    let targetRating = parseInt(e.target.value);
    var filteredList = LIBRARY.filter(function (item) { return item.rating === targetRating; });
    renderBookmarkList(filteredList);
  }
  );
}


function handleBookmarks() {
  renderBookmarkList();
  handleNewBookmarkSubmit();
  handleBookmarkExpand();
  handleBookmarkCollapse();
  handleBookmarkDelete();
  returnSelectedValue();
}

$(handleBookmarks);