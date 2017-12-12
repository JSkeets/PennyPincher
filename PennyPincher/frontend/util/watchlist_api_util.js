export const fetchWatchlist = id =>
  $.ajax({
    method: "GET",
    url: `/watchlists/${id}`
  });

export const updateWatchlist = ticker => $.ajax({
           method: "GET",
           url: `/watchlists/${ticker.id}/edit`,
           data: {ticker}
         });

