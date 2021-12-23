class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_body, :song_id
  belongs_to :user
end
