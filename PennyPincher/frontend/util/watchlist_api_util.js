export const fetchWatchlist = id =>
  $.ajax({
    method: "GET",
    url: `/watchlists/${id}`,
    success: function (data){
      return data;
    },
    error: function(data){
      return data;
    }
  });

export const updateWatchlist = ticker =>
  $.ajax({
        method: "PATCH",
        url: `/watchlists/${ticker.id}/`,
        data: {ticker}
    });

  export const deleteWatchlist = (ticker) =>{
  return ($.ajax({
        method: "DELETE",
        url: `/watchlists/${ticker.userId}/`,
        data: {ticker}
    })
    );
};

