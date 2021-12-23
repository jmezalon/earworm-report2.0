class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :img_url, :genre_id
  belongs_to :user
  has_many :favorites
end
