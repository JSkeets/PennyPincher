
@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :user_id, :body, :id
    json.created_at time_ago_in_words(comment.created_at)
  end
end
