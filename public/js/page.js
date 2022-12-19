function simpleTemplating(data) {
  var html = '<ul>';
  $.each(data, function (index, item) {
    html += '<li>' + item + '</li>';
  });
  html += '</ul>';
  return html;
}

$('#pagination-container').pagination({
  dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  pageSize: 10,
  pageRange: null,
  showPageNumbers: true,
  callback: function (data, pagination) {
    // template method of yourself
    var html = template(data);
    dataContainer.html(html);
  },
});
