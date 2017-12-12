export const fetchWatchlist = id =>
  $.ajax({
    method: "GET",
    url: `/watchlists/${id}`
  });
