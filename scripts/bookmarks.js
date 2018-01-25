'use strict';

// const bookmarkList = (function(){

//   function generateBookmarkElement(bookmark) {
//     let bookmarkTitle = '<span class="bookmark-title">
//     }
// })

// $(function(){ 

  // $('#js-bookmark-form').submit(function (event) {
  //   event.preventDefault();

  //   const newBookmarkTitle = $('.js-bookmark-title-entry').val();
  //   $('.js-bookmark-title-entry').val('');

  //   const newBookmarkURL = $('.js-bookmark-url-entry').val();
  //   $('.js-bookmark-url-entry').val('');

  //   const newBookmarkDescription = $('.js-bookmark-description-entry').val();
  //   $('.js-bookmark-description-entry').val('');

  //   const newBookmarkRating = $('.js-bookmark-rating-entry').val();
  //   $('.js-bookmark-rating-entry').val('');

// $('.bookmark-list').append(
//     `<li>
//       <h3><span class="the-bookmark-title">${newBookmarkTitle}</span></h3>
//       <div>
//       <div>
//         <span class="the-bookmark-rating">Rating: ${newBookmarkRating}</span>
//       </div>
//       <div class="expanded-view">
//         <div>
//         <a href=${newBookmarkURL}><span class="the-bookmark-url">${newBookmarkURL}</span>
//         </a></div>
//         <div>
//         <span class="the-bookmark-description">${newBookmarkDescription}</span>
//         </div>
//       </div>
//       <div class="bookmark-controls">
//         <button class="bookmark-expand">
//           <span class="expand-button">Detailed View On</span>
//         </button>
//          <button class="bookmark-collapse">
//           <span class="collapse-button">Detailed View Off</span>
//         </button>
//         <button class="bookmark-delete">
//           <span class="delete-button">DELETE BOOKMARK</span>
//         </button>
//       </div>
//     </li>`);
// });

$('.bookmark-list').on('click', '.bookmark-delete', function(e) {
  console.log('deleting-item');
  $(this).closest('li').remove();
});

$('.bookmark-list').on('click', '.bookmark-expand', function(e) {
  console.log('I am trying');
  $(e.currentTarget).closest('li').find('.expanded-view').show();
});

$('.bookmark-list').on('click', '.bookmark-collapse', function (e) {
  console.log('I am trying');
  $(e.currentTarget).closest('li').find('.expanded-view').hide();
});

// $('.bookmark-list').on('click', '.bookmark-expand', function (e) {
//   $('.the-bookmark-url, .expanded-view').show();
// });


