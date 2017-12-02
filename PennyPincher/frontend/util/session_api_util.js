export const login = user =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  });

export const createUser = (user) =>(
   $.ajax({
    method: "POST",
    url: "/api/users",
    data: {user},
    success: function(response) {
    console.log("Response is ", response);
    //When we get 200, this function should execute
    window.location.href = "/#/thankyou";
  },
  error: function(error){
    console.log("Error is ", error);
  }
  })
);

export const resetEmail = (user) => (
  $.ajax({
    method:"POST",
    url: "/password_resets",
    data: {user}
  })
);