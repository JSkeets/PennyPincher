export const fetchComments = ticker =>
  $.ajax({
    method: "GET",
    url: `/comments/`,
    data: { ticker },
    success: function(data) {
      return data;
    },
    error: function(data) {
      return data;
    }
  });

export const createComment = comment =>
  $.ajax({
    method: "POST",
    url: `/comments/`,
    data: { comment }
  });
