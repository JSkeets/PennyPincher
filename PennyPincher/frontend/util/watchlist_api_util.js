export const fetchWatchlist = id =>
  $.ajax({
    method: "GET",
    url: `/watchlists/${id}`
  });

export const updateWatchlist = ticker => 
$.ajax({
      method: "PATCH",
      url: `/watchlists/${ticker.id}/`,
      data: {ticker}
   });

export const deleteWatchlist = ticker => 
$.ajax({
      method: "PATCH",
      url: `/watchlists/${ticker.id}/`,
      data: {ticker}
   });

