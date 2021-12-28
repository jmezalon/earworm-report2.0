class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :song_id, :user_id
end
