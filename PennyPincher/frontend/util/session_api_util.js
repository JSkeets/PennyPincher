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
    //When we get 200, this function should execute
    window.location.href = "/#/thankyou";
  }
  })
);

export const resetEmail = (user) => (
  $.ajax({
    method:"POST",
    url: "/password_resets",
    data: {user},
    success: function(response) {
      window.location.href ="/#/emailsent";
    }
  })
);

export const resetPassword = (user) => {
return (
  $.ajax({
    method:"PUT",
    url: "/password_resets/:id",
    data: {user},
    success: function(response) {
      window.location.href ="/#/login";
    }
  })
);
};