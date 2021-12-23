class Song < ApplicationRecord
  belongs_to :user
  belongs_to :genre
  has_many :favorites

  validates :genre_id, presence: true
end
